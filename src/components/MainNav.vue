<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b bored-solid border-brand-gray-1"
      >
        <a href="/" class="flex items-center h-full text-xl">{{ someText }}</a>
      </div>
    </div>
  </header>
</template>
<script>
//import { resolveComponents } from "uri-js";

export default {
  name: "MainNav",
  data() {
    return {
      someText: "This is some text",
    };
  },
};
</script>
