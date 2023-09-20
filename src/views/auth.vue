<script>
import {mapGetters} from "vuex";
  import login from "@/components/auth/loginComponent.vue"
  import register from "@/components/auth/registerComponent.vue"
import {getActiveComponent} from "@/store/getters";

export default {
    components: {login, register},
  data() {
      return {
        comp: ''
      }
  },
  computed: {
      ...mapGetters(['getActiveComponent'])
  },
  watch: {
     getActiveComponent(newValue) {
       console.log(newValue)
       this.comp = newValue
     }
  },
  mounted() {
      this.comp = this.getActiveComponent || 'login'
  }
}
</script>

<template>
  <component :is="comp" ></component>
</template>

<style scoped>
:deep(h1) {
  color: #1D2939;
  font-size: 33.18px;
  font-weight: 700;
  letter-spacing: 0.166px;
}

:deep(.form-control) {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
  padding: 56px 58px 0;
}

:deep(.form) {
  min-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

:deep(.form) input {
  width: 100%;
  border: 1px solid #999999;
  border-radius: 4px;
  padding: 8px 16px;
}

:deep(.form) input:focus {
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

:deep(.auth-form-control) {
  color: #808080;
  display: flex;
  flex-direction: column;
}
</style>