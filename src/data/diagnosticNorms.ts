/**
 * DIAGNOSTIC NORMS FOR BASKETBALL PLAYERS
 * 
 * Sources:
 * - NSCA (National Strength & Conditioning Association)
 * - FIBA Basketball Standards
 * - NBA Performance Center
 * - Research: Wilmore & Costill (2005), Heyward (2006)
 * - Coach Goran's experience (Temišvar team data = intermediate-advanced level)
 * 
 * Philosophy: "Test nije samo broj" - analyze beyond numbers, context matters
 */

// Type exports
export type TestLevel = 'beginner' | 'intermediate' | 'advanced' | 'elite';

export interface NormResult {
  level: TestLevel;
  label: string;
  color: string;
}

export type TestEvaluation = NormResult;

// ========================================
// VERTICAL JUMP NORMS (cm)
// ========================================
export const VERTICAL_JUMP_NORMS = {
  // Source: Topend Sports, NBA standards
  male: {
    beginner: { min: 0, max: 40, label: 'Below Average' },      // <16 inches
    intermediate: { min: 41, max: 60, label: 'Average' },       // 16-24 inches
    advanced: { min: 61, max: 70, label: 'Good' },              // 24-28 inches
    elite: { min: 71, max: 999, label: 'Excellent/NBA' },       // >28 inches (NBA: 71-102cm)
  },
  female: {
    beginner: { min: 0, max: 30, label: 'Below Average' },
    intermediate: { min: 31, max: 50, label: 'Average' },
    advanced: { min: 51, max: 60, label: 'Good' },
    elite: { min: 61, max: 999, label: 'Excellent' },
  },
  reference: {
    nba: { average: 76, elite: 102 },                           // NBA: 28-32" avg, 35-40"+ elite
    temisvar: 54,                                                // Coach Goran data (intermediate-advanced)
  }
};

// ========================================
// BROAD JUMP NORMS (meters)
// ========================================
export const BROAD_JUMP_NORMS = {
  male: {
    beginner: { min: 0, max: 2.0, label: 'Below Average' },
    intermediate: { min: 2.01, max: 2.4, label: 'Average' },
    advanced: { min: 2.41, max: 2.7, label: 'Good' },
    elite: { min: 2.71, max: 99, label: 'Excellent' },
  },
  female: {
    beginner: { min: 0, max: 1.5, label: 'Below Average' },
    intermediate: { min: 1.51, max: 1.9, label: 'Average' },
    advanced: { min: 1.91, max: 2.2, label: 'Good' },
    elite: { min: 2.21, max: 99, label: 'Excellent' },
  },
  reference: {
    temisvar: 2.59,                                              // Coach Goran data
  }
};

// ========================================
// SPRINT 5M NORMS (seconds)
// ========================================
export const SPRINT_5M_NORMS = {
  // Lower is better - reversed scale
  male: {
    elite: { min: 0, max: 0.90, label: 'Excellent' },
    advanced: { min: 0.91, max: 1.05, label: 'Good' },
    intermediate: { min: 1.06, max: 1.20, label: 'Average' },
    beginner: { min: 1.21, max: 99, label: 'Below Average' },
  },
  female: {
    elite: { min: 0, max: 1.05, label: 'Excellent' },
    advanced: { min: 1.06, max: 1.20, label: 'Good' },
    intermediate: { min: 1.21, max: 1.35, label: 'Average' },
    beginner: { min: 1.36, max: 99, label: 'Below Average' },
  },
  reference: {
    temisvar: 0.93,                                              // Advanced level
  }
};

// ========================================
// SPRINT 10M NORMS (seconds)
// ========================================
export const SPRINT_10M_NORMS = {
  male: {
    elite: { min: 0, max: 1.60, label: 'Excellent' },
    advanced: { min: 1.61, max: 1.80, label: 'Good' },
    intermediate: { min: 1.81, max: 2.00, label: 'Average' },
    beginner: { min: 2.01, max: 99, label: 'Below Average' },
  },
  female: {
    elite: { min: 0, max: 1.80, label: 'Excellent' },
    advanced: { min: 1.81, max: 2.00, label: 'Good' },
    intermediate: { min: 2.01, max: 2.20, label: 'Average' },
    beginner: { min: 2.21, max: 99, label: 'Below Average' },
  },
  reference: {
    temisvar: 1.68,                                              // Advanced level
  }
};

