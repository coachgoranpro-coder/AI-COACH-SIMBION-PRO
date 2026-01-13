// Trial Service - Account-based trial period management
import { doc, getDoc, setDoc, updateDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const TRIAL_DAYS = 30;

export interface UserSubscription {
  email: string;
  trialStartDate: Date;
  trialExpiresAt: Date;
  isTrialActive: boolean;
  subscriptionStatus: 'trial' | 'active' | 'expired';
  subscriptionExpiresAt: Date | null;
  activationCode?: string;
  createdAt: Date;
  admin?: boolean;
}

// Initialize trial for new user
export async function initializeTrial(userId: string, email: string): Promise<void> {
  try {
    const userRef = doc(db, 'users', userId);
    const trialStartDate = new Date();
    const trialExpiresAt = new Date(trialStartDate.getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000);

    await setDoc(userRef, {
      email,
      trialStartDate: Timestamp.fromDate(trialStartDate),
      trialExpiresAt: Timestamp.fromDate(trialExpiresAt),
      isTrialActive: true,
      subscriptionStatus: 'trial',
      subscriptionExpiresAt: null,
      createdAt: serverTimestamp(),
    });

    console.log('Trial initialized for user:', userId);
  } catch (error) {
    console.error('Error initializing trial:', error);
    throw error;
  }
}

// Get user subscription status
export async function getUserSubscription(userId: string): Promise<UserSubscription | null> {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      return null;
    }

    const data = userDoc.data();
    return {
      email: data.email,
      trialStartDate: data.trialStartDate?.toDate() || new Date(),
      trialExpiresAt: data.trialExpiresAt?.toDate() || new Date(),
      isTrialActive: data.isTrialActive || false,
      subscriptionStatus: data.subscriptionStatus || 'expired',
      subscriptionExpiresAt: data.subscriptionExpiresAt?.toDate() || null,
      activationCode: data.activationCode,
      createdAt: data.createdAt?.toDate() || new Date(),      admin: data.admin === 'true' || data.admin === true,    };
  } catch (error) {
    console.error('Error getting user subscription:', error);
    return null;
  }
}

// Check if trial is still valid
export function isTrialValid(subscription: UserSubscription): boolean {
  if (subscription.subscriptionStatus === 'active') {
    // User has paid subscription
    if (subscription.subscriptionExpiresAt) {
      return new Date() < subscription.subscriptionExpiresAt;
    }
    return true;
  }

  if (subscription.subscriptionStatus === 'trial') {
    // User is on trial
    return new Date() < subscription.trialExpiresAt;
  }

  return false;
}

// Get remaining trial days
export function getRemainingTrialDays(subscription: UserSubscription): number {
  if (subscription.subscriptionStatus !== 'trial') {
    return 0;
  }

  const now = new Date();
  const expiresAt = subscription.trialExpiresAt;
  const diffTime = expiresAt.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return Math.max(0, diffDays);
}

// Update subscription status
export async function updateSubscriptionStatus(
  userId: string,
  status: 'trial' | 'active' | 'expired'
): Promise<void> {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      subscriptionStatus: status,
      isTrialActive: status === 'trial',
    });
  } catch (error) {
    console.error('Error updating subscription status:', error);
    throw error;
  }
}
