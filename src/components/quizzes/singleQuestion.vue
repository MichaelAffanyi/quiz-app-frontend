<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const questionData = computed(() => store.getters.getQuestion)
</script>

<template>
  <div class="flex gap-[154px]">
    <div class="max-w-[811px]">
      <h4 class="text-2xl">{{questionData.question.question}}</h4>
      <div class="text-lg grid grid-cols-2 gap-x-[118px] gap-y-[37px] mt-[66px]">
        <label v-for="option in questionData.question.options" :for="option.tag" class="border border-[#737373] rounded-lg p-2 flex items-center w-[345px] justify-between cursor-pointer">
          <span>{{option.tag}}.  {{option.value}}</span>
          <input type="radio" name="option" :id="option.tag" class="">
        </label>
      </div>
    </div>
    <span class="text-lg text-[#737373] bg-[#F2F2F2] p-2 rounded-md h-max">{{questionData.question.points
      }} points</span>
  </div>
  <button class="w-[181px] h-10 bg-[#0267FF] text-white mb-40 rounded-lg">Next</button>
</template>

<style scoped>

</style>