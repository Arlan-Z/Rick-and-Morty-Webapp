<template>
  <div v-if="episode" class="episode-details">
    <h1>{{ episode.name }}</h1>
    <p class="episode-info">Air Date: {{ episode.air_date }}</p>
    <p class="episode-info">Episode: {{ episode.episode }}</p>
    
    <h2>Characters</h2>
    <ul class="characters-list">
      <li v-for="character in characters" :key="character.id" class="character-item">
        <router-link :to="`/character/${character.id}`">{{ character.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      episode: null,
      characters: [],
    };
  },
  created() {
    const id = this.$route.params.id;
    axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then(response => {
        this.episode = response.data;
        return Promise.all(response.data.characters.map(url => axios.get(url)));
      })
      .then(characterResponses => {
        this.characters = characterResponses.map(response => response.data);
      });
  },
};
</script>

<style scoped>
.episode-details {
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

.episode-info {
  font-size: 1.2em;
  color: #555;
  text-align: center;
  margin: 10px 0;
}

.characters-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.character-item {
  margin-bottom: 10px;
}

.character-item a {
  text-decoration: none;
  color: #1a73e8;
  font-size: 1.1em;
}

.character-item a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .episode-details {
    padding: 10px;
  }

  h1 {
    font-size: 2em;
  }

  .episode-info {
    font-size: 1em;
  }

  .character-item a {
    font-size: 1em;
  }
}
</style>
