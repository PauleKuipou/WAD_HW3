<template>
  <div class="contactus">
    <header_compo/>
    <h1>Contact us</h1>
    <div class="info">
    <h2 id="phone"> PHONE <p> +372 737 6363 </p> </h2>
    <h2 id="email"> EMAIL <p> web.application@ut.ee </p> </h2>
    <h2 id="address"> ADDRESS <p> Narva mnt 18, 51009 Tartu </p> </h2>
    </div>
  </div>
  <footer>
    <footer_compo/>
  </footer>
</template>

<script>
import header_compo from "../components/header_compo";
import footer_compo from "../components/footer_compo";
export default {
  name: "Contactus",
  components: {footer_compo, header_compo},
}
</script>

<style scoped>
.info{
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  font-size: 10px;
}
#email{
  padding-left: 60px;
}
</style>