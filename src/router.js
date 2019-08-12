import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Top from "./views/Top.vue"
import Full from "./views/Full.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/top",
      name: "top",
      component: Top
    },
    {
      path: "/full",
      name: "full",
      component: Full
    }
  ]
})
