<template>
  <form>
    <div class="mb-3">
      <label for="title">Title</label>
      <input id="title" type="text" v-model="title" class="form-control">
    </div>
    <div class="mb-3">
      <label for="description">Description</label>
      <textarea id="description" rows="3" v-model="description" class="form-control"></textarea>
    </div>
    <div class="mb-3">
      <label for="link">Link</label>
      <input type="url" id="link" v-model="link" class="form-control">
    </div>

    <button type="submit" class="btn btn-primary">Add</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    title: '',
    description: '',
    link: '',
  } as {
    title: string;
    description: string;
    link: string;
  }),
});
</script>
