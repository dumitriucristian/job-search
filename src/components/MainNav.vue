<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b bored-solid border-brand-gray-1 items-center"
      >
        <a :href="url" class="flex items-center h-full text-xl">{{ company }}</a>
        <nav class="h-full ml-12">
          <ul class="flex w-full h-full p-0 m-0 list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="h-full ml-12">
              <a href="#" class="flex items-center h-full py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
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
      menuItems: ["Teams", "How we hire", "Locations", "Life at Bob", "Students", "Jobs"],
    };
  },
};
</script>
