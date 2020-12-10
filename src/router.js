import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import SubmitHome from "./views/SubmitHome.vue";
import Success from "./views/Success.vue";
import AuthorizeExment from "./views/AuthorizeExment.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: Home,
        submit: SubmitHome
      }
    },
    {
      path: "/success",
      components: {
        default: Success
    }
    },
    {
      path: "/authorize",
      components: {
        default: AuthorizeExment
      }
    }
  ]
})