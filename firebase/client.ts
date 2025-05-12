// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBc382RQm9QBFdDmGDiQj0V3ZqXg_YjfA",
    authDomain: "prepwiseai-59d50.firebaseapp.com",
    projectId: "prepwiseai-59d50",
    storageBucket: "prepwiseai-59d50.firebasestorage.app",
    messagingSenderId: "604766172399",
    appId: "1:604766172399:web:ca4e072593236df3e0971a",
    measurementId: "G-702630MEE4"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);