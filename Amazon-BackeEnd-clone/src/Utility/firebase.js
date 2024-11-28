import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
// to use the database
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSi1SW99HM7fyXeVPrXlstx8FyVR0NU80",
  authDomain: "clone-416ee.firebaseapp.com",
  projectId: "clone-416ee",
  storageBucket: "clone-416ee.firebasestorage.app",
  messagingSenderId: "87986891896",
  appId: "1:87986891896:web:29089f4a755f981210118d",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = firebase.firestore();
