// router/index.js

  import LandingLayout from "@/Layouts/WebsiteLayout.vue";
  import { createRouter, createWebHistory } from "vue-router";
  
  const routes = [
    {
      path: "/",
      component: () => import("@/Pages/Home.vue"),
      name: "Home",
      component: LandingLayout,
      redirect: "/",
      children: [
        {
          path: "/",
          component: () => import("@/Pages/Home.vue"),
          name: "Home",
        },
        {
          path: "/about",
          component: () => import("@/Pages/About.vue"),
          name: "About",
        },
      ],
    },
  // Authentication layout
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;