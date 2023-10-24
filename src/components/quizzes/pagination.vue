<script setup>
import backIcon from "@/assets/quizzes/previousIcon.vue"
import forwardIcon from "@/assets/quizzes/forwardIcon.vue"
import {useStore} from "vuex";
import {computed, ref, watch} from "vue";
import {useRouter} from "vue-router";

  const store = useStore()
  const router = useRouter()
  const questionData = computed(() => store.getters.getQuestion)
  const currentPage = ref(questionData.value.number)

  const pageNumbers = []
  for (let i = 1; i <= questionData.value.total; i++) {
    pageNumbers.push(i)
  }
  const isActive = computed(() => (page) => page === questionData.value.number)

const setCurrentPage = (page) => {
    currentPage.value = page
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

  watch(currentPage,(newPage) => {
    router.push(`question_${newPage}`)
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