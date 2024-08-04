<template>
    <div>
      <h1>Characters</h1>
      <div v-for="character in characters" :key="character.id">
        <router-link :to="'/characters/' + character.id">
          <img :src="character.image" :alt="character.name" />
          <p>{{ character.name }}</p>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        characters: [],
      };
    },
    created() {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
          this.characters = response.data.results;
        });
    },
  };
  </script>
  