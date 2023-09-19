<script setup>
  import {shallowRef} from "vue";
  import loginComponent from "@/components/auth/loginComponent.vue"
  import registerComponent from "@/components/auth/registerComponent.vue"

  const comp = shallowRef(loginComponent)

  const handleClick = () => {
    comp.value = registerComponent
  }
</script>

<template>
  <component :is="comp" />
  <button @click="handleClick">Click me</button>
</template>

<style scoped>
:deep(h1) {
  color: #1D2939;
  font-size: 33.18px;
  font-weight: 700;
  letter-spacing: 0.166px;
}

:deep(.form) {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
  padding: 56px 58px 0;
}

:deep(form) {
  min-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

:deep(form) input {
  width: 100%;
  border: 1px solid #999999;
  border-radius: 4px;
  padding: 8px 16px;
}

:deep(form) input:focus {
  outline: none;
}

:deep(.image) {
  width: 100%;
  height: 100%;
  background: #0267FF;
  position: relative;
}

:deep(.image) img {
  position: absolute;
  bottom: 0;
}

:deep(.form-control) {
  color: #808080;
  display: flex;
  flex-direction: column;
}
</style>