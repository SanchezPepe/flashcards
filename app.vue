<template>
  <div class="min-h-screen bg-slate-800 pt-2 flex flex-col">
    <div class="container mx-auto">
      <NuxtPage />
    </div>
  </div>
</template>

<script>
import { useStore } from "~/store/mainStore.js";
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    const counter = useStore();

    return {
      counter,
      ...toRefs(state),
    };
  },
};
</script>
