<script setup>

import TheHeader from "@/components/ui/theHeader.vue";
import Banner from "@/components/home/banner.vue";
import Services from "@/components/home/services/index.vue";
import Knowledge from "@/components/home/knowledge.vue";
import Education from "@/components/home/education.vue";
import CustomersReview from "@/components/home/review/customersReview.vue";
import NewsLetter from "@/components/home/newsLetter.vue";
import ContactUs from "@/components/home/contact/contactUs.vue";
import TheFooter from "@/components/theFooter.vue";
</script>

<template>
<!--  <div class="relative w-full">-->
    <the-header></the-header>
    <banner></banner>
    <services></services>
    <knowledge></knowledge>
    <education></education>
    <customers-review></customers-review>
    <news-letter></news-letter>
    <contact-us></contact-us>
    <the-footer></the-footer>
<!--  </div>-->
</template>

<style scoped>

</style>