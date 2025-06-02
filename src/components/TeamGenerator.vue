<script setup>
import { computed } from 'vue'
import { usePlayersStore } from '../stores/players'

const store = usePlayersStore()

const selectedPlayers = computed(() => store.selectedPlayers)
const teamA = computed(() => store.teamA)
const teamB = computed(() => store.teamB)

const teamsGenerated = computed(() => teamA.value.length === 5 && teamB.value.length === 5)

const generateTeams = () => {
  store.generateTeams()
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm p-3 sm:p-4 mb-6 dark:bg-zinc-700 dark:text-white">
    <h2 class="text-base sm:text-lg font-semibold text-gray-800 mb-2 dark:text-gray-300">Sortear Equipos</h2>

    <button
      @click="generateTeams"
      :disabled="selectedPlayers.length !== 10"
      class="w-full px-2 py-1 text-xs sm:text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
    >
      {{ teamsGenerated ? 'Volver a mezclar' : 'Sortear Equipos' }}
    </button>

    <div v-if="teamsGenerated" class="mt-3 grid grid-cols-2 gap-2 sm:gap-4">
      <div>
        <h3 class="text-xs sm:text-sm font-medium text-gray-700 dark:text-zinc-100 mb-1"> Equipo A </h3>
        <div class="space-y-2">
          <div
            v-for="(player, index) in teamA"
            :key="player.id"
            class="flex items-center p-1 sm:p-2 bg-blue-50 dark:bg-blue-400 rounded"
          >
            <span class="w-4 text-xs text-blue-500 dark:text-zinc-100 font-medium shrink-0">{{ index + 1 }}.</span>
            <span class="text-xs sm:text-sm font-medium truncate">{{ player.name }}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xs sm:text-sm font-medium text-gray-700 dark:text-zinc-100 mb-1"> Equipo B </h3>
        <div class="space-y-2">
          <div
            v-for="(player, index) in teamB"
            :key="player.id"
            class="flex items-center p-1 sm:p-2 bg-red-50 dark:bg-red-400 rounded"
          >
            <span class="w-4 text-xs text-red-500 dark:text-zinc-100 font-medium shrink-0">{{ index + 1 }}.</span>
            <span class="text-xs sm:text-sm font-medium truncate">{{ player.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

