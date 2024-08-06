<script setup>
console.log('HRFirstView')

import { useRouter } from 'vue-router'

const router = useRouter()

router.push({
  name: 'company-login'
})
</script>
