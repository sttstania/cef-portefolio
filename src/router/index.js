import { createRouter, createWebHistory } from "vue-router";

// Importer les composants de vue
import HomeView from "../views/HomeView.vue";
import AppAboutMe from "../views/AppAboutMeView.vue";
import AppPortefolio from "../views/AppPortefolioView.vue";
import AppContact from "../views/AppContactView.vue";
import HomeNotFound from "@/views/HomeNotFoundView.vue";
import Modal from "@/components/Modal.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/AppAboutMe", component: AppAboutMe },
  { path: "/AppPortefolio", component: AppPortefolio },
  { path: "/AppContact", component: AppContact },
  { path: "/Modal", component: Modal },
  {
    path: "/:pathMatch(.*)*",
    name: "HomeNotFound",
    component: HomeNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
