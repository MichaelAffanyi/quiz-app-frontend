<script setup>
import {useRoute, useRouter} from "vue-router";
import {computed, onDeactivated, onMounted, onUnmounted, ref, watch} from "vue";
import TimerIcon from "@/assets/quizzes/timerIcon.vue";
import {useStore} from "vuex";

const route = useRoute()
const router = useRouter()
const store = useStore()
const params = route.params.title.split('_')
const title = computed(() => params.at(-1).split("-").join(" "))
const questionNum = computed(() => route.params.questionId.split("_").at(-1))
// const {total} = ref(store.getters.getQuestion).value
const path = computed(() => route.path)
const isQuestions = ref(false)
const duration = params[1]
const timer = ref(localStorage.getItem('timer') || `${duration.padStart(2, '0')}:00:00`)

onMounted(() => {
  if(path.value.split('/').at(-1).includes('question')) {
    isQuestions.value = true
    return
  }
  isQuestions.value = false
})

watch(path, (newValue) => {
  if(newValue.split('/').at(-1).includes('question')) {
    isQuestions.value = true
    return
  }
  isQuestions.value = false
})

const getTimer = (time) => {
  timer.value = time
}

const goBack = () => {
  router.go(-1)
}

// window.addEventListener('popstate', (e) => {
//   console.log(e)
//   console.log(history)
//   history.pushState(null, null, window.location.href)
// })
</script>

<template>
  <the-header></the-header>
  <div class="w-full font-semibold p-10 bg-[#0267FF] text-white capitalize grid grid-cols-3 items-center text-2xl justify-center">
    <h3 v-if="isQuestions" class="justify-self-start">{{title}}</h3>
    <button @click="goBack" v-else class="w-[159px] h-[60px] border border-white rounded-lg justify-self-start">Back</button>
    <h3 v-if="isQuestions" class="justify-self-center">Question {{questionNum}} of 10</h3>
    <div v-else class="text-4xl flex flex-col justify-self-center">
      {{title}}
      <span class="text-xs font-normal">Practice Quiz. {{duration}} hour</span>
    </div>
    <div class="justify-self-end">
      <time v-if="isQuestions" class="flex items-center gap-3">
        <timer-icon is-timeer></timer-icon>
        {{timer}}
      </time>
    </div>
  </div>
  <router-view @remaining-time="getTimer" :duration="duration"></router-view>
</template>

<style scoped>

</style>