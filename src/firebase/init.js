// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: "AIzaSyCBw6NeLBeWDfpC0qI6QiZHY7rO6JOY1rQ",
  authDomain: "fir-practice-53629.firebaseapp.com",
  projectId: "fir-practice-53629",
  storageBucket: "fir-practice-53629.firebasestorage.app",
  messagingSenderId: "100005512553",
  appId: "1:100005512553:web:8bee4ab92479393ad069f8"
};

// Initialize Firebase 
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();