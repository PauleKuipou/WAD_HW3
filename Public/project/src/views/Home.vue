<template>
  <div class="home">
    <header_compo/>
    <main_page_compo/>
    <footer>
    <footer_compo/>
  </footer>
  </div>
</template>

<script>
import header_compo from "../components/header_compo.vue";
import footer_compo from "../components/footer_compo";
import main_page_compo from "../components/main_page_compo";
export default {
  name: "Home",
  components: {main_page_compo, footer_compo, header_compo},
}
</script>

<style scoped>

</style>
