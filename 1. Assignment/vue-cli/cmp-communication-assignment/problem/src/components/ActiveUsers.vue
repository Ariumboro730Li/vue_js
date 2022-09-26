<template>
    <div class="container">
        <div class="card text-center mt-3">
          <div class="card-body">
            <h4 class="card-title">{{ username }}</h4>
            <p class="card-text">{{ age }}</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        // id : {
        //     type : Number,
        //     required : true,
        //     // default : 1,
        // },
        username : {
            type : String,
            required : true,
            // default : "mr A"
        },
        age : {
            type : Number,
            required : true,
            // default : 23,
        }
    }
}
</script>

<style>
    
</style>