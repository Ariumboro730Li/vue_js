const app = Vue.createApp({
    data() {
        return {
            courseGoal : `mastering vue js, node js, python`,
            courseGoalB : `<h2>desahan ayu</h2>`,
            dataLink   : `https://vue.org`
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoal;
            } else {
                return this.courseGoalB;
            }
        }
    },
})

app.mount(`#user-goal`);