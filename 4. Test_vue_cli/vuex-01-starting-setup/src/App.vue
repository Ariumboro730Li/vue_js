<template>
  <div>
    <base-container title="Vuex" v-if="isAuth">
        <TheCounter/>
        <CounterWithGetters/>
        <button @click="increment">Add 1</button>
        <!-- <button @click="addWithParam">Add With Param</button> -->
      <button @click="incrementWithValue({value: 22})">Add With Param</button>
    </base-container>
    <base-container>
      <user-auth></user-auth>
    </base-container>    
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import CounterWithGetters from './components/CounterWithGetters.vue';
import UserAuth from './components/UserAuth.vue';
import { mapActions } from "vuex";

export default {
  components: {
    BaseContainer,
    TheCounter,
    CounterWithGetters,
    UserAuth,
  },
  methods: {
    ...mapActions(
      {
        increment : "increment",
        incrementWithValue : "incrementWithValue"
        // incrementWithValue :  ["incrementWithValue", {value : 10}],
      }
      // ["increment", "incrementWithValue"]
    ),

    // addOne() {
    //   this.$store.dispatch("increment");
    // },
    // addWithParam() {
    //   let param = {
    //     value : 10
    //   };
    //   this.$store.dispatch("incrementWithValue", param);
    // }
  },
  computed: {
      isAuth() {
          return this.$store.getters.userIsAuthenticated;
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