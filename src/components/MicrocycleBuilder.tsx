import { useState } from 'react';
import { Calendar, TrendingUp, Activity, Info } from 'lucide-react';
import { MICROCYCLE_TYPES, type MicrocycleType } from '../data/coachGoranMethodology';

interface MicrocycleBuilderProps {
  language?: 'sr' | 'en';
}

export default function MicrocycleBuilder({ language = 'sr' }: MicrocycleBuilderProps) {
  const [selectedMicrocycle, setSelectedMicrocycle] = useState<MicrocycleType | null>(null);
  const [adjustments, setAdjustments] = useState({
    volumeModifier: 100, // percentage
    intensityModifier: 100 // percentage
  });

  const translations = {
    sr: {
      title: 'Microcycle Builder',
      subtitle: 'Planiraj mikrocikluse po fazama sezone',
      selectMicrocycle: 'Izaberi tip mikrociklusa',
      code: 'Kod',
      rpe: 'RPE Rang',
      focus: 'Fokus',
      duration: 'Trajanje',
      notes: 'Napomena',
      adjustments: 'Podešavanja',
      volumeAdjustment: 'Obim treninga',
      intensityAdjustment: 'Intenzitet',
      applyAdjustments: 'Primeni podešavanja',
      recommendedUse: 'Preporučena upotreba',
      days: 'dana'
    },
    en: {
      title: 'Microcycle Builder',
      subtitle: 'Plan microcycles by season phases',
      selectMicrocycle: 'Select microcycle type',
      code: 'Code',
      rpe: 'RPE Range',
      focus: 'Focus',
      duration: 'Duration',
      notes: 'Notes',
      adjustments: 'Adjustments',
      volumeAdjustment: 'Training Volume',
      intensityAdjustment: 'Intensity',
      applyAdjustments: 'Apply Adjustments',
      recommendedUse: 'Recommended Use',
      days: 'days'
    }
  };

  const t = translations[language];

  const getCodeColor = (code: string) => {
    const colors: { [key: string]: string } = {
      'A': 'bg-green-600/30 border-green-500 text-green-400',
      'B': 'bg-blue-600/30 border-blue-500 text-blue-400',
      'C': 'bg-red-600/30 border-red-500 text-red-400',
      'D': 'bg-purple-600/30 border-purple-500 text-purple-400',
      'E': 'bg-yellow-600/30 border-yellow-500 text-yellow-400',
      'F': 'bg-orange-600/30 border-orange-500 text-orange-400',
      'G': 'bg-pink-600/30 border-pink-500 text-pink-400'
    };
    return colors[code] || 'bg-slate-600/30 border-slate-500 text-slate-400';
  };

  const getAdjustedValues = (microcycle: MicrocycleType) => {
    if (!microcycle) return null;

    const baseRPE = microcycle.rpe.split('-').map(n => parseInt(n));
    const intensityMod = adjustments.intensityModifier / 100;

    return {
      adjustedRPEMin: Math.max(1, Math.round(baseRPE[0] * intensityMod)),
      adjustedRPEMax: Math.min(10, Math.round(baseRPE[1] * intensityMod)),
      volumeChange: adjustments.volumeModifier - 100,
      intensityChange: adjustments.intensityModifier - 100
    };
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <Calendar className="w-8 h-8 text-indigo-400" />
          {t.title}
        </h2>
        <p className="text-slate-300">{t.subtitle}</p>
      </div>

      {/* Microcycle Cards Grid */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">{t.selectMicrocycle}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {MICROCYCLE_TYPES.map((microcycle) => (
            <button
              key={microcycle.code}
              onClick={() => setSelectedMicrocycle(microcycle)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                selectedMicrocycle?.code === microcycle.code
                  ? getCodeColor(microcycle.code) + ' shadow-lg'
                  : 'bg-slate-900/50 border-slate-600 hover:border-slate-500'
              }`}
            >
              {/* Code Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-3xl font-bold ${
                  selectedMicrocycle?.code === microcycle.code
                    ? ''
                    : 'text-slate-400'
                }`}>
                  {microcycle.code}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  selectedMicrocycle?.code === microcycle.code
                    ? 'bg-black/20'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  RPE {microcycle.rpe}
                </span>
              </div>

              {/* Name */}
              <h4 className={`font-semibold mb-2 ${
                selectedMicrocycle?.code === microcycle.code
                  ? 'text-white'
                  : 'text-slate-300'
              }`}>
                {microcycle.name[language]}
              </h4>

              {/* Duration */}
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <Calendar className="w-3 h-3" />
                <span>{microcycle.duration} {t.days}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Microcycle Details */}
      {selectedMicrocycle && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Details Panel */}
          <div className={`border-2 rounded-xl p-6 ${getCodeColor(selectedMicrocycle.code)}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl font-bold">
                {selectedMicrocycle.code}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedMicrocycle.name[language]}
                </h3>
                <p className="text-sm opacity-80">RPE {selectedMicrocycle.rpe}</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Focus */}
              <div>
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  {t.focus}
                </h4>
                <p className="text-sm opacity-90">{selectedMicrocycle.focus[language]}</p>
              </div>

              {/* Notes */}
              <div>
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  {t.notes}
                </h4>
                <p className="text-sm opacity-90">{selectedMicrocycle.notes[language]}</p>
              </div>

              {/* Duration */}
              <div>
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {t.duration}
                </h4>
                <p className="text-sm opacity-90">{selectedMicrocycle.duration} {t.days}</p>
              </div>
            </div>
          </div>

          {/* Adjustments Panel */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Activity className="w-6 h-6 text-blue-400" />
              {t.adjustments}
            </h3>

            <div className="space-y-6">
              {/* Volume Adjustment */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-300">
                    {t.volumeAdjustment}
                  </label>
                  <span className={`text-lg font-bold ${
                    adjustments.volumeModifier > 100 ? 'text-green-400' :
                    adjustments.volumeModifier < 100 ? 'text-red-400' :
                    'text-slate-400'
                  }`}>
                    {adjustments.volumeModifier > 100 ? '+' : ''}
                    {adjustments.volumeModifier - 100}%
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  value={adjustments.volumeModifier}
                  onChange={(e) => setAdjustments(prev => ({
                    ...prev,
                    volumeModifier: parseInt(e.target.value)
                  }))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>-60%</span>
                  <span>0%</span>
                  <span>+60%</span>
                </div>
              </div>

              {/* Intensity Adjustment */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-300">
                    {t.intensityAdjustment}
                  </label>
                  <span className={`text-lg font-bold ${
                    adjustments.intensityModifier > 100 ? 'text-green-400' :
                    adjustments.intensityModifier < 100 ? 'text-red-400' :
                    'text-slate-400'
                  }`}>
                    {adjustments.intensityModifier > 100 ? '+' : ''}
                    {adjustments.intensityModifier - 100}%
                  </span>
                </div>
                <input
                  type="range"
                  min="70"
                  max="130"
                  value={adjustments.intensityModifier}
                  onChange={(e) => setAdjustments(prev => ({
                    ...prev,
                    intensityModifier: parseInt(e.target.value)
                  }))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>-30%</span>
                  <span>0%</span>
                  <span>+30%</span>
                </div>
              </div>

              {/* Adjusted Values Display */}
              {(() => {
                const adjusted = getAdjustedValues(selectedMicrocycle);
                if (!adjusted) return null;

                return (
                  <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 mt-6">
                    <h4 className="text-sm font-semibold text-slate-300 mb-3">
                      {language === 'sr' ? 'Prilagođene Vrednosti' : 'Adjusted Values'}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Original RPE:</span>
                        <span className="text-white font-semibold">{selectedMicrocycle.rpe}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Adjusted RPE:</span>
                        <span className="text-green-400 font-semibold">
                          {adjusted.adjustedRPEMin}-{adjusted.adjustedRPEMax}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.volumeAdjustment}:</span>
                        <span className={`font-semibold ${
                          adjusted.volumeChange > 0 ? 'text-green-400' :
                          adjusted.volumeChange < 0 ? 'text-red-400' :
                          'text-slate-400'
                        }`}>
                          {adjusted.volumeChange > 0 ? '+' : ''}{adjusted.volumeChange}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.intensityAdjustment}:</span>
                        <span className={`font-semibold ${
                          adjusted.intensityChange > 0 ? 'text-green-400' :
                          adjusted.intensityChange < 0 ? 'text-red-400' :
                          'text-slate-400'
                        }`}>
                          {adjusted.intensityChange > 0 ? '+' : ''}{adjusted.intensityChange}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Recommended Sequence Info */}
      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Info className="w-6 h-6 text-blue-400" />
          {t.recommendedUse}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
          <div>
            <p className="font-semibold mb-2">
              {language === 'sr' ? 'Off-Season sekvenca:' : 'Off-Season sequence:'}
            </p>
            <p className="text-slate-400">A → B → B → C → E → D → B → C → E</p>
          </div>
          <div>
            <p className="font-semibold mb-2">
              {language === 'sr' ? 'In-Season sekvenca:' : 'In-Season sequence:'}
            </p>
            <p className="text-slate-400">F → F → E → F → F (G za playoffs)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
