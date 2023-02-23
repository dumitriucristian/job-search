<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" />
</template>

<script>
import profile from "/public/profile.webp";

export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: profile,
    };
  },
};
</script>
