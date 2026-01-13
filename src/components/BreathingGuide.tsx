import { useState } from 'react';
import { Wind, X, Info } from 'lucide-react';
import { BREATHING_RULES } from '../data/coachGoranMethodology';

interface BreathingGuideProps {
  language?: 'sr' | 'en';
}

export default function BreathingGuide({ language = 'sr' }: BreathingGuideProps) {
  const [isOpen, setIsOpen] = useState(false);

  const translations = {
    sr: {
      title: 'Vodič za pravilno disanje',
      subtitle: 'Sprečavanje Valsalva fenomena',
      whenToShow: 'Prikaži ovaj vodič kod:',
      highLoadExercises: 'Vežbi sa visokim opterećenjem (>80% 1RM)',
      plyometrics: 'Pliometrijskih vežbi',
      maxSprints: 'Maksimalnih sprintova',
      coreExercises: 'Core vežbi (plankovi, mountain climber)',
      close: 'Zatvori'
    },
    en: {
      title: 'Proper Breathing Guide',
      subtitle: 'Valsalva Phenomenon Prevention',
      whenToShow: 'Show this guide for:',
      highLoadExercises: 'High-load exercises (>80% 1RM)',
      plyometrics: 'Plyometric exercises',
      maxSprints: 'Maximal sprints',
      coreExercises: 'Core exercises (planks, mountain climber)',
      close: 'Close'
    }
  };

  const t = translations[language];
  const rules = BREATHING_RULES[language];

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 rounded-lg text-blue-400 text-sm transition-all"
        title={t.title}
      >
        <Wind className="w-4 h-4" />
        <span className="hidden sm:inline">🫁 {t.title}</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                  <Wind className="w-7 h-7 text-blue-400" />
                  {t.title}
                </h3>
                <p className="text-slate-400">{t.subtitle}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white text-2xl font-bold"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {/* Warning Box */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">{t.whenToShow}</h4>
                    <ul className="space-y-1 text-sm text-red-300">
                      <li>• {t.highLoadExercises}</li>
                      <li>• {t.plyometrics}</li>
                      <li>• {t.maxSprints}</li>
                      <li>• {t.coreExercises}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Breathing Rules */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <div className="space-y-4">
                  {rules.map((rule, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-slate-900/50 border border-slate-600 rounded-lg hover:border-blue-500/50 transition-all"
                    >
                      <span className="text-2xl flex-shrink-0">
                        {rule.includes('🫁') ? '🫁' :
                         rule.includes('↑') ? '↑' :
                         rule.includes('↓') ? '↓' :
                         rule.includes('🚫') ? '🚫' :
                         rule.includes('🧘') ? '🧘' :
                         rule.includes('⚡') ? '⚡' :
                         rule.includes('🏋️') ? '🏋️' :
                         rule.includes('📚') ? '📚' : '•'}
                      </span>
                      <p className="text-slate-200 leading-relaxed">
                        {rule.replace(/^[🫁↑↓🚫🧘⚡🏋️📚]\s*/, '')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Valsalva Warning */}
              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-lg p-6">
                <h4 className="text-red-400 font-bold text-lg mb-3">
                  ⚠️ {language === 'sr' ? 'VALSALVA FENOMEN - OPASNOST' : 'VALSALVA PHENOMENON - DANGER'}
                </h4>
                <p className="text-slate-300 mb-3">
                  {language === 'sr' 
                    ? 'Zadržavanje daha pod maksimalnim naporom može izazvati ekstreman porast krvnog pritiska i dovesti do moždanog udara.'
                    : 'Holding breath under maximal effort can cause extreme blood pressure spike and lead to stroke.'}
                </p>
                <p className="text-slate-300 font-semibold">
                  {language === 'sr'
                    ? '👉 UVEK edukuj igrača o pravilnom disanju PRE nego što započne vežbu!'
                    : '👉 ALWAYS educate player about proper breathing BEFORE starting the exercise!'}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-slate-900 border-t border-slate-700 p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Hook za identifikaciju vežbi koje zahtevaju breathing guide
 */
export function requiresBreathingGuide(exerciseId: string): boolean {
  const highLoadPatterns = [
    'squat', 'deadlift', 'bench', 'overhead', 'snatch', 'clean',
    'plyometric', 'box-jump', 'depth-jump', 'broad-jump',
    'sprint', 'max-sprint', 'flying-sprint',
    'plank', 'mountain-climber', 'burpee',
    'cmj', 'reactive', 'explosive'
  ];

  const lowerCaseId = exerciseId.toLowerCase();
  return highLoadPatterns.some(pattern => lowerCaseId.includes(pattern));
}
