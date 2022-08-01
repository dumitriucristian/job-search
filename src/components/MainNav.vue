<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b bored-solid border-brand-gray-1 items-center"
      >
        <a :href="url" class="flex items-center h-full text-xl">{{ company }}</a>
        <nav class="h-full ml-12">
          <ul class="flex w-full h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full first:ml-0 ml-12"
              data-test="menu-item"
            >
              <a href="#" class="flex items-center h-full py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto p-3">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button v-else data-test="login-button" @click="loginUser" />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
//import { resolveComponents } from "uri-js";
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  components: { ActionButton, ProfileImage },
  name: "MainNav",
  data() {
    return {
      components: {
        ActionButton,
      },
      company: "IBM",
      author: {
        firstName: "John",
        lastName: "Doe",
      },
      isLoggedIn: false,
      url: "https://www.google.com",
      menuItems: ["Teams", "How we hire", "Locations", "Life at Bob", "Students", "Jobs"],
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
