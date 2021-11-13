<template>
  <div class="" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Invalid input</h5>
        </div>
        <div class="modal-body">
          Some of the inputted data is invalid.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeDialog">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: [ "close-dialog" ],
  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    },
  },
});

</script>
