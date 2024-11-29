// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBzFgPTL8cx70rbW3cypoGB9jxLDnXVMh8",
  authDomain: "juegozombi-3447d.firebaseapp.com",
  databaseURL: "https://juegozombi-3447d-default-rtdb.firebaseio.com",
  projectId: "juegozombi-3447d",
  storageBucket: "juegozombi-3447d.firebasestorage.app",
  messagingSenderId: "863434977496",
  appId: "1:863434977496:web:a7ff25ec2c9b44b17967ad",
  measurementId: "G-WR8VVRXZ9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);