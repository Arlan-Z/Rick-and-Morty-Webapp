<template>
    <div v-if="location">
      <h1>{{ location.name }}</h1>
      <p>Type: {{ location.type }}</p>
      <p>Dimension: {{ location.dimension }}</p>
      <h2>Residents</h2>
      <ul>
        <li v-for="resident in location.residents" :key="resident">
          <router-link :to="`/character/${resident.split('/').pop()}`">{{ resident.split('/').pop() }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        location: null,
      };
    },
    created() {
      const id = this.$route.params.id;
      axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(response => {
          this.location = response.data;
        });
    },
  };
  </script>
  