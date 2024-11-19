<template>
  <div v-if="show" class="modal-component" @click.self="$emit('close')">
    <div class="modal">
      <button class="close-button" @click="$emit('close')">X</button>
      <div class="modal-content">
        <div class="carousel">
          <img :src="project.images" :alt="project.title" />
          <!-- future utilisation, mise en place carousel -->
          <!-- <button class="control-button prev" @click="prevImage">Prev</button>
          <button class="control-button next" @click="nextImage">Next</button> -->
        </div>
        <div class="modal-text">
          <h3>{{ project.title }}</h3>
          <p>Fait le <time :datetime="project.date">{{ project.date }}</time></p>
          <div>
            <h4>Technologies utilisées:</h4>
            <ul>
              <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
            </ul>
          </div>
          <div>
            <a :href="project.link" target="_blank">Visiter le projet</a>          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
});

// const currentIndex = ref(0);

const currentImage = computed(() => {
  return props.project.images.value;
});

// future utilisation, mise en place carousel
// const prevImage = () => {
//   currentIndex.value = (currentIndex.value - 1 + props.project.images.length) % props.project.images.length;
// };

// const nextImage = () => {
//   currentIndex.value = (currentIndex.value + 1) % props.project.images.length;
// };
const closeModal = () =>{
  props.show = false;
  $emit('close');
}
</script>

<style scoped>
.modal-component {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
}

.modal-content img {
  flex: 0 0 auto;
  width: 60%;
  max-width: 45%;
  height: auto;
  margin-right: 20px;
  object-fit: cover;
}

.modal-text {
  flex: 1 1 auto;
  max-width: 50%;
}

.modal-text h3 {
  font-size: 1.5rem;
  color: #00bd7e;
  margin-bottom: 0.5rem;
}

.modal-text h4 {
  font-size: 1rem;
  color: #333;
  margin-top: 1rem;
}

.modal-text ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.modal-text li {
  margin-bottom: 0.5rem;
}

.modal-text a {
  text-decoration: none;
  color: #00bd7e;
  font-weight: bold;
  transition: color 0.3s;
}

.modal-text a:hover {
  color: #045718;
}
</style>
