import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYUAZuvtc039CSxQKDj9S4SKr_Wa2hnH8",
  authDomain: "clone-8feda.firebaseapp.com",
  projectId: "clone-8feda",
  storageBucket: "clone-8feda.appspot.com",
  messagingSenderId: "881586964956",
  appId: "1:881586964956:web:4be93be1e5ea50ac6f6719",
  measurementId: "G-NT6GZDPKG5",
};

// This connects the frontend to the backend
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
