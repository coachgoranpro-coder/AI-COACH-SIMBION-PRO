import { useState } from 'react';
import { Play, Info, User, Zap, Clock, Target } from 'lucide-react';
import { callGeminiAPI } from '../services/geminiApi';
import { workoutTemplates, type CompleteWorkout } from '../data/workoutTemplates';
import { POSITION_STANDARDS, type PositionStandards } from '../data/coachGoranMethodology';
import type { BasketballPosition } from '../data/exerciseCatalog';

interface TrainingGeneratorModuleProps {
  language?: 'sr' | 'en';
}

const translations = {
  sr: {
    title: 'Generator Treninga - 16 Faktora',
    subtitle: 'Generiši trening program na osnovu specifičnih faktora i nivoa',
    selectFactors: 'Izaberi faktore i njihove nivoe',
    levels: 'Nivoi',
    beginner: 'Početni',
    intermediate: 'Srednji',
    advanced: 'Napredni',
    elite: 'Elitni',
    context: 'Kontekst treninga',
    trainingDays: 'Dana za trening',
    basketballTrainings: 'Košarkaški treninzi/nedelju',
    basketballGames: 'Utakmice/nedelju',
    season: 'Sezona',
    offSeason: 'Off-season (Jun-Septembar)',
    preSeason: 'Preseason (Septembar-Oktobar)',
    inSeason: 'In-season (Oktobar-Maj)',
    basketballAlternatives: 'Koristi košarkaške alternative',
    basketballAlternativesHelp: '(Sprint → tranzicije, Skok → borba za skok)',
    generateTraining: 'Generiši trening program',
    generating: 'Generiše...',
    trainingTitle: 'Generisan trening program',
    selectAtLeastOne: 'Izaberi bar jedan faktor',
    
    // Position-specific
    positionSelect: 'Izbor pozicije',
    selectPosition: 'Izaberi poziciju',
    positionStandards: 'Standardi za poziciju',
    priorities: 'Prioriteti u treningu',
    situationalStyles: 'Stilovi igre',
    availableTemplates: 'Dostupni workout template-i',
    noTemplatesAvailable: 'Nema dostupnih template-a za ovaj nivo',
    viewTemplate: 'Prikaži template',
    cmj: 'CMJ',
    rfd: 'RFD',
    reactionTime: 'Reakcija',
    cod5105: 'COD 5-10-5',
    tTest: 'T-Test',
    asymmetry: 'Asimetrija',
    acceptable: 'prihvatljivo',
    
    // Faktori
    strength: 'Snaga',
    power: 'Eksplozivnost',
    speed: 'Brzina',
    acceleration: 'Akceleracija',
    agility: 'Agilnost',
    reactivity: 'Reaktivnost',
    endurance: 'Izdržljivost',
    stabilization: 'Stabilizacija',
    mobility: 'Mobilnost',
    coordination: 'Koordinacija',
    balance: 'Balans',
    rfdFactor: 'RFD (Rate of Force Development)',
    elasticity: 'Elastičnost',
    capacitance: 'Kapacitivnost',
    resilience: 'Otpornost na povrede',
    recovery: 'Oporavak'
  },
  en: {
    title: 'Training Generator - 16 Factors',
    subtitle: 'Generate training program based on specific factors and levels',
    selectFactors: 'Select factors and their levels',
    levels: 'Levels',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    elite: 'Elite',
    context: 'Training Context',
    trainingDays: 'Training Days',
    basketballTrainings: 'Basketball trainings/week',
    basketballGames: 'Games/week',
    season: 'Season',
    offSeason: 'Off-season (June-September)',
    preSeason: 'Preseason (September-October)',
    inSeason: 'In-season (October-May)',
    basketballAlternatives: 'Use basketball alternatives',
    basketballAlternativesHelp: '(Sprint → transitions, Jump → rebound battles)',
    generateTraining: 'Generate Training Program',
    generating: 'Generating...',
    trainingTitle: 'Generated Training Program',
    selectAtLeastOne: 'Select at least one factor',
    
    // Position-specific
    positionSelect: 'Position Selection',
    selectPosition: 'Select position',
    positionStandards: 'Position Standards',
    priorities: 'Training Priorities',
    situationalStyles: 'Play Styles',
    availableTemplates: 'Available Workout Templates',
    noTemplatesAvailable: 'No templates available for this level',
    viewTemplate: 'View Template',
    cmj: 'CMJ',
    rfd: 'RFD',
    reactionTime: 'Reaction',
    cod5105: 'COD 5-10-5',
    tTest: 'T-Test',
    asymmetry: 'Asymmetry',
    acceptable: 'acceptable',
    
    // Factors
    strength: 'Strength',
    power: 'Power',
    speed: 'Speed',
    acceleration: 'Acceleration',
    agility: 'Agility',
    reactivity: 'Reactivity',
    endurance: 'Endurance',
    stabilization: 'Stabilization',
    mobility: 'Mobility',
    coordination: 'Coordination',
    balance: 'Balance',
    rfdFactor: 'RFD (Rate of Force Development)',
    elasticity: 'Elasticity',
    capacitance: 'Capacitance',
    resilience: 'Injury Resilience',
    recovery: 'Recovery'
  }
};

