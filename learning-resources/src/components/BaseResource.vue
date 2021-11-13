<template>
  <div class="card">
    <header class="card-header">
      <h3> {{ resource.title }} </h3>
    </header>
    <section class="card-body">
      <p> {{ resource.description }} </p>
      <a :href="resource.link">View Resource</a>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Resource } from "../resource.ts";

export default defineComponent({
  props: {
    resource: {
      type: Object as PropType<Resource>,
    },
  },
});

</script>
