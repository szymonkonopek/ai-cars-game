import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Feed from "@/views/Feed";
import Equipment from "@/views/Equipment";

import Battle from "@/views/Battle";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/equipment",
    name: "equipment",
    component: Equipment,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/battle",
    name: "battle",
    component: Battle,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/feed",
    name: "feed",
    component: Feed,
    meta: {
      requiresAuth: true,
    },
  },
];

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = getAuth().onAuthStateChanged((user) => {
      removeListener();
      resolve(user);
    }, reject);
  });
};

const router = new createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have access");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
