import * as firebase from 'firebase';
import "firebase/auth";
// Optionally import the services that you want to use
//
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyApCpPlB4vIWXbujLFJBAuevFBCt2fwS70",
    authDomain: "exocerco.firebaseapp.com",
    databaseURL: "https://exocerco-default-rtdb.firebaseio.com",
    projectId: "exocerco",
    storageBucket: "exocerco.appspot.com",
    messagingSenderId: "709735166557",
    appId: "1:709735166557:web:80b4444e44ac5c2a4053b4",
    measurementId: "G-PPLNPKXX7D"
};

firebase.initializeApp(firebaseConfig);
export default firebase;