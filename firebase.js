// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, getauth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhGoVjyQ-UmCCp7e0PgvBil4ZujoIeywY",
  authDomain: "instagram-368a4.firebaseapp.com",
  projectId: "instagram-368a4",
  storageBucket: "instagram-368a4.appspot.com",
  messagingSenderId: "860675828556",
  appId: "1:860675828556:web:fa19dba1b59ef095ecbde9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();