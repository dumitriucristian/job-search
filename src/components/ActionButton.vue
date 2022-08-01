<template>
  <button :class="buttonClass">{{ text }}</button>
</template>
<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
  methods: {},
};
///computed properties: any data that changes and is dependent on other data
</script>
<style scoped>
button {
  @apply px-5 py-3 font-medium rounded;
}
.primary {
  @apply bg-brand-blue-1  text-white  hover:shadow-blue;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
