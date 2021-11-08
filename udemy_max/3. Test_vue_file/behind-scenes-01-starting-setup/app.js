const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    }; 
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.dir(this.$refs.userText);
      console.log(this.$refs.userText.onchange);
      console.log(this.$refs.userText.value);
    },
  },
});

function dorako(){
  console.log("from dorako");
}

app.mount('#app');
