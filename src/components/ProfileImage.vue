<template><img :src="imageLink" class="w-8 h-8 rounded-3xl" /></template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLinkg: "https://picsum.photos/200",
    };
  },
};
</script>
