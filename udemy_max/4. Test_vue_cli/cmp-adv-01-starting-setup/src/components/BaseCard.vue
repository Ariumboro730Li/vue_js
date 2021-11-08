<template>
    <section>
        <h1 class="header-card">{{ headerTitle }}</h1>
        <span class="header">
            <slot name="header">The Default Header</slot>
        </span>
        <slot></slot>
    </section>
</template>

<script>
export default {
    data() {
        return {
            headerTitle : "NAVBAR"
        }
    },
    mounted() {
        console.log(this.$slots);
    },
}
</script>

<style scoped>
    .header {
        font-size: 3em;
    }
    section {
        margin: 2rem auto;
        max-width: 30rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        text-align: center;
        background-color: aqua;

    }

    .header-card {
        color :blueviolet;
        text-align: center;
    }


</style>