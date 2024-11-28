// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDglKNk-KCojZjowtDOU0sGtCMUgWbnKCQ",
    authDomain: "vue-firebase-3f7b9.firebaseapp.com",
    projectId: "vue-firebase-3f7b9",
    storageBucket: "vue-firebase-3f7b9.firebasestorage.app",
    messagingSenderId: "740951501943",
    appId: "1:740951501943:web:6cdf6b9c29e32ba6fd2a72",
    measurementId: "G-47L9KXWWTF"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };