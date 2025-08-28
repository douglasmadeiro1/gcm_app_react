import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4gwltyUBkWJi18-zw3TpHn4rQWSxK87Q",
    authDomain: "jsproject-f2bd8.firebaseapp.com",
    projectId: "jsproject-f2bd8",
    storageBucket: "jsproject-f2bd8.appspot.com",
    messagingSenderId: "972587241614",
    appId: "1:972587241614:web:737a292133c6a187d439df"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Exporta o objeto firebase e o db (Firestore)
export const auth = firebase.auth();
export const db = firebase.firestore();

// Exporta o objeto principal para compatibilidade, se necessário
export { firebase };