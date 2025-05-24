<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia' // Importación esencial
import { usePlayersStore } from '../stores/players'

// Primero obtenemos la instancia completa del store
const store = usePlayersStore()

// Luego extraemos lo necesario manteniendo reactividad
const { players, selectedPlayers, availablePlayers } = storeToRefs(store)
const { togglePlayer, addPlayer } = store // Las acciones no necesitan storeToRefs

const newPlayerName = ref('')

const addNewPlayer = () => {
  if (newPlayerName.value.trim()) {
    addPlayer(newPlayerName.value.trim())
    newPlayerName.value = ''
  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm p-2 sm:p-4">
    
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-base sm:text-lg font-semibold text-gray-800">Jugadores</h2>
      <div class="flex items-center gap-1">
        <span class="text-xs text-gray-500">{{ availablePlayers.length }}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-3 w-3 text-gray-500" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          fill="none"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="1.5" 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
          />
        </svg>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-1">
      <div 
        v-for="player in players" 
        :key="player.id"
        @click="togglePlayer(player.id)"
        :class="{
          'bg-gray-100': player.selected,
          'cursor-pointer hover:bg-gray-50': !player.selected,
          'opacity-50': selectedPlayers.length >= 10 && !player.selected
        }"
        class="flex items-center p-1 sm:p-2 rounded transition-colors"
      >
        <div class="flex items-center justify-center w-4 h-4 mr-1 sm:mr-2 border rounded border-gray-300 shrink-0">
          <svg 
            v-if="player.selected"
            xmlns="http://www.w3.org/2000/svg" 
            class="h-3 w-3 text-green-500" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <span class="text-xs sm:text-sm font-medium truncate">{{ player.name }}</span>
      </div>
    </div>

    <div class="mt-4 pt-2 border-t border-gray-100">
      <div class="flex">
        <input 
          v-model="newPlayerName"
          @keyup.enter="addNewPlayer"
          placeholder="Añadir jugador"
          class="flex-1 px-2 py-1 text-xs sm:text-sm border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
        >
        <button 
          @click="addNewPlayer"
          class="px-2 py-1 text-xs sm:text-sm bg-green-500 text-white font-medium rounded-r hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>