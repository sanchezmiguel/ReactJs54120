import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import items from './public/products_mock.json' assert { type: 'json' };

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

const uploadItems = async () => {
    const itemsCollection = collection(db, "items");

    try {
        for (const item of items) {
            const itemRef = doc(itemsCollection, item.id.toString()); // Use item.id as the document ID
            await setDoc(itemRef, item);
            console.log(`Item ${item.name} added successfully with ID: ${item.id}`);
        }
        console.log("All items processed successfully.");
    } catch (error) {
        console.error("Error adding items: ", error);
    }
};

uploadItems();
