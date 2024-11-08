<template>
  <div id="contact">
      <h2>Formulaire de Contact</h2>
      <form @submit.prevent="sendEmail()">
          <div>
              <label for="name">Nom:</label>
              <div>
                  <input type="text" id="name" name="name" required />
              </div>
          </div>
          <div>
              <label for="fname">Prénom</label>
              <div>
                  <input type="text" id="fname" name="name" required />
              </div>
          </div>
          <div>
              <label for="objet">Objet:</label>
              <div>
                  <textarea id="objet" name="objet" required></textarea>
              </div>
          </div>
          <div>
              <label for="message">Message</label>
              <div>
                  <textarea id="message" name="message" required></textarea>
              </div>
          </div>
          <button type="submit">Envoyer</button>

      </form>
  </div>
</template>

  
  <script setup>

    const mail = import.meta.env.VITE_EMAILADDRESS;
    function sendEmail() {
        alert("votre message a bien ete envoye a l'addresse " + mail);
    }


  </script>

