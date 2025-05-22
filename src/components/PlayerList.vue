<script setup>
import { ref } from 'vue'
import { usePlayersStore } from '../stores/players'

const { players, selectedPlayers, availablePlayers, togglePlayer, addPlayer } = usePlayersStore()
const newPlayerName = ref('')

const addNewPlayer = () => {
  if (newPlayerName.value.trim()) {
    addPlayer(newPlayerName.value.trim())
    newPlayerName.value = ''
  }
}
</script>  

<template>
  <div class="bg-white rounded-xl shadow-sm p-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold text-gray-800">Jugadores</h2>
      <span class="text-sm text-gray-500">{{ availablePlayers.length }} disponibles</span>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
      <div 
        v-for="player in players" 
        :key="player.id"
        @click="togglePlayer(player.id)"
        :class="{
          'bg-gray-100': player.selected,
          'cursor-pointer hover:bg-gray-50': !player.selected,
          'opacity-50': selectedPlayers.length >= 10 && !player.selected
        }"
        class="flex items-center p-3 rounded-lg transition-colors"
      >
        <div class="flex items-center justify-center w-6 h-6 mr-3 border rounded border-gray-300">
          <svg 
            v-if="player.selected"
            xmlns="http://www.w3.org/2000/svg" 
            class="h-4 w-4 text-green-500" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <span class="font-medium">{{ player.name }}</span>
      </div>
    </div>

    <div class="mt-6 pt-4 border-t border-gray-100">
      <div class="flex">
        <input 
          v-model="newPlayerName"
          @keyup.enter="addNewPlayer"
          placeholder="Añadir nuevo jugador"
          class="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
        <button 
          @click="addNewPlayer"
          class="px-4 py-2 bg-green-500 text-white font-medium rounded-r-lg hover:bg-green-600 transition-colors"
        >
          Añadir
        </button>
      </div>
    </div>
  </div>
</template>

