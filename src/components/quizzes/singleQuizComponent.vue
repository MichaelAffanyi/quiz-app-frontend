<script setup>
import {useRoute, useRouter} from "vue-router";
import {computed, ref, watch} from "vue";
import TimerIcon from "@/assets/quizzes/timerIcon.vue";

const route = useRoute()
const params = route.params.title.split('_')
const title = computed(() => params.at(-1).split("-").join(" "))
const seconds = computed(() => new Date().getSeconds())
const path = computed(() => route.path)
const isQuestions = ref(false)
const duration = params[1]
const timer = ref(`${duration.padStart(2, '0')}:00:00`)

// console.log(new Date().getSeconds())

watch(path, (newValue) => {
  console.log(newValue)
  if(newValue.split('/').at(-1).includes('question')) {
    isQuestions.value = true
    return
  }
  isQuestions.value = false
})

const getTimer = (time) => {
  timer.value = time
}

</script>

<template>
  <the-header></the-header>
  <div class="w-full font-semibold p-10 bg-[#0267FF] text-white capitalize flex items-center justify-between text-2xl">
    <h3 v-if="isQuestions">{{title}}</h3>
    <button v-else class="w-[159px] h-[60px] border border-white rounded-lg">Back</button>
    <h3 v-if="isQuestions">Question 1 of 10</h3>
    <div v-else class="text-4xl flex flex-col">
      {{title}}
      <span class="text-xs font-normal">Practice Quiz. {{duration}} hour</span>
    </div>
    <div>
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