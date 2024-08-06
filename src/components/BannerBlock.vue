<script setup>
//
</script>

<template>
  <section class="relative bg-gray-400" v-in="'duration-1000 animate-in slide-in-from-top-full'">
    <img src="../assets/banner.jpg" class="h-auto w-full" alt="banner" />
    <div class="absolute bottom-0 left-1/2 top-0 w-[1200px] -translate-x-1/2">
      <slot />
    </div>
  </section>
</template>
