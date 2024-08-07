<script setup>
import OfficialLayout from '@/components/OfficialLayout.vue'
</script>

<template>
  <OfficialLayout>
    <section class="h-[303px] bg-gray-400 duration-1000 animate-in slide-in-from-top-full">
      1
    </section>
    <section class="h-[452px]">1</section>
    <section class="h-[452px] bg-gray-400">1</section>
    <section class="h-[542px]" v-intersect="{ true: ['foo'] }">1</section>
  </OfficialLayout>
</template>
