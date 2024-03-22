// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1F3pYAsktP6QAT7YoLoSAH5o2lIREeLU",
  authDomain: "announce-fd88c.firebaseapp.com",
  projectId: "announce-fd88c",
  storageBucket: "announce-fd88c.appspot.com",
  messagingSenderId: "968024457019",
  appId: "1:968024457019:web:cdd36d723cf144d531c11e",
  measurementId: "G-TKGYZPNTCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }


