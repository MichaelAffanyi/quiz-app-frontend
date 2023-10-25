<script setup>

import {computed, inject, watch} from "vue";
import {useStore} from "vuex";

const store = useStore()
const selectedAnswer = inject('selectedAnswer')
const isActive = computed(() => (value) => selectedAnswer.value === value)

const props = defineProps({
  data: {},
  isAnswer: {
    type: Boolean,
    required: false,
    default: false
  }
})

const handleSelect = (event) => {
  if (props.isAnswer) return
  const newAnswerObj = {
    id: props.data._id,
    value: event.target.value
  }
  store.dispatch('addAnswer', newAnswerObj)
}
</script>

<template>
  <div class="flex gap-[154px]">
    <div class="max-w-[811px]">
      <h4 class="text-2xl">{{data.question}}</h4>
      <div class="text-lg grid grid-cols-2 gap-x-[118px] gap-y-[37px] mt-[66px]">
        <label v-for="option in data.options"
               :for="option.tag"
               class="border-2 border-[#737373] rounded-lg p-2 flex items-center w-[345px] justify-between cursor-pointer"
               :class="{
                 active: isActive(option.value),
                 // correct:
               }"
        >
          <span>{{option.tag}}.  {{option.value}}</span>
          <input v-model="selectedAnswer" @click="handleSelect" type="radio" name="option" :id="option.tag" class="" :value="option.value">
        </label>
      </div>
      <slot name="approval"></slot>
    </div>
    <span class="text-lg text-[#737373] bg-[#F2F2F2] p-2 rounded-md h-max">{{data.points
      }} points</span>
  </div>
</template>

<style scoped>
.active {
  background: #D3DCE9;
  color: #0267FF;
  border: 2px solid #0267FF;
  font-weight: 600;
}
</style>