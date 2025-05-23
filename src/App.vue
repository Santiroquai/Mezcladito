<script setup>
import PlayerList from './components/PlayerList.vue'
import SelectedPlayers from './components/SelectedPlayers.vue'
import TeamGenerator from './components/TeamGenerator.vue'
</script>

<template>
  
  <div class="bg-green-600 relative min-h-screen overflow-x-hidden">

    <div
      class="absolute inset-0 bg-[url('/grass.jpg')] bg-cover bg-center bg-fixed blur-sm">
    </div>
    
    <div class="relative p-4 md:p-6">

      <div class="max-w-screen-xl mx-auto">

        <header class="mb-4 mt-3 md:mb-8 text-center">
          <h1 class="text-2xl md:text-3xl font-bold text-white mb-2">⚽ Mezcladito ⚽</h1>
        </header>

        <div class="max-w-full px-2 md:max-w-2xl mx-auto grid md:grid-cols-1 gap-4 md:gap-8">
          <PlayerList />
          <SelectedPlayers />
          <TeamGenerator /> 
        </div>

      </div>

    </div>
  </div>

</template>

