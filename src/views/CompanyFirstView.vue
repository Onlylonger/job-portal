<script setup>
import { useRouter } from 'vue-router'
import { getToken } from '@/utils'
import { COMPANY_DASHBOARD } from '@/constants'

const router = useRouter()
console.log(getToken())

if (!getToken()) {
  router.push({
    name: 'company-login'
  })
} else {
  router.push({
    name: COMPANY_DASHBOARD
  })
}
</script>

<template>?</template>
