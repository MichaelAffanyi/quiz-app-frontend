<script setup>
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue";
import {getTimer} from "@/utils/helpers";
import Pagination from "@/components/quizzes/pagination.vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";

const route = useRoute()
const store = useStore()
const props = defineProps(['duration'])
const secondsLeft = ref(Number(props.duration) * 60 * 60)
const emit = defineEmits(['remainingTime'])
const path = computed(() => route.params)

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