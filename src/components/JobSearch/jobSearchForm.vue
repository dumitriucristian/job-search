<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="m-4" />
    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <text-input placeholder="Software Engineers" v-model="role" />
        <span
          class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
          >in</span
        >
      </div>

      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <text-input placeholder="Los Angeles" v-model="location" />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default {
  name: "jobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      location: "",
      role: "",
    };
  },
  methods: {
    searchForJobs() {
      console.log("test", this.role, this.location);

      this.$router.push({
        name: "JobResults",
        query: { role: this.role, location: this.location },
      });
    },
  },
};
/**
 * @handleInput="someMethod"
 * use v-model modelValue
 */
</script>
