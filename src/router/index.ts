import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

import Wiki from "../views/Wiki.vue";
import Champions from "../components/wiki/Champions.vue";
import Items from "../components/wiki/Items.vue";
import Query from "../views/Query.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home
        // component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/query",
        name: "Query",
        component: Query
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
