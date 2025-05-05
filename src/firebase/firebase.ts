import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  User
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv1-U3MwbxRQm3Bn1XIRt_YHb7uoeMeDQ",
  authDomain: "shopease-455f1.firebaseapp.com",
  projectId: "shopease-455f1",
  storageBucket: "shopease-455f1.firebasestorage.app",
  messagingSenderId: "734948792494",
  appId: "1:734948792494:web:1a0556251fb8e4d588f53f",
  measurementId: "G-DHENMY57B9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  firebaseSignOut,
  onAuthStateChanged 
};

export type { User };