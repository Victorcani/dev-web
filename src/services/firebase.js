import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBT-TrhoH3OjlJqih4ugvtJ4_JDzy5ARIQ",
    authDomain: "victor-web-5dcdc.firebaseapp.com",
    projectId: "victor-web-5dcdc",
    storageBucket: "victor-web-5dcdc.appspot.com",
    messagingSenderId: "978512941179",
    appId: "1:978512941179:web:e2b60b5b87647d3954d2de",
    measurementId: "G-RL441JMYBN"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db