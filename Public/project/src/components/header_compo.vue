<template>
  <nav>
    <div>
      <img class="calendar" src="../photos/calendar-icon.png" alt="Calendar icon">
    </div>
    <div class="search-container">
      <input type="text">
      <button>Search</button>
    </div>
    <div id="account">
      <img class="userImg" type="image" src="../photos/account.png" id="userButton" alt="user"/>
    </div>
    <br>
  </nav>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link :to="{ name: 'contact us' }"> Contact us</router-link>
  </div>
</template>

<script>
export default {
  name: "header_compo",
}
</script>

<style scoped>
header {
  top: 0px;
  position: fixed;
  display: flex;
  background-color: white;
  align-items: center;
  width: 100%;
}
nav {
  display: flex;
  align-items: center;
}

nav div {
  height: 35px;
  flex-grow: 5;
  padding: 5px;
}

nav div img {
  width: 40px;
  display: flex;
  justify-content: flex-start;
}
nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 75%;
  margin: 0;
  padding: 5px;
  border: 1px solid #1778BD;
}

nav div.search-container > button {
  height: 30px;
  width: 25%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: 1px solid #1778BD;
  background-color: #1778BD;
  font-size: 14px;
  font-weight: bold;
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.search-container button:hover {
  background-color: skyblue;
}
#account {
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
}

.dropdown-content p {
  color: black;
  display: block;
  text-align: left;
  padding: 0px 0px 0px 10px;
  margin-top: -5px;
  margin-left: -10px;

}

.dropdown-content a {
  color: #0277bd;
  display: block;
  text-align: left;
  margin: 0 -10px;
  padding: 10px 0px 10px 10px;
  border-top: 1px solid;
  border-color: #8a8a8a transparent transparent transparent;
}
</style>