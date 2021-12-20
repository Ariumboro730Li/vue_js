<template>
    <div>
        <h3>Counter with Getter {{ normalizeCounter }}</h3>
        <p>We Do More ...</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed:{
        // counter() {
        //     // return this.$store.getters.finalCounter;
        //     return this.$store.getters.normalizeCounter;
        // }
        ...mapGetters([
            `normalizeCounter`
        ])
    },
}
</script>