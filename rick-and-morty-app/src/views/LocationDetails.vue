<template>
  <div v-if="location">
    <h1>{{ location.name }}</h1>
    <p>Type: {{ location.type }}</p>
    <p>Dimension: {{ location.dimension }}</p>
    <h2>Residents</h2>
    <ul>
      <li v-for="resident in residents" :key="resident.id">
        <router-link :to="`/character/${resident.id}`">{{ resident.name }}</router-link>
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
      residents: [],
    };
  },
  created() {
    const id = this.$route.params.id;
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then(response => {
        this.location = response.data;
        return Promise.all(response.data.residents.map(url => axios.get(url)));
      })
      .then(residentResponses => {
        this.residents = residentResponses.map(response => response.data);
      });
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #1a73e8;
}

a:hover {
  text-decoration: underline;
}
</style>
