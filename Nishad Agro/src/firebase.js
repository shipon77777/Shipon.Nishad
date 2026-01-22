import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOWUydDyASpw664VN7kkkUNJUPekpTmQA",
    authDomain: "nishad-agro.firebaseapp.com",
    projectId: "nishad-agro",
    storageBucket: "nishad-agro.firebasestorage.app",
    messagingSenderId: "984825143099",
    appId: "1:984825143099:web:c48e6e399fc98ee257211e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };