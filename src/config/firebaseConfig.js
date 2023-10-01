// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // matiPruebas
  apiKey: "AIzaSyA4wTT7DWfpll1FeD2pq0ISUbIqsrRkOOw",
  authDomain: "matipruebas.firebaseapp.com",
  projectId: "matipruebas",
  storageBucket: "matipruebas.appspot.com",
  messagingSenderId: "656880564444",
  appId: "1:656880564444:web:0c4a49db4336257ea01c19",
  // matiAdmin
  // apiKey: "AIzaSyCSScdVBjwCZqQuET7706xgProkaeQeOKY",
  // authDomain: "matiadmin-ac197.firebaseapp.com",
  // projectId: "matiadmin-ac197",
  // storageBucket: "matiadmin-ac197.appspot.com",
  // messagingSenderId: "25575565813",
  // appId: "1:25575565813:web:13ac80ddd42ba8207698bc",

  // phoneland
  apiKey: "AIzaSyAZ1pAE-kkCvClBbxmV-srMpdWNvCZKqEU",
  authDomain: "react-coderhouse-7a36d.firebaseapp.com",
  projectId: "react-coderhouse-7a36d",
  storageBucket: "react-coderhouse-7a36d.appspot.com",
  messagingSenderId: "397209501781",
  appId: "1:397209501781:web:6735386b27ae75d13ed4dc",
  measurementId: "G-PZGQSWRF1T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
