import { useState, useEffect, useCallback } from 'react';
import { Bot, Send, Loader, User, Sparkles, Play, Info } from 'lucide-react';
import { callGeminiAPI as callClaudeAPI, generateTrainingProgram } from '../services/geminiApi';
import { getRelevantPrinciples, formatPrinciplesForPrompt } from '../data/trainingKnowledgeBase';
import { logActivity } from '../services/analyticsService';
import { auth } from '../lib/firebase';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AISimbionChatProps {
  language?: 'sr' | 'en';
  correlationContext?: {
    factor1: string;
    factor2: string;
    correlation: string;
    explanation: string;
    days?: number;
    basketball?: { trainings: number; games: number; gameDays: string[] };
  } | null;
  onBackToCorrelation?: () => void;
}

const translations = {
  sr: {
    chatTab: 'AI Asistent',
    trainingTab: 'Brzi Program',
    generatorTab: 'Program Builder',
    goToGenerator: 'Idi na generator treninga',
    inputPlaceholder: 'Postavi pitanje...',
    trainingParams: 'Parametri treninga',
    playerLevel: 'Nivo igrača',
    trainingGoal: 'Cilj treninga',
    duration: 'Trajanje (dana)',
    sessionLength: 'Dužina sesije (min)',
    generateButton: 'Generiši program',
    generating: 'Generišem...',
    error: 'Greška prilikom komunikacije sa AI.',
    sources: 'Izvori',
    userPlan: 'Vaš sačuvani trening plan',
    beginner: 'Početni',
    intermediate: 'Srednji',
    advanced: 'Napredni',
    elite: 'Elitni',
    speed: 'Brzina',
    strength: 'Snaga',
    endurance: 'Izdržljivost',
    flexibility: 'Fleksibilnost',
    mobility: 'Mobilnost',
    coordination: 'Koordinacija',
    // Generator tab
    generatorTitle: 'Generator Treninga - 16 Faktora',
    generatorSubtitle: 'Generiši trening program na osnovu specifičnih faktora i nivoa',
    selectFactors: 'Izaberi faktore i njihove nivoe',
    loadFromDiagnostics: 'Učitaj iz dijagnostike',
    clearFactors: 'Obriši sve faktore',
    levels: 'Nivoi',
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
    generateTrainingBtn: 'Generiši trening program',
    selectAtLeastOne: 'Izaberi bar jedan faktor',
    trainingTitleGen: 'Generisan trening program',
    // Faktori
    power: 'Eksplozivnost',
    acceleration: 'Akceleracija',
    agility: 'Agilnost',
    reactivity: 'Reaktivnost',
    stabilization: 'Stabilizacija',
    balance: 'Balans',
    rfd: 'RFD (Rate of Force Development)',
    elasticity: 'Elastičnost',
    capacitance: 'Kapacitivnost',
    resilience: 'Otpornost na povrede',
    recovery: 'Oporavak'
  },
  en: {
    chatTab: 'AI Assistant',
    trainingTab: 'Quick Program',
    generatorTab: 'Program Builder',
    goToGenerator: 'Go to training generator',
    inputPlaceholder: 'Ask a question...',
    trainingParams: 'Training Parameters',
    playerLevel: 'Player Level',
    trainingGoal: 'Training Goal',
    duration: 'Duration (days)',
    sessionLength: 'Session Length (min)',
    generateButton: 'Generate Program',
    generating: 'Generating...',
    error: 'Error communicating with AI.',
    sources: 'Sources',
    userPlan: 'Your saved training plan',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    elite: 'Elite',
    speed: 'Speed',
    strength: 'Strength',
    endurance: 'Endurance',
    flexibility: 'Flexibility',
    mobility: 'Mobility',
    coordination: 'Coordination',
    // Generator tab
    generatorTitle: 'Training Generator - 16 Factors',
    generatorSubtitle: 'Generate training program based on specific factors and levels',
    selectFactors: 'Select factors and their levels',
    loadFromDiagnostics: 'Load from Diagnostics',
    clearFactors: 'Clear all factors',
    levels: 'Levels',
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
    generateTrainingBtn: 'Generate Training Program',
    selectAtLeastOne: 'Select at least one factor',
    trainingTitleGen: 'Generated Training Program',
    // Factors
    power: 'Power',
    acceleration: 'Acceleration',
    agility: 'Agility',
    reactivity: 'Reactivity',
    stabilization: 'Stabilization',
    balance: 'Balance',
    rfd: 'RFD (Rate of Force Development)',
    elasticity: 'Elasticity',
    capacitance: 'Capacitance',
    resilience: 'Injury Resilience',
    recovery: 'Recovery'
  }
};

const factors = [
  'strength', 'power', 'speed', 'acceleration',
  'agility', 'reactivity', 'endurance', 'stabilization',
  'mobility', 'coordination', 'balance', 'rfd',
  'elasticity', 'capacitance', 'resilience', 'recovery'
];

const factorLevels = ['beginner', 'intermediate', 'advanced', 'elite'];

