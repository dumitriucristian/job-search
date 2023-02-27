<template>
  <h1>This is job page {{ job }}</h1>
</template>

<script>
export default {
  name: "JobPageView",
  computed: {
    job() {
      return this.$route.params.id;
    },
  },
};
</script>
