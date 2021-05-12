import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCx5OyDNtqNWu36D-_YgVUPRVHriyoD38s",
  authDomain: "react-auth-5c40d.firebaseapp.com",
  projectId: "react-auth-5c40d",
  storageBucket: "react-auth-5c40d.appspot.com",
  messagingSenderId: "437703814152",
  appId: "1:437703814152:web:77a913e2f6cd43531b35bd",
  measurementId: "G-JMMX9RTCLJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { auth };
export default db;
