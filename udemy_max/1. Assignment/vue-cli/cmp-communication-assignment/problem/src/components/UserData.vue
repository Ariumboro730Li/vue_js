<template>
    <div class="mt-2 d-flex justify-content-center">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modelId">
          New Data
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form @submit.prevent="submitNewFriend">
                        <div class="modal-header">
                            <h5 class="modal-title">New Data</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="">Username</label>
                                <input type="text" v-model="enteredUsername" class="form-control" placeholder="" aria-describedby="helpId">
                                <small id="helpId" class="text-muted">Help text</small>
                            </div>
                            <div class="form-group">
                                <label for="">Age</label>
                                <input type="number" v-model="enteredAge" class="form-control" placeholder="" aria-describedby="helpId">
                                <small id="helpId" class="text-muted">Help text</small>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits : ['add-data'],
    data() {
        return {
            enteredUsername : ``,
            enteredAge : ``,
        }
    },
    methods: {
        submitNewFriend() {
            this.$emit(
                'add-data',
                this.enteredUsername,
                this.enteredAge
            );
                this.enteredUsername = ``;
                this.enteredAge = ``;

        }
    },
}
</script>