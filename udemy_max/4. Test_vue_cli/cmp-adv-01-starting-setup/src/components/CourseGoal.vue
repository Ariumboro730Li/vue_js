<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" anotherProp=".1.2.3.4.5.6.7.8"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals : [
                "beauty", "finish the course", "be a $10.000 / month programmer"
            ]
        }
    },
}
</script> 