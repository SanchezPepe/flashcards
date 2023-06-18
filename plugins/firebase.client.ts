import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBEXAO2fkD5c5oZPmdCO8OMExzlA92g-IE",
    authDomain: "flashcards-jjsa.firebaseapp.com",
    projectId: "flashcards-jjsa",
    storageBucket: "flashcards-jjsa.appspot.com",
    messagingSenderId: "1015371100569",
    appId: "1:1015371100569:web:a099fc461559094fbd2308",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  //const auth = getAuth(app);

  nuxtApp.vueApp.provide("db", db);
  nuxtApp.provide("db", db);
});
