<script setup>
  import logs from "@/assets/dashboard/logs.svg"
  defineProps(['card'])
</script>

<template>
  <div class="max-w-[402px] w-full flex items-center justify-between px-7 py-12 rounded-md" :class="card.name">
    <div class="w-20 h-20 rounded-full bg-white flex justify-center items-center">
      <img :src="card.image" alt="">
    </div>
    <div class="flex flex-col text-white font-semibold">
      <span class="text-3xl">{{card.title}}</span>
      <span class="text-lg">{{card.desc}}</span>
    </div>
  </div>
</template>

<style scoped>
.log {
  background: #8080FF;
}

.quiz {
  background: #0267FF
}

.subject {
  background: #0000CC;
}
</style>