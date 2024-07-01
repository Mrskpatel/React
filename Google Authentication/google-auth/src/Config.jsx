import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyB3qjkOjisqVt3SuQHNsFfh8eVxGAcak9c",
  authDomain: "auth-task-efbec.firebaseapp.com",
  projectId: "auth-task-efbec",
  storageBucket: "auth-task-efbec.appspot.com",
  messagingSenderId: "586559944638",
  appId: "1:586559944638:web:16b301311dceb6135aebef",
  measurementId: "G-9LFR8VNPPV"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider}

