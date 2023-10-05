<script setup>

</script>

<template>
  <form action="" class="flex flex-col gap-12">
    <div class="input-container">
      <label for="current">Current Password*</label>
      <input type="text" name="current" id="current">
    </div>
    <div class="input-container">
      <label for="newPassword">New Password*</label>
      <input type="text" name="newPassword" id="newPassword">
    </div>
    <div class="input-container">
      <label for="confirm">Confirm New Password*</label>
      <input type="text" name="confirm" id="confirm">
    </div>
    <button class="btn">Save changes</button>
  </form>
</template>

<style scoped>
  .input-container input {
    //padding: 0;
    min-width: 300px;
  }

  .btn {
    margin-left: auto;
  }
</style>