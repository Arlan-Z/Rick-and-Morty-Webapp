<template>
  <div class="container">
    <h1>ABOUT THE SHOW</h1>
    <div class="description">
      <div class="text">
        <p>
          <strong>Rick and Morty</strong> (Eng. <em>Rick and Morty</em>) is an American 
          <a href="https://en.wikipedia.org/wiki/Animated_series" target="_blank">animated series</a> 
          created by <a href="https://en.wikipedia.org/wiki/Dan_Harmon" target="_blank">Dan Harmon</a> and 
          <a href="https://en.wikipedia.org/wiki/Justin_Roiland" target="_blank">Justin Roiland</a>. The premiere took place on December 2, 2013, 
          in the programming block <em>Adult Swim</em> on the channel <em>Cartoon Network</em>. The release of the 
          <a href="https://en.wikipedia.org/wiki/List_of_Rick_and_Morty_episodes" target="_blank">6th season</a> took place on September 4, 2022.
        </p>
        <ul>
          <li>Genre: comedy, science fiction, adventure</li>
          <li>Number of seasons: 7</li>
          <li>Number of episodes: 71</li>
          <li>Episode duration: 22 minutes</li>
          <li>Authors: Dan Harmon, Justin Roiland</li>
          <li>Directors: Jeff Myers, Bryan Newton, John Rice, Justin Roiland, etc.</li>
          <li>Composer: Ryan Elder</li>
          <li>Production: Justin Roiland's Solo Vanity, Card Productions, Dan Harmon Productions, Starburns Industries, etc.</li>
          <li>
            Voice acting (English): Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke; 
            (Russian): <a href="https://www.youtube.com/@sndk" target="_blank">Dmitry Syenduk</a>
          </li>
        </ul>
      </div>
      <div class="image">
        <img src="@/assets/rick-and-morty-poster.png" alt="Rick and Morty Poster">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
}

.description {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.text {
  flex: 1;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #555;
}

.text p {
  margin: 0 0 20px 0;
}

.text ul {
  list-style-type: none;
  padding: 0;
}

.text ul li {
  margin-bottom: 10px;
}

.text a {
  color: #1a73e8;
  text-decoration: none;
}

.text a:hover {
  text-decoration: underline;
}

.image {
  flex: 0 0 auto;
}

.image img {
  max-width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
