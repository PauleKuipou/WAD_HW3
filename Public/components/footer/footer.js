Vue.component("footer-component", {
  template:
    /*html*/
    `
      <footer>
         <p>Provided by us</p> 
         
         <div class="navigation-links">
         <router-link to="/home">home</router-link>
          <router-link to="/contact">contact</router-link>
          <router-link to="/about">About</router-link>
     </div>
      </footer>
          `,

  data() {
    return {};
  },

  methods: {
    addToCart() {},
  },

  computed: {},
});
