<template>
  <section id="AppAboutMe" class="AppAboutMe">
    <h2>Bienvenue dans mon portfolio!</h2>
    <p>
    <p>
      Je suis ravie de vous accueillir ici pour partager un peu de mon histoire, de mon parcours et de ce qui m'anime aujourd'hui.
    </p>
      Pendant plus de 15 ans, j'ai été infirmière. J'ai exercé dans des environnements variés : ambulances, soins à domicile, blocs opératoires, centres de réhabilitation, services de chirurgie et laboratoires. Mon métier m'a menée dans plusieurs pays, du Portugal à l'Angola, en passant par la France et la Belgique. À l'âge de 18 ans, j'avais suivi le chemin que mes parents imaginaient pour moi, sans vraiment savoir ce que je voulais. Au fil des années, j'ai fait face à de nombreux défis humains, à des conditions de travail exigeantes et à un système souvent sous pression. Peu à peu, j'ai senti ma flamme vaciller, jusqu'à ne plus me reconnaître dans ce métier que j'avais tant donné.</p>
    <p>
      La pandémie de COVID-19 a été un électrochoc. L'épuisement professionnel m'a rattrapée et, avec la naissance de mes enfants, j'ai compris qu'il me fallait changer, retrouver du sens, et m’épanouir à nouveau. C’est alors que j'ai décidé de suivre une passion qui m'avait toujours habitée : les mathématiques, la logique et la résolution de problèmes. Le développement web m'est apparu comme une évidence, un domaine où je pouvais marier créativité et réflexion, relever de nouveaux défis et donner vie à des projets concrets.    </p>
    <p>
      Changer de carrière après tant d'années dans le milieu de la santé n'a pas été une transition facile. Il m'a fallu "reprogrammer" ma façon de penser, de soigner des personnes à coder des solutions numériques. Mais c’est justement ce défi qui me stimule. Chaque ligne de code que j'écris est une énigme à résoudre, chaque projet est une nouvelle opportunité d'apprendre, d'innover et de créer. Le développement web est bien plus qu'un nouveau métier : c'est une passion qui me pousse à me dépasser, à me réinventer et à voir le monde avec un regard neuf.    </p>
    <p>
      Aujourd'hui, je construis ce nouveau chapitre de ma vie avec la même détermination et la même rigueur que dans mon ancienne carrière. J'ai troqué le soin des patients pour la création de solutions numériques, mais mon désir de faire la différence reste intact. Ce portfolio est une invitation à découvrir ce qui me motive, ce qui me passionne et comment je mets tout mon cœur dans ce que je fais en tant que développeuse web.    </p>
    <p>
      Merci de prendre le temps de me connaître. Je vous souhaite une belle découverte !
    </p>
  </section>
</template>

<script setup>
</script>

<style scoped>
#AppAboutMe {
  padding: 1.2rem;
  margin: 1.5rem auto;
  max-width: 70%;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#AppAboutMe h2 {
  font-size: 1.8rem;
  color: #007bff;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: bold;
}

#AppAboutMe p {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #555;
}

#AppAboutMe a {
  color: #007bff;
  text-decoration: none;
}

#AppAboutMe a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  #AppAboutMe {
    padding: 1rem;
  }

  #AppAboutMe h2 {
    font-size: 1.5rem;
  }

  #AppAboutMe p {
    font-size: 0.95rem;
  }
}
</style>
