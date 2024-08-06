<script setup>
import cn from 'classnames'

defineProps({
  reverse: {
    type: Boolean,
    default: false
  },
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="py-24" :class="reverse ? 'bg-white' : 'bg-[#f5f5f5]'">
    <div
      class="mx-auto flex h-full w-[1200px] items-center justify-around"
      :class="reverse ? 'flex-row' : 'flex-row-reverse'"
    >
      <div class="w-max-[500px] flex flex-shrink-0 justify-center">
        <img
          :src="item.img"
          :style="`max-width: ${item.width}px; max-height: ${item.height}px`"
          alt="banner-img"
          v-in="
            cn([
              'duration-1000',
              'animate-in',
              reverse ? 'slide-in-from-left-full' : 'slide-in-from-right-full'
            ])
          "
        />
      </div>
      <div
        class="w-max-[500px]"
        v-in="
          cn([
            'duration-1000',
            'animate-in',
            reverse ? 'slide-in-from-right-full' : 'slide-in-from-left-full'
          ])
        "
      >
        <h2 class="pb-4 text-4xl text-[#333]">{{ item.title }}</h2>
        <p
          class="mt-4 flex items-center text-lg font-normal text-[#333]"
          v-for="(sub, subIndex) in item.subList"
          :key="subIndex"
        >
          <i class="mr-4 inline-block h-2 w-2 rotate-45 bg-[#f86900]"></i> {{ sub }}
        </p>
      </div>
    </div>
  </section>
</template>
