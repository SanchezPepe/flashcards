<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>

  <div>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment()">Increment</button>
    <button @click="counter.decrement()">Decrement</button>
  </div>

  <div>
    <NuxtWelcome />
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
