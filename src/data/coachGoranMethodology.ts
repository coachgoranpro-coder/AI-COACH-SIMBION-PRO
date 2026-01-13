/**
 * COACH GORAN METODOLOGIJA - Fizička Priprema Košarkaša
 * Integrisano znanje iz knjige za AI Coach SIMBION Pro
 * 
 * OSNOVNO PRAVILO: Test → Level → Diagnosis → Exercise (NE Factor → Exercise!)
 */

export interface PositionStandards {
  position: 'PG' | 'SG' | 'SF' | 'PF' | 'C';
  displayName: {
    sr: string;
    en: string;
  };
  standards: {
    cmj: { min: number; good: number; elite: number }; // cm
    rfd: { min: number; good: number; elite: number }; // N/kg
    reactionTime: { elite: number; good: number; weak: number }; // seconds
    cod5105: { elite: number; good: number; weak: number }; // seconds
    tTest: { elite: number; good: number; weak: number }; // seconds
    asymmetry: { acceptable: number }; // percentage
  };
  priorities: string[]; // Prioriteti u treningu
  situational: string[]; // Stilovi igre unutar pozicije
}

export const POSITION_STANDARDS: PositionStandards[] = [
  {
    position: 'PG',
    displayName: { sr: 'Plejmejker', en: 'Point Guard' },
    standards: {
      cmj: { min: 40, good: 45, elite: 50 },
      rfd: { min: 6.0, good: 6.5, elite: 7.2 },
      reactionTime: { elite: 0.25, good: 0.30, weak: 0.35 },
      cod5105: { elite: 4.80, good: 5.00, weak: 5.20 },
      tTest: { elite: 9.3, good: 9.5, weak: 9.8 },
      asymmetry: { acceptable: 5 }
    },
    priorities: [
      'Startno ubrzanje',
      'Reakcija i odlučivanje',
      'Core stability',
      'Lateralna brzina',
      'Repetativna snaga'
    ],
    situational: [
      'Pure facilitator (dodavač)',
      'Scoring guard (šuter)',
      'Slasher (prodor)'
    ]
  },
  {
    position: 'SG',
    displayName: { sr: 'Bek šuter', en: 'Shooting Guard' },
    standards: {
      cmj: { min: 40, good: 45, elite: 52 },
      rfd: { min: 6.0, good: 6.5, elite: 7.5 },
      reactionTime: { elite: 0.25, good: 0.30, weak: 0.35 },
      cod5105: { elite: 4.85, good: 5.05, weak: 5.25 },
      tTest: { elite: 9.4, good: 9.6, weak: 9.9 },
      asymmetry: { acceptable: 5 }
    },
    priorities: [
      'Bočna eksplozivnost',
      'Šut pod kontaktom (core)',
      'Reaktivna snaga',
      'Lateralna koordinacija',
      'Repetativna snaga'
    ],
    situational: [
      '3&D specialist',
      'Shot creator (self-create)',
      'Combo guard (2/1)'
    ]
  },
  {
    position: 'SF',
    displayName: { sr: 'Nisko krilo', en: 'Small Forward' },
    standards: {
      cmj: { min: 43, good: 48, elite: 55 },
      rfd: { min: 6.5, good: 7.0, elite: 8.0 },
      reactionTime: { elite: 0.26, good: 0.31, weak: 0.36 },
      cod5105: { elite: 4.90, good: 5.10, weak: 5.30 },
      tTest: { elite: 9.6, good: 10.0, weak: 10.4 },
      asymmetry: { acceptable: 6 }
    },
    priorities: [
      'Balans i stabilnost',
      'Lateralna koordinacija',
      'Svestranost (all-around)',
      'Funkcionalna snaga',
      'Mobilnost kukova'
    ],
    situational: [
      'Wing scorer (perimetar)',
      'Stretch 4 (viši, šuter)',
      'Slasher/cutter (athleticism)'
    ]
  },
  {
    position: 'PF',
    displayName: { sr: 'Krilo centar', en: 'Power Forward' },
    standards: {
      cmj: { min: 45, good: 52, elite: 60 },
      rfd: { min: 7.0, good: 7.5, elite: 8.5 },
      reactionTime: { elite: 0.27, good: 0.32, weak: 0.37 },
      cod5105: { elite: 5.00, good: 5.20, weak: 5.40 },
      tTest: { elite: 9.8, good: 10.2, weak: 10.6 },
      asymmetry: { acceptable: 6 }
    },
    priorities: [
      'Snaga kukova (box-out)',
      'Lateralna brzina',
      'Mobilnost za pick&roll',
      'Ekscentrična kontrola doskoka',
      'Kontakt absorbcija'
    ],
    situational: [
      'Stretch 4 (šuter)',
      'Banger (fizikalac)',
      'Versatile (može 3, može 5)'
    ]
  },
  {
    position: 'C',
    displayName: { sr: 'Centar', en: 'Center' },
    standards: {
      cmj: { min: 43, good: 50, elite: 58 },
      rfd: { min: 7.2, good: 7.8, elite: 9.0 },
      reactionTime: { elite: 0.28, good: 0.33, weak: 0.38 },
      cod5105: { elite: 5.10, good: 5.30, weak: 5.50 },
      tTest: { elite: 10.0, good: 10.5, weak: 11.0 },
      asymmetry: { acceptable: 7 }
    },
    priorities: [
      'Apsolutna snaga',
      'Ekscentrična kontrola doskoka',
      'Core pod opterećenjem',
      'Mobilnost kukova i ramena',
      'Repetativna snaga (stamina)'
    ],
    situational: [
      'Traditional big (post-up)',
      'Stretch 5 (šuter)',
      'Rim runner (roluje, trči)'
    ]
  }
];

