<script setup>

import TopContent from "@/components/dashboard/topContent.vue";
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import Notification from "@/assets/quizzes/notification.vue";

const route = useRoute()
const currentRoute = computed(() => route.path.split('/').at(-1).split('-'))
const notificationStyles = computed(() => {
  if(showNotification.value.isError) return 'bg-red-200 text-red-500'
  return 'bg-green-200 text-green-500'
})
const showNotification = ref({
  value: false,
  isError: false,
  message: ''
})

const hideNotification = () => {
  showNotification.value.value = false
}

const handleShowNotification = (event) => {
  showNotification.value.value = event.value
  showNotification.value.isError = event.isError
  showNotification.value.message = event.message

  setTimeout(() => {
    hideNotification()
  }, 3000)
}

</script>

<template>
  <notification :show="showNotification.value" :class="notificationStyles">
    <div class="w-2 h-2 rounded-full" :class="{
      'bg-red-500': showNotification.isError,
      'bg-green-500': !showNotification.isError
    }"></div>
    {{showNotification.message}}
  </notification>
  <the-header class="shadow-lg"></the-header>
  <base-banner class="capitalize">
    <span v-for="route in currentRoute">{{route + ' ' }}</span>
  </base-banner>
  <div class="px-16">
    <top-content></top-content>
    <router-view @show-notification="handleShowNotification"></router-view>
  </div>
  <the-footer></the-footer>
</template>

<style scoped>

</style>