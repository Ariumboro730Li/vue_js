<template>
    <div>
        <base-card>
            <div class="d-flex justify-content-center">
                <base-button class="m-2" @click="setSelectedTabs(`stored-resources`)" :mode="storedResButtonMode">Stored Resourcess</base-button>
                <base-button class="m-2" @click="setSelectedTabs(`add-resource`)" :mode="addResButtonMode">Add Resource</base-button>
            </div>
        </base-card>
        <keep-alive>       
            <component :is="selectedTab"></component>
        </keep-alive>
    </div>
</template>
<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
    components: {
        StoredResources,
        AddResource,
    }, 
    data() {
        return {
            selectedTab: `stored-resources`,
            storedResources : [
                {
                    id : "1",
                    title : "Official Guide",
                    description : "Vue Js Offical",
                    link : "https://vuejs.org",
                },
                {
                    id : "2",
                    title : "Google",
                    description : "Google",
                    link : "https://google.com",
                },
            ],
        }
    },
    provide() {
        return {
            resources : this.storedResources,
            addResource : this.addResource,
            removeResource : this.removeResource,
        }
    },
    computed: {
        storedResButtonMode(){
            return this.selectedTab == "stored-resources" ? `btn-danger` : `btn-outline-danger` 
        },
        addResButtonMode(){
            return this.selectedTab == "add-resource" ? `btn-danger` : `btn-outline-danger` 
        }
    },
    methods: {
        setSelectedTabs(tab){
            this.selectedTab = tab;
        },
        addResource(dataResource){
            this.storedResources.unshift(dataResource);
            this.selectedTab = `stored-resources`;
        },
        removeResource(resourceId){
            const resourceIndex = this.storedResources.findIndex(
                res => res.id === resourceId
            )
            this.storedResources.splice(resourceIndex, 1)
        }
    },
}
</script>