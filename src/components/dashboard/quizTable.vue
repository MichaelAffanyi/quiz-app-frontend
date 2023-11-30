<script setup>

import {useRouter} from "vue-router";

defineProps(['quizzes'])

const router = useRouter()

const handleClick = (quiz) => {
  // console.log(quiz)
  const link = quiz.title.split(" ").join("-").toLowerCase()
  const id = quiz._id
  router.push(`/quizzes/${id}_${quiz.duration}_${link}`)
}

const navigateToQuestions = (id) => {
  router.push(`/dashboard/profile/${id}/add-question`)
}

</script>

<template>
  <div v-if="quizzes.length < 1" class="w-full h-64 flex items-center justify-center">
    <p class="text-center text-2xl font-semibold text-gray-700">No quizzes yet</p>
  </div>
  <table v-else class="w-full my-10">
    <thead class="border-2 bg-gray-200 text-gray-700 text-lg">
    <tr>
      <th>Quiz Title</th>
      <th>Quiz Duration</th>
      <th>Quiz Status</th>
      <th>Quiz Takes</th>
      <th>Quiz Action</th>
    </tr>
    </thead>
    <tbody class="text-center border-2 rounded-lg">
    <tr v-for="quiz in quizzes" class="border-b-2 hover:bg-gray-50">
      <td class="cursor-pointer" @click="handleClick(quiz)">{{quiz.title}}</td>
      <td>{{quiz.duration}} hour</td>
      <td>{{quiz.status}}</td>
      <td>{{quiz.scores.length}}</td>
      <td>
        <button @click="navigateToQuestions(quiz._id)" class="bg-blue-500 text-white px-4 py-2 rounded-md">Add question</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>