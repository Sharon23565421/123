import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import LoginView from "@/views/LoginView.vue";
// import storeView from "@/views/storeView.vue";
// import NotFound from "@/views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // meta: {
    //   useAppLayout: false, // 不使用 App.vue 佈局
    // },
  },
  {
    path: "/About",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/AboutView.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/LoginView.vue"),
  },
  {
    path: "/RegisterView",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "@/views/RegisterView.vue"),
  },
  {
    path: "/RegSuccess",
    name: "RegSuccess",
    component: () =>
      import(/* webpackChunkName: "RegSuccess" */ "@/views/RegSuccess.vue"),
  },
  {
    path: "/Store",
    name: "Store",
    component: () =>
      import(/* webpackChunkName: "Store" */ "@/views/StoreView.vue"),
  },
  {
    path: "/StoreDetail",
    // path: "/StoreDetail/:id",
    name: "StoreDetail",
    component: () =>
      import(/* webpackChunkName: "store" */ "@/views/StoreDetailView.vue"),
  },
  {
    path: "/Mrt",
    name: "Mrt",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "Mrt" */ "@/views/MrtView.vue"),
  },
  {
    path: "/Game",
    name: "Game",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "Game" */ "@/views/GameView.vue"),
  },
  {
    path: "/Contribute",
    name: "Contribute",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "Contribute" */ "@/views/ContributeView.vue"),
  },
  {
    path: "/New",
    name: "New",
    // component: LoginView,
    component: () =>
      import(/* webpackChunkName: "New" */ "@/views/NewView.vue"),
  },

  {
    path: "/ForgetPwd",
    name: "ForgetPwd",
    component: () =>
      import(/* webpackChunkName: "ForgetPwd" */ "@/views/ForgetPwd.vue"),
  },

  {
    path: "/Cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "Cart" */ "@/views/CartView.vue"),
  },

  {
    path: "/PwdSuccess",
    name: "PwdSuccess",
    component: () =>
      import(/* webpackChunkName: "PwdSuccess" */ "@/views/PwdSuccess.vue"),
  },
  {
    path: "/Newinside",
    name: "Newinside",
    component: () =>
      import(/* webpackChunkName: "Newinside" */ "@/views/Newinside.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "err" */ "@/views/NotFoundView.vue"),
  },
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

export default router;
