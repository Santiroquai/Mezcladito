<script setup>
import { usePlayersStore } from '../stores/players'

const store = usePlayersStore()

const togglePlayerSelection = (id) => {
  if (store.selectedPlayers.length <= 10) {
    store.togglePlayer(id)
  }
}
</script>

<template>
  <div class="bg-zinc-100 rounded-lg shadow-sm p-2 sm:p-4">
    <h2 class="text-base sm:text-lg font-semibold text-gray-800 mb-2">Mezcladito de hoy ({{ store.selectedPlayers.length }}/10)</h2>
    
    <div v-if="store.selectedPlayers.length > 0" class="grid grid-cols-2 gap-1">
      <div 
        v-for="(player, index) in store.selectedPlayers" 
        :key="player.id"
        @click="togglePlayerSelection(player.id)"
        class="flex items-center p-1 sm:p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors group"
      >
        <span class="w-4 text-xs text-gray-500 font-medium shrink-0">{{ index + 1 }}.</span>
        <span class="text-xs sm:text-sm font-medium text-gray-800 truncate">{{ player.name }}</span>
        <button 
          @click.stop="store.removePlayer(player.id)"
          class="ml-auto p-0.5 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
          title="Quitar jugador"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>

    <div v-else class="text-center py-4 text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <p class="text-xs sm:text-sm">Aun no se han agregado jugadores</p>
    </div>
    
    <div v-if="store.selectedPlayers.length === 10" class="mt-4 pt-2 border-t border-gray-100 text-center">
      <div class="inline-flex items-center px-2 py-1 text-xs sm:text-sm bg-green-500 text-white font-medium rounded">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        Se juega!!!
      </div>
    </div>
  </div>
</template>