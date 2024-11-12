<template>
  <section id="AppAboutMe" class="AppAboutMe">
    <h2>Présentation</h2>
    <p>
      Pendant plus de 15 ans, j'ai été infirmière, exerçant dans des contextes divers : ambulances, soins à domicile, blocs opératoires, centres de réhabilitation, chirurgie, laboratoires… et ce, au Portugal, en Angola, en France, et en Belgique. Comme beaucoup, à 18 ans, j'ai suivi la voie suggérée par mes parents sans vraiment savoir où je voulais aller. Année après année, j'ai affronté des défis humains, des conditions de travail exigeantes et un système sous pression constante. Progressivement, j'ai perdu la flamme et ne me reconnaissais plus.
    </p>
    <p>
      Le COVID-19 a marqué un tournant. L'épuisement professionnel s'est intensifié et la naissance de mes enfants m'a ouvert les yeux. J'avais besoin de changement, de retrouver du sens et de m'épanouir à nouveau. C’est là que j'ai choisi de me réinventer et de suivre une passion qui m'a toujours habitée : les mathématiques, la logique, et la résolution de problèmes. Le développement web m’est apparu comme une évidence, un terrain où les défis et la créativité se rencontrent.
    </p>
    <p>
      Changer de carrière après tant d'années en santé n’a pas été simple. Il a fallu "reprogrammer" ma façon de penser, quitter un monde centré sur le soin pour entrer dans celui du numérique et du code. Mais c’est ce défi que j'aime. Aujourd'hui, chaque ligne de code est un problème à résoudre, chaque projet une nouvelle opportunité d’innover et de créer. Le développement web est bien plus qu’un métier : c’est ma nouvelle passion, celle qui me pousse à apprendre, à m'améliorer, et à relever chaque défi.
    </p>
    <p>
      Actuellement en formation au Centre Européen de Formation, je construis ma nouvelle vie professionnelle avec détermination et enthousiasme. J’ai troqué l'accompagnement des patients pour la création de solutions digitales. Je mets la même attention, la même rigueur et le même désir de faire la différence dans ce que je construis en tant que développeuse web. Mon parcours est un chemin de transformation et de renaissance que je poursuis avec passion.
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
