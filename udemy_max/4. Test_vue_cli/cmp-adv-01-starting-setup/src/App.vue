<template>
  <div >
   <TheHeader part="12" />
    <!-- <the-header-1
      part="80"
    ></the-header-1> 
  <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goal>
        <template #default="slotProps">
          <h2 v-if="slotProps.item == 'beauty'">
            {{slotProps.item}} {{ slotProps['another-prop']}}
          </h2>
          <h3 v-else>
              {{slotProps.anotherProp}}
          </h3>
        </template>
    </course-goal> -->

    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <button @click="setSelectedComponent('add-goals')">Add Goals</button>
    <!-- <active-goal v-if="selectedComponent == 'active-goals'"></active-goal>
    <manage-goal v-else></manage-goal> -->
    <keep-alive>
      <component v-bind:is="selectedComponent"></component>
    </keep-alive>
  </div>

</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import CourseGoal from './components/CourseGoal.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
import AddGoals from './components/AddGoals.vue';

export default {
  components: {
    // "the-header-1" : TheHeader,
    // TheHeader2 : TheHeader,
    TheHeader,
    // BadgeList,
    // CourseGoal,
    ActiveGoals,
    ManageGoals,
    AddGoals,
  },
  data() {
    return {
      selectedComponent : "active-goals",
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp){
      this.selectedComponent = cmp;
    }
  },
  // mounted() {
  //   console.log(this);
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>