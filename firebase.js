// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
  appId: "1:451610776408:web:c2e450be2b738540144b2d",
  measurementId: "G-F37B42973C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);