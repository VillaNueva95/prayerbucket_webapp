<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    navigateTo(route) {
      this.$router.push({ name: route });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#6e8efb, #a777e3);
  height: 100vh;
  width: 100vw;
  margin: 0;
}

.logo {
  width: 200px; /* Adjust the size as needed */
  margin-bottom: 40px; /* Space between logo and links */
}

.mt-3 {
  margin-top: 1rem;
}
</style>
