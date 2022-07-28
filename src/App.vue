<template>
  <h1 class="mt-8 text-6xl text-center">Hello Vue</h1>
  <MainNav></MainNav>
</template>

<script>
import MainNav from "./components/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
