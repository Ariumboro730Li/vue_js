<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? "(FAVORITE)" : "" }}</h2>
        <button class="btn btn-sm"
         :class="isFavorite ? 'btn-default' : 'btn-success'"
         @click="toggleFavorite"> {{ isFavorite ? "Unfavorite" : "Favorite" }}</button>
        <span> -- </span>
        <button class="btn btn-sm btn-primary" v-on:click="toggleDetails"> 
            {{ detailsAreVisible ? 'Hide' : 'Show' }}
            Details
        </button>

        <ul v-if="detailsAreVisible">
            <li><strong>Phone : </strong> {{ phoneNumber }}</li>
            <li><strong>Email : </strong> {{ emailAddress }}</li>
        </ul>
        <!-- <a @click.prevent="toggleDelete" class="btn btn-danger btn-sm" href="#" role="button">Del Friend</a> -->
        <a @click.prevent="$emit('toggle-delete', idnya)" class="btn btn-danger btn-sm" href="#" role="button">Del Friend</a>
    </li>
</template>

<script>
export default {
    props : {
        idnya : {
            type : Number,
        },
        name : {
            type : String,
            required : true,
        },
        phoneNumber : {
            type : String,
            required : true,
        },
        emailAddress : {
            type : String,
            required : true,
        },
        isFavorite : {
            type : Boolean,
            default : false,
            required : false,  
        },
    },
    // emit : ['toggle-favorite'],
    emits :{
        "toggle-favorite" : function(id){
            if (id) {
                return true;
            } else {
                alert(`id is missing`);
                return false;
            }
        }
    },
    data() {
        return {            
            detailsAreVisible : true,
            // favoriteFriend : this.isFavorite,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite(){
            // this.favoriteFriend = !this.favoriteFriend;
            this.$emit("toggle-favorite", this.idnya)
        },
        toggleDelete(){
            this.$emit("toggle-delete", this.idnya)
        }
    },
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>