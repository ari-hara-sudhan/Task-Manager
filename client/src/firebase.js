// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "todo-app-e6dc7.firebaseapp.com",
  projectId: "todo-app-e6dc7",
  storageBucket: "todo-app-e6dc7.appspot.com",
  messagingSenderId: "751986733209",
  appId: "1:751986733209:web:8025b86e957027b26e8808",
  measurementId: "G-EV8FL80CGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);