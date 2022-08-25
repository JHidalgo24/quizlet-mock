import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: `${process.env.VUE_APP_FIREBASE_API_KEY}`,
    authDomain: "quizalt-6d3fa.firebaseapp.com",
    projectId: "quizalt-6d3fa",
    storageBucket: "quizalt-6d3fa.appspot.com",
    messagingSenderId: "395917127891",
    appId: "1:395917127891:web:0a20990167316fc50f6426",
    measurementId: "G-GBVSQJGZ6W"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

export {firebase, db, auth, storage};