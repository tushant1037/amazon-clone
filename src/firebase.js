import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDXe68WCQt176pJLqMYKxRkC1hUqcfVBcU",
  authDomain: "clone-87a36.firebaseapp.com",
  databaseURL: "https://clone-87a36.firebaseio.com",
  projectId: "clone-87a36",
  storageBucket: "clone-87a36.appspot.com",
  messagingSenderId: "496891306310",
  appId: "1:496891306310:web:a9557d21d51c6d02ce0547",
  measurementId: "G-4BXCDMK39V",
});

const auth = firebase.auth();

export { auth };
