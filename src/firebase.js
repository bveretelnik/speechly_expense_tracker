import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyDpyY7NqmgIiaiinyVzvZfNgIWJcgHxMI4",
  authDomain: "speechly-transatcions-app.firebaseapp.com",
  projectId: "speechly-transatcions-app",
  storageBucket: "speechly-transatcions-app.appspot.com",
  messagingSenderId: "986257694238",
  appId: "1:986257694238:web:5db856e7e7bba36622180f",
};

firebase.initializeApp(firebaseConfig);

export const fb = firebase.firestore();
