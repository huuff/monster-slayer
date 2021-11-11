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
      <div v-if="state === 'playing'" 
        class="d-flex flex-column align-items-center"
      >
        <button class="btn btn-primary btn-lg mb-3" @click="attackMonster">ATTACK</button>
        <button 
          :disabled="round % 3 !== 0"
          class="btn btn-primary btn-lg mb-3" 
          @click="specialAttack"
        >SPECIAL ATTACK</button>
      </div>
      <div v-else class="text-center">
        <h3 class="display-3">Game Over!</h3>
        <h4 v-if="state === 'won'" class="text-success">You won!</h4>
        <h4 v-else-if="state === 'lost'" class="text-danger">You lost!</h4>
        <h4 v-else class="text-secondary">It's a draw!</h4>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

function randomBetween(lower: number, upper: number) {
  return Math.random() * (upper - lower) + lower;
}

type GameData = {
  playerHealth: number;
  monsterHealth: number;
  round: number;
  state: "won" | "lost" | "playing" | "draw";
};

export default defineComponent({
  name: 'App',
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
      state: "playing",
    } as GameData
  },

  watch: {
    playerHealth() {
      if (this.playerHealth <= 0) {
        this.playerHealth = 0;
        if (this.monsterHealth <= 0) {
          this.state = "draw";
        } else {
          this.state = "lost";
        }
      }
    },
    monsterHealth() {
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        if (this.playerHealth <= 0) {
          this.state = "draw";
        } else {
          this.state = "won";
        }
      }
    },
  },

  methods: {
    attackMonster() {
      this.monsterHealth -= randomBetween(8, 12);
      this.attackPlayer();
      this.round++;
    },
    attackPlayer() {
      this.playerHealth -= randomBetween(10, 15);
    },
    specialAttack() {
      this.monsterHealth -= randomBetween(12, 18);
      this.attackPlayer();
      this.round++;
    }
  },

});
</script>

<style>
</style>
