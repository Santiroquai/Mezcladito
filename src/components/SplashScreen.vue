<script setup>
import { ref, onMounted } from 'vue'
import autoAnimate from '@formkit/auto-animate'

const root = ref()
const isVisible = ref(true)

onMounted(() => {
  autoAnimate(root.value, {
    duration: 800,
    easing: 'ease-in-out'
  })
  
  setTimeout(() => {
    isVisible.value = false
  }, 2200) 
})
</script>

<template>
  <div
    ref="root"
    v-show="isVisible"
    class="fixed inset-0 z-[9999] bg-green-400 dark:bg-gray-900 flex items-center justify-center"
  >
    <div class="animate-[bounce_1s_infinite]">
      <img 
        src="/futbol-regular-bl.svg" 
        class="w-26 h-26 animate-[spin_2s_linear_infinite] hover:animate-ping block"
        alt="Mezcladito Logo"
      >
    </div>
  </div>
</template>