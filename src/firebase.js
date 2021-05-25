// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA3-53cdQNhS_dD6KYzGQGKkdPt2OUCMLE",
    authDomain: "games-d0dc8.firebaseapp.com",
    projectId: "games-d0dc8",
    storageBucket: "games-d0dc8.appspot.com",
    messagingSenderId: "277915434873",
    appId: "1:277915434873:web:978425417181340c2639a8",
    measurementId: "G-5FVT95043P"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;