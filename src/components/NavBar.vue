<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'
import { cva } from 'class-variance-authority'

const router = useRouter()

const props = defineProps({
  type: {
    type: String,
    default: 'official'
  }
})

const navContainerVar = cva('', {
  variants: {
    type: {
      official: 'mx-auto flex h-16 w-[1200px] items-center justify-between gap-4 px-4',
      admin: 'flex h-16 items-center justify-between gap-4 px-4'
    }
  }
})

const CHANGE_PASSWORD = 'change-password'
const LOGOUT = 'logout'

const dropList = [
  {
    id: CHANGE_PASSWORD,
    name: '修改密码'
  },
  {
    id: LOGOUT,
    name: '退出登录'
  }
]

const handleCommand = (command) => {
  switch (command) {
    case CHANGE_PASSWORD:
      //
      break
    case LOGOUT:
      sessionStorage.removeItem('token')
      router.push({
        name: 'company-login'
      })
      break

    default:
      break
  }
}
</script>

<template>
  <header class="fixed w-full border-x-slate-900 bg-white">
    <div :class="navContainerVar({ type: props.type })">
      <!-- <img class="shrink-0" src="./assets/logo.png" alt="logo" width="50" height="50" /> -->
      <div class="h-[50px] w-[50px] shrink-0 rounded-full bg-gray-400" width="50" height="50"></div>
      <nav class="ml-20 flex flex-1 gap-4">
        <RouterLink to="/" class="text-cyan-600hover:text-cyan-600">首页</RouterLink>
        <RouterLink to="/service" class="hover:text-cyan-600">产品功能</RouterLink>
        <RouterLink to="/about" class="hover:text-cyan-600">关于我们</RouterLink>
      </nav>
      <nav v-if="props.type === 'official'" class="flex gap-4">
        <RouterLink to="/company" class="hover:text-cyan-600">前往企业版</RouterLink>
        <RouterLink to="/hr" class="hover:text-cyan-600">前往HR版</RouterLink>
      </nav>
      <div v-else>
        <el-dropdown @command="handleCommand">
          <span class="text-blue-400">
            balabala
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in dropList" :key="item.id" :command="item.id">{{
                item.name
              }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
