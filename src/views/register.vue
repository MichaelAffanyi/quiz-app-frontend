<script setup>

import RegisterComponent from "@/components/auth/registerComponent.vue";
import {useStore} from "vuex";
import {computed, watch} from "vue";
import {useRoute} from "vue-router";

const store = useStore()
const route = useRoute()

const currStep = computed(() => route.path.split('/').at(-1))

store.dispatch('setActiveStep', currStep.value)

watch(currStep, (newRoute) => {
  store.dispatch('setActiveStep', newRoute)
})

const isRegistered = computed(() => store.getters.isRegistered)
</script>

<template>
  <register-component v-if="!isRegistered"></register-component>
  <router-view v-else></router-view>
</template>

<style scoped>

</style>