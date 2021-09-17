import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "detail", webpackPreload: true */ "../pages/Home/Home.vue"
      ),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(
        /* webpackChunkName: "detail", webpackPreload: true */ "../pages/Profile/views/Profile.vue"
      ),
  },
  {
    path: "/car",
    name: "Car",
    component: () =>
      import(
        /* webpackChunkName: "detail", webpackPreload: true */ "../pages/Car/views/Car.vue"
      ),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(
        /* webpackChunkName: "detail", webpackPreload: true */ "../pages/Checkout/views/Checkout.vue"
      ),
  },
  {
    path: "/productView/id",
    name: "productView",
    component: () =>
      import(
        /* webpackChunkName: "detail", webpackPreload: true */ "../pages/ProductView/views/ProductView.vue"
      ),
  },
  {
    path: "/profile/edit",
    name: "Edit",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "detail", webpackPreload: true */ "../pages/Profile/views/Edit.vue"
      ),
  },
];

const router = new createRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
