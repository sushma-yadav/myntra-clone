import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBg259x34ha7sMxdtm-Fnff4dk5HTs8GYg",
    authDomain: "myntra-clone-22bda.firebaseapp.com",
    projectId: "myntra-clone-22bda",
    storageBucket: "myntra-clone-22bda.appspot.com",
    messagingSenderId: "987499102759",
    appId: "1:987499102759:web:d8621dafeba803dc748402",
    measurementId: "G-WFRKZ6HWN8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()

export { app, auth }