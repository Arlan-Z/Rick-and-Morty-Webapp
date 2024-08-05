<template>
    <div v-if="episode">
      <h1>{{ episode.name }}</h1>
      <p>Air Date: {{ episode.air_date }}</p>
      <p>Episode: {{ episode.episode}}</p>
      <h2>Characters</h2>
      <ul>
        <li v-for="character in episode.characters" :key="character">
          <router-link :to="`/character/${character.split('/').pop()}`">{{ character.split('/').pop() }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        episode: null,
      };
    },
    created() {
      const id = this.$route.params.id;
      axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
        .then(response => {
          this.episode = response.data;
        });
    },
  };
  </script>
  