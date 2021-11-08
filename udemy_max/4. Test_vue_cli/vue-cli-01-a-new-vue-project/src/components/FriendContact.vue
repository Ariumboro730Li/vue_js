<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button v-on:click="toggleDetails"> 
            {{ detailsAreVisible ? 'Hide' : 'Show' }}
            Details
        </button>

        <ul v-if="detailsAreVisible">
            <li><strong>Phone : </strong> {{ friend.phone }}</li>
            <li><strong>Email : </strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {            
            detailsAreVisible : true,
            friend : 
            {
                id : 1,
                name : "Number One",
                phone : "1111111111",
                email : "one@email.com"
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>