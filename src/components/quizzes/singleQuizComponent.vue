<script setup>
import {useRoute, useRouter} from "vue-router";
import {computed, onDeactivated, onMounted, onUnmounted, ref, watch} from "vue";
import TimerIcon from "@/assets/quizzes/timerIcon.vue";
import {useStore} from "vuex";

const route = useRoute()
const router = useRouter()
const store = useStore()
const params = computed(() => route.params)
const title = computed(() => params.value.title.split('_').at(-1).split("-").join(" "))
const questionNum = computed(() => params.value.questionId.split("_").at(-1))
const path = computed(() => route.path)
const isAnswers = path.value.split("/").at(-1) === "answers"
const isQuestions = ref(params.value?.questionId?.includes("question") ?? false)
const duration = params.value.title.split('_')[1]
const timer = ref(localStorage.getItem('timer') || `${duration.padStart(2, '0')}:00:00`)


const getTimer = (time) => {
  timer.value = time
}

const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <the-header v-if="!isAnswers"></the-header>
  <div class="w-full font-semibold p-10 bg-[#0267FF] text-white capitalize grid grid-cols-3 items-center text-2xl justify-center" :class="{'grid-cols-2': isAnswers}">
    <h3 v-if="isQuestions" class="justify-self-start">{{title}}</h3>
    <button @click="goBack" v-else-if="!isAnswers" class="w-[159px] h-[60px] border border-white rounded-lg justify-self-start">Back</button>
    <h3 v-if="isQuestions" class="justify-self-center">Question {{questionNum}} of 10</h3>
    <div v-else class="text-4xl flex flex-col justify-self-center">
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
  <router-view @remaining-time="getTimer" :duration="duration"></router-view>
</template>

<style scoped>

</style>