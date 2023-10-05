<script setup>

// defineProps(['user'])
import {useStore} from "vuex";

const store = useStore()

const user = store.getters.getUser

</script>

<template>
  <div>
    <div class="flex items-center gap-2">
      <div class="w-[166px] h-[166px] img-container mr-6">
        <img :src="user.profilePhoto" alt="">
      </div>
      <button class="btn">Upload New</button>
      <span>Delete Avatar</span>
    </div>
    <form action="" class="grid grid-cols-2 gap-x-6 gap-y-10 mt-8">
      <div class="input-container">
        <label for="fullname">Full Name*</label>
        <input type="text" name="fullname" id="fullname">
      </div>
      <div class="input-container">
        <label for="email">Email*</label>
        <input type="text" name="email" id="email">
      </div>
      <div class="input-container">
        <label for="contact">Contact</label>
        <input type="text" name="contact" id="contact">
      </div>
      <div class="input-container">
        <label for="location">Location</label>
        <input type="text" name="location" id="location">
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex items-center gap-16">
          <div>
            <input type="radio" name="gender" id="male">
            <label for="male" class="ml-2">Male</label>
          </div>
          <div>
            <input type="radio" name="gender" id="female">
            <label for="female" class="ml-2">Female</label>
          </div>
        </div>
        <button class="btn">Save changes</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>