<template>
  <base-container title="Vuex">
      <TheCounter/>
      <CounterWithGetters/>
      <button @click="addOne">Add 1</button>
      <button @click="addWithParam">Add With Param</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import CounterWithGetters from './components/CounterWithGetters.vue';


export default {
  components: {
    BaseContainer,
    TheCounter,
    CounterWithGetters
  },
  methods: {
    addOne() {
      this.$store.commit("increment");
    },
    addWithParam() {
      let param = {
        value : 10
      };
      this.$store.commit("incrementWithValue", param);
    }
  }
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
</style>