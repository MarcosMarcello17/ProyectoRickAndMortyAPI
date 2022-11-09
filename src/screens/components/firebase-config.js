// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVYuh8hcATF_Kru9Xf5icObZXaCR3TCnE",
  authDomain: "rickandmortyapi-94788.firebaseapp.com",
  databaseURL: "https://rickandmortyapi-94788-default-rtdb.firebaseio.com",
  projectId: "rickandmortyapi-94788",
  storageBucket: "rickandmortyapi-94788.appspot.com",
  messagingSenderId: "1121017543",
  appId: "1:1121017543:web:061a5079e1f8cfbf9028e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const characterDB = getDatabase(app);

export default characterDB;
