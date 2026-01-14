import { useState, useEffect } from 'react';
import { callGeminiAPI } from '../services/geminiApi';
import { logActivity } from '../services/analyticsService';
import { auth } from '../lib/firebase';

interface DiagnosticTest {
  name: string;
  unit: string;
  description: string;
}

interface DiagnosticsModuleProps {
  language?: 'sr' | 'en';
}

interface AnalysisResult {
  weakPoints: string[];
  correlationInsights: string[];
  priorityGoals: string[];
  summary: string;
}

const translations = {
  sr: {
    title: 'Motorička dijagnostika',
    personalData: 'Lični Podaci',
    bodyweight: 'Težina tela',
    height: 'Visina',
    rhr: 'Puls u miru (RHR)',
    diagnosticTests: 'Dijagnostički testovi',
    save: 'Sačuvaj rezultate',
    saved: 'Sačuvano!',
    sprint5: 'Sprint 5m',
    sprint20: 'Sprint 20m',
    ttest: 'T-Test',
    laneagility: 'Lane Agility Test',
    cmj: 'CMJ (Counter Movement Jump)',
    broadjump: 'Broad Jump',
    bench: 'Bench Press',
    backsquat: 'Back Squat',
    yoyo: 'Yo-Yo IR1 Test',
    yoyohr: 'Puls nakon Yo-Yo testa',
    enterResult: 'Unesi rezultat',
    analyze: 'Analiziraj performanse',
    analyzing: 'Analiziram...',
    generateTraining: 'Generiši trening na osnovu analize',
    generating: 'Generiše trening...',
    analysisTitle: 'Analiza performansi',
    weakPoints: 'Slabe tačke',
    correlations: 'Korelacije i insights',
    priorities: 'Prioriteti za trening',
    trainingTitle: 'Generisan trening program',
    saveAll: 'Sačuvaj sve (testove + analizu + trening)',
    allSaved: 'Sve sačuvano!',
    season: 'Sezona',
    offSeason: 'Off-season (Jun-Septembar)',
    preSeason: 'Preseason (Septembar-Oktobar)',
    inSeason: 'In-season (Oktobar-Maj)',
    basketballAlternatives: 'Koristi košarkaške alternative umesto generičkih vežbi',
    basketballAlternativesHelp: '(Npr. tranzicije umesto sprinteva, defensive slides umesto agilnosti)',
    testingPhase: 'Faza testiranja',
    preseasonTesting: 'Preseason (inicijalno testiranje)',
    midSeasonTesting: 'Mid-season (tranzitno testiranje)',
    offSeasonTesting: 'Off-season (finalno testiranje)',
    levelBeginner: 'Početni',
    levelIntermediate: 'Srednji',
    levelAdvanced: 'Napredni',
    levelElite: 'Elitni',
    performanceLevel: 'Nivo performansi',
    progressionGoals: 'Ciljevi za napredak',
    currentLevel: 'Trenutni nivo',
    targetLevel: 'Ciljni nivo',
    improvement: 'Potrebno poboljšanje',
    maintain: 'Održavaj ovaj nivo'
  },
  en: {
    title: 'Motor Diagnostics',
    personalData: 'Personal Measures',
    bodyweight: 'Body Weight',
    height: 'Height',
    rhr: 'Resting Heart Rate (RHR)',
    diagnosticTests: 'Diagnostic Tests',
    save: 'Save Results',
    saved: 'Saved!',
    sprint5: 'Sprint 5m',
    sprint20: 'Sprint 20m',
    ttest: 'T-Test',
    laneagility: 'Lane Agility Test',
    cmj: 'CMJ (Counter Movement Jump)',
    broadjump: 'Broad Jump',
    bench: 'Bench Press',
    backsquat: 'Back Squat',
    yoyo: 'Yo-Yo IR1 Test',
    yoyohr: 'Peak HR after Yo-Yo',
    enterResult: 'Enter result',
    analyze: 'Analyze Performance',
    analyzing: 'Analyzing...',
    generateTraining: 'Generate Training Based on Analysis',
    generating: 'Generating training...',
    analysisTitle: 'Performance Analysis',
    weakPoints: 'Weak Points',
    correlations: 'Correlations & Insights',
    priorities: 'Training Priorities',
    trainingTitle: 'Generated Training Program',
    saveAll: 'Save All (tests + analysis + training)',
    allSaved: 'Everything saved!',
    season: 'Season',
    offSeason: 'Off-season (June-September)',
    preSeason: 'Preseason (September-October)',
    inSeason: 'In-season (October-May)',
    basketballAlternatives: 'Use basketball-specific alternatives instead of generic exercises',
    basketballAlternativesHelp: '(E.g., transitions instead of sprints, defensive slides instead of agility)',
    testingPhase: 'Testing Phase',
    preseasonTesting: 'Preseason (initial testing)',
    midSeasonTesting: 'Mid-season (transitional testing)',
    offSeasonTesting: 'Off-season (final testing)',
    levelBeginner: 'Beginner',
    levelIntermediate: 'Intermediate',
    levelAdvanced: 'Advanced',
    levelElite: 'Elite',
    performanceLevel: 'Performance Level',
    progressionGoals: 'Progression Goals',
    currentLevel: 'Current Level',
    targetLevel: 'Target Level',
    improvement: 'Required Improvement',
    maintain: 'Maintain this level'
  }
};

