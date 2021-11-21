<template>
  <div>
    <router-view></router-view>
    <ul>
      <teams-item
        v-for="team in teams"
        :key="team.id"
        :id="team.id"
        :name="team.name"
        :member-count="team.members.length"
      ></teams-item>
    </ul>
  </div>
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  inject: ['teams'],
  data() {
    return {
      fullPath : '/teams'
    }
  },
  watch: {
      $route(newRoute){
        this.fullPath = newRoute.fullPath;
      }
  },
  created() {
    this.fullPath = this.$route.fullPath;
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>