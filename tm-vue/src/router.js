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
  },
  {
    path: "/location",
    name: "Location",
    component:() => import("./components/Location.vue")
  },
  {
    path: "/hotels",
    name: "Hotels",
    component:() => import("./components/Hotels.vue")
  },
  {
    path: "/restaurant",
    name: "Restaurant",
    component:() => import("./components/Restaurant.vue")
  },
  {
    path: "/shopping",
    name: "Shopping",
    component:() => import("./components/Shopping.vue")
  },
  {
    path: "/ToDo",
    name: "ToDo",
    component:() => import("./components/ToDoPage.vue")
  },
  {
    path: "/Vehicle",
    name: "Vehicle",
    component:() => import("./components/VehiclePage.vue")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;