<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b bored-solid border-brand-gray-1 items-center"
      >
        <a :href="url" class="flex items-center h-full text-xl">{{ company }}</a>
        <nav class="h-full ml-12">
          <ul class="flex w-full h-full p-0 m-0 list-none">
            <li class="h-full">
              <a href="#" class="flex items-center h-full py-2.5">Bobo Corp</a>
            </li>
            <li class="h-full ml-9">
              <a href="#" class="flex items-center h-full py-2.5">What we do</a>
            </li>
            <li class="h-full ml-9">
              <a href="#" class="flex items-center h-full py-2.5">Who we are</a>
            </li>
            <li class="h-full ml-9">
              <a href="#" class="flex items-center h-full py-2.5">Teams</a>
            </li>
            <li class="h-full ml-9">
              <a href="#" class="flex items-center h-full py-2.5">Locations</a>
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
    };
  },
};
</script>
