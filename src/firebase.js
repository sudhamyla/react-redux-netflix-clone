import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, 
  createUserWithEmailAndPassword, signInWithEmailAndPassword    } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8Ys6iolIshMDuysw1M5WsKdAL-1g4Xac",
    authDomain: "react-redux-netflix-clon-b38ef.firebaseapp.com",
    projectId: "react-redux-netflix-clon-b38ef",
    storageBucket: "react-redux-netflix-clon-b38ef.appspot.com",
    messagingSenderId: "807110586696",
    appId: "1:807110586696:web:0d3267a1c3281e30bc837d",
    measurementId: "G-7KCQSK8340"
  };

  const firebaseApp = initializeApp( firebaseConfig );
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  export {auth, provider, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword }
    