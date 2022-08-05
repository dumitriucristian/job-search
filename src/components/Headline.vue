<template>
  <section>
    <h1 class="text-8xl mb-14 tracking-tighter font-bold">
      <span :class="changeColor">{{ action }} </span>
      <br />for everyone
    </h1>
    <h2>Find your next job</h2>
  </section>
</template>
<script>
export default {
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
      actionClass: "build",
    };
  },
  computed: {
    changeColor() {
      return {
        build: this.action === "Build",
        create: this.action === "Create",
        design: this.action === "Design",
        code: this.action === "Code",
      };
    },
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
        const actions = ["Build", "Create", "Design", "Code"];
        const nextActionIndex = (actions.indexOf(this.action) + 1) % 4;
        const nextAction = actions[nextActionIndex];
        this.action = nextAction;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.build {
  color: blue;
}
.create {
  color: green;
}

.design {
  color: red;
}

.code {
  color: purple;
}
</style>
