<template>
  <section class="home-view">
    <img src="../assets/Images/logo.png" alt="Image principale" class="main-image"/>
    <h2>PORTEFOLIO TRP</h2>
    <p>Develloppeur Web & Web Mobile</p>
  </section>
</template>

<script setup>
 
</script>

<style>
  .home-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px;
    gap: 25px;
    min-height: 80vh; /* centrer verticalement */
    background-color: #fffdfda2; 
  }

  .main-image { 
  display: block;
  width: 30%;
  height: auto;
  margin: 30px 0;
  }

</style>
