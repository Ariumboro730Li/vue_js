<template>
    <div>
        <!-- Button trigger modal -->   
        <div class="d-flex justify-content-center">
            <a href="javascript:void(0)" class="btn btn-success btn-sm btn-sm" 
                data-toggle="modal" data-target="#modelId">
            New Friend
            </a>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <form @submit.prevent="submitNewFriend">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">New Friend</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="form-group">
                                <label for="">Name</label>
                                <input type="text" required v-model="enteredName" class="form-control" placeholder="" aria-describedby="helpId">
                                </div>
                                <div class="form-group">
                                <label for="">Phone</label>
                                <input type="tel" required v-model="enteredPhone" class="form-control" placeholder="" aria-describedby="helpId">
                                </div>
                                <div class="form-group">
                                <label for="">Email</label>
                                <input type="email" required v-model="enteredEmail" class="form-control" placeholder="" aria-describedby="helpId">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits : [
        `add-friend`
    ],
    data() {
        return {
            enteredName : ``,
            enteredPhone : ``,
            enteredEmail : ``,
        }
    },
    methods: {
        submitNewFriend() {

            this.$emit(
                `add-friend`, 
                this.enteredName, 
                this.enteredPhone, 
                this.enteredEmail
            );

            this.enteredName = ``
            this.enteredPhone = ``
            this.enteredEmail = ``
        }
    },
}
</script>