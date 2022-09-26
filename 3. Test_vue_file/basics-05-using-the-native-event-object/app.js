const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      namadia : "",
    };
  },
  watch: {
    counter(value){
      if (value > 50) {
        alert("Back to ZERO");
        this.counter = 0;
      } 
    }
  },
  computed: {
    fullName(){
      console.log("running computed")
      if (this.name == "") {
        return "";
      }
      return `${this.name} & Ari Umboro`;
    },
  },
  methods: {
    // setName(event, lastName) {
    //   // this.name = event.target.value + ' ' + lastName;
    //   this.name = event.target.value;
    // },
    // outputFullName(){
    //   console.log("running function")
    //   if (this.name == "") {
    //     return "";
    //   }
    //   return `${this.name} & Ari Umboro`;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput(value) {
      console.log("running again")
      switch (value) {
        case "name":
          this.name = "";
          break;
        case "namadia":
          this.namadia = "";
          break;
      }
    }
  }
});

app.mount('#events');