/**
 * OBAVEZNA STRUKTURA TRENINGA
 */
export interface WorkoutStructure {
  phase: string;
  duration: number; // minutes
  purpose: {
    sr: string;
    en: string;
  };
  examples: {
    sr: string[];
    en: string[];
  };
}

export const MANDATORY_WORKOUT_STRUCTURE: WorkoutStructure[] = [
  {
    phase: 'UVOD',
    duration: 15,
    purpose: {
      sr: 'Proprioceptivna aktivacija + dinamičko zagrevanje',
      en: 'Proprioceptive activation + dynamic warm-up'
    },
    examples: {
      sr: [
        'Vežbe balansa na jednoj nozi (2×20s/noga)',
        'Glute bridges (2×12)',
        'Hip circles (2×10/pravac)',
        'Leg swings (2×10/noga sagitalno i frontalno)',
        'TRX vežbe ili elastične trake'
      ],
      en: [
        'Single-leg balance (2×20s/leg)',
        'Glute bridges (2×12)',
        'Hip circles (2×10/direction)',
        'Leg swings (2×10/leg sagittal and frontal)',
        'TRX or resistance bands'
      ]
    }
  },
  {
    phase: 'CNS ACTIVATION',
    duration: 5,
    purpose: {
      sr: 'Aktivacija nervnog sistema',
      en: 'Central nervous system priming'
    },
    examples: {
      sr: [
        'Medicine ball slams (2×8)',
        'Sprint build-ups (3×20m @ 50-70-90%)',
        'Explosive jumps (3×5)'
      ],
      en: [
        'Medicine ball slams (2×8)',
        'Sprint build-ups (3×20m @ 50-70-90%)',
        'Explosive jumps (3×5)'
      ]
    }
  },
  {
    phase: 'GLAVNI DEO',
    duration: 35,
    purpose: {
      sr: 'Glavni trenažni stimulus (4-6 vežbi)',
      en: 'Main training stimulus (4-6 exercises)'
    },
    examples: {
      sr: [
        'Glavni fokus vežbe bazirane na dijagnozi',
        '4-6 vežbi zavisno od cilja',
        'Poštovanje RM zona (12RM → 5RM → 1RM progresija)',
        'Primena Test→Level→Exercise logike'
      ],
      en: [
        'Primary focus based on diagnosis',
        '4-6 exercises based on goal',
        'Respect RM zones (12RM → 5RM → 1RM progression)',
        'Apply Test→Level→Exercise logic'
      ]
    }
  },
  {
    phase: 'FINISHER',
    duration: 8,
    purpose: {
      sr: 'Kondicioniranje pod zamorom',
      en: 'Conditioning under fatigue'
    },
    examples: {
      sr: [
        'Court conditioning drills (Alinijera)',
        'Trbušnjaci, sklekovi, plankovi',
        'Mountain climber',
        'Burpee (NAJRIZIČNIJE - samo za spremne igrače!)'
      ],
      en: [
        'Court conditioning drills (Alinijera)',
        'Core work, push-ups, planks',
        'Mountain climber',
        'Burpee (HIGHEST RISK - only for ready players!)'
      ]
    }
  },
  {
    phase: 'ZAVRŠNI DEO',
    duration: 10,
    purpose: {
      sr: 'Hlađenje, istezanje, disanje',
      en: 'Cool-down, stretching, breathing'
    },
    examples: {
      sr: [
        'Lagano trčanje 5min (zona 1)',
        'Statičko istezanje 5min (zadnja loža, kvadriceps, hip flexors)',
        'Disajne vežbe (dijafragmalno disanje, Valsalva prevencija)'
      ],
      en: [
        'Light jog 5min (zone 1)',
        'Static stretching 5min (hamstrings, quads, hip flexors)',
        'Breathing exercises (diaphragmatic, Valsalva prevention)'
      ]
    }
  }
];

