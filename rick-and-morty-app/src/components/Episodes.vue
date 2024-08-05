<template>
    <div>
      <h1>Episodes</h1>
      <div v-for="episode in episodes" :key="episode.id">
        <router-link :to="`/episode/${episode.id}`">{{ episode.name }}</router-link>
        <p>{{ episode.air_date }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        episodes: [],
      };
    },
    created() {
      axios.get('https://rickandmortyapi.com/api/episode')
        .then(response => {
          this.episodes = response.data.results;
        });
    },
  };
  </script>
  