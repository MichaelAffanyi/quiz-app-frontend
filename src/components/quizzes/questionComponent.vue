<script setup>
import {onMounted, ref, watch} from "vue";
import {getTimer} from "@/utils/helpers";
import Pagination from "@/components/quizzes/pagination.vue";

const props = defineProps(['duration'])
const secondsLeft = ref(Number(props.duration) * 60 * 60)
const emit = defineEmits(['remainingTime'])

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
  <pagination></pagination>
</template>

<style scoped>

</style>