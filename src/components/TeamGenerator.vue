<template>
  <div class="bg-white rounded-xl shadow-sm p-6 mb-16">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Sortear Equipos</h2>

    <button
      @click="generateTeams"
      :disabled="selectedPlayers.length !== 10"
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
    >
      {{ teamsGenerated ? 'Volver a mezclar' : 'Sortear Equipos' }}
    </button>

    <div v-if="teamsGenerated" class="mt-6 grid md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-lg font-medium text-gray-700 mb-3">Equipo A ({{ teamA.length }})</h3>
        <div class="space-y-2">
          <div
            v-for="(player, index) in teamA"
            :key="player.id"
            class="flex items-center p-3 bg-blue-50 rounded-lg"
          >
            <span class="w-6 text-blue-500 font-medium">{{ index + 1 }}.</span>
            <span class="font-medium">{{ player.name }}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-medium text-gray-700 mb-3">Equipo B ({{ teamB.length }})</h3>
        <div class="space-y-2">
          <div
            v-for="(player, index) in teamB"
            :key="player.id"
            class="flex items-center p-3 bg-red-50 rounded-lg"
          >
            <span class="w-6 text-red-500 font-medium">{{ index + 1 }}.</span>
            <span class="font-medium">{{ player.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePlayersStore } from '../stores/players'

const store = usePlayersStore()

// Computed para los datos reactivos
const selectedPlayers = computed(() => store.selectedPlayers)
const teamA = computed(() => store.teamA)
const teamB = computed(() => store.teamB)

const teamsGenerated = computed(() => teamA.value.length === 5 && teamB.value.length === 5)

// Método para generar equipos
const generateTeams = () => {
  store.generateTeams()
}
</script>
