<script setup>
import FooterBlock from '@/components/FooterBlock.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main class="pt-16">
    <slot />
  </main>
  <FooterBlock />
</template>
