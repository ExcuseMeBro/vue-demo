import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("../views/Todo.vue"),
  },
  {
    path: "/graphql",
    name: "GraphQL",
    component: () => import("../views/GraphQL.vue"),
  },
  {
    path: "/:pathMach(.*)*",
    name: "NotFound",
    component: () => import("../components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
