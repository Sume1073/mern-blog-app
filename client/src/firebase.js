// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-58e18.firebaseapp.com",
  projectId: "mern-blog-app-58e18",
  storageBucket: "mern-blog-app-58e18.firebasestorage.app",
  messagingSenderId: "590566849396",
  appId: "1:590566849396:web:4942220a86812463188a21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);