import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMuVQMbab_M24WDrS7IMj9I1-EIliHO5I",
  authDomain: "miplanta-ecommerce.firebaseapp.com",
  projectId: "miplanta-ecommerce",
  storageBucket: "miplanta-ecommerce.appspot.com",
  messagingSenderId: "245199725921",
  appId: "1:245199725921:web:004f267f0036e31647d120",
  measurementId: "G-6VN2ZH477F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


/*products.forEach((product) => {

  //addDoc funcion que llamo desde firestore, collection funcion desde firestore

  //db variable que llama a getFirestore, "products" es el nombre de nuestra colección

  addDoc(collection(db, 'products'), product)

    .then((docRef) => {

      console.log("documento agregado con id ", docRef.id)

    })

    .catch((error) => {

      console.error("error al agregar el documento", error)

    })

})*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
