<script setup>

import {computed, ref, watch} from "vue";

const props = defineProps({
  label: String,
  type: String,
  modelValue: String,
  isError: Boolean,
  message: String
})
const emit = defineEmits(['update:value'])

const isFocused = ref(false)
const value = ref('')
const isErrorRef = ref(props.isError)

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
  if(value.value.trim() === '') {
    isFocused.value = false
  }
}

watch(value, (newValue) => {
  props.isError = newValue.trim() === '';
  emit('update:value', {name: props.label.toLowerCase(), value: newValue})
})

</script>

<template>
<div>
  <div class="w-full relative h-10 px-3 border-2 rounded-lg" :class="containerStyles">
    <p class="absolute transition duration-300 ease-linear" :class="spanStyles">
      {{label}}
      <span class="text-red-500">*</span>
    </p>
    <input v-model="value" @focus="isFocused = true" @blur="handleUnFocus" class="bg-transparent absolute inset-0 focus:outline-0 px-3" :type="type">
  </div>
  <p v-if="isError" class="text-sm text-red-500">{{label}} can't be empty</p>
</div>
</template>

<style scoped>

</style>