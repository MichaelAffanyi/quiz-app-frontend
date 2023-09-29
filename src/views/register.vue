<script setup>

import RegisterComponent from "@/components/auth/registerComponent.vue";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const isRegistered = computed(() => store.getters.isRegistered)
</script>

<template>
<!--  <register-component v-if="!isRegistered"></register-component>-->
  <router-view></router-view>
</template>

<style scoped>

</style>