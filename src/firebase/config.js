import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcPdGObQmgnsezWaCMjcOE-Cn9aQWyevc",
  authDomain: "dojoprojectmanny.firebaseapp.com",
  projectId: "dojoprojectmanny",
  storageBucket: "dojoprojectmanny.appspot.com",
  messagingSenderId: "509452510390",
  appId: "1:509452510390:web:3ac74a856ad0f8fe1cb217",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp();

export { projectAuth, projectFirestore, timestamp, projectStorage };
