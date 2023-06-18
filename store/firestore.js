import { addDoc, collection } from "firebase/firestore";

export const firestoreState = defineStore("firestore", {
  state: () => ({}),
  actions: {
    async createFlashcardSet(data) {
      const nuxtApp = useNuxtApp();
      try {
        const db = nuxtApp.$db;

        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "sets"), data);
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error writing document: ", error);
      }
    },
  },
});
