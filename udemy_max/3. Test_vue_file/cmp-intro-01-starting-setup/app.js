const app = Vue.createApp({
    data() {
        return {
            detailsVisible: false,
            friends : [
                {
                    id : "irachan",
                    name : "Isra Azna",
                    phone : "0898191",
                    email : "ira@email.com",
                    detailsVisible : false,
                },
                {
                    id : "someone",
                    name : "someone one",
                    phone : "0898191",
                    email : "someone@email.com",
                    detailsVisible : true,
                },
            ]
        }
    }, 
    methods: {
        showDetails(index){
            this.friends[index].detailsVisible = ! this.friends[index].detailsVisible;
        }
    },
})

app.component("friend-contact", {
    template: `
        <li>
            <h2 v-html="friend.name"></h2>
            <button @click="showDetails(index)">Show Details</button>
            <ul v-if="detailsVisible == true">
                <li><strong>Phone:</strong><span v-html="friend.phone"></span></li>
                <li><strong>Email:</strong><span v-html="friend.email"></span></li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailsVisible : false,
            friend : {
                id : "irachan",
                name : "Isra Azna",
                phone : "0898191",
                email : "ira@email.com",
                detailsVisible : false,
            },

        }
    },
    methods: {
        showDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
});

app.mount(`#app`);