/**
 * RM ZONE - Progresivno opterećenje
 */
export const RM_ZONES = {
  '1RM': { percentage: 100, reps: 1, phase: 'Maksimalna snaga' },
  '2RM': { percentage: 95, reps: 2, phase: 'Maksimalna snaga' },
  '5RM': { percentage: 87, reps: 5, phase: 'Snaga' },
  '8RM': { percentage: 80, reps: 8, phase: 'Hipertrofija/Snaga' },
  '12RM': { percentage: 67, reps: 12, phase: 'Mišićna izdržljivost' }
};

export const RM_PROGRESSION_RULES = {
  sr: [
    '⚠️ OBAVEZNO: Započni sa 12RM (67%) - mišićna izdržljivost',
    '📈 Posle 6-8 nedelja: Prelaz na 5RM (87%) - snaga',
    '🔥 Posle dodatnih 6-8 nedelja: Prelaz na 1-2RM (95-100%) - maksimalna snaga',
    '🚫 NIKADA ne preskači faze! Rizik od povrede je OGROMAN!'
  ],
  en: [
    '⚠️ MANDATORY: Start with 12RM (67%) - muscular endurance',
    '📈 After 6-8 weeks: Progress to 5RM (87%) - strength',
    '🔥 After additional 6-8 weeks: Progress to 1-2RM (95-100%) - max strength',
    '🚫 NEVER skip phases! Injury risk is HUGE!'
  ]
};

/**
 * TIPOVI MIKROCIKLUSA (A-G)
 */
export interface MicrocycleType {
  code: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  name: {
    sr: string;
    en: string;
  };
  rpe: string; // Range RPE
  focus: {
    sr: string;
    en: string;
  };
  duration: number; // days
  notes: {
    sr: string;
    en: string;
  };
}

