import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/portfolio",
    name: "Main",
    component: () => import("../views/Main.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/portfolio/pairplay",
    name: "Pairplay",
    component: () => import("../views/Pariplay.vue"),
  },
  {
    path: "/portfolio/unique",
    name: "Unique",
    component: () => import("../views/Unique.vue"),
  },
  {
    path: "/portfolio/campus",
    name: "Campus",
    component: () => import("../views/Campus.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;