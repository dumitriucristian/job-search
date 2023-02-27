<template>
  <main class="flex-auto bg-brand-gray-2 p-8">Job Listing Component</main>
  <ol>
    <job-listing />
    <job-listing />
    <job-listing />
  </ol>
</template>

<script>
import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  components: { JobListing },
  name: "JobListings",
};
</script>
