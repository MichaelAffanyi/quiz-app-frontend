<script setup>
import DeleteModal from "@/components/modals/deleteModal.vue";
import SubmitAnswerModal from "@/components/modals/submitAnswerModal.vue";
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore()

const isSubmitAnswersModalOpen = computed(() => store.getters.isSubmitAnswerModalOpen)
const isDeleteModalOpen = computed(() => store.getters.isDeleteModalOpen)

</script>

<template>
  <delete-modal v-if="isDeleteModalOpen"></delete-modal>
  <submit-answer-modal v-if="isSubmitAnswersModalOpen"></submit-answer-modal>
  <router-view></router-view>
</template>

<style scoped>

</style>
