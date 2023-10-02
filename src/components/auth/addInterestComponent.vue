<script setup>
  import interestImage from "@/assets/auth/interest2.png"
  import InterestCard from "@/components/ui/interestCard.vue";
  import SignupHeader from "@/components/auth/signupHeader.vue";
  import {ref, watch} from "vue";

  const selected = ref([])

  const addToSelected = (interest) => {
    const index = selected.value.findIndex(ele => ele === interest.toLowerCase())
    if (index >= 0) {
      selected.value.splice(index, 1)
      return
    }
    selected.value.push(interest.toLowerCase())
  } 
</script>

<template>
<div class="flex w-screen h-screen">
  <div class="image">
    <img :src="interestImage" alt="" class="w-full h-full object-cover">
  </div>
  <section class="form-container">
    <signup-header></signup-header>
    <div class="flex flex-col items-center gap-6 max-w-[400px] text-center">
      <h1 class="text-3xl font-semibold">Let’s get started by picking some interests</h1>
      <h4>Alright, let's pick something we're interested in and get started!</h4>
      <div class="grid grid-cols-2 gap-4">
        <interest-card @add-to-selected="addToSelected" title="Gaming"></interest-card>
        <interest-card @add-to-selected="addToSelected" title="Fashion"></interest-card>
        <interest-card @add-to-selected="addToSelected" title="Music"></interest-card>
        <interest-card @add-to-selected="addToSelected" title="Reading"></interest-card>
      </div>
      <base-button class="mt-8">Continue</base-button>
    </div>
  </section>
</div>
</template>

<style scoped>
.form-container {
  gap: 40px;
  padding-top: 40px;
}
</style>