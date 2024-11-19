<template>
  <div id="app" class="pageWrap">
    <AppHeader /> <!-- Header toujours visible -->
    <main class="content">
      <Modal v-if="isModalOpen" />
      <router-view /> <!-- Contenu dynamique en fonction des routes -->
    </main>
    <AppFooter /> <!-- Footer toujours visible -->
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import Modal from './components/Modal.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute(); //acces a la route actuelle

const isModalOpen = computed(() => route.query.modal === 'true' );

</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
