<template>
    <div>
        <learning-resource
        v-for="res in resources"
        :key="res.id"
        :id="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link"
        ></learning-resource>
    </div>
</template>

<script>
import LearningResource from './LearningResource.vue'
export default {
    inject : [
        'resources'
    ],
    components : {
        LearningResource,
    },
    // mounted() {
    //     alert(this.resources);
    // },
}
</script>