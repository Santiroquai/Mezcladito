import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)
  
  // Inicializa desde localStorage o preferencia del sistema
    async function initTheme() {
      return new Promise((resolve) => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
          isDark.value = savedTheme === 'dark'
        } else {
          // Usamos un listener para preferencia del sistema
          const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
          isDark.value = mediaQuery.matches
          // Opcional: listener para cambios futuros
          mediaQuery.addEventListener('change', (e) => {
            isDark.value = e.matches
            applyTheme()
          })
        }
        applyTheme()
        resolve()
      })
    }
  
  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme()
  }
  
  function applyTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  
  return { isDark, toggleTheme, initTheme }
})