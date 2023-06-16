<template>
  <div class="flex flex-col items-center align-middle">
    <h1>Flashcards to study with Chat Assistant</h1>
    <button
      class="pbutton my-2"
      @click="
        () => {
          $router.push('/sets');
        }
      "
    >
      Enter
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
