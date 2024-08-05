<template>
    <div v-if="character">
      <h1>{{ character.name }}</h1>
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
      <p>Gender: {{ character.gender }}</p>
      <p>Location: {{ character.location.name }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        character: null,
      };
    },
    created() {
      const id = this.$route.params.id;
      axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          this.character = response.data;
        });
    },
  };
  </script>
  