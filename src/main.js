import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from "@/router";
import baseButton from '@/components/baseButton.vue'
import store from "@/store";

const app = createApp(App)
app.use(router)
app.use(store)

app.component('base-button', baseButton)
app.mount('#app')
