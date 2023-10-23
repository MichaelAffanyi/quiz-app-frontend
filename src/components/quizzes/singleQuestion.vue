<script setup>
import {useStore} from "vuex";
import {computed, inject, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {setCurrentPage} from "@/utils/helpers";

const selectedAnswer = inject('selectedAnswer')
const store = useStore()
const route = useRoute()
const router = useRouter()

const questionData = computed(() => store.getters.getQuestion)
const routerPath = computed(() => route.path)
const params = computed(() => route.params)
const answers = store.getters.getAnswers
const isActive = computed(() => (value) => selectedAnswer.value === value)

console.log(questionData)
const saveAnswer = async () => {
  if (questionData.value.number >= questionData.value.total) return
  const newAnswerObj = {
    id: questionData.value.question._id,
    value: selectedAnswer.value
  }
  await store.dispatch('addAnswer', newAnswerObj)

  const {url, data} = await setCurrentPage({page: questionData.value.number + 1, path: routerPath.value, params: params.value})
  store.commit('setQuestionData', data)
  selectedAnswer.value = ""
  await router.push(url)
}

// watch(answers, (newValue) => {
//   console.log(newValue)
// })

</script>

<template>
  <div class="flex gap-[154px]">
    <div class="max-w-[811px]">
      <h4 class="text-2xl">{{questionData.question.question}}</h4>
      <div class="text-lg grid grid-cols-2 gap-x-[118px] gap-y-[37px] mt-[66px]">
        <label v-for="option in questionData.question.options"
               :for="option.tag"
               class="border-2 border-[#737373] rounded-lg p-2 flex items-center w-[345px] justify-between cursor-pointer"
               :class="{active: isActive(option.value)}"
        >
          <span>{{option.tag}}.  {{option.value}}</span>
          <input v-model="selectedAnswer" type="radio" name="option" :id="option.tag" class="" :value="option.value">
        </label>
      </div>
    </div>
    <span class="text-lg text-[#737373] bg-[#F2F2F2] p-2 rounded-md h-max">{{questionData.question.points
      }} points</span>
  </div>
  <button
      :disabled="!!!selectedAnswer"
      class="w-[181px] h-10 bg-[#0267FF] text-white mb-40 rounded-lg disabled:opacity-25 disabled:cursor-not-allowed transition duration-500 ease-in"
      @click="saveAnswer"
  >Next</button>
</template>

<style scoped>
.active {
  background: #D3DCE9;
  color: #0267FF;
  border: 2px solid #0267FF;
  font-weight: 600;
}
</style>