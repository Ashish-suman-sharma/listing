// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "csmpus-connect.firebaseapp.com",
  projectId: "csmpus-connect",
  storageBucket: "csmpus-connect.appspot.com",
  messagingSenderId: "875479069845",
  appId: "1:875479069845:web:64e82accaa0092c872d79c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);