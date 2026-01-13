import { useState, useMemo } from 'react';
import { Info } from 'lucide-react';
import { correlationMatrixData } from '../data/correlationMatrixData';
import { fullTranslations } from '../i18n/fullTranslations';

interface CorrelationMatrixProps {
  currentLanguage?: 'sr' | 'en';
  onCellClick?: (rowFactor: string, colFactor: string, correlation: string, explanation: string, days: number, row: string, col: string, basketballContext?: { trainings: number; games: number; gameDays: string[] }) => void;
  initialSelectedCell?: { row: string; col: string } | null;
}

const correlationMatrix = correlationMatrixData;

const getCorrelationColor = (value: string): string => {
  switch (value) {
    case '++': return '#16a34a';
    case '+': return '#22c55e';
    case '±': return '#eab308';
    case '–': return '#ef4444';
    case '0': return '#64748b';
    default: return '#64748b';
  }
};

const getCorrelationLabel = (value: string, lang: 'sr' | 'en' = 'sr'): string => {
  const labels = {
    sr: {
      '++': 'Veoma jaka pozitivna korelacija',
      '+': 'Umerena pozitivna korelacija',
      '±': 'Neutralna / Zavisi od konteksta',
      '–': 'Negativna korelacija',
      '0': 'Bez direktne korelacije'
    },
    en: {
      '++': 'Very strong positive correlation',
      '+': 'Moderate positive correlation',
      '±': 'Neutral / Context dependent',
      '–': 'Negative correlation',
      '0': 'No direct correlation'
    }
  };
  
  return labels[lang][value as keyof typeof labels.sr] || (lang === 'sr' ? 'Nepoznato' : 'Unknown');
};

