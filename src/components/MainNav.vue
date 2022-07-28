<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b bored-solid border-brand-gray-1"
      >
        <a v-bind:href="url" class="flex items-center h-full text-xl">{{ company }}</a>
        <h2 class="flex items-center h-full ml-8">
          Developed by {{ author.firstName }} {{ author.lastName }}
        </h2>
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
      company: "IBM",
      author: {
        firstName: "John",
        lastName: "Doe",
      },
      url: "https://www.google.com",
    };
  },
};
</script>
