import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../pages/Home/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/Register/index.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
