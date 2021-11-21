<template>
  <div>
    <div class="post" v-for="post in postos" :key="post.id">
      <h3>nsdkncks</h3>
      <div class="post-title" id="post-title">
        <div class="post-actions" id="post-actions">
          <span class="post-author" id="post-author">
            <span class="post-author-info" id="post-author-infos">
              <small>
                {{ post.author_name }}
              </small>
            </span>
            <small>{{ post.create_time }}</small>
          </span>
          <div class="post-image" v-if="post.post_img != null">
            <img v-bind:src="post.post_img" alt="Post image" />
          </div>
        </div>
        <h3>{{ post.post_content }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["postos"],
  computed: {
    myValue() {
      return {
        postos: [
          {
            "id": "1",
            "create_time": "Feb 20, 1967 01:00",
            "author_name": "Kurt Cobain",
            "post_content":
              "It's okay to eat fish because they don't have any feelings.",
            "post_img": "",
          },
          {
            "id": "2",
            "create_time": "Sep 20, 2021 18:18 ",
            "author_name": "Gloria",
            "post_content": "Cute baby Yoda",
            "post_img": "baby_yoda.jpg",
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
.post {
  width: 80%;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}
.post .post-author {
  padding: 10px;
}
.post .post-title ~ .post-actions {
  padding: 10px;
}
.post .post-author .post-author-info small {
  position: absolute;
  top: 10px;
  left: 35px;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}
</style>