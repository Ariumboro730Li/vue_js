<template>
    <div>        
        <base-dialog v-if="InputIsInvalid" :title="titleDialog" :code="codeDialog" @close="confirmError">
            <template #default>
                <div>
                    <h4>Unfortunately, at least one input value is invalid</h4>
                    <p>Please Check All Input Field</p>
                </div>
            </template>
        </base-dialog>
        <base-card class="shadow">
            <h2>Add Resource</h2>
            <form class="mt-4" @submit.prevent="submitAddResource" >
                <div class="form-group">
                    <label for="">Title</label>
                    <input  type="text" name="title" id="title" class="form-control" placeholder="Input Title" ref="titleResource">
                    <small id="helpId" class="text-muted"></small>
                </div>
                <div class="form-group">
                    <label for="">Description</label>
                    <textarea  class="form-control" name="description" id="description" rows="3" ref="descriptionResource"></textarea>
                    <small id="helpId" class="text-muted"></small>
                </div>
                <div class="form-group">
                    <label for="">Link</label>
                    <input  type="text" name="link" id="link" class="form-control" placeholder="Input Link" ref="linkResource" >
                    <small id="helpId" class="text-muted"></small>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="col-8">
                        <base-button type="submit" mode="col-12 btn-primary">Submit</base-button>
                    </div>
                </div>
            </form>
        </base-card>
    </div>
</template>

<script>
export default {
    inject : ['addResource'],
    data() {
        return{
            InputIsInvalid : false,
            titleDialog : null,
            codeDialog : 200,
        }
    },
    methods: {
        getRandomValue(min, max){
            return Math.floor(Math.random() * (max - min)) + min;
        },
        submitAddResource(){
            const dataEntered = {
                id : this.getRandomValue(10, 1000),
                title : this.$refs.titleResource.value,
                description : this.$refs.descriptionResource.value,
                link : this.$refs.linkResource.value,
            };

            if (dataEntered['title'] === "" || dataEntered['description'] === "" || dataEntered['link'] === "") {                
                this.InputIsInvalid = true;
                this.titleDialog = "Invalid Input";
                this.codeDialog = 400;
                return;
            }
            this.addResource(dataEntered);
        }, 
        confirmError(){
             this.InputIsInvalid =! this.InputIsInvalid;
        }
    },
}
</script>