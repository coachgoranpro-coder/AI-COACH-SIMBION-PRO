// Activation Service - License code validation and activation
import { doc, getDoc, updateDoc, collection, query, where, getDocs, setDoc, serverTimestamp, deleteDoc, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

// 💰 SUBSCRIPTION PLANS
export const SUBSCRIPTION_PLANS = {
  trial: { duration: 30, price: 0, players: 15, name: 'Trial (30 dana)' },
  '1M': { duration: 30, price: 25, players: 15, name: '1 Mesec' },
  '3M': { duration: 90, price: 50, players: 30, name: '3 Meseca' },
  '6M': { duration: 180, price: 100, players: 60, name: '6 Meseci' }
};

export interface LicenseCode {
  code: string;
  type: '1M' | '3M' | '6M';
  createdAt: Date;
  activatedAt: Date | null;
  activatedBy: string | null;
  isUsed: boolean;
  expiresAt: Date | null;
}

// Validate and activate license code
export async function activateLicenseCode(
  userId: string,
  email: string,
  code: string
): Promise<{ success: boolean; message: string; expiresAt?: Date }> {
  try {
    // Check if code exists
    const licensesRef = collection(db, 'licenses');
    const q = query(licensesRef, where('code', '==', code.toUpperCase()));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, message: 'Kod ne postoji. Proverite unos.' };
    }

    const licenseDoc = querySnapshot.docs[0];
    const licenseData = licenseDoc.data() as any;

    // Check if code is already used
    if (licenseData.isUsed) {
      return { success: false, message: 'Kod je već iskorišćen.' };
    }

    // Calculate expiration date based on license type
    const now = new Date();
    let expiresAt: Date;

    switch (licenseData.type) {
      case '1M':
        expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
        break;
      case '3M':
        expiresAt = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000);
        break;
      case '6M':
        expiresAt = new Date(now.getTime() + 180 * 24 * 60 * 60 * 1000);
        break;
      default:
        return { success: false, message: 'Neispravan tip licence.' };
    }

    // Update license as used
    await updateDoc(licenseDoc.ref, {
      isUsed: true,
      activatedAt: Timestamp.fromDate(now),
      activatedBy: userId,
      activatedByEmail: email,
      expiresAt: Timestamp.fromDate(expiresAt),
    });

    // Update user subscription
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      subscriptionStatus: 'active',
      isTrialActive: false,
      subscriptionExpiresAt: Timestamp.fromDate(expiresAt),
      activationCode: code.toUpperCase(),
    });

    return {
      success: true,
      message: `Aktivacija uspešna! Vaša licenca ističe ${expiresAt.toLocaleDateString('sr-RS')}.`,
      expiresAt,
    };
  } catch (error) {
    console.error('Error activating license:', error);
    return { success: false, message: 'Greška pri aktivaciji. Pokušajte ponovo.' };
  }
}

// Generate unique license code
export function generateLicenseCode(type: '1M' | '3M' | '6M'): string {
  const prefix = 'SIMBION';
  const typeCode = type;
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}-${typeCode}-${random}`;
}
// Create and save license code to Firestore
export async function createLicenseCode(type: '1M' | '3M' | '6M'): Promise<{ success: boolean; code?: string; message: string }> {
  try {
    const code = generateLicenseCode(type);
    const licenseRef = doc(collection(db, 'licenses'), code);
    
    await setDoc(licenseRef, {
      code,
      type,
      createdAt: serverTimestamp(),
      activatedAt: null,
      activatedBy: null,
      activatedByEmail: null,
      isUsed: false,
      expiresAt: null,
    });

    return { success: true, code, message: 'Kod uspešno generisan!' };
  } catch (error) {
    console.error('Error creating license code:', error);
    return { success: false, message: 'Greška pri kreiranju koda.' };
  }
}

// Get all license codes
export async function getAllLicenseCodes(): Promise<LicenseCode[]> {
  try {
    const licensesRef = collection(db, 'licenses');
    const querySnapshot = await getDocs(licensesRef);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        code: data.code,
        type: data.type,
        createdAt: data.createdAt?.toDate() || new Date(),
        activatedAt: data.activatedAt?.toDate() || null,
        activatedBy: data.activatedBy || null,
        isUsed: data.isUsed || false,
        expiresAt: data.expiresAt?.toDate() || null,
      };
    });
  } catch (error) {
    console.error('Error fetching license codes:', error);
    return [];
  }
}

// Delete license code
export async function deleteLicenseCode(code: string): Promise<{ success: boolean; message: string }> {
  try {
    const licenseRef = doc(db, 'licenses', code);
    await deleteDoc(licenseRef);
    
    return { success: true, message: 'Kod uspešno obrisan!' };
  } catch (error) {
    console.error('Error deleting license code:', error);
    return { success: false, message: 'Greška pri brisanju koda.' };
  }
}
// Check if user has active subscription
export async function hasActiveSubscription(userId: string): Promise<boolean> {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      return false;
    }

    const data = userDoc.data();
    
    if (data.subscriptionStatus === 'active' && data.subscriptionExpiresAt) {
      const expiresAt = data.subscriptionExpiresAt.toDate();
      return new Date() < expiresAt;
    }

    if (data.subscriptionStatus === 'trial' && data.trialExpiresAt) {
      const trialExpiresAt = data.trialExpiresAt.toDate();
      return new Date() < trialExpiresAt;
    }

    return false;
  } catch (error) {
    console.error('Error checking subscription:', error);
    return false;
  }
}
