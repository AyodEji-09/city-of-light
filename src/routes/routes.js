const Layout = () => import("../layouts/Layout.vue");

export default [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("../views/about/index.vue"),
      },
      {
        path: "service",
        name: "service",
        component: () => import("../views/service/index.vue"),
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("../views/contact/index.vue"),
      },
    ],
  },
];
