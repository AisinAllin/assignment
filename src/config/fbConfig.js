import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBv7dPC5--WJO2Nc2eR3Z7szDKiPoRe3T8",
  authDomain: "cc-test-b0866.firebaseapp.com",
  projectId: "cc-test-b0866",
  storageBucket: "cc-test-b0866.appspot.com",
  messagingSenderId: "910118460907",
  appId: "1:910118460907:web:d9b348dd54435cb2df4dae",
  measurementId: "G-3L4ZBXK1F2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
