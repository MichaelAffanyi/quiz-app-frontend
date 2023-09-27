<script setup>

import QuizCard from "@/components/dashboard/quizCard.vue";
</script>

<template>
  <div class="w-3/4 bg-blue-500 p-10">
    <div class="relative flex justify-between items-center">
      <h3>Recent Quizzes</h3>
      <span>See All</span>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <quiz-card is-recent-quiz></quiz-card>
      <quiz-card is-recent-quiz></quiz-card>
      <quiz-card is-recent-quiz></quiz-card>
    </div>
  </div>
</template>

<style scoped>

</style>