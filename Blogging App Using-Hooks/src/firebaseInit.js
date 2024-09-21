// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDcYqMZdmgvJ72386PvLAxyQ5smly-lME",
  authDomain: "blogs-345b0.firebaseapp.com",
  projectId: "blogs-345b0",
  storageBucket: "blogs-345b0.appspot.com",
  messagingSenderId: "825232286138",
  appId: "1:825232286138:web:74368f5169b093c904fd83"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);