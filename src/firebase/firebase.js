import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBblNVwdWX7ZCNYM0fqiZnxnyAqEgqrH74",
    authDomain: "quizalt-2.firebaseapp.com",
    projectId: "quizalt-2",
    storageBucket: "quizalt-2.appspot.com",
    messagingSenderId: "1034641615935",
    appId: "1:1034641615935:web:983000035584ce462f1c8a"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

export {firebase, db, auth, storage};