import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = false;

export const myFirebase = () => {
    if (!db) {
        const firebaseConfig = {
            apiKey: "AIzaSyDmoeLJQwHMUJgtd-UI9Q9t8vsxebS6fGw",
            authDomain: "smartlink-pro.firebaseapp.com",
            projectId: "smartlink-pro",
            storageBucket: "smartlink-pro.appspot.com",
            messagingSenderId: "504400761702",
            appId: "1:504400761702:web:6fe0c8e8e44796cca92ea7",
            measurementId: "G-Q7BC518SGK"
        };
        const firebaseApp = initializeApp(firebaseConfig)
        db = getFirestore(firebaseApp)
    }
    return db
}