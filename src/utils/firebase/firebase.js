// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi9JExRB9FSD7O5SBqxGebhp48taN9Ljs",
  authDomain: "hybrid-clothing-db.firebaseapp.com",
  projectId: "hybrid-clothing-db",
  storageBucket: "hybrid-clothing-db.appspot.com",
  messagingSenderId: "839211030030",
  appId: "1:839211030030:web:2b47b5fe8ed534d830ce5f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); 

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);