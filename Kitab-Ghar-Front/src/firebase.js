import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEjJPl0eASVeLNJ51b6vB2iH2K61FJLQw",
  authDomain: "ecommercethree-d6684.firebaseapp.com",
  projectId: "ecommercethree-d6684",
  storageBucket: "ecommercethree-d6684.appspot.com",
  messagingSenderId: "720891011758",
  appId: "1:720891011758:web:89a97e57be3a7aed43c33f",
  measurementId: "G-XYQCT4JGQN",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();