<template>
  <div>
    <div class="post">
      <div class="post-top">
        <router-link to="/"
          ><img src="../photos/account.png" alt="postIt" class="author-profile"
        /></router-link>
        <div class="author-name">Gloria Krieger</div>
        <div>Feb 20, 1967 01:00</div>
      </div>
      <div class="post-image">
        <img src="../photos/baby_yoda.jpg" alt="post photo" />
      </div>
      <br />Cute baby baby_yoda
      <div class="like-button">
        <button v-on:click="clickedLike">
          <img src="../photos/likebutton.jpg" alt="Like button" />
           Likes: {{ this.$store.state.likes }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "posts",
  methods: {
    clickedLike: function () {
      this.$store.state.likes += 1;
    },

  },

  computed: {
    myValue() {
      return {
        posts: [
          {
            id: "1",
            create_time: "Feb 20, 1967 01:00",
            author_name: "Kurt Cobain",
            post_content:
              "It's okay to eat fish because they don't have any feelings.",
            post_img: "",
          },
          {
            id: "2",
            create_time: "Sep 20, 2021 18:18 ",
            author_name: "Gloria",
            post_content: "Cute baby Yoda",
            post_img: "baby_yoda.jpg",
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
.post {
  margin: 20px auto;
  border: 1px solid darkgray;
  border-radius: 5%;
  width: 70%;
  padding: 15px;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 5px 5px 5px 5px gray;
}
.post-top {
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  color: gray;
  font-size: 15px;
}

.author-profile {
  display: flex;
  flex-direction: row;
  width: 25px;
}

.author-name {
  display: flex;
  justify-content: flex-start;
}

div + .post-image {
  display: flex;
  justify-content: center;
  height: 350px;
  padding-top: 10px;
  overflow: hidden;
}

.like-button button {
  border: none;
  padding: 5px;
  background-color: white;
  margin-top: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.like-button button:hover {
  background-color: skyblue;
}

.like-button img {
  height: 30px;
}
</style>