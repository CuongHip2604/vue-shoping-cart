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
      {
        path: "/products/:id",
        name: "product-detail",
        component: () => import("../pages/ProductDetail/index.vue"),
      },
      {
        path: "/products",
        name: "products",
        component: () => import("../pages/Product/index.vue"),
      },
      {
        path: "/search",
        name: "search",
        component: () => import("../pages/Search/index.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("../pages/Profile/index.vue"),
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
