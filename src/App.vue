<script setup>
import PlayerList from './components/PlayerList.vue'
import SelectedPlayers from './components/SelectedPlayers.vue'
import TeamGenerator from './components/TeamGenerator.vue'
import MeFooter from './components/MeFooter.vue'
import { onMounted } from 'vue'
import { useThemeStore } from './stores/theme'


const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})

</script>

<template>
  
  <div class="flex flex-col min-h-screen">
    
    <!-- Fondo desenfocado detrás -->
    <div class="fixed top-0 left-0 w-screen h-screen z-[-1]">
      <div class="w-full h-full custom-bg blur-xs"></div>
    </div>

    <!-- Contenido principal que crece para empujar el footer -->
    <main class="flex-grow p-4 sm:p-4 md:p-6 w-full">
      <div class="max-w-screen-xl mx-auto">
        <!-- Contenido en grid -->
        <div class="grid gap-3 sm:gap-4 md:gap-5 w-full md:max-w-2xl mx-auto">
          <PlayerList />
          <SelectedPlayers />
          <TeamGenerator />
        </div>
      </div>
    </main>

    <MeFooter />
  </div>
</template>