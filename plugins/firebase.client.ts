import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
  const auth = getAuth(app);
  const firestore = getFirestore(app);
});
