import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CharacterDetails from '../views/CharacterDetails.vue';
import Episodes from '../views/Episodes.vue';
import EpisodeDetails from '../views/EpisodeDetails.vue';
import Locations from '../views/Locations.vue';
import LocationDetails from '../views/LocationDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/character/:id', name: 'CharacterDetails', component: CharacterDetails },
  { path: '/episodes', name: 'Episodes', component: Episodes },
  { path: '/episode/:id', name: 'EpisodeDetails', component: EpisodeDetails },
  { path: '/locations', name: 'Locations', component: Locations },
  { path: '/location/:id', name: 'LocationDetails', component: LocationDetails },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
