<script setup>
import addWhite from "@/assets/auth/add-white.svg"
import addBlack from "@/assets/auth/add-black.svg"
import {computed, ref} from "vue";

const emit = defineEmits(['addToSelected'])
const props = defineProps(['title'])
const selected = ref(false)

const addImage = computed(() => selected.value ? addWhite : addBlack)

const handleSelect = () => {
  selected.value = !selected.value
  emit('addToSelected', props.title)
}

</script>

<template>
  <div class="flex gap-2 items-center text-[#1D2939] justify-center w-[232px] h-[36px] border border-[#B3B3B3] rounded-full cursor-pointer"
       :class="{selected}"
       @click="handleSelect"
  >
    <img :src="addImage" alt="">
    <span>{{title}}</span>
  </div>
</template>

<style scoped>
.selected {
  background: #0267FF;
  color: white;
  border: #0267FF;
}
</style>