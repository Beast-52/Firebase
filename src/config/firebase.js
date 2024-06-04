// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ94pInAqg9b1HTNd9tu__67-VFHSQclA",
  authDomain: "contact-store-7ae69.firebaseapp.com",
  projectId: "contact-store-7ae69",
  storageBucket: "contact-store-7ae69.appspot.com",
  messagingSenderId: "634676936222",
  appId: "1:634676936222:web:82d73c9411d31c07e9380f",
  measurementId: "G-TLCZK4FHDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)