import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAekzZhLijpdrJn7CI3zIGeoKXZIVK21Qo",
  authDomain: "tipply-3d023.firebaseapp.com",
  projectId: "tipply-3d023",
  storageBucket: "tipply-3d023.firebasestorage.app",
  messagingSenderId: "181374833672",
  appId: "1:181374833672:web:33b00ce783051497f56dbd",
  measurementId: "G-5CRQ7ZS4NW",
};

// App initialization
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Google Auth Provider
export { auth, db, googleProvider };
