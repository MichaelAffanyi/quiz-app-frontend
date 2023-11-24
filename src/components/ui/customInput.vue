<script setup>

import {computed, ref, watch} from "vue";

const props = defineProps({
  label: String,
  type: String,
  modelValue: String,
  isError: Boolean,
  message: String,
  large: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:value'])

const isFocused = ref(false)
const value = ref('')

const spanStyles = computed(() => {
  if(props.isError) return 'translate-y-[-50%] scale-[0.80] text-[#EF4444] bg-white'
  if(isFocused.value) return 'translate-y-[-50%] scale-[0.80] text-[#3B82F6] bg-white'
  return 'translate-y-[30%] scale-100 text-[#9CA3AF]'
})
const containerHeight = computed(() => {
  if(props.large) return 'h-28'
  return 'h-10'
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
  if (props.label === 'Points' && /\D/.test(newValue)) {
    value.value = newValue.replace(/\D/g, '')
  }
  emit('update:value', {name: props.label.toLowerCase(), value: newValue})
})

</script>

<template>
<div>
  <div class="w-full relative px-3 border-2 rounded-lg" :class="[containerStyles, containerHeight]">
    <p class="absolute transition duration-300 ease-linear" :class="spanStyles">
      {{label}}
      <span class="text-red-500">*</span>
    </p>
    <textarea v-if="large" v-model="value" @focus="isFocused = true" @blur="handleUnFocus" name="largeInput" id="largeInput" class="input resize-none px-3 pt-3"></textarea>
    <input v-else v-model="value" @focus="isFocused = true" @blur="handleUnFocus" class="input px-3" :type="type">
  </div>
  <p v-if="isError" class="text-sm text-red-500">{{label}} can't be empty</p>
</div>
</template>

<style scoped>

.input {
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.input:focus {
  outline: none;
}

</style>