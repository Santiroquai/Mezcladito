<script setup>
import { computed } from 'vue'
import { usePlayersStore } from '../stores/players'
import ShareIcon from './Icons/ShareIcon.vue'

const store = usePlayersStore()

const selectedPlayers = computed(() => store.selectedPlayers)
const teamA = computed(() => store.teamA)
const teamB = computed(() => store.teamB)

const teamsGenerated = computed(() => teamA.value.length === 5 && teamB.value.length === 5)

const generateTeams = () => {
  store.generateTeams()
}

const whatsappMessage = computed(() => {
  const teamAText = teamA.value.map((p, i) => `${i + 1}. ${p.name}`).join('\n')
  const teamBText = teamB.value.map((p, i) => `${i + 1}. ${p.name}`).join('\n')

  return `🏆 *Equipos* 🏆\n\n🟦 *Equipo A:*\n${teamAText}\n\n🟥 *Equipo B:*\n${teamBText}`
})

const whatsappLink = computed(() =>
  'https://wa.me/?text=' + encodeURIComponent(whatsappMessage.value)
)

</script>

<template>
  <div class="bg-white rounded-lg shadow-sm p-3 sm:p-4 mb-9 dark:bg-zinc-700 dark:text-white">
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

      <div class="col-span-2 flex justify-end mt-2 mx-2 sm:mt-4">
        <a
          v-if="teamsGenerated"
          :href="whatsappLink"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 text-blue-500 font-medium hover:underline transition"
        >
          <ShareIcon />
          Compartir
        </a>
      </div>

    </div>
  </div>

</template>

