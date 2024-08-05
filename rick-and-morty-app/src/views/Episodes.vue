<template>
  <div>
    <h1>Episodes</h1>
    <div v-for="episode in episodes" :key="episode.id">
      <router-link :to="`/episode/${episode.id}`">{{ episode.name }}</router-link>
      <p>{{ episode.air_date }}</p>
    </div>

    <div class="pagination">
      <button @click="fetchEpisodes(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="fetchEpisodes(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
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

<style>
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
