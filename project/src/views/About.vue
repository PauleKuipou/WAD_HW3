<template>
  <div class="about">
    <header_compo />
    <h1>This is a tutorial on how to open this project</h1>
    <div class="info">
    <h2 > Step 1: <p> cd project </p> </h2>
    <h2 > Step 2: <p> npm install </p> </h2>
    <h2 > Step 3: <p> npm run serve </p> </h2>
    </div>
    <footer>
      <footer_compo />
    </footer>
  </div>
</template>

<script>
import header_compo from "../components/header_compo";
import footer_compo from "../components/footer_compo";
export default {
  name: "About",
  components: { footer_compo, header_compo },
};
</script>
<style>
.info {
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  font-size: 10px;
  height: 400px;
}
</style>
