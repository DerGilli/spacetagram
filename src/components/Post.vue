<template>
  <div class="container">
    <div class="img" :style="style"></div>
    <div>
      <p>{{ post.rover.name }}</p>
      <p>{{ post.earth_date }}</p>
      <p>{{ post.camera.full_name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    post: Object,
  },
  computed: {
    style(): string {
      return "background-image: url(" + this.post?.img_src + ")";
    },
  },
});
</script>

<style scoped>
.container {
  box-sizing: border-box;
  margin: 50px auto;
  padding: 10px;
  width: clamp(200px, 800px, 100%);
  background-color: lightgray;
}
.img {
  box-sizing: border-box;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  padding: 50% 0;
}
</style>