// ========================================
// SPRINT 20M NORMS (seconds)
// ========================================
export const SPRINT_20M_NORMS = {
  male: {
    elite: { min: 0, max: 3.00, label: 'Excellent' },
    advanced: { min: 3.01, max: 3.30, label: 'Good' },
    intermediate: { min: 3.31, max: 3.60, label: 'Average' },
    beginner: { min: 3.61, max: 99, label: 'Below Average' },
  },
  female: {
    elite: { min: 0, max: 3.30, label: 'Excellent' },
    advanced: { min: 3.31, max: 3.60, label: 'Good' },
    intermediate: { min: 3.61, max: 3.90, label: 'Average' },
    beginner: { min: 3.91, max: 99, label: 'Below Average' },
  },
  reference: {
    temisvar: 3.25,                                              // Advanced level
  }
};

// ========================================
// VO2MAX NORMS (ml/kg/min)
// ========================================
export const VO2MAX_NORMS = {
  // Source: Wilmore & Costill (2005), Heyward (2006)
  // Basketball players (18-30 years): 40-60 ml/kg/min
  male: {
    beginner: { min: 0, max: 39, label: 'Poor' },
    intermediate: { min: 40, max: 49, label: 'Average' },       // General population good
    advanced: { min: 50, max: 59, label: 'Good' },              // Basketball intermediate
    elite: { min: 60, max: 999, label: 'Excellent' },           // Basketball elite
  },
  female: {
    beginner: { min: 0, max: 34, label: 'Poor' },
    intermediate: { min: 35, max: 42, label: 'Average' },
    advanced: { min: 43, max: 52, label: 'Good' },
    elite: { min: 53, max: 999, label: 'Excellent' },
  },
  reference: {
    basketball_range: { min: 40, max: 60 },                     // Wilmore & Costill
    temisvar: 46,                                                // Coach Goran data (intermediate)
  }
};

// ========================================
// AGILITY T-TEST NORMS (seconds)
// ========================================
export const TTEST_NORMS = {
  // Lower is better
  male: {
    elite: { min: 0, max: 9.5, label: 'Excellent' },
    advanced: { min: 9.51, max: 10.5, label: 'Good' },
    intermediate: { min: 10.51, max: 11.5, label: 'Average' },
    beginner: { min: 11.51, max: 99, label: 'Below Average' },
  },
  female: {
    elite: { min: 0, max: 10.5, label: 'Excellent' },
    advanced: { min: 10.51, max: 11.5, label: 'Good' },
    intermediate: { min: 11.51, max: 12.5, label: 'Average' },
    beginner: { min: 12.51, max: 99, label: 'Below Average' },
  }
};

// ========================================
// LANE AGILITY NORMS (seconds)
// ========================================
export const LANE_AGILITY_NORMS = {
  // Basketball-specific agility test
  male: {
    elite: { min: 0, max: 10.5, label: 'Excellent' },
    advanced: { min: 10.51, max: 11.5, label: 'Good' },
    intermediate: { min: 11.51, max: 12.5, label: 'Average' },
    beginner: { min: 12.51, max: 99, label: 'Below Average' },
  },
  female: {
    elite: { min: 0, max: 11.5, label: 'Excellent' },
    advanced: { min: 11.51, max: 12.5, label: 'Good' },
    intermediate: { min: 12.51, max: 13.5, label: 'Average' },
    beginner: { min: 13.51, max: 99, label: 'Below Average' },
  }
};

// ========================================
// KAMIKAZE/SUICIDE DRILL NORMS (seconds)
// ========================================
export const KAMIKAZE_NORMS = {
  male: {
    elite: { min: 0, max: 28, label: 'Excellent' },
    advanced: { min: 28.01, max: 32, label: 'Good' },
    intermediate: { min: 32.01, max: 36, label: 'Average' },
    beginner: { min: 36.01, max: 99, label: 'Below Average' },
  },
  female: {
    elite: { min: 0, max: 32, label: 'Excellent' },
    advanced: { min: 32.01, max: 36, label: 'Good' },
    intermediate: { min: 36.01, max: 40, label: 'Average' },
    beginner: { min: 40.01, max: 99, label: 'Below Average' },
  },
  reference: {
    temisvar: 31.07,                                             // Advanced level
  }
};

