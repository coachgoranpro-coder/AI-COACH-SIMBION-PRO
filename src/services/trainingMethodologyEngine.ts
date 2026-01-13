/**
 * SIMBION PRO - TRAINING METHODOLOGY ENGINE
 * 
 * KLJUČNA LOGIKA:
 * Test Result → Player Level → Weak Point Diagnosis → Exercise Selection → Progression Path
 * 
 * NIKADA: Faktor → Vežba (pogrešno!)
 * UVEK: Test → Nivo → Dijagnoza → Odgovarajuća vežba
 * 
 * Primer:
 * CMJ = 35cm (beginner) + Squat snaga OK
 * → Dijagnoza: RFD problem, NE snaga!
 * → Rešenje: Pliometrija (squat jumps, box jumps 30cm)
 * → NE: Duboki čučanj sa još većim težinama!
 */

import { evaluateTestResult, type TestEvaluation } from '../data/diagnosticNorms';
import { type Exercise, type ExerciseLevel, type BasketballPosition } from '../data/exerciseCatalog';

// Player level determination
export interface PlayerLevel {
  overall: ExerciseLevel;
  byCategory: {
    power: ExerciseLevel;
    speed: ExerciseLevel;
    strength: ExerciseLevel;
    endurance: ExerciseLevel;
    agility: ExerciseLevel;
    proprioception: ExerciseLevel;
  };
}

// Diagnosis result
export interface WeakPointDiagnosis {
  testName: string;
  currentValue: number;
  level: ExerciseLevel;
  diagnosis: string; // "RFD problem", "Technique issue", "Strength deficit", etc.
  rootCause: string; // Detailed explanation
  priority: 'critical' | 'high' | 'medium' | 'low';
}

// Exercise recommendation
export interface ExerciseRecommendation {
  exercise: Exercise;
  reasoning: string;
  targetWeakness: string;
  expectedImprovement: string;
  warningIfAny?: string;
}

/**
 * FAZA 1: Određivanje nivoa igrača na osnovu testova
 */
export function determinePlayerLevel(
  tests: Array<{ testName: string; value: number }>,
  gender: 'male' | 'female',
  _position: BasketballPosition
): PlayerLevel {
  const evaluations: TestEvaluation[] = tests.map(t => 
    evaluateTestResult(t.testName, t.value, gender)
  );

  // Map level strings to numbers for averaging
  const levelToNumber: Record<string, number> = {
    'beginner': 1,
    'intermediate': 2,
    'advanced': 3,
    'elite': 4
  };

  const numberToLevel = (n: number): ExerciseLevel => {
    if (n <= 1.5) return 'beginner';
    if (n <= 2.5) return 'intermediate';
    if (n <= 3.5) return 'advanced';
    return 'elite';
  };

  // Calculate overall level from all evaluations
  const avgLevelValue = evaluations.reduce((sum, eval_) => 
    sum + levelToNumber[eval_.level], 0
  ) / evaluations.length;
  
  const overallLevel = numberToLevel(avgLevelValue);

  // Category mapping
  const categoryTests: Record<string, string[]> = {
    power: ['CMJ', 'Broad_Jump', 'RFD'],
    speed: ['Sprint_5m', 'Sprint_10m', 'Sprint_20m', 'Reaction_Time'],
    strength: ['Squat_Strength', 'Bench_Press', 'Back_Squat'],
    endurance: ['VO2max', 'Beep_Test', 'HR_Recovery'],
    agility: ['T-Test', 'Lane_Agility', 'Kamikaze'],
    proprioception: ['Balance', 'Y-Balance', 'Sit_And_Reach', 'Flexibility']
  };

  const byCategory: Record<string, ExerciseLevel> = {};

  for (const [category] of Object.entries(categoryTests)) {
    // Simplified - just use overall level for all categories
    byCategory[category] = overallLevel;
  }

  return {
    overall: overallLevel,
    byCategory: byCategory as PlayerLevel['byCategory']
  };
}

/**
 * FAZA 2: Dijagnoza slabih tačaka kroz korelacije
 * 
 * KLJUČNO: Ako je Snaga OK ali Power slab → Problem je RFD/tehnika, NE snaga!
 */
