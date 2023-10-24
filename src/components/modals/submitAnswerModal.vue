<script setup>
import {useRoute} from "vue-router";
import {useStore} from "vuex";

const route = useRoute()
const store = useStore()

const answers = store.getters.getAnswers
const quizId = route.params.title.split("_")[0]

</script>

<template>
  <base-modal
      header="Submit Quiz"
      message="Hey, if you're absolutely sure you want to submit this quiz? we got you covered. This Process cannot be undone"
      cancel-btn-text="No"
      confirm-btn-text="Yes, Submit Quiz"
      :quiz-id="quizId"
      :answers="answers"
      type="submitAnswer"></base-modal>
</template>

<style scoped>

</style>