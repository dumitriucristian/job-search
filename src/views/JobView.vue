<template>
  <h1>This is the job view {{ jobId }}</h1>
</template>
<script>
export default {
  name: "JobView",
  computed: {
    jobId() {
      return this.$route.params.id;
    },
  },
};
</script>
