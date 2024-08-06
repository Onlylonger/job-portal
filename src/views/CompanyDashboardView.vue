<script setup>
import AdminLayout from '@/components/AdminLayout.vue'
import { OfferFormDialog } from '@/components/OfferFormDialog'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import entry1Png from '../assets/m-tab-1.png'
import entry2Png from '../assets/m-tab-2.png'
import entry3Png from '../assets/m-tab-3.png'
import entry4Png from '../assets/m-tab-4.png'

const router = useRouter()

const visible = ref(false)

const entryList = [
  {
    img: entry1Png,
    handler() {
      router.push({
        name: 'company-officers'
      })
    }
  },
  {
    img: entry2Png,
    handler() {
      visible.value = true
    }
  },
  {
    img: entry3Png,
    handler() {
      window.alert('已入驻有培训需求，请联系客服进行添加')
    }
  },
  {
    img: entry4Png,
    handler() {
      window.alert('已入驻平台HR，请联系客服下载培训文件')
    }
  }
]

const handleAddGold = () => {
  window.alert('联系管理员增加金币数量')
}
</script>

<template>
  <AdminLayout>
    <el-card class="w-full p-2">
      <template #header>
        <span>快捷入口</span>
      </template>
      <div class="flex w-full flex-nowrap">
        <div class="h-[140px] w-1/4" v-for="(item, key) in entryList" :key="key">
          <img :src="item.img" class="h-full w-[95%] cursor-pointer" @click="item.handler" />
        </div>
      </div>
    </el-card>
    <div
      class="mt-7 h-[440px] w-full bg-[#3e88f1] bg-[url('../assets/bg-data-animate.png')] bg-cover bg-no-repeat pt-12 text-center text-white"
    >
      <h2 class="text-[30px]">倾我平台资源，铸您企业辉煌</h2>
      <p class="mt-5">
        众人抬柴火焰高，人力资源所面临的问题还需要人力资源从业者共同来解决平台数千名HR帮您一起解决招人问题
      </p>
      <p>专注于人才的优化与配置</p>
      <el-button size="large" class="mt-10" @click="visible = true"
        >点我发布“悬赏招聘”职位</el-button
      >
    </div>
    <template #side>
      <el-card class="mt-2 w-full p-2">
        <template #header>
          <span>我的金币数量</span>
          <div class="mt-5 flex justify-between text-sm">
            <span>剩余：xx个</span>
            <el-button link type="primary" @click="handleAddGold">增加金币</el-button>
          </div>
        </template>
      </el-card>
    </template>
  </AdminLayout>
  <OfferFormDialog :visible="visible" @change-visible="(v) => (visible = v)" />
</template>
