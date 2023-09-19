<script setup>
  import logo from "@/assets/logo.svg"
  import pintrest from "@/assets/pintrest.svg"
  import facebook from "@/assets/facebook.svg"
  import linkedin from "@/assets/linkedin.svg"
</script>

<template>
  <div class="text-[#808080]">
    <div class="px-16 py-10 bg-[#F2F2F2] flex justify-between items-center">
      <div class="flex flex-col gap-6">
        <div>
          <img :src="logo" alt="">
        </div>
        <span class="max-w-[308px]">Feel free to join our quiz platform to expand your knowledge and challenge your skills with engaging quizzes anytime, anywhere.
        </span>
      </div>
      <div class="flex gap-14">
        <div class="footer-control">
          <span class="text-sm">Product</span>
          <span>Overview</span>
          <span>Features</span>
          <span>Pricing </span>
          <span>Releases</span>
        </div>
        <div class="footer-control">
          <span class="text-sm">Company</span>
          <span>About us </span>
          <span>Careers</span>
          <span>News </span>
          <span>Contact</span>
        </div>
        <div class="footer-control">
          <span class="text-sm">Resources</span>
          <span>News Letter</span>
          <span>Help Center</span>
          <span>Tutorials</span>
          <span>Support</span>
        </div>
        <div class="footer-control">
          <span class="text-sm">Support</span>
          <span>Twitter</span>
          <span>Linkedin</span>
          <span>Facebook</span>
          <span>Github</span>
        </div>
        <div class="footer-control">
          <span class="text-sm">Legal </span>
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
          <span>Licenses</span>
        </div>
      </div>
    </div>
    <div class="flex justify-between px-16 py-4">
      <span>2023 QuizMaster All Rights Reserved</span>
      <div class="flex gap-4">
        <img :src="pintrest" alt="pintrest" class="cursor-pointer">
        <img :src="facebook" alt="facebook" class="cursor-pointer">
        <img :src="linkedin" alt="linkedin" class="cursor-pointer">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .footer-control {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
</style>