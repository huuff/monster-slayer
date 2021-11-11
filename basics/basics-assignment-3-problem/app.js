const MAGIC_NUMBER = 37;

Vue.createApp({
  data() {
    return {
      num: 0,
    }
  },

  watch: {
    num(value) {
      if (value === MAGIC_NUMBER) {
        setTimeout(() => this.num = 0, 5000);
      }
    }
  },

  computed: {
    text() {
      if (this.num > MAGIC_NUMBER) {
        return "Too much!";
      } else if (this.num < MAGIC_NUMBER) {
        return "Not there yet!";
      } else {
        return this.num;
      }
    }
  },

  methods: {
    changeBy(n) {
     this.num += n; 
    },
  },
}).mount("#assignment");
