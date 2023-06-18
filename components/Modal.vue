<template>
  <div v-if="show" class="modal">
    <div class="flex flex-col bg md:w-1/2 m-5 w-full p-10 rounded-2xl">
      <div class="flex items-center">
        <h2 class="font-semibold flex-grow">New set</h2>

        <button class="text-white flex" @click="closeModal">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
              class="rbutton"
            ></path>
          </svg>
        </button>
      </div>

      <!-- horizonal divider -->
      <div class="flex-grow border-b border-gray-400 my-4"></div>

      <form @submit.prevent="createSet">
        <label
          v-for="field in newSet"
          :key="field.name"
          class="text-white font-semibold w-full"
        >
          {{ field.name }}
          <input
            class="w-full my-2 rounded-lg p-1 text-black"
            v-model="field.value"
            type="text"
            required
          />
        </label>

        <!-- Buttons -->
        <div class="flex space-x-2 my-4">
          <button class="gbutton flex-grow" type="submit">Submit</button>
          <button class="rbutton flex-grow" @click="closeModal">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  setup(_, { emit }) {
    const state = reactive({
      showModal: false,
      name: "",
      newSet: {
        name: {
          value: "",
          name: "Name",
        },
        description: {
          value: "",
          name: "Description",
        },
        tags: {
          value: "",
          name: "Tags (comma separated)",
        },
      },
    });

    function createSet() {
      console.log(`Hello, ${state.name}`);
      state.showModal = false;
      state.name = "";
    }

    function closeModal() {
      // Emit an event to notify the parent component
      // that the modal should be closed
      emit("close");
    }

    return {
      createSet,
      closeModal,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
