<template>
  <div>
    <h1>Locations</h1>
    <div v-for="location in locations" :key="location.id">
      <router-link :to="`/location/${location.id}`">{{ location.name }}</router-link>
      <!-- <p>{{ location.type }}</p> -->
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

<style>
/* Добавьте стили для улучшения отображения, если необходимо */
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin: 0 10px;
}
</style>
