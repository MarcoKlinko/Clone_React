// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB364-nUoup8Y3MrRK4JhkiZYhnGq5oAtU",
  authDomain: "cone-react.firebaseapp.com",
  projectId: "cone-react",
  storageBucket: "cone-react.appspot.com",
  messagingSenderId: "1019770175223",
  appId: "1:1019770175223:web:edb7ca36eb29c09fc85df2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
