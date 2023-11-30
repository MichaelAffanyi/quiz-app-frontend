<script setup>
import logs from "@/assets/dashboard/logs.svg"
import quiz from "@/assets/dashboard/quiz.svg"
import subject from "@/assets/dashboard/subject.svg"
import DashboardCard from "@/components/dashboard/dashboardCard.vue";
import Chart from "@/components/dashboard/chart.vue";
import {ref} from "vue";
import RecentQuizzes from "@/components/dashboard/recentQuizzes.vue";
import {useStore} from "vuex";
import QuizTable from "@/components/dashboard/quizTable.vue";
import {getLecturerQuizzes} from "@/utils/helpers";

const store = useStore()
const isLoading = ref(false)

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
const quizzes = ref([])

const user = store.getters.getUser

if (user.role === 'lecturer') {
  isLoading.value = true
  getLecturerQuizzes().then((res) => {
    quizzes.value = res.data
    isLoading.value = false
  })
}
// console.log(store.getters.getUser)

</script>

<template>
  <h1 class="font-semibold text-3xl">Hello {{user.name}}</h1>
  <div class="grid grid-cols-3 mt-12">
    <dashboard-card v-for="card in cards" :key="card.name" :card="card"></dashboard-card>
  </div>
  <div v-if="user.role === 'student'">
    <Chart />
    <div class="w-full flex gap-8 mb-10">
      <div class="w-full rounded-lg shadow-lg">
        <v-date-picker v-model="date" expanded is-range :masks="{weekdays: 'WWW'}" borderless>
        </v-date-picker>
      </div>
      <recent-quizzes></recent-quizzes>
    </div>
  </div>
  <p v-if="isLoading" class="text-center text-2xl font-semibold text-gray-700 my-6">Loading...</p>
  <quiz-table v-if="user.role === 'lecturer' && !isLoading" :quizzes="quizzes"></quiz-table>
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