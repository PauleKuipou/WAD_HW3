<template>
  <div class="home">
    <header_compo/>
  <main_page_compo />
  <footer>
    <footer_compo/>
  </footer>
  </div>
</template>

<script>
import header_compo from "../components/header_compo.vue";
import footer_compo from "../components/footer_compo";
import main_page_compo from '../components/main_page_compo.vue';
export default {
  name: "Home",
  components: {footer_compo,main_page_compo, header_compo},
}
</script>

<style sc
    Main_page_compooped>

</style>
