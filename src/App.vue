<template>
  <main class="row">
    <div class="col-lg-6 offset-lg-3 d-flex flex-column">
      <h1 class="text-center mb-4">Monster Slayer</h1>
      <div class="mb-3">
        <h2>Monster</h2>
        <div class="progress">
          <div class="progress-bar bg-danger" :style="{width: monsterHealth + '%'}"></div>
        </div>
      </div>
      <div class="mb-5">
        <h2>Player</h2>
        <div class="progress">
          <div class="progress-bar" :style="{width: playerHealth + '%'}"></div>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center">
        <button class="btn btn-primary btn-lg" @click="attackMonster">ATTACK</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

function randomBetween(lower: number, upper: number) {
  return Math.random() * (upper - lower) + lower;
}

export default defineComponent({
  name: 'App',
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    }
  },
  methods: {
    attackMonster() {
      this.monsterHealth -= randomBetween(8, 12);
      this.attackPlayer();
    },
    attackPlayer() {
      this.playerHealth -= randomBetween(10, 15);
    }
  },

});
</script>

<style>
</style>
