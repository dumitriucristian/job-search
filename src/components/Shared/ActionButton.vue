<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text"],
  data() {
    return {};
  },
  computed: {
    buttonClass() {
      return { primary: this.primary, secondary: !this.primary };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded  bg-brand-blue-1   text-white hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brand-blue-2 hover:bg-brand-blue-2 hover:text-white;
}
</style>
