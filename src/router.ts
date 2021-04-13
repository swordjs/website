import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory();
import Index from "../src/pages/index/index.vue";
const Router = createRouter({
  history: routerHistory,
  routes: [
    {
      name: "Index",
      path: "/",
      component: Index
    }
  ]
});
 
export default Router;