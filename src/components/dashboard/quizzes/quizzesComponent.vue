<script setup>

import Filters from "@/components/dashboard/quizzes/filters.vue";
import QuizCard from "@/components/dashboard/quizCard.vue";
import {onMounted, ref, watch, provide, readonly} from "vue";
import {getQuizzes} from "@/utils/helpers";
import {quizApi} from "@/utils";

const quizzes = ref([])
const selectedFilters = ref({subject: [], level: []})
const error = ref('')

provide('selectedFilters', readonly(selectedFilters))

onMounted(async () => {
  const {data} = await getQuizzes('/')
  quizzes.value = data
})

const handleSelect = (filter) => {
  // console.log(filter)
  const index = selectedFilters.value[filter[0].toLowerCase()].findIndex(ele => ele === filter[1].toLowerCase())
  if (index === -1) {
    selectedFilters.value[filter[0].toLowerCase()].push(filter[1].toLowerCase())
    return
  }
  selectedFilters.value[filter[0].toLowerCase()].splice(index, 1)
}

watch(selectedFilters.value, async (newValue) => {
  // console.log(newValue)
  try {
    const response = await quizApi.post('/filter-quiz', newValue)
    console.log(response)
    quizzes.value = response?.data?.data
  } catch (e) {
    error.value = e?.response?.data?.error
    setTimeout(() => {
      error.value = ''
    }, 1500)
  }
})
</script>

<template>
  <div class="w-full border-t border-[#CCCCCC] py-14 mt-11">
    <p class="text-center mb-6 error" v-if="!!error">{{error}}</p>
    <div class="flex gap-12">
      <filters @add-to-selected="handleSelect"></filters>
      <section class="w-full grid grid-cols-3 gap-20">
        <quiz-card v-if="quizzes.length > 0" v-for="quiz in quizzes" :quiz="quiz"></quiz-card>
      </section>
    </div>
  </div>
</template>

<style scoped>

</style>