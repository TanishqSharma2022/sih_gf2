// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkZ21fceUEokDgmkxAT8MBFeUcAPUXm7M",
  authDomain: "sih-gf.firebaseapp.com",
  projectId: "sih-gf",
  storageBucket: "sih-gf.appspot.com",
  messagingSenderId: "827313285313",
  appId: "1:827313285313:web:cfd4d8392325d4b09fcc40",
  measurementId: "G-LEV0PS3D8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);