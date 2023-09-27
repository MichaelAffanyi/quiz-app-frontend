import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from "@/router";
import baseButton from '@/components/baseButton.vue'
import baseBanner from '@/components/baseBanner.vue'
import TheHeader from "@/components/ui/theHeader.vue";
import TheFooter from "@/components/theFooter.vue";
import store from "@/store";
import VueApexCharts from "vue3-apexcharts";
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueApexCharts)
app.use(VCalendar)

app.component('base-button', baseButton)
app.component('the-header', TheHeader)
app.component('base-banner', baseBanner)
app.component('the-footer', TheFooter)
app.mount('#app')
