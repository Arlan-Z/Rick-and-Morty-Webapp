<template>
  <div class="locations">
    <h1>Locations</h1>
    <div class="location-list">
      <div class="location-card" v-for="location in locations" :key="location.id">
        <router-link :to="`/location/${location.id}`" class="location-link">
          <h2>{{ location.name }}</h2>
          <p>{{ location.type }}</p>
        </router-link>
      </div>
    </div>
    <div class="pagination">
      <button @click="fetchLocations(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="fetchLocations(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      locations: [],
      currentPage: 1,
      totalPages: 1,
    };
  },
  created() {
    this.fetchLocations(this.currentPage);
  },
  methods: {
    fetchLocations(page) {
      if (page < 1 || page > this.totalPages) return;
      
      axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
        .then(response => {
          this.locations = response.data.results;
          this.currentPage = page;
          this.totalPages = response.data.info.pages;
        });
    },
  },
};
</script>

<style scoped>
.locations {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

.location-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.location-card {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.location-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.location-link {
  text-decoration: none;
  color: #333;
}

.location-link h2 {
  margin: 0 0 10px;
  font-size: 1.5em;
}

.location-link p {
  margin: 0;
  color: #666;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #155ab6;
}

button:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}

span {
  margin: 0 10px;
  font-size: 1.1em;
}
</style>
