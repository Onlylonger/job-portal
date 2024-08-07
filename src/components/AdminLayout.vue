<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import { COMPANY_DASHBOARD, COMPANY_OFFICERS, COMPANY_SETTLE } from '@/constants'

const route = useRoute()
const router = useRouter()

const activeIndex = ref(route.name)

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
  <div class="bg-gray-200">
    <NavBar type="admin" />
    <main class="flex h-svh pt-[65px]">
      <el-menu class="h-full w-[160px]" :default-active="activeIndex" @select="handleSelect">
        <el-menu-item v-for="menu in menuList" :key="menu.id" :index="menu.id">
          <el-icon><component :is="menu.icon" /></el-icon>
          <span>{{ menu.name }}</span>
        </el-menu-item>
      </el-menu>
      <slot />
    </main>
  </div>
</template>
