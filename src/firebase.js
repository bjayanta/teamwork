import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAmDBTEpBCCun7HhCZXpvayf0bOHezC-Kg",
    authDomain: "todo-uis-jb.firebaseapp.com",
    databaseURL: "https://todo-uis-jb.firebaseio.com",
    projectId: "todo-uis-jb",
    storageBucket: "todo-uis-jb.appspot.com",
    messagingSenderId: "161408840613",
    appId: "1:161408840613:web:8bb2cf73e99fcfa5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firestore instance
const db = firebase.firestore();

// export the database
export default db;

