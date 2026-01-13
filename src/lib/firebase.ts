// Firebase Configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCk29E-FMObv7UDT4n8nzqlHICPrg7TzSw",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ai-coach-simbion-pro.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ai-coach-simbion-pro",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ai-coach-simbion-pro.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "873744995884",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:873744995884:web:53353ef8b432dd106fe389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
