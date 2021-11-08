const app = Vue.createApp({
    data() {
        return {
            counter : 0,
            messageCounter: "",
        }
    },
    watch: {    
        counter(value){
            if (value > 37) {
                this.messageCounter = "TOO MUCH";
                setTimeout(() => {
                    this.counter = 0;
                }, 5000);
            } else if(value < 37){
                this.messageCounter = "Not there yet";
            }
        }
    },
    methods: {
        add(value){
            this.counter = this.counter + value;
        },
        reduce(value){
            this.counter = this.counter - value;
        }
    },
})

app.mount('#assignment');
