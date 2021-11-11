<template>
  <div class="container mt-5">
    <div class="row">
      <active-user :user="user" class="col"></active-user>
      <user-data class="col" @change-user="changeUser"></user-data>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
import { User } from "./user";

export default defineComponent({
  name: 'App',
  data() {
    return {
      user: new User("Default", 18),
    };
  },
  components: {
    ActiveUser, UserData
  },
  methods: {
    changeUser(user: User) {
      this.user = user;
    },
  },
});
</script>

<style>
</style>
