import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-ed429.firebaseapp.com",
  projectId: "reactchat-ed429",
  storageBucket: "reactchat-ed429.appspot.com",
  messagingSenderId: "480468034011",
  appId: "1:480468034011:web:3eb85ecd35f904239787fe"
};
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()
