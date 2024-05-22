import {initializeApp} from "firebase/app";
import {collection, doc, getFirestore, setDoc} from "firebase/firestore";
import items from './public/products_mock.json' assert {type: 'json'};

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
            const {id, ...itemWithoutId} = item; // Elimina el ID del objeto
            const itemRef = doc(itemsCollection); // Genera un ID automáticamente
            await setDoc(itemRef, itemWithoutId); // Sube el objeto sin el ID
            console.log(`Item ${item.name} added successfully with ID: ${itemRef.id}`);
        }
        console.log("All items processed successfully.");
    } catch (error) {
        console.error("Error adding items: ", error);
    }
};

uploadItems();
