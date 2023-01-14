import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp06XxZC1864WJAV7LyW9LaP8gqcEpwrM",
  authDomain: "coderhouse-hanmartx.firebaseapp.com",
  projectId: "coderhouse-hanmartx",
  storageBucket: "coderhouse-hanmartx.appspot.com",
  messagingSenderId: "62947319905",
  appId: "1:62947319905:web:a664b58280f6ac88174a20",
  measurementId: "G-RT22PW2C4W"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);