// src/firebase-config.js
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQMFnjelqNtOSiAMScSzjeL8lXbl-GpJY",
    authDomain: "marvelstoredb.firebaseapp.com",
    projectId: "marvelstoredb",
    storageBucket: "marvelstoredb.appspot.com",
    messagingSenderId: "145991435291",
    appId: "1:145991435291:web:c1cf70fc623af579bee4be"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};