// ========================================
// STRENGTH NORMS
// ========================================
export const BENCH_PRESS_NORMS = {
  // Reps at body weight or % of body weight
  male: {
    beginner: { min: 0, max: 5, label: 'Below Average' },
    intermediate: { min: 6, max: 15, label: 'Average' },
    advanced: { min: 16, max: 25, label: 'Good' },
    elite: { min: 26, max: 999, label: 'Excellent' },
  },
  female: {
    beginner: { min: 0, max: 3, label: 'Below Average' },
    intermediate: { min: 4, max: 10, label: 'Average' },
    advanced: { min: 11, max: 20, label: 'Good' },
    elite: { min: 21, max: 999, label: 'Excellent' },
  }
};

export const BACK_SQUAT_NORMS = {
  // Ratio to body weight (e.g., 1.5 = 1.5x body weight)
  male: {
    beginner: { min: 0, max: 1.0, label: 'Below Average' },
    intermediate: { min: 1.01, max: 1.5, label: 'Average' },
    advanced: { min: 1.51, max: 2.0, label: 'Good' },
    elite: { min: 2.01, max: 99, label: 'Excellent' },
  },
  female: {
    beginner: { min: 0, max: 0.8, label: 'Below Average' },
    intermediate: { min: 0.81, max: 1.2, label: 'Average' },
    advanced: { min: 1.21, max: 1.6, label: 'Good' },
    elite: { min: 1.61, max: 99, label: 'Excellent' },
  }
};

// Push-ups (max reps)
export const PUSHUP_NORMS = {
  male: {
    beginner: { min: 0, max: 15, label: 'Below Average' },
    intermediate: { min: 16, max: 30, label: 'Average' },
    advanced: { min: 31, max: 45, label: 'Good' },
    elite: { min: 46, max: 999, label: 'Excellent' },
  },
  female: {
    beginner: { min: 0, max: 10, label: 'Below Average' },
    intermediate: { min: 11, max: 20, label: 'Average' },
    advanced: { min: 21, max: 35, label: 'Good' },
    elite: { min: 36, max: 999, label: 'Excellent' },
  },
  reference: {
    temisvar: 25,                                                // Intermediate-advanced
  }
};

// Sit-ups (max reps in 2 minutes)
export const SITUP_NORMS = {
  male: {
    beginner: { min: 0, max: 50, label: 'Below Average' },
    intermediate: { min: 51, max: 100, label: 'Average' },
    advanced: { min: 101, max: 150, label: 'Good' },
    elite: { min: 151, max: 999, label: 'Excellent' },
  },
  female: {
    beginner: { min: 0, max: 40, label: 'Below Average' },
    intermediate: { min: 41, max: 80, label: 'Average' },
    advanced: { min: 81, max: 120, label: 'Good' },
    elite: { min: 121, max: 999, label: 'Excellent' },
  },
  reference: {
    temisvar: 143,                                               // Advanced level
  }
};

// ========================================
// BODY COMPOSITION NORMS
// ========================================
export const BODY_FAT_NORMS = {
  // Source: NSCA, Sports Medicine standards
  male: {
    elite: { min: 0, max: 8, label: 'Athletic' },               // 6-8% elite athletes
    advanced: { min: 8.01, max: 12, label: 'Good' },            // 8-12% athletes
    intermediate: { min: 12.01, max: 16, label: 'Average' },    // 12-16% recreational
    beginner: { min: 16.01, max: 99, label: 'Above Average' },  // >16% general
  },
  female: {
    elite: { min: 0, max: 14, label: 'Athletic' },
    advanced: { min: 14.01, max: 18, label: 'Good' },
    intermediate: { min: 18.01, max: 22, label: 'Average' },
    beginner: { min: 22.01, max: 99, label: 'Above Average' },
  },
  reference: {
    basketball_male: { min: 6, max: 12 },                       // NSCA basketball norms
    basketball_female: { min: 12, max: 18 },
    temisvar: 13.2,                                              // Intermediate level
  }
};

// ========================================
// FLEXIBILITY NORMS
// ========================================
export const SIT_AND_REACH_NORMS = {
  // Sit and reach test (cm)
  male: {
    beginner: { min: -999, max: 0, label: 'Poor' },
    intermediate: { min: 1, max: 10, label: 'Average' },
    advanced: { min: 11, max: 20, label: 'Good' },
    elite: { min: 21, max: 999, label: 'Excellent' },
  },
  female: {
    beginner: { min: -999, max: 5, label: 'Poor' },
    intermediate: { min: 6, max: 15, label: 'Average' },
    advanced: { min: 16, max: 25, label: 'Good' },
    elite: { min: 26, max: 999, label: 'Excellent' },
  }
};

// ========================================
// HELPER FUNCTIONS
// ========================================

// TestLevel already defined at top of file

