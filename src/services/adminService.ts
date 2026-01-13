// Admin Service - Statistics and admin operations
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface AdminStats {
  totalUsers: number;
  trialUsers: number;
  activeUsers: number;
  paidUsers: number;
  expiredUsers: number;
  totalLicenses: number;
  usedLicenses: number;
  availableLicenses: number;
}

export interface UserData {
  uid: string;
  email: string;
  subscriptionStatus: 'trial' | 'active' | 'expired';
  createdAt: Date;
  trialExpiresAt?: Date;
  subscriptionExpiresAt?: Date;
  activationCode?: string;
  maxAthletes: number;
}

export async function getAdminStats(): Promise<AdminStats> {
  try {
    // Get all users
    const usersRef = collection(db, 'users');
    const usersSnapshot = await getDocs(usersRef);
    
    let totalUsers = 0;
    let trialUsers = 0;
    let activeUsers = 0;
    let paidUsers = 0;
    let expiredUsers = 0;

    usersSnapshot.forEach((doc) => {
      const data = doc.data();
      totalUsers++;

      if (data.subscriptionStatus === 'trial') {
        trialUsers++;
        // Check if trial is still valid
        const trialExpires = data.trialExpiresAt?.toDate();
        if (trialExpires && trialExpires > new Date()) {
          activeUsers++;
        } else {
          expiredUsers++;
        }
      } else if (data.subscriptionStatus === 'active') {
        activeUsers++;
        paidUsers++;
      } else if (data.subscriptionStatus === 'expired') {
        expiredUsers++;
      }
    });

    // Get all licenses
    const licensesRef = collection(db, 'licenses');
    const licensesSnapshot = await getDocs(licensesRef);
    
    let totalLicenses = 0;
    let usedLicenses = 0;

    licensesSnapshot.forEach((doc) => {
      const data = doc.data();
      totalLicenses++;
      if (data.isUsed) {
        usedLicenses++;
      }
    });

    return {
      totalUsers,
      trialUsers,
      activeUsers,      paidUsers,      expiredUsers,
      totalLicenses,
      usedLicenses,
      availableLicenses: totalLicenses - usedLicenses,
    };
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return {
      totalUsers: 0,
      trialUsers: 0,
      activeUsers: 0,
      paidUsers: 0,
      expiredUsers: 0,
      totalLicenses: 0,
      usedLicenses: 0,
      availableLicenses: 0,
    };
  }
}

export interface UserData {
  uid: string;
  email: string;
  subscriptionStatus: 'trial' | 'active' | 'expired';
  createdAt: Date;
  trialExpiresAt?: Date;
  subscriptionExpiresAt?: Date;
  activationCode?: string;
  maxAthletes: number;
}

export async function getAllUsers(): Promise<UserData[]> {
  try {
    const usersRef = collection(db, 'users');
    const usersSnapshot = await getDocs(usersRef);
    
    const users: UserData[] = [];

    usersSnapshot.forEach((doc) => {
      const data = doc.data();
      users.push({
        uid: doc.id,
        email: data.email || '',
        subscriptionStatus: data.subscriptionStatus || 'trial',
        createdAt: data.createdAt?.toDate() || new Date(),
        trialExpiresAt: data.trialExpiresAt?.toDate(),
        subscriptionExpiresAt: data.subscriptionExpiresAt?.toDate(),
        activationCode: data.activationCode,
        maxAthletes: data.maxAthletes || (data.subscriptionStatus === 'trial' ? 15 : 30)
      });
    });

    return users.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  } catch (error) {
    console.error('Error getting all users:', error);
    return [];
  }
}
