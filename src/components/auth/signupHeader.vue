<script setup>
  import {useStore} from "vuex";
  import backIcon from "@/assets/Left.svg"
  import {useRouter} from "vue-router";

  const store = useStore()
  const router = useRouter()
  const goBack = () => {
    router.go(-1)
  }

  const step = store.getters.getStep
</script>

<template>
  <header class="w-full flex justify-between items-center">
    <div @click="goBack" v-if="step !== 1" class="flex gap-3 items-center cursor-pointer">
      <img :src="backIcon" alt="<-">
      <span>Back</span>
    </div>
    <div>
      <span class="font-semibold">Step {{step}}</span>
      of 4
    </div>
    <router-link to="/dashboard/profile" class="cursor-pointer">Exit</router-link>
  </header>
</template>

<style scoped>

</style>