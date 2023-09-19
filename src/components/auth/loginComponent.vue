<script setup>
  import loginImage from "@/assets/auth/login.png"
  import SignupHeader from "@/components/auth/signupHeader.vue";
  import googleIcon from "@/assets/auth/google.svg"
</script>

<template>
  <div class="flex w-screen h-screen">
    <div class="image">
      <img :src="loginImage" alt="">
    </div>
    <div class="form justify-center">
      <form>
        <h1>Log in</h1>
        <h2 class="text-[#A6A6A6]">
          New member?
          <span class="font-semibold text-[#0267FF] cursor-pointer">Sign up</span>
        </h2>
        <div class="form-control">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter your email">
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" placeholder="********">
        </div>
        <div class="w-full flex gap-4 -mt-4">
          <div>
            <input type="checkbox" name="remember-me" id="remember-me" class="cursor-pointer"/>
          </div>
          <label for="remember-me">Remember Me</label>
          <span class="ml-auto text-[#0267FF] cursor-pointer">Forgot password?</span>
        </div>
        <base-button class="mt-4">Create Account</base-button>
<!--        <span class="w-full border rounded-md flex items-center gap-8 pl-16 py-2 cursor-pointer">-->
<!--          <img :src="googleIcon" alt="">-->
<!--          Sign up with Google-->
<!--        </span>-->
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>