<script setup>
import { ref, onMounted } from 'vue'
import SplashScreen from './components/SplashScreen.vue'
import { useThemeStore } from './stores/theme'
import PlayerList from './components/PlayerList.vue'
import SelectedPlayers from './components/SelectedPlayers.vue'
import TeamGenerator from './components/TeamGenerator.vue'
import MeFooter from './components/MeFooter.vue'

const themeStore = useThemeStore()
const appLoaded = ref(false)

onMounted(() => {
  themeStore.initTheme()
  setTimeout(() => {
    appLoaded.value = true
  }, 100)
})
</script>

<template>
  <div class="relative">
    <SplashScreen />

    <div v-show="appLoaded" class="flex flex-col min-h-screen">
      <!-- Fondo desenfocado -->
      <div class="bg-gray-600 fixed top-0 left-0 w-screen h-screen z-[-1]">
        <div class="w-full h-full custom-bg blur-xs"></div>
      </div>

      <!-- Contenido principal -->
      <main class="flex-grow p-4 sm:p-4 md:p-6 w-full">
        <div class="max-w-screen-xl mx-auto">
          <div class="grid gap-3 sm:gap-4 md:gap-5 w-full md:max-w-2xl mx-auto">
            <PlayerList />
            <SelectedPlayers />
            <TeamGenerator />
          </div>
        </div>
      </main>

      <MeFooter />
    </div>
  </div>
</template>