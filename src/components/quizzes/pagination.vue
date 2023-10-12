<script setup>
import backIcon from "@/assets/quizzes/previousIcon.vue"
import forwardIcon from "@/assets/quizzes/forwardIcon.vue"
import {useStore} from "vuex";
import {computed, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {quizApi} from "@/utils";

  const store = useStore()
  const route = useRoute()
  const router = useRouter()
  const questionData = computed(() => store.getters.getQuestion)
  const currentPage = ref(1)

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
    store.commit('setQuestionData', response?.data)
    await router.push(routeArr.join("/"))
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <div class="w-full flex items-center justify-center mt-7">
    <span class="button rounded-l-lg"><back-icon></back-icon></span>
    <span class="button" v-for="page in pageNumbers" :class="{active: isActive(page)}" @click="setCurrentPage(page)">{{ page }}</span>
    <span class="button rounded-r-lg"><forward-icon></forward-icon></span>
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