export function diagnoseWeakPoints(
  tests: Array<{ testName: string; value: number }>,
  gender: 'male' | 'female'
): WeakPointDiagnosis[] {
  const diagnoses: WeakPointDiagnosis[] = [];

  for (const test of tests) {
    const evaluation = evaluateTestResult(test.testName, test.value, gender);
    
    // Only diagnose if below intermediate level
    if (evaluation.level === 'beginner' || evaluation.level === 'intermediate') {
      // Check correlated tests to find root cause
      let diagnosis = '';
      let rootCause = '';
      let priority: 'critical' | 'high' | 'medium' | 'low' = 'medium';

      // Primer: CMJ slab, proveri Squat snagu
      if (test.testName === 'CMJ') {
        const squatTest = tests.find(t => t.testName === 'Squat_Strength');
        
        if (squatTest) {
          const squatEval = evaluateTestResult('Squat_Strength', squatTest.value, gender);
          
          if (squatEval.level === 'advanced' || squatEval.level === 'elite') {
            // Snaga OK ali skok slab → RFD/tehnika problem!
            diagnosis = 'RFD & Technique Problem';
            rootCause = `Snaga je dobra (${squatEval.level}), ali vertikalni skok je slab (${evaluation.level}). Problem NIJE nedostatak snage već Rate of Force Development (RFD) i/ili tehnika skoka. Rešenje: pliometrija, tehnički rad, eksplozivni treninzi.`;
            priority = 'high';
          } else if (squatEval.level === 'beginner') {
            diagnosis = 'Strength Deficit';
            rootCause = `I snaga i skok su slabi. Prvo izgraditi bazu snage (${squatEval.level} → intermediate), zatim raditi na eksplozivnosti.`;
            priority = 'critical';
          } else {
            diagnosis = 'Mixed - Strength & RFD';
            rootCause = `Snaga na granici (${squatEval.level}), skok takođe slab. Kombinovani pristup: snaga + RFD.`;
            priority = 'high';
          }
        } else {
          diagnosis = 'Explosive Power Deficit';
          rootCause = 'Vertikalni skok slab. Potrebna analiza snage i RFD.';
          priority = 'high';
        }
      }

      // Sprint slabost analiza
      else if (test.testName.includes('Sprint')) {
        if (test.testName === 'Sprint_5m') {
          diagnosis = 'Start Acceleration Problem';
          rootCause = 'Spor start (0-5m). Problem može biti: 1) Reakcija, 2) Prva dva koraka (tehnika), 3) Eksplozivnost nogu.';
          priority = 'high';
        } else if (test.testName === 'Sprint_20m') {
          diagnosis = 'Maximum Speed Problem';
          rootCause = 'Spora maksimalna brzina. Genetski limitirana (koeficijent 0.95), ali tehnika trčanja može pomoći.';
          priority = 'medium';
        }
      }

      // VO2max / izdržljivost
      else if (test.testName === 'VO2max' || test.testName === 'Beep_Test') {
        diagnosis = 'Aerobic Capacity Deficit';
        rootCause = 'Nizak aerobni kapacitet. Utiče na oporavak između napada/odbrana, četvrtih četvrtina, overtime.';
        priority = evaluation.level === 'beginner' ? 'critical' : 'high';
      }

      // Agilnost
      else if (test.testName.includes('T-Test') || test.testName.includes('Agility')) {
        diagnosis = 'Agility & Change of Direction Problem';
        rootCause = 'Spora promena pravca. Rizik od povreda pri naglim promenama. Lateralna koordinacija + core snaga potrebni.';
        priority = 'high';
      }

      // Balance/Proprioception
      else if (test.testName.includes('Balance')) {
        diagnosis = 'Balance & Proprioception Deficit';
        rootCause = 'Loša ravnoteža. Većina promašenih šuteva jer igrač nije u balansu. Rizik od povreda.';
        priority = 'critical';
      }

      // Asymmetry
      else if (test.testName.includes('Asymmetry')) {
        const asymmetryPercent = test.value;
        if (asymmetryPercent > 7) {
          diagnosis = 'Critical Asymmetry - Injury Risk';
          rootCause = `Asimetrija ${asymmetryPercent}% je KRITIČNA (standard <5-7%). Visok rizik od povrede pri lateralnim pokretima. Jednono žni treninzi HITNO!`;
          priority = 'critical';
        } else if (asymmetryPercent > 5) {
          diagnosis = 'Moderate Asymmetry';
          rootCause = `Asimetrija ${asymmetryPercent}% iznad standarda. Potreban unilateralni rad.`;
          priority = 'high';
        }
      }

      if (diagnosis) {
        diagnoses.push({
          testName: test.testName,
          currentValue: test.value,
          level: evaluation.level,
          diagnosis,
          rootCause,
          priority
        });
      }
    }
  }

  // Sort by priority
  const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
  return diagnoses.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

/**
 * FAZA 3: Selekcija vežbi na osnovu dijagnoze
 * 
 * KRITIČNO: Vežba mora biti na NIVOU koji igrač može da uradi!
 */
export function selectExercises(
  _diagnosis: WeakPointDiagnosis,
  _playerLevel: PlayerLevel,
  _position: BasketballPosition,
  _trainingPhase: 'preparation' | 'competitive' | 'recovery' = 'preparation'
): ExerciseRecommendation[] {
  // TODO: Re-implement when full Exercise interface is available in exerciseCatalog
  // Current simplified Exercise interface lacks targetTests, positions, reps, equipment fields
  return [];
}

/**
 * MASTER FUNKCIJA: Celokupan proces od testova do vežbi
 */
export interface TrainingProgram {
  playerLevel: PlayerLevel;
  weakPoints: WeakPointDiagnosis[];
  exerciseRecommendations: ExerciseRecommendation[];
  warnings: string[];
  progressionPlan: string;
}

export function generateTrainingProgram(
  tests: Array<{ testName: string; value: number }>,
  gender: 'male' | 'female',
  position: BasketballPosition,
  trainingPhase: 'preparation' | 'competitive' | 'recovery' = 'preparation'
): TrainingProgram {
  // Faza 1: Odredi nivo
  const playerLevel = determinePlayerLevel(tests, gender, position);

  // Faza 2: Dijagnoza
  const weakPoints = diagnoseWeakPoints(tests, gender);

  // Faza 3: Selekcija vežbi za svaku slabost
  const exerciseRecommendations: ExerciseRecommendation[] = [];
  for (const weakness of weakPoints.slice(0, 3)) { // Top 3 weaknesses
    const exercises = selectExercises(weakness, playerLevel, position, trainingPhase);
    exerciseRecommendations.push(...exercises);
  }

  // Upozorenja
  const warnings: string[] = [];
  
  // Critical asymmetry
  const criticalAsymmetry = weakPoints.find(w => w.priority === 'critical' && w.diagnosis.includes('Asymmetry'));
  if (criticalAsymmetry) {
    warnings.push(`🚨 KRITIČNO: Asimetrija ${criticalAsymmetry.currentValue}% - VISOK RIZIK OD POVREDE! Unilateralni treninzi HITNO!`);
  }

  // Beginner with advanced exercises warning
  if (playerLevel.overall === 'beginner') {
    warnings.push('⚠️ Igrač je na beginner nivou. NE koristiti nestabilne platforme, teške pliometrije ili >80% 1RM bez pripreme!');
    warnings.push('📋 PRVO: Izgraditi bazu kroz 12RM vežbe (67% 1RM) - 6-8 nedelja.');
  }

  // Balance deficit
  const balanceDeficit = weakPoints.find(w => w.diagnosis.includes('Balance'));
  if (balanceDeficit) {
    warnings.push('⚖️ Balans deficit detektovan. Većina promašenih šuteva zbog lošeg balansa. Svakodnevni trening balansa obavezan!');
  }

  // Progression plan
  let progressionPlan = '';
  if (playerLevel.overall === 'beginner') {
    progressionPlan = `
FAZA 1 (6-8 nedelja): Baza - Mišićna izdržljivost
- Snaga: 12RM (67% 1RM), 3-4 serije
- Balans: Svakodnevno, na terenu (bez nestabilnih površina)
- Propriocepcija: Fleksibilnost, mobilnost, aktivacija

FAZA 2 (6-8 nedelja): Prelaz na snagu
- Snaga: 5RM (87% 1RM), 3-4 serije
- Pliometrija: Niske kutije (30cm), poskoci
- Brzina: Tehnički rad, sprint drills

FAZA 3: Eksplozivna snaga & specifičnost
- Snaga: 70-90% 1RM (eksplozivna zona)
- Pliometrija: Depth jumps, reaktivni skokovi
- Košarkaška specifičnost: Situacioni treninzi
    `.trim();
  } else if (playerLevel.overall === 'intermediate') {
    progressionPlan = `
Trenutno na INTERMEDIATE nivou. Fokus na:
- Eliminacija slabih tačaka iz dijagnoze
- Pliometrijski treninzi za RFD
- Košarkaška specifičnost
- Periodizacija: 3-4 treninga nedeljno
    `.trim();
  } else {
    progressionPlan = `
Na ADVANCED/ELITE nivou. Program:
- Održavanje nivoa kondicije
- Specifični rad na detaljima
- Integracija treninga sa takmičenjem
- Propriocepcija kao proces u svim delovima
    `.trim();
  }

  return {
    playerLevel,
    weakPoints,
    exerciseRecommendations,
    warnings,
    progressionPlan
  };
}

/**
 * Helper: Get exercise with SAFE progression
 */
export function getSafeProgression(_currentExerciseId: string, _playerLevel: ExerciseLevel): Exercise | null {
  // TODO: Re-implement when full Exercise interface includes progression field
  return null;
}
