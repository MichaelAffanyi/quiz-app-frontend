<script setup>
import logs from "@/assets/dashboard/logs.svg"
import quiz from "@/assets/dashboard/quiz.svg"
import subject from "@/assets/dashboard/subject.svg"
import DashboardCard from "@/components/dashboard/dashboardCard.vue";
import Chart from "@/components/dashboard/chart.vue";
import {ref} from "vue";
import RecentQuizzes from "@/components/dashboard/recentQuizzes.vue";

const cards = [
  {
    name: 'log',
    title: 'Quiz log',
    image: logs,
    desc: 'Review Your quiz results'
  },
  {
    name: 'quiz',
    title: 'Quizzes',
    image: quiz,
    desc: 'Expand your knowledge'
  },
  {
    name: 'subject',
    title: '100+ subjects',
    image: subject,
    desc: 'Challenge Your Knowledge'
  },
]
const date = ref({
  start: new Date(Date.now()),
  end: new Date(Date.now() + (1000 * 60 * 60 * 24 * 7))
})

</script>

<template>
  <h1 class="font-semibold text-3xl">Hello John Doe</h1>
  <div class="grid grid-cols-3 mt-12">
    <dashboard-card v-for="card in cards" :key="card.name" :card="card"></dashboard-card>
  </div>
  <Chart />
  <div class="w-full flex gap-8 mb-10">
    <div class="w-full rounded-lg shadow-lg">
      <v-date-picker v-model="date" expanded is-range :masks="{weekdays: 'WWW'}" borderless>
      </v-date-picker>
    </div>
    <recent-quizzes></recent-quizzes>
  </div>
</template>

<style scoped>
:deep(.apexcharts-legend-series) {
  display: flex;
  gap: 8px;
}
:deep(.apexcharts-legend) {
  right: 0;
  bottom: 100px;
}
:deep(.vc-container) {
  width: 100%;
  height: 100%;
}
</style>