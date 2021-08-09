import firebase from "firebase/app";
import "firebase/auth"; // used for the authentication
import "firebase/firestore"; // used for the cloud firestore

const firebaseConfig = {
  apiKey: "Firebase ApiKey",
  authDomain: "xxxxxxx.firebaseapp.com",
  projectId: "xxxxx-xxxxx-xxxxx",
  storageBucket: "xxxxx-xxxx-xxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxx",
  appId: "x:xxxxxxxxxx:web:xxxxxxxxxxxxxxxxxxx",
  measurementId: "G-xxxxxxxxxxxxx",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
