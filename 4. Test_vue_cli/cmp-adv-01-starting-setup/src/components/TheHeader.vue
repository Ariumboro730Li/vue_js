<template>
  <header>
    <h1>More on Vue Components {{ part }}</h1>
  </header>
</template>

<script>
export default {
    props: {
      part: Number,
    }
}
</script>
<style scoped>
  header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #14005e;
  }

  header h1 {
    color: white;
    margin: 0;
  }
</style>