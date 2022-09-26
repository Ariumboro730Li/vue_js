<template>
    <teleport to="body">
        <span></span>
        <dialog open>   
            <div class="modal fade show" id="modelId" style="display : block">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ code }} - {{ title }}</h5>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <slot></slot>
                                <slot name="actions">
                                    <div class="d-flex justify-content-center">
                                        <base-button @click="$emit('close')" mode="btn-danger col-8">Okay</base-button>
                                    </div>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    </teleport>
</template>

<script>
export default {
    props :{
        title : {
            type : String,
            required : false,
        },
        code : {
            type : Number,
            required : false,
        },
    },
    emits : ['close'],
}
</script>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #3a0061 !important;
}

.modal-header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}

span {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

/* span {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}


header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
} */
</style>