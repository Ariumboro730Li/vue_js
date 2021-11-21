const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue : '',
      goals: [],
    };
  },
  /* watch: {
    forgoals(){}
  }, */
  computed: {
    /* forgoals(){
        for (let index = 0; index < 100000; index++) {
          this.goals.push(`debby kartika ${index}`);
        }  
    }, */
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = "";
    },
    forgoals(){
        for (let index = 0; index < 10; index++) {
          this.goals.push(index);
        }  
    },
    removeGoal(index){
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');

