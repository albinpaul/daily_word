import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBnUWsBK7WLnf-y03rbbm7gdVD9ORq5Fws",
  authDomain: "daily-word-75d3c.firebaseapp.com",
  projectId: "daily-word-75d3c",
  storageBucket: "daily-word-75d3c.appspot.com",
  messagingSenderId: "810603629490",
  appId: "1:810603629490:web:e73505cec29f640300f2ab",
  measurementId: "G-L0K793X87J"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)