<script setup>
const props = defineProps({
  icon: {
    require: true
  },
  title: {
    require: true
  },
  subTitle: {
    require: true
  }
})
</script>

<template>
  <div class="flex items-center gap-4">
    <div
      class="flex h-[80px] w-[80px] items-center justify-center rounded-full border-[1px] border-solid border-[#57aab6]"
    >
      <el-icon class="flex items-center justify-center" size="40" color="#57aab6">
        <component :is="props.icon" />
      </el-icon>
    </div>
    <div>
      <div class="mb-2 text-[16px] font-medium text-[#57aab6]">{{ props.title }}</div>
      <p v-if="typeof props.subTitle === 'string'" class="text-[14px] text-[#666]">
        {{ props.subTitle }}
      </p>
      <template v-if="Array.isArray(props.subTitle)">
        <p v-for="(item, k) in props.subTitle" :key="k" class="text-[14px] text-[#666]">
          {{ item }}
        </p>
      </template>
    </div>
  </div>
</template>
