// 🔑 License Activation Screen with Pricing Display

import React, { useState } from 'react';
import { Key, CheckCircle, XCircle, AlertCircle, Loader2 } from 'lucide-react';
import { 
  activateLicenseCode
} from '../services/activationService';
import PricingDisplay from './PricingDisplay';

interface ActivationScreenProps {
  userId: string;
  email: string;
  language: 'sr' | 'en';
  onActivationSuccess?: () => void;
}

const translations = {
  sr: {
    title: 'Aktivacija Licence',
    subtitle: 'Unesite licencni kod ili pregled dostupnih planova',
    enterCode: 'Unesite Licencni Kod',
    codePlaceholder: 'SIMBION-1M-XXXXXXXX-XXXXXXXX',
    validate: 'Proveri Kod',
    activate: 'Aktiviraj',
    cancel: 'Otkaži',
    validCode: 'Validan kod!',
    invalidCode: 'Neispravan ili već korišćen kod',
    activating: 'Aktivacija u toku...',
    activationSuccess: 'Licenca uspešno aktivirana!',
    activationError: 'Greška pri aktivaciji',
    currentSubscription: 'Trenutna Pretplata',
    plan: 'Plan',
    validUntil: 'Važi do',
    active: 'Aktivna',
    expired: 'Istekla',
    contactSupport: 'Kontaktirajte podršku za kupovinu licencnog koda',
    howToBuy: 'Kako kupiti?',
    buySteps: [
      '1. Kontaktirajte podršku na email: support@simbion.ai',
      '2. Izaberite plan koji vam odgovara',
      '3. Izvršite plaćanje',
      '4. Dobićete licencni kod na email',
      '5. Unesite kod ovde za aktivaciju'
    ],
    viewPlans: 'Pogledaj Planove',
    hideePlans: 'Sakrij Planove',
    codeInfo: 'Licencni kodovi se kupuju odvojeno. Nakon plaćanja, dobićete kod koji aktivirate ovde.',
    tabActivate: 'Aktiviraj Kod',
    tabPlans: 'Dostupni Planovi'
  },
  en: {
    title: 'License Activation',
    subtitle: 'Enter license code or view available plans',
    enterCode: 'Enter License Code',
    codePlaceholder: 'SIMBION-1M-XXXXXXXX-XXXXXXXX',
    validate: 'Validate Code',
    activate: 'Activate',
    cancel: 'Cancel',
    validCode: 'Valid code!',
    invalidCode: 'Invalid or already used code',
    activating: 'Activating...',
    activationSuccess: 'License successfully activated!',
    activationError: 'Activation error',
    currentSubscription: 'Current Subscription',
    plan: 'Plan',
    validUntil: 'Valid Until',
    active: 'Active',
    expired: 'Expired',
    contactSupport: 'Contact support to purchase license code',
    howToBuy: 'How to Buy?',
    buySteps: [
      '1. Contact support at email: support@simbion.ai',
      '2. Choose plan that fits your needs',
      '3. Complete payment',
      '4. You will receive license code via email',
      '5. Enter code here for activation'
    ],
    viewPlans: 'View Plans',
    hidePlans: 'Hide Plans',
    codeInfo: 'License codes are purchased separately. After payment, you will receive a code to activate here.',
    tabActivate: 'Activate Code',
    tabPlans: 'Available Plans'
  }
};

