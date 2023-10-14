import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyDC_92AG_DPssQJKoLzDYP3Wcawb8lLoag",
  authDomain: "taller2-9137b.firebaseapp.com",
  projectId: "taller2-9137b",
  storageBucket: "taller2-9137b.appspot.com",
  messagingSenderId: "689842662875",
  appId: "1:689842662875:web:d320cd4f8d8a453a948bfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);