import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAAFgKVNQ-aB1oaxzix1wzLTHZleB25AhM",
  authDomain: "fir-storage-i-53bbc.firebaseapp.com",
  databaseURL: "https://fir-storage-i-53bbc-default-rtdb.firebaseio.com",
  projectId: "fir-storage-i-53bbc",
  storageBucket: "fir-storage-i-53bbc.appspot.com",
  messagingSenderId: "732721599847",
  appId: "1:732721599847:web:07b7002f3bf6d25d5a8bc2",
  measurementId: "G-GVJC4C1JR4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database }