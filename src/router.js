import Record from "./pages/RecordPage.vue";
import Recording from "./pages/Recording.vue";
import Router from "vue-router";
import Vue from "vue";

const { isNavigationFailure, NavigationFailureType } = Router;

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((failure) => {
    if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
      window.location.reload();
      return;
    }
  });
};

Vue.use(Router);

const router = new Router({
  routes: [
    { path: "/", component: Recording },
    {
      path: "/record",
      name: "record",
      component: Record,
      meta: { layout: "FULL" },
      props: true,
    },
  ],
});

export default router;
