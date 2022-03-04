import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlIVmZsfgeRCqJQGKfsDgbPTJLSOuwwgs",
  authDomain: "flower-shop-caf72.firebaseapp.com",
  projectId: "flower-shop-caf72",
  storageBucket: "flower-shop-caf72.appspot.com",
  messagingSenderId: "734437979029",
  appId: "1:734437979029:web:1fc73054b4f4407b08fc9c",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
export default firebase;
