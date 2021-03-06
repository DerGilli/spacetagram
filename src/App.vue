<template>
  <h1>Spacetagram</h1>
  <post v-for="photo in photos" :key="photo.id" :post="photo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Post from "./components/Post.vue";
import { Photo } from "./interfaces/Photo";
import { Rover } from "./interfaces/Rover";

const getRovers = async () => {
  const res: Response = await fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=R5joWBswDQ9i45KKSdAEX6pSTVUhyc3Q0FTJCWQd"
  );
  return res.json();
};

const fetchFeedByRoverName = async (roverName: string) => {
  const res: Response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1&page=1&api_key=R5joWBswDQ9i45KKSdAEX6pSTVUhyc3Q0FTJCWQd`
  );
  return res.json();
};

export default defineComponent({
  name: "App",
  components: { Post },
  methods: { fetchFeedByRoverName },
  data() {
    return {
      photos: [] as Photo[],
    };
  },
  mounted() {
    getRovers().then(roverData => {
      roverData.rovers.forEach((rover: Rover) => {
        fetchFeedByRoverName(rover.name).then(photoData => {
          photoData.photos.map((photo: Photo) => this.photos.push(photo));
          console.log(rover.name);
        });
      });
    });
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
