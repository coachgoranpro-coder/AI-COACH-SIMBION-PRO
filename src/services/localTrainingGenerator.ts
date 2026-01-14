// Local Training Generator - Offline fallback when Gemini API is unavailable
// Uses exercise catalog + correlation matrix + Coach Goran methodology

import { exercises, Exercise, ExerciseCategory, BasketballPosition } from '../data/exerciseCatalog';

interface PlayerProfile {
  age: number;
  position: BasketballPosition;
  experience: string;
  height?: number;
  weight?: number;
}

interface DiagnosticData {
  tests: {
    [key: string]: {
      value: number;
      percentile?: number;
      status?: 'weak' | 'average' | 'strong';
    };
  };
  weaknesses?: string[];
  strengths?: string[];
}

interface TrainingProgram {
  metadata: {
    playerName: string;
    position: BasketballPosition;
    duration: string;
    focus: string[];
    generated: string;
    generator: 'local';
  };
  warmup: Exercise[];
  mainPart: {
    strength: Exercise[];
    speed: Exercise[];
    endurance: Exercise[];
    coordination: Exercise[];
  };
  cooldown: Exercise[];
  notes: {
    sr: string;
    en: string;
  };
}

/**
 * Analyze diagnostic data to identify priority categories
 */
function analyzeDiagnostics(diagnosticData: DiagnosticData, position: BasketballPosition): {
  priorities: ExerciseCategory[];
  weakAreas: string[];
  level: 'beginner' | 'intermediate' | 'advanced' | 'elite';
} {
  const weakAreas: string[] = [];
  const priorities: ExerciseCategory[] = [];
  
  // Analyze test results
  if (diagnosticData.tests) {
    Object.entries(diagnosticData.tests).forEach(([testName, result]) => {
      if (result.status === 'weak' || (result.percentile && result.percentile < 40)) {
        weakAreas.push(testName);
        
        // Map test weaknesses to exercise categories
        if (testName.toLowerCase().includes('sprint') || testName.toLowerCase().includes('speed')) {
          priorities.push('speed_start', 'speed_running');
        }
        if (testName.toLowerCase().includes('jump') || testName.toLowerCase().includes('cmj')) {
          priorities.push('strength_explosive', 'strength_speed');
        }
        if (testName.toLowerCase().includes('squat') || testName.toLowerCase().includes('strength')) {
          priorities.push('strength_absolute');
        }
        if (testName.toLowerCase().includes('endurance') || testName.toLowerCase().includes('beep')) {
          priorities.push('endurance_anaerobic');
        }
        if (testName.toLowerCase().includes('agility') || testName.toLowerCase().includes('t-test')) {
          priorities.push('coordination', 'speed_movement');
        }
      }
    });
  }

  // Add position-specific priorities
  const positionPriorities: { [key in BasketballPosition]: ExerciseCategory[] } = {
    'PG': ['speed_movement', 'speed_reaction', 'coordination', 'endurance_anaerobic'],
    'SG': ['speed_running', 'strength_explosive', 'coordination', 'endurance_anaerobic'],
    'SF': ['strength_speed', 'speed_movement', 'endurance_anaerobic', 'coordination'],
    'PF': ['strength_explosive', 'strength_absolute', 'endurance_muscular', 'coordination'],
    'C': ['strength_absolute', 'strength_explosive', 'endurance_muscular', 'balance']
  };

  priorities.push(...positionPriorities[position]);

  // Determine training level
  const avgPercentile = Object.values(diagnosticData.tests || {})
    .filter(t => t.percentile !== undefined)
    .reduce((sum, t) => sum + (t.percentile || 0), 0) / Object.keys(diagnosticData.tests || {}).length;

  let level: 'beginner' | 'intermediate' | 'advanced' | 'elite';
  if (avgPercentile < 30) level = 'beginner';
  else if (avgPercentile < 60) level = 'intermediate';
  else if (avgPercentile < 85) level = 'advanced';
  else level = 'elite';

  return { priorities: [...new Set(priorities)], weakAreas, level };
}

/**
 * Select exercises based on priorities and player profile
 */
