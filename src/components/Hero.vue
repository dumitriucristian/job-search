<template>
  <main class="flex flex-col h-screen pt-10 pb-20">
    <div class="grid grid-cols-12">
      <div class="grid-col-1 col-span-1"></div>
      <div class="grid-col-5 col-span-5">
        <headline />
        <job-search-form />
      </div>
      <div class="grid-col-1 col-span-5 self-center justify-self-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          class="object-contain w-80 h-80"
        />
      </div>
      <div class="grid-col-1 col-span-1"></div>
    </div>
  </main>
</template>
<script>
import Headline from "./Headline.vue";
import JobSearchForm from "./JobSearchForm.vue";
export default {
  name: "Hero",
  components: { Headline, JobSearchForm },
};
</script>
