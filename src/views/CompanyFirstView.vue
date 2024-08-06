<script setup>
import { useRouter } from 'vue-router'
import { getToken } from '@/utils'

const router = useRouter()
console.log(getToken())

if (!getToken()) {
  router.push({
    name: 'company-login'
  })
} else {
  router.push({
    name: 'company-index'
  })
}
</script>

<template>?</template>
