<script setup>
import PlayerList from './components/PlayerList.vue'
import SelectedPlayers from './components/SelectedPlayers.vue'
import TeamGenerator from './components/TeamGenerator.vue'
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <!-- Fondo fijo con blur y detrás del contenido -->
    <div class="fixed inset-0 w-full h-full custom-bg blur-sm z-[-1]"></div>

    <!-- Contenido encima del fondo -->
    <div class="relative z-10 p-2 sm:p-4 md:p-6">
      <div class="max-w-screen-xl mx-auto">
        <header class="mb-3 sm:mb-4 mt-2 sm:mt-3 md:mb-8 text-center">
          <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">⚽ Mezcladito ⚽</h1>
        </header>

        <div class="w-full max-w-full px-1 sm:px-2 md:max-w-2xl mx-auto grid md:grid-cols-1 gap-3 sm:gap-4 md:gap-8">
          <PlayerList />
          <SelectedPlayers />
          <TeamGenerator /> 
        </div>
      </div>
    </div>
  </div>
</template>