export const ActivationScreen: React.FC<ActivationScreenProps> = ({
  userId,
  email,
  language,
  onActivationSuccess
}) => {
  const t = translations[language];
  const [licenseCode, setLicenseCode] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [isActivating, setIsActivating] = useState(false);
  const [validationResult, setValidationResult] = useState<{ valid: boolean; type?: string } | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [activeTab, setActiveTab] = useState<'activate' | 'plans'>('activate');

  const handleValidate = () => {
    setIsValidating(true);
    setValidationResult(null);
    setMessage(null);

    // Simple validation - check format
    setTimeout(() => {
      const isValidFormat = /^SIMBION-(1M|3M|6M)-[A-Z0-9]+$/.test(licenseCode.trim().toUpperCase());
      
      if (isValidFormat) {
        setValidationResult({ valid: true });
        setMessage({ type: 'success', text: t.validCode });
      } else {
        setValidationResult({ valid: false });
        setMessage({ type: 'error', text: t.invalidCode });
      }
      
      setIsValidating(false);
    }, 800);
  };

  const handleActivate = async () => {
    setIsActivating(true);
    setMessage(null);

    const success = await activateLicenseCode(userId, email, licenseCode.trim());
      
      if (success.success) {
        setMessage({ type: 'success', text: success.message });
        setLicenseCode('');
        setValidationResult(null);
        
        // Call success callback after 2 seconds
        setTimeout(() => {
          if (onActivationSuccess) {
            onActivationSuccess();
          }
        }, 2000);
      } else {
        setMessage({ type: 'error', text: success.message });
      }
      
      setIsActivating(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
          <Key className="w-8 h-8 text-orange-400" />
          {t.title}
        </h1>
        <p className="text-gray-400">{t.subtitle}</p>
      </div>

      {/* Current Subscription Info - Commented out until subscription check is implemented */}

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-slate-700">
        <button
          onClick={() => setActiveTab('activate')}
          className={`px-6 py-3 font-semibold transition-all ${
            activeTab === 'activate'
              ? 'text-orange-400 border-b-2 border-orange-400'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {t.tabActivate}
        </button>
        <button
          onClick={() => setActiveTab('plans')}
          className={`px-6 py-3 font-semibold transition-all ${
            activeTab === 'plans'
              ? 'text-orange-400 border-b-2 border-orange-400'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {t.tabPlans}
        </button>
      </div>

      {/* Activate Tab */}
      {activeTab === 'activate' && (
        <div className="space-y-6">
          {/* Activation Form */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              {t.enterCode}
            </label>
            
            <div className="flex gap-3">
              <input
                type="text"
                value={licenseCode}
                onChange={(e) => {
                  setLicenseCode(e.target.value.toUpperCase());
                  setValidationResult(null);
                  setMessage(null);
                }}
                placeholder={t.codePlaceholder}
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white font-mono text-sm"
                disabled={isValidating || isActivating}
              />
              
              {!validationResult && (
                <button
                  onClick={handleValidate}
                  disabled={!licenseCode.trim() || isValidating}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all flex items-center gap-2"
                >
                  {isValidating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {language === 'sr' ? 'Provera...' : 'Checking...'}
                    </>
                  ) : (
                    t.validate
                  )}
                </button>
              )}

              {validationResult?.valid && (
                <button
                  onClick={handleActivate}
                  disabled={isActivating}
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all flex items-center gap-2"
                >
                  {isActivating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t.activating}
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      {t.activate}
                    </>
                  )}
                </button>
              )}

              {validationResult && !validationResult.valid && (
                <button
                  onClick={() => {
                    setLicenseCode('');
                    setValidationResult(null);
                    setMessage(null);
                  }}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold"
                >
                  {t.cancel}
                </button>
              )}
            </div>

            {/* Validation/Activation Messages */}
            {message && (
              <div className={`mt-4 p-4 rounded-lg flex items-center gap-3 ${
                message.type === 'success'
                  ? 'bg-green-500/10 border border-green-500/50'
                  : 'bg-red-500/10 border border-red-500/50'
              }`}>
                {message.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <span className={message.type === 'success' ? 'text-green-300' : 'text-red-300'}>
                  {message.text}
                </span>
              </div>
            )}

            {/* Info Message */}
            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-blue-200 text-sm">{t.codeInfo}</p>
            </div>
          </div>

          {/* How to Buy Section */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">{t.howToBuy}</h3>
            <div className="space-y-2">
              {t.buySteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Plans Tab */}
      {activeTab === 'plans' && (
        <PricingDisplay
          language={language}

          showTrialInfo={true}
        />
      )}
    </div>
  );
};

export default ActivationScreen;
