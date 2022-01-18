import { getApps, initializeApp } from "firebase/app";
import { Database, getDatabase } from "firebase/database";

const firebaseConfig = () => ({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const initFirebase = () => {
  if (getApps.length > 0 || !process.env) return;

  initializeApp(firebaseConfig());
};

export const firebaseDB = (): Database => {
  initFirebase();

  return getDatabase();
};
