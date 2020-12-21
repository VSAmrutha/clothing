import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config={
    apiKey: "AIzaSyCuWiOE6VbOhY3aPeeR8AMbT18rshsC8FE",
    authDomain: "crwn-db-d51c1.firebaseapp.com",
    databaseURL: "https://crwn-db-d51c1.firebaseio.com",
    projectId: "crwn-db-d51c1",
    storageBucket: "crwn-db-d51c1.appspot.com",
    messagingSenderId: "283581702967",
    appId: "1:283581702967:web:48d2088eb9ba750dddb0b2",
    measurementId: "G-ZJ06HY7NGT"
  };
  firebase.initializeApp(config);
  export  const auth=firebase.auth();
  export const firestore= firebase.firestore();
  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({params:"select_account"});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;

