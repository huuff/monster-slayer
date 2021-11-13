<template>
  <the-resources :resources="resources"></the-resources>
  <add-resource></add-resource>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Resource } from "./resource";
import TheResources from "./components/TheResources.vue";
import AddResource from "./components/AddResource.vue";

export default defineComponent({
  name: 'App',
  data: () => ({
    resources: [
      new Resource(
        "Official Docs",
        "The official docs for Vue 3",
        "https://v3.vuejs.org/guide/introduction.html"
      ),
      new Resource(
        "Google",
        "Google is always an invaluable resource for learning!",
        "https://google.com",
      ),
    ], 
  } as { resources: Resource[] }),
  components: {
    TheResources, AddResource,
  }
});
</script>

<style>
</style>
