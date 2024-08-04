import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Characters from '@/views/Characters.vue';
import CharacterDetail from '@/components/CharacterDetail.vue';
import Episodes from '@/views/Episodes.vue';
import EpisodeDetail from '@/components/EpisodeDetail.vue';
import Locations from '@/views/Locations.vue';
import LocationDetail from '@/components/LocationDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/characters', component: Characters },
    { path: '/characters/:id', component: CharacterDetail },
    { path: '/episodes', component: Episodes },
    { path: '/episodes/:id', component: EpisodeDetail },
    { path: '/locations', component: Locations },
    { path: '/locations/:id', component: LocationDetail },
  ],
});