export const MICROCYCLE_TYPES: MicrocycleType[] = [
  {
    code: 'A',
    name: { sr: 'Aktivacioni/Dijagnostički', en: 'Activation/Diagnostic' },
    rpe: '3-6',
    focus: { 
      sr: 'Neuromišićna aktivacija, funkcionalno testiranje',
      en: 'Neuromuscular activation, functional testing'
    },
    duration: 7,
    notes: {
      sr: 'Prvi mikrociklus sezone. Testiranje + lagani trening.',
      en: 'First microcycle of season. Testing + light training.'
    }
  },
  {
    code: 'B',
    name: { sr: 'Bazični', en: 'Base Building' },
    rpe: '5-7',
    focus: { 
      sr: 'Izgradnja baze, mišićna izdržljivost, tehnika',
      en: 'Base building, muscular endurance, technique'
    },
    duration: 7,
    notes: {
      sr: '12RM faza. Visok obim, srednji intenzitet.',
      en: '12RM phase. High volume, moderate intensity.'
    }
  },
  {
    code: 'C',
    name: { sr: 'Udarni', en: 'Shock/Peak Load' },
    rpe: '7-9',
    focus: { 
      sr: 'Maksimalno opterećenje, vrhunac adaptacije',
      en: 'Maximum load, peak adaptation'
    },
    duration: 7,
    notes: {
      sr: '5RM faza ili maksimalna eksplozivnost. Najveći napor.',
      en: '5RM phase or max explosiveness. Highest effort.'
    }
  },
  {
    code: 'D',
    name: { sr: 'Specifični', en: 'Specific' },
    rpe: '6-8',
    focus: { 
      sr: 'Specifičan za igru, situacioni zadaci',
      en: 'Game-specific, situational tasks'
    },
    duration: 7,
    notes: {
      sr: 'Integracija fizičke pripreme u košarkaške pokrete.',
      en: 'Integration of physical prep into basketball movements.'
    }
  },
  {
    code: 'E',
    name: { sr: 'Rasterećujući', en: 'Deload' },
    rpe: '2-4',
    focus: { 
      sr: 'Aktivni oporavak, smanjenje opterećenja',
      en: 'Active recovery, load reduction'
    },
    duration: 7,
    notes: {
      sr: 'Obim -40-60%, intenzitet -20-30%. Obavezno posle C mikrociklusa!',
      en: 'Volume -40-60%, intensity -20-30%. Mandatory after shock week!'
    }
  },
  {
    code: 'F',
    name: { sr: 'Takmičarski', en: 'Competition' },
    rpe: '4-9',
    focus: { 
      sr: 'Održavanje forme, oporavak između utakmica',
      en: 'Maintain form, recovery between games'
    },
    duration: 7,
    notes: {
      sr: 'In-season. 1-2 teška treninga, fokus na košarku.',
      en: 'In-season. 1-2 hard sessions, focus on basketball.'
    }
  },
  {
    code: 'G',
    name: { sr: 'Kup/Playoff', en: 'Cup/Playoff' },
    rpe: '5-9',
    focus: { 
      sr: 'Turnirski format, brzi oporavak',
      en: 'Tournament format, rapid recovery'
    },
    duration: 7,
    notes: {
      sr: '2-3 utakmice nedeljno. Samo održavanje + regeneracija.',
      en: '2-3 games/week. Maintenance + regeneration only.'
    }
  }
];

/**
 * ZLATNIH POLA SATA - Pre-trening priprema
 */
export const GOLDEN_THIRTY_PROTOCOL = {
  sr: {
    title: 'Zlatnih Pola Sata',
    subtitle: 'Obavezna priprema pre SVAKOG treninga',
    duration: 30,
    phases: [
      {
        name: 'Razgibavanje',
        time: '8min',
        activities: [
          'Lagano trčanje',
          'Dinamička mobilnost zglobova',
          'Roleri (više za američke igrače pre, evropske posle treninga)'
        ]
      },
      {
        name: 'Korektivna gimnastika',
        time: '7min',
        activities: [
          'Od stopala do ispružene ruke - MUST!',
          'Fokus na pravilno izvođenje',
          'Aktivacija sinergista'
        ]
      },
      {
        name: 'Vežbe balansa',
        time: '8min',
        activities: [
          'Stajna noga (toniziranija mišićno)',
          'Single-leg stance (koliko dugo ruke iznad glave?)',
          'TRX vežbe za balans i fleksibilnost'
        ]
      },
      {
        name: 'Niski pliometrijski intenzitet',
        time: '7min',
        activities: [
          'A-skip, B-skip',
          'Dužinski poskok',
          'Karioka, tapioka (4-5m distanca)',
          'Sprint + stav unazad kombinacije'
        ]
      }
    ],
    notes: [
      '⚠️ Ovo NIJE trening - ovo je PRIPREMA za trening!',
      '🎯 Cilj: Postizanje "radne temperature" + neuromišićna aktivacija',
      '📊 Poslednjih 10min: Igrači se dodatno rastrčavaju, vežbaju slabosti',
      '💡 Vreme kada se nadoknađuje propušteno iz prethodnih treninga'
    ]
  },
  en: {
    title: 'Golden Thirty Minutes',
    subtitle: 'Mandatory preparation before EVERY training',
    duration: 30,
    phases: [
      {
        name: 'Mobilization',
        time: '8min',
        activities: [
          'Light jogging',
          'Dynamic joint mobility',
          'Foam rolling (more for US players before, EU after training)'
        ]
      },
      {
        name: 'Corrective exercises',
        time: '7min',
        activities: [
          'From feet to extended arm - MUST!',
          'Focus on proper execution',
          'Synergist activation'
        ]
      },
      {
        name: 'Balance exercises',
        time: '8min',
        activities: [
          'Stance leg (more toned muscularly)',
          'Single-leg stance (how long hands overhead?)',
          'TRX exercises for balance and flexibility'
        ]
      },
      {
        name: 'Low plyometric intensity',
        time: '7min',
        activities: [
          'A-skip, B-skip',
          'Broad jumps',
          'Carioca, crossover (4-5m distance)',
          'Sprint + defensive stance combinations'
        ]
      }
    ],
    notes: [
      '⚠️ This is NOT training - this is PREPARATION for training!',
      '🎯 Goal: Achieve "working temperature" + neuromuscular activation',
      '📊 Last 10min: Players warm up more, work on weaknesses',
      '💡 Time to compensate for missed elements from previous sessions'
    ]
  }
};

