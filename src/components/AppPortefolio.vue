<template>
  <article id="AppPortefolio" class="AppPortefolio">
    <h2>Mes créations</h2>
    <div class="creations-container">
      <section class="cv" @click="openCarousel(cvProjet)">
        <h3>CV</h3>
        <a href="#">
          <img src="../assets/Images/cv.png" alt="CV" class="creation" width="20%">
        </a>
      </section>

      <section class="dym" @click="openCarousel(dymProjet)">
        <h3>Dynamiser un espace des commentaires</h3>
        <a href="#">
          <img src="../assets/Images/dynamiserUnEspaceCommentaires.png" alt="Espace commentaire" class="creation" width="20%">
        </a>
      </section>

      <section class="space" @click="openCarousel(spaceProjet)">
        <h3>My home space</h3>
        <a href="#">
          <img src="../assets/Images/myHomeSpace.png" alt="My home space" class="creation" width="20%">
        </a>
      </section>

      <section class="charges" @click="openCarousel(chargesProjet)">
        <h3>Cahier de charges</h3>
        <a href="#">
          <img src="../assets/Images/cahierDeCharges.png" alt="Cahier de charges" class="creation" width="20%">
        </a>
      </section>
    </div>

    <!-- Modal -->
    <Modal v-if="showModal" :project="selectedProjet" @close="closeModal" />
  </article>
</template>

<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

const cvProjet = {
  title: 'CV',
  date: '27-02-2024',
  technologies: ['HTML', 'CSS3'],
  link: 'https://github.com/sttstania/cv.rp.git',
  images: ['../assets/Images/cv.png', '../assets/Images/cv1.png', '../assets/Images/cv2.png', '../assets/Images/cv3.png'],
};

const dymProjet = {
  title: 'Dynamiser un espace des commentaires',
  date: '27-02-2024',
  technologies: ['HTML', 'CSS3'],
  link: 'https://github.com/sttstania/DynamiserUnEspaceDeCommentaires.git',
  images: ['../assets/Images/dynamiserUnEspaceCommentaires.png', '../assets/Images/dynamiserUnEspaceCommentaires1.png', '../assets/Images/dynamiserUnEspaceCommentaires2.png', '../assets/Images/dynamiserUnEspaceCommentaires3.png'],
};

const spaceProjet = {
  title: 'My home space',
  date: '27-02-2024',
  technologies: ['HTML', 'CSS3'],
  link: 'https://github.com/sttstania/myhomespace.git',
  images: ['../assets/Images/myHomeSpace.png', '../assets/Images/myHomeSpace1.png'],
};

const chargesProjet = {
  title: 'Cahier de charges',
  date: '27-02-2024',
  technologies: ['HTML', 'CSS3'],
  link: '../assets/Dossier/CahierDeCharges.pdf',
  images: ['../assets/Images/cahierDeCharges.png'],
};

const selectedProjet = ref(null);
const showModal = ref(false);

const openCarousel = (projet) => {
  selectedProjet.value = projet;
  showModal.value = true;
};

const closeModal = () => {
  selectedProjet.value = null;
  showModal.value = false;
};
</script>

<style scoped>
#AppPortefolio {
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
  font-family: 'Roboto', sans-serif;
  color: #333;
}

#AppPortefolio h2 {
  text-align: center;
  color: #00bd7e;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.creations-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; 
}

section {
  flex: 1 1 calc(5% - 20px); 
  max-width: calc(25% - 10px);
  box-sizing: border-box;
  text-align: center;
  padding: 10px;
  transition: transform 0.3s ease;
}

.creation {
  transition: box-shadow 0.3s ease-out;
}

.creation:hover {
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
}

.slider-container {
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center;
  padding: 10px;
}

.slide h3 {
  font-size: 1.5rem;
  color: #51ff00;
  margin-bottom: 0.5rem;
}

.slide a {
  text-decoration: none;
  display: inline-block;
}

.slide img {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 80%;
  height: auto;
  margin-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Controls for the slider */

.control-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #00bd7e;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  border-radius: 50%;
  transition: background 0.3s;
}

.control-button:hover {
  background: #045718;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
