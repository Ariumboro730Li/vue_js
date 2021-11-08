const app = Vue.createApp({
    data() {
        return {
            myname : "Ari Umboro",
            myage : 23,
            randNumber : Math.random(),
            pict : "https://imgcdnblog.carvaganza.com/wp-content/uploads/2019/11/Ferrari-Roma-Official-1.jpg"
        }
    },
    methods: {
        calculateAge(){
            return this.myage + 5;
        }
    },
})

app.mount(`#assignment`);