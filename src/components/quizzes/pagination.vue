<script setup>
import backIcon from "@/assets/quizzes/previousIcon.vue"
import forwardIcon from "@/assets/quizzes/forwardIcon.vue"
import {useStore} from "vuex";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";

  const store = useStore()
  const route = useRoute()
  const {total, hasMore, number} = store.getters.getQuestion
  const currentPage = ref(number)

  console.log(route.path.split('/').at(-1).at(-1))

  const pageNumbers = []
  for (let i = 1; i <= total; i++) {
    pageNumbers.push(i)
  }
  const isActive = computed(() => (page) => page === currentPage.value)

const setCurrentPage = (page) => {
    currentPage.value = page
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