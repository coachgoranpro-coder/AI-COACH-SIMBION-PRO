// Extracted from Coach Goran FPK Book (ALL 4 parts)
// Generated: 2026-01-13T19:22:42.830Z
// Total exercises: 205

export type ExerciseCategory = 
  | 'speed_movement' | 'speed_reaction' | 'speed_start' | 'speed_running'
  | 'strength_speed' | 'strength_explosive' | 'strength_absolute' 
  | 'strength_endurance' | 'strength_repetitive' | 'strength_stamina'
  | 'unilateral_strength'
  | 'endurance_aerobic' | 'endurance_anaerobic' | 'endurance_muscular'
  | 'coordination' | 'flexibility' | 'mobility' | 'balance' 
  | 'proprioception' | 'precision';


export type BasketballPosition = 'PG' | 'SG' | 'SF' | 'PF' | 'C';
export type ExerciseLevel = 'beginner' | 'intermediate' | 'advanced' | 'elite';

export interface Exercise {
  id: string;
  name: { sr: string; en: string };
  category: ExerciseCategory;
  level: 'beginner' | 'intermediate' | 'advanced' | 'elite';
  basketballSpecific: boolean;
  targetTests: string[];
  positions: ('PG' | 'SG' | 'SF' | 'PF' | 'C')[];
  sets: string;
  reps: string;
  load: string;
  rest: string;
  tempo?: string;
  equipment: string[];
  progressions: { easier: string | null; harder: string | null };
  description: string;
  coachingCues: string[];
  commonMistakes: string[];
}

