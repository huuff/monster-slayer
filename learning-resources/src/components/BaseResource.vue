<template>
  <div class="card">
    <header class="card-header">
      <h3> {{ resource.title }} </h3>
    </header>
    <section class="card-body">
      <p> {{ resource.description }} </p>
    </section>
    <footer class="card-footer d-flex flex-row justify-content-between align-items-baseline">
      <a :href="resource.link">View Resource</a>
      <button class="btn btn-danger" @click="deleteResource(resource.id)">Delete</button>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Resource } from "../resource.ts";

export default defineComponent({
  emits: [ "delete-resource" ],
  props: {
    resource: {
      type: Object as PropType<Resource>,
    },
  },
  methods: {
    deleteResource(id: string) {
      this.$emit("delete-resource", id);
    },
  },
});

</script>
