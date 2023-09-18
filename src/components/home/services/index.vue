<script setup>
import apiIcon from "@/assets/landing-page/api.svg"
import paymentIcon from "@/assets/landing-page/payment.svg"
import authIcon from "@/assets/landing-page/auth.svg"
import backendIcon from "@/assets/landing-page/backend.svg"
import cdnIcon from "@/assets/landing-page/cdn.svg"
import databaseIcon from "@/assets/landing-page/database.svg"
import Service from "@/components/home/services/service.vue";

const services = [
  {
    icon: authIcon,
    name: 'auth',
    title: "Authentication Service",
    description: "Use Firebase Authentication, OAuth, or Passport for secure user registration, login, and authentication in the quiz app."
  },
  {
    icon: apiIcon,
    name: 'api',
    title: "API Service",
    description: "Expose quiz app's functionalities with a RESTful or GraphQL API for seamless communication between front-end and back-end components."
  },
  {
    icon: databaseIcon,
    name: 'database',
    title: "Database Service",
    description: "Utilize MongoDB, MySQL, or PostgreSQL to store and manage quiz questions, answers, and user data securely."
  },
  {
    icon: paymentIcon,
    name: 'payment',
    title: "Payment Gateway Service",
    description: "Implement a payment gateway service for processing payments securely and efficiently for premium features or subscription-based plans."
  },
  {
    icon: cdnIcon,
    name: 'cdn',
    title: "CDN (Content Delivery Network)",
    description: "Expose quiz app's functionalities with a RESTful or GraphQL API for seamless communication between front-end and back-end components."
  },
  {
    icon: backendIcon,
    name: 'backend',
    title: "Backend Framework",
    description: "Utilize MongoDB, MySQL, or PostgreSQL to store and manage quiz questions, answers, and user data securely."
  },
]

</script>

<template>
  <div class="mt-[108px] flex justify-center flex-col gap-28 px-[179px]">
    <div class="flex flex-col items-center gap-8">
      <h1 class="font-semibold text-[#1D2939] text-5xl">Explore Our Services</h1>
      <h4 class="text-lg text-[#808080] max-w-[970px] text-center">Explore our services and take your knowledge to the next level with our diverse selection of quizzes on various topics. Whether you're looking to challenge yourself or simply have fun, our quiz webapp has something for everyone. Try it out today and discover a world of learning and entertainment!</h4>
    </div>
    <section class="grid grid-cols-3 gap-x-20 gap-y-24">
      <service v-for="service in services" :key="service.name" :service="service"></service>
    </section>
  </div>
</template>

<style scoped>

</style>