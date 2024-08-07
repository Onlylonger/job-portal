<script setup>
import OfficialLayout from '@/components/OfficialLayout.vue'
import { setToken } from '@/utils'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = () => {
  setToken('test')
  router.push({
    name: 'company-dashboard'
  })
}
</script>

<template>
  <OfficialLayout>
    <div class="h-[700px] bg-gray-100 pt-20">
      <section
        class="mx-auto flex h-[550px] w-[1200px] items-center justify-center bg-white shadow-slate-900"
      >
        <button class="bg-slate-950 px-5 py-2 text-white" @click="handleLogin">
          Company login
        </button>
      </section>
    </div>
  </OfficialLayout>
</template>
