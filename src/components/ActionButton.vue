<template>
  <button class="primary">Sign In</button>
</template>
<script>
export default {
  name: "ActionButton",
};
</script>
<style scoped>
button {
  @apply px-5 py-3 font-medium;
}
.primary {
  @apply bg-brand-blue-1 rounded text-white;
}
</style>
