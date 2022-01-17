import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "wedding-338212.firebaseapp.com",
  databaseURL: "https://wishlist-wedding.europe-west1.firebasedatabase.app/",
  storageBucket: "bucket.appspot.com",
};

initializeApp(firebaseConfig);

export const db = getDatabase();
