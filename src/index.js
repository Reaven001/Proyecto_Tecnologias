import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

import App from "./App.js";
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
firebase.initializeApp(firebaseconfig);

const storage = firebase.storage();
const database = firebase.database();

export { storage, database };

ReactDOM.render(<App />, document.getElementById("root"));
