<template>
  <form
    class="flex border border-solid border-brand-gray-3 w-full h-12 rounded-3xl items-center mt-14"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex item-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <text-input v-model="role" placeholder="Los angeles"></text-input>
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Where</label>
        <text-input v-model="location" placeholder="Los angeles"></text-input>
        <action-button text="search" type="secondary" />
      </div>
    </div>
  </form>
</template>
<script>
import TextInput from "./TextInput";
import ActionButton from "./ActionButton.vue";
export default {
  name: "JobSearchForm",
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
};
</script>
