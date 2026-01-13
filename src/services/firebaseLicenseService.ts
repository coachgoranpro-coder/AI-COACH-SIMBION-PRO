// Firebase License Service - Multi-Device License Management
import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  query, 
  where, 
  getDocs,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface LicenseInfo {
  code: string;
  tier: 'MVP' | 'PRO';
  maxDevices: number;
  activatedAt: Date | null;
  expiresAt: Date | null;
  isActive: boolean;
  userId?: string;
}

export interface DeviceInfo {
  id: string;
  licenseCode: string;
  deviceName: string;
  deviceFingerprint: string;
  lastSeen: Date;
  activatedAt: Date;
}

const TRIAL_DAYS = 30;

// Generate device fingerprint
export function getDeviceFingerprint(): string {
  const nav = window.navigator;
  const screen = window.screen;
  const fingerprint = [
    nav.userAgent,
    nav.language,
    screen.height,
    screen.width,
    screen.colorDepth,
    new Date().getTimezoneOffset()
  ].join('|');
  
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return `device_${Math.abs(hash).toString(36)}`;
}

// Get device name
export function getDeviceName(): string {
  const ua = navigator.userAgent;
  if (ua.includes('Windows')) return 'Windows PC';
  if (ua.includes('Mac')) return 'Mac';
  if (ua.includes('Linux')) return 'Linux PC';
  if (ua.includes('iPhone')) return 'iPhone';
  if (ua.includes('iPad')) return 'iPad';
  if (ua.includes('Android')) return 'Android Device';
  return 'Unknown Device';
}

// Validate activation code format
function validateCodeFormat(code: string, tier: 'MVP' | 'PRO'): boolean {
  if (tier === 'MVP') {
    return /^SIMBION-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code);
  } else {
    return /^SIMBION-PRO-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code);
  }
}

// Generate activation code (for admin)
export function generateActivationCode(tier: 'MVP' | 'PRO'): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const segments = [];
  
  for (let i = 0; i < 3; i++) {
    let segment = '';
    for (let j = 0; j < 4; j++) {
      segment += chars[Math.floor(Math.random() * chars.length)];
    }
    segments.push(segment);
  }
  
  const prefix = tier === 'MVP' ? 'SIMBION' : 'SIMBION-PRO';
  return `${prefix}-${segments.join('-')}`;
}

// Initialize trial period in local storage (fallback)
function initLocalTrial(tier: 'MVP' | 'PRO'): { trialEndDate: Date; daysRemaining: number } {
  const storageKey = `${tier.toLowerCase()}_trial`;
  const stored = localStorage.getItem(storageKey);
  
  if (stored) {
    const data = JSON.parse(stored);
    const endDate = new Date(data.trialEndDate);
    const now = new Date();
    const daysRemaining = Math.ceil((endDate.getTime() - now.getTime()) / (24 * 60 * 60 * 1000));
    
    return {
      trialEndDate: endDate,
      daysRemaining: Math.max(0, daysRemaining)
    };
  }
  
  const now = new Date();
  const endDate = new Date(now.getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000);
  
  localStorage.setItem(storageKey, JSON.stringify({
    trialStartDate: now.toISOString(),
    trialEndDate: endDate.toISOString()
  }));
  
  return {
    trialEndDate: endDate,
    daysRemaining: TRIAL_DAYS
  };
}

// Get license status (checks Firebase first, falls back to local)
export async function getLicenseStatus(tier: 'MVP' | 'PRO'): Promise<{
  isActivated: boolean;
  isExpired: boolean;
  daysRemaining: number;
  licenseCode?: string;
  deviceCount?: number;
  maxDevices?: number;
}> {
  try {
    // Check local storage for license code
    const storageKey = `${tier.toLowerCase()}_license_code`;
    const storedCode = localStorage.getItem(storageKey);
    
    if (!storedCode) {
      // No license, return trial status
      const trial = initLocalTrial(tier);
      return {
        isActivated: false,
        isExpired: trial.daysRemaining <= 0,
        daysRemaining: trial.daysRemaining
      };
    }
    
    // Check Firebase for license
    const licenseRef = doc(db, 'licenses', storedCode);
    const licenseSnap = await getDoc(licenseRef);
    
    if (!licenseSnap.exists()) {
      // Invalid license
      localStorage.removeItem(storageKey);
      const trial = initLocalTrial(tier);
      return {
        isActivated: false,
        isExpired: trial.daysRemaining <= 0,
        daysRemaining: trial.daysRemaining
      };
    }
    
    const license = licenseSnap.data() as LicenseInfo;
    
    // Check if license is active
    if (!license.isActive) {
      localStorage.removeItem(storageKey);
      const trial = initLocalTrial(tier);
      return {
        isActivated: false,
        isExpired: trial.daysRemaining <= 0,
        daysRemaining: trial.daysRemaining
      };
    }
    
    // Check device count
    const devicesQuery = query(
      collection(db, 'devices'),
      where('licenseCode', '==', storedCode)
    );
    const devicesSnap = await getDocs(devicesQuery);
    const deviceCount = devicesSnap.size;
    
    // Update last seen for current device
    const deviceId = getDeviceFingerprint();
    const deviceRef = doc(db, 'devices', deviceId);
    const deviceSnap = await getDoc(deviceRef);
    
    if (deviceSnap.exists()) {
      await updateDoc(deviceRef, {
        lastSeen: serverTimestamp()
      });
    }
    
    return {
      isActivated: true,
      isExpired: false,
      daysRemaining: -1, // Unlimited
      licenseCode: storedCode,
      deviceCount,
      maxDevices: license.maxDevices
    };
    
  } catch (error) {
    console.error('Firebase license check error:', error);
    // Fallback to local trial
    const trial = initLocalTrial(tier);
    return {
      isActivated: false,
      isExpired: trial.daysRemaining <= 0,
      daysRemaining: trial.daysRemaining
    };
  }
}