function selectExercises(
  category: ExerciseCategory,
  position: BasketballPosition,
  level: 'beginner' | 'intermediate' | 'advanced' | 'elite',
  count: number = 3
): Exercise[] {
  const filtered = exercises.filter(ex => 
    ex.category === category &&
    ex.positions.includes(position) &&
    (ex.level === level || 
     (level === 'intermediate' && ex.level === 'beginner') ||
     (level === 'advanced' && (ex.level === 'intermediate' || ex.level === 'beginner')))
  );

  // Shuffle and take requested count
  const shuffled = filtered.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Generate complete training program using local logic
 */
export function generateLocalTrainingProgram(
  diagnosticData: DiagnosticData,
  playerProfile: PlayerProfile,
  language: 'sr' | 'en' = 'sr'
): TrainingProgram {
  
  const { priorities, level } = analyzeDiagnostics(diagnosticData, playerProfile.position);

  // WARMUP (15-20 min) - mobility, corrective exercises, speed drills
  const warmup: Exercise[] = [
    ...selectExercises('mobility', playerProfile.position, level, 2),
    ...selectExercises('flexibility', playerProfile.position, level, 2),
    ...selectExercises('speed_reaction', playerProfile.position, level, 1)
  ];

  // MAIN PART (45-60 min) - prioritize weak areas
  const mainPart = {
    // Strength exercises based on priorities
    strength: [
      ...selectExercises(
        priorities.find(p => p.startsWith('strength_')) || 'strength_explosive',
        playerProfile.position,
        level,
        3
      )
    ],
    
    // Speed exercises - always include some speed work
    speed: [
      ...selectExercises('speed_start', playerProfile.position, level, 2),
      ...selectExercises('speed_movement', playerProfile.position, level, 1)
    ],
    
    // Endurance - basketball specific
    endurance: [
      ...selectExercises('endurance_anaerobic', playerProfile.position, level, 2)
    ],
    
    // Coordination and specific work
    coordination: [
      ...selectExercises('coordination', playerProfile.position, level, 2),
      ...selectExercises('balance', playerProfile.position, level, 1)
    ]
  };

  // COOLDOWN (5-10 min)
  const cooldown: Exercise[] = [
    ...selectExercises('flexibility', playerProfile.position, level, 2)
  ];

  const focusAreas = priorities.slice(0, 3).map(p => {
    const categoryNames: { [key: string]: { sr: string; en: string } } = {
      'speed_movement': { sr: 'Brzina pokreta', en: 'Movement Speed' },
      'speed_reaction': { sr: 'Brzina reakcije', en: 'Reaction Speed' },
      'speed_start': { sr: 'Startno ubrzanje', en: 'Starting Acceleration' },
      'speed_running': { sr: 'Brzina trčanja', en: 'Running Speed' },
      'strength_speed': { sr: 'Brzinska snaga', en: 'Speed Strength' },
      'strength_explosive': { sr: 'Eksplozivna snaga', en: 'Explosive Strength' },
      'strength_absolute': { sr: 'Apsolutna snaga', en: 'Absolute Strength' },
      'strength_endurance': { sr: 'Izdržljivost snage', en: 'Strength Endurance' },
      'endurance_anaerobic': { sr: 'Anaerobna izdržljivost', en: 'Anaerobic Endurance' },
      'coordination': { sr: 'Koordinacija', en: 'Coordination' }
    };
    return categoryNames[p]?.[language] || p;
  });

  return {
    metadata: {
      playerName: 'Player',
      position: playerProfile.position,
      duration: '8-12 weeks',
      focus: focusAreas,
      generated: new Date().toISOString(),
      generator: 'local'
    },
    warmup,
    mainPart,
    cooldown,
    notes: {
      sr: `🏀 SIMBION LOCAL GENERATOR\n\nProgram kreiran na osnovu:\n• ${exercises.length} vežbi (205 u bazi)\n• Analiza dijagnostike i slabosti\n• Pozicija: ${playerProfile.position}\n• Nivo: ${level}\n\n💡 Fokus: ${focusAreas.join(', ')}\n\n⚠️ Napomena: Ovo je automatski generisan program. Za personalizaciju koristite online Gemini AI generator.`,
      en: `🏀 SIMBION LOCAL GENERATOR\n\nProgram created based on:\n• ${exercises.length} exercises (205 in database)\n• Diagnostic analysis and weaknesses\n• Position: ${playerProfile.position}\n• Level: ${level}\n\n💡 Focus: ${focusAreas.join(', ')}\n\n⚠️ Note: This is an auto-generated program. For personalization use online Gemini AI generator.`
    }
  };
}

/**
 * Format training program for display
 */
export function formatLocalTrainingProgram(
  program: TrainingProgram,
  language: 'sr' | 'en' = 'sr'
): string {
  const t = language === 'sr' ? {
    warmup: '🔥 ZAGREVANJE (15-20 min)',
    mainPart: '💪 GLAVNI DEO (45-60 min)',
    strength: 'SNAGA',
    speed: 'BRZINA',
    endurance: 'IZDRŽLJIVOST',
    coordination: 'KOORDINACIJA',
    cooldown: '🧘 ISTEZANJE I OPORAVAK (5-10 min)',
    sets: 'Serije',
    reps: 'Ponavljanja',
    load: 'Opterećenje',
    rest: 'Odmor',
    equipment: 'Oprema'
  } : {
    warmup: '🔥 WARM-UP (15-20 min)',
    mainPart: '💪 MAIN PART (45-60 min)',
    strength: 'STRENGTH',
    speed: 'SPEED',
    endurance: 'ENDURANCE',
    coordination: 'COORDINATION',
    cooldown: '🧘 COOL DOWN (5-10 min)',
    sets: 'Sets',
    reps: 'Reps',
    load: 'Load',
    rest: 'Rest',
    equipment: 'Equipment'
  };

  let output = `# 🏀 ${program.metadata.position} TRAINING PROGRAM\n\n`;
  output += `**${language === 'sr' ? 'Fokus' : 'Focus'}:** ${program.metadata.focus.join(', ')}\n`;
  output += `**${language === 'sr' ? 'Trajanje' : 'Duration'}:** ${program.metadata.duration}\n\n`;
  output += `---\n\n`;

  // Warmup
  output += `## ${t.warmup}\n\n`;
  program.warmup.forEach((ex, i) => {
    output += `**${i + 1}. ${ex.name[language]}**\n`;
    output += `- ${t.sets}: ${ex.sets} | ${t.reps}: ${ex.reps} | ${t.rest}: ${ex.rest}\n`;
    if (ex.equipment.length > 0) output += `- ${t.equipment}: ${ex.equipment.join(', ')}\n`;
    output += `\n`;
  });

  // Main Part
  output += `## ${t.mainPart}\n\n`;
  
  // Strength
  if (program.mainPart.strength.length > 0) {
    output += `### ${t.strength}\n\n`;
    program.mainPart.strength.forEach((ex, i) => {
      output += `**${i + 1}. ${ex.name[language]}**\n`;
      output += `- ${t.sets}: ${ex.sets} | ${t.reps}: ${ex.reps} | ${t.load}: ${ex.load} | ${t.rest}: ${ex.rest}\n`;
      if (ex.equipment.length > 0) output += `- ${t.equipment}: ${ex.equipment.join(', ')}\n`;
      output += `\n`;
    });
  }

  // Speed
  if (program.mainPart.speed.length > 0) {
    output += `### ${t.speed}\n\n`;
    program.mainPart.speed.forEach((ex, i) => {
      output += `**${i + 1}. ${ex.name[language]}**\n`;
      output += `- ${t.sets}: ${ex.sets} | ${t.reps}: ${ex.reps} | ${t.rest}: ${ex.rest}\n`;
      if (ex.equipment.length > 0) output += `- ${t.equipment}: ${ex.equipment.join(', ')}\n`;
      output += `\n`;
    });
  }

  // Endurance
  if (program.mainPart.endurance.length > 0) {
    output += `### ${t.endurance}\n\n`;
    program.mainPart.endurance.forEach((ex, i) => {
      output += `**${i + 1}. ${ex.name[language]}**\n`;
      output += `- ${t.sets}: ${ex.sets} | ${t.reps}: ${ex.reps} | ${t.rest}: ${ex.rest}\n`;
      if (ex.equipment.length > 0) output += `- ${t.equipment}: ${ex.equipment.join(', ')}\n`;
      output += `\n`;
    });
  }

  // Coordination
  if (program.mainPart.coordination.length > 0) {
    output += `### ${t.coordination}\n\n`;
    program.mainPart.coordination.forEach((ex, i) => {
      output += `**${i + 1}. ${ex.name[language]}**\n`;
      output += `- ${t.sets}: ${ex.sets} | ${t.reps}: ${ex.reps} | ${t.rest}: ${ex.rest}\n`;
      if (ex.equipment.length > 0) output += `- ${t.equipment}: ${ex.equipment.join(', ')}\n`;
      output += `\n`;
    });
  }

  // Cooldown
  output += `## ${t.cooldown}\n\n`;
  program.cooldown.forEach((ex, i) => {
    output += `**${i + 1}. ${ex.name[language]}**\n`;
    output += `- ${t.sets}: ${ex.sets} | ${t.reps}: ${ex.reps}\n`;
    output += `\n`;
  });

  // Notes
  output += `---\n\n`;
  output += program.notes[language];

  return output;
}

export default { generateLocalTrainingProgram, formatLocalTrainingProgram };
