// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fly-detector-84879.firebaseapp.com",
  projectId: "fly-detector-84879",
  storageBucket: "fly-detector-84879.appspot.com",
  messagingSenderId: "160560279374",
  appId: "1:160560279374:web:d66aac24bec57d6003f81f",
  measurementId: "G-ZKRP5J65LK"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };