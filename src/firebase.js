import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt5AVazzK2EGuUzSHppMfL102IBXf3LrM",
  authDomain: "twitter-clone-e07a6.firebaseapp.com",
  databaseURL: "https://twitter-clone-e07a6-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-e07a6",
  storageBucket: "twitter-clone-e07a6.appspot.com",
  messagingSenderId: "801767902235",
  appId: "1:801767902235:web:dd826b156974345b71fcbe",
  measurementId: "G-DMDSTF5HM6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
