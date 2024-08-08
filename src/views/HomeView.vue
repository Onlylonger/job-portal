<script setup>
import OfficialLayout from '@/components/OfficialLayout.vue'
</script>

<template>
  <OfficialLayout>
    <section class="h-[303px] bg-gray-400" v-in="'duration-1000 animate-in slide-in-from-top-full'">
      1
    </section>
    <section
      class="flex h-[452px] items-center justify-center gap-8"
      :class="item % 2 === 0 ? 'bg-gray-400' : 'bg-white'"
      v-for="item in 4"
      :key="item"
    >
      <div
        class="h-[233px] w-[492px] bg-gray-500"
        v-in="'duration-1000 animate-in slide-in-from-left-full'"
      ></div>
      <div
        class="h-[233px] w-[492px] bg-gray-500"
        v-in="'duration-1000 animate-in slide-in-from-right-full'"
      ></div>
    </section>
  </OfficialLayout>
</template>
