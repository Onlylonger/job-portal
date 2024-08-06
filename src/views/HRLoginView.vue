<script setup>
import FooterBlock from '@/components/FooterBlock.vue'
import { setToken } from '@/utils'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = () => {
  setToken('test')
  router.push({
    name: 'hr-index'
  })
}
</script>

<template>
  <div class="h-[700px] bg-gray-100 pt-20">
    <section
      class="mx-auto flex h-[550px] w-[1200px] items-center justify-center bg-white shadow-slate-900"
    >
      <button class="bg-slate-950 px-5 py-2 text-white" @click="handleLogin">HR login</button>
    </section>
  </div>
  <FooterBlock />
</template>
