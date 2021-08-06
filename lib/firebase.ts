import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxsu4X_zEnsldIr9B8yh6YFDlIXKSAnGw",
  authDomain: "nextfire-5b7e4.firebaseapp.com",
  projectId: "nextfire-5b7e4",
  storageBucket: "nextfire-5b7e4.appspot.com",
  messagingSenderId: "519992029819",
  appId: "1:519992029819:web:f10bd019123b22ff2868de",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
