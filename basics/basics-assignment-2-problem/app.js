Vue.createApp({
  data() {
    return {
      inputText: "",
      changeText: "",
    }
  },
  methods: {
    showAlert() {
      alert("ALERT!!!");
    },
    setText(newText) {
      this.text = newText;
    },
    onChange(event) {
      this.inputText = event.target.value;
    },
    onEnter(event) {
      this.changeText = event.target.value;
    }
  },
}).mount("#assignment");
