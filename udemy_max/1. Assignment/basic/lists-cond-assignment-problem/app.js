const app = Vue.createApp({
    data() {
        return {
            enteredTask : "",
            tasks : [],
            hiddenList : false,
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTask);
            this.enteredTask = "";
        },
        showHideList(){
            this.hiddenList = !this.hiddenList
        }
    },
})

app.mount(`#assignment`);