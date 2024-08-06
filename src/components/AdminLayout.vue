<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUserInfo } from '@/api'
import { useGlobalStore } from '@/stores/global'
import NavBar from '@/components/NavBar.vue'
import { ElMessage } from 'element-plus'
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import { COMPANY_DASHBOARD, COMPANY_OFFICERS, COMPANY_SETTLE } from '@/constants'
import { getToken, jumpLogin } from '@/utils'

const route = useRoute()
const router = useRouter()
const store = useGlobalStore()

const activeIndex = ref(route.name)

onMounted(async () => {
  if (!getToken()) {
    ElMessage.error('请先登录后再尝试访问')
    jumpLogin()
  } else {
    if (!store.global.user) {
      const res = await getUserInfo()
      store.setGlobal({
        permissions: res.permissions,
        roles: res.roles,
        user: res.user
      })
    }
  }
})

const menuList = [
  {
    id: COMPANY_DASHBOARD,
    name: '仪表盘',
    icon: IconMenu
  },
  {
    id: COMPANY_SETTLE,
    name: '佣金结算帖',
    icon: Document
  },
  {
    id: COMPANY_OFFICERS,
    name: '人才库展示',
    icon: Setting
  }
]

const handleSelect = (v) => {
  activeIndex.value = v
  router.push({ name: v })
}
</script>

<template>
  <div class="bg-gray-200" v-if="store.global.user">
    <NavBar type="admin" />
    <main class="flex h-lvh overflow-hidden pt-[65px]">
      <el-menu class="h-full w-[160px]" :default-active="activeIndex" @select="handleSelect">
        <el-menu-item v-for="menu in menuList" :key="menu.id" :index="menu.id">
          <el-icon><component :is="menu.icon" /></el-icon>
          <span>{{ menu.name }}</span>
        </el-menu-item>
      </el-menu>
      <div class="flex w-full overflow-y-auto">
        <div class="w-4/5 p-4">
          <slot />
          <div class="h-6 w-full"></div>
        </div>
        <div class="w-1/5 pr-3">
          <slot name="side" />
        </div>
      </div>
    </main>
  </div>
</template>
