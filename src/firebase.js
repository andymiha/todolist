// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXVBFeV_3tjOw5i_vEBIcz0wgKY5jC-Pk",
  authDomain: "todolist-1b7e3.firebaseapp.com",
  projectId: "todolist-1b7e3",
  storageBucket: "todolist-1b7e3.appspot.com",
  messagingSenderId: "317441254940",
  appId: "1:317441254940:web:38ef6f9b68d8a14f56a1d9",
  measurementId: "G-8RT87BV3JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.firestore();
//const todoCollection = db.collection('todos');