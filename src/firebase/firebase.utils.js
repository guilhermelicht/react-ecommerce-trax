import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2ArwFJqvV0NC0MGh95BPccU9CeRlN-K8",
    authDomain: "trax-db.firebaseapp.com",
    databaseURL: "https://trax-db.firebaseio.com",
    projectId: "trax-db",
    storageBucket: "trax-db.appspot.com",
    messagingSenderId: "637026002072",
    appId: "1:637026002072:web:a90e49daf8a599cd841ced",
    measurementId: "G-94JFXXEV2R"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;