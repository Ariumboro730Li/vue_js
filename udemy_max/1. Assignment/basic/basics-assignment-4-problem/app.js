const app = Vue.createApp({
    data() {
        return {
            inputCSS : "user1",
            inputClasses : "user2",
            btnToggle : true,
            dynBG : 'red',
        }
    },
    watch: {
        inputCSS(value){
            if(value == "user1"){
                this.inputClasses = "user1";
            } else {
                this.inputClasses = "user2";
            }
        },
    },
    computed: {
        btnToggleClassess(){
            return { 
                hidden : this.btnToggle 
            };
        },
        paraClasses() {
            return {
                user1 : this.inputCSS === "user1",
                user2 : this.inputCSS === "user2",
                visible : this.btnToggle,
                hidden : !this.btnToggle
            }
        }
    },
    methods: {
        btnToggleFunc(val){
            // if (val == "hidden") {
                this.btnToggle = !this.btnToggle;
            // }
        }
    }
})

app.mount(`#assignment`);