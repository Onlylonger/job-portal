<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed w-full bg-white">
    <div class="mx-auto flex h-16 w-[1200px] items-center justify-between gap-4 px-4">
      <!-- <img class="shrink-0" src="" alt="logo" width="50" height="50" /> -->
      <div class="h-[50px] w-[50px] shrink-0 rounded-full bg-gray-400" width="50" height="50"></div>
      <nav class="ml-20 flex flex-1 gap-4">
        <RouterLink to="/" class="hover:text-cyan-600">首页</RouterLink>
        <RouterLink to="/service" class="hover:text-cyan-600">产品功能</RouterLink>
        <RouterLink to="/about" class="hover:text-cyan-600">关于我们</RouterLink>
      </nav>
      <nav class="flex gap-4">
        <RouterLink to="/company" class="hover:text-cyan-600">前往企业版</RouterLink>
        <RouterLink to="/hr" class="hover:text-cyan-600">前往HR版</RouterLink>
      </nav>
    </div>
  </header>

  <main class="pt-16">
    <RouterView />
  </main>
</template>
