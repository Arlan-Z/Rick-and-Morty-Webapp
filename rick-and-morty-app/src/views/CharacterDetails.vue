<template>
  <div v-if="character" class="character-details">
    <h1>{{ character.name }}</h1>
    <img :src="character.image" :alt="character.name" class="character-image" />

    <div class="character-info">
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
    </div>
    
    <h2>Episodes</h2>
    <ul class="episodes-list">
      <li v-for="episode in episodes" :key="episode.id" class="episode-item">
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
.character-details {
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

.character-image {
  display: block;
  max-width: 100%;
  border-radius: 10px;
  margin: 0 auto 20px auto;
}

.character-info {
  margin-bottom: 20px;
}

.character-info p {
  font-size: 1.1em;
  color: #555;
  margin: 5px 0;
}

.character-info p strong {
  color: #333;
}

.episodes-list {
  list-style-type: none;
  padding: 0;
}

.episode-item {
  margin-bottom: 10px;
}

.episode-item a {
  text-decoration: none;
  color: #1a73e8;
  font-size: 1.1em;
}

.episode-item a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .character-details {
    padding: 10px;
  }

  h1 {
    font-size: 2em;
  }

  .character-info p {
    font-size: 1em;
  }

  .episode-item a {
    font-size: 1em;
  }
}
</style>
