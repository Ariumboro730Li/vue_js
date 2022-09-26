<template>
    <div>
        <p>The Counter = {{ counter }}</p>
    </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
    computed:{
        counter() {
            return this.$store.state.counter * 2;
        }
        // ...mapGetters([
        //     `finalCounter`
        // ])
    },
}
</script>