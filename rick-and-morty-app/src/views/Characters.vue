<template>
    <div>
      <h1>Characters</h1>
      <div v-for="character in characters" :key="character.id">
        <router-link :to="`/character/${character.id}`">{{ character.name }}</router-link>
        <img :src="character.image" :alt="character.name" />
      </div>
  
      <div class="pagination">
        <button @click="fetchCharacters(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="fetchCharacters(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        characters: [],
        currentPage: 1,
        totalPages: 1,
      };
    },
    created() {
      this.fetchCharacters(this.currentPage);
    },
    methods: {
      fetchCharacters(page) {
        if (page < 1 || page > this.totalPages) return;
  
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
          .then(response => {
            this.characters = response.data.results;
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
  