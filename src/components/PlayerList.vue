<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia' 
import { usePlayersStore } from '../stores/players'
import { useThemeStore } from '../stores/theme'
import FutbolIcon from '../components/Icons/FutbolIcon.vue'

// Stores
const playersStore = usePlayersStore()

// Players store
const { players, selectedPlayers, availablePlayers } = storeToRefs(playersStore)
const { togglePlayer, addPlayer } = playersStore

// Theme store
const { isDark, toggleTheme } = useThemeStore()

// Nuevo jugador
const newPlayerName = ref('')

const addNewPlayer = () => {
  if (newPlayerName.value.trim()) {
    addPlayer(newPlayerName.value.trim())
    newPlayerName.value = ''
  }
}
</script>

<template>
   <div class="rounded-lg shadow-sm overflow-hidden bg-white dark:bg-zinc-700 dark:text-white">
    <div class="bg-zinc-600 text-white py-2 px-4 h-13 flex items-center">
      <!-- Contenedor absoluto para centrado perfecto -->
      <div class="absolute left-0 right-0 flex justify-center items-center pointer-events-none">
        <div class="flex items-center">
          <FutbolIcon class="text-zinc-800 bg-white dark:bg-zinc-600 rounded-2xl mr-2" />
          <h1 class="text-xl sm:text-2xl md:text-3xl font-bold dark:text-gray-300">Mezcladito</h1>
          <FutbolIcon class="text-zinc-800 bg-white dark:bg-zinc-600 rounded-2xl ml-2" />
        </div>
      </div>

      <!-- Toggle del tema (simplificado usando el store) -->
      <div class="ml-auto relative z-10">
        <label class="inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            class="sr-only peer" 
            :checked="isDark" 
            @change="toggleTheme"
          >
          <div 
            class="w-9 h-5 rounded-full transition-colors duration-300"
            :class="{
              'bg-blue-500': isDark,
              'bg-zinc-700': !isDark
            }"
          >
            <div 
              class="absolute top-[2px] w-4 h-4 bg-white rounded-full transition-transform duration-300"
              :class="{
                'translate-x-[18px]': isDark,
                'translate-x-[2px]': !isDark
              }"
            ></div>
          </div>
        </label>
      </div>
    </div>


    <div class="p-3 sm:p-4">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-300">Jugadores</h2>
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
    </div>

    <div class="grid grid-cols-3 px-2.5 gap-2">
      <div 
        v-for="player in players" 
        :key="player.id"
        @click="togglePlayer(player.id)"
        :class="{
          'bg-zinc-100 dark:bg-zinc-600': player.selected,
          'cursor-crosshair hover:bg-gray-50 dark:hover:bg-zinc-600': !player.selected,
          'opacity-80': selectedPlayers.length >= 10 && !player.selected
        }"
        class="flex items-center p-1 sm:p-2 rounded transition-colors"
      >
        <div class="flex items-center justify-center w-4 h-4 mr-1 sm:mr-2 border rounded border-gray-300 dark:border-none dark:bg-zinc-500 shrink-0">
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

    <div class="mt-4 pt-2 border-t border-gray-100 dark:border-gray-600">
      <div class="flex px-3 pt-1 pb-3">
        <input 
          v-model="newPlayerName"
          @keyup.enter="addNewPlayer"
          placeholder="Añadir jugador"
          class="flex-1 px-2 py-1 text-xs sm:text-sm border border-gray-300 dark:border-gray-700 rounded-l dark:bg-gray-800 dark:text-zinc-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
        >
        <button 
          @click="addNewPlayer"
          class="px-2 py-1 text-xs sm:text-sm bg-green-500 dark:bg-green-600 text-white font-medium rounded-r hover:bg-green-600 dark:hover:bg-green-700 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>