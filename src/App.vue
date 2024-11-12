<template>
  <div id="app" class="pageWrap">
    <AppHeader /> <!-- Header toujours visible -->
    <main class="content">
      <router-view /> <!-- Contenu dynamique en fonction des routes -->
    </main>
    <AppFooter /> <!-- Footer toujours visible -->
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

</script>

<style>


#app {
  font-family: Grunf sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-image { 
  display: block;
  width: 40%;
  height: auto;
  margin: 30px 0;
}

nav {
  padding: 30px;
  background-color: #42b983;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  font-style: italic;
  text-decoration: underline;
}
</style>
