<template>
  <div class="episodes-container">
    <h1 class="title">Episodes</h1>
    <div v-for="episode in episodes" :key="episode.id" class="episode-card">
      <router-link :to="`/episode/${episode.id}`" class="episode-title">{{ episode.name }}</router-link>
      <p class="episode-date">{{ episode.air_date }}</p>
    </div>

    <div class="pagination">
      <button @click="fetchEpisodes(currentPage - 1)" :disabled="currentPage === 1" class="pagination-button">Previous</button>
      <span class="pagination-info">Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="fetchEpisodes(currentPage + 1)" :disabled="currentPage === totalPages" class="pagination-button">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      episodes: [],
      currentPage: 1,
      totalPages: 1,
    };
  },
  created() {
    this.fetchEpisodes(this.currentPage);
  },
  methods: {
    fetchEpisodes(page) {
      if (page < 1 || page > this.totalPages) return;

      axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
        .then(response => {
          this.episodes = response.data.results;
          this.currentPage = page;
          this.totalPages = response.data.info.pages;
        });
    },
  },
};
</script>

<style scoped>
.episodes-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.episode-card {
  background: #fff;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.episode-card:hover {
  transform: scale(1.02);
}

.episode-title {
  font-size: 1.25rem;
  color: #007BFF;
  text-decoration: none;
}

.episode-title:hover {
  text-decoration: underline;
}

.episode-date {
  font-size: 0.875rem;
  color: #555;
  margin-top: 5px;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.pagination-button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.pagination-info {
  margin: 0 15px;
  font-size: 1rem;
}
</style>
