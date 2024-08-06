<template>
  <div v-if="episode">
    <h1>{{ episode.name }}</h1>
    <p>Air Date: {{ episode.air_date }}</p>
    <p>Episode: {{ episode.episode}}</p>
    <h2>Characters</h2>
    <ul>
      <li v-for="character in characters" :key="character.id">
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
