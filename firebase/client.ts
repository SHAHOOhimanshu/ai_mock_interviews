import { initializeApp, getApp , getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAaoCe_aApnNujwiVXx7PBqkepbcgl4nuo",
  authDomain: "prepwise-babe0.firebaseapp.com",
  projectId: "prepwise-babe0",
  storageBucket: "prepwise-babe0.firebasestorage.app",
  messagingSenderId: "140697528190",
  appId: "1:140697528190:web:aa61a1dfe505a9d909f52f",
  measurementId: "G-TBY3R06LR4"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);