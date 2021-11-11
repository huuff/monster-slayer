<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="changeUser">
        <div class="form-floating mb-3">
          <input type="text" id="usernameInput" class="form-control" v-model="username"> 
          <label for="usernameInput">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" id="ageInput" class="form-control" v-model="age"> 
          <label for="ageInput">Age</label>
        </div>
        <button type="submit" class="btn btn-primary">Set as active</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from "../user";
import { defineComponent } from "vue";

export default defineComponent({
  emits: [ "change-user"],
  data() {
    return {
      username: "",
      age: null,
    } as { username: string; age: number | null};
  },
  methods: {
    changeUser() {
      this.$emit("change-user", {username: this.username, age: this.age});
      this.username = "";
      this.age = 0;
    },
  },
});
</script>
