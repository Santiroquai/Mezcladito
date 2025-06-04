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
  }, 2500) 
})
</script>

<template>
  <div
    ref="root"
    v-show="isVisible"
    class="fixed inset-0 z-[9999] bg-green-400 dark:bg-gray-900 flex items-center justify-center"
  >
    
    <div class="animate-[bounce_2s_infinite]">
      <img 
        src="/futbol-regular-ng.svg" 
        class="w-32 h-32 animate-[spin_3s_linear_infinite] hover:animate-ping block dark:hidden"
        alt="Mezcladito Logo (Light)"
      >
      <img 
        src="/futbol-regular-bl.svg" 
        class="w-32 h-32 animate-[spin_3s_linear_infinite] hover:animate-ping hidden dark:block"
        alt="Mezcladito Logo (Dark)"
      >
    </div>
  </div>
</template>