export default function CorrelationMatrix({ currentLanguage = 'sr', onCellClick, initialSelectedCell }: CorrelationMatrixProps) {
  const [selectedCell, setSelectedCell] = useState<{ row: string; col: string } | null>(initialSelectedCell || null);

  const [trainingDays, setTrainingDays] = useState<number>(7);
  const [basketballTrainings, setBasketballTrainings] = useState<number>(3);
  const [basketballGames, setBasketballGames] = useState<number>(0);
  const [gameDays, setGameDays] = useState<string[]>([]);
  const [season, setSeason] = useState<'off-season' | 'pre-season' | 'in-season'>('in-season');
  const [useBasketballAlternatives, setUseBasketballAlternatives] = useState(false);

  // Get translations
  const t = fullTranslations[currentLanguage];

  // Factor name translations
  const factorTranslations: { [key: string]: { sr: string; en: string } } = {
    "Snaga (1RM, izometrija)": { sr: "Snaga (1RM, izometrija)", en: "Strength (1RM, isometric)" },
    "Brzina (Sprint 5-30m)": { sr: "Brzina (Sprint 5-30m)", en: "Speed (Sprint 5-30m)" },
    "Eksplozivnost (CMJ, SJ)": { sr: "Eksplozivnost (CMJ, SJ)", en: "Explosiveness (CMJ, SJ)" },
    "Izdržljivost (YoYo IR1)": { sr: "Izdržljivost (YoYo IR1)", en: "Endurance (YoYo IR1)" },
    "Agilnost (T-test, Pro-agility)": { sr: "Agilnost (T-test, Pro-agility)", en: "Agility (T-test, Pro-agility)" },
    "Koordinacija (Tehnička efikasnost)": { sr: "Koordinacija (Tehnička efikasnost)", en: "Coordination (Technical efficiency)" },
    "Mobilnost kukova": { sr: "Mobilnost kukova", en: "Hip mobility" },
    "Fleksibilnost (Sit & Reach)": { sr: "Fleksibilnost (Sit & Reach)", en: "Flexibility (Sit & Reach)" },
    "Reaktivnost (RSI_mod)": { sr: "Reaktivnost (RSI_mod)", en: "Reactivity (RSI_mod)" },
    "Aerobna izdržljivost (VO2max)": { sr: "Aerobna izdržljivost (VO2max)", en: "Aerobic endurance (VO2max)" },
    "Anaerobna izdržljivost": { sr: "Anaerobna izdržljivost", en: "Anaerobic endurance" },
    "Core stabilnost": { sr: "Core stabilnost", en: "Core stability" },
    "Balans (Y-Balance, Single-leg)": { sr: "Balans (Y-Balance, Single-leg)", en: "Balance (Y-Balance, Single-leg)" },
    "Preciznost pokreta": { sr: "Preciznost pokreta", en: "Movement precision" },
    "Propriocepcija": { sr: "Propriocepcija", en: "Proprioception" }
  };

  const translateFactor = (factor: string): string => {
    return factorTranslations[factor]?.[currentLanguage] || factor;
  };

  const allFactors = Object.keys(correlationMatrix);

  const factors = useMemo(() => {
    return allFactors;
  }, [allFactors]);

  const handleCellClick = (row: string, col: string) => {
    if (row === col) return; // Skip diagonal cells
    setSelectedCell({ row, col }); // Show explanation panel
  };

  const getExplanation = () => {
    if (!selectedCell) return null;
    const { row, col } = selectedCell;

    const direct = correlationMatrix[row]?.[col];
    const reverse = correlationMatrix[col]?.[row];
    const data = direct || reverse;

    if (!data) return null;

    return {
      title: `${translateFactor(row)} ↔ ${translateFactor(col)}`,
      correlation: data.value,
      explanation: typeof data.explanation === 'object' ? data.explanation[currentLanguage] : data.explanation,
      example: data.example ? (typeof data.example === 'object' ? data.example[currentLanguage] : data.example) : undefined
    };
  };

  const explanation = getExplanation();



  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-white text-2xl font-bold mb-2">
              🔗 {t.correlationMatrix} ({factors.length}×{factors.length})
            </h2>
            <p className="text-slate-400 text-sm">
              {t.completeCorrelationMatrix}
            </p>
          </div>

        </div>
      </div>

      {/* Legenda */}
      
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          <h3 className="text-white font-semibold mb-3 flex items-center space-x-2">
            <Info className="w-4 h-4" />
            <span>{t.correlationLegend}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#16a34a' }}>
                ++
              </div>
              <span className="text-slate-300 text-xs">{t.veryStrongPositive}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#22c55e' }}>
                +
              </div>
              <span className="text-slate-300 text-xs">{t.moderatePositive}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#ef4444' }}>
                -
              </div>
              <span className="text-slate-300 text-xs">{t.negative}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#eab308' }}>
                ±
              </div>
              <span className="text-slate-300 text-xs">{t.neutral}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#64748b' }}>
                0
              </div>
              <span className="text-slate-300 text-xs">{t.noCorrelation}</span>
            </div>
          </div>
        </div>


      {/* Matrica */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-3 text-slate-400 text-xs font-medium border border-slate-700 sticky left-0 bg-slate-800 z-20 min-w-[180px]">
                {currentLanguage === 'sr' ? 'Faktor' : 'Factor'}
              </th>
              {factors.map(factor => (
                <th
                  key={factor}
                  className="p-2 text-white text-[10px] font-semibold border border-slate-700 bg-slate-700 min-w-[90px] max-w-[90px] relative group"
                  title={translateFactor(factor)}
                >
                  <div className="transform -rotate-45 origin-center whitespace-nowrap">
                    {translateFactor(factor).split('(')[0].trim()}
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-xs whitespace-nowrap z-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {translateFactor(factor)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {factors.map(rowFactor => (
              <tr key={rowFactor}>
                <td className="p-2 text-white text-xs font-semibold border border-slate-700 bg-slate-700 sticky left-0 z-10 relative group" title={translateFactor(rowFactor)}>
                  <div className="line-clamp-2">
                    {translateFactor(rowFactor)}
                  </div>
                  <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-xs whitespace-nowrap z-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {translateFactor(rowFactor)}
                  </div>
                </td>
                {factors.map(colFactor => {
                  const direct = correlationMatrix[rowFactor]?.[colFactor];
                  const reverse = correlationMatrix[colFactor]?.[rowFactor];
                  const data = direct || reverse;
                  const value = data?.value || '0';
                  const isSelected = selectedCell?.row === rowFactor && selectedCell?.col === colFactor;
                  const isDiagonal = rowFactor === colFactor;

                  return (
                    <td
                      key={colFactor}
                      onClick={() => !isDiagonal && data && handleCellClick(rowFactor, colFactor)}
                      className={`p-3 text-center border border-slate-700 transition-all ${
                        isDiagonal
                          ? 'cursor-default'
                          : data
                          ? 'cursor-pointer hover:ring-2 hover:ring-blue-400'
                          : 'cursor-not-allowed opacity-40'
                      } ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
                      style={{
                        backgroundColor: getCorrelationColor(value),
                        opacity: isDiagonal ? 0.3 : 1
                      }}
                    >
                      <div className="text-white font-bold text-sm">
                        {isDiagonal ? '—' : value}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Objašnjenje - EDUKATIVNI PANEL */}
      {explanation && (
        <div className="bg-slate-800 border border-blue-500 rounded-xl p-6 relative">
          {/* Zatvori dugme */}
          <button
            onClick={() => setSelectedCell(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg"
            title={currentLanguage === 'sr' ? 'Zatvori' : 'Close'}
          >
            <span className="text-2xl">✕</span>
          </button>
          
          <div className="flex items-start space-x-4">
            <div className="space-y-3">
              <div
                className="w-20 h-20 rounded-lg flex items-center justify-center text-white font-bold text-3xl flex-shrink-0 shadow-lg"
                style={{ backgroundColor: getCorrelationColor(explanation.correlation) }}
              >
                {explanation.correlation}
              </div>
              
              {/* Input za broj dana - SAMO za pozitivne korelacije */}
              {(explanation.correlation === '+' || explanation.correlation === '++') && (
                <div className="w-20">
                  <label className="block text-xs text-gray-400 mb-1 text-center">
                    {currentLanguage === 'sr' ? 'Dana' : 'Days'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="21"
                    value={trainingDays}
                    onChange={(e) => setTrainingDays(Math.max(1, Math.min(21, parseInt(e.target.value) || 7)))}
                    className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-center text-white font-bold"
                  />
                </div>
              )}
            </div>
            
            {/* Košarkaško opterećenje - SAMO za pozitivne korelacije */}
            {(explanation.correlation === '+' || explanation.correlation === '++') && (
              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-white font-semibold text-sm mb-3 flex items-center space-x-2">
                  <span>🏀</span>
                  <span>{currentLanguage === 'sr' ? 'Košarkaško opterećenje' : 'Basketball Load'}</span>
                </h4>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">
                      {currentLanguage === 'sr' ? 'Treninga/nedelju' : 'Trainings/week'}
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="6"
                      value={basketballTrainings}
                      onChange={(e) => setBasketballTrainings(Math.max(1, Math.min(6, parseInt(e.target.value) || 3)))}
                      className="w-full px-2 py-1.5 bg-slate-700 border border-slate-600 rounded text-center text-white font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">
                      {currentLanguage === 'sr' ? 'Utakmica/nedelju' : 'Games/week'}
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="3"
                      value={basketballGames}
                      onChange={(e) => setBasketballGames(Math.max(0, Math.min(3, parseInt(e.target.value) || 0)))}
                      className="w-full px-2 py-1.5 bg-slate-700 border border-slate-600 rounded text-center text-white font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">
                      {currentLanguage === 'sr' ? 'Dan utakmice' : 'Game day'}
                    </label>
                    <select
                      value={gameDays[0] || 'nedelja'}
                      onChange={(e) => setGameDays([e.target.value])}
                      className="w-full px-2 py-1.5 bg-slate-700 border border-slate-600 rounded text-white font-medium text-sm"
                    >
                      <option value="ponedeljak">{currentLanguage === 'sr' ? 'Pon' : 'Mon'}</option>
                      <option value="utorak">{currentLanguage === 'sr' ? 'Uto' : 'Tue'}</option>
                      <option value="sreda">{currentLanguage === 'sr' ? 'Sre' : 'Wed'}</option>
                      <option value="cetvrtak">{currentLanguage === 'sr' ? 'Čet' : 'Thu'}</option>
                      <option value="petak">{currentLanguage === 'sr' ? 'Pet' : 'Fri'}</option>
                      <option value="subota">{currentLanguage === 'sr' ? 'Sub' : 'Sat'}</option>
                      <option value="nedelja">{currentLanguage === 'sr' ? 'Ned' : 'Sun'}</option>
                    </select>
                  </div>
                </div>
                <p className="text-xs text-gray-400 italic">
                  {currentLanguage === 'sr' 
                    ? '💡 AI će prilagoditi intenzitet i rasporediti fizičku pripremu oko košarkaških treninga i utakmica.'
                    : '💡 AI will adjust intensity and schedule physical training around basketball sessions and games.'}
                </p>
              </div>
            )}

            {/* Season & Basketball Alternatives for SIMBION Generator */}
            <div className="space-y-3 pt-3 border-t border-slate-700">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {currentLanguage === 'sr' ? 'Sezona' : 'Season'}
                </label>
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value as 'off-season' | 'pre-season' | 'in-season')}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm"
                >
                  <option value="off-season">{currentLanguage === 'sr' ? 'Off-season (Jun-Septembar)' : 'Off-season (June-September)'}</option>
                  <option value="pre-season">{currentLanguage === 'sr' ? 'Preseason (Septembar-Oktobar)' : 'Preseason (September-October)'}</option>
                  <option value="in-season">{currentLanguage === 'sr' ? 'In-season (Oktobar-Maj)' : 'In-season (October-May)'}</option>
                </select>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="basketballAlternativesCorr"
                  checked={useBasketballAlternatives}
                  onChange={(e) => setUseBasketballAlternatives(e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-600 bg-slate-900 border-slate-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="basketballAlternativesCorr" className="text-sm text-gray-300">
                  <span className="font-medium">
                    {currentLanguage === 'sr' ? 'Koristi košarkaške alternative' : 'Use basketball alternatives'}
                  </span>
                  <br />
                  <span className="text-xs text-gray-400">
                    {currentLanguage === 'sr' ? '(Sprint → tranzicije, Skok → borba za skok, Defense slides → agilnost)' : '(Sprint → transitions, Jump → rebound battles, Defense slides → agility)'}
                  </span>
                </label>
              </div>
            </div>

            <div className="flex-1 space-y-3 pt-3 border-t border-slate-700">
              <h3 className="text-white text-xl font-bold">{explanation.title}</h3>

              <div className="bg-blue-900/30 border border-blue-700 rounded-lg px-4 py-2">
                <span className="text-blue-300 text-sm font-semibold">
                  {getCorrelationLabel(explanation.correlation, currentLanguage)}
                </span>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4 space-y-2">
                <p className="text-slate-200 text-sm leading-relaxed">
                  <strong className="text-white">{currentLanguage === 'sr' ? 'Objašnjenje:' : 'Explanation:'}</strong> {explanation.explanation}
                </p>
                {explanation.example && (
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong className="text-emerald-400">{currentLanguage === 'sr' ? 'Primer:' : 'Example:'}</strong> {explanation.example}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Praktična primena + DUGME ZA AI GENERISANJE */}
          <div className="mt-4 pt-4 border-t border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-semibold text-sm flex items-center space-x-2">
                <span>💡</span>
                <span>{t.howToUseInTraining}</span>
              </h4>
              {onCellClick && selectedCell && (
                <>
                  {(() => {
                    const { row, col } = selectedCell;
                    const direct = correlationMatrix[row]?.[col];
                    const reverse = correlationMatrix[col]?.[row];
                    const data = direct || reverse;
                    const isPositive = data?.value === '+' || data?.value === '++';
                    
                    if (isPositive) {
                      return (
                        <button
                          onClick={() => {
                            if (data && onCellClick) {
                              const explanationText = typeof data.explanation === 'object' ? data.explanation[currentLanguage] : data.explanation;
                              const basketballContext = {
                                trainings: basketballTrainings,
                                games: basketballGames,
                                gameDays: gameDays
                              };
                              console.log('Calling onCellClick with days:', trainingDays, 'basketball:', basketballContext); // DEBUG
                              onCellClick(translateFactor(row), translateFactor(col), data.value, explanationText || '', trainingDays, row, col, basketballContext);
                            }
                          }}
                          className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-medium text-sm transition-all shadow-lg flex items-center gap-2 justify-center"
                        >
                          <span>🤖</span>
                          <span>{currentLanguage === 'sr' ? 'Generiši trening' : 'Generate Training'}</span>
                        </button>
                      );
                    } else {
                      return (
                        <div className="px-4 py-2 bg-red-900/50 border border-red-700 text-red-300 rounded-lg font-medium text-sm flex items-center gap-2">
                          <span>⛔</span>
                          <span>{currentLanguage === 'sr' ? 'Negativna korelacija - ne preporučuje se!' : 'Negative correlation - not recommended!'}</span>
                        </div>
                      );
                    }
                  })()}
                </>
              )}
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 text-slate-300 text-xs space-y-1.5">
              {explanation.correlation === '++' && (
                <>
                  <p>✅ <strong>{t.trainTogether}</strong> - {t.trainTogetherDesc}</p>
                  <p>✅ <strong>{t.combinedEffect}</strong> - {t.combinedEffectDesc}</p>
                  <p>📊 <strong>{t.aiRecommendation}</strong> - {t.aiRecBoth}</p>
                </>
              )}
              {explanation.correlation === '+' && (
                <>
                  <p>✅ <strong>{t.positiveConnection}</strong> - {t.positiveConnectionDesc}</p>
                  <p>⚠️ <strong>{t.watchBalance}</strong> - {t.watchBalanceDesc}</p>
                  <p>📊 <strong>{t.aiRecommendation}</strong> - {t.aiRecSPP}</p>
                </>
              )}
              {explanation.correlation === '±' && (
                <>
                  <p>⚠️ <strong>{t.dependsOnPhase}</strong> - {t.dependsOnPhaseDesc}</p>
                  <p>💡 <strong>{t.individualize}</strong> - {t.individualizeDesc}</p>
                  <p>📊 <strong>{t.aiRecommendation}</strong> - {t.aiRecMonitor}</p>
                </>
              )}
              {explanation.correlation === '–' && (
                <>
                  <p>❌ <strong>{t.oppositeEffects}</strong> - {t.oppositeEffectsDesc}</p>
                  <p>💡 <strong>{t.separateInCycles}</strong> - {t.separateInCyclesDesc}</p>
                  <p>📊 <strong>{t.aiRecommendation}</strong> - {t.aiRecNever}</p>
                </>
              )}
              {explanation.correlation === '0' && (
                <>
                  <p>ℹ️ <strong>{t.independentFactors}</strong> - {t.independentFactorsDesc}</p>
                  <p>💡 <strong>{t.canCombine}</strong> - {t.canCombineDesc}</p>
                  <p>📊 <strong>{t.aiRecommendation}</strong> - {t.aiRecFree}</p>
                </>
              )}
            </div>

            {/* Season & Basketball Alternatives Controls */}
            <div className="space-y-3 mt-4 pt-4 border-t border-slate-700">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {currentLanguage === 'sr' ? 'Sezona' : 'Season'}
                </label>
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value as 'off-season' | 'pre-season' | 'in-season')}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm"
                >
                  <option value="off-season">{currentLanguage === 'sr' ? 'Off-season (Jun-Septembar)' : 'Off-season (June-September)'}</option>
                  <option value="pre-season">{currentLanguage === 'sr' ? 'Preseason (Septembar-Oktobar)' : 'Preseason (September-October)'}</option>
                  <option value="in-season">{currentLanguage === 'sr' ? 'In-season (Oktobar-Maj)' : 'In-season (October-May)'}</option>
                </select>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="basketballAlternativesCorr"
                  checked={useBasketballAlternatives}
                  onChange={(e) => setUseBasketballAlternatives(e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-600 bg-slate-900 border-slate-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="basketballAlternativesCorr" className="text-sm text-gray-300">
                  <span className="font-medium">
                    {currentLanguage === 'sr' ? 'Koristi košarkaške alternative' : 'Use basketball alternatives'}
                  </span>
                  <br />
                  <span className="text-xs text-gray-400">
                    {currentLanguage === 'sr' ? '(Sprint → tranzicije, Skok → borba za skok, Defense slides → agilnost)' : '(Sprint → transitions, Jump → rebound battles, Defense slides → agility)'}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info panel */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
        <div className="flex items-start space-x-3">
          <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="text-slate-300 text-xs space-y-1">
            <p><strong className="text-white">{t.howToUseMatrix}</strong></p>
            <p>• {t.clickAnyField}</p>
            <p>• {t.useSearchOrGroup}</p>
            <p>• {t.aiUsesMatrix}</p>
            <p>• {t.basedOnResearch}</p>
            <p>• <strong>{t.symmetricMatrix}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

