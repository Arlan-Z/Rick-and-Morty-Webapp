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
      <li v-for="episode in character.episode" :key="episode">
        <router-link :to="`/episode/${extractEpisodeId(episode)}`">{{ extractEpisodeId(episode) }}</router-link>
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
    };
  },
  created() {
    const id = this.$route.params.id;
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        this.character = response.data;
      });
  },
  methods: {
    extractEpisodeId(url) {
      // Функция для извлечения идентификатора эпизода из URL API
      const parts = url.split('/');
      return parts[parts.length - 1];
    },
    extractLocationId(url) {
      // Функция для извлечения идентификатора локации из URL API
      const parts = url.split('/');
      return parts[parts.length - 1];
    },
  },
};
</script>

<style>
/* Добавьте стили для улучшения отображения, если необходимо */
</style>
