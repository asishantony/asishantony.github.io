import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAeBhJ2Adrle1_pt6g4rNC3b8TSVCd17q4",
  authDomain: "wedding-455de.firebaseapp.com",
  projectId: "wedding-455de",
  storageBucket: "wedding-455de.appspot.com",
  messagingSenderId: "464255220722",
  appId: "1:464255220722:web:4a20dd8216da390daf496b",
  measurementId: "G-M02VKGP6HR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
