import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import App from "./App.js";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

firebase.initializeApp({
  apiKey: "AIzaSyD6dKYcmmXuveElpZvqOqkuVfhfrRE_m-s",
  authDomain: "center-memory.firebaseapp.com",
  projectId: "center-memory",
  storageBucket: "center-memory.appspot.com",
  messagingSenderId: "713624690093",
  appId: "1:713624690093:web:6a0dbd05bd9f7e0c03d524",
});

ReactDOM.render(<App />, document.getElementById("root"));
