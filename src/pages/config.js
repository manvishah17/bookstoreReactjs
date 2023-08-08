// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrL53Unfq47q2HdTt3CK72lvEhpkMu4xI",
  authDomain: "bookworms-7315a.firebaseapp.com",
  projectId: "bookworms-7315a",
  storageBucket: "bookworms-7315a.appspot.com",
  messagingSenderId: "481889668429",
  appId: "1:481889668429:web:164c365082f58f83063b04",
  measurementId: "G-0PSMDYQ1RE"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};