Vue.createApp({
  data() {
    return {
      classInput: '',
      pIsOn: true,
      bg: '',
    }
  },
  methods: {
    toggleP() {
      this.pIsOn = !this.pIsOn;
    },
  },
}).mount("#assignment");
