<template>
  <div>
    <div class="container">
      <div class="block" :class="{animate : animatedBlock}"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <transition>
        <p v-if="paraIsVisible">This is only sometimes visible....</p>
      </transition>
      <button @click="toggleParagraph">Toggle Paragraph</button>
    </div>
    <div class="container">
      <transition class="one">
        <p v-if="paraIsVisible1">This is only sometimes visible....</p>
      </transition>
      <button @click="toggleParagraph1">Toggle Paragraph</button>
    </div>
    <!-- <transition class="modal">     -->
      <base-modal @close="hideDialog" v-if="dialogIsVisible">
        <p>This is a test dialog!</p>
        <button @click="hideDialog">Close it!</button>
      </base-modal>
    <!-- </transition> -->
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      paraIsVisible1: false,
    };
  },
  methods: {
    toggleParagraph(){
      this.paraIsVisible = !this.paraIsVisible;
    },
    toggleParagraph1(){
      this.paraIsVisible1 = !this.paraIsVisible1;
    },
    animateBlock(){
      this.animatedBlock = !this.animatedBlock;      
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-in; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate{
  /* transform: translateX(-150px); */
  animation: slide-fade 1s ease-out forwards;
}

.v-enter-active {
  /* transition: all 6s ease-out; */
  animation: slide-fade 1s ease-in forwards;
}
.v-leave-active {
  /* transition: all 6s ease-out; */
  animation: slide-fade 1s ease-in-out forwards;
}

/* .modal.v-enter-active {
  animation: modal 1s ease-in forwards;
}
.modal.v-leave-active {
  transition: all 0.3s ease-out;
} */

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  50% {
    transform: translateX(-120px) scale(0.2);
  }

  100% {
      transform: translateX(-240px) scale(1);
  }
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