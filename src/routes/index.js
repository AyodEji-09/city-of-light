import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";
// import NProgress from "nprogress";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(() => {
//   NProgress.start();
// });

// router.afterEach(() => {
//   NProgress.done();
// });

export default router;
