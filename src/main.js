import { createApp } from 'vue'
import App from './App.vue'
import { VueQueryPlugin } from "@tanstack/vue-query";

import './assets/main.css'
import './assets/tailwind.css'

const app = createApp(App)

app.use(VueQueryPlugin)
app.mount('#app')
