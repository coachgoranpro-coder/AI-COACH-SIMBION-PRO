import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  User
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

export interface UserSubscription {
  email: string;
  displayName: string;
  subscriptionType: 'trial' | 'mvp' | 'pro';
  createdAt: any;
  expiresAt: any;
  isActive: boolean;
}

/**
 * Register novi korisnik sa email/password
 */
export async function registerUser(email: string, password: string, displayName: string): Promise<{
  success: boolean;
  message: string;
  user?: User;
}> {
  try {
    // Kreiraj Firebase Auth korisnika
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Kalkuliši trial expire date (30 dana od sad)
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    // Sačuvaj user info u Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      displayName: displayName,
      subscriptionType: 'trial',
      createdAt: serverTimestamp(),
      expiresAt: expiresAt,
      isActive: true,
      deviceCount: 0,
      maxDevices: 1 // Trial ima 1 device limit
    });

    return {
      success: true,
      message: 'Registracija uspešna! Dobili ste 30 dana trial perioda.',
      user
    };
  } catch (error: any) {
    console.error('Registration error:', error);
    
    let message = 'Greška pri registraciji.';
    if (error.code === 'auth/email-already-in-use') {
      message = 'Email adresa već postoji. Pokušajte da se prijavite.';
    } else if (error.code === 'auth/weak-password') {
      message = 'Lozinka mora imati najmanje 6 karaktera.';
    } else if (error.code === 'auth/invalid-email') {
      message = 'Neispravna email adresa.';
    }

    return { success: false, message };
  }
}

/**
 * Login postojećeg korisnika
 */
export async function loginUser(email: string, password: string): Promise<{
  success: boolean;
  message: string;
  user?: User;
}> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    return {
      success: true,
      message: 'Uspešno ste se prijavili!',
      user
    };
  } catch (error: any) {
    console.error('Login error:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    let message = 'Greška pri prijavljivanju.';
    if (error.code === 'auth/user-not-found') {
      message = 'Korisnik sa ovim email-om ne postoji.';
    } else if (error.code === 'auth/wrong-password') {
      message = 'Pogrešna lozinka.';
    } else if (error.code === 'auth/invalid-email') {
      message = 'Neispravna email adresa.';
    } else if (error.code === 'auth/invalid-credential') {
      message = 'Neispravni kredencijali. Proverite email i lozinku.';
    } else if (error.code === 'auth/too-many-requests') {
      message = 'Previše neuspešnih pokušaja. Pokušajte kasnije.';
    } else {
      message = `Greška: ${error.code || 'Nepoznata greška'}`;
    }

    return { success: false, message };
  }
}

/**
 * Odjavi korisnika
 */
export async function signOut(): Promise<void> {
  await firebaseSignOut(auth);
}

/**
 * Proveri subscription status trenutnog korisnika
 */
export async function getUserSubscription(userId: string): Promise<UserSubscription | null> {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    
    if (!userDoc.exists()) {
      return null;
    }

    return userDoc.data() as UserSubscription;
  } catch (error) {
    console.error('Error getting user subscription:', error);
    return null;
  }
}

/**
 * Proveri da li je subscription istekao
 */
export function isSubscriptionExpired(expiresAt: any): boolean {
  if (!expiresAt) return true;
  
  const expireDate = expiresAt.toDate ? expiresAt.toDate() : new Date(expiresAt);
  return expireDate < new Date();
}

/**
 * Izračunaj dane do isteka
 */
export function getDaysRemaining(expiresAt: any): number {
  if (!expiresAt) return 0;
  
  const expireDate = expiresAt.toDate ? expiresAt.toDate() : new Date(expiresAt);
  const now = new Date();
  const diffTime = expireDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return Math.max(0, diffDays);
}
