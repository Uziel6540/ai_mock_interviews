import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-VG3MZiqeXlGmCgg-ztEm3uveeZTfXSk",
  authDomain: "prepwise-68446.firebaseapp.com",
  projectId: "prepwise-68446",
  storageBucket: "prepwise-68446.firebasestorage.app",
  messagingSenderId: "426867871967",
  appId: "1:426867871967:web:365a0e89af454f5b58d96a",
  measurementId: "G-E78R21V1SF",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore;
