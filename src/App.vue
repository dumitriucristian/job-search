<template>
  <main-nav />
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="jobs/results">Job Resultes</router-link>
  </div>
  <router-view />
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import TheHero from "@/components/JobSearch/TheHero.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
