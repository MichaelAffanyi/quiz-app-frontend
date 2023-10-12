<script setup>
import starIcon from "@/assets/dashboard/star.svg"
import eyeIcon from "@/assets/dashboard/eye.svg"
import timeIcon from "@/assets/dashboard/time.svg"
import {ref} from "vue";
import ImageLoader from "@/assets/dashboard/imageLoader.vue";
import {useRouter} from "vue-router";

const props = defineProps({
  isRecentQuiz: {
    type: Boolean,
    required: false,
    default: false,
  },
  quiz: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const loadingImage = ref(true)
const handleLoadedData = () => {
  loadingImage.value = false
}

const handleNavigate = () => {
  const link = props.quiz.title.split(" ").join("-").toLowerCase()
  const id = props.quiz._id
  router.push(`/quizzes/${id}_${props.quiz.duration}_${link}`)
}

</script>

<template>
  <div class="relative w-full h-[259px] overflow-hidden text-white rounded-xl">
    <div class="absolute inset-0 w-full h-full">
      <img :src="quiz.coverImage" alt="" class="w-full h-full object-fill" @load="handleLoadedData">
      <image-loader v-if="loadingImage"></image-loader>
    </div>
    <div @click="handleNavigate" class="absolute w-max h-max left-0 right-0 bottom-3 mx-auto card flex flex-col border border-white border-opacity-30 rounded-lg px-6 py-3 backdrop-blur cursor-pointer">
      <span v-if="!isRecentQuiz" class="font-bold">{{quiz.title}}</span>
      <div v-if="!isRecentQuiz" class="flex gap-2">
        <span>{{quiz.author}}</span>
        <span class="flex gap-1 items-center bg-[#0267FF] rounded-full px-1 text-[11px]">
          <img :src="starIcon" alt="star">
          4.2K
        </span>
      </div>
      <div class="flex gap-4" :class="{recent: isRecentQuiz}">
        <span class="flex gap-2">
          <img :src="timeIcon" alt="time">
          {{quiz.duration}} hour/60mins
        </span>
        <div class="flex gap-2">
          <img :src="eyeIcon" alt="eye">
          4.3K
          <span v-if="isRecentQuiz" class="flex gap-1 items-center bg-[#0267FF] rounded-full px-1 text-[11px]">
            <img :src="starIcon" alt="star">
            4.2K
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: rgba(153, 153, 153, 0.40)
}
.recent {
  flex-direction: column;
}
</style>