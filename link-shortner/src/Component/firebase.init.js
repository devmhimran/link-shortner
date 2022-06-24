// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuFNxylkjOR--Qkk_NVmWvaIOqosEZcBk",
  authDomain: "link-shortner-68000.firebaseapp.com",
  projectId: "link-shortner-68000",
  storageBucket: "link-shortner-68000.appspot.com",
  messagingSenderId: "308543900100",
  appId: "1:308543900100:web:2f51f9a915621f1b3bfc91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;