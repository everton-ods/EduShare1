import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDkQutbPaMKkavTiBIy0iFrnCLT1RPXSVY",
  authDomain: "fire-app-edu.firebaseapp.com",
  projectId: "fire-app-edu",
  storageBucket: "fire-app-edu.appspot.com",
  messagingSenderId: "358434926698",
  appId: "1:358434926698:web:d965cbbfad7d6353ffda13",
  measurementId: "G-3NXPL948HT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
