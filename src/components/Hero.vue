<template>
  <main class="flex flex-col h-screen pt-10 pb-20 bg-yellow-200">
    <div class="grid grid-cols-12 border-blue-700 border-solid border">
      <div class="grid-col-1 col-span-1 border-blue-700 border-solid border"></div>
      <div class="grid-col-5 col-span-5 border-blue-700 border-solid border">
        <headline />
      </div>
      <div class="grid-col-1 col-span-5 border-blue-700 border-solid border">
        another text here
      </div>
      <div class="grid-col-1 col-span-1 border-blue-700 border-solid border"></div>
    </div>
  </main>
</template>
<script>
import Headline from "./Headline.vue";

export default {
  name: "Hero",
  components: { Headline },
};
</script>
