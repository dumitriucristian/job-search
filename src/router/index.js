import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobResultsView from "@/views/JobResultsView.vue";
import JobPageView from "@/views/JobPageView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/job/:id",
    name: "Job",
    component: JobPageView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behaviour: "smooth" };
  },
});

export default router;
