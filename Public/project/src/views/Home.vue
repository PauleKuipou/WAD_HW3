<template>
  <div class="home">
    <header_compo/>
    <h1> Posts</h1>
  </div>
  <footer>
    <footer_compo/>
  </footer>
</template>

<script>
import header_compo from "../components/header_compo.vue";
import footer_compo from "../components/footer_compo";
export default {
  name: "Home",
  components: {footer_compo, header_compo},
}
</script>

<style scoped>

</style>