export interface NormResult {
  level: TestLevel;
  label: string;
  color: string;
}

/**
 * Evaluate test result against norms
 * @param testName - Name of the test
 * @param value - Test result value
 * @param gender - 'male' or 'female'
 * @returns NormResult with level, label, and color
 */
export function evaluateTestResult(
  testName: string,
  value: number,
  gender: 'male' | 'female'
): NormResult {
  const normMap: Record<string, any> = {
    'vertical_jump': VERTICAL_JUMP_NORMS,
    'broad_jump': BROAD_JUMP_NORMS,
    'sprint_5m': SPRINT_5M_NORMS,
    'sprint_10m': SPRINT_10M_NORMS,
    'sprint_20m': SPRINT_20M_NORMS,
    'vo2max': VO2MAX_NORMS,
    'ttest': TTEST_NORMS,
    'lane_agility': LANE_AGILITY_NORMS,
    'kamikaze': KAMIKAZE_NORMS,
    'pushup': PUSHUP_NORMS,
    'situp': SITUP_NORMS,
    'body_fat': BODY_FAT_NORMS,
    'sit_and_reach': SIT_AND_REACH_NORMS,
  };

  const norms = normMap[testName]?.[gender];
  if (!norms) {
    return { level: 'intermediate', label: 'N/A', color: 'yellow' };
  }

  // Check each level
  for (const level of ['elite', 'advanced', 'intermediate', 'beginner'] as TestLevel[]) {
    const range = norms[level];
    if (range && value >= range.min && value <= range.max) {
      return {
        level,
        label: range.label,
        color: level === 'elite' ? 'blue' : level === 'advanced' ? 'green' : level === 'intermediate' ? 'yellow' : 'red'
      };
    }
  }

  return { level: 'intermediate', label: 'Average', color: 'yellow' };
}

/**
 * Get all norms for a specific test
 */
export function getTestNorms(testName: string, gender: 'male' | 'female') {
  const normMap: Record<string, any> = {
    'vertical_jump': VERTICAL_JUMP_NORMS,
    'broad_jump': BROAD_JUMP_NORMS,
    'sprint_5m': SPRINT_5M_NORMS,
    'sprint_10m': SPRINT_10M_NORMS,
    'sprint_20m': SPRINT_20M_NORMS,
    'vo2max': VO2MAX_NORMS,
    'ttest': TTEST_NORMS,
    'lane_agility': LANE_AGILITY_NORMS,
    'kamikaze': KAMIKAZE_NORMS,
    'pushup': PUSHUP_NORMS,
    'situp': SITUP_NORMS,
    'body_fat': BODY_FAT_NORMS,
    'sit_and_reach': SIT_AND_REACH_NORMS,
  };

  return normMap[testName]?.[gender] || null;
}

/**
 * Get reference data (Temišvar, NBA, etc.)
 */
export function getReferenceData(testName: string) {
  const normMap: Record<string, any> = {
    'vertical_jump': VERTICAL_JUMP_NORMS,
    'broad_jump': BROAD_JUMP_NORMS,
    'sprint_5m': SPRINT_5M_NORMS,
    'sprint_10m': SPRINT_10M_NORMS,
    'sprint_20m': SPRINT_20M_NORMS,
    'vo2max': VO2MAX_NORMS,
    'kamikaze': KAMIKAZE_NORMS,
    'pushup': PUSHUP_NORMS,
    'situp': SITUP_NORMS,
    'body_fat': BODY_FAT_NORMS,
  };

  return normMap[testName]?.reference || null;
}

/**
 * Generate AI analysis prompt context with norms
 */
export function getNormsContextForAI(testName: string, value: number, gender: 'male' | 'female'): string {
  const result = evaluateTestResult(testName, value, gender);
  const reference = getReferenceData(testName);
  
  let context = `Test: ${testName.replace('_', ' ').toUpperCase()}\n`;
  context += `Rezultat: ${value}\n`;
  context += `Nivo: ${result.label} (${result.level})\n`;
  
  if (reference) {
    context += `Reference:\n`;
    if (reference.temisvar) {
      context += `  - Temišvar tim (intermediate-advanced): ${reference.temisvar}\n`;
    }
    if (reference.nba) {
      context += `  - NBA average: ${reference.nba.average}, elite: ${reference.nba.elite}\n`;
    }
    if (reference.basketball_range) {
      context += `  - Basketball range: ${reference.basketball_range.min}-${reference.basketball_range.max}\n`;
    }
  }
  
  return context;
}
