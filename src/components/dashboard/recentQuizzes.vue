<script setup>

import QuizCard from "@/components/dashboard/quizCard.vue";
import {quizApi} from "@/utils";
import {onMounted, ref, watch} from "vue";
import {getQuizzes} from "@/utils/helpers";

const quizzes = ref([])

onMounted(async () =>  {
  const {recentQuizzes} = await getQuizzes('?recent=true')
  quizzes.value = recentQuizzes
})
</script>

<template>
  <div class="w-3/4 p-10 shadow-lg rounded-lg">
    <div class="relative flex justify-between items-center mb-6">
      <h3 class="text-2xl font-semibold text-[#1D2939]">Recent Quizzes</h3>
      <router-link to="/dashboard/profile/quizzes" class="text-[#0267FF] cursor-pointer">See All</router-link>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <quiz-card v-for="quiz in quizzes" is-recent-quiz :quiz="quiz"></quiz-card>
<!--      <quiz-card is-recent-quiz></quiz-card>-->
<!--      <quiz-card is-recent-quiz></quiz-card>-->
    </div>
  </div>
</template>

<style scoped>

</style>