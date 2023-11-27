import { createWebHistory, createRouter } from "vue-router";

const routers =  [
  {
    path: "",
    name: "",
    component:() => import("./components/")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routers,
});
export default router;