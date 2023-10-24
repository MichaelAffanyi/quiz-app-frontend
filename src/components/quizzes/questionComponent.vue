<script setup>
import {computed, provide, onMounted, ref, watch} from "vue";
import {beforeQuestionsEnter, getTimer} from "@/utils/helpers";
import Pagination from "@/components/quizzes/pagination.vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {useStore} from "vuex";
import SingleQuestion from "@/components/quizzes/singleQuestion.vue";

const store = useStore()
const props = defineProps(['duration'])
const secondsLeft = ref(Number(props.duration) * 60 * 60)
const emit = defineEmits(['remainingTime'])
const selectedAnswer = ref('')

provide('selectedAnswer', selectedAnswer)
// console.log(route.params)
onMounted(() => {
  setInterval(() => {
    secondsLeft.value--
  }, 1000)
})

watch(secondsLeft, (newValue) => {
  emit('remainingTime', getTimer(newValue))
})
onBeforeRouteUpdate(async (to, from, next) => {
  await beforeQuestionsEnter(to, from, next)
  selectedAnswer.value = ""
})

</script>

<template>
  <div class="w-full flex flex-col items-center gap-[192px]">
    <pagination></pagination>
    <single-question></single-question>
  </div>
</template>

<style scoped>

</style>