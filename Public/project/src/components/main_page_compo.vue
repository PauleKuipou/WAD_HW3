<template>
  <div class="layout">
    <div class="side">
      <div class="clear-button">
        <button v-on:click="clickedClear">Clear likes</button>
      </div>
    </div>
    <div class="center" id="post_container">
        <posts/>
    </div>
    <div class="side" id="right_side"></div>
  </div>
</template>

<script>
import posts from '../components/posts.vue';
export default {
  name: "main_page_compo",
  components: {posts},

  methods: {
    clickedClear: function () {
      this.$store.state.likes = 0;
    },
  },
};
</script>

<style scoped>
.layout {
  padding-top: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: fit-content;
}

.side {
  background-color: #1778bd;
  width: 33%;
}
.center {
  background-color: white;
  width: 60%;
  height: 100%;
}
.clear-button {
  border: none;
  padding: 5px;
  margin-top: 100px;
  
  align-self: center;

}
</style>
