import { createRouter, createWebHistory } from "vue-router";

// Importer les composants de vue
import HomeView from "../views/HomeView.vue";
import AppAboutMe from "../components/AppAboutMe.vue";
import AppPortefolio from "../components/AppPortefolio.vue";
import AppContact from "../components/AppContact.vue";

const routes = [
  {
    path: "/",
    component: HomeView, // Affiche une page d'accueil ou vide
  },
  {
    path: "/AppAboutMe",
    component: AppAboutMe, // Affiche le composant Présentation
  },
  {
    path: "/AppPortefolio",
    component: AppPortefolio, // Affiche le composant Portfolio
  },
  {
    path: "/AppContact",
    component: AppContact, // Affiche le composant Contact
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/", // Redirige toutes les routes non trouvées vers l'accueil
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
