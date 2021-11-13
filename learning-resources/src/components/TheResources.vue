<template>
  <main>
    <ul class="list-unstyled">
      <li v-for="resource in resources" :key="resource.id" class="my-2">
        <base-resource :resource="resource"></base-resource>
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Resource } from "../resource";
import BaseResource from "./BaseResource.vue";

export default defineComponent({
  components: {
    BaseResource
  },
  props: {
    resources: {
      type: Object as PropType<Resource>,
    },
  },
});
</script>
