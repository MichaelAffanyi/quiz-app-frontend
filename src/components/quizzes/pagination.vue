<script setup>
import backIcon from "@/assets/quizzes/previousIcon.vue"
import forwardIcon from "@/assets/quizzes/forwardIcon.vue"
import {useStore} from "vuex";
import {computed, inject, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {quizApi} from "@/utils";
import {formatOptions} from "@/utils/helpers";

  const store = useStore()
  const route = useRoute()
  const router = useRouter()
  const questionData = computed(() => store.getters.getQuestion)
  const currentPage = ref(questionData.value.number)

  const selectedAnswer = inject('selectedAnswer')

  const pageNumbers = []
  for (let i = 1; i <= questionData.value.total; i++) {
    pageNumbers.push(i)
  }
  const isActive = computed(() => (page) => page === questionData.value.number)

const setCurrentPage = async (page) => {
  try {
    const routeArr = route.path.split('/')
    routeArr.pop()
    routeArr.push(`question_${page}`)

    const {title, questionId} = route.params
    const quizId = title.split('_')[0]
    const response = await quizApi(`/${quizId}/${page}`)

    response.data.number = Number(page)
    response.data.question.options = formatOptions(response.data.question.options)
    store.commit('setQuestionData', response?.data)
    selectedAnswer.value = ''
    await router.push(routeArr.join("/"))
  } catch (e) {
    console.log(e)
  }
}

  const goToNext = () => {
    if(currentPage.value < questionData.value.total) {
      currentPage.value++
    }
  }

  const goToPrevious = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  watch(currentPage, (newCurrentPage) => {
    setCurrentPage(newCurrentPage)
  })
watch(questionData, (newValue) => {
  currentPage.value = newValue.number
  })
</script>

<template>
  <div class="flex mt-7">
    <span @click="goToPrevious" class="button rounded-l-lg"><back-icon></back-icon></span>
    <span class="button" v-for="page in pageNumbers" :class="{active: isActive(page)}" @click="setCurrentPage(page)">{{ page }}</span>
    <span @click="goToNext" class="button rounded-r-lg"><forward-icon></forward-icon></span>
  </div>
</template>

<style scoped>
  .button {
    padding: 8px 16px;
    border: 1px solid #999999;
    cursor: pointer;
  }
  .active {
    background: #0267FF;
    color: white;
    border: 1px solid #0267FF;
  }
</style>