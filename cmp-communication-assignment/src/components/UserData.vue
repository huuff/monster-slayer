<template>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="form-floating mb-3">
          <input type="text" id="usernameInput" class="form-control" v-model="username"> 
          <label for="usernameInput">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" id="ageInput" class="form-control" v-model="age"> 
          <label for="ageInput">Age</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      username: "",
      age: 0,
    };
  },
};
</script>
