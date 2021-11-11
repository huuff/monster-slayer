<template>
  <div class="card text-center">
    <div class="card-header">
      <h1>Active user</h1>
    </div>
    <div class="card-body">
      <h2> Username: {{ user.username }} </h2>
      <h3> Age: {{ user.age }} </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from "../user";
import { PropType } from "vue";

export default {
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
};
</script>
