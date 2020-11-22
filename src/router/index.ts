import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

import Wiki from "../views/Wiki.vue";
import Champions from "../views/wiki/Champions.vue";
import Items from "../views/wiki/Items.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/wiki",
        name: "Wiki",
        component: Wiki,
        children: [
            {
                path: "champions",
                name: "wiki-champions",
                component: Champions
            },
            {
                path: "items",
                name: "wiki-items",
                component: Items
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
