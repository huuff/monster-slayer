const app = Vue.createApp({
  data() {
    return {
      myName: "Haf",
      myAge: 13,
      myImgSrc: "http://lorempixel.com/400/200/",
    }
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  }
}).mount("#assignment");
