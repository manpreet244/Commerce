import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
var firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyBvdrdla3DPEcXihe_UyPY_I6AUvhQYs5Q",
  authDomain: "contact-form-39356.firebaseapp.com",
  projectId: "contact-form-39356",
  storageBucket: "contact-form-39356.appspot.com",
  messagingSenderId: "683406889569",
  appId: "1:683406889569:web:0cb7b198ee7f8d640f1020",
  measurementId: "G-2J6PY779LN"

});

var db = firebaseApp.firestore();

export { db };