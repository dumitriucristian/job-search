<template>
  <section>
    <h1>{{ action }} for everyone</h1>
    <h2>Find your next job</h2>
  </section>
</template>
<script>
export default {
  name: "Headline",
  data() {
    return {
      action: "Buy",
      interval: null,
    };
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Buy", "Look", "Read", "Join"];
        const nextActionIndex = (actions.indexOf(this.action) + 1) % 4;
        this.action = actions[nextActionIndex];
      }, 2000);
    },
  },
};
</script>
