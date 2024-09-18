// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdf6tS1Fi51XEVU4f4TRyHDgNKYg2hVYc",
  authDomain: "blogging-app-e69cb.firebaseapp.com",
  projectId: "blogging-app-e69cb",
  storageBucket: "blogging-app-e69cb.appspot.com",
  messagingSenderId: "1097272998293",
  appId: "1:1097272998293:web:6e945d5b08c60e4d909e9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);