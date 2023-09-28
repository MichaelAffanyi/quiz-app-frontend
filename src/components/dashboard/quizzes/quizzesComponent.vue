<script setup>

import Filters from "@/components/dashboard/quizzes/filters.vue";
import QuizCard from "@/components/dashboard/quizCard.vue";
</script>

<template>
  <div class="w-full border-t border-[#CCCCCC] py-14 mt-11 flex gap-12">
    <filters></filters>
    <section class="w-full grid grid-cols-3 gap-20">
      <quiz-card></quiz-card>
      <quiz-card></quiz-card>
      <quiz-card></quiz-card>
      <quiz-card></quiz-card>
      <quiz-card></quiz-card>
      <quiz-card></quiz-card>
      <quiz-card></quiz-card>
      <quiz-card></quiz-card>
      <quiz-card></quiz-card>
      <quiz-card></quiz-card>
    </section>
  </div>
</template>

<style scoped>

</style>