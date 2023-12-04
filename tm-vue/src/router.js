import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    name: "Login",
    component:() => import("./components/LoginPage.vue")
  },
  {
    path: "/Register",
    name: "Register",
    component:() => import("./components/RegisterPage.vue")
  },
  {
    path: "/Explore",
    name: "Explore",
    component:() => import("./components/ExplorePage.vue")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;