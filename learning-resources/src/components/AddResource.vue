<template>
  <teleport to="body">
    <invalid-input-dialog v-if="invalidInput" @close-dialog="closeDialog"></invalid-input-dialog>
  </teleport>

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
import InvalidInputDialog from "./InvalidInputDialog.vue";

export default defineComponent({
  data: () => ({
    title: '',
    description: '',
    link: '',
    invalidInput: false,
  } as {
    title: string;
    description: string;
    link: string;
    invalidInput: boolean;
  }),
  methods: {
    addComponent() {
      if (this.title.trim() === '' || this.description.trim() === '' || this.link.trim() === '') {
        this.invalidInput = true; 
        return;
      }

      const resource = new Resource(this.title, this.description, this.link);
      this.title = '';
      this.description = '';
      this.link = '';
      this.$emit("add-resource", resource);
    },
    closeDialog() {
      this.invalidInput = false;
    },
  },
  emits: [ "add-resource" ],
  components: {
    InvalidInputDialog,
  }
});
</script>