const factors = [
  'strength', 'power', 'speed', 'acceleration', 
  'agility', 'reactivity', 'endurance', 'stabilization',
  'mobility', 'coordination', 'balance', 'rfdFactor',
  'elasticity', 'capacitance', 'resilience', 'recovery'
];

const levels = ['beginner', 'intermediate', 'advanced', 'elite'];

export default function TrainingGeneratorModule({ language = 'sr' }: TrainingGeneratorModuleProps) {
  const t = translations[language];
  
  const [selectedFactors, setSelectedFactors] = useState<{ [key: string]: string }>({});
  const [selectedPosition, setSelectedPosition] = useState<BasketballPosition | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'advanced' | 'elite'>('beginner');
  const [trainingDays, setTrainingDays] = useState<number>(7);
  const [basketballTrainings, setBasketballTrainings] = useState<number>(3);
  const [basketballGames, setBasketballGames] = useState<number>(0);
  const [season, setSeason] = useState<'off-season' | 'pre-season' | 'in-season'>('in-season');
  const [useBasketballAlternatives, setUseBasketballAlternatives] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [trainingProgram, setTrainingProgram] = useState<string>('');
  const [selectedTemplate, setSelectedTemplate] = useState<CompleteWorkout | null>(null);

  // Get current position standards
  const currentPositionStandards: PositionStandards | undefined = selectedPosition 
    ? POSITION_STANDARDS.find(p => p.position === selectedPosition)
    : undefined;

  // Get available templates for selected position and level
  const availableTemplates = selectedPosition 
    ? workoutTemplates.filter(t => t.position === selectedPosition && t.level === selectedLevel)
    : [];

  const handleFactorChange = (factor: string, level: string) => {
    setSelectedFactors(prev => {
      if (prev[factor] === level) {
        const newFactors = { ...prev };
        delete newFactors[factor];
        return newFactors;
      }
      return { ...prev, [factor]: level };
    });
  };

  const generateTraining = async () => {
    if (Object.keys(selectedFactors).length === 0) {
      alert(t.selectAtLeastOne);
      return;
    }

    setIsGenerating(true);
    
    try {
      // Build factors list
      const factorsList = Object.entries(selectedFactors)
        .map(([factor, level]) => `${t[factor as keyof typeof t]} (${t[level as keyof typeof t]})`)
        .join(', ');

      // Build season context
      const seasonContext = language === 'sr'
        ? `🏀 SEZONSKI KONTEKST: ${season === 'off-season' ? 'OFF-SEASON (max razvojni trening)' : season === 'pre-season' ? 'PRESEASON (priprema, 60% košarka 40% fitness)' : 'IN-SEASON (80% košarka, 20% održavanje)'}`
        : `🏀 SEASON CONTEXT: ${season === 'off-season' ? 'OFF-SEASON (max developmental training)' : season === 'pre-season' ? 'PRESEASON (preparation, 60% basketball 40% fitness)' : 'IN-SEASON (80% basketball, 20% maintenance)'}`;

      // Build basketball alternatives text
      const basketballAlternativesText = useBasketballAlternatives 
        ? `\n\n🏀 KOŠARKAŠKE ALTERNATIVE (OBAVEZNO KORISTITI):

BRZINA/AKCELERACIJA:
❌ NE: Sprint 30m pravolinijski
✅ DA: Fast break transitions (full court 3-on-2, 2-on-1)
✅ DA: Closeout sprints (defensive reaction to shooter)
✅ DA: Transition offense sprints (0-5 sec attack after rebound)

AGILNOST/COD:
❌ NE: T-Test, Pro-Agility drill
✅ DA: Defensive shell drills (zig-zag slides with directional changes)
✅ DA: 1-on-1 full court defense (stay in front, closeouts, recovery)
✅ DA: Pick & roll coverage drills (hedge, ice, switch movements)

EKSPLOZIVNOST:
❌ NE: Box jumps, depth jumps
✅ DA: Rebound battle drills (contested boards + putback)
✅ DA: Shot contest jumps (vertical challenge vs shooter)
✅ DA: Fast break finishing (euro-step, layup packages with explosion)

REAKTIVNOST:
❌ NE: Reaktivni plyo drills
✅ DA: Defensive reaction drills (help-side rotations on drive)
✅ DA: Loose ball scrambles (reaction to deflections)
✅ DA: Off-ball cutting (reading defender, backdoor timing)

IZDRŽLJIVOST:
❌ NE: Yo-Yo test, shuttle runs
✅ DA: Full court small-sided games (3v3, 4v4 continuous play)
✅ DA: Transition conditioning (defense→rebound→outlet→sprint→finish)
✅ DA: Press break drills (full court vs pressure for 8-12 possessions)

📌 VAŽNO: ${season === 'in-season' ? 'IN-SEASON - prioritet košarkaške specifičnosti! 80% vežbi mora biti sa loptom.' : season === 'pre-season' ? 'PRESEASON - kombinuj 50/50 generičke + specifične.' : 'OFF-SEASON - možeš koristiti više generičkih, ali još uvek uključi specifične.'}`
        : '';

      const prompt = language === 'sr'
        ? `Ti si AI SIMBION - ekspert za fizičku pripremu košarkaša.

${seasonContext}
${basketballAlternativesText}

FAKTORI ZA RAZVOJ: ${factorsList}

PARAMETRI:
- Dana treninga: ${trainingDays}
- Košarkaški treninzi/nedelju: ${basketballTrainings}
- Utakmice/nedelju: ${basketballGames}

ZADATAK:
Kreiraj ${trainingDays}-dnevni trening program koji razvija specifične faktore prema njihovim nivoima.

${useBasketballAlternatives ? '⚠️ KRITIČNO: Koristi ISKLJUČIVO košarkaške alternative iz liste gore!' : ''}

📋 STRUKTURA:
1. **DAN 1-${trainingDays}**: Za svaki dan napiši:
   - Fokus dana
   - 4-6 vežbi sasetovima/ponavljanjima/pauzama
   - Napomene o intenzitetu
   
2. **VOLUMEN**: Prilagodi prema broju utakmica (${basketballGames}/nedelju)

3. **SPECIFIČNOST**: ${season === 'in-season' ? '80% vežbi sa loptom' : season === 'pre-season' ? '60% vežbi sa loptom' : '40% vežbi sa loptom'}

Generiši plan:`
        : `You are AI SIMBION - basketball physical preparation expert.

${seasonContext}
${basketballAlternativesText}

FACTORS TO DEVELOP: ${factorsList}

PARAMETERS:
- Training Days: ${trainingDays}
- Basketball trainings/week: ${basketballTrainings}
- Games/week: ${basketballGames}

TASK:
Create a ${trainingDays}-day training program that develops specific factors according to their levels.

${useBasketballAlternatives ? '⚠️ CRITICAL: Use ONLY basketball alternatives from the list above!' : ''}

📋 STRUCTURE:
1. **DAY 1-${trainingDays}**: For each day write:
   - Day focus
   - 4-6 exercises with sets/reps/rest
   - Intensity notes
   
2. **VOLUME**: Adjust for ${basketballGames} games/week

3. **SPECIFICITY**: ${season === 'in-season' ? '80% ball exercises' : season === 'pre-season' ? '60% ball exercises' : '40% ball exercises'}

Generate plan:`;

      const response = await callGeminiAPI(prompt, [], language);
      setTrainingProgram(response);
    } catch (error) {
      console.error('Error generating training:', error);
      const errorMsg = language === 'sr' 
        ? '❌ Greška pri generisanju treninga. Pokušaj ponovo.' 
        : '❌ Error generating training. Try again.';
      setTrainingProgram(errorMsg);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-white mb-2">{t.title}</h2>
        <p className="text-slate-300">{t.subtitle}</p>
      </div>

      {/* Position Selection */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="w-6 h-6 text-blue-400" />
          <h3 className="text-xl font-bold text-white">{t.positionSelect}</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
          {(['PG', 'SG', 'SF', 'PF', 'C'] as BasketballPosition[]).map(pos => {
            const posStandard = POSITION_STANDARDS.find(p => p.position === pos);
            return (
              <button
                key={pos}
                onClick={() => setSelectedPosition(pos)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedPosition === pos
                    ? 'bg-blue-600/30 border-blue-500 shadow-lg shadow-blue-500/20'
                    : 'bg-slate-900/50 border-slate-600 hover:border-slate-500'
                }`}
              >
                <div className="text-2xl font-bold text-white">{pos}</div>
                <div className="text-xs text-slate-400 mt-1">
                  {posStandard?.displayName[language]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Level Selection */}
        {selectedPosition && (
          <div className="mt-4 pt-4 border-t border-slate-700">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t.levels}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['beginner', 'intermediate', 'advanced', 'elite'] as const).map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    selectedLevel === level
                      ? 'bg-green-600/30 border-green-500 text-green-400 font-medium'
                      : 'bg-slate-900/50 border-slate-600 text-slate-400 hover:border-slate-500'
                  }`}
                >
                  {t[level]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Position Standards */}
      {currentPositionStandards && (
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">{t.positionStandards}</h3>
          </div>

          {/* Standards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-400 mb-1">{t.cmj}</div>
              <div className="text-sm text-slate-300">
                <span className="text-yellow-400">{currentPositionStandards.standards.cmj.min}</span> / 
                <span className="text-green-400"> {currentPositionStandards.standards.cmj.good}</span> / 
                <span className="text-blue-400"> {currentPositionStandards.standards.cmj.elite} cm</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-400 mb-1">{t.rfd}</div>
              <div className="text-sm text-slate-300">
                <span className="text-yellow-400">{currentPositionStandards.standards.rfd.min}</span> / 
                <span className="text-green-400"> {currentPositionStandards.standards.rfd.good}</span> / 
                <span className="text-blue-400"> {currentPositionStandards.standards.rfd.elite} N/kg</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-400 mb-1">{t.reactionTime}</div>
              <div className="text-sm text-slate-300">
                <span className="text-blue-400">{currentPositionStandards.standards.reactionTime.elite}</span> / 
                <span className="text-green-400"> {currentPositionStandards.standards.reactionTime.good}</span> / 
                <span className="text-yellow-400"> {currentPositionStandards.standards.reactionTime.weak}s</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-400 mb-1">{t.cod5105}</div>
              <div className="text-sm text-slate-300">
                <span className="text-blue-400">{currentPositionStandards.standards.cod5105.elite}</span> / 
                <span className="text-green-400"> {currentPositionStandards.standards.cod5105.good}</span> / 
                <span className="text-yellow-400"> {currentPositionStandards.standards.cod5105.weak}s</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-400 mb-1">{t.tTest}</div>
              <div className="text-sm text-slate-300">
                <span className="text-blue-400">{currentPositionStandards.standards.tTest.elite}</span> / 
                <span className="text-green-400"> {currentPositionStandards.standards.tTest.good}</span> / 
                <span className="text-yellow-400"> {currentPositionStandards.standards.tTest.weak}s</span>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-400 mb-1">{t.asymmetry}</div>
              <div className="text-sm text-slate-300">
                <span className="text-green-400">{'<'}{currentPositionStandards.standards.asymmetry.acceptable}%</span>
                <div className="text-xs text-slate-500">{t.acceptable}</div>
              </div>
            </div>
          </div>

          {/* Priorities and Styles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                {t.priorities}
              </h4>
              <ul className="space-y-1">
                {currentPositionStandards.priorities.map((priority, idx) => (
                  <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{priority}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-purple-400" />
                {t.situationalStyles}
              </h4>
              <ul className="space-y-1">
                {currentPositionStandards.situational.map((style, idx) => (
                  <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{style}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Available Templates */}
      {selectedPosition && availableTemplates.length > 0 && (
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-bold text-white">{t.availableTemplates}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableTemplates.map(template => (
              <div
                key={template.id}
                className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 hover:border-slate-500 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-white font-semibold">{template.name[language]}</h4>
                    <p className="text-sm text-slate-400">{template.focus}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    template.level === 'beginner' ? 'bg-yellow-500/20 text-yellow-400' :
                    template.level === 'intermediate' ? 'bg-green-500/20 text-green-400' :
                    template.level === 'advanced' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {t[template.level]}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {template.totalDuration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {template.phase}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedTemplate(template)}
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-all"
                >
                  {t.viewTemplate}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedPosition && availableTemplates.length === 0 && (
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-center">
          <p className="text-yellow-400">{t.noTemplatesAvailable}</p>
        </div>
      )}

      {/* Factor Selection */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">{t.selectFactors}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {factors.map(factor => (
            <div key={factor} className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-3">{t[factor as keyof typeof t]}</h4>
              <div className="space-y-2">
                {levels.map(level => (
                  <label key={level} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFactors[factor] === level}
                      onChange={() => handleFactorChange(factor, level)}
                      className="w-4 h-4 text-blue-600 bg-slate-900 border-slate-600 rounded focus:ring-blue-500"
                    />
                    <span className={`text-sm ${selectedFactors[factor] === level ? 'text-blue-400 font-medium' : 'text-slate-400'}`}>
                      {t[level as keyof typeof t]}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Context Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Training Parameters */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">{t.context}</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.trainingDays}
              </label>
              <input
                type="number"
                min="1"
                max="14"
                value={trainingDays}
                onChange={(e) => setTrainingDays(Math.max(1, Math.min(14, parseInt(e.target.value) || 7)))}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.basketballTrainings}
              </label>
              <input
                type="number"
                min="0"
                max="7"
                value={basketballTrainings}
                onChange={(e) => setBasketballTrainings(Math.max(0, Math.min(7, parseInt(e.target.value) || 3)))}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.basketballGames}
              </label>
              <input
                type="number"
                min="0"
                max="3"
                value={basketballGames}
                onChange={(e) => setBasketballGames(Math.max(0, Math.min(3, parseInt(e.target.value) || 0)))}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Season & Basketball Options */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">{t.season}</h3>
          
          <div className="space-y-4">
            <div>
              <select
                value={season}
                onChange={(e) => setSeason(e.target.value as 'off-season' | 'pre-season' | 'in-season')}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="off-season">{t.offSeason}</option>
                <option value="pre-season">{t.preSeason}</option>
                <option value="in-season">{t.inSeason}</option>
              </select>
            </div>

            <div className="flex items-start gap-3 pt-4 border-t border-slate-700">
              <input
                type="checkbox"
                id="basketballAlternativesGen"
                checked={useBasketballAlternatives}
                onChange={(e) => setUseBasketballAlternatives(e.target.checked)}
                className="mt-1 w-4 h-4 text-blue-600 bg-slate-900 border-slate-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="basketballAlternativesGen" className="text-sm text-slate-300">
                <span className="font-medium">{t.basketballAlternatives}</span>
                <br />
                <span className="text-xs text-slate-400">{t.basketballAlternativesHelp}</span>
              </label>
            </div>

            <div className="flex items-start gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mt-4">
              <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300">
                {language === 'sr' 
                  ? 'Košarkaške alternative zamenjuju generičke vežbe specifičnim košarkaškim situacijama (tranzicije, borba za skok, defensive slides...)'
                  : 'Basketball alternatives replace generic exercises with specific basketball situations (transitions, rebound battles, defensive slides...)'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={generateTraining}
          disabled={isGenerating || Object.keys(selectedFactors).length === 0}
          className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white text-lg rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-green-500/20 flex items-center gap-3"
        >
          <Play className="w-6 h-6" />
          {isGenerating ? t.generating : t.generateTraining}
        </button>
      </div>

      {/* Training Program Output */}
      {trainingProgram && (
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-white mb-4">{t.trainingTitle}</h3>
          <div className="prose prose-invert max-w-none">
            <div className="text-slate-300 whitespace-pre-wrap">{trainingProgram}</div>
          </div>
        </div>
      )}

      {/* Template Detail Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {selectedTemplate.name[language]}
                </h3>
                <p className="text-slate-400">{selectedTemplate.focus}</p>
                <div className="flex items-center gap-3 mt-2 text-sm text-slate-500">
                  <span className={`px-2 py-1 rounded ${
                    selectedTemplate.level === 'beginner' ? 'bg-yellow-500/20 text-yellow-400' :
                    selectedTemplate.level === 'intermediate' ? 'bg-green-500/20 text-green-400' :
                    selectedTemplate.level === 'advanced' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {t[selectedTemplate.level]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedTemplate.totalDuration}
                  </span>
                  <span>{selectedTemplate.position}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="text-slate-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Warnings */}
              {selectedTemplate.warnings && selectedTemplate.warnings.length > 0 && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-400 font-semibold mb-2">⚠️ {language === 'sr' ? 'Upozorenja' : 'Warnings'}</h4>
                  <ul className="space-y-1">
                    {selectedTemplate.warnings.map((warning, idx) => (
                      <li key={idx} className="text-sm text-red-300">• {warning}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Equipment */}
              {selectedTemplate.equipment && selectedTemplate.equipment.length > 0 && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">🏋️ {language === 'sr' ? 'Oprema' : 'Equipment'}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTemplate.equipment.map((item, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Workout Sections */}
              {[
                { key: 'uvod', name: language === 'sr' ? '1. UVOD - Propriocepcija + Aktivacija' : '1. INTRO - Proprioception + Activation' },
                { key: 'cnsActivation', name: language === 'sr' ? '2. CNS ACTIVATION' : '2. CNS ACTIVATION' },
                { key: 'glavniDeo', name: language === 'sr' ? '3. GLAVNI DEO' : '3. MAIN WORKOUT' },
                { key: 'finisher', name: language === 'sr' ? '4. FINISHER' : '4. FINISHER' },
                { key: 'zavrsniDeo', name: language === 'sr' ? '5. ZAVRŠNI DEO - Hlađenje' : '5. COOLDOWN' }
              ].map(({ key, name }) => {
                const section = selectedTemplate[key as keyof typeof selectedTemplate] as any;
                if (!section || typeof section !== 'object') return null;

                return (
                  <div key={key} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-bold text-white">{name}</h4>
                      <span className="text-sm text-slate-400">{section.duration}</span>
                    </div>

                    <p className="text-sm text-slate-300 mb-4">{section.purpose}</p>

                    {/* Exercises */}
                    {section.exercises && section.exercises.length > 0 && (
                      <div className="space-y-3 mb-4">
                        {section.exercises.map((ex: any, idx: number) => (
                          <div key={idx} className="bg-slate-900/50 border border-slate-600 rounded p-3">
                            <div className="font-semibold text-white mb-2">
                              {idx + 1}. {ex.exerciseId.replace(/-/g, ' ').toUpperCase()}
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-2">
                              <span className="text-slate-400">Sets: <span className="text-white">{ex.sets}</span></span>
                              <span className="text-slate-400">Reps: <span className="text-white">{ex.reps}</span></span>
                              <span className="text-slate-400">Load: <span className="text-white">{ex.load}</span></span>
                              <span className="text-slate-400">Rest: <span className="text-white">{ex.rest}</span></span>
                            </div>
                            {ex.tempo && (
                              <div className="text-xs text-slate-400 mb-2">
                                Tempo: <span className="text-white">{ex.tempo}</span>
                              </div>
                            )}
                            <div className="text-xs text-slate-300 italic">{ex.notes}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Coaching Points */}
                    {section.coachingPoints && section.coachingPoints.length > 0 && (
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
                        <h5 className="text-xs font-semibold text-blue-400 mb-2">
                          {language === 'sr' ? 'Coaching Points' : 'Coaching Points'}
                        </h5>
                        <ul className="space-y-1">
                          {section.coachingPoints.map((point: string, idx: number) => (
                            <li key={idx} className="text-xs text-slate-300">• {point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