export const exercises: Exercise[] = [
  {
    "name": {
      "sr": "Trbušnjaci",
      "en": "Crunches / Sit-ups"
    },
    "category": "strength_repetitive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Snaga trbušnih mišića"
    ],
    "progressions": {
      "easier": null,
      "harder": "različite kombinacije"
    },
    "description": "Vežbe za trbušne mišiće, čiji je cilj ponavljanje pokreta istom brzinom i intenzitetom.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0001",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Leđnjaci",
      "en": "Back Extensions"
    },
    "category": "strength_repetitive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Snaga trbušnih mišića"
    ],
    "progressions": {
      "easier": null,
      "harder": "različite kombinacije"
    },
    "description": "Vežbe za leđne mišiće, čiji je cilj ponavljanje pokreta istom brzinom i intenzitetom.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0002",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sklekovi",
      "en": "Push-ups"
    },
    "category": "strength_repetitive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Snaga trbušnih mišića"
    ],
    "progressions": {
      "easier": null,
      "harder": "različite kombinacije"
    },
    "description": "Vežbe za snagu gornjeg dela tela, čiji je cilj ponavljanje pokreta istom brzinom i intenzitetom.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0003",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Aerobna trčanja",
      "en": "Aerobic Running"
    },
    "category": "endurance_aerobic",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Beep test"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Trčanja koja se koriste u treningu za razvoj aerobnih sposobnosti.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0004",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Kontranapadi",
      "en": "Fast Breaks"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Basketball"
    ],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": "kompleksne vežbe za tranziciju i odbranu"
    },
    "description": "Izvanredan način za popunjavanje kreatin fosfagenih izvora energije.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0005",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Kompleksne vežbe za tranziciju i odbranu od tranzicije",
      "en": "Complex Transition Drills"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Basketball"
    ],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Koriste se za popunu kreatin fosfagenih izvora energije.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0006",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Skok u dalj iz mesta",
      "en": "Standing Broad Jump"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "4",
    "reps": "2",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "PG",
      "SF",
      "C"
    ],
    "targetTests": [
      "Skok u dalj iz mesta"
    ],
    "progressions": {
      "easier": "Skok sa blagog zamaha, Ograniči dužinu i fokus na doskok",
      "harder": "Dva skoka u seriji (reaktivni), Skok sa zatvorenim očima (kontrola stabilnosti), Poveži sa sprintom 5–10m (reakcija + prenos sile)"
    },
    "description": "Vežba za razvoj horizontalne sile i eksplozivnosti, ključna za akceleraciju i prvi korak.",
    "coachingCues": [
      "guraj kroz kuk, ne kroz koleno",
      "trup previše napred",
      "dobra posturalna linija",
      "video feedback / AI za korekciju tehnike odraza i doskoka"
    ],
    "commonMistakes": [
      "Previše fokus na daljinu umesto na tehniku odraza i doskoka",
      "Kolena kolabiraju unutra pri doskoku (valgus)",
      "Telo se „raspada“ – nema stabilnosti trupa",
      "Nedovoljno koristi ruke – slab transfer energije"
    ],
    "id": "book_part1_0007",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Wall load & jump",
      "en": "Wall Load & Jump"
    },
    "category": "strength_explosive",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Wall"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Korektivna vežba za učenje „učitavanja“ zadnje lože.",
    "coachingCues": [
      "nauči da „učišta“ zadnju ložu"
    ],
    "commonMistakes": [],
    "id": "book_part1_0008",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pad na jednoj nozi sa zadržavanjem",
      "en": "Single Leg Drop & Stick"
    },
    "category": "proprioception",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Korektivna vežba za doskok i stabilnost.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0009",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Tall to short drop + reach",
      "en": "Tall to Short Drop & Reach"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Korektivna vežba za tehniku odraza i doskoka.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0010",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "90/90 mobilnost + dohvat",
      "en": "90/90 Mobility + Reach"
    },
    "category": "mobility",
    "level": "beginner",
    "sets": "3",
    "reps": "30s",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba mobilnosti za zagrevanje.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0011",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Dinamički inčvorm puzanje",
      "en": "Dynamic Inchworm Crawl"
    },
    "category": "mobility",
    "level": "beginner",
    "sets": "2",
    "reps": "5",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Dinamička vežba za zagrevanje i aktivaciju.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0012",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Skipovanje sa pauzom u stavu na jednoj nozi",
      "en": "Skipping with Pause in Single Leg Stance"
    },
    "category": "balance",
    "level": "intermediate",
    "sets": "2",
    "reps": "10m",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba za poboljšanje ravnoteže i stabilnosti.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0013",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pogled i signal + ubrzanje reakcije",
      "en": "Visual Signal & Reaction Acceleration"
    },
    "category": "speed_reaction",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "AI / Trainer"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba za poboljšanje brzine reakcije na vizuelni signal.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0014",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Landmine split skok (reaktivni)",
      "en": "Landmine Split Jump (Reactive)"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "4/strana",
    "load": "landmine",
    "rest": "90s",
    "tempo": "2-0-2",
    "equipment": [
      "Landmine"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Reaktivni split skok pomoću landmine-a za eksplozivnu snagu.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0015",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pad na jednoj nozi sa zadržavanjem",
      "en": "Single Leg Stick Drop"
    },
    "category": "balance",
    "level": "intermediate",
    "sets": "3",
    "reps": "3",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba za stabilnost doskoka na jednoj nozi.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0016",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint start iz kleka (5m)",
      "en": "Kneeling Sprint Start (5m)"
    },
    "category": "speed_start",
    "level": "intermediate",
    "sets": "4",
    "reps": "1",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Sprint 5m"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba za razvoj startne brzine i akceleracije.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0017",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "AIS zadnja loža",
      "en": "AIS Hamstring Stretch"
    },
    "category": "flexibility",
    "level": "beginner",
    "sets": "2",
    "reps": "30s",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Aktivno izolaciono istezanje zadnje lože.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0018",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Disanje uz zid sa dohvatima",
      "en": "Wall Breathing with Reach"
    },
    "category": "mobility",
    "level": "beginner",
    "sets": "2",
    "reps": "1 min",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Wall"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba za mobilnost i disanje uz zid.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0019",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pigeon istezanje (glute i piriformis)",
      "en": "Pigeon Stretch (Glute & Piriformis)"
    },
    "category": "flexibility",
    "level": "beginner",
    "sets": "2",
    "reps": "30s/strana",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Istezanje za gluteus i piriformis mišiće.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0020",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Guranje sanki",
      "en": "Sled Push"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "4",
    "reps": "1 (5m)",
    "load": "75-100% BW",
    "rest": "90s",
    "tempo": "2-0-2",
    "equipment": [
      "Sled"
    ],
    "positions": [
      "PG",
      "SF",
      "C"
    ],
    "targetTests": [
      "Sprint 0-5m"
    ],
    "progressions": {
      "easier": "Kraća distanca (3m), manji otpor (50% BW), izometričko guranje bez pomeranja",
      "harder": "Sanke + sprint u otporu, promena pravca nakon guranja, 125% BW i više"
    },
    "description": "Vežba za razvoj horizontalne sile i eksplozivnosti prvog koraka, simulira guranje zida.",
    "coachingCues": [
      "guraj kroz kuk, ne kroz koleno",
      "trup previše napred",
      "dobra posturalna linija",
      "puna tenzija"
    ],
    "commonMistakes": [
      "trup pada napred",
      "kolena se rotiraju unutra",
      "noga se izvlači iz pravilne linije sile"
    ],
    "id": "book_part1_0021",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Glute bridge sa izometrijskim zadržavanjem",
      "en": "Glute Bridge with Isometric Hold"
    },
    "category": "proprioception",
    "level": "beginner",
    "sets": "2",
    "reps": "30s",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Aktivacija gluteusa.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0022",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "World's greatest stretch (sa dohvatima)",
      "en": "World's Greatest Stretch (with Reach)"
    },
    "category": "mobility",
    "level": "intermediate",
    "sets": "1",
    "reps": "6 po strani",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Složena vežba mobilnosti za celo telo.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0023",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "A-skip u wall lean hold",
      "en": "A-Skip into Wall Lean Hold"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "2",
    "reps": "10m + 2x5s izdržaj",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Wall"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Aktivacija gluteusa, trupa i pozicioniranje tela za horizontalni prenos sile.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0024",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint stav pad + reakcija na verbalni signal",
      "en": "Sprint Stance Drop + Verbal Cue Reaction"
    },
    "category": "speed_reaction",
    "level": "intermediate",
    "sets": "3",
    "reps": "po strani",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba za poboljšanje startne reakcije na verbalni signal.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0025",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint iz sprint stava (5m)",
      "en": "Sprint from Sprint Stance (5m)"
    },
    "category": "speed_start",
    "level": "intermediate",
    "sets": "4",
    "reps": "1 (5m)",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Sprint 5m"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba za razvoj startne brzine i akceleracije, deo kontrastnog treninga sa sankama.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0026",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Bacanje medicinke iz grudi (sa korakom napred)",
      "en": "Medball Chest Throw (with Forward Step)"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "3",
    "load": "3-5kg",
    "rest": "45s",
    "tempo": "2-0-2",
    "equipment": [
      "Medicine ball"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba za eksplozivnu snagu gornjeg dela tela sa prenosom sile kroz korak.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0027",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Guranje sanki + ubrzanje",
      "en": "Sled Push + Acceleration"
    },
    "category": "strength_explosive",
    "level": "advanced",
    "sets": "2",
    "reps": "1",
    "load": "srednje",
    "rest": "120s",
    "tempo": "2-0-2",
    "equipment": [
      "Sled"
    ],
    "positions": [
      "PG",
      "SF",
      "C"
    ],
    "targetTests": [
      "Sprint 5m"
    ],
    "progressions": {
      "easier": "Guranje sanki",
      "harder": null
    },
    "description": "Kombinovana vežba za guranje sanki praćena sprintom za razvoj horizontalne sile i ubrzanja.",
    "coachingCues": [
      "puna tenzija guranja",
      "horizontalno guranje zida"
    ],
    "commonMistakes": [],
    "id": "book_part1_0028",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pliometrija sa fokusom na SSC",
      "en": "Plyometrics with SSC Focus"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "CMJ",
      "Skok uvis"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Pliometrijske vežbe sa fokusom na ciklus istezanja i skraćivanja (SSC) za poboljšanje RFD.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0029",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Depth jump",
      "en": "Depth Jump"
    },
    "category": "strength_explosive",
    "level": "advanced",
    "sets": "4",
    "reps": "3",
    "load": "bodyweight",
    "rest": "90s",
    "tempo": "Brz odraz",
    "equipment": [
      "Box"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "CMJ",
      "Skok uvis"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Pliometrijska vežba za razvoj eksplozivne snage i brzog odraza.",
    "coachingCues": [
      "Brz odraz",
      "minimalan kontakt"
    ],
    "commonMistakes": [],
    "id": "book_part1_0030",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Hop-to-box",
      "en": "Hop-to-Box"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Box"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "CMJ",
      "Skok uvis"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Pliometrijska vežba za razvoj eksplozivne snage.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0031",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Ekscentrični rad (Nordic, drop squat)",
      "en": "Eccentric Work (Nordic, Drop Squat)"
    },
    "category": "strength_explosive",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "CMJ"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežbe za jačanje ekscentrične snage mišića, uključujući Nordic hamstring curls i drop squats.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0032",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Mobilnost kukova i skočnog zgloba (deep squat hold + dynamic ankle rocks)",
      "en": "Hip and Ankle Mobility (Deep Squat Hold + Dynamic Ankle Rocks)"
    },
    "category": "mobility",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežbe za poboljšanje mobilnosti kukova i skočnog zgloba.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0033",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Aktivacija gluteusa (miniband walks, single-leg bridge)",
      "en": "Glute Activation (Miniband Walks, Single-Leg Bridge)"
    },
    "category": "proprioception",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Miniband"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežbe za aktivaciju glutealnih mišića.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0034",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "CNS primer (skok u mestu)",
      "en": "CNS Primer (Jump in Place)"
    },
    "category": "strength_explosive",
    "level": "beginner",
    "sets": "3",
    "reps": "5",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "lagano",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Lagani skokovi u mestu za pripremu centralnog nervnog sistema.",
    "coachingCues": [
      "lagano"
    ],
    "commonMistakes": [],
    "id": "book_part1_0035",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Skok iz čučnja sa opterećenjem",
      "en": "Loaded Squat Jump"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "4",
    "load": "10-20% BW",
    "rest": "2min",
    "tempo": "Speed-strength",
    "equipment": [
      "Barbell",
      "Dumbbells",
      "Kettlebells"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "CMJ",
      "Skok uvis"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba za razvoj eksplozivne snage i brzine uz opterećenje.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0036",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Hang power clean (tehnika)",
      "en": "Hang Power Clean (Technique)"
    },
    "category": "strength_explosive",
    "level": "advanced",
    "sets": "3",
    "reps": "3",
    "load": "tehnika",
    "rest": "2min",
    "tempo": "2-0-2",
    "equipment": [
      "Barbell"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba olimpijskog dizanja za razvoj eksplozivne snage i tehnike.",
    "coachingCues": [
      "Tehnički rad"
    ],
    "commonMistakes": [],
    "id": "book_part1_0037",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Drop lunge u skok",
      "en": "Drop Lunge into Jump"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "5",
    "load": "bodyweight",
    "rest": "90s",
    "tempo": "Unilateralna eksplozivnost",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Unilateralna vežba za razvoj eksplozivne snage i stabilnosti.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0038",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Rolleri, statički stretching donjih ekstremiteta",
      "en": "Foam Rolling, Static Stretching Lower Extremities"
    },
    "category": "flexibility",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Foam roller"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežbe za oporavak i povećanje fleksibilnosti donjih ekstremiteta.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0039",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Lagana vožnja bicikla/hodanje za oporavak",
      "en": "Light Cycling/Walking for Recovery"
    },
    "category": "endurance_aerobic",
    "level": "beginner",
    "sets": "1",
    "reps": "3 min",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "lagano",
    "equipment": [
      "Stationary bike"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Aktivni oporavak nakon treninga.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0040",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Unilateralni rad (single leg jump to box, Bulgarian split jump)",
      "en": "Unilateral Work (Single Leg Jump to Box, Bulgarian Split Jump)"
    },
    "category": "unilateral_strength",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Box"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "CMJ",
      "Skok uvis"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Unilateralne vežbe za korekciju asimetrije, uključujući skok na kutiju na jednoj nozi i bugarski iskorak sa skokom.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0041",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Tehnika skoka sa predzamahom",
      "en": "Arm Swing Jump Technique"
    },
    "category": "coordination",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Skok uvis"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Učenje pravilne tehnike skoka sa predzamahom ruku kroz složene vežbe.",
    "coachingCues": [],
    "commonMistakes": [
      "igrač ne koristi ruke"
    ],
    "id": "book_part1_0042",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "HIIT i SIT protokoli (15-15, 30-30)",
      "en": "HIIT & SIT Protocols (15-15, 30-30)"
    },
    "category": "endurance_anaerobic",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "VO2max",
      "HR recovery"
    ],
    "progressions": {
      "easier": null,
      "harder": "vezano za pozicioni rad (npr. 3x4min svestranih zadataka)"
    },
    "description": "Visoko intenzivni intervalni trening (HIIT) i sprint intervalni trening (SIT) protokoli za poboljšanje VO2max i oporavka.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0043",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "FitLight drilovi",
      "en": "FitLight Drills"
    },
    "category": "speed_reaction",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "FitLight system"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Reakcija",
      "Donošenje odluke"
    ],
    "progressions": {
      "easier": null,
      "harder": "progresivna složenost"
    },
    "description": "Drilovi za poboljšanje brzine reakcije i donošenja odluka koristeći FitLight sistem.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0044",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Simulacije 'prati loptu'",
      "en": "'Follow the Ball' Simulations"
    },
    "category": "speed_reaction",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Basketball"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Reakcija",
      "Donošenje odluke"
    ],
    "progressions": {
      "easier": null,
      "harder": "progresivna složenost"
    },
    "description": "Simulacije za poboljšanje reakcije na kretanje lopte, kognitivni + motorički zadaci.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0045",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Dual-task zadaci (kognitivni + motorički)",
      "en": "Dual-Task Drills (Cognitive + Motor)"
    },
    "category": "speed_reaction",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Reakcija",
      "Donošenje odluke"
    ],
    "progressions": {
      "easier": null,
      "harder": "progresivna složenost"
    },
    "description": "Zadaci koji kombinuju kognitivne i motoričke elemente za poboljšanje brzine reakcije i donošenja odluka.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0046",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Mirror drilovi",
      "en": "Mirror Drills"
    },
    "category": "speed_reaction",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Reakcija"
    ],
    "progressions": {
      "easier": null,
      "harder": "progresivna složenost"
    },
    "description": "Drilovi za poboljšanje brzine reakcije i agilnosti praćenjem partnera.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0047",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Unilateralni rad (single leg RDL, step-up, lunge matrix)",
      "en": "Unilateral Work (Single Leg RDL, Step-Up, Lunge Matrix)"
    },
    "category": "unilateral_strength",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Dumbbells",
      "Kettlebells",
      "Box"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Asimetrija"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Unilateralne vežbe za ispravljanje asimetrije i jačanje core stabilnosti.",
    "coachingCues": [
      "ispravka rotacija i kontrole core-a"
    ],
    "commonMistakes": [],
    "id": "book_part1_0048",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "CMJ iz pokreta",
      "en": "Countermovement Jump from Movement"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "CMJ"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "CMJ sa fokusom na tehniku odraza iz pokreta.",
    "coachingCues": [
      "fokus na tehniku odlaska"
    ],
    "commonMistakes": [],
    "id": "book_part1_0049",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Reaktivni skokovi preko niskih prepona",
      "en": "Reactive Hurdle Hop (Low)"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "5 ponavljanja",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Hurdles"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "CMJ"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Reaktivni skokovi preko niskih prepona za poboljšanje SSC efikasnosti.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0050",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Dribling sa dve lopte + vizuelni signal",
      "en": "Two-Ball Dribbling + Visual Signal"
    },
    "category": "coordination",
    "level": "intermediate",
    "sets": "2 serije",
    "reps": "3 minuta",
    "load": "bodyweight",
    "rest": "po bloku",
    "tempo": "2-0-2",
    "equipment": [
      "Basketball",
      "Visual signal device"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [
      "Reakcija",
      "Donošenje odluke"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Dribling sa dve lopte uz vizuelni signal za poboljšanje kognitivne brzine i koordinacije.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0051",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Dodavanje lopte na zvuk/svetlo",
      "en": "Ball Pass on Sound/Light Cue"
    },
    "category": "speed_reaction",
    "level": "intermediate",
    "sets": "2 serije",
    "reps": "3 minuta",
    "load": "bodyweight",
    "rest": "po bloku",
    "tempo": "2-0-2",
    "equipment": [
      "Basketball",
      "Sound/Light cue device"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [
      "Reakcija",
      "Donošenje odluke"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba dodavanja lopte kao reakcija na zvučni ili svetlosni signal.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0052",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Hex bar skok",
      "en": "Hex Bar Jump"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "4",
    "load": "40-60% 1RM",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Hex bar"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "CMJ",
      "Skok uvis"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Skok sa hex barom za razvoj eksplozivne snage.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0053",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Trap bar deadlift",
      "en": "Trap Bar Deadlift"
    },
    "category": "strength_absolute",
    "level": "intermediate",
    "sets": "3",
    "reps": "5",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Trap bar"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Mrtvo dizanje sa trap barom za razvoj snage.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0054",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Bacanje medicinke o pod + skok",
      "en": "Med Ball Slam + Jump"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "5",
    "load": "Medicine ball",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Medicine ball"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Kombinacija bacanja medicinke i skoka za razvoj eksplozivne snage celog tela.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0055",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "CMJ sa opterećenjem",
      "en": "Loaded Countermovement Jump"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "4",
    "reps": "4",
    "load": "10% BW",
    "rest": "90-120 sekundi",
    "tempo": "2-0-2",
    "equipment": [
      "Barbell",
      "Dumbbells",
      "Vest"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "CMJ",
      "Skok uvis"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Kontra-pokret skok sa opterećenjem za razvoj eksplozivne snage.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0056",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Drop squat iz pozicije ¼ čučnja",
      "en": "Drop Squat from Quarter Squat"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "4",
    "reps": "4",
    "load": "bodyweight",
    "rest": "90-120 sekundi",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Pliometrijska vežba za razvoj eksplozivne snage i brzine iz četvrtine čučnja.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0057",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Brza lateralna pomeranja sa šutom iz driblinga",
      "en": "Fast Lateral Movements with Dribble Shot"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Basketball"
    ],
    "positions": [
      "SG",
      "SF"
    ],
    "targetTests": [
      "Agilnost",
      "Test preciznosti"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Simulacija završnice sa brzim lateralnim pomeranjima i šutom iz driblinga.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0058",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sled sprintovi, akceleracija s otporom",
      "en": "Sled Sprints, Resisted Acceleration"
    },
    "category": "speed_start",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "Resistance (sled, band, parachute)",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Sled",
      "Resistance band",
      "Parachute"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Sprint 5m",
      "Sprint 10m"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Sprintovi sa otporom za poboljšanje startne reakcije i akceleracije.",
    "coachingCues": [
      "Tehničko učenje i ekscentrična kontrola"
    ],
    "commonMistakes": [],
    "id": "book_part1_0059",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Lean-fall-run",
      "en": "Lean-Fall-Run"
    },
    "category": "speed_start",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Sprint 5m",
      "Sprint 10m"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba za učenje pravilne pozicije tela pri startu sprinta.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0060",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Leteći sprintovi (10-30m build-up)",
      "en": "Flying Sprints (10-30m Build-up)"
    },
    "category": "speed_running",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Sprint 20m"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Sprintovi sa postepenim ubrzanjem za razvoj maksimalne brzine.",
    "coachingCues": [
      "Ne raditi uz umor"
    ],
    "commonMistakes": [],
    "id": "book_part1_0061",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "A/B skipovi sa otporom",
      "en": "A/B Skips with Resistance"
    },
    "category": "speed_running",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "Resistance",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Resistance band"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Sprint 20m"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Skipovi sa otporom za poboljšanje tehnike trčanja i brzine.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0062",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Eksplozije sa medicinkom",
      "en": "Medicine Ball Explosions"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "Medicine ball",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Medicine ball"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "CMJ"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Eksplozivne vežbe sa medicinkom za razvoj snage i brzine, kombinovati sa senzo-motornim vežbama.",
    "coachingCues": [
      "Kombinovati sa senzo-motornim vežbama"
    ],
    "commonMistakes": [],
    "id": "book_part1_0063",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Protokoli za izdržljivost trupa (RKC plank, hollow hold, side plank s pokretom)",
      "en": "Core Endurance Protocols (RKC Plank, Hollow Hold, Side Plank with Movement)"
    },
    "category": "strength_endurance",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Unstable surface"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Plank"
    ],
    "progressions": {
      "easier": null,
      "harder": "Dodati nestabilnu podlogu i disanje"
    },
    "description": "Protokoli za jačanje izdržljivosti core mišića, uključujući RKC plank, hollow hold i bočni plank sa pokretom.",
    "coachingCues": [
      "Dodati nestabilnu podlogu i disanje"
    ],
    "commonMistakes": [],
    "id": "book_part1_0064",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Shuttle intervali (15-15, 30-30)",
      "en": "Shuttle Intervals (15-15, 30-30)"
    },
    "category": "endurance_anaerobic",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Beep test"
    ],
    "progressions": {
      "easier": null,
      "harder": "Ciljati progresivno povećanje trajanja"
    },
    "description": "Intervalni treninzi sa šatl trčanjem za poboljšanje laktatne tolerancije i aerobnog kapaciteta.",
    "coachingCues": [
      "Ciljati progresivno povećanje trajanja"
    ],
    "commonMistakes": [],
    "id": "book_part1_0065",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Small-sided games",
      "en": "Small-Sided Games"
    },
    "category": "endurance_anaerobic",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Basketball"
    ],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "targetTests": [
      "Beep test"
    ],
    "progressions": {
      "easier": null,
      "harder": "Ciljati progresivno povećanje trajanja"
    },
    "description": "Igre na smanjenom prostoru za razvoj aerobnog i anaerobnog kapaciteta.",
    "coachingCues": [
      "Ciljati progresivno povećanje trajanja"
    ],
    "commonMistakes": [],
    "id": "book_part1_0066",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Laktatne serije",
      "en": "Lactate Sets"
    },
    "category": "endurance_anaerobic",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Beep test"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Serije vežbi visokog intenziteta za razvoj tolerancije na laktat.",
    "coachingCues": [
      "Ciljati progresivno povećanje trajanja"
    ],
    "commonMistakes": [],
    "id": "book_part1_0067",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "5-0-5 dril",
      "en": "5-0-5 Drill"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Lateralni test"
    ],
    "progressions": {
      "easier": null,
      "harder": "Raditi na prednjem delu stopala i orijentaciji tela"
    },
    "description": "Dril za poboljšanje lateralne agilnosti.",
    "coachingCues": [
      "Raditi na prednjem delu stopala i orijentaciji tela"
    ],
    "commonMistakes": [],
    "id": "book_part1_0068",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pro agility",
      "en": "Pro Agility Shuttle"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Lateralni test"
    ],
    "progressions": {
      "easier": null,
      "harder": "Raditi na prednjem delu stopala i orijentaciji tela"
    },
    "description": "Shuttle dril za testiranje i razvoj agilnosti i promene pravca.",
    "coachingCues": [
      "Raditi na prednjem delu stopala i orijentaciji tela"
    ],
    "commonMistakes": [],
    "id": "book_part1_0069",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Reaktivno praćenje, promene pravca sa zadatkom",
      "en": "Reactive Mirroring, Direction Changes with Task"
    },
    "category": "speed_reaction",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Lateralni test"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Reaktivni drilovi praćenja pokreta i promene pravca uz zadatak za poboljšanje agilnosti i orijentacije tela.",
    "coachingCues": [
      "Raditi na prednjem delu stopala i orijentaciji tela"
    ],
    "commonMistakes": [],
    "id": "book_part1_0070",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Korektivna gimnastika",
      "en": "Corrective Gymnastics"
    },
    "category": "flexibility",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Gipkost"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežbe za opšti bazični razvoj i propriocepciju, posebno važne zbog smanjenja časova fizičke kulture.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0071",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Vežbe za šaku (fleksije, ekstenzije, adukcije, abdukcije)",
      "en": "Hand Exercises (Flexion, Extension, Adduction, Abduction)"
    },
    "category": "flexibility",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežbe za fleksibilnost i snagu šake, svakodnevno se izvode radi prevencije povreda i poboljšanja preciznosti šuta.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0072",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Vežbe za stopala (dorzi fleksija, plantarna ekstenzija, rotacije)",
      "en": "Foot Exercises (Dorsiflexion, Plantarflexion, Ankle Rotations)"
    },
    "category": "flexibility",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežbe za fleksibilnost i snagu stopala i skočnog zgloba, svakodnevno se izvode radi prevencije povreda.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0073",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pasovi košarkaškom loptom",
      "en": "Basketball Passes"
    },
    "category": "coordination",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "Basketball",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Basketball"
    ],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": "prelazak na medicinku"
    },
    "description": "Vežbe za razvoj propriocepcije i koordinacije, posredno.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0074",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Jumping Jack flash",
      "en": "Jumping Jack Flash"
    },
    "category": "speed_movement",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Agilnost"
    ],
    "progressions": {
      "easier": null,
      "harder": "povišava nivo izvođenja vežbe, dodaju nove i usložnjavaju se zadaci"
    },
    "description": "Vežba za povezivanje nogu i ruku, poboljšava brzinu i koordinaciju.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0075",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Karioka",
      "en": "Carioca (Grapevine)"
    },
    "category": "speed_movement",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Agilnost",
      "Lateralni test"
    ],
    "progressions": {
      "easier": null,
      "harder": "povišava nivo izvođenja vežbe, dodaju nove i usložnjavaju se zadaci"
    },
    "description": "Vežba za razvoj lateralne koordinacije i agilnosti.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part1_0076",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Trening balansa na nestabilnim platformama",
      "en": "Unstable Surface Balance Training"
    },
    "category": "balance",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "Balance board",
      "Stability ball"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [
      "Flamingo test"
    ],
    "progressions": {
      "easier": null,
      "harder": "dinamičke vežbe sa loptom i rekvizitima"
    },
    "description": "Vežbe na nestabilnim platformama za razvoj ravnoteže, ali se kritikuje za visoke igrače zbog rizika od povreda ako nisu spremni.",
    "coachingCues": [
      "fokus na snagu mišića koji fiksiraju zglobove"
    ],
    "commonMistakes": [
      "visok rizik od povrede kod visokih igrača",
      "stvaranje nediscipline"
    ],
    "id": "book_part1_0077",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Skok-čučanj sa opterećenjem",
      "en": "Jump Squat with Load"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "8",
    "load": "light load",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "load"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Jump squat performed with additional load.",
    "coachingCues": [],
    "commonMistakes": [
      "Neefikasan šut iz pokreta",
      "slaba lateralna agilnost (general for SG)"
    ],
    "id": "book_part4_0001",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Iskorak u lateralnom smeru sa rotacijom trupa",
      "en": "Lateral Lunge with Torso Rotation"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3",
    "reps": "12 po strani",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Lateral lunge combined with a torso rotation.",
    "coachingCues": [],
    "commonMistakes": [
      "Neefikasan šut iz pokreta",
      "slaba lateralna agilnost (general for SG)"
    ],
    "id": "book_part4_0002",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint sa promenom pravca (čunjevi)",
      "en": "Sprint with Change of Direction (Cones)"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "5",
    "reps": "20m",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "čunjevi"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Sprint with changes of direction, using cones to simulate game situations.",
    "coachingCues": [],
    "commonMistakes": [
      "Neefikasan šut iz pokreta",
      "slaba lateralna agilnost (general for SG)"
    ],
    "id": "book_part4_0003",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Bacanje medicinke u podlogu iz čučnja",
      "en": "Medicine Ball Slam from Squat"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "15",
    "load": "medicinka",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "medicinka"
    ],
    "positions": [
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Slamming a medicine ball into the ground from a squat position.",
    "coachingCues": [],
    "commonMistakes": [
      "Nedovoljno snažan dribling i slab kontakt pri ulazu (general for SF)"
    ],
    "id": "book_part4_0004",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sklekovi sa rotacijom ka lopti",
      "en": "Push-ups with Rotation towards Ball"
    },
    "category": "strength_endurance",
    "level": "intermediate",
    "sets": "4",
    "reps": "10",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta (kao referenca za rotaciju)"
    ],
    "positions": [
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Push-ups with a rotational movement towards a ball.",
    "coachingCues": [],
    "commonMistakes": [
      "Nedovoljno snažan dribling i slab kontakt pri ulazu (general for SF)"
    ],
    "id": "book_part4_0005",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pliometrijski skokovi sa rotacijom",
      "en": "Plyometric Jumps with Rotation"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "4",
    "reps": "6",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Plyometric jumps incorporating rotational movements, with focus on body control.",
    "coachingCues": [
      "Fokus na kontrolu tela"
    ],
    "commonMistakes": [
      "Nedovoljno snažan dribling i slab kontakt pri ulazu (general for SF)"
    ],
    "id": "book_part4_0006",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Trap bar deadlift",
      "en": "Trap Bar Deadlift"
    },
    "category": "strength_absolute",
    "level": "intermediate",
    "sets": "4",
    "reps": "6",
    "load": "70% 1RM",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "trap bar"
    ],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Deadlift performed using a trap bar at 70% of one-rep max.",
    "coachingCues": [],
    "commonMistakes": [
      "Slab kontakt u reketu",
      "nedovoljno eksplozivan skok (general for C)"
    ],
    "id": "book_part4_0007",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pliometrijski skokovi na kutiju",
      "en": "Plyometric Box Jumps"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "8",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "kutija (box)"
    ],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Plyometric jumps onto a box, focusing on stabilization upon landing.",
    "coachingCues": [
      "Fokus na stabilizaciji pri doskoku"
    ],
    "commonMistakes": [
      "Slab kontakt u reketu",
      "nedovoljno eksplozivan skok (general for C)"
    ],
    "id": "book_part4_0008",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Simulacija kontakta sa otporom (medicinka)",
      "en": "Contact Simulation with Resistance (Medicine Ball)"
    },
    "category": "strength_repetitive",
    "level": "intermediate",
    "sets": "3",
    "reps": "12",
    "load": "medicinka",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "medicinka"
    ],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Simulating contact with resistance, using a medicine ball as load during entry.",
    "coachingCues": [],
    "commonMistakes": [
      "Slab kontakt u reketu",
      "nedovoljno eksplozivan skok (general for C)"
    ],
    "id": "book_part4_0009",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "CMJ (Countermovement Jump)",
      "en": "CMJ (Countermovement Jump)"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Jump from a countermovement.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0010",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Bounding",
      "en": "Bounding"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Series of exaggerated, long strides with a focus on height and distance.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0011",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Push sled (kratko)",
      "en": "Push Sled (short distance)"
    },
    "category": "strength_speed",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "sled",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [
      "sanke (sled)"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Pushing a weighted sled over a short distance.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0012",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "T-test",
      "en": "T-test"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [
      "čunjevi (implied)"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [
      "T-test"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Agility test involving forward, lateral, and backward movements.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0013",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "5-10-5 Shuttle Run",
      "en": "5-10-5 Shuttle Run"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [
      "čunjevi (implied)"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [
      "5-10-5"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Agility test involving sprinting 5 yards, changing direction, sprinting 10 yards, changing direction, and sprinting 5 yards.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0014",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Reactive COD",
      "en": "Reactive Change of Direction"
    },
    "category": "speed_reaction",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "PG"
    ],
    "targetTests": [
      "Reactive COD"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Change of direction drills with reactive stimulus.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0015",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "10m sprint iz statike",
      "en": "10m Sprint from Standing Start"
    },
    "category": "speed_start",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "PG"
    ],
    "targetTests": [
      "10m sprint"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "10-meter sprint starting from a static position.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0016",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Doskok u jedno stopalo + šut",
      "en": "Single Leg Landing + Shot"
    },
    "category": "balance",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Landing on one leg followed by a shot.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0017",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Svetlosni pas + COD + šut",
      "en": "Light Signal Pass + COD + Shot"
    },
    "category": "speed_reaction",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [
      "svetlosni signal",
      "lopta"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Reacting to a light signal to receive a pass, perform a change of direction, and take a shot.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0018",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint 5m + COD na svetlo + pas (Brzi PG)",
      "en": "5m Sprint + COD to Light + Pass (Fast PG)"
    },
    "category": "speed_reaction",
    "level": "advanced",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [
      "svetlosni signal",
      "lopta"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "5-meter sprint, reactive change of direction to a light signal, followed by a pass.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0019",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "3x3 mirror drill (Brzi PG)",
      "en": "3x3 Mirror Drill (Fast PG)"
    },
    "category": "speed_reaction",
    "level": "advanced",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "A 3-on-3 drill where players mirror opponents' movements.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0020",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "30-45s decision drill (Ritam PG)",
      "en": "30-45s Decision Drill (Rhythm PG)"
    },
    "category": "speed_reaction",
    "level": "advanced",
    "sets": "3-4",
    "reps": "30-45s trajanje",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [
      "svetlosni signal",
      "lopta"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "A 30-45 second drill involving reacting to a light signal and making a decision to shoot, pass, or dribble.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0021",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Vođenje + balans u dužem trajanju (Ritam PG)",
      "en": "Dribbling + Balance for Extended Duration (Rhythm PG)"
    },
    "category": "balance",
    "level": "advanced",
    "sets": "3-4",
    "reps": "duže trajanje",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Dribbling while maintaining balance for an extended period.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0022",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Šut posle 2 promene pravca (Šuter PG)",
      "en": "Shot after 2 Changes of Direction (Shooter PG)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Taking a shot immediately after performing two changes of direction.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0023",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Stop-jump-back šut pod zamorom (Šuter PG)",
      "en": "Stop-Jump-Back Shot under Fatigue (Shooter PG)"
    },
    "category": "precision",
    "level": "advanced",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Performing a stop, jump back, and shoot under fatigued conditions.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0024",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "COD u desno sa šutem iz kontra strane (Levoruki PG)",
      "en": "COD to the Right with Shot from Opposite Side (Left-handed PG)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Change of direction to the right, followed by a shot from the opposite side (specific for left-handed players).",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0025",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Bočna asimetrija: skip + šut (Levoruki PG)",
      "en": "Lateral Asymmetry: Skip + Shot (Left-handed PG)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3-4",
    "reps": "90-100% intenzitet",
    "load": "bodyweight",
    "rest": "45-60 sek",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Drill focusing on lateral asymmetry, involving a skip movement followed by a shot.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0026",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "5-10-5 s pasom u pokretu (SG)",
      "en": "5-10-5 with Moving Pass (SG)"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3",
    "reps": "5",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [
      "5-10-5"
    ],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "5-10-5 shuttle run with a moving pass.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0027",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Cut + COD + šut iz pozicije (SG)",
      "en": "Cut + COD + Shot from Position (SG)"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "4",
    "reps": "3 po strani",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Perform a cut, change of direction, and shoot from a designated position.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0028",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Lateralni skok + stabilizacija (SG)",
      "en": "Lateral Jump + Stabilization (SG)"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "10",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Lateral jump followed by a controlled stabilization.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0029",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Light reaction -> šut/ulaz (SG)",
      "en": "Light Reaction -> Shot/Drive (SG)"
    },
    "category": "speed_reaction",
    "level": "intermediate",
    "sets": "5",
    "reps": "10s rad",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "svetlosni signal",
      "lopta"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Reacting to a light signal to either shoot or drive to the basket.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0030",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Cut -> pas -> stop + šut (Catch & Shoot SG)",
      "en": "Cut -> Pass -> Stop + Shot (Catch & Shoot SG)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Execute a cut, receive a pass, stop, and shoot.",
    "coachingCues": [
      "Brzo postavljanje nogu",
      "šut iz kratke reakcije"
    ],
    "commonMistakes": [],
    "id": "book_part4_0031",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Reakcija na svetlosni signal (šut ili lažnjak) (Catch & Shoot SG)",
      "en": "Reaction to Light Signal (Shot or Fake) (Catch & Shoot SG)"
    },
    "category": "speed_reaction",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "svetlosni signal",
      "lopta"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Reacting to a light signal by either shooting or faking a shot.",
    "coachingCues": [
      "Brzo postavljanje nogu",
      "šut iz kratke reakcije"
    ],
    "commonMistakes": [],
    "id": "book_part4_0032",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "COD -> prodor -> završnica (Slash-napadač SG)",
      "en": "COD -> Drive -> Finish (Slash-Attacker SG)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Change of direction, followed by a drive to the basket and finish.",
    "coachingCues": [
      "Snaga u ulazu",
      "COD u pravcu koša"
    ],
    "commonMistakes": [],
    "id": "book_part4_0033",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Heavy sled push 5m + ulaz (Slash-napadač SG)",
      "en": "Heavy Sled Push 5m + Drive (Slash-Attacker SG)"
    },
    "category": "strength_explosive",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "sanke (sled)",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "sanke (sled)",
      "lopta"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Pushing a heavy sled for 5 meters, immediately followed by a drive to the basket.",
    "coachingCues": [
      "Snaga u ulazu",
      "COD u pravcu koša"
    ],
    "commonMistakes": [],
    "id": "book_part4_0034",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Defensive shuffle + close-out -> šut (3&D SG)",
      "en": "Defensive Shuffle + Close-out -> Shot (3&D SG)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Performing a defensive shuffle, then a close-out, followed by a shot.",
    "coachingCues": [
      "Lateralna izdržljivost + balans u šutu"
    ],
    "commonMistakes": [],
    "id": "book_part4_0035",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Defanzivne sekvence sa rotacijom (3&D SG)",
      "en": "Defensive Sequences with Rotation (3&D SG)"
    },
    "category": "endurance_muscular",
    "level": "advanced",
    "sets": "3",
    "reps": "20s",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "20-second defensive sequences incorporating rotations.",
    "coachingCues": [
      "Lateralna izdržljivost + balans u šutu"
    ],
    "commonMistakes": [],
    "id": "book_part4_0036",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Cut + COD + šut / Reakcija na svetlo + skok šut (Catch & Shoot SG)",
      "en": "Cut + COD + Shot / Reaction to Light + Jump Shot (Catch & Shoot SG)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "4",
    "reps": "5 ponavljanja",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta",
      "svetlosni signal"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Combination of cutting, COD, and shooting, or reacting to a light signal with a jump shot.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0037",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "COD + vođenje + ulaz / Sled push + prodor (Slash-napadač SG)",
      "en": "COD + Dribble + Drive / Sled Push + Penetration (Slash-Attacker SG)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3",
    "reps": "5 svaka strana",
    "load": "sanke (sled)",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta",
      "sanke (sled)"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Combination of COD, dribbling, and driving, or pushing a sled and penetrating to the basket.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0038",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Shuffle + close-out + šut / Reactive footwork + balans (3&D SG)",
      "en": "Shuffle + Close-out + Shot / Reactive Footwork + Balance (3&D SG)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3",
    "reps": "20s rad + 30s pauza",
    "load": "bodyweight",
    "rest": "30s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Combination of defensive shuffling, close-out, and shooting, or reactive footwork and balance drills.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0039",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "10m Sprint -> COD -> Šut ili Pas (SF)",
      "en": "10m Sprint -> COD -> Shot or Pass (SF)"
    },
    "category": "speed_running",
    "level": "intermediate",
    "sets": "4",
    "reps": "4 ponavljanja",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "10-meter sprint followed by a change of direction, and then either a shot or a pass.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0040",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Blok Kontakt -> Pivot -> Završnica (SF)",
      "en": "Block Contact -> Pivot -> Finish (SF)"
    },
    "category": "strength_repetitive",
    "level": "intermediate",
    "sets": "3",
    "reps": "5 ponavljanja",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Drill involving block contact, a pivot, and finishing the move.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0041",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Shuffle + Close-out -> Skok -> Skok unazad (SF)",
      "en": "Shuffle + Close-out -> Jump -> Jump Back (SF)"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3",
    "reps": "20s + pauza 30s",
    "load": "bodyweight",
    "rest": "30s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Defensive shuffle followed by a close-out, a jump, and a jump backward.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0042",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Ulaz s picka -> pas / COD + pas iz kontakta (Point-Forward)",
      "en": "Pick Entry -> Pass / COD + Pass from Contact (Point-Forward)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "4",
    "reps": "5",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Entering a pick and roll to pass, or performing a COD and passing from contact.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0043",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint -> COD -> šut / Cut + šut iz ugla (Wing Shooter)",
      "en": "Sprint -> COD -> Shot / Cut + Corner Shot (Wing Shooter)"
    },
    "category": "speed_running",
    "level": "advanced",
    "sets": "4",
    "reps": "4",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Sprint followed by a COD and shot, or a cut and a shot from the corner.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0044",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "COD -> povlačenje -> šut / Pivot -> šut iz kontaka (Mid-range kreator)",
      "en": "COD -> Pull-back -> Shot / Pivot -> Shot from Contact (Mid-range Creator)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3",
    "reps": "5",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "COD followed by a pull-back and shot, or a pivot and a shot from contact.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0045",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Guranje sanki / partner push + drop step (PF)",
      "en": "Sled Push / Partner Push + Drop Step (PF)"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "4",
    "reps": "10m",
    "load": "sled or partner",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "sanke (sled)",
      "partner"
    ],
    "positions": [
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Pushing a sled or partner, combined with a drop step.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0046",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Skok -> kontakt -> pivot -> završnica (PF)",
      "en": "Jump -> Contact -> Pivot -> Finish (PF)"
    },
    "category": "balance",
    "level": "intermediate",
    "sets": "3",
    "reps": "5",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Jumping, making contact, pivoting, and finishing the action.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0047",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "CMJ + otpor (elastične trake / medicinka) (PF)",
      "en": "CMJ + Resistance (Resistance Bands / Medicine Ball) (PF)"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "6",
    "load": "elastične trake ili medicinka",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "elastične trake",
      "medicinka"
    ],
    "positions": [
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Countermovement jump with added resistance from bands or a medicine ball.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0048",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pivot + drop step / kontakt + guranje + završnica (Low-post PF)",
      "en": "Pivot + Drop Step / Contact + Push + Finish (Low-post PF)"
    },
    "category": "strength_repetitive",
    "level": "advanced",
    "sets": "4",
    "reps": "5",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Combination of pivot, drop step, contact, pushing, and finishing a low-post move.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0049",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "COD -> ulaz -> šut / jab step + ulaz (Face-up PF)",
      "en": "COD -> Drive -> Shot / Jab Step + Drive (Face-up PF)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3",
    "reps": "5",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Change of direction followed by a drive and shot, or a jab step and drive.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0050",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Cut + 3pt Shot / Sprint -> Stop -> Shot (Stretch 4)",
      "en": "Cut + 3pt Shot / Sprint -> Stop -> Shot (Stretch 4)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3",
    "reps": "4",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Perform a cut and shoot a 3-pointer, or sprint, stop, and shoot.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0051",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Skok s otporom (medicinka/trake) (C)",
      "en": "Jump with Resistance (Medicine Ball/Bands) (C)"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "6",
    "load": "medicinka ili trake",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "medicinka",
      "trake"
    ],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Jump performed with added resistance from a medicine ball or bands.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0052",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pivot + kontakt + dribling + završnica (Post Stabilnost C)",
      "en": "Pivot + Contact + Dribble + Finish (Post Stability C)"
    },
    "category": "balance",
    "level": "intermediate",
    "sets": "4",
    "reps": "5",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Drill focusing on post-up stability, combining pivot, contact, dribbling, and finishing.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0053",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Skok -> kontakt u vazduhu -> doskok -> nova reakcija (Reaktivna snaga C)",
      "en": "Jump -> Mid-air Contact -> Land -> New Reaction (Reactive Strength C)"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "3",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Jump, make contact in the air, land, and immediately react to a new stimulus.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0054",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Guranje u niskoj poziciji / pivot + završnica (Low-post sidro C)",
      "en": "Low Position Push / Pivot + Finish (Low-post Anchor C)"
    },
    "category": "strength_repetitive",
    "level": "advanced",
    "sets": "4",
    "reps": "4",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Drill focusing on pushing in a low post position, combined with a pivot and finish.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0055",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Jab step + šut / COD + ulaz + skok (Face-up centar C)",
      "en": "Jab Step + Shot / COD + Drive + Jump (Face-up Center C)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3",
    "reps": "5",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Combination of a jab step and shot, or a COD, drive, and jump.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0056",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Shuffle + blok -> box-out / reakcija na svetlo + skok (Defanzivni centar C)",
      "en": "Shuffle + Block -> Box-out / Reaction to Light + Jump (Defensive Center C)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3",
    "reps": "20s",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "svetlosni signal"
    ],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Combination of defensive shuffle, blocking, and box-out, or reacting to a light signal and jumping.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0057",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Cut -> šut iz bloka",
      "en": "Cut -> Shot off Screen"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "4",
    "reps": "3 sa svake strane",
    "load": "bodyweight",
    "rest": "30s",
    "tempo": "90% maksimalnog ritma",
    "equipment": [
      "lopta",
      "blok (screen)"
    ],
    "positions": [
      "SG",
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Igrač koristi stagger screen, izlazi na šut. Niska startna pozicija, reaktivni prednji stopalo. Sprint u dijagonali + COD (usek u blok). Stop skok + šut iz balansa.",
    "coachingCues": [
      "Kontrola trupa",
      "koordinacija gornjeg i donjeg segmenta"
    ],
    "commonMistakes": [],
    "id": "book_part4_0058",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Close-out + COD + ulaz",
      "en": "Close-out + COD + Drive"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3",
    "reps": "20s",
    "load": "bodyweight",
    "rest": "40s",
    "tempo": "tehnika + eksplozija",
    "equipment": [],
    "positions": [
      "SG",
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Igrač rotira u odbrani, izlazi u close-out, zatim napada napred. Start iz defanzivne pozicije (low stance). Lateralni shuffle -> eksplozivni stop + nagli start napred (reaktivni COD). Balans pri kontaktu u ulazu.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0059",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Post-up pivot + šut",
      "en": "Post-up Pivot + Shot"
    },
    "category": "strength_repetitive",
    "level": "advanced",
    "sets": "4",
    "reps": "3 leva, 3 desna strana",
    "load": "lopta, otpor trakom ili partnerom",
    "rest": "45s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta",
      "otpor trakom",
      "partner"
    ],
    "positions": [
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Igrač prima loptu u postu, pivotira leđima, koristi drop step ili spin, završava šutem. Čvrsta osnovna pozicija (širok oslonac). Balans pri skoku unazad ili bočno.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0060",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pick & Roll -> otvaranje -> šut",
      "en": "Pick & Roll -> Open Up -> Shot"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PG",
      "SG",
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Osnovni side pick & roll s otvaranjem igrača na šut. Ball-handler: COD sa loptom + low stance, stop & go ritam, balans u šutu iz pokreta. Roll man: horizontalna snaga pri kontaktu, COD napred i vertikalna eksplozivnost.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0061",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pick & Roll ball-handler: COD sa loptom + low stance",
      "en": "Pick & Roll Ball-handler: COD with ball + low stance"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3",
    "reps": "4",
    "load": "lopta",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PG",
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Ball-handler performs COD with the ball starting from a low stance.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0062",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pick & Roll roll man: Roll s otporom + završnica",
      "en": "Pick & Roll Roll Man: Roll with resistance + finish"
    },
    "category": "strength_explosive",
    "level": "advanced",
    "sets": "4",
    "reps": "3",
    "load": "otpor (resistance)",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "otpor (resistance)",
      "lopta"
    ],
    "positions": [
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Roll man performs a roll with resistance and finishes the play.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0063",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Transicija -> šut u punoj brzini",
      "en": "Transition -> Full Speed Shot"
    },
    "category": "speed_running",
    "level": "advanced",
    "sets": "4",
    "reps": "3 šuta po poziciji",
    "load": "bodyweight",
    "rest": "40s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SG",
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Sprint iz reketa -> pas -> šut iz trčanja. Puna dužina sprinta. Ubrzanje -> STOP -> šut bez narušavanja balansa. Rad kolena, skočnih zglobova i core stabilizacije.",
    "coachingCues": [
      "Neuromišićna kontrola"
    ],
    "commonMistakes": [],
    "id": "book_part4_0064",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Box-out -> reakcija -> skok",
      "en": "Box-out -> Reaction -> Rebound Jump"
    },
    "category": "strength_repetitive",
    "level": "advanced",
    "sets": "3",
    "reps": "5",
    "load": "lopta, partner/otpor",
    "rest": "30-45s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta",
      "partner",
      "otpor"
    ],
    "positions": [
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Crtež pokazuje kontakt -> pozicioniranje -> skok iz reakcije na loptu. Start iz low stance, širi oslonac. Kretanje: kontakt kukovima -> drop step -> vertikalni skok. Kontrola doskoka.",
    "coachingCues": [
      "Reaktivni skok (reakcija na pad lopte)",
      "Balans pri doskoku i pivot za izlaz"
    ],
    "commonMistakes": [],
    "id": "book_part4_0065",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Reakcija na signal + close-out + šut",
      "en": "Reaction to Signal + Close-out + Shot"
    },
    "category": "speed_reaction",
    "level": "advanced",
    "sets": "3",
    "reps": "5",
    "load": "bodyweight",
    "rest": "30s",
    "tempo": "2-0-2",
    "equipment": [
      "svetlosni signal",
      "lopta"
    ],
    "positions": [
      "SG",
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vizuelni signal -> igrač reaguje -> zatvara šut -> šutira. Lateralna eksplozija. Reaktivna agilnost (stimulus-pokret). Balans u brzom šutu iz odbrane.",
    "coachingCues": [
      "Brzina reakcije",
      "Lateralna brzina",
      "Neuromišićna preciznost u šutu"
    ],
    "commonMistakes": [],
    "id": "book_part4_0066",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Ulaz sa strane + kontakt + završnica",
      "en": "Side Entry + Contact + Finish"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "4",
    "reps": "3 L/D",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SG",
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Napad s boka -> duel kontakt -> pivot ili lay-up. Horizontalni impuls. Kontrola centra mase. Snaga u jednonožnoj fazi.",
    "coachingCues": [
      "COD + kontakt",
      "Core stabilnost",
      "Balans pri završetku"
    ],
    "commonMistakes": [],
    "id": "book_part4_0067",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pick + short roll -> pas -> šut",
      "en": "Pick + Short Roll -> Pass -> Shot"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3",
    "reps": "4",
    "load": "bodyweight",
    "rest": "30-40s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Blok -> short roll -> pas -> poziciono postavljanje. Kontakt -> oslobađanje -> balans. Koordinacija gornjeg i donjeg segmenta.",
    "coachingCues": [
      "Snaga za postavljanje bloka",
      "Brz short roll",
      "Preciznost pasa"
    ],
    "commonMistakes": [],
    "id": "book_part4_0068",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Close-out -> šut -> defanzivna rotacija",
      "en": "Close-out -> Shot -> Defensive Rotation"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3",
    "reps": "20s rad",
    "load": "bodyweight",
    "rest": "30s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SG",
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Zatvaranje -> šut protivnika -> rotacija u odbranu. Lateralna snaga. Reaktivni impuls. Vizuelna anticipacija.",
    "coachingCues": [
      "Snaga + balans",
      "Vizuelna inteligencija",
      "Reakcija na rotaciju"
    ],
    "commonMistakes": [],
    "id": "book_part4_0069",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pas -> re-cut -> šut iz ćoška",
      "en": "Pass -> Re-cut -> Corner Shot"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "4",
    "reps": "3",
    "load": "bodyweight",
    "rest": "30s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SG",
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Igrač daje pas -> ponovo se oslobađa -> cut -> šut. Sprint + COD. Ritam cuta. Kontrola pri šutu.",
    "coachingCues": [
      "Reaktivna brzina",
      "Tehnika stopa",
      "Šutna mehanika"
    ],
    "commonMistakes": [],
    "id": "book_part4_0070",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Backdoor Cut -> Pas + Završnica",
      "en": "Backdoor Cut -> Pass + Finish"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3",
    "reps": "4 L/D",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Igrač čita previše agresivnu odbranu -> seče iza -> završava. Promena pravca bez lopte. Reaktivni impuls. Kontrola u malom prostoru.",
    "coachingCues": [
      "Reakcija",
      "Brzina",
      "Balans pri završetku"
    ],
    "commonMistakes": [],
    "id": "book_part4_0071",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint COD + Šut (Uvodni mikrociklus)",
      "en": "Sprint COD + Shot (Introductory Microcycle)"
    },
    "category": "speed_movement",
    "level": "beginner",
    "sets": "3",
    "reps": "2",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "60% intenzitet",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PG",
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Aktivacija nervno-mišićnog sistema.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0072",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint COD + Šut (Udarni mikrociklus)",
      "en": "Sprint COD + Shot (Impact Microcycle)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "4",
    "reps": "4",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "90% intenzitet",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PG",
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Eksplozivnost + šut u zamoru.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0073",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint COD + Šut (Rasteretni mikrociklus)",
      "en": "Sprint COD + Shot (Deload Microcycle)"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "2",
    "reps": "3",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PG",
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Tehnika kretanja + preciznost. Fokus na formu.",
    "coachingCues": [
      "Fokus na formu"
    ],
    "commonMistakes": [],
    "id": "book_part4_0074",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint COD + Šut (Takmičarski dan)",
      "en": "Sprint COD + Shot (Game Day)"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "2",
    "reps": "2",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "lopta"
    ],
    "positions": [
      "PG",
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vizuelna i taktička priprema. Vežba se skraćuje i kombinuje sa reakcijom na signal.",
    "coachingCues": [
      "Vežba se skraćuje i kombinuje sa reakcijom na signal"
    ],
    "commonMistakes": [],
    "id": "book_part4_0075",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Zatvaranje skoka + pivot izlazak (Uvodni mikrociklus)",
      "en": "Rebound Close-out + Pivot Exit (Introductory Microcycle)"
    },
    "category": "balance",
    "level": "beginner",
    "sets": "3",
    "reps": "3",
    "load": "Bez opterećenja",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Učenje osnove i koordinacije.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0076",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Zatvaranje skoka + pivot izlazak (Udarni mikrociklus)",
      "en": "Rebound Close-out + Pivot Exit (Impact Microcycle)"
    },
    "category": "strength_repetitive",
    "level": "advanced",
    "sets": "4",
    "reps": "5",
    "load": "Sa partnerom",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "partner"
    ],
    "positions": [
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Snaga u kontaktu + pivot brzina.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0077",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Zatvaranje skoka + pivot izlazak (Rasteretni mikrociklus)",
      "en": "Rebound Close-out + Pivot Exit (Deload Microcycle)"
    },
    "category": "mobility",
    "level": "intermediate",
    "sets": "3",
    "reps": "2",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Mobilnost u skočnom zglobu. Produžen kontakt na doskoku.",
    "coachingCues": [
      "Produžen kontakt na doskoku"
    ],
    "commonMistakes": [],
    "id": "book_part4_0078",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Zatvaranje skoka + pivot izlazak (Takmičarski dan)",
      "en": "Rebound Close-out + Pivot Exit (Game Day)"
    },
    "category": "coordination",
    "level": "advanced",
    "sets": "2",
    "reps": "3",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "vizuelni signal"
    ],
    "positions": [
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Psihološka priprema na duel. Povezana s vizuelnim signalom.",
    "coachingCues": [
      "Povezana s vizuelnim signalom"
    ],
    "commonMistakes": [],
    "id": "book_part4_0079",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Zagrevanje sa vežbama balansa",
      "en": "Balance Warm-up Exercises"
    },
    "category": "balance",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": "platforme, rekviziti (tegovi, medicinka, lopta)"
    },
    "description": "Balance exercises as part of warm-up, emphasizing standing on one leg and holding arms up. Static and in motion, activating synergistic muscles.",
    "coachingCues": [
      "Insistiranje na stajnoj nozi",
      "držati ruke u visini ramena i iznad glave",
      "položaj stopala i tela u najboljoj poziciji za start",
      "savršena kontrola tela",
      "stopala su ključna"
    ],
    "commonMistakes": [
      "Igrač nestabilan",
      "nepostavljanje pozicije tela u odnosu na napadača"
    ],
    "id": "book_part4_0080",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Vežbe sa bučicama (zagrevanje)",
      "en": "Dumbbell Exercises (Warm-up)"
    },
    "category": "strength_repetitive",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bučice",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "bučice"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Exercises performed with dumbbells as part of warm-up.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0081",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pliometrija niskog inteziteta sa ubrzanjima (zagrevanje)",
      "en": "Low-intensity Plyometrics with Accelerations (Warm-up)"
    },
    "category": "strength_explosive",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": "više promena pravca, kraća rastojanja"
    },
    "description": "Low-intensity plyometric exercises combined with accelerations. Includes A, B skip, dužinski poskok, karioka i tapioka.",
    "coachingCues": [
      "Usitnjavanje koraka",
      "položaj tela da napadač teže može da obiđe",
      "ruke na lopti i liniji dodavanja"
    ],
    "commonMistakes": [
      "Igrač nestabilan",
      "nepostavljanje pozicije tela u odnosu na napadača"
    ],
    "id": "book_part4_0082",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Vežbe balansa (stojeća poza na jednoj nozi)",
      "en": "Balance Exercises (Single Leg Stance)"
    },
    "category": "balance",
    "level": "beginner",
    "sets": "3",
    "reps": "20 sekundi",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Balance exercises performed as a single leg stance with arms above head.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0083",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Niski pliometrijski skokovi (zagrevanje)",
      "en": "Low Plyometric Jumps (Warm-up)"
    },
    "category": "strength_explosive",
    "level": "beginner",
    "sets": "4",
    "reps": "6",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Low-intensity plyometric jumps.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0084",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "A i B skipovi sa fokusom na promene pravca",
      "en": "A and B Skips with Focus on Change of Direction"
    },
    "category": "speed_movement",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "A and B skips focusing on changes of direction.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0085",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Karioka i Tapioka (koordinacione vežbe)",
      "en": "Carioca and Tapioca (Coordination Drills)"
    },
    "category": "speed_movement",
    "level": "beginner",
    "sets": "3-4",
    "reps": "4-5m",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Carioca and Tapioca drills for coordination and movement.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0086",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Trostruki čučanj",
      "en": "Triple Squat"
    },
    "category": "strength_absolute",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "3-5",
    "load": "power rack, pojas",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "power rack",
      "pojas"
    ],
    "positions": [
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": "miksovano (75%, duboki, stav)"
    },
    "description": "Squat variations (deep, half, basketball stance) with varying load and order. Front and back squats. Focus on receiving the ball, lifting the ball, and power center.",
    "coachingCues": [
      "Prijem lopte visokog igrača",
      "podizanje lopte od hvatanja do izbačaja"
    ],
    "commonMistakes": [],
    "id": "book_part4_0087",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Iskoraci sa bučicama",
      "en": "Dumbbell Lunges"
    },
    "category": "strength_repetitive",
    "level": "intermediate",
    "sets": "3",
    "reps": "10 sa svake strane",
    "load": "bučice",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "bučice"
    ],
    "positions": [
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Lunges performed with dumbbells.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0088",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Bacanje medicinke za rad na reakciji",
      "en": "Medicine Ball Throw for Reaction"
    },
    "category": "speed_reaction",
    "level": "intermediate",
    "sets": "3",
    "reps": "15",
    "load": "medicinka",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "medicinka"
    ],
    "positions": [
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Medicine ball throws focused on improving reaction time.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0089",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pliometrijski skok sa fokusom na stabilizaciju pri doskoku",
      "en": "Plyometric Jump with Focus on Landing Stabilization"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3",
    "reps": "6",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Plyometric jump with emphasis on stable landing.",
    "coachingCues": [
      "Fokus na stabilizaciji pri doskoku"
    ],
    "commonMistakes": [],
    "id": "book_part4_0090",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint na 5m sa simulacijom preuzimanja",
      "en": "5m Sprint with Takeover Simulation"
    },
    "category": "speed_start",
    "level": "intermediate",
    "sets": "4",
    "reps": "10",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "5-meter sprint simulating a defensive takeover.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0091",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint na 14-17m sa medicinkom za simulaciju težeg dodavanja",
      "en": "14-17m Sprint with Medicine Ball for Difficult Pass Simulation"
    },
    "category": "speed_running",
    "level": "intermediate",
    "sets": "3",
    "reps": "8",
    "load": "medicinka",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "medicinka"
    ],
    "positions": [
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Sprint for 14-17 meters while holding a medicine ball to simulate a difficult pass.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0092",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Goblet čučanj za rad na stabilnosti i spremnosti za blok",
      "en": "Goblet Squat for Stability and Block Readiness"
    },
    "category": "strength_repetitive",
    "level": "intermediate",
    "sets": "3",
    "reps": "12",
    "load": "kettlebell",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "kettlebell"
    ],
    "positions": [
      "SF",
      "PF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Goblet squat focusing on stability and readiness for setting a screen.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0093",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "TRX trake (za balans, fleksibilnost, staminu)",
      "en": "TRX Straps (Balance, Flexibility, Stamina)"
    },
    "category": "balance",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "TRX trake"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "TRX exercises to improve balance, flexibility, and muscular stamina. Can be used without stretching for quick prep.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0094",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Elastične trake (za mobilnost i izdržljivost mišića)",
      "en": "Resistance Bands (Mobility and Muscular Endurance)"
    },
    "category": "mobility",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "elastične trake",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "elastične trake"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Resistance band exercises for enhancing mobility and muscular endurance, especially for muscle groups under high load.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0095",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Mountain climber – sprint – poskoci (Uvodni mikrociklus)",
      "en": "Mountain Climber – Sprint – Hops (Introductory Microcycle)"
    },
    "category": "strength_repetitive",
    "level": "beginner",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "čunjevi"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": "prilagoditi nivo spremnosti igrača",
      "harder": null
    },
    "description": "Vežba na stadionu. Dužinski poskoci do prvog čunja. Mountain climber sa sprintom do drugog čunja. Mountain climber i dužinski poskoci do trećeg čunja. Lagano trčanje oko terena za delimičan oporavak. Cilj je priprema mišića nogu, naglasak na brzom podizanju i polazak u sprint. Mountain climber u poskoke je najteži koordinativni deo.",
    "coachingCues": [
      "Brzo podizanje",
      "polazak u sprint"
    ],
    "commonMistakes": [
      "Slabosti u kinetičkom lancu",
      "koordinativne sposobnosti"
    ],
    "id": "book_part4_0096",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Mountain climber – sprint – poskoci (Opšte pripremni mikrociklus)",
      "en": "Mountain Climber – Sprint – Hops (General Preparatory Microcycle)"
    },
    "category": "strength_repetitive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "trake opterećenja",
      "bučice",
      "teg",
      "trenažer",
      "čunjevi"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": "balans ploče"
    },
    "description": "Vežbe za koordinaciju i balans se usložnjavaju. Uvode se trake opterećenja umesto elastičnih. Vežbe snage: iskoraci, farmer's walk, vežbe za listove na trenažerima. Na stadionu isti raspored, ali dodatne atletske vežbe za korekciju slabosti. Na kraju ponavljanje vežbe iz uvodnog mikrociklusa za procenu napretka.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0097",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Mountain climber – sprint – poskoci (Specifično pripremni mikrociklus)",
      "en": "Mountain Climber – Sprint – Hops (Specific Preparatory Microcycle)"
    },
    "category": "strength_repetitive",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "tegovi, trake opterećenja",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "čunjevi",
      "hexagoni",
      "teniske loptice",
      "tegovi",
      "trake opterećenja",
      "burpee",
      "barbell"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežbe su prilagođene specifičnim zadacima i fizičkim zahtevima košarke. Koordinacija i balans: trčanje između čunjeva, rad sa hexagonima, dodavanja tenis lopticom. Snaga: Kombinacija tegova i traka opterećenja. Trening oponaša situacije iz igre (prelazak iz mountain climbera u sprint). Složeni pokreti: burpee, nabačaj-izbačaj, iskoraci s izbačajem. Naglasak da se vežba završava na vrhovima nožnih prstiju i brzim ispravljanjem ruku.",
    "coachingCues": [
      "Završava na vrhovima nožnih prstiju",
      "brzo ispravljanje ruku"
    ],
    "commonMistakes": [],
    "id": "book_part4_0098",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Bulgarian split squat (glavni deo)",
      "en": "Bulgarian Split Squat (main part)"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "4",
    "reps": "10",
    "load": "šipka i diskovi",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "šipka (barbell)",
      "diskovi"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Performed with a barbell, focusing on explosive strength and fast push-off.",
    "coachingCues": [
      "Brzi izbačaj koji završavamo na vrhovima prstiju"
    ],
    "commonMistakes": [],
    "id": "book_part4_0099",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Reverse lunge front grip (glavni deo)",
      "en": "Reverse Lunge Front Grip (main part)"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "4",
    "reps": "10",
    "load": "šipka i diskovi",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "šipka (barbell)",
      "diskovi"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Performed with a barbell (front grip), focusing on explosive strength and fast push-off.",
    "coachingCues": [
      "Brzi izbačaj koji završavamo na vrhovima prstiju"
    ],
    "commonMistakes": [],
    "id": "book_part4_0100",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Nabačaj- izbačaj",
      "en": "Clean and Jerk"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "4",
    "reps": "5",
    "load": "barbell",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "šipka (barbell)"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Clean and jerk exercise.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0101",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Russian twist sa kettlbelom",
      "en": "Russian Twist with Kettlebell"
    },
    "category": "strength_stamina",
    "level": "intermediate",
    "sets": "4",
    "reps": "20",
    "load": "kettlebell",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "kettlebell"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Russian twist performed with a kettlebell.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0102",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pilon drill (Pozicija 5: Sprint, Skokovi, Burpees, Slide)",
      "en": "Pylon Drill (Position 5: Sprint, Jumps, Burpees, Slide)"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "piloni (čunjevi)"
    ],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": "dodatak merdevina, malih čunjeva, hexagona"
    },
    "description": "From Pilon 1 to Pilon 2: sprint in block. Pilon 2 to Pilon 3 (under rim): long jumps, then 5x jumps and touch rim. Easy back to start. Then 3x burpees and sprint to side line pilon, slide to start position.",
    "coachingCues": [],
    "commonMistakes": [
      "Nezatezanje stopala (hvatanje zaleta)",
      "nedostatak snage u stopalima i balansiranosti"
    ],
    "id": "book_part4_0103",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pilon drill (Pozicija 1: Mountain Climbers, Backpedaling, Skips, Burpees)",
      "en": "Pylon Drill (Position 1: Mountain Climbers, Backpedaling, Skips, Burpees)"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "piloni (čunjevi)"
    ],
    "positions": [
      "PG",
      "SG"
    ],
    "targetTests": [],
    "progressions": {
      "easier": "više slajdova i lateralnih skokova za pozicije 2,3",
      "harder": "dodatak merdevina, malih čunjeva, hexagona"
    },
    "description": "Start with 5 mountain climbers and long jumps to Pilon 1. Backpedaling Pilon 1 to Pilon 2 (turn over weaker shoulder). Pilon 2 to Pilon 3: low/middle/high knees up. Pilon 3 to Pilon 4: A,B,C skips and easy running. Pilon 5: 5 burpees and two-leg jumps to Pilon 6. Pilon 6 to Pilon 7: backpedaling (turn over weaker shoulder).",
    "coachingCues": [],
    "commonMistakes": [
      "Nezatezanje stopala (hvatanje zaleta)",
      "nedostatak snage u stopalima i balansiranosti"
    ],
    "id": "book_part4_0104",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pilon drill (Centar): Promena brzine, Box-out, Lateralna kretnja",
      "en": "Pylon Drill (Center): Speed Change, Box-out, Lateral Movement"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "mali piloni",
      "veliki piloni"
    ],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "On small pylons: change speed (low, middle, high knees up), goal is not to move back standing leg. On big pylons: right-handed players turn left, left-handed players turn right (coordination focus). Sprint to BP in the paint, box out and high knees up to BP on center (positioning for sprint and changing rhythm). From center to corner: slower and lower lateral movements, turn on BP, sprint to opposite side line (close out), sprint to base line, walk to start. (Key moment 1.1: Aktivnija kontra stajna noga, Key moment 1.2: Usitnjavanje koraka pre close-outa).",
    "coachingCues": [
      "Pravilnost izvođenja je važna",
      "usitnjavanje koraka",
      "uključivanje ruku"
    ],
    "commonMistakes": [
      "Igrači ne usitne korake i nisu spremni na promenu pravca i naglo zaustavljanje",
      "napadač lako obiđe odbrambenog igrača"
    ],
    "id": "book_part4_0105",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pilon drill (Centar, Varijacija 2): Mountain Climbers, Dugi skokovi, Burpees, Power Skip",
      "en": "Pylon Drill (Center, Variation 2): Mountain Climbers, Long Jumps, Burpees, Power Skip"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "mali piloni",
      "veliki piloni"
    ],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Start with mountain climbers, from start to first SP take space as long as player can (Key moment 2.1). From first to second SP: long jumps and easy run to BP. Sprint, box out and burpee on BP in the paint. Power skip to BP on center. Lateral jumps to the corner, jump knee to the chest (Key moment 2.2). Continuing like first variation.",
    "coachingCues": [
      "Osvajanje što više prostora u prvom koraku i prelazak u sprint"
    ],
    "commonMistakes": [
      "Gazenje side line (gubljenje lopte)",
      "nisu osposobljeni da krenu iz mesta"
    ],
    "id": "book_part4_0106",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pilon drill (Perimetar): Visoka kolena, Skips, Power Skips, Sprintovi",
      "en": "Pylon Drill (Perimeter): High Knees, Skips, Power Skips, Sprints"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "piloni (čunjevi)"
    ],
    "positions": [
      "PG",
      "SG",
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": "Smanjenje obima i inteziteta",
      "harder": "Povećanje intenziteta"
    },
    "description": "Low, middle, high knees up (one drill between pylons) and sprint to starting position, changing speed 1x. A, B, C skips from start (one drill between pylons), power skips to start position 1x. Low, middle, high from start to first pilon, A,B,C between second and third pilon, power skip from third to fourth pilon and sprint to start position. Change rhythm themselves. Repeat all three versions without pauses. (8-12 changes of rhythm and speed).",
    "coachingCues": [
      "Menjati ritam",
      "često ponavljati pokrete",
      "pravilno izvođenje lako atletskih elemenata"
    ],
    "commonMistakes": [
      "Greške u startu iz mesta"
    ],
    "id": "book_part4_0107",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pilon drill (Perimetar, Varijacija 2): Rabbit Jumps, Indian Jumps",
      "en": "Pylon Drill (Perimeter, Variation 2): Rabbit Jumps, Indian Jumps"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "piloni (čunjevi)"
    ],
    "positions": [
      "PG",
      "SG",
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Pivot rabbit jumps from first to second pilon. From second to third pilon: Indian jumps (same leg, same hand up). From third to fourth pilon: rabbit jumps and long jumps to start position. Next version: same, only Indian jumps different (opposite knee and hand up). Both versions 2x repeat without pause. During season, do this drill like competition - big vs small.",
    "coachingCues": [
      "Osvajanje što više prostora",
      "prevencija greške"
    ],
    "commonMistakes": [
      "Greške u startu iz mesta"
    ],
    "id": "book_part4_0108",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pilon drill (Perimetar): Tapioca, Carioca, Lateral Jumps, Sprint, Šut",
      "en": "Pylon Drill (Perimeter): Tapioca, Carioca, Lateral Jumps, Sprint, Shot"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "piloni (čunjevi)",
      "lopta"
    ],
    "positions": [
      "PG",
      "SG",
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Player has back turned. On coach signal: run to Pilon 1. Pilon 1 to Pilon 2: tapioca. Pilon 2 to Pilon 3: carioca (from left, standing leg). Lateral jumps to Pilon 4, then full sprint, receiving ball and shooting. Task is changing rhythm on pylons, stopping in stable position, and jump shot over big man. (Key moment: prelazak iz tapioce u karioku, ne vraćanje stopala, sa stajne noge polazak u sprint).",
    "coachingCues": [
      "Promena ritma",
      "preciznost"
    ],
    "commonMistakes": [
      "Nemogućnost zaustavljanja ili koraka",
      "pogrešno vođenje"
    ],
    "id": "book_part4_0109",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pilon drill (Centar): Dugi skokovi, Defanzivni slajd, Alternativni skokovi, Sprint",
      "en": "Pylon Drill (Center): Long Jumps, Defensive Slide, Alternative Jumps, Sprint"
    },
    "category": "strength_explosive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "piloni (čunjevi)"
    ],
    "positions": [
      "PF",
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Second part of drill for big centers with different endings. Start same as perimeter players. Pilon 1 to Pilon 2: long jumps with close-out. Pilon 2 to Pilon 3: defensive slide with hands up. Pilon 3 to Pilon 4: 2 jumps with alternative hands. Pilon 4 to Pilon 5: sprint, running around pylon. Depending on basketball coaches task, close out, box out, block, or pop/roll. (Key moment: tajming stizanja do spoljnog igrača, skokovi sa podignutim rukama).",
    "coachingCues": [
      "Tajming u kome centar stiže do spoljnog igrača"
    ],
    "commonMistakes": [],
    "id": "book_part4_0110",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Pilon drill (General): ABC Drills, Sprint, Prijem lopte, Šut, Pas",
      "en": "Pylon Drill (General): ABC Drills, Sprint, Receive Ball, Shot, Pass"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "10 shots per position",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "piloni (čunjevi)",
      "lopta"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Drill starts from the middle with A,B,C drills to Pilon 1 (5,6,7,8). On Pilon 1, receive ball and shoot, take own ball and pass. After passing, A,B,C skips to Pilon 1 (most frequent). From Pilon 1 to Pilon 2, full sprint, receive ball and shoot. Task is 10 shots per position, changing drills when players change position. Last set is sprint. Distance depends on goal of drill (situation shot, conditioning, warm-up, after weight lifting, stretching).",
    "coachingCues": [
      "Promena ritma do prvog pilona",
      "brzina i frekfentnost pokreta",
      "osvajanje prostora u prvom koraku i prelazak u sprint"
    ],
    "commonMistakes": [
      "Kasni u kretnji",
      "popravljanje uglova",
      "ostaju u istoj liniji",
      "fizički ne može da se zaustavi i vrati korak ili iz punog sprinta da promeni pravac, uspori"
    ],
    "id": "book_part4_0111",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Lateralni skokovi i defensive slide",
      "en": "Lateral Jumps and Defensive Slide"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "piloni (čunjevi)"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Igrač kreće iz bočne linije i sprintom dolazi do pilona, gde radi low pliometric drills ili lateralne skokove. Nakon toga, vraća se sprintom u odbranu i radi close-out. Simulira kretanje iz odbrane u kontranapad. Razvija brzinu reakcije, agilnost i kontrolu tela. Aktivacija kontra stajne noge prilikom nagle promene pravca. Usitnjavanje koraka pre close-outa.",
    "coachingCues": [
      "Brzina reakcije",
      "Agilnost",
      "Kontrola tela",
      "Aktivacija kontra stajne noge",
      "Usitnjavanje koraka pre close-outa"
    ],
    "commonMistakes": [
      "Gazenje bočne linije (nisu naučeni da startuju iz mesta)"
    ],
    "id": "book_part4_0112",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Sprint sa zagrađivanjem i lateralnim skokovima do linije za tri poena",
      "en": "Sprint with Boxing Out and Lateral Jumps to 3-point Line"
    },
    "category": "strength_explosive",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Fokus na eksplozivnoj snazi i skraćenim distancama. Sprint sa aktivnim zagrađivanjem i lateralnim skokovima do linije za tri poena.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0113",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Mountain climber (za snagu u stopalima i balans)",
      "en": "Mountain Climber (for Foot Strength and Balance)"
    },
    "category": "strength_repetitive",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "C"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Mountain climber vežba pomaže razvijanju snage u stopalima i balansu.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0114",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Serija lateralnih poskoka sa prelaskom na skip i karioku",
      "en": "Series of Lateral Hops transitioning to Skip and Carioca"
    },
    "category": "speed_movement",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": [
      "PG",
      "SG",
      "SF"
    ],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Fokus na frekvenciji pokreta i promeni ritma. Serija lateralnih poskoka sa prelaskom na skip i karioku (kombinacija brzine i koordinacije).",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0115",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Štafetna trka između grupa",
      "en": "Group Relay Race"
    },
    "category": "speed_movement",
    "level": "intermediate",
    "sets": "3-4",
    "reps": "8-12",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Trka između grupa koja podiže motivaciju i omogućava brzo praćenje napretka. Igrači menjaju zadatke u svakoj trci (odbrambene i napadačke vežbe).",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0116",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Front ili back squat + court conditioning drills",
      "en": "Front or Back Squat + Court Conditioning Drills"
    },
    "category": "strength_absolute",
    "level": "advanced",
    "sets": "3-4",
    "reps": "8-12",
    "load": "šipka (barbell)",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [
      "šipka (barbell)",
      "burpee",
      "eksplozivni sklekovi"
    ],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": null
    },
    "description": "Vežba počinje front ili back squat u teretani i prelazi u court conditioning drills na terenu. Umesto pilona, koriste se burpee ili eksplozivni sklekovi. Završava se dinamičkim istezanjem i oporavkom.",
    "coachingCues": [],
    "commonMistakes": [],
    "id": "book_part4_0117",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Alinijera vežba",
      "en": "Alinijera Exercise"
    },
    "category": "strength_repetitive",
    "level": "advanced",
    "sets": "3-4",
    "reps": "1-25",
    "load": "bodyweight",
    "rest": "60-90s",
    "tempo": "2-0-2",
    "equipment": [],
    "positions": ["PG", "SG", "SF", "PF", "C"],
    "targetTests": [],
    "progressions": {
      "easier": null,
      "harder": "dodati plankove"
    },
    "description": "A combination of exercises performed along different court lines (baseline, free throw line, center court). Starts prone, writing numbers 1-25 with tense legs. Push-ups (wide), cross-over crunches, back extensions (same reps). Return sequence changes exercises (narrow push-ups, planks). All parts done together at the end. Focus on repetitive strength and muscular endurance for core, chest, back.",
    "coachingCues": [
      "Pisanjem brojeva zategnutim nogama",
      "menjati vrste vežbi u povratku"
    ],
    "commonMistakes": [],
    "id": "book_part4_0118",
    "basketballSpecific": true
  },
  {
    "name": {
      "sr": "Fleksije i ekstenzije šaka",
      "en": "Wrist Flexion and Extension"
    },
    "category": "proprioception",
    "level": "beginner",
    "id": "manual_0001",
    "basketballSpecific": true,
    "targetTests": [],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "sets": "2-3",
    "reps": "10-15",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "",
    "equipment": [],
    "progressions": {
      "easier": null,
      "harder": "Dodaj otpor ili povećaj trajanje"
    },
    "description": "Osnovna vežba za proprioception",
    "coachingCues": [
      "Kontroliši pokret",
      "Pravilna tehnika"
    ],
    "commonMistakes": [
      "Prebrz pokret",
      "Loša forma"
    ]
  },
  {
    "name": {
      "sr": "Dorzifleksija i plantarfleksija stopala",
      "en": "Ankle Dorsiflexion and Plantarflexion"
    },
    "category": "proprioception",
    "level": "beginner",
    "id": "manual_0002",
    "basketballSpecific": true,
    "targetTests": [],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "sets": "2-3",
    "reps": "10-15",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "",
    "equipment": [],
    "progressions": {
      "easier": null,
      "harder": "Dodaj otpor ili povećaj trajanje"
    },
    "description": "Osnovna vežba za proprioception",
    "coachingCues": [
      "Kontroliši pokret",
      "Pravilna tehnika"
    ],
    "commonMistakes": [
      "Prebrz pokret",
      "Loša forma"
    ]
  },
  {
    "name": {
      "sr": "Aktivna mobilnost kukova",
      "en": "Active Hip Mobility"
    },
    "category": "mobility",
    "level": "beginner",
    "id": "manual_0003",
    "basketballSpecific": true,
    "targetTests": [],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "sets": "2-3",
    "reps": "10-15",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "",
    "equipment": [],
    "progressions": {
      "easier": null,
      "harder": "Dodaj otpor ili povećaj trajanje"
    },
    "description": "Osnovna vežba za mobility",
    "coachingCues": [
      "Kontroliši pokret",
      "Pravilna tehnika"
    ],
    "commonMistakes": [
      "Prebrz pokret",
      "Loša forma"
    ]
  },
  {
    "name": {
      "sr": "Balans na jednoj nozi - osnovno",
      "en": "Single Leg Balance - Basic"
    },
    "category": "balance",
    "level": "beginner",
    "id": "manual_0004",
    "basketballSpecific": true,
    "targetTests": [],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "sets": "2-3",
    "reps": "10-15",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "",
    "equipment": [],
    "progressions": {
      "easier": null,
      "harder": "Dodaj otpor ili povećaj trajanje"
    },
    "description": "Osnovna vežba za balance",
    "coachingCues": [
      "Kontroliši pokret",
      "Pravilna tehnika"
    ],
    "commonMistakes": [
      "Prebrz pokret",
      "Loša forma"
    ]
  },
  {
    "name": {
      "sr": "Aktivacija tibialis anterior",
      "en": "Tibialis Anterior Activation"
    },
    "category": "proprioception",
    "level": "beginner",
    "id": "manual_0005",
    "basketballSpecific": true,
    "targetTests": [],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "sets": "2-3",
    "reps": "10-15",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "",
    "equipment": [],
    "progressions": {
      "easier": null,
      "harder": "Dodaj otpor ili povećaj trajanje"
    },
    "description": "Osnovna vežba za proprioception",
    "coachingCues": [
      "Kontroliši pokret",
      "Pravilna tehnika"
    ],
    "commonMistakes": [
      "Prebrz pokret",
      "Loša forma"
    ]
  },
  {
    "name": {
      "sr": "Aktivacija kvadricepsa i hamstringa - Pliometrija",
      "en": "Quadriceps and Hamstring Activation - Plyometric"
    },
    "category": "strength_explosive",
    "level": "beginner",
    "id": "manual_0006",
    "basketballSpecific": true,
    "targetTests": [],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "sets": "2-3",
    "reps": "10-15",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "",
    "equipment": [],
    "progressions": {
      "easier": null,
      "harder": "Dodaj otpor ili povećaj trajanje"
    },
    "description": "Osnovna vežba za strength_explosive",
    "coachingCues": [
      "Kontroliši pokret",
      "Pravilna tehnika"
    ],
    "commonMistakes": [
      "Prebrz pokret",
      "Loša forma"
    ]
  },
  {
    "name": {
      "sr": "Karioka za lateralnu koordinaciju",
      "en": "Carioca for Lateral Coordination"
    },
    "category": "coordination",
    "level": "beginner",
    "id": "manual_0007",
    "basketballSpecific": true,
    "targetTests": [],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "sets": "2-3",
    "reps": "10-15",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "",
    "equipment": [],
    "progressions": {
      "easier": null,
      "harder": "Dodaj otpor ili povećaj trajanje"
    },
    "description": "Osnovna vežba za coordination",
    "coachingCues": [
      "Kontroliši pokret",
      "Pravilna tehnika"
    ],
    "commonMistakes": [
      "Prebrz pokret",
      "Loša forma"
    ]
  },
  {
    "name": {
      "sr": "Lagano trčanje - oporavak",
      "en": "Light Jog - Recovery"
    },
    "category": "endurance_aerobic",
    "level": "beginner",
    "id": "manual_0008",
    "basketballSpecific": true,
    "targetTests": [],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "sets": "2-3",
    "reps": "10-15",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "",
    "equipment": [],
    "progressions": {
      "easier": null,
      "harder": "Dodaj otpor ili povećaj trajanje"
    },
    "description": "Osnovna vežba za endurance_aerobic",
    "coachingCues": [
      "Kontroliši pokret",
      "Pravilna tehnika"
    ],
    "commonMistakes": [
      "Prebrz pokret",
      "Loša forma"
    ]
  },
  {
    "name": {
      "sr": "Vežbe disanja",
      "en": "Breathing Exercises"
    },
    "category": "flexibility",
    "level": "beginner",
    "id": "manual_0009",
    "basketballSpecific": true,
    "targetTests": [],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "sets": "2-3",
    "reps": "10-15",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "",
    "equipment": [],
    "progressions": {
      "easier": null,
      "harder": "Dodaj otpor ili povećaj trajanje"
    },
    "description": "Osnovna vežba za flexibility",
    "coachingCues": [
      "Kontroliši pokret",
      "Pravilna tehnika"
    ],
    "commonMistakes": [
      "Prebrz pokret",
      "Loša forma"
    ]
  },
  {
    "name": {
      "sr": "Istezanje hip flexora",
      "en": "Hip Flexor Stretch"
    },
    "category": "flexibility",
    "level": "beginner",
    "id": "manual_0010",
    "basketballSpecific": true,
    "targetTests": [],
    "positions": [
      "PG",
      "SG",
      "SF",
      "PF",
      "C"
    ],
    "sets": "2-3",
    "reps": "10-15",
    "load": "bodyweight",
    "rest": "60s",
    "tempo": "",
    "equipment": [],
    "progressions": {
      "easier": null,
      "harder": "Dodaj otpor ili povećaj trajanje"
    },
    "description": "Osnovna vežba za flexibility",
    "coachingCues": [
      "Kontroliši pokret",
      "Pravilna tehnika"
    ],
    "commonMistakes": [
      "Prebrz pokret",
      "Loša forma"
    ]
  }
];

export function getExerciseById(id: string): Exercise | undefined {
  return exercises.find(ex => ex.id === id);
}

export function getExercisesByCategory(category: ExerciseCategory): Exercise[] {
  return exercises.filter(ex => ex.category === category);
}

export function getExercisesByLevel(level: Exercise['level']): Exercise[] {
  return exercises.filter(ex => ex.level === level);
}

export function getExercisesByPosition(position: Exercise['positions'][0]): Exercise[] {
  return exercises.filter(ex => ex.positions.includes(position));
}

export default exercises;
