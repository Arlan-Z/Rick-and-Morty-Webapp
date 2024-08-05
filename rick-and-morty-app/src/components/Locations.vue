<template>
    <div>
      <h1>Locations</h1>
      <div v-for="location in locations" :key="location.id">
        <router-link :to="`/location/${location.id}`">{{ location.name }}</router-link>
        <p>{{ location.type }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        locations: [],
      };
    },
    created() {
      axios.get('https://rickandmortyapi.com/api/location')
        .then(response => {
          this.locations = response.data.results;
        });
    },
  };
  </script>
  