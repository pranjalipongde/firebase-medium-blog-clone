import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-medium-blog-clone.firebaseapp.com",
  projectId: "fir-medium-blog-clone",
  storageBucket: "fir-medium-blog-clone.appspot.com",
  messagingSenderId: "1033789828214",
  appId: "1:1033789828214:web:7bf33e2b63acf3f2094357",
  measurementId: "G-G5NRXJFY3C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
