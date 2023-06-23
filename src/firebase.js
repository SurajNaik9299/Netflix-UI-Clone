import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgNwzVCLKlvvTpV_izLNdeZveB1S2RF40",
  authDomain: "netflix-clone-b6318.firebaseapp.com",
  projectId: "netflix-clone-b6318",
  storageBucket: "netflix-clone-b6318.appspot.com",
  messagingSenderId: "734252290352",
  appId: "1:734252290352:web:83dbaf76067da942b7b8f5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
