<script setup>
import lastImage from "@/assets/auth/woohoo.png"
import frame from "@/assets/auth/Frame.svg"
import {useRouter} from "vue-router";

const router = useRouter()
const handleClick = () => {
  router.replace('/dashboard/profile')
}

</script>

<template>
  <div class="flex w-screen h-screen">
    <div class="image">
      <img :src="lastImage" alt="done" class="w-full h-full object-cover">
    </div>
    <section class="form-container justify-center">
      <div class="max-w-[441px] text-center">
        <h1 class="font-semibold text-4xl">Woohoo!</h1>
        <h3 class="text-[#808080] mt-6">Hey there! Your registration is complete, get excited for the ultimate quiz experience of your life. Let's do this!</h3>
        <img :src="frame" alt="congratulations">
        <base-button @click="handleClick" class="mt-6">Continue</base-button>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>