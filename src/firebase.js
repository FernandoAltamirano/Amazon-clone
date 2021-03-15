import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAvjPbhGK-CR_mO94W6NWwjHPTdtOGTGws",
  authDomain: "clone-46db0.firebaseapp.com",
  projectId: "clone-46db0",
  storageBucket: "clone-46db0.appspot.com",
  messagingSenderId: "322781272517",
  appId: "1:322781272517:web:cb03669e27ff2de61953ac",
});

const auth = firebase.auth();

export { auth };
