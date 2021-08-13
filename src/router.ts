import { createRouter, createWebHashHistory } from "vue-router";
const routerHashHistory = createWebHashHistory();
import Index from "../src/pages/index/index.vue";
const Router = createRouter({
  history: routerHashHistory,
  routes: [
    {
      name: "Index",
      path: "/",
      component: Index
    }
  ]
});
 
export default Router;