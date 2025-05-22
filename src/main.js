import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'

// Inicializa la aplicación
const app = createApp(App)

// Configura Pinia
const pinia = createPinia()
app.use(pinia)

// Monta la aplicación
app.mount('#app')

