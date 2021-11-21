<template>
  <div class="layout">
    <div class="side"></div>
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
};
</script>

<style scoped>
.layout {
  padding-top: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 500px;
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
</style>
