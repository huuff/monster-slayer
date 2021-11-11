Vue.createApp({
  data() {
    return {
      tasks: [],
      input: '',
      hidden: false,
    }
  },
  methods: {
    add() {
      this.tasks.push(this.input);
      this.input = '';
    },
    toggleHidden() {
      this.hidden = !this.hidden;
    },
  }
}).mount("#assignment");
