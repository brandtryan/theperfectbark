// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk2IQQZpHRGdB09BY6uOudblHZ6PgY0GI",
  authDomain: "theperfectbark-a7f24.firebaseapp.com",
  projectId: "theperfectbark-a7f24",
  storageBucket: "theperfectbark-a7f24.firebasestorage.app",
  messagingSenderId: "451610776408",
  appId: "1:451610776408:web:275f0b6d37c1ce64144b2d",
  measurementId: "G-D38EW0X7CZ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);
