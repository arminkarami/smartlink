import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
 
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };

// firebase.initializeApp(firebaseConfig);
// export default firebase;
