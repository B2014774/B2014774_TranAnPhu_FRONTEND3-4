import {createWebHistory, createRouter } from "vue-router";
import Contactbook from "@/views/Contactbook.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: Contactbook,
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import ("@/views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;