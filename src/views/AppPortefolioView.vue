<template>
  <article id="AppPortefolio" class="AppPortefolio">
    <h2>Mes créations</h2>
    <div class="creations-container">
      <section class="cv" @click="openModal(cvProject)">
        <h3>CV</h3>
          <img :src="cvProject.images" alt="CV" class="creation" width="20%">
      </section>

      <section class="dym" @click="openModal(dymProject)">
        <h3>Dynamiser un espace des commentaires</h3>
          <img :src="dymProject.images" alt="Espace commentaire" class="creation" width="20%">
      </section>

      <section class="space" @click="openModal(spaceProject)">
        <h3>My home space</h3>
          <img :src="spaceProject.images" alt="My home space" class="creation" width="20%">
      </section>

      <section class="charges" @click="openModal(chargesProject)">
        <h3>Cahier de charges</h3>
          <img :src="chargesProject.images" alt="Cahier de charges" class="creation" width="20%">
      </section>
    </div>

    <!-- Modal -->
    <Modal v-if="showModal" :project="selectedProject" :show="showModal" @close="closeModal" />
  </article>
</template>


<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';

const cvProject = {
  title: 'CV',
  date: '27-02-2024',
  technologies: ['HTML', 'CSS3'],
  link: 'https://github.com/sttstania/cv.rp.git',
  images: './src/assets/Images/cv.png', 
};

const dymProject = {
  title: 'Dynamiser un espace des commentaires',
  date: '28-05-2024',
  technologies: ['HTML', 'CSS3'],
  link: 'https://github.com/sttstania/DynamiserUnEspaceDeCommentaires.git',
  images: './src/assets/Images/dynamiserUnEspaceCommentaires.png', 
};

const spaceProject = {
  title: 'My home space',
  date: '01-03-2024',
  technologies: ['HTML', 'CSS3'],
  link: 'https://github.com/sttstania/myhomespace.git',
  images: './src/assets/Images/myHomeSpace.png',
};

const chargesProject = {
  title: 'Cahier de charges',
  date: '02-04-2024',
  technologies: ['Microssoft Office Word'],
  link: './src/assets/Dossier/CahierDeChargesTRP.pdf',
  images: './src/assets/Images/cahierDeCharges.png',
};

const selectedProject = ref(null);
const showModal = ref(false);

const openModal = (project) => {
  selectedProject.value = project;
  showModal.value = true;
};

const closeModal = () => {
  selectedProject.value = null;
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
  flex: 1 1 calc(25% - 20px);
  max-width: calc(25% - 20px);
  box-sizing: border-box;
  text-align: center;
  padding: 10px;
  transition: transform 0.3s ease;
}

section:hover {
  transform: scale(1.05);
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
