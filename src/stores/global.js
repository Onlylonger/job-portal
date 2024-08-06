import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const global = ref({})

  const setGlobal = (data) => {
    global.value = {
      ...global.value,
      ...data
    }
  }

  return { global, setGlobal }
})
