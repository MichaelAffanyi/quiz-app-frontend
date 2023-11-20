<script setup>

import {computed, ref, watch} from "vue";

const props = defineProps({
  label: String,
  type: String,
  value: String,
  modelValue: String,
  isError: {
    type: Boolean,
    default: false
  },
})

const isFocused = ref(false)

const spanStyles = computed(() => {
  if(props.isError) return 'translate-y-[-50%] scale-[0.80] text-[#EF4444] bg-white'
  if(isFocused.value) return 'translate-y-[-50%] scale-[0.80] text-[#3B82F6] bg-white'
  return 'translate-y-[30%] scale-100 text-[#9CA3AF]'
})

const containerStyles = computed(() => {
  if(props.isError) return 'border-[#EF4444]'
  if(isFocused.value) return 'border-[#3B82F6]'
  return 'border-[#9CA3AF]'

})

const handleUnFocus = () => {
  if(props.value.trim === '') {
    isFocused.value = false
  }
}

// watch(valueRef, (newValue) => {
//   // emit('update:value', newValue)
//   console.log(newValue)
// })

</script>

<template>
<div>
  <div class="w-full relative h-10 px-3 border-2 rounded-lg" :class="containerStyles">
    <span class="absolute text-gray-400 transition duration-300 ease-linear" :class="spanStyles">{{label}}</span>
    <input @input="$emit('setData', {
      name: label.toLowerCase(),
      value: $event.target.value,
    })" @focus="isFocused = true" @blur="handleUnFocus" class="bg-transparent absolute inset-0 focus:outline-0 px-3" :type="type">
  </div>
</div>
</template>

<style scoped>

</style>