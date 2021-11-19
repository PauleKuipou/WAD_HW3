import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Contactus from "../views/Contactus";
import About from "../views/About";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contactus",
        name: "contact us",
        component: Contactus,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