export default function DiagnosticsModule({ language = 'sr' }: DiagnosticsModuleProps) {
  const t = translations[language];
  const [personalData, setPersonalData] = useState<{ bodyweight: string; height: string; rhr: string }>({
    bodyweight: '',
    height: '',
    rhr: ''
  });
  const [results, setResults] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [trainingProgram, setTrainingProgram] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [allSaved, setAllSaved] = useState(false);
  const [season, setSeason] = useState<'off-season' | 'pre-season' | 'in-season'>('in-season');
  const [useBasketballAlternatives, setUseBasketballAlternatives] = useState(false);
  const [testingPhase, setTestingPhase] = useState<'preseason' | 'mid-season' | 'off-season'>('preseason');

  // Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem('simbion-pro-diagnostics');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.personalData) setPersonalData(parsed.personalData);
        if (parsed.results) setResults(parsed.results);
        if (parsed.analysis) setAnalysis(parsed.analysis);
        if (parsed.training) setTrainingProgram(parsed.training);
      } catch (e) {
        console.error('Failed to load diagnostics:', e);
      }
    }
  }, []);

  // Auto-save personalData and results whenever they change
  useEffect(() => {
    // Skip auto-save on initial mount (empty data)
    if (Object.keys(personalData).length === 0 && Object.keys(results).length === 0) {
      return;
    }

    const dataToSave = {
      personalData,
      results,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('simbion-pro-diagnostics', JSON.stringify(dataToSave));
  }, [personalData, results]);

  const tests: DiagnosticTest[] = [
    { name: 'sprint5', unit: 's', description: t.sprint5 },
    { name: 'sprint20', unit: 's', description: t.sprint20 },
    { name: 'ttest', unit: 's', description: t.ttest },
    { name: 'laneagility', unit: 's', description: t.laneagility },
    { name: 'cmj', unit: 'cm', description: t.cmj },
    { name: 'broadjump', unit: 'cm', description: t.broadjump },
    { name: 'bench', unit: 'kg', description: t.bench },
    { name: 'backsquat', unit: 'kg', description: t.backsquat },
    { name: 'yoyo', unit: 'm', description: t.yoyo },
    { name: 'yoyohr', unit: 'bpm', description: t.yoyohr }
  ];

  // Normatives for each test (beginner, intermediate, advanced, elite)
  const normatives = {
    sprint5: { elite: 1.05, advanced: 1.15, intermediate: 1.25, beginner: 1.35 },  // Lower is better
    sprint20: { elite: 3.10, advanced: 3.30, intermediate: 3.50, beginner: 3.80 },  // Lower is better
    ttest: { elite: 9.5, advanced: 10.0, intermediate: 10.5, beginner: 11.5 },  // Lower is better
    laneagility: { elite: 11.0, advanced: 11.5, intermediate: 12.0, beginner: 13.0 },  // Lower is better
    cmj: { elite: 50, advanced: 45, intermediate: 40, beginner: 35 },  // Higher is better
    broadjump: { elite: 260, advanced: 240, intermediate: 220, beginner: 200 },  // Higher is better
    bench: { elite: 1.2, advanced: 1.0, intermediate: 0.85, beginner: 0.7 },  // x bodyweight (assuming 80kg)
    backsquat: { elite: 1.8, advanced: 1.5, intermediate: 1.25, beginner: 1.0 },  // x bodyweight
    yoyo: { elite: 2000, advanced: 1600, intermediate: 1200, beginner: 800 }  // Higher is better
  };

  // Function to determine performance level
  const getPerformanceLevel = (testName: string, value: number): string => {
    const norms = normatives[testName as keyof typeof normatives];
    if (!norms) return t.levelBeginner;

    // For tests where lower is better (sprints, agility)
    if (['sprint5', 'sprint20', 'ttest', 'laneagility'].includes(testName)) {
      if (value <= norms.elite) return t.levelElite;
      if (value <= norms.advanced) return t.levelAdvanced;
      if (value <= norms.intermediate) return t.levelIntermediate;
      return t.levelBeginner;
    }
    
    // For tests where higher is better (jumps, strength, endurance)
    if (testName === 'bench' || testName === 'backsquat') {
      // For strength tests, assume 80kg bodyweight
      const relative = value / 80;
      if (relative >= norms.elite) return t.levelElite;
      if (relative >= norms.advanced) return t.levelAdvanced;
      if (relative >= norms.intermediate) return t.levelIntermediate;
      return t.levelBeginner;
    }
    
    if (value >= norms.elite) return t.levelElite;
    if (value >= norms.advanced) return t.levelAdvanced;
    if (value >= norms.intermediate) return t.levelIntermediate;
    return t.levelBeginner;
  };

  // Function to get target level and improvement needed
  const getProgressionTarget = (testName: string, value: number, currentLevel: string): { 
    targetLevel: string; 
    targetValue: number; 
    improvement: string;
    isElite: boolean;
  } => {
    const norms = normatives[testName as keyof typeof normatives];
    if (!norms) return { targetLevel: t.levelElite, targetValue: 0, improvement: '', isElite: false };

    const isLowerBetter = ['sprint5', 'sprint20', 'ttest', 'laneagility'].includes(testName);
    const isStrength = ['bench', 'backsquat'].includes(testName);

    // If already elite, maintain
    if (currentLevel === t.levelElite) {
      return { 
        targetLevel: t.levelElite, 
        targetValue: norms.elite, 
        improvement: t.maintain,
        isElite: true
      };
    }

    // Determine next target level
    let targetLevel: string;
    let targetValue: number;
    
    if (currentLevel === t.levelBeginner) {
      targetLevel = t.levelIntermediate;
      targetValue = norms.intermediate;
    } else if (currentLevel === t.levelIntermediate) {
      targetLevel = t.levelAdvanced;
      targetValue = norms.advanced;
    } else if (currentLevel === t.levelAdvanced) {
      targetLevel = t.levelElite;
      targetValue = norms.elite;
    } else {
      targetLevel = t.levelIntermediate;
      targetValue = norms.intermediate;
    }

    // Calculate improvement needed
    let improvement: string;
    if (isStrength) {
      const relativeValue = value / 80;  // Assuming 80kg bodyweight
      const diff = targetValue - relativeValue;
      const absoluteDiff = diff * 80;
      improvement = absoluteDiff > 0 ? `+${absoluteDiff.toFixed(1)}kg` : `${absoluteDiff.toFixed(1)}kg`;
    } else if (isLowerBetter) {
      const diff = value - targetValue;
      improvement = diff > 0 ? `-${diff.toFixed(2)}s` : `${diff.toFixed(2)}s`;
    } else {
      const diff = targetValue - value;
      improvement = diff > 0 ? `+${diff.toFixed(0)}${testName === 'yoyo' ? 'm' : 'cm'}` : `${diff.toFixed(0)}${testName === 'yoyo' ? 'm' : 'cm'}`;
    }

    return { targetLevel, targetValue, improvement, isElite: false };
  };

  const handlePersonalDataChange = (field: string, value: string) => {
    setPersonalData(prev => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleResultChange = (testName: string, value: string) => {
    setResults(prev => ({ ...prev, [testName]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    const dataToSave = {
      personalData,
      results,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('simbion-pro-diagnostics', JSON.stringify(dataToSave));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const analyzePerformance = async () => {
    // Provera personalData (3 polja)
    if (!personalData.bodyweight || !personalData.height || !personalData.rhr) {
      alert(language === 'sr' 
        ? 'Molim vas unesite sve lične podatke (težina, visina, puls)' 
        : 'Please enter all personal data (bodyweight, height, RHR)');
      return;
    }

    // Provera testova (10 testova)
    if (Object.keys(results).length < 10) {
      alert(language === 'sr' ? 'Molim vas unesite sve rezultate testova' : 'Please enter all test results');
      return;
    }

    setIsAnalyzing(true);
    
    try {
      const sprint5 = parseFloat(results.sprint5);
      const sprint20 = parseFloat(results.sprint20);
      const ttest = parseFloat(results.ttest);
      const laneagility = parseFloat(results.laneagility);
      const cmj = parseFloat(results.cmj);
      const broadjump = parseFloat(results.broadjump);
      const bench = parseFloat(results.bench);
      const backsquat = parseFloat(results.backsquat);
      const yoyo = parseFloat(results.yoyo);

      const weakPoints: string[] = [];
      const correlationInsights: string[] = [];
      const priorityGoals: string[] = [];
      const progressionGoals: string[] = [];  // NEW: Progression goals array

      // Analyze each test with performance levels and progression targets
      const sprint5Level = getPerformanceLevel('sprint5', sprint5);
      const sprint5Target = getProgressionTarget('sprint5', sprint5, sprint5Level);
      if (sprint5 > normatives.sprint5.elite) {
        weakPoints.push(language === 'sr' 
          ? `Sprint 5m: ${sprint5}s [${sprint5Level}] (elit: <${normatives.sprint5.elite}s) - Slaba startna brzina/akceleracija`
          : `Sprint 5m: ${sprint5}s [${sprint5Level}] (elite: <${normatives.sprint5.elite}s) - Weak start speed/acceleration`);
        priorityGoals.push(language === 'sr' ? 'Startna snaga i akceleracija' : 'Starting strength and acceleration');
      }
      if (!sprint5Target.isElite) {
        progressionGoals.push(language === 'sr'
          ? `Sprint 5m: ${sprint5Level} → ${sprint5Target.targetLevel} (${sprint5Target.improvement})`
          : `Sprint 5m: ${sprint5Level} → ${sprint5Target.targetLevel} (${sprint5Target.improvement})`);
      }

      const sprint20Level = getPerformanceLevel('sprint20', sprint20);
      const sprint20Target = getProgressionTarget('sprint20', sprint20, sprint20Level);
      if (sprint20 > normatives.sprint20.elite) {
        weakPoints.push(language === 'sr'
          ? `Sprint 20m: ${sprint20}s [${sprint20Level}] (elit: <${normatives.sprint20.elite}s) - Nedovoljna brzina + snaga nogu`
          : `Sprint 20m: ${sprint20}s [${sprint20Level}] (elite: <${normatives.sprint20.elite}s) - Insufficient speed + leg strength`);
        priorityGoals.push(language === 'sr' ? 'Eksplozivna snaga i brzina' : 'Explosive power and speed');
      }
      if (!sprint20Target.isElite) {
        progressionGoals.push(language === 'sr'
          ? `Sprint 20m: ${sprint20Level} → ${sprint20Target.targetLevel} (${sprint20Target.improvement})`
          : `Sprint 20m: ${sprint20Level} → ${sprint20Target.targetLevel} (${sprint20Target.improvement})`);
      }

      const ttestLevel = getPerformanceLevel('ttest', ttest);
      const ttestTarget = getProgressionTarget('ttest', ttest, ttestLevel);
      if (ttest > normatives.ttest.elite) {
        weakPoints.push(language === 'sr'
          ? `T-Test: ${ttest}s [${ttestLevel}] (elit: <${normatives.ttest.elite}s) - Slaba agilnost (COD)`
          : `T-Test: ${ttest}s [${ttestLevel}] (elite: <${normatives.ttest.elite}s) - Weak agility (COD)`);
        priorityGoals.push(language === 'sr' ? 'Change of Direction agilnost' : 'Change of Direction agility');
      }
      if (!ttestTarget.isElite) {
        progressionGoals.push(language === 'sr'
          ? `T-Test: ${ttestLevel} → ${ttestTarget.targetLevel} (${ttestTarget.improvement})`
          : `T-Test: ${ttestLevel} → ${ttestTarget.targetLevel} (${ttestTarget.improvement})`);
      }

      const laneagilityLevel = getPerformanceLevel('laneagility', laneagility);
      const laneagilityTarget = getProgressionTarget('laneagility', laneagility, laneagilityLevel);
      if (laneagility > normatives.laneagility.elite) {
        weakPoints.push(language === 'sr'
          ? `Lane Agility: ${laneagility}s [${laneagilityLevel}] (elit: <${normatives.laneagility.elite}s) - Slaba defensive agilnost`
          : `Lane Agility: ${laneagility}s [${laneagilityLevel}] (elite: <${normatives.laneagility.elite}s) - Weak defensive agility`);
        priorityGoals.push(language === 'sr' ? 'Defensive agilnost' : 'Defensive agility');
      }
      if (!laneagilityTarget.isElite) {
        progressionGoals.push(language === 'sr'
          ? `Lane Agility: ${laneagilityLevel} → ${laneagilityTarget.targetLevel} (${laneagilityTarget.improvement})`
          : `Lane Agility: ${laneagilityLevel} → ${laneagilityTarget.targetLevel} (${laneagilityTarget.improvement})`);
      }

      const cmjLevel = getPerformanceLevel('cmj', cmj);
      const cmjTarget = getProgressionTarget('cmj', cmj, cmjLevel);
      if (cmj < normatives.cmj.elite) {
        weakPoints.push(language === 'sr'
          ? `CMJ: ${cmj}cm [${cmjLevel}] (elit: >${normatives.cmj.elite}cm) - Nedovoljna eksplozivnost sa SSC`
          : `CMJ: ${cmj}cm [${cmjLevel}] (elite: >${normatives.cmj.elite}cm) - Insufficient explosiveness with SSC`);
        priorityGoals.push(language === 'sr' ? 'Eksplozivna snaga (SSC)' : 'Explosive power (SSC)');
      }
      if (!cmjTarget.isElite) {
        progressionGoals.push(language === 'sr'
          ? `CMJ: ${cmjLevel} → ${cmjTarget.targetLevel} (${cmjTarget.improvement})`
          : `CMJ: ${cmjLevel} → ${cmjTarget.targetLevel} (${cmjTarget.improvement})`);
      }

      const broadjumpLevel = getPerformanceLevel('broadjump', broadjump);
      const broadjumpTarget = getProgressionTarget('broadjump', broadjump, broadjumpLevel);
      if (broadjump < normatives.broadjump.elite) {
        weakPoints.push(language === 'sr'
          ? `Broad Jump: ${broadjump}cm [${broadjumpLevel}] (elit: >${normatives.broadjump.elite}cm) - Slaba horizontalna snaga`
          : `Broad Jump: ${broadjump}cm [${broadjumpLevel}] (elite: >${normatives.broadjump.elite}cm) - Weak horizontal power`);
        priorityGoals.push(language === 'sr' ? 'Horizontalna snaga' : 'Horizontal power');
      }
      if (!broadjumpTarget.isElite) {
        progressionGoals.push(language === 'sr'
          ? `Broad Jump: ${broadjumpLevel} → ${broadjumpTarget.targetLevel} (${broadjumpTarget.improvement})`
          : `Broad Jump: ${broadjumpLevel} → ${broadjumpTarget.targetLevel} (${broadjumpTarget.improvement})`);
      }

      const benchLevel = getPerformanceLevel('bench', bench);
      const benchTarget = getProgressionTarget('bench', bench, benchLevel);
      if (bench < normatives.bench.elite * 80) {  // Assuming 80kg bodyweight placeholder
        weakPoints.push(language === 'sr'
          ? `Bench Press: ${bench}kg [${benchLevel}] (elit: >${(normatives.bench.elite * 80).toFixed(0)}kg za 80kg igrača) - Slaba gornja snaga`
          : `Bench Press: ${bench}kg [${benchLevel}] (elite: >${(normatives.bench.elite * 80).toFixed(0)}kg for 80kg player) - Weak upper body strength`);
        priorityGoals.push(language === 'sr' ? 'Gornja snaga' : 'Upper body strength');
      }
      if (!benchTarget.isElite) {
        progressionGoals.push(language === 'sr'
          ? `Bench Press: ${benchLevel} → ${benchTarget.targetLevel} (${benchTarget.improvement})`
          : `Bench Press: ${benchLevel} → ${benchTarget.targetLevel} (${benchTarget.improvement})`);
      }

      const backsquatLevel = getPerformanceLevel('backsquat', backsquat);
      const backsquatTarget = getProgressionTarget('backsquat', backsquat, backsquatLevel);
      if (backsquat < normatives.backsquat.elite * 80) {  // Assuming 80kg bodyweight placeholder
        weakPoints.push(language === 'sr'
          ? `Back Squat: ${backsquat}kg [${backsquatLevel}] (elit: >${(normatives.backsquat.elite * 80).toFixed(0)}kg za 80kg igrača) - Slaba donja snaga`
          : `Back Squat: ${backsquat}kg [${backsquatLevel}] (elite: >${(normatives.backsquat.elite * 80).toFixed(0)}kg for 80kg player) - Weak lower body strength`);
        priorityGoals.push(language === 'sr' ? 'Maksimalna snaga nogu' : 'Maximum leg strength');
      }
      if (!backsquatTarget.isElite) {
        progressionGoals.push(language === 'sr'
          ? `Back Squat: ${backsquatLevel} → ${backsquatTarget.targetLevel} (${backsquatTarget.improvement})`
          : `Back Squat: ${backsquatLevel} → ${backsquatTarget.targetLevel} (${backsquatTarget.improvement})`);
      }

      const yoyoLevel = getPerformanceLevel('yoyo', yoyo);
      const yoyoTarget = getProgressionTarget('yoyo', yoyo, yoyoLevel);
      if (yoyo < normatives.yoyo.elite) {
        weakPoints.push(language === 'sr'
          ? `Yo-Yo IR1: ${yoyo}m [${yoyoLevel}] (elit: >${normatives.yoyo.elite}m) - Nedovoljna intermitentna izdržljivost`
          : `Yo-Yo IR1: ${yoyo}m [${yoyoLevel}] (elite: >${normatives.yoyo.elite}m) - Insufficient intermittent endurance`);
        priorityGoals.push(language === 'sr' ? 'Intermitentna izdržljivost' : 'Intermittent endurance');
      }
      if (!yoyoTarget.isElite) {
        progressionGoals.push(language === 'sr'
          ? `Yo-Yo IR1: ${yoyoLevel} → ${yoyoTarget.targetLevel} (${yoyoTarget.improvement})`
          : `Yo-Yo IR1: ${yoyoLevel} → ${yoyoTarget.targetLevel} (${yoyoTarget.improvement})`);
      }

      // Performance level summary
      correlationInsights.push(language === 'sr' 
        ? `📊 Nivoi: Sprint5[${sprint5Level}] Sprint20[${sprint20Level}] T-Test[${ttestLevel}] Lane[${laneagilityLevel}] CMJ[${cmjLevel}] Broad[${broadjumpLevel}] Bench[${benchLevel}] Squat[${backsquatLevel}] YoYo[${yoyoLevel}]`
        : `📊 Levels: Sprint5[${sprint5Level}] Sprint20[${sprint20Level}] T-Test[${ttestLevel}] Lane[${laneagilityLevel}] CMJ[${cmjLevel}] Broad[${broadjumpLevel}] Bench[${benchLevel}] Squat[${backsquatLevel}] YoYo[${yoyoLevel}]`);

      // Correlation insights based on new tests
      
      // Correlation 1: CMJ vs Sprint (explosiveness r=0.82)
      if (cmj < normatives.cmj.elite && sprint20 > normatives.sprint20.elite) {
        correlationInsights.push(language === 'sr'
          ? 'Korelacija (r=0.82): Nizak CMJ + slab sprint 20m → deficit eksplozivne snage nogu. Prioritet: pliometrija + strength.'
          : 'Correlation (r=0.82): Low CMJ + weak 20m sprint → explosive leg power deficit. Priority: plyometrics + strength.');
      }

      // Correlation 2: Agility vs Strength (r=0.75)
      if ((ttest > normatives.ttest.elite || laneagility > normatives.laneagility.elite) && backsquat < normatives.backsquat.elite * 80) {
        correlationInsights.push(language === 'sr'
          ? 'Korelacija (r=0.75): Slaba agilnost + nizak Back Squat → nedovoljna baza snage za brze promene pravca. Prioritet: maksimalna snaga.'
          : 'Correlation (r=0.75): Weak agility + low Back Squat → insufficient strength base for quick direction changes. Priority: maximal strength.');
      }

      // Correlation 3: CMJ vs Broad Jump (horizontal vs vertical power)
      const cmjBroadRatio = cmj / (broadjump / 5);  // Normalize broad jump (divide by 5 to get similar scale)
      if (cmjBroadRatio > 1.2) {
        correlationInsights.push(language === 'sr'
          ? `CMJ/Broad ratio: ${cmjBroadRatio.toFixed(2)} - Vertikalna snaga dominira. Dodati horizontalne explosive vežbe (bounds, sprints).`
          : `CMJ/Broad ratio: ${cmjBroadRatio.toFixed(2)} - Vertical power dominates. Add horizontal explosive exercises (bounds, sprints).`);
      } else if (cmjBroadRatio < 0.8) {
        correlationInsights.push(language === 'sr'
          ? `CMJ/Broad ratio: ${cmjBroadRatio.toFixed(2)} - Horizontalna snaga dominira. Dodati vertikalne explosive vežbe (depth jumps, box jumps).`
          : `CMJ/Broad ratio: ${cmjBroadRatio.toFixed(2)} - Horizontal power dominates. Add vertical explosive exercises (depth jumps, box jumps).`);
      }

      // Correlation 4: Sprint 5m vs Back Squat (starting strength r=0.78)
      if (sprint5 > normatives.sprint5.elite && backsquat < normatives.backsquat.elite * 80) {
        correlationInsights.push(language === 'sr'
          ? 'Korelacija (r=0.78): Slab sprint 5m + nizak Back Squat → deficit startne snage. Potreban heavy strength training (<5 reps).'
          : 'Correlation (r=0.78): Weak 5m sprint + low Back Squat → starting strength deficit. Need heavy strength training (<5 reps).');
      }

      // Correlation 5: Yo-Yo vs Speed endurance
      if (yoyo < normatives.yoyo.elite && (sprint20 > normatives.sprint20.elite || ttest > normatives.ttest.elite)) {
        correlationInsights.push(language === 'sr'
          ? 'Korelacija: Nizak Yo-Yo + slabi sprint/agilnost testovi → nedovoljna speed endurance. Dodati repeated sprint ability (RSA) treninge.'
          : 'Correlation: Low Yo-Yo + weak sprint/agility tests → insufficient speed endurance. Add repeated sprint ability (RSA) training.');
        priorityGoals.push(language === 'sr' ? 'Speed endurance' : 'Speed endurance');
      }

      // Correlation 6: Upper vs Lower body strength balance
      const upperLowerRatio = bench / backsquat;
      if (upperLowerRatio < 0.6) {
        correlationInsights.push(language === 'sr'
          ? `Upper/Lower ratio: ${upperLowerRatio.toFixed(2)} - Gornja snaga zaostaje. Fokus na bench press i horizontal push/pull.`
          : `Upper/Lower ratio: ${upperLowerRatio.toFixed(2)} - Upper body strength lagging. Focus on bench press and horizontal push/pull.`);
      } else if (upperLowerRatio > 0.8) {
        correlationInsights.push(language === 'sr'
          ? `Upper/Lower ratio: ${upperLowerRatio.toFixed(2)} - Donja snaga zaostaje. Fokus na squat i explosive lower body work.`
          : `Upper/Lower ratio: ${upperLowerRatio.toFixed(2)} - Lower body strength lagging. Focus on squat and explosive lower body work.`);
      }

      // 🔥 NOVI DEO: Automatsko pronalaženje korelacija iz matrice između slabih faktora
      const weakFactors: Set<string> = new Set();
      
      // Identifikuj sve slabe faktore iz testova
      if (sprint5 > normatives.sprint5.elite || sprint20 > normatives.sprint20.elite) {
        weakFactors.add('Brzina (Sprint 5-20m)');
      }
      if (ttest > normatives.ttest.elite || laneagility > normatives.laneagility.elite) {
        weakFactors.add('Agilnost (T-Test, Lane Agility)');
      }
      if (cmj < normatives.cmj.elite || broadjump < normatives.broadjump.elite) {
        weakFactors.add('Eksplozivnost (CMJ, Broad Jump)');
      }
      if (backsquat < normatives.backsquat.elite * 80 || bench < normatives.bench.elite * 80) {
        weakFactors.add('Snaga (Bench, Squat)');
      }
      if (yoyo < normatives.yoyo.elite) {
        weakFactors.add('Izdržljivost (YoYo IR1)');
      }
      
      // Remove duplicates and prioritize
      const uniquePriorities = Array.from(new Set(priorityGoals));
      
      // Add progression goals section to correlationInsights
      if (progressionGoals.length > 0) {
        correlationInsights.unshift(language === 'sr' 
          ? `🎯 ${t.progressionGoals}:\n${progressionGoals.join('\n')}`
          : `🎯 ${t.progressionGoals}:\n${progressionGoals.join('\n')}`);
      }
      
      const summary = language === 'sr'
        ? `Analiza ${Object.keys(results).length} testova: ${weakPoints.length} slaba područja, ${progressionGoals.length} ciljeva za napredak. CMJ: ${cmj}cm[${cmjLevel}], Broad: ${broadjump}cm[${broadjumpLevel}], Squat: ${backsquat}kg[${backsquatLevel}]. Top 3 prioriteta: ${uniquePriorities.slice(0, 3).join(', ')}.`
        : `Analysis of ${Object.keys(results).length} tests: ${weakPoints.length} weak areas, ${progressionGoals.length} progression goals. CMJ: ${cmj}cm[${cmjLevel}], Broad: ${broadjump}cm[${broadjumpLevel}], Squat: ${backsquat}kg[${backsquatLevel}]. Top 3 priorities: ${uniquePriorities.slice(0, 3).join(', ')}.`;

      const analysisResult: AnalysisResult = {
        weakPoints,
        correlationInsights,
        priorityGoals: uniquePriorities,
        summary
      };

      setAnalysis(analysisResult);
    } catch (error) {
      console.error('Analysis error:', error);
      alert(language === 'sr' ? 'Greška pri analizi' : 'Analysis error');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearAnalysis = () => {
    setAnalysis(null);
    setTrainingProgram('');
  };

  const generateTraining = async () => {
    if (!analysis) {
      alert(language === 'sr' ? 'Prvo analizirajte performanse' : 'Analyze performance first');
      return;
    }

    setIsGenerating(true);
    
    try {
      // Izdvoj matrix korelacije (one sa 🔗 MATRIX: prefiksom)
      const matrixCorrelations = analysis.correlationInsights.filter(c => c.includes('🔗 MATRIX:'));
      const regularCorrelations = analysis.correlationInsights.filter(c => !c.includes('🔗 MATRIX:'));

      // Sezonski kontekst
      const seasonContext = language === 'sr'
        ? `\n🏀 SEZONSKI KONTEKST: ${season === 'off-season' ? 'OFF-SEASON (max razvojni trening)' : season === 'pre-season' ? 'PRESEASON (priprema, 60% košarka 40% fitness)' : 'IN-SEASON (80% košarka, 20% održavanje)'}`
        : `\n🏀 SEASON CONTEXT: ${season === 'off-season' ? 'OFF-SEASON (max developmental training)' : season === 'pre-season' ? 'PRESEASON (preparation, 60% basketball 40% fitness)' : 'IN-SEASON (80% basketball, 20% maintenance)'}`;

      // Faza testiranja kontekst
      const testingPhaseContext = language === 'sr'
        ? `\n📋 FAZA TESTIRANJA: ${testingPhase === 'preseason' ? 'PRESEASON INICIJALNO TESTIRANJE - Početak razvojnog ciklusa! Visok volumen treninga, fokus na izgradnju baznih kapaciteta, manje opterećenje natpodnanim' : testingPhase === 'mid-season' ? 'MID-SEASON TRANZITNO TESTIRANJE - Održavanje forme! Umeren volumen, korekcije slabosti, balans između košarke i fitnessa' : 'OFF-SEASON FINALNO TESTIRANJE - Regeneracija i reset! Nizak volumen, priprema za off-season, prevencija povreda'}`
        : `\n📋 TESTING PHASE: ${testingPhase === 'preseason' ? 'PRESEASON INITIAL TESTING - Start of development cycle! High training volume, focus on building base capacities, lower competitive load' : testingPhase === 'mid-season' ? 'MID-SEASON TRANSITIONAL TESTING - Maintain form! Moderate volume, weakness corrections, balance between basketball and fitness' : 'OFF-SEASON FINAL TESTING - Regeneration and reset! Low volume, off-season prep, injury prevention'}`;

      // Košarkaške alternative mapiranje
      const basketballAlternativesText = useBasketballAlternatives 
        ? (language === 'sr'
          ? `\n\n🏀 KOŠARKAŠKE ALTERNATIVE (OBAVEZNO KORISTITI):
**UMESTO GENERIČKIH VEŽBI, KORISTI:**

BRZINA/AKCELERACIJA:
❌ NE: Sprint 30m pravolinijski
✅ DA: Fast break transitions (full court 3-on-2, 2-on-1)
✅ DA: Closeout sprints (defensive reaction to shooter)
✅ DA: Transition defense sprints (sprint back + contest shot)

AGILNOST/COD:
❌ NE: T-Test, Pro-Agility drill
✅ DA: Defensive shell drills (zig-zag slides with directional changes)
✅ DA: 1-on-1 full court (attacker + defender)
✅ DA: Mikan drill sa rotation (layup series sa promenama pravca)

EKSPLOZIVNOST:
❌ NE: Box jumps, depth jumps
✅ DA: Rebound battle drills (contested boards + putback)
✅ DA: Shot contest series (explosive closeout + vertical jump)
✅ DA: Post-up explosion drills (seal + power move)

REAKTIVNOST:
❌ NE: Reaktivni plyo drills
✅ DA: Defensive reaction drills (help-side rotations)
✅ DA: Loose ball scramble (50/50 balls)
✅ DA: Screen navigation drills (navigating picks)

IZDRŽLJIVOST:
❌ NE: Yo-Yo test, shuttle runs
✅ DA: Full court small-sided games (3v3, 4v4 continuous)
✅ DA: Defensive possession series (multiple stops without rest)
✅ DA: Transition conditioning (alternating offense/defense)

📌 VAŽNO: ${season === 'in-season' ? 'IN-SEASON - prioritet košarkaške specifičnosti! 80% vežbi mora biti sa loptom.' : season === 'pre-season' ? 'PRESEASON - kombinuj 50/50 generičke + specifične.' : 'OFF-SEASON - možeš koristiti više generičkih, ali još uvek uključi specifične.'}`
          : `\n\n🏀 BASKETBALL ALTERNATIVES (MANDATORY):
**INSTEAD OF GENERIC EXERCISES, USE:**

SPEED/ACCELERATION:
❌ NO: 30m straight sprint
✅ YES: Fast break transitions (full court 3-on-2, 2-on-1)
✅ YES: Closeout sprints (defensive reaction to shooter)
✅ YES: Transition defense sprints (sprint back + contest shot)

AGILITY/COD:
❌ NO: T-Test, Pro-Agility drill
✅ YES: Defensive shell drills (zig-zag slides with directional changes)
✅ YES: 1-on-1 full court (attacker + defender)
✅ YES: Mikan drill with rotation

EXPLOSIVENESS:
❌ NO: Box jumps, depth jumps
✅ YES: Rebound battle drills (contested boards + putback)
✅ YES: Shot contest series (explosive closeout + vertical jump)
✅ YES: Post-up explosion drills (seal + power move)

REACTIVITY:
❌ NO: Reactive plyo drills
✅ YES: Defensive reaction drills (help-side rotations)
✅ YES: Loose ball scramble (50/50 balls)
✅ YES: Screen navigation drills

ENDURANCE:
❌ NO: Yo-Yo test, shuttle runs
✅ YES: Full court small-sided games (3v3, 4v4 continuous)
✅ YES: Defensive possession series (multiple stops without rest)
✅ YES: Transition conditioning

📌 IMPORTANT: ${season === 'in-season' ? 'IN-SEASON - basketball specificity priority! 80% exercises must involve the ball.' : season === 'pre-season' ? 'PRESEASON - combine 50/50 generic + specific.' : 'OFF-SEASON - can use more generic, but still include specific.'}`)
        : '';

      const prompt = language === 'sr'
        ? `Ti si AI SIMBION trener za košarku. Kreiraj 7-dnevni mikrociklus treninga za profesionalnog košarkaša na osnovu dijagnostičke analize:
${seasonContext}
${testingPhaseContext}
${basketballAlternativesText}

📊 DIJAGNOSTIČKI NALAZI:

SLABE TAČKE (${analysis.weakPoints.length}):
${analysis.weakPoints.join('\n')}

KORELACIONI INSIGHTS - Test bazirana analiza (${regularCorrelations.length}):
${regularCorrelations.join('\n')}

🔗 MATRICNE KORELACIJE - Naučno validisane korelacije između faktora (${matrixCorrelations.length}):
${matrixCorrelations.join('\n')}

⚠️ KRITIČNO: Matricne korelacije su OBAVEZNE za poštovanje! Ovo su validisani fizički zakoni, ne preporuke.
- Pozitivna korelacija (++/+): Trening jednog faktora DIREKTNO poboljšava drugi. Prioritet oba!
- Negativna korelacija (–/––): Trening jednog SMANJUJE drugi. RAZDVOJ >6h ili različiti dani!
- Interference effect primer: Snaga + Izdržljivost = negativna korelacija. NE KOMBINOVATI istog dana!

PRIORITETI TRENINGA (redosled važnosti):
${analysis.priorityGoals.slice(0, 5).map((goal, idx) => `${idx + 1}. ${goal}`).join('\n')}

🎯 TVOJ ZADATAK:
- Kreiraj strukturiran 7-dnevni mikrociklus (pondeljak-nedelja)
- POŠTUJ matricne korelacije: ako vidiš negativnu, OBAVEZNO razdvoj treninge
- Ako vidiš pozitivnu korelaciju, KOMBINUJ u istoj sesiji za sinergijski efekat
- OBAVEZAN koncentric emphasis (3-5 reps @ 85-95% 1RM) ako je SJ slab
- OBAVEZNA reaktivna pliometrija (depth jumps, hurdle hops) ako je RSI nizak
- Dodaj specifične upute za oporavak između sesija
${useBasketballAlternatives ? '- OBAVEZNO koristi KOŠARKAŠKE ALTERNATIVE iz tabele iznad umesto generičkih vežbi!' : ''}

📝 FORMAT (OBAVEZAN):
**PONEDELJAK (Dan 1):** [Glavni fokus]
- [Vežba 1]: setovi×reps, opterećenje, pauze
- [Vežba 2]: ...
⚠️ Korelaciona napomena: [npr. "Snaga+Brzina pozitivna korelacija - sinergija!" ili "Snaga trening AM, izdržljivost ZABRANJEN istog dana"]

**UTORAK (Dan 2):** ...
[nastavi za sve dane]

**NAPOMENE:**
- Nutricija: [preporuke za oporavak]
- Suplementacija: [kreatin, protein timing ako relevant]
- Red flags: [kada odmor/deload]
- Korelacioni saveti: [kako održati balans između pozitivnih/negativnih korelacija]`
        : `You are AI SIMBION basketball coach. Create a 7-day microcycle for a professional basketball player based on diagnostic analysis:
${seasonContext}
${testingPhaseContext}
${basketballAlternativesText}

📊 DIAGNOSTIC FINDINGS:

WEAK AREAS (${analysis.weakPoints.length}):
${analysis.weakPoints.join('\n')}

CORRELATION INSIGHTS - Test-based analysis (${regularCorrelations.length}):
${regularCorrelations.join('\n')}

🔗 MATRIX CORRELATIONS - Scientifically validated factor correlations (${matrixCorrelations.length}):
${matrixCorrelations.join('\n')}

⚠️ CRITICAL: Matrix correlations are MANDATORY! These are validated physical laws, not suggestions.
- Positive correlation (++/+): Training one factor DIRECTLY improves the other. Prioritize both!
- Negative correlation (–/––): Training one REDUCES the other. SEPARATE >6h or different days!
- Interference effect example: Strength + Endurance = negative correlation. DO NOT COMBINE same day!

TRAINING PRIORITIES (importance order):
${analysis.priorityGoals.slice(0, 5).map((goal, idx) => `${idx + 1}. ${goal}`).join('\n')}

🎯 YOUR TASK:
- Create structured 7-day microcycle (Monday-Sunday)
- RESPECT matrix correlations: if negative, MUST separate trainings
- If positive correlation, COMBINE in same session for synergy
- MANDATORY concentric emphasis (3-5 reps @ 85-95% 1RM) if SJ is weak
- MANDATORY reactive plyometrics (depth jumps, hurdle hops) if RSI is low
- Add specific recovery guidelines between sessions
${useBasketballAlternatives ? '- MANDATORY: Use BASKETBALL ALTERNATIVES from table above instead of generic exercises!' : ''}

📝 FORMAT (MANDATORY):
**MONDAY (Day 1):** [Main focus]
- [Exercise 1]: sets×reps, load, rest
- [Exercise 2]: ...
⚠️ Correlation note: [e.g., "Strength+Speed positive correlation - synergy!" or "Strength AM, endurance FORBIDDEN same day"]

**TUESDAY (Day 2):** ...
[continue for all days]

**NOTES:**
- Nutrition: [recovery recommendations]
- Supplementation: [creatine, protein timing if relevant]
- Red flags: [when rest/deload]
- Correlation advice: [how to balance positive/negative correlations]`;

      const response = await callGeminiAPI(prompt, [], language);
      
      // Log activity
      const user = auth.currentUser;
      if (user) {
        const responseSource = response.length > 1000 ? 'agent' : 'database';
        const validResults = Array.isArray(results) ? results.filter((r: any) => r.value > 0).length : 0;
        await logActivity(user.uid, user.email || '', 'diagnostics', 'Training program generated', responseSource, {
          numberOfResults: validResults,
          responseLength: response.length,
        });
      }
      
      setTrainingProgram(response);
    } catch (error) {
      console.error('Training generation error:', error);
      alert(language === 'sr' ? 'Greška pri generisanju treninga' : 'Training generation error');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveAll = () => {
    const completeData = {
      personalData,
      results,
      analysis,
      training: trainingProgram,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('simbion-pro-diagnostics', JSON.stringify(completeData));
    setAllSaved(true);
    setTimeout(() => setAllSaved(false), 2000);
  };

  return (
    <div className="space-y-6 relative">
      {/* Floating Clear Button */}
      {analysis && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={clearAnalysis}
            className="px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-full font-medium shadow-2xl shadow-red-500/50 transition-all flex items-center gap-2 hover:scale-105"
            title={language === 'sr' ? 'Obriši analizu' : 'Clear analysis'}
          >
            <span className="text-xl">🗑️</span>
            <span>{language === 'sr' ? 'Obriši' : 'Clear'}</span>
          </button>
        </div>
      )}
      
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{t.title}</h2>
        <button
          onClick={handleSave}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            saved
              ? 'bg-green-600 text-white'
              : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white'
          }`}
        >
          {saved ? t.saved : t.save}
        </button>
      </div>

      {/* Personal Data Section */}
      <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>👤</span>
          <span>{t.personalData}</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-amber-300">⚖️ {t.bodyweight}</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="0.1"
                value={personalData.bodyweight}
                onChange={(e) => handlePersonalDataChange('bodyweight', e.target.value)}
                placeholder="75"
                className="flex-1 px-3 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <span className="text-slate-400 text-sm font-medium">kg</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-amber-300">📏 {t.height}</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="1"
                value={personalData.height}
                onChange={(e) => handlePersonalDataChange('height', e.target.value)}
                placeholder="185"
                className="flex-1 px-3 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <span className="text-slate-400 text-sm font-medium">cm</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-amber-300">❤️ {t.rhr}</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="1"
                value={personalData.rhr}
                onChange={(e) => handlePersonalDataChange('rhr', e.target.value)}
                placeholder="60"
                className="flex-1 px-3 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <span className="text-slate-400 text-sm font-medium">bpm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Diagnostic Tests Section */}
      <div className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>🏃</span>
          <span>{t.diagnosticTests}</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tests.map((test) => (
            <div
              key={test.name}
              className="bg-slate-700/70 border border-blue-500/30 rounded-lg p-4 hover:border-blue-500/50 transition-all"
            >
              <div className="space-y-3">
                <h3 className="font-semibold text-white">{test.description}</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="0.01"
                    value={results[test.name] || ''}
                    onChange={(e) => handleResultChange(test.name, e.target.value)}
                    placeholder={t.enterResult}
                    className="flex-1 px-3 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="text-slate-400 text-sm font-medium">{test.unit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analyze Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={analyzePerformance}
          disabled={isAnalyzing || !personalData.bodyweight || !personalData.height || !personalData.rhr || Object.keys(results).length < 10}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isAnalyzing ? t.analyzing : t.analyze}
        </button>
      </div>

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-6 mt-8">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">{t.analysisTitle}</h3>
            <p className="text-slate-300 mb-4">{analysis.summary}</p>
            
            {/* Weak Points */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-red-400 mb-2">{t.weakPoints}</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                {analysis.weakPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Correlation Insights */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-yellow-400 mb-2">{t.correlations}</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                {analysis.correlationInsights.map((insight, idx) => (
                  <li key={idx}>{insight}</li>
                ))}
              </ul>
            </div>

            {/* Priority Goals */}
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">{t.priorities}</h4>
              <ol className="list-decimal list-inside space-y-1 text-slate-300">
                {analysis.priorityGoals.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* Season & Basketball Alternatives Options */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.testingPhase}
              </label>
              <select
                value={testingPhase}
                onChange={(e) => setTestingPhase(e.target.value as 'preseason' | 'mid-season' | 'off-season')}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="preseason">{t.preseasonTesting}</option>
                <option value="mid-season">{t.midSeasonTesting}</option>
                <option value="off-season">{t.offSeasonTesting}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.season}
              </label>
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

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="basketballAlternatives"
                checked={useBasketballAlternatives}
                onChange={(e) => setUseBasketballAlternatives(e.target.checked)}
                className="mt-1 w-4 h-4 text-blue-600 bg-slate-900 border-slate-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="basketballAlternatives" className="text-sm text-slate-300">
                <span className="font-medium">{t.basketballAlternatives}</span>
                <br />
                <span className="text-xs text-slate-400">{t.basketballAlternativesHelp}</span>
              </label>
            </div>
          </div>

          {/* Generate Training Button */}
          <div className="flex justify-center">
            <button
              onClick={generateTraining}
              disabled={isGenerating || !analysis}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              title={!analysis ? (language === 'sr' ? 'Prvo analiziraj performanse' : 'Analyze performance first') : ''}
            >
              {isGenerating ? t.generating : t.generateTraining}
            </button>
          </div>
        </div>
      )}

      {/* Training Program */}
      {trainingProgram && (
        <div className="mt-8 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">{t.trainingTitle}</h3>
          <div className="prose prose-invert max-w-none">
            <div className="text-slate-300 whitespace-pre-wrap">{trainingProgram}</div>
          </div>
          
          {/* Save All Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSaveAll}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                allSaved
                  ? 'bg-green-600 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white'
              }`}
            >
              {allSaved ? t.allSaved : t.saveAll}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
