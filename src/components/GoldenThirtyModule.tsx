import { useState } from 'react';
import { Clock, CheckCircle, Printer, AlertCircle } from 'lucide-react';
import { GOLDEN_THIRTY_PROTOCOL } from '../data/coachGoranMethodology';

interface GoldenThirtyModuleProps {
  language?: 'sr' | 'en';
}

export default function GoldenThirtyModule({ language = 'sr' }: GoldenThirtyModuleProps) {
  const protocol = GOLDEN_THIRTY_PROTOCOL[language];
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (phaseIdx: number, activityIdx: number) => {
    const key = `${phaseIdx}-${activityIdx}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const translations = {
    sr: {
      instructions: 'Napomena',
      printChecklist: 'Odštampaj checkliste',
      resetChecks: 'Resetuj oznake'
    },
    en: {
      instructions: 'Instructions',
      printChecklist: 'Print Checklist',
      resetChecks: 'Reset Checks'
    }
  };

  const t = translations[language];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-xl p-6 print:border-black print:bg-white">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 print:text-black">
              ⏱️ {protocol.title}
            </h2>
            <p className="text-slate-300 text-lg print:text-gray-700">{protocol.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={() => setCheckedItems({})}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-all"
            >
              {t.resetChecks}
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center gap-2 transition-all"
            >
              <Printer className="w-4 h-4" />
              {t.printChecklist}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-yellow-400 print:text-yellow-700">
          <Clock className="w-5 h-5" />
          <span className="font-semibold">{protocol.duration} {language === 'sr' ? 'minuta' : 'minutes'}</span>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 print:border-red-500 print:bg-red-50">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1 print:text-red-600" />
          <div>
            <h3 className="text-red-400 font-bold text-lg mb-2 print:text-red-700">
              {protocol.notes[0]}
            </h3>
            <p className="text-slate-300 print:text-gray-700">
              {protocol.notes[1]}
            </p>
          </div>
        </div>
      </div>

      {/* Phases Checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
        {protocol.phases.map((phase, phaseIdx) => (
          <div
            key={phaseIdx}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 print:border-gray-300 print:bg-white print:break-inside-avoid"
          >
            {/* Phase Header */}
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-700 print:border-gray-300">
              <h3 className="text-xl font-bold text-white print:text-black">
                {phaseIdx + 1}. {phase.name}
              </h3>
              <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/40 text-blue-400 rounded-lg text-sm font-semibold print:bg-blue-100 print:border-blue-300 print:text-blue-700">
                {phase.time}
              </span>
            </div>

            {/* Activities Checklist */}
            <div className="space-y-3">
              {phase.activities.map((activity, activityIdx) => {
                const key = `${phaseIdx}-${activityIdx}`;
                const isChecked = checkedItems[key] || false;

                return (
                  <label
                    key={activityIdx}
                    className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-600 rounded-lg hover:border-blue-500/50 transition-all cursor-pointer print:border-gray-300 print:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleCheck(phaseIdx, activityIdx)}
                      className="mt-1 w-5 h-5 text-blue-600 bg-slate-900 border-slate-600 rounded focus:ring-blue-500 cursor-pointer print:border-gray-400"
                    />
                    <span className={`text-slate-300 leading-relaxed print:text-gray-800 ${isChecked ? 'line-through opacity-50' : ''}`}>
                      {activity}
                    </span>
                    {isChecked && (
                      <CheckCircle className="w-5 h-5 text-green-400 ml-auto flex-shrink-0 print:text-green-600" />
                    )}
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Notes */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 print:border-blue-500 print:bg-blue-50 print:break-inside-avoid">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 print:text-black">
          <AlertCircle className="w-6 h-6 text-blue-400 print:text-blue-600" />
          {t.instructions}
        </h3>
        <div className="space-y-2">
          {protocol.notes.slice(1).map((note, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-blue-400 flex-shrink-0 print:text-blue-600">•</span>
              <p className="text-slate-300 print:text-gray-700">{note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Print Footer */}
      <div className="hidden print:block text-center text-sm text-gray-500 mt-8 pt-4 border-t border-gray-300">
        <p>AI Coach SIMBION Pro - Golden Thirty Protocol</p>
        <p className="mt-1">© 2026 - Coach Goran Methodology</p>
      </div>
    </div>
  );
}
