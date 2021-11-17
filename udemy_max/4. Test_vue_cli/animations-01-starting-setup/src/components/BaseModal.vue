<template>
  <div>
    <div class="backdrop" @click="$emit('close')"></div>
    <transition class="modal">    
      <dialog open>
        <slot></slot>
      </dialog>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["open"],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
}

.modal.v-enter-active {
    animation: modal 0.8s ease-in-out;
}

.modal.v-leave-active {
    animation: modal 0.8s ease-in reverse;
}

@keyframes modal {
  0% {
    opacity:0;
    transform: translateY(0) scale(1);
  }

  50% {
    opacity:0.5;
    transform: translateY(-120px) scale(0.2);
  }

  100% {
      opacity:1;
      transform: translateY(-100px) scale(1);
  }
}
</style>