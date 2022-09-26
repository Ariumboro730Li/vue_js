const app = Vue.createApp({
    data() {
        return {
            name : "",
            keydownedName: "Keydown",
            confirmedName: "Enter",
        }
    },
    methods: {
        submitForm(){
            alert("submitted");
        },  
        keydownName(){
            let okename = this.name;
            this.keydownedName = `Keydown ${okename}`;
        },      
        confirmName(){
          let okename = this.name;
          this.confirmedName = `ENTERED ${okename}`;
        },    
        setName(event, secondName){
          this.name = event.target.value +' '+ secondName;
        },            
    },
})

app.mount('#assignment');