/**
 * BREATHING & VALSALVA PREVENTION
 */
export const BREATHING_RULES = {
  sr: [
    '🫁 Pravilno disanje = propriocepcija!',
    '↑ Ruke gore = JAK UDAH',
    '↓ Ruke dole = IZDAH',
    '🚫 Valsalva fenomen = OPASNOST pri maksimalnim naporima!',
    '🧘 Plankovi: Disanje kroz nos u trbuh, NE zadržavati dah!',
    '⚡ Mountain climber: Brza frekvencija ali KONTROLISANO disanje',
    '🏋️ Benč/čučanj sa pojasom: IZDAH pri naporu (koncentrična faza)',
    '📚 Uvek edukuj igrača o disanju pre vežbe!'
  ],
  en: [
    '🫁 Proper breathing = proprioception!',
    '↑ Arms up = STRONG INHALE',
    '↓ Arms down = EXHALE',
    '🚫 Valsalva phenomenon = DANGER at maximal efforts!',
    '🧘 Planks: Breathe through nose into belly, DON\'T hold breath!',
    '⚡ Mountain climber: Fast tempo but CONTROLLED breathing',
    '🏋️ Bench/squat with belt: EXHALE during effort (concentric)',
    '📚 Always educate player about breathing before exercise!'
  ]
};

/**
 * AI LIMITATION BOUNDARIES
 */
export const AI_COACHING_BOUNDARIES = {
  sr: {
    whatAiCannot: [
      '❌ Videti izraz lica igrača',
      '❌ Prepoznati emocije i mentalno stanje',
      '❌ Razumeti posebnost igrača i zašto je dragocena',
      '❌ Doneti odluku o "time-out" danima',
      '❌ Meriti motivaciju, team chemistry, taktički fit',
      '❌ Znati "šta se ne vidi" na terenu'
    ],
    whatAiCan: [
      '✅ Procesirati podatke BRŽE nego ljudi',
      '✅ Upoređivati sve parametre bilo koje osobine',
      '✅ Prepoznati pattern-e u test korelacijama',
      '✅ Organizovati informacije za ljudske odluke',
      '✅ Predlagati na osnovu dijagnostike'
    ],
    conclusion: '🤝 AI ASISTIRA, trener ODLUČUJE. "Ne treniramo robote već žive ljude koji igraju košarku."'
  },
  en: {
    whatAiCannot: [
      '❌ See player\'s facial expression',
      '❌ Recognize emotions and mental state',
      '❌ Understand player uniqueness and why it\'s valuable',
      '❌ Decide on "time-out" days',
      '❌ Measure motivation, team chemistry, tactical fit',
      '❌ Know "what is not seen" on court'
    ],
    whatAiCan: [
      '✅ Process data FASTER than humans',
      '✅ Compare all parameters of any trait',
      '✅ Recognize patterns in test correlations',
      '✅ Organize information for human decisions',
      '✅ Suggest based on diagnostics'
    ],
    conclusion: '🤝 AI ASSISTS, coach DECIDES. "We train living people who play basketball, not robots."'
  }
};

/**
 * Helper function: Get player level from test result
 */
