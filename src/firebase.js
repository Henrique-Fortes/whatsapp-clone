import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBbqqNlNTn_d09XgaQBiVNl-7RT9kpeFmI",
    authDomain: "whatsapp-clone-38bc6.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-38bc6.firebaseio.com",
    projectId: "whatsapp-clone-38bc6",
    storageBucket: "whatsapp-clone-38bc6.appspot.com",
    messagingSenderId: "522894880723",
    appId: "1:522894880723:web:af18211ef82aab2eae8926",
    measurementId: "G-CFLQTMDCK3"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;