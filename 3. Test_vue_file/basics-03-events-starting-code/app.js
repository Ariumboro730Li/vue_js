  const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    submitForm(){
      alert("submitted");
    },
    confirmName(){
      let okename = this.name;
      this.confirmedName = `ENTERED ${okename}`;
      // this.name = "";
    },
    setName(event, secondName){
      this.name = event.target.value +' '+ secondName;
    },
    addCounter(num){
      this.counter  = this.counter + num;
    },
    reduceCounter(num){
      this.counter  = this.counter - num;
    }
  },
});
 
app.mount('#events');
