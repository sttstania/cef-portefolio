<template>
    <footer class="AppFooter">
      <div class="socialNetworks">
        <a href="https://github.com/sttstania" target="blank">
          <img src="../assets/Images/github.png" alt="GitHubLogo"> 
        </a>
      </div>
      <p>&copy; 2024 Mon Portfolio</p>
      <p>Dernière mise a jour le {{ lastUpdatedDate }}</p>
    </footer>
  </template>
  
<script setup>
import {ref } from 'vue';

const lastUpdatedDate = ref(new Date().toLocaleDateString());

</script>

<style scoped>
  footer {
      margin-top: 30px;
      padding: 10px;
      background-color: #00bd7e;
      box-shadow: 0 2px 4px rgba(14, 22, 18, 0.1);
  }

  div a img {
    width: 40px;
  }

</style>
  