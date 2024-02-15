import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            // route level code-splitting
            // this generates a separate chunk (Home.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Home,
        },
        {
            path: "/watch",
            name: "watch",
            component: () => import("../views/Watch.vue"),
        },
        {
            path: "/market-place",
            name: "market-place",
            component: () => import("../views/MarketPlace.vue"),
        },
        {
            path: "/group",
            name: "group",
            component: () => import("../views/Group.vue"),
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import("../views/Profile.vue"),
        },
        {
            path: "/music",
            name: "music",
            component: () => import("../views/Music.vue"),
        },
        {
            path: "/image",
            name: "image",
            component: () => import("../views/Image.vue"),
        },
        {
            path: "/love",
            name: "love",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/Love.vue"),
        },
        {
            path: "/api-testing",
            name: "api-testing",
            component: () => import("../views/APITesting.vue"),
        },
        {
            path: "/chat",
            name: "chat",
            component: () => import("../views/Chat.vue"),
        },
    ],
});

export default router;
