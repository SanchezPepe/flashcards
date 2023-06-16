<template>
  <div>
    <h1>Flashcards Sets</h1>
    <div class="grid my-4">
      <div class="mx-1 grid grid-cols-2 gap-2">
        <button class="pbutton">Create new set</button>
        <button class="gbutton">Import set</button>
      </div>

      <div class="flex mt-2 flex-wrap">
        <SetCard
          v-for="card in cards"
          :key="card.id"
          :id="card.id"
          :title="card.title"
          :description="card.description"
          :tags="card.tags"
          class="w-1/3"
        ></SetCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SetCard from "~/components/SetCard.vue";

export default {
  setup() {
    const state = reactive({
      cards: [
        {
          title: "Set 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
          id: "XDHCVJR253",
          tags: ["#tag1", "#tag2", "#tag3"],
        },
        {
          title: "Set 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",

          id: "XDHCVJR253",
          tags: ["#tag1", "#tag2", "#tag3"],
        },
        {
          title: "Set 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",

          id: "XDHCVJR253",
          tags: ["#tag1", "#tag2", "#tag3"],
        },
        {
          title: "Set 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
          id: "XDHCVJR253",
          tags: ["#tag1", "#tag2", "#tag3"],
        },
      ],
    });
    return {
      ...toRefs(state),
    };
  },
  components: { SetCard },
};
</script>

<style scoped></style>
