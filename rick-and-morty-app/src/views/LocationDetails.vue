<template>
  <div v-if="location" class="location-details">
    <h1>{{ location.name }}</h1>
    <p class="location-info"><strong>{{ $t('location.type') }}:</strong> {{ location.type }}</p>
    <p class="location-info"><strong>{{ $t('location.dimension') }}:</strong> {{ location.dimension }}</p>
    
    <h2>{{ $t('location.residents') }}</h2>
    <ul class="residents-list">
      <li v-for="resident in residents" :key="resident.id" class="resident-item">
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
.location-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5em;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.location-info {
  font-size: 1.2em;
  color: #555;
  text-align: center;
  margin: 10px 0;
}

.residents-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.resident-item {
  margin-bottom: 10px;
}

.resident-item a {
  text-decoration: none;
  color: #1a73e8;
  font-size: 1.1em;
}

.resident-item a:hover {
  text-decoration: underline;
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  .location-details {
    padding: 10px;
  }

  h1 {
    font-size: 2em;
  }

  .location-info {
    font-size: 1em;
  }

  .resident-item a {
    font-size: 1em;
  }
}
</style>