export function getPlayerLevel(
  testValue: number,
  position: 'PG' | 'SG' | 'SF' | 'PF' | 'C',
  testType: 'cmj' | 'rfd' | 'reactionTime' | 'cod5105' | 'tTest'
): 'beginner' | 'intermediate' | 'advanced' | 'elite' {
  const posStandard = POSITION_STANDARDS.find(p => p.position === position);
  if (!posStandard) return 'beginner';

  const standard = posStandard.standards[testType];
  
  // For tests where LOWER is better (reaction time, COD, T-test)
  if (testType === 'reactionTime' || testType === 'cod5105' || testType === 'tTest') {
    if (testValue <= standard.elite) return 'elite';
    if (testValue <= standard.good) return 'advanced';
    if ('weak' in standard && testValue <= standard.weak) return 'intermediate';
    return 'beginner';
  }
  
  // For tests where HIGHER is better (CMJ, RFD)
  if (testType === 'cmj' || testType === 'rfd') {
    if (testValue >= standard.elite) return 'elite';
    if (testValue >= standard.good) return 'advanced';
    if ('min' in standard && testValue >= standard.min) return 'intermediate';
    return 'beginner';
  }

  return 'intermediate';
}

/**
 * Helper: Format methodology as prompt prefix
 */
export function getMethodologyPromptPrefix(language: 'sr' | 'en'): string {
  if (language === 'sr') {
    return `
🏀 **COACH GORAN METODOLOGIJA - Ti si AI trener, ali poštuj PRAVILA:**

⚠️ **OSNOVNO PRAVILO:**
Test → Level → Dijagnoza → Vežba (NE Factor → Vežba!)

🎯 **OBAVEZNA STRUKTURA TRENINGA:**
1. UVOD (15min): Propriocepcija + dinamičko zagrevanje
2. CNS ACTIVATION (5min): Nervni sistem priming
3. GLAVNI DEO (35min): 4-6 vežbi baziranih na DIJAGNOZI
4. FINISHER (8min): Kondicioniranje pod zamorom
5. ZAVRŠNI DEO (10min): Hlađenje + istezanje + disanje

📊 **RM ZONE PROGRESIJA:**
- UVEK počni sa 12RM (67%) - 6-8 nedelja
- Onda 5RM (87%) - 6-8 nedelja
- Tek onda 1-2RM (95-100%)
🚫 NIKADA ne preskači faze!

🫁 **DISANJE:**
- Valsalva fenomen = OPASNOST!
- Ruke gore = udah, ruke dole = izdah
- Edukuj igrača UVEK o disanju!

🚫 **ŠTA NE MOŽEŠ:**
- Videti izraz lica
- Prepoznati emocije
- Znati da li je igraču "time-out dan"
- Doneti finalnu odluku umesto trenera

✅ **ŠTA MOŽEŠ:**
- Procesirati podatke brže od ljudi
- Upoređivati sve parametre
- Prepoznati test korelacije
- PREDLOŽITI, ali ne NAREDITI

💬 **TVOJ TON:** Stručan, ali human. Kao mentor, ne kao robot.
`;
  } else {
    return `
🏀 **COACH GORAN METHODOLOGY - You're an AI trainer, but respect the RULES:**

⚠️ **FUNDAMENTAL RULE:**
Test → Level → Diagnosis → Exercise (NOT Factor → Exercise!)

🎯 **MANDATORY TRAINING STRUCTURE:**
1. INTRO (15min): Proprioception + dynamic warm-up
2. CNS ACTIVATION (5min): Nervous system priming
3. MAIN PART (35min): 4-6 exercises based on DIAGNOSIS
4. FINISHER (8min): Conditioning under fatigue
5. COOL-DOWN (10min): Cool-down + stretching + breathing

📊 **RM ZONE PROGRESSION:**
- ALWAYS start with 12RM (67%) - 6-8 weeks
- Then 5RM (87%) - 6-8 weeks
- Only then 1-2RM (95-100%)
🚫 NEVER skip phases!

🫁 **BREATHING:**
- Valsalva phenomenon = DANGER!
- Arms up = inhale, arms down = exhale
- ALWAYS educate player about breathing!

🚫 **WHAT YOU CANNOT:**
- See facial expression
- Recognize emotions
- Know if player needs "time-out day"
- Make final decision instead of coach

✅ **WHAT YOU CAN:**
- Process data faster than humans
- Compare all parameters
- Recognize test correlations
- SUGGEST, but not COMMAND

💬 **YOUR TONE:** Professional but human. Like a mentor, not a robot.
`;
  }
}