export default function AISimbionChat({ language = 'sr', correlationContext }: AISimbionChatProps) {
  const t = translations[language];
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'training' | 'generator'>('chat');
  
  // Generator tab state
  const [selectedFactors, setSelectedFactors] = useState<{ [key: string]: string }>({});
  const [trainingDaysGen, setTrainingDaysGen] = useState<number>(7);
  const [basketballTrainingsGen, setBasketballTrainingsGen] = useState<number>(3);
  const [basketballGamesGen, setBasketballGamesGen] = useState<number>(0);
  const [seasonGen, setSeasonGen] = useState<'off-season' | 'pre-season' | 'in-season'>('in-season');
  const [useBasketballAlternativesGen, setUseBasketballAlternativesGen] = useState(false);
  const [trainingProgramGen, setTrainingProgramGen] = useState<string>('');
  const [trainingParams, setTrainingParams] = useState({
    playerLevel: 'INTERMEDIATE',
    trainingGoal: 'STRENGTH',
    duration: 7,
    sessionLength: 90
  });

  const getSourcesSection = (): string => {
    const savedPlan = localStorage.getItem('simbion-pro-training-plan');
    const sources = [
      '• FIBA Official Protocols',
      '• NBA Training Methods',
      '• EuroLeague Programs',
      '• Basketball Reference Data',
      '• NSCA Research',
      '• Human Kinetics',
      '• Sports Science Journals',
      '• PubMed Database'
    ];

    let sourcesText = `\n\n---\n\n📚 **${t.sources}:**\n${sources.join('\n')}`;
    
    if (savedPlan && savedPlan.trim()) {
      sourcesText += `\n\n📋 **${t.userPlan}:**\n${language === 'sr' ? 'Analiziran vaš sačuvani plan iz modula "Trening Plan"' : 'Analyzed your saved plan from "Training Plan" module'}`;
    }

    return sourcesText;
  };
  
  const handleSendMessage = useCallback(async (messageOverride?: string) => {
    const messageToSend = messageOverride || inputMessage;
    if (!messageToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await callClaudeAPI(messageToSend, [], language);
      
      // Log activity - Check if response came from agent or database
      const user = auth.currentUser;
      if (user) {
        const responseSource = response.includes('🌐') || response.length > 1000 ? 'agent' : 'database';
        await logActivity(user.uid, user.email || '', 'aiChat', 'AI Chat message sent', responseSource, {
          messageLength: messageToSend.length,
          responseLength: response.length,
        });
      }
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response + getSourcesSection(),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: t.error,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [inputMessage, isLoading, language, t.error]);

  // Auto-generate training when correlation context is provided
  useEffect(() => {
    const generateCorrelationTraining = async () => {
      if (!correlationContext || isLoading) return;
      
      setIsLoading(true);
      
      const days = correlationContext.days || 7;
      const basketball = correlationContext.basketball;
      console.log('Generating training for days:', days, 'basketball:', basketball, 'from correlationContext:', correlationContext); // DEBUG
      
      // Basketball context integration
      const basketballSection = basketball ? (
        language === 'sr'
          ? `\n\n🏀 KOŠARKAŠKO OPTEREĆENJE - OBAVEZNO UVAŽITI:\n` +
            `- Košarkaških treninga nedeljno: ${basketball.trainings}\n` +
            `- Utakmica nedeljno: ${basketball.games}\n` +
            `- Dan utakmice: ${basketball.gameDays.join(', ')}\n\n` +
            `⚠️ KRITIČNA PRAVILA INTEGRACIJE SA KOŠARKOM:\n` +
            `1. Fizička priprema se uklapa IZMEĐU košarkaških treninga\n` +
            `2. ZABRANJEN intenzivan trening nogu 48h PRE utakmice (${basketball.gameDays.join(', ')})\n` +
            `3. Dan POSLE utakmice: OBAVEZAN aktivni oporavak (mobilnost, istezanje, lagano)\n` +
            `4. Snaga gornjeg dela i core POSLE košarke (noge već umorne)\n` +
            `5. Snaga donjeg dela SAMO kada NEMA košarke sutra\n` +
            `6. Intenzitet fizičke pripreme: ${basketball.trainings >= 5 ? 'NIZAK (mnogo košarke)' : basketball.trainings >= 3 ? 'SREDNJI (balans)' : 'VISOK (malo košarke)'}\n` +
            `7. Ukupno dnevno opterećenje: Košarka + Fizička < 120% normalnog\n\n` +
            `📋 FORMAT INTEGRACIJE (dodaj na kraju svakog dana):\n` +
            `💡 Kada izvesti: [Ujutro pre košarke / 4+h posle košarke / Umesto košarke]\n` +
            `⚠️ Napomena: [Prilagodi ako je sutra utakmica / Oporavak nakon utakmice / OK za punu snagu]\n\n`
          : `\n\n🏀 BASKETBALL LOAD - MUST ACCOUNT FOR:\n` +
            `- Basketball trainings per week: ${basketball.trainings}\n` +
            `- Games per week: ${basketball.games}\n` +
            `- Game day: ${basketball.gameDays.join(', ')}\n\n` +
            `⚠️ CRITICAL BASKETBALL INTEGRATION RULES:\n` +
            `1. Physical training fits BETWEEN basketball sessions\n` +
            `2. FORBIDDEN intense leg training 48h BEFORE game (${basketball.gameDays.join(', ')})\n` +
            `3. Day AFTER game: MANDATORY active recovery (mobility, stretching, light)\n` +
            `4. Upper body and core strength AFTER basketball (legs already tired)\n` +
            `5. Lower body strength ONLY when NO basketball tomorrow\n` +
            `6. Physical training intensity: ${basketball.trainings >= 5 ? 'LOW (lots of basketball)' : basketball.trainings >= 3 ? 'MEDIUM (balanced)' : 'HIGH (little basketball)'}\n` +
            `7. Total daily load: Basketball + Physical < 120% normal\n\n` +
            `📋 INTEGRATION FORMAT (add at end of each day):\n` +
            `💡 When to perform: [Morning before basketball / 4+h after basketball / Instead of basketball]\n` +
            `⚠️ Note: [Adjust if game tomorrow / Recovery after game / OK for full intensity]\n\n`
      ) : '';
      
      const contextMessage = language === 'sr'
        ? `⚠️⚠️⚠️ BROJ DANA: ${days} ⚠️⚠️⚠️

🚫🚫🚫 ZABRANJENO: OPŠTE PRIČE I UPUTSTVA
✅✅✅ OBAVEZNO: KONKRETNE VEŽBE SA BROJEVIMA

Ti si trener koji MORA da napiše KONKRETNI trening program sa SPECIFIČNIM vežbama, NE OPŠTA UPUTSTVA!

========================================
${basketballSection}========================================

📊 FAKTOR 1: ${correlationContext.factor1}
📊 FAKTOR 2: ${correlationContext.factor2}
🔗 SNAGA KORELACIJE: ${correlationContext.correlation}

💡 NAUČNO OBJAŠNJENJE:
${correlationContext.explanation}

🎯 TVOJ ZADATAK: Napiši TAČNO ${days} DANA konkretnog treninga.

⛔ ZABRANJENO - NE PIŠI:
- "Fokusirajte se na..."
- "Uključite vežbe kao što su..."
- "Preporučuje se 3-4 serije..."
- "Radite na brzini..."
- BILO ŠTA OPŠTE!

✅ OBAVEZNO - PIŠI OVAKO:

**DAN 1: Eksplozivna snaga nogu**
- Box Jump: 4x8, visina 60cm, odmor 2min
- Back Squat: 4x5, 80% 1RM (npr. 100kg), odmor 3min
- Bulgarian Split Squat: 3x8/noga, 30kg, odmor 90s
- Depth Jump: 3x6, 50cm, odmor 2min
- Plyo Push-ups: 3x10, sopstvena težina, odmor 90s
- Core: Plank 3x45s${basketball ? '\n\n💡 Kada izvesti: Ujutro pre košarke ili 5h posle\n⚠️ Napomena: Izbegavaj 48h pre utakmice!' : ''}

**DAN 2: Brzina i koordinacija**
- Sprint 30m: 6x, maksimalna brzina, odmor 3min
- Ladder Drills: 4x20s (Ickey Shuffle), odmor 60s
- Reactive Agility Drill: 5x15s, odmor 90s
- Medicine Ball Slams: 4x12, 8kg, odmor 60s
- Lateral Bound: 4x8/strana, odmor 2min
- Cool down: 10min lagano trčanje${basketball ? '\n\n💡 Kada izvesti: Posle jutarnjeg košarkaškog treninga (4h razmak)\n⚠️ Napomena: Smanji intenzitet ako je sutra utakmica' : ''}

🔥 PRAVILA:
1. Svaki dan MORA imati 5-7 specifičnih vežbi
2. Svaka vežba MORA imati: naziv, setove×reps, opterećenje, pauze
3. Opterećenje piši u kg ili % 1RM ili "sopstvena težina"
4. NEMOJ opšte priče - SAMO konkretne brojke
5. Generiši TAČNO ${days} dana (Dan 1 do Dan ${days})

⛔ Ako napišeš "fokusirajte se" ili "preporučuje se" - GREŠKA!
✅ Uvek konkretno: "Back Squat: 5x5, 120kg, 3min odmor"`
        : `⚠️⚠️⚠️ NUMBER OF DAYS: ${days} ⚠️⚠️⚠️

🚫🚫🚫 FORBIDDEN: GENERAL TALK AND GUIDELINES
✅✅✅ MANDATORY: CONCRETE EXERCISES WITH NUMBERS

You are a coach who MUST write CONCRETE training program with SPECIFIC exercises, NOT GENERAL GUIDELINES!

========================================
${basketballSection}========================================

📊 FACTOR 1: ${correlationContext.factor1}
📊 FACTOR 2: ${correlationContext.factor2}
🔗 CORRELATION STRENGTH: ${correlationContext.correlation}

💡 SCIENTIFIC EXPLANATION:
${correlationContext.explanation}

🎯 YOUR TASK: Write EXACTLY ${days} DAYS of concrete training.

⛔ FORBIDDEN - DON'T WRITE:
- "Focus on..."
- "Include exercises such as..."
- "It's recommended to do 3-4 sets..."
- "Work on speed..."
- ANYTHING GENERAL!

✅ MANDATORY - WRITE LIKE THIS:

**DAY 1: Explosive Leg Power**
- Box Jump: 4x8, height 60cm, rest 2min
- Back Squat: 4x5, 80% 1RM (e.g., 100kg), rest 3min
- Bulgarian Split Squat: 3x8/leg, 30kg, rest 90s
- Depth Jump: 3x6, 50cm, rest 2min
- Plyo Push-ups: 3x10, bodyweight, rest 90s
- Core: Plank 3x45s${basketball ? '\n\n💡 When to perform: Morning before basketball or 5h after\n⚠️ Note: Avoid 48h before game!' : ''}

**DAY 2: Speed and Coordination**
- Sprint 30m: 6x, max speed, rest 3min
- Ladder Drills: 4x20s (Ickey Shuffle), rest 60s
- Reactive Agility Drill: 5x15s, rest 90s
- Medicine Ball Slams: 4x12, 8kg, rest 60s
- Lateral Bound: 4x8/side, rest 2min
- Cool down: 10min light jog${basketball ? '\n\n💡 When to perform: After morning basketball (4h gap)\n⚠️ Note: Reduce intensity if game tomorrow' : ''}

🔥 RULES:
1. Each day MUST have 5-7 specific exercises
2. Each exercise MUST have: name, sets×reps, load, rest
3. Load in kg or % 1RM or "bodyweight"
4. NO general talk - ONLY concrete numbers
5. Generate EXACTLY ${days} days (Day 1 to Day ${days})

⛔ If you write "focus on" or "it's recommended" - ERROR!
✅ Always concrete: "Back Squat: 5x5, 120kg, 3min rest"`;
      
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: contextMessage,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      
      try {
        // Call Claude API directly (like DiagnosticsModule does)
        const response = await callClaudeAPI(contextMessage, [], language);
        
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response + getSourcesSection(),
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
      } catch (error) {
        console.error('Correlation training generation error:', error);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: t.error,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    };
    
    generateCorrelationTraining();
  }, [correlationContext]); // Only trigger when correlationContext changes

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

  // Funkcija za učitavanje nivoa iz dijagnostike
  const loadFromDiagnostics = () => {
    try {
      const diagnosticsData = localStorage.getItem('simbion-pro-diagnostics');
      
      if (!diagnosticsData) {
        alert(language === 'sr' 
          ? '❌ Nema sačuvanih rezultata dijagnostike. Molimo vas da prvo završite dijagnostiku.' 
          : '❌ No saved diagnostic results. Please complete diagnostics first.');
        return;
      }

      const diagnostics = JSON.parse(diagnosticsData);
      const results = diagnostics.results;
      const personalData = diagnostics.personalData;

      // Proverite da li postoji bodyweight za bench i squat
      if (!personalData?.bodyweight && (results.bench || results.backsquat)) {
        alert(language === 'sr'
          ? '❌ Nedostaje težina tela u dijagnostici. Potrebna je za Bench Press i Back Squat.'
          : '❌ Missing bodyweight in diagnostics. Required for Bench Press and Back Squat.');
        return;
      }

      const bodyweight = parseFloat(personalData?.bodyweight || '0');

      // Normative za određivanje nivoa
      const normatives = {
        sprint5: { elite: 1.05, advanced: 1.15, intermediate: 1.25, beginner: 1.35 },
        sprint20: { elite: 3.10, advanced: 3.30, intermediate: 3.50, beginner: 3.80 },
        ttest: { elite: 9.5, advanced: 10.0, intermediate: 10.5, beginner: 11.5 },
        laneagility: { elite: 11.0, advanced: 11.5, intermediate: 12.0, beginner: 13.0 },
        cmj: { elite: 50, advanced: 45, intermediate: 40, beginner: 35 },
        broadjump: { elite: 260, advanced: 240, intermediate: 220, beginner: 200 },
        bench: { elite: 1.2, advanced: 1.0, intermediate: 0.85, beginner: 0.7 }, // x bodyweight
        backsquat: { elite: 1.8, advanced: 1.5, intermediate: 1.25, beginner: 1.0 }, // x bodyweight
        yoyo: { elite: 2000, advanced: 1600, intermediate: 1200, beginner: 800 }
      };

      // Funkcija za određivanje nivoa
      const getPerformanceLevel = (testId: string, value: number): 'beginner' | 'intermediate' | 'advanced' | 'elite' => {
        const norms = normatives[testId as keyof typeof normatives];
        if (!norms) return 'intermediate';

        // Za testove gde je NIŽE bolje (sprint, agility)
        if (['sprint5', 'sprint20', 'ttest', 'laneagility'].includes(testId)) {
          if (value <= norms.elite) return 'elite';
          if (value <= norms.advanced) return 'advanced';
          if (value <= norms.intermediate) return 'intermediate';
          return 'beginner';
        } 
        // Za testove gde je VIŠE bolje (jumps, strength, endurance)
        else {
          if (value >= norms.elite) return 'elite';
          if (value >= norms.advanced) return 'advanced';
          if (value >= norms.intermediate) return 'intermediate';
          return 'beginner';
        }
      };

      // Mapiranje testova na faktore i određivanje najgore nivoa za svaki faktor
      const factorMapping: { [key: string]: string[] } = {};

      // Mapiranje: sprint5, sprint20 → speed, acceleration
      if (results.sprint5) {
        const level = getPerformanceLevel('sprint5', results.sprint5);
        factorMapping['speed'] = factorMapping['speed'] || [];
        factorMapping['speed'].push(level);
        factorMapping['acceleration'] = factorMapping['acceleration'] || [];
        factorMapping['acceleration'].push(level);
      }

      if (results.sprint20) {
        const level = getPerformanceLevel('sprint20', results.sprint20);
        factorMapping['speed'] = factorMapping['speed'] || [];
        factorMapping['speed'].push(level);
      }

      // Mapiranje: cmj, broadjump → power (eksplozivnost)
      if (results.cmj) {
        const level = getPerformanceLevel('cmj', results.cmj);
        factorMapping['power'] = factorMapping['power'] || [];
        factorMapping['power'].push(level);
      }

      if (results.broadjump) {
        const level = getPerformanceLevel('broadjump', results.broadjump);
        factorMapping['power'] = factorMapping['power'] || [];
        factorMapping['power'].push(level);
      }

      // Mapiranje: bench, backsquat → strength (izračunaj odnos teret/bodyweight)
      if (results.bench && bodyweight > 0) {
        const benchRatio = parseFloat(results.bench) / bodyweight;
        const level = getPerformanceLevel('bench', benchRatio);
        factorMapping['strength'] = factorMapping['strength'] || [];
        factorMapping['strength'].push(level);
      }

      if (results.backsquat && bodyweight > 0) {
        const squatRatio = parseFloat(results.backsquat) / bodyweight;
        const level = getPerformanceLevel('backsquat', squatRatio);
        factorMapping['strength'] = factorMapping['strength'] || [];
        factorMapping['strength'].push(level);
      }

      // Mapiranje: ttest, laneagility → agility, reactivity
      if (results.ttest) {
        const level = getPerformanceLevel('ttest', results.ttest);
        factorMapping['agility'] = factorMapping['agility'] || [];
        factorMapping['agility'].push(level);
        factorMapping['reactivity'] = factorMapping['reactivity'] || [];
        factorMapping['reactivity'].push(level);
      }

      if (results.laneagility) {
        const level = getPerformanceLevel('laneagility', results.laneagility);
        factorMapping['agility'] = factorMapping['agility'] || [];
        factorMapping['agility'].push(level);
      }

      // Mapiranje: yoyo → endurance
      if (results.yoyo) {
        const level = getPerformanceLevel('yoyo', results.yoyo);
        factorMapping['endurance'] = factorMapping['endurance'] || [];
        factorMapping['endurance'].push(level);
      }

      // Određivanje najgoreg nivoa za svaki faktor (konzervativniji pristup)
      const levelOrder = ['elite', 'advanced', 'intermediate', 'beginner'];
      const newSelectedFactors: { [key: string]: string } = {};
      
      Object.entries(factorMapping).forEach(([factor, levels]) => {
        // Nađi najgori nivo (najviši indeks u levelOrder)
        const worstLevel = levels.reduce((worst, current) => {
          return levelOrder.indexOf(current) > levelOrder.indexOf(worst) ? current : worst;
        }, levels[0]);
        newSelectedFactors[factor] = worstLevel;
      });

      setSelectedFactors(newSelectedFactors);

      const factorCount = Object.keys(newSelectedFactors).length;
      // NE prevodi faktore - ostavi originalne nazive (speed, power, strength...)
      alert(language === 'sr'
        ? `✅ Učitano ${factorCount} faktora iz dijagnostike!\n\nFaktori: ${Object.keys(newSelectedFactors).join(', ')}`
        : `✅ Loaded ${factorCount} factors from diagnostics!\n\nFactors: ${Object.keys(newSelectedFactors).join(', ')}`);

    } catch (error) {
      console.error('Error loading diagnostics:', error);
      alert(language === 'sr'
        ? '❌ Greška pri učitavanju dijagnostike. Proverite format podataka.'
        : '❌ Error loading diagnostics. Check data format.');
    }
  };

  const generateTrainingFromFactors = async () => {
    if (Object.keys(selectedFactors).length === 0) {
      alert(t.selectAtLeastOne);
      return;
    }

    setIsLoading(true);
    
    try {
      // Send RAW english keywords (not translated) so backend parser can detect them!
      const factorsList = Object.entries(selectedFactors)
        .map(([factor, level]) => `${factor} (${level})`)
        .join(', ');

      const seasonContext = language === 'sr'
        ? `🏀 SEZONSKI KONTEKST: ${seasonGen === 'off-season' ? 'OFF-SEASON (max razvojni trening)' : seasonGen === 'pre-season' ? 'PRESEASON (priprema, 60% košarka 40% fitness)' : 'IN-SEASON (80% košarka, 20% održavanje)'}`
        : `🏀 SEASON CONTEXT: ${seasonGen === 'off-season' ? 'OFF-SEASON (max developmental training)' : seasonGen === 'pre-season' ? 'PRESEASON (preparation, 60% basketball 40% fitness)' : 'IN-SEASON (80% basketball, 20% maintenance)'}`;

      const basketballAlternativesText = useBasketballAlternativesGen 
        ? `\n\n🏀 KOŠARKAŠKE ALTERNATIVE (OBAVEZNO KORISTITI):\n\nBRZINA/AKCELERACIJA:\n❌ NE: Sprint 30m pravolinijski\n✅ DA: Fast break transitions (full court 3-on-2, 2-on-1)\n✅ DA: Closeout sprints (defensive reaction to shooter)\n✅ DA: Transition offense sprints (0-5 sec attack after rebound)\n\nAGILNOST/COD:\n❌ NE: T-Test, Pro-Agility drill\n✅ DA: Defensive shell drills (zig-zag slides with directional changes)\n✅ DA: 1-on-1 full court defense (stay in front, closeouts, recovery)\n✅ DA: Pick & roll coverage drills (hedge, ice, switch movements)\n\nEKSPLOZIVNOST:\n❌ NE: Box jumps, depth jumps\n✅ DA: Rebound battle drills (contested boards + putback)\n✅ DA: Shot contest jumps (vertical challenge vs shooter)\n✅ DA: Fast break finishing (euro-step, layup packages with explosion)\n\nREAKTIVNOST:\n❌ NE: Reaktivni plyo drills\n✅ DA: Defensive reaction drills (help-side rotations on drive)\n✅ DA: Loose ball scrambles (reaction to deflections)\n✅ DA: Off-ball cutting (reading defender, backdoor timing)\n\nIZDRŽLJIVOST:\n❌ NE: Yo-Yo test, shuttle runs\n✅ DA: Full court small-sided games (3v3, 4v4 continuous play)\n✅ DA: Transition conditioning (defense→rebound→outlet→sprint→finish)\n✅ DA: Press break drills (full court vs pressure for 8-12 possessions)\n\n📌 VAŽNO: ${seasonGen === 'in-season' ? 'IN-SEASON - prioritet košarkaške specifičnosti! 80% vežbi mora biti sa loptom.' : seasonGen === 'pre-season' ? 'PRESEASON - kombinuj 50/50 generičke + specifične.' : 'OFF-SEASON - možeš koristiti više generičkih, ali još uvek uključi specifične.'}`
        : '';

      // Get relevant training principles from knowledge base
      const factorNames = Object.keys(selectedFactors);
      const relevantPrinciples = getRelevantPrinciples(factorNames, seasonGen, 'generator');
      const knowledgeContext = formatPrinciplesForPrompt(relevantPrinciples, language);

      const prompt = language === 'sr'
        ? `Ti si AI SIMBION - ekspert za fizičku pripremu košarkaša.\n\n${knowledgeContext}\n\n${seasonContext}${basketballAlternativesText}\n\n⚠️ KRITIČNO - OBAVEZNO PROČITAJ:\n- FAKTORI: Trening mora biti fokusiran ISKLJUČIVO na faktore: ${factorsList}\n- NE SMEŠ dodavati faktore koji nisu navedeni (npr. ako nema BRZINE, NE ubacuj sprint vežbe!)\n- SEZONA: ${seasonGen} - poštuj procenat specifičnosti (${seasonGen === 'in-season' ? '80%' : seasonGen === 'pre-season' ? '60%' : '40%'} košarkaško)\n- PRINCIPI: Primeni principe iz knjige "Fizička priprema košarkaša" (gore)\n- "Player must be capable to do" - svaka vežba mora imati direktnu primenu u igri\n- Disanje (Zakon #1): Uvek naglasiti pravilno disanje, posebno kod snage\n- Propriocepcija (Zakon #2): 15-20min pre treninga + istezanje posle\n${useBasketballAlternativesGen ? '- KOŠARKAŠKE ALTERNATIVE: OBAVEZNO koristi SAMO vežbe iz tabele gore! ZABRANJEN genericke vežbe!\n' : ''}\nPARAMETRI:\n- Dana treninga: ${trainingDaysGen}\n- Košarkaški treninzi/nedelju: ${basketballTrainingsGen}\n- Utakmice/nedelju: ${basketballGamesGen}\n\nZADATAK:\nKreiraj ${trainingDaysGen}-dnevni trening program koji razvija SAMO NAVEDENE FAKTORE prema njihovim nivoima. Koristi principe iz NBA, NSCA, FIBA i knjige Coach Goran.\n\n📋 STRUKTURA:\n1. **DAN 1-${trainingDaysGen}**: Za svaki dan napiši:\n   - Fokus dana (MORA biti iz navedenih faktora!)\n   - Proprioceptivno zagrevanje (15min)\n   - 4-6 vežbi sa setovima/ponavljanjima/pauzama\n   - Napomene o disanju i intenzitetu\n   - Istezanje i oporavak (10min)\n   \n2. **VOLUMEN**: Prilagodi prema broju utakmica (${basketballGamesGen}/nedelju) - ekipa mora biti podjednako jaka u oba poluvremena\n\n3. **SPECIFIČNOST**: ${seasonGen === 'in-season' ? '80% vežbi sa loptom' : seasonGen === 'pre-season' ? '60% vežbi sa loptom' : '40% vežbi sa loptom'}\n\n4. **INDIVIDUALIZACIJA**: Navedi opcije za različite pozicije (bek/krilo/centar)\n\nGeneriši plan:`
        : `You are AI SIMBION - basketball physical preparation expert.\n\n${knowledgeContext}\n\n${seasonContext}${basketballAlternativesText}\n\n⚠️ CRITICAL - MANDATORY INSTRUCTIONS:\n- FACTORS: Training must focus EXCLUSIVELY on: ${factorsList}\n- DO NOT add factors not listed (e.g., if SPEED is not listed, DO NOT include sprint exercises!)\n- SEASON: ${seasonGen} - respect specificity percentage (${seasonGen === 'in-season' ? '80%' : seasonGen === 'pre-season' ? '60%' : '40%'} basketball-specific)\n- PRINCIPLES: Apply principles from "Basketball Physical Preparation" book (above)\n- "Player must be capable to do" - every exercise must have direct game application\n- Breathing (Law #1): Always emphasize proper breathing, especially in strength work\n- Proprioception (Law #2): 15-20min before training + stretching after\n${useBasketballAlternativesGen ? '- BASKETBALL ALTERNATIVES: MANDATORY - use ONLY exercises from table above! FORBIDDEN generic exercises!\n' : ''}\nPARAMETERS:\n- Training Days: ${trainingDaysGen}\n- Basketball trainings/week: ${basketballTrainingsGen}\n- Games/week: ${basketballGamesGen}\n\nTASK:\nCreate a ${trainingDaysGen}-day training program that develops ONLY THE LISTED FACTORS according to their levels. Use principles from NBA, NSCA, FIBA and Coach Goran's book.\n\n📋 STRUCTURE:\n1. **DAY 1-${trainingDaysGen}**: For each day write:\n   - Day focus (MUST be from listed factors!)\n   - Proprioceptive warm-up (15min)\n   - 4-6 exercises with sets/reps/rest\n   - Notes on breathing and intensity\n   - Stretching and recovery (10min)\n   \n2. **VOLUME**: Adjust for ${basketballGamesGen} games/week - team must be equally strong in both halves\n\n3. **SPECIFICITY**: ${seasonGen === 'in-season' ? '80% ball exercises' : seasonGen === 'pre-season' ? '60% ball exercises' : '40% ball exercises'}\n\n4. **INDIVIDUALIZATION**: Include options for different positions (guard/forward/center)\n\nGenerate plan:`;

      const response = await callClaudeAPI(prompt, [], language);
      setTrainingProgramGen(response);
    } catch (error) {
      console.error('Error generating training:', error);
      const errorMsg = language === 'sr' 
        ? '❌ Greška pri generisanju treninga. Pokušaj ponovo.' 
        : '❌ Error generating training. Try again.';
      setTrainingProgramGen(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateTraining = async () => {
    setIsLoading(true);
    
    // Clear previous messages to avoid mixing languages
    setMessages([]);
    
    try {
      // Map English values to translated training goals
      const goalTranslationMap: Record<string, {sr: string; en: string}> = {
        'SPEED': { sr: 'brzina', en: 'speed' },
        'STRENGTH': { sr: 'snaga', en: 'strength' },
        'ENDURANCE': { sr: 'izdržljivost', en: 'endurance' },
        'FLEXIBILITY': { sr: 'fleksibilnost', en: 'flexibility' },
        'MOBILITY': { sr: 'mobilnost', en: 'mobility' },
        'COORDINATION': { sr: 'koordinacija', en: 'coordination' }
      };
      
      const translatedGoal = goalTranslationMap[trainingParams.trainingGoal]?.[language] || trainingParams.trainingGoal.toLowerCase();
      const translatedLevel = trainingParams.playerLevel.toLowerCase();
      
      const training = await generateTrainingProgram(
        translatedLevel,
        translatedGoal,
        language
      );

      const trainingMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: training + getSourcesSection(),
        timestamp: new Date()
      };

      setMessages([trainingMessage]);
      setActiveTab('chat');
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: `${t.error}: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setActiveTab('chat');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl border border-orange-900/30 overflow-hidden relative">

      {/* Tabs */}
      <div className="flex border-b border-orange-900/30 bg-slate-900/80">
        <button
          onClick={() => setActiveTab('chat')}
          className={`flex-1 px-6 py-3 font-medium transition-all ${
            activeTab === 'chat'
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
          }`}
        >
          <Bot className="w-5 h-5 inline mr-2" />
          {t.chatTab}
        </button>
        <button
          onClick={() => setActiveTab('training')}
          className={`flex-1 px-6 py-3 font-medium transition-all ${
            activeTab === 'training'
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
          }`}
        >
          <Sparkles className="w-5 h-5 inline mr-2" />
          {t.trainingTab}
        </button>
        <button
          onClick={() => setActiveTab('generator')}
          className={`flex-1 px-6 py-3 font-medium transition-all ${
            activeTab === 'generator'
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
          }`}
        >
          <Play className="w-5 h-5 inline mr-2" />
          {t.generatorTab}
        </button>
      </div>

      {activeTab === 'chat' ? (
        <div className="flex flex-col h-[600px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center text-slate-400 mt-20">
                <Bot className="w-16 h-16 mx-auto mb-4 text-amber-500" />
                <button
                  onClick={() => setActiveTab('training')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg font-medium transition-all inline-flex items-center space-x-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>{t.goToGenerator}</span>
                </button>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                          : 'bg-slate-800/70 text-slate-100'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        {message.role === 'user' ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4 text-amber-400" />
                        )}
                        <span className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString('sr-RS', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <div className="text-sm whitespace-pre-wrap">
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/70 rounded-lg p-4">
                  <Loader className="w-5 h-5 animate-spin text-amber-400" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-orange-900/30 bg-slate-900/80">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={t.inputPlaceholder}
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                disabled={isLoading}
              />
              {/* Clear dugme - samo ako ima poruka */}
              {messages.length > 0 && (
                <button
                  onClick={() => {
                    setMessages([]);
                    setInputMessage('');
                  }}
                  className="px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-lg transition-all flex items-center gap-2"
                  title={language === 'sr' ? 'Obriši razgovor' : 'Clear conversation'}
                >
                  <span>🗑️</span>
                </button>
              )}
              {/* Send dugme */}
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isLoading}
                className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white rounded-lg transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : activeTab === 'training' ? (
        <div className="p-6 space-y-6 h-[600px] overflow-y-auto">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-amber-300 mb-2">
                {t.playerLevel}
              </label>
              <select
                value={trainingParams.playerLevel}
                onChange={(e) => setTrainingParams({ ...trainingParams, playerLevel: e.target.value })}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                <option value="BEGINNER">{t.beginner}</option>
                <option value="INTERMEDIATE">{t.intermediate}</option>
                <option value="ADVANCED">{t.advanced}</option>
                <option value="ELITE">{t.elite}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-300 mb-2">
                {t.trainingGoal}
              </label>
              <select
                value={trainingParams.trainingGoal}
                onChange={(e) => setTrainingParams({ ...trainingParams, trainingGoal: e.target.value })}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                <option value="SPEED">{t.speed}</option>
                <option value="STRENGTH">{t.strength}</option>
                <option value="ENDURANCE">{t.endurance}</option>
                <option value="FLEXIBILITY">{t.flexibility}</option>
                <option value="MOBILITY">{t.mobility}</option>
                <option value="COORDINATION">{t.coordination}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-300 mb-2">
                {t.duration}: {trainingParams.duration}
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={trainingParams.duration}
                onChange={(e) => setTrainingParams({ ...trainingParams, duration: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-300 mb-2">
                {t.sessionLength}: {trainingParams.sessionLength}
              </label>
              <input
                type="range"
                min="30"
                max="180"
                step="15"
                value={trainingParams.sessionLength}
                onChange={(e) => setTrainingParams({ ...trainingParams, sessionLength: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>

            <button
              onClick={handleGenerateTraining}
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 disabled:from-slate-700 disabled:to-slate-700 text-white font-medium rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>{t.generating}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>{t.generateButton}</span>
                </>
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 space-y-6 h-[700px] overflow-y-auto">
          {/* Generator Tab */}
          <div className="space-y-4">
            {/* Factor Selection */}
            <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-white">{t.selectFactors}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={loadFromDiagnostics}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm rounded-lg transition-all flex items-center gap-2"
                    title={t.loadFromDiagnostics}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{t.loadFromDiagnostics}</span>
                  </button>
                  {Object.keys(selectedFactors).length > 0 && (
                    <button
                      onClick={() => setSelectedFactors({})}
                      className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-sm rounded-lg transition-all flex items-center gap-2"
                      title={t.clearFactors}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span>{t.clearFactors}</span>
                    </button>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {factors.map(factor => (
                  <div key={factor} className="bg-slate-800/70 border border-slate-600 rounded p-3">
                    <h4 className="text-white text-sm font-semibold mb-2">{t[factor as keyof typeof t]}</h4>
                    <div className="space-y-1">
                      {factorLevels.map(level => (
                        <label key={level} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFactors[factor] === level}
                            onChange={() => handleFactorChange(factor, level)}
                            className="w-3 h-3 text-blue-600 bg-slate-900 border-slate-600 rounded focus:ring-blue-500"
                          />
                          <span className={`text-xs ${selectedFactors[factor] === level ? 'text-blue-400 font-medium' : 'text-slate-400'}`}>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-3">{t.context}</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">{t.trainingDays}</label>
                    <input
                      type="number"
                      min="1"
                      max="14"
                      value={trainingDaysGen}
                      onChange={(e) => setTrainingDaysGen(Math.max(1, Math.min(14, parseInt(e.target.value) || 7)))}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">{t.basketballTrainings}</label>
                    <input
                      type="number"
                      min="0"
                      max="7"
                      value={basketballTrainingsGen}
                      onChange={(e) => setBasketballTrainingsGen(Math.max(0, Math.min(7, parseInt(e.target.value) || 3)))}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">{t.basketballGames}</label>
                    <input
                      type="number"
                      min="0"
                      max="3"
                      value={basketballGamesGen}
                      onChange={(e) => setBasketballGamesGen(Math.max(0, Math.min(3, parseInt(e.target.value) || 0)))}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-3">{t.season}</h3>
                <div className="space-y-3">
                  <select
                    value={seasonGen}
                    onChange={(e) => setSeasonGen(e.target.value as 'off-season' | 'pre-season' | 'in-season')}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="off-season">{t.offSeason}</option>
                    <option value="pre-season">{t.preSeason}</option>
                    <option value="in-season">{t.inSeason}</option>
                  </select>

                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="basketballAltGen"
                      checked={useBasketballAlternativesGen}
                      onChange={(e) => setUseBasketballAlternativesGen(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 bg-slate-900 border-slate-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="basketballAltGen" className="text-xs text-slate-300">
                      <span className="font-medium">{t.basketballAlternatives}</span>
                      <br />
                      <span className="text-slate-400">{t.basketballAlternativesHelp}</span>
                    </label>
                  </div>

                  <div className="flex items-start gap-2 bg-blue-500/10 border border-blue-500/30 rounded p-2 mt-3">
                    <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-300">
                      {language === 'sr' 
                        ? 'Košarkaške alternative zamenjuju generičke vežbe specifičnim košarkaškim situacijama'
                        : 'Basketball alternatives replace generic exercises with specific basketball situations'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <div className="flex justify-center">
              <button
                onClick={generateTrainingFromFactors}
                disabled={isLoading || Object.keys(selectedFactors).length === 0}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>{t.generating}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>{t.generateTrainingBtn}</span>
                  </>
                )}
              </button>
            </div>

            {/* Training Output */}
            {trainingProgramGen && (
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-xl font-bold text-white mb-3">{t.trainingTitleGen}</h3>
                <div className="text-sm text-slate-300 whitespace-pre-wrap">{trainingProgramGen}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}



