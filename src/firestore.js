import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDmoeLJQwHMUJgtd-UI9Q9t8vsxebS6fGw",
    authDomain: "smartlink-pro.firebaseapp.com",
    projectId: "smartlink-pro",
    storageBucket: "smartlink-pro.appspot.com",
    messagingSenderId: "504400761702",
    appId: "1:504400761702:web:6fe0c8e8e44796cca92ea7",
    measurementId: "G-Q7BC518SGK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };

// firebase.initializeApp(firebaseConfig);
// export default firebase;