import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAKaWg26Y150wvnTbdPQ6Cwl8v8evk6FVQ",
    authDomain: "meeting-reporter.firebaseapp.com",
    projectId: "meeting-reporter",
    storageBucket: "meeting-reporter.appspot.com",
    messagingSenderId: "914264360649",
    appId: "1:914264360649:web:d152fba36eed8d982a2f18",
    measurementId: "G-174GS70P3N"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { app, db };
