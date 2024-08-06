<template>
    <div>
        <h1>Characters</h1>
        <div class="character-list">
            <div v-for="character in characters" :key="character.id" class="character-item">
            <img :src="character.image" :alt="character.name" class="character-image">
            <router-link :to="`/character/${character.id}`" class="character-name">{{ character.name }}</router-link>
            </div>
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

  .character-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
  }
  
  .character-item {
    flex: 1 1 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .character-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    border: 2px solid #ccc;
    margin-bottom: 10px;
  }
  
  .character-name {
    text-decoration: none;
    color: #1a73e8;
    font-weight: bold;
    font-size: 1.2em;
  }
  
  .character-name:hover {
    text-decoration: underline;
  }
  
  </style>
  