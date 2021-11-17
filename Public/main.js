const about = { template: "<about-component></about-component>" };
const contact = {
  template: "<contact-component></contact-component>",
};
const home = { template: `<home-component></home-component>` };

/*
const routes = [
    { path: '/about', component: about },
    { path: '/contact', component: contact },
    { path: '/home', component: home },
  ],*/

/*
const app = Vue.createApp({
    
  data() {
    return {
        router
    };
  },
  methods: {},
});*/

const app = new Vue({
  el: "#app",
  router: new VueRouter({
    routes: [
      { path: "/about", component: about },
      { path: "/contact", component: contact },
      { path: "/home", component: home },
    ],
  }),
});
