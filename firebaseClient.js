import firebase from "firebase";


const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCeBG-Fdp7zMokdq829a3qfJHvr-sZs3XY",
  authDomain: "mychatapp-d129b.firebaseapp.com",
  projectId: "mychatapp-d129b",
  storageBucket: "mychatapp-d129b.appspot.com",
  messagingSenderId: "99454030424",
  appId: "1:99454030424:web:6ad105064eca6dc9a0b02d",
  measurementId: "G-G5JGGG097K"
};

export default function firebaseClient() {
    if(!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
    }
}