// Activate license
export async function activateLicense(
  code: string, 
  tier: 'MVP' | 'PRO'
): Promise<{ success: boolean; message: string }> {
  try {
    // Validate format
    if (!validateCodeFormat(code, tier)) {
      return {
        success: false,
        message: tier === 'MVP' 
          ? 'Neispravan format koda (očekuje se: SIMBION-XXXX-XXXX-XXXX)'
          : 'Neispravan format koda (očekuje se: SIMBION-PRO-XXXX-XXXX-XXXX)'
      };
    }
    
    // Check if license exists in Firebase
    const licenseRef = doc(db, 'licenses', code);
    const licenseSnap = await getDoc(licenseRef);
    
    if (!licenseSnap.exists()) {
      return {
        success: false,
        message: 'Licenca ne postoji. Kontaktirajte podršku.'
      };
    }
    
    const license = licenseSnap.data() as LicenseInfo;
    
    // Check if license is active
    if (!license.isActive) {
      return {
        success: false,
        message: 'Licenca je deaktivirana. Kontaktirajte podršku.'
      };
    }
    
    // Check tier match
    if (license.tier !== tier) {
      return {
        success: false,
        message: `Ova licenca je za ${license.tier}, a vi koristite ${tier} verziju.`
      };
    }
    
    // Check device limit
    const devicesQuery = query(
      collection(db, 'devices'),
      where('licenseCode', '==', code)
    );
    const devicesSnap = await getDocs(devicesQuery);
    const deviceCount = devicesSnap.size;
    
    const deviceId = getDeviceFingerprint();
    const deviceRef = doc(db, 'devices', deviceId);
    const deviceSnap = await getDoc(deviceRef);
    
    // Check if this device is already registered
    const isDeviceRegistered = deviceSnap.exists() && deviceSnap.data().licenseCode === code;
    
    if (!isDeviceRegistered && deviceCount >= license.maxDevices) {
      return {
        success: false,
        message: `Dostignut je limit uređaja (${license.maxDevices}). Deaktivirajte drugi uređaj prvo.`
      };
    }
    
    // Register device
    if (!isDeviceRegistered) {
      await setDoc(deviceRef, {
        id: deviceId,
        licenseCode: code,
        deviceName: getDeviceName(),
        deviceFingerprint: deviceId,
        lastSeen: serverTimestamp(),
        activatedAt: serverTimestamp()
      });
    } else {
      await updateDoc(deviceRef, {
        lastSeen: serverTimestamp()
      });
    }
    
    // Save license code locally
    const storageKey = `${tier.toLowerCase()}_license_code`;
    localStorage.setItem(storageKey, code);
    
    return {
      success: true,
      message: 'Licenca uspešno aktivirana!'
    };
    
  } catch (error) {
    console.error('License activation error:', error);
    return {
      success: false,
      message: 'Greška pri aktivaciji. Proverite internet konekciju.'
    };
  }
}

// Deactivate current device
export async function deactivateDevice(tier: 'MVP' | 'PRO'): Promise<{ success: boolean; message: string }> {
  try {
    const storageKey = `${tier.toLowerCase()}_license_code`;
    const code = localStorage.getItem(storageKey);
    
    if (!code) {
      return {
        success: false,
        message: 'Nema aktivne licence.'
      };
    }
    
    const deviceId = getDeviceFingerprint();
    const deviceRef = doc(db, 'devices', deviceId);
    const deviceSnap = await getDoc(deviceRef);
    
    if (deviceSnap.exists()) {
      await updateDoc(deviceRef, {
        licenseCode: '',
        lastSeen: serverTimestamp()
      });
    }
    
    localStorage.removeItem(storageKey);
    
    return {
      success: true,
      message: 'Uređaj deaktiviran.'
    };
    
  } catch (error) {
    console.error('Deactivation error:', error);
    return {
      success: false,
      message: 'Greška pri deaktivaciji.'
    };
  }
}

// Check if app can be used
export async function canUseApp(tier: 'MVP' | 'PRO'): Promise<boolean> {
  const status = await getLicenseStatus(tier);
  return status.isActivated || !status.isExpired;
}

// Get license message for display
export async function getLicenseMessage(tier: 'MVP' | 'PRO', language: 'sr' | 'en'): Promise<string> {
  const status = await getLicenseStatus(tier);
  
  if (status.isActivated) {
    const deviceInfo = status.deviceCount && status.maxDevices 
      ? ` (${status.deviceCount}/${status.maxDevices} uređaja)` 
      : '';
    return language === 'sr' 
      ? `✅ ${tier} licenca aktivirana${deviceInfo}`
      : `✅ ${tier} license activated${deviceInfo}`;
  }
  
  if (status.isExpired) {
    return language === 'sr'
      ? '❌ Trial period istekao'
      : '❌ Trial period expired';
  }
  
  return language === 'sr'
    ? `⏳ Trial: ${status.daysRemaining} dana preostalo`
    : `⏳ Trial: ${status.daysRemaining} days remaining`;
}
