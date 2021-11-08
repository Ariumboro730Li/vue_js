<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {

    }
  },
  methods: {
    confirmInput(){
      this.$router.push('/teams');
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log("before enter users");
    console.log(to, from);
    let con = prompt("message ?");
    if (con == "okeh") {
        next();
    } else {
        alert("You are not alowed to enter");
        next({
            name : 'teams',
        });
    }
  },
  beforeRouteLeave (to, from, next) {
    
  }, 
  unmounted() {
   confirm("Are you sure want to exit this page ??????");
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>