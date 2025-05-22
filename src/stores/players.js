import { defineStore } from 'pinia'

export const usePlayersStore = defineStore('players', {
  state: () => ({
    players: [
      { id: 1, name: 'Pablo', selected: false },
      { id: 2, name: 'Chapu', selected: false },
      { id: 3, name: 'Viale', selected: false },
      { id: 4, name: 'Emi', selected: false },
      { id: 5, name: 'Feli', selected: false },
      { id: 6, name: 'Samu', selected: false },
      { id: 7, name: 'More', selected: false },
      { id: 8, name: 'Toto', selected: false },
      { id: 9, name: 'Javi', selected: false },
      { id: 10, name: 'Fede', selected: false },
      { id: 11, name: 'Salva', selected: false },
      { id: 12, name: 'Santi', selected: false },
      { id: 13, name: 'Euge', selected: false },
      { id: 14, name: 'Nico', selected: false },
      { id: 15, name: 'Tuqui', selected: false },
    ],
    teamA: [],
    teamB: []
  }),

  getters: {
    selectedPlayers: (state) => {
      return state.players.filter(p => p.selected)
    },
    availablePlayers: (state) => {
      return state.players.filter(p => !p.selected)
    }
  },

  actions: {
    togglePlayer(id) {
      const player = this.players.find(p => p.id === id)
      if (player) {
        // Solo permite seleccionar hasta 10
        const currentlySelected = this.players.filter(p => p.selected)
        if (currentlySelected.length < 10 || player.selected) {
          player.selected = !player.selected
        }
      }
    },

    addPlayer(name) {
      this.players.push({
        id: Date.now(),
        name,
        selected: false
      })
    },

    removePlayer(id) {
      const index = this.players.findIndex(p => p.id === id)
      if (index !== -1) {
        this.players.splice(index, 1)
      }
    },

    generateTeams() {
      const selected = this.players.filter(p => p.selected)
      if (selected.length !== 10) return

      const shuffled = [...selected].sort(() => Math.random() - 0.5)
      this.teamA = shuffled.slice(0, 5)
      this.teamB = shuffled.slice(5, 10)
    },

    resetTeams() {
      this.teamA = []
      this.teamB = []
    }
  }
})
