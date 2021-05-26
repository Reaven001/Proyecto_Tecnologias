import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

import App from "./App.js";
import Admins from "./admins"
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseconfig = {
  apiKey: "AIzaSyD6dKYcmmXuveElpZvqOqkuVfhfrRE_m-s",
  authDomain: "center-memory.firebaseapp.com",
  projectId: "center-memory",
  storageBucket: "center-memory.appspot.com",
  messagingSenderId: "713624690093",
  appId: "1:713624690093:web:6a0dbd05bd9f7e0c03d524",
  databaseURL: "https://center-memory-default-rtdb.firebaseio.com/",
};
const fb = firebase.initializeApp(firebaseconfig);

const storage = firebase.storage();
const database = firebase.database();
const firebasedb=fb.database().ref();

export { storage, database, firebasedb};

ReactDOM.render(<App />, document.getElementById("root"));
