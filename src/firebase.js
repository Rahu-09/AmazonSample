import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVQU0i7RRBfuZqdBYTJKnFWF6srydwiG8",
  authDomain: "clone-5b816.firebaseapp.com",
  projectId: "clone-5b816",
  storageBucket: "clone-5b816.appspot.com",
  messagingSenderId: "39225699272",
  appId: "1:39225699272:web:0ea7a83686379cd47ceefd",
  measurementId: "G-PD3M2QF2NY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
