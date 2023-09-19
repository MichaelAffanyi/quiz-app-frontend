import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from "@/router";
import baseButton from '@/components/baseButton.vue'

const app = createApp(App)
app.use(router)

app.component('base-button', baseButton)
app.mount('#app')
