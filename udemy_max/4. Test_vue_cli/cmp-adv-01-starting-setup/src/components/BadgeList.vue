<template>
  <section>
    <base-card>
      <template v-slot:header>
        <!-- <p>Available Badges</p> -->
      </template>
      <template v-slot:default>        
          <base-badge type="admin" caption="ADMIN"></base-badge>
          --
          <base-badge type="author" caption="AUTHOR"></base-badge>
      </template>
    </base-card>
  </section>
</template>

<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>