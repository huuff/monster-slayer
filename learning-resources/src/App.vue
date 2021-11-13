<template>
  <div class="container mt-5">
    <nav class="nav nav-tabs">
      <a 
        class="nav-link" 
        :class="{ active: this.activeTab === 'list' }" 
        href="#"
        @click="setActiveTab('list')"
        >List Resources</a>
      <a 
        class="nav-link"
        :class="{ active: this.activeTab === 'add'}"
        href="#"
        @click="setActiveTab('add')"
        >Add Resource</a>
    </nav>
    <keep-alive>
      <the-resources v-if="this.activeTab === 'list'" :resources="resources"></the-resources>
      <add-resource v-else-if="this.activeTab === 'add'"></add-resource>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Resource } from "./resource";
import TheResources from "./components/TheResources.vue";
import AddResource from "./components/AddResource.vue";

type Tab = "list" | "add";

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
    activeTab: "list",
  } as {
    resources: Resource[];
    activeTab: Tab;
  }),
  methods: {
    setActiveTab(tab: Tab) {
      this.activeTab = tab;
    },
  },
  components: {
    TheResources, AddResource,
  }
});
</script>

<style>
</style>
