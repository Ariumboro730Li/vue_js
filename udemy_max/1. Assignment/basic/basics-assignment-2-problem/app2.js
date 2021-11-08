const app = Vue.createApp({
    data(){
        return {
            name: '',
            confirmedName: ''
        }
    },
    methods:{
        alert(){
            alert('Alert is working');
        },
        userInput(event){
            this.name = event.target.value; 
        },
        confirmedInput(){
            this.confirmedName = this.name;
        }
    }
});

app.mount('#assignment')
