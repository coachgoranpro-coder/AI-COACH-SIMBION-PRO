// 💰 Subscription Pricing Display Component

import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '../services/activationService';

interface PricingDisplayProps {
  language: 'sr' | 'en';
  currentPlan?: 'trial' | '1M' | '3M' | '6M';
  onSelectPlan?: (plan: '1M' | '3M' | '6M') => void;
  showTrialInfo?: boolean;
}

const translations = {
  sr: {
    title: 'Pretplatni Planovi',
    subtitle: 'Izaberite plan koji odgovara vašim potrebama',
    currentPlan: 'Trenutni Plan',
    players: 'igrača',
    days: 'dana',
    month: 'mesec',
    months: 'meseca',
    free: 'BESPLATNO',
    selectPlan: 'Odaberi Plan',
    currentActivePlan: 'Aktivan Plan',
    features: {
      aiCoach: 'AI Trener SIMBION',
      knowledgeBase: 'Baza znanja',
      diagnostics: 'Dijagnostika',
      trainingGenerator: 'Generator treninga',
      correlationMatrix: 'Matrica korelacija',
      analytics: 'Analitika',
      support: 'Podrška',
      updates: 'Ažuriranja'
    },
    playerLimit: 'Do {count} igrača',
    duration: '{days} dana pristupa',
    mostPopular: 'NAJPOPULARNIJI',
    bestValue: 'NAJBOLJA VREDNOST',
    trialInfo: 'Trial period omogućava testiranje svih funkcija 30 dana sa do 15 igrača.'
  },
  en: {
    title: 'Subscription Plans',
    subtitle: 'Choose the plan that fits your needs',
    currentPlan: 'Current Plan',
    players: 'players',
    days: 'days',
    month: 'month',
    months: 'months',
    free: 'FREE',
    selectPlan: 'Select Plan',
    currentActivePlan: 'Active Plan',
    features: {
      aiCoach: 'AI Coach SIMBION',
      knowledgeBase: 'Knowledge Base',
      diagnostics: 'Diagnostics',
      trainingGenerator: 'Training Generator',
      correlationMatrix: 'Correlation Matrix',
      analytics: 'Analytics',
      support: 'Support',
      updates: 'Updates'
    },
    playerLimit: 'Up to {count} players',
    duration: '{days} days of access',
    mostPopular: 'MOST POPULAR',
    bestValue: 'BEST VALUE',
    trialInfo: 'Trial period allows testing all features for 30 days with up to 15 players.'
  }
};

export const PricingDisplay: React.FC<PricingDisplayProps> = ({
  language,
  currentPlan = 'trial',
  onSelectPlan,
  showTrialInfo = true
}) => {
  const t = translations[language];

  const plans = [
    {
      id: 'trial' as const,
      ...SUBSCRIPTION_PLANS.trial,
      badge: null,
      features: [
        { key: 'aiCoach', included: true },
        { key: 'knowledgeBase', included: true },
        { key: 'diagnostics', included: true },
        { key: 'trainingGenerator', included: true },
        { key: 'correlationMatrix', included: true },
        { key: 'analytics', included: false },
        { key: 'support', included: false },
        { key: 'updates', included: true }
      ]
    },
    {
      id: '1M' as const,
      ...SUBSCRIPTION_PLANS['1M'],
      badge: null,
      features: [
        { key: 'aiCoach', included: true },
        { key: 'knowledgeBase', included: true },
        { key: 'diagnostics', included: true },
        { key: 'trainingGenerator', included: true },
        { key: 'correlationMatrix', included: true },
        { key: 'analytics', included: true },
        { key: 'support', included: true },
        { key: 'updates', included: true }
      ]
    },
    {
      id: '3M' as const,
      ...SUBSCRIPTION_PLANS['3M'],
      badge: t.mostPopular,
      features: [
        { key: 'aiCoach', included: true },
        { key: 'knowledgeBase', included: true },
        { key: 'diagnostics', included: true },
        { key: 'trainingGenerator', included: true },
        { key: 'correlationMatrix', included: true },
        { key: 'analytics', included: true },
        { key: 'support', included: true },
        { key: 'updates', included: true }
      ]
    },
    {
      id: '6M' as const,
      ...SUBSCRIPTION_PLANS['6M'],
      badge: t.bestValue,
      features: [
        { key: 'aiCoach', included: true },
        { key: 'knowledgeBase', included: true },
        { key: 'diagnostics', included: true },
        { key: 'trainingGenerator', included: true },
        { key: 'correlationMatrix', included: true },
        { key: 'analytics', included: true },
        { key: 'support', included: true },
        { key: 'updates', included: true }
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">{t.title}</h2>
        <p className="text-gray-400 text-lg">{t.subtitle}</p>
        {showTrialInfo && (
          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg inline-block">
            <p className="text-blue-300 text-sm">{t.trialInfo}</p>
          </div>
        )}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => {
          const isCurrentPlan = plan.id === currentPlan;
          const isPaid = plan.id !== 'trial';
          const isMostPopular = plan.id === '3M';
          const isBestValue = plan.id === '6M';

          return (
            <div
              key={plan.id}
              className={`relative rounded-xl p-6 transition-all ${
                isCurrentPlan
                  ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500'
                  : isMostPopular
                  ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50'
                  : isBestValue
                  ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/50'
                  : 'bg-slate-800/50 border border-slate-700'
              } hover:scale-105 transform`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    isMostPopular ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Current Plan Badge */}
              {isCurrentPlan && (
                <div className="absolute -top-3 right-4">
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-bold">
                    {t.currentActivePlan}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                
                {/* Price */}
                <div className="mb-3">
                  {plan.price === 0 ? (
                    <span className="text-3xl font-bold text-green-400">{t.free}</span>
                  ) : (
                    <div>
                      <span className="text-4xl font-bold text-white">{plan.price}€</span>
                      <span className="text-gray-400 text-sm ml-1">
                        / {plan.duration === 30 ? t.month : `${plan.duration / 30} ${t.months}`}
                      </span>
                    </div>
                  )}
                </div>

                {/* Player Limit */}
                <div className="text-sm text-gray-300">
                  <span className="font-semibold text-orange-400">{plan.players}</span> {t.players}
                </div>
                
                {/* Duration */}
                <div className="text-xs text-gray-400 mt-1">
                  {t.duration.replace('{days}', plan.duration.toString())}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature.key} className="flex items-center gap-2">
                    {feature.included ? (
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-200' : 'text-gray-500'}`}>
                      {t.features[feature.key as keyof typeof t.features]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              {isPaid && onSelectPlan && (
                <button
                  onClick={() => onSelectPlan(plan.id as '1M' | '3M' | '6M')}
                  disabled={isCurrentPlan}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    isCurrentPlan
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : isMostPopular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : isBestValue
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}
                >
                  {isCurrentPlan ? t.currentActivePlan : t.selectPlan}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingDisplay;
