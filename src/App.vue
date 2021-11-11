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
        <button
          :disabled="round % 2 !== 0"
          class="btn btn-primary btn-lg mb-3"
          @click="heal"
        >HEAL </button>
        <button class="btn btn-danger btn-lg mb-3" @click="surrender">SURRENDER</button>
      </div>
      <div v-else class="text-center">
        <h3 class="display-3">Game Over!</h3>
        <h4 v-if="state === 'won'" class="text-success">You won!</h4>
        <h4 v-else-if="state === 'lost'" class="text-danger">You lost!</h4>
        <h4 v-else class="text-secondary">It's a draw!</h4>
      </div>
      <div class="container bg-light text-center mt-5 w-75 rounded">
        <h3>Battle Log</h3>
        <ul class="list-unstyled">
          <li v-for="(entry, i) in log" :key="i" v-html="entry.toString()"></li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

function randomBetween(lower: number, upper: number) {
  return Math.floor(Math.random() * (upper - lower) + lower);
}

type Entity = "player" | "monster";
type Action = "attack" | "heal";

type GameData = {
  playerHealth: number;
  monsterHealth: number;
  round: number;
  state: "won" | "lost" | "playing" | "draw";
  log: LogEntry[];
};

class LogEntry {
  constructor(readonly who: Entity, readonly what: Action, readonly value: number) {}

  public toString(): string {
    const entity = this.who === 'player' ? "Player" : "Monster";
    const action = this.what === "attack" ? "attacks" : "heals";
    if (this.what === "heal") {
      var valueClass = "text-success";
    } else if (this.who === "player") {
      var valueClass = "text-primary";
    } else {
      var valueClass = "text-danger";
    }

    return `${entity} ${action} for <span class='${valueClass}'>${this.value}</span> damage!`
  }
}

export default defineComponent({
  name: 'App',
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
      state: "playing",
      log: [],
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
      const monsterDamage = randomBetween(8, 12);
      this.monsterHealth -= monsterDamage;
      this.attackPlayer();
      this.addLog(new LogEntry("player", "attack", monsterDamage));
      this.round++;
    },
    attackPlayer() {
      const playerDamage = randomBetween(10, 14);
      this.playerHealth -= playerDamage;
      this.addLog(new LogEntry("monster", "attack", playerDamage));
    },
    specialAttack() {
      const monsterDamage = randomBetween(8, 16);
      this.monsterHealth -= monsterDamage;
      this.attackPlayer();
      this.addLog(new LogEntry("player", "attack", monsterDamage));
      this.round++;
    },
    heal() {
      const healDamage = randomBetween(10, 20);
      this.playerHealth += healDamage;
      this.attackPlayer();
      this.addLog(new LogEntry("player", "heal", healDamage));
      this.round++;
    },
    addLog(entry: LogEntry) {
      this.log.unshift(entry);
    },
    surrender() {
      this.state = "lost";
    },
  },

});
</script>

<style>
</style>
