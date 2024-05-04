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
    ],
  },
];
