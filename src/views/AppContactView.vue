<template>
  <div id="contact">
    <h2>Formulaire de Contact</h2>
    <form @submit.prevent="sendEmail">
      <div class="form-component flex">
        <div class="form-field">
          <label for="name">Nom:</label>
          <input type="text" id="name" name="name" v-model="formData.name" required />
        </div>
        <div class="form-field">
          <label for="fname">Prénom:</label>
          <input type="text" id="fname" name="fname" v-model="formData.fname" required />
        </div>
      </div>
      <div class="form-component">
        <label for="objet">Objet:</label>
        <textarea id="objet" name="objet" v-model="formData.objet" required></textarea>
      </div>
      <div class="form-component">
        <label for="message">Message:</label>
        <textarea id="message" name="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const mail = import.meta.env.VITE_EMAILADDRESS;
  const formData = ref ({
    name:'',
    fname:'',
    objet:'',
    message:''
  });

  function clearForm() {
  formData.value.name = '';
  formData.value.fname = '';
  formData.value.objet = '';
  formData.value.message = '';
  };

  function sendEmail() {
    alert("Votre message a bien été envoyé à l'adresse " + mail);
    clearForm();
  }


  
</script>

<style scoped>
#contact {
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  font-family: 'Roboto', sans-serif;
  color: #333;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#contact h2 {
  text-align: center;
  font-size: 1.8rem;
  color: #00bd7e;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.form-component {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.form-component label {
  margin-right: 1rem;
  font-weight: bold;
  color: #333;
  min-width: 80px;       /* Aligne les labels */
}

.form-component.flex {
  gap: 2rem;
}

.form-field {
  flex: 1;
  display: flex;
  align-items: center;
}

.form-field input,
.form-field textarea,
.form-component textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 7px;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

textarea {
  resize: none;
}

textarea#objet {
  height: 50px;
}

textarea#message {
  height: 120px;
}

button[type="submit"] {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #00bd7e;
  border: none;
  border-radius: 7px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #045718;
}
</style>
