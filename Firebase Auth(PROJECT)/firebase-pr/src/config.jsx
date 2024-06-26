import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfMIzc8GNN822vAci0hhAzml-W3vSZvFk",
  authDomain: "test-98ea3.firebaseapp.com",
  projectId: "test-98ea3",
  storageBucket: "test-98ea3.appspot.com",
  messagingSenderId: "596438038193",
  appId: "1:596438038193:web:c18f8d84f0aabf4dd09490",
  measurementId: "G-HX5RBJSEL8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export{auth , provider}