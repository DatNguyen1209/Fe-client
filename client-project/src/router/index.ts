import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: () => import("@/layouts/FullLayout.vue"),

      children: [
        {
          name: "Dashboard",
          path: "/home",
          component: () => import("@/views/ui-views/UIHome.vue"),
        },
        {
          name: "HotelPage",
          path: "hotel",
          component: () => import("@/views/ui-views/HotelPage.vue"),
        },
        {
          name: "AboutPage",
          path: "about",
          component: () => import("@/views/ui-views/AboutPage.vue"),
        },
        {
          name: "Blog",
          path: "blog",
          component: () => import("@/views/ui-views/BlogPage.vue"),
        },
        {
          name: "Contact",
          path: "contact",
          component: () => import("@/views/ui-views/ContactPage.vue"),
        },
        {
          name: "Order",
          path: "hotels/:id/:roomId",
          component: () => import("@/views/Order/OrderIndex.vue"),
        },

        {
          path: "hotels/:id",
          name: "Room",
          component: () => import("@/views/Hotel/HotelIndex.vue"),
          children: [],
        },
      ],
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/ui-views/Accouts/LoginPage.vue"),
    },
    {
      name: "Register",
      path: "/register",
      component: () => import("@/views/ui-views/Accouts/RegisterPage.vue"),
    },
    // {
    //   name: "Login",
    //   path: "/login",
    //   component: () => import("@/views/Login.vue"),
    // },
  ],
});
// router.beforeEach(async (to, from) => {
//   const isAuthenticated = localStorage.getItem("token");
//   console.log(isAuthenticated);

//   if (
//     // make sure the user is authenticated
//     !isAuthenticated &&
//     // Avoid an infinite redirect
//     to.name !== "Login"
//   ) {
//     // redirect the user to the login page
//     return { name: "Login" };
//   }
// });
export default router;
