<script setup>
import {computed, provide, onMounted, ref, watch} from "vue";
import {getTimer} from "@/utils/helpers";
import Pagination from "@/components/quizzes/pagination.vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import SingleQuestion from "@/components/quizzes/singleQuestion.vue";

const route = useRoute()
const store = useStore()
const props = defineProps(['duration'])
const secondsLeft = ref(Number(props.duration) * 60 * 60)
const emit = defineEmits(['remainingTime'])
const path = computed(() => route.params)
const selectedAnswer = ref('')

provide('selectedAnswer', selectedAnswer)

onMounted(() => {
  setInterval(() => {
    secondsLeft.value--
  }, 1000)
})

watch(secondsLeft, (newValue) => {
  emit('remainingTime', getTimer(newValue))
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