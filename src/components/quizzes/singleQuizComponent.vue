<script setup>
import {useRoute, useRouter} from "vue-router";
import {computed, ref, watch} from "vue";
import TimerIcon from "@/assets/quizzes/timerIcon.vue";
import {useStore} from "vuex";
import Notification from "@/assets/quizzes/notification.vue";

const route = useRoute()
const router = useRouter()
const store = useStore()
const params = computed(() => route.params)
const title = computed(() => params.value.title.split('_').at(-1).split("-").join(" "))
const questionNum = computed(() => params.value?.questionId?.split("_").at(-1))
const path = computed(() => route.path)
const isAnswers = computed(() => path.value.split("/").at(-1) === "answers")
const isQuestions = computed(() => params.value?.questionId?.includes("question") ?? false)
const duration = params.value.title.split('_')[1]
const timer = ref(localStorage.getItem('timer') || `${duration.padStart(2, '0')}:00:00`)
const bannerStyle = computed(() => isAnswers.value ? '' : 'justify-self-center')
const gridCols = computed(() => isAnswers.value ? 'grid-cols-2' : 'grid-cols-3')
const toggleShow = ref(false)
const timeout = ref(false)

const getTimer = (time) => {
  if (time === "00:05:00") {
    toggleShow.value = !toggleShow.value
    setTimeout(() => {
      toggleShow.value = !toggleShow.value
    }, 3000)
  }
  timer.value = time
}

const handleSubmit = () => {
  timeout.value = !timeout.value
}

const goBack = () => {
  router.go(-1)
}

</script>

<template>
  <notification :show="toggleShow" class="bg-red-200 text-red-500">
    <div class="w-2 h-2 bg-red-500 rounded-full"></div>
    Less than 5 minutes left
  </notification>
  <notification :show="timeout" class="bg-red-200 text-red-500">
    <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
    Time out. Submitting quiz.
  </notification>
  <the-header v-if="!isAnswers"></the-header>
  <div class="w-full font-semibold p-10 bg-[#0267FF] text-white capitalize grid items-center text-2xl justify-center" :class="gridCols">
    <h3 v-if="isQuestions" class="justify-self-start">{{title}}</h3>
    <button @click="goBack" v-else-if="!isAnswers" class="w-[159px] h-[60px] border border-white rounded-lg justify-self-start">Back</button>
    <h3 v-if="isQuestions && !isAnswers" class="justify-self-center">Question {{questionNum}} of 10</h3>
    <div v-else class="text-4xl flex flex-col" :class="bannerStyle">
      {{title}}
      <span class="text-xs font-normal">Practice Quiz. {{duration}} hour</span>
    </div>
    <div class="justify-self-end">
      <time v-if="isQuestions || isAnswers" class="flex items-center gap-3">
        <timer-icon is-timeer></timer-icon>
        {{timer}}
      </time>
    </div>
  </div>
  <router-view @done="handleSubmit" @remaining-time="getTimer" :duration="duration"></router-view>
</template>

<style scoped>

</style>