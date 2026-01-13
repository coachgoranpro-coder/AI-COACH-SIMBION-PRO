// License Service - Trial and Activation System

export interface LicenseInfo {
  trialStartDate: string | null; // null dok čeka odobrenje
  trialEndDate: string | null;
  isActivated: boolean;
  activationCode?: string;
  activationDate?: string;
  isExpired: boolean;
  daysRemaining: number;
  productTier: 'PRO';
  approvedByAdmin: boolean; // Da li je admin odobrio
  approvalDate?: string; // Datum odobrenja
}

const TRIAL_DAYS = 30;
const STORAGE_KEY = 'aicoach_pro_license';

// Generate unique machine ID (simple hash based on browser fingerprint)
// Currently not used, but ready for future server-side validation
export function getMachineId(): string {
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
  
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

// Validate activation code format: SIMBION-PRO-XXXX-XXXX-XXXX
function validateActivationCodeFormat(code: string): boolean {
  const pattern = /^SIMBION-PRO-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
  return pattern.test(code);
}

// Generate activation code (for admin use)
export function generateActivationCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Izbacivamo I, O, 0, 1 zbog konfuzije
  const segments = [];
  
  for (let i = 0; i < 3; i++) {
    let segment = '';
    for (let j = 0; j < 4; j++) {
      segment += chars[Math.floor(Math.random() * chars.length)];
    }
    segments.push(segment);
  }
  
  return `SIMBION-PRO-${segments.join('-')}`;
}

// Initialize license on first run - Čeka admin odobrenje
function initializeLicense(): LicenseInfo {
  const license: LicenseInfo = {
    trialStartDate: null, // Trial ne počinje dok admin ne odobri
    trialEndDate: null,
    isActivated: false,
    isExpired: false,
    daysRemaining: 0,
    productTier: 'PRO',
    approvedByAdmin: false
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(license));
  return license;
}

// Pokreni trial period nakon admin odobrenja
export function startTrialAfterApproval(): LicenseInfo {
  const stored = localStorage.getItem(STORAGE_KEY);
  let license: LicenseInfo;
  
  if (!stored) {
    license = initializeLicense();
  } else {
    license = JSON.parse(stored);
  }
  
  // Ako je već odobren ili aktiviran, ne radi ništa
  if (license.approvedByAdmin || license.isActivated) {
    return license;
  }
  
  const now = new Date();
  const trialEnd = new Date(now.getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000);
  
  license.approvedByAdmin = true;
  license.approvalDate = now.toISOString();
  license.trialStartDate = now.toISOString();
  license.trialEndDate = trialEnd.toISOString();
  license.daysRemaining = TRIAL_DAYS;
  license.isExpired = false;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(license));
  return license;
}

// Get current license status
export function getLicenseStatus(): LicenseInfo {
  const stored = localStorage.getItem(STORAGE_KEY);
  
  if (!stored) {
    return initializeLicense();
  }
  
  const license: LicenseInfo = JSON.parse(stored);
  const now = new Date();
  
  // Ako nije odobren od admina, čeka odobrenje
  if (!license.approvedByAdmin && !license.isActivated) {
    return {
      ...license,
      isExpired: false,
      daysRemaining: 0
    };
  }
  
  if (license.isActivated) {
    // Aktivirana licenca - nema isteka
    return {
      ...license,
      isExpired: false,
      daysRemaining: -1 // -1 znači neograničeno
    };
  }
  
  // Proveri trial period - ako postoji trialEndDate
  if (!license.trialEndDate) {
    // Trial još nije započeo (čeka odobrenje)
    return {
      ...license,
      isExpired: false,
      daysRemaining: 0
    };
  }
  
  const trialEnd = new Date(license.trialEndDate);
  const daysRemaining = Math.ceil((trialEnd.getTime() - now.getTime()) / (24 * 60 * 60 * 1000));
  
  return {
    ...license,
    isExpired: daysRemaining <= 0,
    daysRemaining: Math.max(0, daysRemaining)
  };
}

// Activate license with code
export function activateLicense(code: string): { success: boolean; message: string } {
  if (!validateActivationCodeFormat(code)) {
    return {
      success: false,
      message: 'sr:Neispravan format koda (PRO format: SIMBION-PRO-XXXX-XXXX-XXXX)|en:Invalid code format (PRO format: SIMBION-PRO-XXXX-XXXX-XXXX)'
    };
  }
  
  const license = getLicenseStatus();
  const now = new Date();
  
  const updatedLicense: LicenseInfo = {
    ...license,
    isActivated: true,
    activationCode: code,
    activationDate: now.toISOString(),
    isExpired: false,
    daysRemaining: -1,
    productTier: 'PRO'
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLicense));
  
  return {
    success: true,
    message: 'sr:PRO licenca uspešno aktivirana!|en:PRO license successfully activated!'
  };
}

// Check if app can be used
export function canUseApp(): boolean {
  const license = getLicenseStatus();
  
  // Ne može koristiti app dok admin ne odobri
  if (!license.approvedByAdmin && !license.isActivated) {
    return false;
  }
  
  return license.isActivated || !license.isExpired;
}

// Get display message for license status
export function getLicenseMessage(language: 'sr' | 'en'): string {
  const license = getLicenseStatus();
  
  // Čeka admin odobrenje
  if (!license.approvedByAdmin && !license.isActivated) {
    return language === 'sr'
      ? '⏳ Čeka odobrenje admina...'
      : '⏳ Waiting for admin approval...';
  }
  
  if (license.isActivated) {
    return language === 'sr' 
      ? '✅ PRO licenca aktivirana'
      : '✅ PRO license activated';
  }
  
  if (license.isExpired) {
    return language === 'sr'
      ? '❌ Trial period istekao. Unesite PRO aktivacioni kod.'
      : '❌ Trial period expired. Enter PRO activation code.';
  }
  
  return language === 'sr'
    ? `⏳ PRO Trial: ${license.daysRemaining} dana preostalo`
    : `⏳ PRO Trial: ${license.daysRemaining} days remaining`;
}

// Check for upgrade to Platform (future integration)
export function canUpgrade(): boolean {
  const license = getLicenseStatus();
  return license.isActivated; // Samo aktivirani PRO korisnici mogu upgrade
}

export function getUpgradeUrl(): string {
  return 'https://coachgoran.com/upgrade-to-platform'; // Placeholder
}
