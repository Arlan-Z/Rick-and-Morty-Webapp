<template>
  <div v-if="character">
    <h1>{{ character.name }}</h1>
    <img :src="character.image" :alt="character.name" />

    <p><strong>Status:</strong> {{ character.status }}</p>
    <p><strong>Species:</strong> {{ character.species }}</p>
    <p><strong>Type:</strong> {{ character.type }}</p>
    <p><strong>Gender:</strong> {{ character.gender }}</p>
    <p><strong>Origin:</strong> 
      <router-link :to="`/location/${extractLocationId(character.origin.url)}`">{{ character.origin.name }}</router-link>
    </p>
    <p><strong>Last Known Location:</strong> 
      <router-link :to="`/location/${extractLocationId(character.location.url)}`">{{ character.location.name }}</router-link>
    </p>
    
    <h2>Episodes</h2>
    <ul>
      <li v-for="episode in episodes" :key="episode.id">
        <router-link :to="`/episode/${episode.id}`">{{ episode.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CharacterDetails',
  data() {
    return {
      character: null,
      episodes: [],
    };
  },
  created() {
    const id = this.$route.params.id;
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        this.character = response.data;
        return Promise.all(response.data.episode.map(url => axios.get(url)));
      })
      .then(episodeResponses => {
        this.episodes = episodeResponses.map(response => response.data);
      });
  },
  methods: {
    extractLocationId(url) {
      const parts = url.split('/');
      return parts[parts.length - 1];
    },
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
