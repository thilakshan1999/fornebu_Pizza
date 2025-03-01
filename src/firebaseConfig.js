import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH_H5H2vW2XDaFYp664R-X1L5fXC7DjpE",
  authDomain: "fornenu-pizza.firebaseapp.com",
  projectId: "fornenu-pizza",
  storageBucket: "fornenu-pizza.firebasestorage.app",
  messagingSenderId: "973478550777",
  appId: "1:973478550777:web:08cd62dac5c698d88a1628",
  measurementId: "G-M5C8Z1YX2C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
