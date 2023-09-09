
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyChNzo0gw_VtbHfO3R_oobEJrYTMaWa8Xg",
  authDomain: "tarefasplus-5971a.firebaseapp.com",
  projectId: "tarefasplus-5971a",
  storageBucket: "tarefasplus-5971a.appspot.com",
  messagingSenderId: "35257705679",
  appId: "1:35257705679:web:d20ce4eebb8480bae983ba"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };