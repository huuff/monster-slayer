<template>
  <form @submit.prevent="addComponent">
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
import { Resource } from "../resource";

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
  methods: {
    addComponent() {
      const resource = new Resource(this.title, this.description, this.link);
      this.title = '';
      this.description = '';
      this.link = '';
      this.$emit("add-resource", resource);
    },
  },
  emits: [ "add-resource" ],
});
</script>
