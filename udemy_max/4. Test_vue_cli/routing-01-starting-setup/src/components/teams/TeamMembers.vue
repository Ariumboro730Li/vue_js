<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link :to="`/teams/t${this.nextTeam}?q=someQ`">To Team {{this.nextTeam}}</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: [
    'users',
    'teams'
  ],
  props: [`teamId`],
  components: {
    UserItem
  },
  data() {
    return {
      teamName : ``,
      nextTeam : parseInt(this.teamId.replace("t", "")) + 1,
      members: [],
      queries: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      this.nextTeam = parseInt(teamId.replace("t", "")) + 1;
      // console.log(route);
      // route.path;
      // const teamId = route.params.teamId;
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUsers = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUsers);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
    loadQueries(){
      this.queries = this.$route.query;
      console.log(this.queries);
    }
  },
  created(){
    this.loadTeamMembers(this.teamId);
    this.loadQueries();
  }, 
  beforeRouteUpdate(to, from, next){
    to; from;
    alert("update Teamssssss");
    next();
  },
  watch: {
    teamId(newId){
      this.loadTeamMembers(newId);
      this.loadQueries();
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>