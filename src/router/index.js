import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
    component: () => import("../views/HOME/HOME"),
    children: [
      {
        path: "/index",
        name: "index",
        meta: {
          title: "首页"
        },
        component: () => import("../views/index/index")
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  var role = localStorage.getItem("id");
  if (!role && to.path !== "/login") {
    next("login");
  } else {
    next();
  }
});
export default router;
