import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from "@/router";
import baseButton from '@/components/baseButton.vue'
import baseBanner from '@/components/baseBanner.vue'
import TheHeader from "@/components/ui/theHeader.vue";
import store from "@/store";

const app = createApp(App)
app.use(router)
app.use(store)

app.component('base-button', baseButton)
app.component('the-header', TheHeader)
app.component('base-banner', baseBanner)
app.mount('#app')
