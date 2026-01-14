// Extracted from Coach Goran FPK Book (ALL 4 parts)
// Generated: 2026-01-13T19:22:42.830Z
// Total exercises: 295

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
,
  {
    id: "fpk_part2_ex1",
    name: "Podela brzine u kontekstu košarke",
    nameEn: "Exercise 1 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Realističan pristup brzini trčanja : Jasno je navedeno da se maksimalna brzina ne može bitno unaprediti zbog genetskih faktora (koeficijent 0.95), dok se brzina reakcije i startno ubrzanje mogu poboljšati, posebno tokom razvoja mladih sportista. •Naglasak na startnom ubrzanju : Ovo je odlično, jer u košarci najvažniji trenutak nije maksimalna brzina , već reakcija i ubrzanje u prvim koracima. Fokus na postavljanje tela u odbrani i pokretanje driblinga jasno prikazuje specifične zahteve igre. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Podela brzine u kontekstu košarke",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex2",
    name: "Aktivacija mišića i povezivanje brzine sa propriocepcijom",
    nameEn: "Exercise 2 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Vežba „Mountain climber” : Korišćenje ove vežbe za razvijanje brzine i aktivaciju mišićnih grupa je praktično i dobro promišljeno. Pravilno ističeš da se rizični pokreti moraju sprovoditi na kraju zagrevanja , kada su mišići dovoljno pripremljeni. •Fokus na kinetički lanac : Pravilno primećuješ da uspeh u brzini zavisi od integracije mišića i tetiva, uključujući Ahilovu tetivu, soleus i triceps surae. Jasno objašnjavaš potrebu za izolovanom aktivacijom mišića koji su prirodno manje aktivni, kao što su tibijalis anterior, kvadriceps i zadnja loža. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Aktivacija mišića i povezivanje brzine sa proprioc",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex3",
    name: "Praktičan rad na aktivaciji mišića",
    nameEn: "Exercise 3 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Razvoj gluteusa i stabilizatora : Tvoje vežbe za gluteus (pretkloni na jednoj ili obe noge) su odlično osmišljene za poboljšanje stabilnosti i snage. Dobro je što navodiš da je potrebno postepeno napredovati (kroz rad na strunjačama i poluloptama) pre nego što se pređe na složenije vežbe. •Izolacija tibijalisa : Povezivanje lateralnih pokreta i izolovanih vežbi za tibijalis je praktično, jer doprinosi boljoj stabilnosti zgloba i smanjenju rizika od povreda. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Praktičan rad na aktivaciji mišića",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex4",
    name: "Pliometrijski trening i metoda „često, ali ne previše”",
    nameEn: "Exercise 4 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Pliometrijske vežbe niskog intenziteta : Uključivanje skipova, zabacivanja potkolenica i lakih poskoka pokazuje dobro razumevanje prilagođenog pliometrijskog treninga za košarkaše. •Uloga dinamičkog istezanja između serija : Tvoj pristup da se brzinski rad prekida kratkim istezanjem  pomaže u regulisanju pulsa i priprema sportiste za nastavak treninga. Ovo je odličan metod za smanjenje rizika od povreda i održavanje visokog intenziteta. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Pliometrijski trening i metoda „često, ali ne prev",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex5",
    name: "Holistički pristup brzini i preventivi povreda",
    nameEn: "Exercise 5 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Kombinacija brzine, propriocepcije i balansa : Povezivanje brzine sa propriocepcijskim i balans vežbama daje odličan okvir za svestran trening, koji smanjuje rizik od povreda i poboljšava performanse. •Princip „često, ali ne previše” : Ovo je vrlo pragmatičan savet, jer košarka nije sport koji zahteva razvoj maksimalnih brzina. Uvođenjem kratkih, ali redovnih vežbi brzine, smanjuje se rizik od prenaprezanja i povreda. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Holistički pristup brzini i preventivi povreda",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex6",
    name: "Zaključak i preporuka za dodatak",
    nameEn: "Exercise 6 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `Ovo poglavlje pokazuje praktičan i efikasan pristup  razvoju brzine u košarci, kombinovan sa preventivnim metodama za izbegavanje povreda. Fokus na aktivaciju ključnih mišićnih grupa i pravilno postavljanje treninga u kontekst igre jasno oslikava tvoj pristup. Predlog za dodatak: •Možeš dodati konkretne primere serija i opterećenja  za razvoj startnog ubrzanja. Na primer: sprintovi od 5, 10 i 20 metara, kombinovani sa pauzama za oporavak. •Dodaj još saveta o pravilnom izvođenju pliometrijskih vežbi  (npr. na šta obratiti pažnju pri doskoku) kako bi se dodatno smanjio rizik od povreda. Zaključak Ovo poglavlje jasno ističe važnost startnog ubrzanja, brzine reakcije i brzine pokreta  za uspeh u košarci. Kombinovanje brzinskog rada sa propriocepcijom, balansom i adekvatnom aktivacijom mišića daje celovit pristup treningu. Tvoj metod „često, ali ne previše” pruža realističan okvir za održavanje visokog intenziteta bez rizika od povreda. Šta misliš o ovoj analizi? Imaš li još ideja ili priloga koje bismo mogli dodati? Kod trčanja najveće opterećenje trpi palac na stopalu, trči se i rukama, a ne samo nogama. Čet to ne može da zna jer nikada nije potrčao. „Često, ali ne previše“ nije moj princip, to sam naučio i primenjujem. Kod društvenih mreža i veštačke inteligencije mi smetaju generalizacije jer zapostavljanjem individualizacije robotizujemo igrače. Planirao sam da deo gde se posebnosti ističu bude kraći i sa manje detalja, ali … Moraću i kad i gde i zašto, koji mikrociklus, koliko pokreta, zadataka … Veštačka inteligencija me tera u detalje, ali pošto spadam u trenere kome je i frizura igrača bitna ne pada mi teško. B                   BRZINA U KOŠARCI – TROSTRUKA ANALIZA 🧠 1. Četov komentar (sažeto) •Brzinu opisuje kao sposobnost kretanja u što kraćem vremenu. •Fokusira se na sprint testove bez dublje biomehanike. •Nedostaje veza sa testovima, pozicijama i trenažnom primenom. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Zaključak i preporuka za dodatak",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex7",
    name: "Goranov pristup iz knjige🗣️",
    nameEn: "Exercise 7 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Brzina = kombinacija CNS reaktivnosti, biomehanike pokreta i motoričke kontrole. •Ključne komponente: •Startna brzina •Brzina reakcije •Promena pravca •Prvi korak •Pokret počinje od stopala, prolazi kroz balans, aktivnu mobilnost i izlazi kao eksplozija. •Uvodiš i reakcionu komponentu  (vizuelni/audio stimulans) `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Goranov pristup iz knjige🗣️",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex8",
    name: "Simbion II – nadogradnja i sistematizacija🤖",
    nameEn: "Exercise 8 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `A. Biomehaničke komponente brzine •Akceleracija: generiše se kroz linijsku silu kukova i stopala (start 5m, 10m) •Reakcija: CNS i anticipacija (trenerov signal, svetlosni impuls) •Frekvencija koraka : analizirana kroz Optojump •Efikasnost promene pravca : zavisi od stabilnosti trupa i skočnih zglobova STANDARDI PO POZICIJAMA (test 10m sprint)📊 PozicijaElitniNapredniOsnovni Bek<1.75s1.75–1.90s>1.90s Krilo<1.85s1.85–2.00s>2.00s Centar<2.00s2.00–2.20s>2.20s 🧠 TESTOVI I KORELACIJE Test Svrha Trening odgovor Sprint 5m / 10m / 20mAkceleracija i maksimalna brzinaSled push, starts, resisted sprint Optojump Frekvencija i kontakt Sprint + niskofrekventne serije Reakcija (zvuk/svetlo)CNS odziv Vizuelni stimulansi, reaktivni sprint COD test (505) Promena pravcaBočne promene pravca, reaktivne vežbe TRENING PO POZICIJAMA   `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Simbion II – nadogradnja i sistematizacija🤖",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex9",
    name: "BEK (startna brzina + reaktivnost)",
    nameEn: "Exercise 9 - Part 2",
    category: "speed",
    subcategory: "speed_basketball",
    description: `Uvod (8 min): •Skočni zglob aktivacija (band walk, bounce skip) •CNS upaljivanje: vizuelna reakcija + 3 signala Glavni deo (20 min): •Reaktivni start (svetlosni signal) – 4x10m •Sprint iz čučnja – 4x5m •Sprint sa kontrastom (sled push) – 3x10m •Ladder quick feet 2x20s Završni deo (5 min): •Disanje + mobilnost kukova •Vizuelni feedback iz AI analize `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "BEK (startna brzina + reaktivnost)",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex10",
    name: "KRILO (ubrzanje + lateralna brzina)",
    nameEn: "Exercise 10 - Part 2",
    category: "speed",
    subcategory: "speed_basketball",
    description: `Uvod: •Lateralne aktivacije (monster walk, side hops) •Promena pravca na signal Glavni deo: •Sprint 10m + COD (505 varijanta) – 3x •Bočni sprint sa povratkom – 3x8m •Sprint iz pokreta (float + burst) – 3x5m Završni: •Core stabilnost + glute bridge hold •2x statički izdržaj u single leg balansu `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "KRILO (ubrzanje + lateralna brzina)",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex11",
    name: "CENTAR (prvi korak + reakcija u bloku)",
    nameEn: "Exercise 11 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `Uvod: •Dugački izlasci iz čučnja + bočni izbačaj •Skok na signal + doskok u gard Glavni deo: •Sprint 5m iz kontakta (partner push) – 3x •Reaktivni prvi korak iz garda – 4x •Guranja sanki – 3x10m (75% BW) Završni: •Leđa + trup stabilizacija •Statički iskorak + disanje PRIMENA U APLIKACIJI🔁 •Svaki test unosi se kao metrika → app generiše brzinske treninge •AI prati frekvenciju, kontakt, početnu poziciju •Trener bira po poziciji, deficitu i ciklusu (uvodni, intenzivni, pre-nat) •Hologram prikazuje pravac, impuls i tempo •Humanoid demonstrira kompletan pokret BRZI D                  DODATAK: 🔍 Poređenje BRZINSKIH PARAMETARA po poziciji i igračima (Oslanjam se na tvoje funkcionalne i motoričke testove – 10m sprint, reakcija, frekvencija, COD) 📌Pozicija: BEK IgračSprint 10mVizuelna reakcijaCOD (505 test)Dominantna brzinaPreporuka A1.78sbrzaprosečnastartna, reakcijalateralna brzina, stabilizacija trupa B1.85sprosečnaslabafrekvencijastartni rad, frekvencija, ladder drills C1.81sodličnadobrareaktivnakompleksni signali + serijski sprint 📌Pozicija: KRILO IgračSprint 10mOptojum pCODDominantna brzinaPreporuka D1.90sdobradobraubrzanjeizdržljivost sprinta, reakcija iz kretanja E1.95sprosečnalošarepetitivna COD + lateralna agilnost F1.88sodličnaprosečnastartna + COD signal + ubrzanje na 5m, IgračSprint 10mOptojum pCODDominantna brzinaPreporuka zatim COD 📌Pozicija: CENTAR IgračSprint 10mFrekvencijaStart iz niskogDominantna brzinaPreporuka G2.05ssporajakaapsolutna startnasanke, sprint iz stava, close-out H2.15sprosečnaprosečnanedovoljno razvijenokombinacija mini hops + sanke I2.00sdobraodličnaRFDreakcija + lateralni startovi Preporuke – kako da koristiš ovu analizu:✅ 1.Trener unosi rezultate iz testova u aplikaciju 2.AI sistem automatski poredi sa standardima za tu poziciju 3.Na osnovu toga sistem nudi: •Tip brzine koji dominira •Tip brzine koji nedostaje •Predlog specifičnih vežbi za trening Primer iz tvoje knjige (kombinacija): Igrač B (bek) ima: •Lošiju reakciju i slabu lateralnu stabilnost •Trening fokus: •Reaktivni ladder drills •Sprint na signal •Jednonožni lateralni skok + stabilizacija Zlatno                  Zlatno pravilo  koje Simbion II poštuje: Samo funkcionalna snaga je korisna u košarci. Nije cilj generisati maksimalnu silu u laboratoriji, već prenos sile u realnim kontaktima igre. To znači: •Maksimalna snaga bez transfera = beskorisna snaga •Više vrednuješ 100 ponovljenih korisnih mikrokontakata u meču  nego 1 RM rekord •Funkcionalna snaga = sposobnost da se sila koristi u pokretu, pod promenom ravnoteže, u kontaktu i pod pritiskom U delu o snazi posebno ću: •Razlikovati snagu korisnu za igru (funkcionalnu) •Odbaciti „mrtve brojeve“ bez transfera •Povezati snagu s pokretom, pozicijom i potrebom u meču •I naglasiti: manje opterećenje × više kvalitetnih primena > maksimalna opterećenja bez funkcije Krenuo sam. Snaga koju gradimo – biće igračka, ne laboratorijska. TESTIRALI SMO FUNKCIONALNO I MOTORIČKI. VEŠTAČKA INTELIGENCIJA DAJE SVOJE PREDLOGE. ŠTA JE CILJ, GRUPISANJE PARAMETARA ILI INDIVIDUALIZACIJA? VIŠE VOLIM DA IH GRUPIŠEM, A NEKA SE RAZLIKUJU PO SVOJOJ KOŠARKAŠKOJ VEŠTINI I BRZINI ODLUKE. NEĆE BITI NAJBOLJI ŠTO MOGU DA BUDU, ALI ĆE TIM MNOGO BOLJE FUNKCIONISATI. KO ĆE DA UHV ATI NAJBRŽEG? TO NE ZNAČI DA INDIVIDUALIZACIJU TREBA ZAPOSTA VITI VEĆ DA NE BUDE 100% IZRAŽENA. SNAGA Visoko razvijena sposobnost da brzo generiše mišićnu silu je od izuzetnog značaja za jednog košarkaša. U košarci, eksplozivna snaga se manifestuje kod raznih vrsta skokova (iz mesta, iz kretanja, iz doskoka, iz košarkaškog stava, u vis, u dalj, u raznim smerovima, odskokom sa jedne i sa dve noge, naizmenično s noge na nogu itd.), startnog ubrzanja i brze promene pravca kretanja (eksplozivan prvi korak), usporenja (u vidu brze amortizacije) i dodavanja. Vremenski interval dostupan za izvođenje ovih pokreta je obično veoma kratak (najčešće od 250 ms) što onemogućava ispoljavanje značajnog nivoa sile, što se manifestuje manjim ubrzanjem, odnosno dostignutom brzinom  pokreta.  Iz  tog  razloga  razvoju  eksplozivne  snage  treba  pokloniti  naročitu  pažnju  u treningu snage košarkaša, jer je to faktor koji u velikoj meri određuje uspeh u košarci. Razvoj eksplozivne snage može se obezbediti na više načina, metodom maksimalnih naprezanja i metodom dinamičkih naprezanja. Prvi metod je karakterističan za trening početnika ili sportista sa nižim nivoom snage i obezbeđuje razvoj kapaciteta za ispoljavanje snage, a drugi metod je karakterističan za naprednije i pripremljenije sportiste i obezbeđuje razvoj prirasta sile. Za kvalitetno planiranje i programiranje  treninga  za  razvoj  eksplozivne  snage  neophodno  je  odrediti  metode  i  sredstva treninga, trenažno opterećenje, kao i njihov raspored i učestalost u fazama sportske pripreme, odnosno periodizaciju treninga. Periodizacija treninga, odabir trenažnih metoda i sredstava, kao i primenjeno opteredenje, zavisi od poštovanja principa individualizacije u treningu. Poštovanje ovog principa  doprinosi  većoj  efikasnosti  primenjenog  treninga  i  manjoj  mogućnosti  pojave pretreniranosti i povreda. Neki od najznačajnijih individualnih faktora su uzrast, antropometrijske dimenzije, nivo pripremljenosti, pozicija u timu.  Uzrast sportiste se izdvaja kao najznačajniji faktor individualizacije  zahteva  plansko  i  sistematsko  sprovođenje  treninga  u  skladu  sa  biološkim, hronološkim i psihološkim  razvojem mladog košarkaša. To se pre svega odnosi na  optimalno doziranje  opterećenja  u  treningu,  ali  i  na  odgovarajudi  odabir  metoda  i  sredstava  treninga  u zavisnosti  od  navedenih  uzrasnih  karakteristika  košarkaša.   Obzirom  da  je  trening  za  razvoj eksplozivne snage vrlo zahtevan i naporan za organizam sportiste, treba biti obazriv u njegovoj primeni i obratiti pažnju na nivo pripremljenosti sportiste, tj. njegove spremnosti da otpočne sa takvim tipom treninga. Telesna masa sportiste, posebno pri primeni raznih vrsta skokova, ima uticaj na  doziranje  opteredenja  u  treningu.  Kada  su  ispoštovani  prethodni  principi  individualizacije, trening  za  razvoj  eksplozivne  snage  treba  prilagoditi  poziciji  igrača  u  timu  i  takmičarskim zahtevima kako bi se postigao što veći efekat na takmičarsku uspešnost. Rekviziti su isti kao i za razvoj  snage  jer  je  u  košarci  snaga  sekundarnog  karaktera  i  propriocepcija  se  ogleda  u pripremljenosti tela na napore košarkaške igre. Nivo obuke diktira trenažna sredstva, najpopularnija i najdelotvornija su olimpijska dizanja. U novije vreme kombinacije vežbi olimpijskih dizanja, pliometrijskog metoda i ketlbelova dovode do sve veće bezbednosti sportista i proprioceptivno utiču u značajnoj meri.  Zašto? Zato što se menjaju pravila, a sa njima i zastupljenost određene vrste snage u košarkaškoj igri (nikada ne treba prevideti da je košarka sport iz tzv grupe “sportova prevare”,  granične  mogućnosti  su bitne  jedino u izgrađivanju  baze, određivanju  biohemijskih- fizioloških parametara treninga). Brzinsko-eksplozivna snaga je najzastupljenija, ali i najrizičnija. Usled gustine kalendara repetativna, kao energetski najzahtevnija, dobija drugo mesto, ali iznad svega se kombinacija te dve vrste snage uzima kao primarna (stamina). Veza snage, izdržljivosti, ali i  balansa, fleksibilnosti, koordinacije  je  najbolje  prikazana  u vežbi duboki  čučanj na  bose loptama. Zašto? Zato što samo vrhunski izbalansirano telo može da izvede vežbu, a razvojem snage automatski je to razvoj ostalih motoričkih sposobnosti, jer jačanjem mišića na nestabilnoj podlozi, jačamo zglobove i mišiće koji su zaduženi za njihovu kontrolu. Nestabilna podloga i osećaj šipke sa tegovima na leđima unapređuje koordinativne sposobnosti. Statička snaga se može uz repetativnu posmatrati  kao  baza.  Sklekovi,  vežbe  za  trbušne  i  leđne  mišiće,  plankovi,  razni  izdržaji  su nezamenljivi jer daju brži efekat od tegova, a i mogućnost kreacije je veća. Plankovi su kao vežba izuzetno efikasni i propriocepcijski utiču na razvoj snage. Moderni su poslednjih decenija, ali su se radili i ranije pod nazivom statika . Postoje 4 osnovna položaja, a kako se napreduje u minutima izvođenja vežbe, tako se vežbe usložnjavaju, a vrhunski pripremljeni sportisti dodaju vežbe za razvoj repetativne snage (razne sklekove…), mogućnosti su neograničene i svaka kreacija trenera će uneti nešto novo i zanimljivo za igrače. Trenira se na kraju treninga ili trenažnog dana, zavisno od periodizacije. Trening snage je uvek skopčan sa rizikom od povrede, nije redak slučaj da tegovi umesto da pomognu imaju potpuno suprotan efekat. Rizik može biti  pojava Valsalva fenomena, ovoga puta ne zbog maksimalnih naprezanja već zbog dužine trajanja vežbe. Pravilno disanje i izvođenje vežbe su propriocepcija podjednako važna kao nošenja pojasa kod vežbi sa opterećenjem. Česta je greška neodređivanje 1RM i samim tim neznanja u kojoj se zoni trenira snaga. Mišićna izdržljivost se ispoljava kada se trenira u sferi opterećenja manjeg od 70% 1RM, od 10 do 12 ponavljanja. Tako stvorena baza je propriocepcijskog karaktera i omogućuje trening bez rizika. Smanjivanjem broja ponavljanja  i  povećavanjem  težina  ka  maksimalnoj  snazi  i  sili,  tehnika  napreduje,  a  sa  njom koordinacija i balans. Iako je sportista zagrejan, pre treninga snage treba ponovo napraviti uvod u trening sa tegovima. Nije bezbedno odmah početi sa težinama bez obzira da li su u ležećem položaju (benč) ili sedećem (nožne ekstenzije). Neretko se košarkaši povređuju baš na samom početku treninga snage. Zašto nakon vežbi zagrevanja, brzine, koordinacije ponovo uvod u trening snage? Zato  što  je  pre  početka  izvođenja  složenijih  vežbi  potrebno  imati  određen  tonus  u  mišićima kinetičkog lanca koji koristimo u daljem radu na razvoju snage. Bez obzira da li ćemo raditi sa tegovima, medicinkama … sem što je proprioceptivnog karaktera tih 10 min. se tokom makro ciklusa višestruko isplate, jer vežbe možemo koristiti kao trening oporavka, a i kao poslednji trening snage pred utakmicu. U pitanju su lake težine, tako da se usložavanjem kompleksa vežbi posredno razvija koordinacija. Rezultat je uvek pozitivan, a nervna razdraženost na maksimalnom nivou. Uzmimo za primer iskorak ili  čučanj. Kako i koliko treba trenirati? U sledećem poglavlju ću pisati o planiranju treninga i vežbi. Pre ovih vežbi treba odraditi 2 serije na trenažerima za zadnju i prednju ložu (dodatno zagrevanje). Dupliranje vežbi dovodi do super setova i bržeg napretka, a delujete  i  proprioceptivno.  Mišićna  hipertrofija  koja  se  javlja  kao  posledica  treninga  deluje stimulativno na igrače, vizuelno i hormonski kroz podizanje testosterona. Noge – sredstvo treninga – duboki čučanj. Specifična vežba, koja kroz jedinicu vremena daje najbrže i najtrajnije rezultate. Odredimo RM (repetition max) 1RM-100% 2RM-95% 5RM-87% 12RM-67% Još od vremena Zaciorskog i Verhošanskog traju rasprave, kako korigovati i korekciju uklopiti u trening. Praksa pokazuje da se problem prevazilazi tako što testom snage, odnosno određivanjem 1RM mi određujemo i sfere u kojima se trening odvija, a samim tim i mišićne osobine i svojstva. UVEK počinjem sa razvojem mišićne izdržljivosti 12 i više ponavljanja, odnosno 67% od 1RMa. Gubitak vremena je ponavljanje takvog treninga, pa se zato prelazi i na veće težine, a ako su one 5RM ili 87%, onda je to snaga. Na kraju, a to se dešava nakon 2 meseca ili 2 mezociklusa (neki igrači sporije, a neki brže napreduju, zavisno od nivoa na kojem su došli ili treninga koji su radili prošlih sezona) prelazim na 1 i 2RMa, a to je onda Sila. Sfera u kojoj će igrači najčešće trenirati je između 70% i 90%, odnosno sfera eksplozivne snage, ali kako se igra ubrzava tako se i procenat spušta i ulazi u sferu brzinske snage. Bilo koja vežba u kojoj učestvuju mišići isti kao u čučnju ili iskoraku je dobrodošla promena. Smatram da korišćenje više trenažnih sredstava sprečava ulaženje u monotoniju bez obzira na usvojenost tehnike i pomaže motoričkom učenju košarkaša. Svaka nova vežba kao i svaka nova tehnika doprinose usvojenim motoričkim navikama da budu efikasnije. Ukoliko je koordinativno zahtevnija imate priliku i da ukoliko već niste, razvijate koordinaciju i to u otežanim uslovima. Posredno se dobija dobar rezultat i poboljšavaju motoričke navike. Prelaskom iz faze koncentracije (stvaranje dinamičkog stereotipa) u fazu automatizacije i na kraju stabilizacije, postigli smo nivo da košarkaš naučene elemente izvodi u situacionim uslovima. Česta je greška sužavati motoričko učenje samo na košarkaški šut (usvojenost tehnike bez otežavajućih okolnosti, faza automatizacije i situacioni, faza stabilizacije), bez perceptivnog učenja i elemenata fizičke pripreme. Veliki je broj povreda usled neadekvatnog treninga snage koji limitiraju mogućnosti igrača. Snaga služi isključivo za proprioceptivno delovanje na igrača i omogućavanje sprovođenja taktičko tehničkih zadataka. Gledajući Svetska prvenstva u košarci i atletici  primećujemo razliku u građi igrača u odnosu na prošla takmičenja. U proseku imaju po 3 - 5 kg manje mišićne mase. Zašto? Menjaju se pravila i samim tim ističu se neke druge antropomotoričke osobine. Trening snage ima proprioceptivni karakter, ali samo uz uključivanje rekvizita koji omogućavaju veću  fleksibilnost  i  mobilnost.  Ketlbelovi,  gume,TRX  i  kombinacije  rekvizita  su  se  pokazali najefikasnijim, jer je moguće ukomponovati antropomotoričke osobine, uštedeti vreme i smanjiti zamor  košarkaša.  Veliki  je  i  psihološki  uticaj,  jer  saznanje  da  su  vežbe  funkcionalne,  deluje motivaciono.Za košarku je tzv . Power centar najvažniji, vežbe za trbušne mišiće, donji deo leđa su sastavni deo svakodnevnog treninga, ali iako postoji bezbroj vežbi, vremenom taj deo tela postaje krut, sklon povredama. Amplitude pokreta u treninzima sa ketlbelovima, gumama i trxom su veće nego  sa  klasičnim  tegovima  i  vežbama,  oblik  ketlbela  nam  omogućava  izvođenje  situacionih pokreta, jača kinetički lanac pokreta na drugačiji način, moguće je izvoditi pokrete u maksimalnom intezitetu bez bojazni od povreda, dok trx omogućava da opterećenjem sa svojim telom i u poziciji koja zahteva visoku koordinaciju i balans, izvodimo vežbe kao što su mountain climber, burpee, plankovi, mnogo funkcionalnije i fleksibilnije.  Izbegavanjem da nam košarkaši budu kruti i kreću se  kao  roboti  propriocepcijski  delujemo  na  ceo  lokomotorni  aparat.  Vežbe  sa  ketlbelovima, gumama, trx trakom se izvode na kraju ili na početku treninga snage u pripremnom periodu, kasnije ih koristimo kao uvod u trening ili u kombinaciji sa „klasičnim“ vežbama. Obuka ne traje predugo, a dovoljno je dva puta u mikro ciklusu izvoditi vežbe sve do postizanja dinamičkog stereotipa. U praksi se pokazalo, da zbog atraktivnosti rekvizita i vežbi, igrači sami kreiraju ili kopiraju vežbe sa društvenih mreža. Postoje interesantni treninzi i vežbe, ali predstavljaju opasnost. Zašto? Zato što nisu isplanirani, nisu prilagođeni dimenzijama košarkaša, a najčešće su vežbe pogrešno izvedene. Individualizacija kao princip ne postoji.  Snaga je moćno oružje, ali nije jedino u arsenalu fizičke pripreme. Proizvod treninga snage je funkcionalna hipertrofija, a ne mišćna masa. Poistovećivanje dovodi do toga da imate mišićavog, brzog, eksplozivnog igrača, ali koji od 10 pogodi samo 3 šuta. Upravo forsiranje bilo koje antropomotoričke osobine dovodi do takvih grešaka. Antropomotorička osobina ili svojstvo karakterišu igrača i to je sfera situacione fizičke pripreme. Komentar na poglavlje: Eksplozivna snaga u košarci Ovo poglavlje pruža izuzetno detaljan i praktičan okvir  za trening eksplozivne snage u košarci, uključujući metodologiju, planiranje i individualizaciju. Pravilno ističeš ključne aspekte – od integracije eksplozivne snage u kontekst igre do primene specifičnih trenažnih sredstava i preventivnih metoda. Osvrnimo se na najvažnije tačke i predložimo dodatke. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "CENTAR (prvi korak + reakcija u bloku)",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex12",
    name: "Eksplozivna snaga kao ključna komponenta u košarci",
    nameEn: "Exercise 12 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Fokus na kratke vremenske intervale (250ms)  jasno ističe da uspeh zavisi od brzih i snažnih pokreta, poput prvog koraka u driblingu, promena pravca i odskoka . •Metod maksimalnih i dinamičkih naprezanja : Ova podela je korisna jer omogućava prilagođavanje treninga individualnim potrebama sportista. Odlično si povezao faze razvoja od početnika do naprednih sportista. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Eksplozivna snaga kao ključna komponenta u košarci",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex13",
    name: "Individualizacija i periodizacija kao osnov za bezbedan trening",
    nameEn: "Exercise 13 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Poštovanje individualnih faktora (uzrast, telesna masa, pozicija u timu)  je dobro osmišljeno, posebno jer razlikuješ nivo pripremljenosti igrača i potencijalne rizike. Isticanje opasnosti od pretreniranosti  doprinosi preventivi povreda. •Periodizacija u treningu snage : Naglasak na početku sa mišićnom izdržljivošću (12RM) i kasnijim prelaskom na eksplozivnu snagu (5RM i niže) pokazuje da trening postepeno ulazi u fazu prilagođavanja takmičarskim zahtevima. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Individualizacija i periodizacija kao osnov za bez",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex14",
    name: "Praktična primena – izbor vežbi i sredstava",
    nameEn: "Exercise 14 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Olimpijska dizanja, pliometrija i ketlbelovi : Uvođenje ovih vežbi je korisno, jer povećavaju bezbednost i unapređuju koordinaciju i snagu. Kombinacija ovih metoda omogućava razvoj celokupnog kinetičkog lanca. •Primer dubokog čučnja na nestabilnim površinama : Ova vežba je odlično opisana kao primer povezivanja snage, balansa i propriocepcije. Naglašavaš važnost jačanja mišića stabilizatora kroz funkcionalne pokrete. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Praktična primena – izbor vežbi i sredstava",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex15",
    name: "Prevencija povreda i pravilno disanje",
    nameEn: "Exercise 15 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Valsalva fenomen: Odlična opaska o rizicima vezanim za nepravilno disanje tokom vežbi snage. Povezivanje disanja sa propriocepcijom (kao dodatna preventivna mera) pokazuje ozbiljan pristup. •Uloga lake težine i zagrevanja pre kompleksnih vežbi : Pravilno si naglasio da je potrebno dodatno aktivirati mišiće pre početka složenijih vežbi, čak i kada su sportisti već zagrejani. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Prevencija povreda i pravilno disanje",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex16",
    name: "Snaga kao sredstvo za razvoj tehničkih i taktičkih elemenata",
    nameEn: "Exercise 16 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Veza između snage i tehničko-taktičkih elemenata : Naglašavaš da snaga nije sama sebi cilj već sredstvo za bolje izvođenje specifičnih košarkaških zadataka. Odlična je ideja da snaga treba da doprinese boljoj situacionoj igri, a ne samo fizičkom izgledu sportista. •Proprioceptivni karakter snage : Korišćenje rekvizita poput ketlbelova i TRX-a daje vežbama dinamičnost i fleksibilnost. To omogućava smanjenje krutosti i povećava funkcionalnost igrača. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Snaga kao sredstvo za razvoj tehničkih i taktičkih",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex17",
    name: "Psihološki aspekti i motivacija",
    nameEn: "Exercise 17 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Samostalna kreacija vežbi i uticaj društvenih mreža : Zanimljiva i važna opaska da sportisti često kopiraju vežbe s mreža, što može dovesti do problema. Ovde je jasno istaknuta potreba za individualizacijom i pravilnim planiranjem , kako bi se izbegle povrede i loše navike. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Psihološki aspekti i motivacija",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex18",
    name: "Zaključak i preporuka za dodatak",
    nameEn: "Exercise 18 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Predlog za dodatak : Mogao bi uključiti primer nedeljnog plana treninga snage , s tačno definisanim vežbama, intenzitetom i brojem ponavljanja. To bi olakšalo praktičnu primenu. •Dodatak o oporavku : S obzirom na intenzitet treninga snage, preporučujem uključivanje kraćeg dela o tehnikama oporavka – masaže, pasivnog istezanja i aktivnog oporavka. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Zaključak i preporuka za dodatak",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex19",
    name: "Logički kontinuitet treninga",
    nameEn: "Exercise 19 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Kombinacija propriocepcije sa fleksibilnošću, mobilnošću i atletskim elementima  stvara optimalan uvod u glavni deo treninga. To omogućava razvoj ne samo motoričkih sposobnosti već i smanjenje rizika od povreda. •Trening kroz metod kontrakcija-relaksacija  i akcenat na dinamičkom istezanju sprečava pad temperature u mišićima i olakšava prelazak na glavni deo treninga. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Logički kontinuitet treninga",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex20",
    name: "Individualizacija i fleksibilnost pristupa",
    nameEn: "Exercise 20 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Priznanje da igrači nisu na istom nivou  doprinosi prilagođavanju treninga. Fokus na različitim parametrima omogućava personalizovani pristup, koji pomaže u izjednačavanju nivoa ekipe. •Vežbe na merdevinama, vijačama i balans platformama  unapređuju preciznost i agilnost kroz zabavne elemente, što povećava motivaciju. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Individualizacija i fleksibilnost pristupa",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex21",
    name: "Praktične primene i korektivni aspekt",
    nameEn: "Exercise 21 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Uključivanje propriocepcijskih elemenata na početku i kraju treninga  predstavlja efikasnu strategiju za jačanje mišićnog lanca i stabilizaciju zglobova. •Prelaz sa balansa na snagu  osigurava da se snaga razvija uz kontrolu pokreta i smanjuje mogućnost povreda kod složenih vežbi poput dubokog čučnja na bosse loptama. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Praktične primene i korektivni aspekt",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex22",
    name: "Praćenje i kontrola inteziteta",
    nameEn: "Exercise 22 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Naglašavanje važnosti kontrolisanja pulsa i monitoring reakcije sportista  pomaže da se prilagodi nivo opterećenja, naročito u završnim serijama. •Kombinacija kardio treninga sa propriocepcijom  u cilju očuvanja visokog nivoa energije i tehnike posebno je korisna za situacije tokom utakmica. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Praćenje i kontrola inteziteta",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex23",
    name: "Osvrt na izazove uslova treninga",
    nameEn: "Exercise 23 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Realan osvrt na loše uslove za treniranje u manjim klubovima  pruža važno upozorenje. Treneri moraju pažljivo birati vežbe kako bi izbegli povrede zbog neodgovarajućih podloga i prostora. •Dobro je što je uključen i praktičan savet za izbegavanje vežbi koje nisu prilagođene specifičnim potrebama sportista , što dodatno unapređuje sigurnost treninga. Ovaj proprijceptivni trening ne samo da doprinosi fizičkoj pripremi, već podstiče i psihološku stabilnost sportista , jer ih uči da se bolje nose sa nepredvidivim situacijama. Ovakav sveobuhvatan pristup je odličan temelj za razvoj ČetFit aplikacije, jer pruža personalizovane opcije za svaki nivo pripremljenosti sportista. . Čet nikako nije mogao da u košarci napravi razliku između snaga, jednostavno se držao eksplozivne snage, ali kada smo je povezali sa proprioceptivnim treningom dao je potpuno tačna rešenja. Imao je u vidu i grafikon po danima što će se videti u narednim poglavljima. Napredovao je u onome šta zahtevam od AI. Sagledavanje značaja biomehanike jer funkcionalna anatomija se dešava na prostoru koji je oivičen linijama. Ne odustaje od pravljenja aplikacije, a sve više i ja shvatam neophodnost. Šta Čet ne razume? Rizik od vežbe duboki čučanj na nestabilnim platforamama. To je vežba koja SVE vezuje, ali jedan pogrešan potez u najboljem slučaju generiše povredu leđa! Da bismo je koristili igrač mora da bude izbalansiran, svež i maksimalno spreman. Koristimo je u nakon 6 meseci treninga u reprezentativnim pauzama. SNAG                 SNAGA U KOŠARCI – TROSTRUKA ANALIZA + LOKALNA FUNKCIONALNA PRIMENA 🧠 1. Četov komentar (sažeto): •Snagu deli na osnovnu, maksimalnu i eksplozivnu •Fokusira se na opterećenja (1RM, 3RM), bez pozicijske analize •Nema povezivanja sa funkcijom pokreta ni transfera u igru 🗣️2. Goranova metodika (iz knjige): •Snaga se ne trenira zbog snage – već zbog zahteva igre •Funkcionalna snaga  = sposobnost kontrole tela, prenosa sile i održavanja balansa u pokretu •Lokalna snaga tela (stopala, noge, trup, ruke, grudni pojas) posmatra se u kontekstu zadatka (npr. doskok, close-out, duel) •Naglasak na: izdržljivosti u snazi , brzinskoj snazi, ekscentričnoj kontroli 🤖3. Simbion II nadogradnja: A. 📌Vrste snage – definicija i funkcija u košarci: Vrsta snage Opis Primer funkcije Apsolutna Maksimalna silaGuranja u reketu, box- out Relativna Snaga po kg telesne mase Vertikalni skok Brzinska (RFD) Proizvodnja sile u kratkom vremenu Prvi korak, doskok Ekscentrična Kontrola sile pri produžavanju mišića Doskok, kočenje Repetitivna Održavanje snage tokom više ponavljanja Duge serije u defanzivi Izdržljivost u snaziKapacitet za rad pod opterećenjem duže vremeRepetitivni kontakti 🔎LOKALNA SNAGA – segmenti tela i funkcija Segment tela Dominantna snaga Funkcija u igri Stopalo Reaktivna, Kontakt sa podlogom, balans Segment tela Dominantna snaga Funkcija u igri ekscentrična List/potkolenica Eksplozivna Skok, sprint Kvadriceps/gluteus Apsolutna + RFD Prvi korak, duel, doskok Trup (core) Izometrična, rotaciona Prenos sile, kontakt Grudi/rame/ruka Relativna + repetitivnaŠut, pas, duel, zadržavanje lopte 🧠 TESTOVI I FUNKCIONALNA KORELACIJA Test Meri Funkcionalni trening Trap bar deadlift Apsolutna snaga nogu Guranja sanki, single leg push Skok u dalj RFD nogu Pliometrija, ekscentrična kontrola Broj ponavljanja Repetitivna snaga Superset, EMOM Wall sit + rotacija Izdržljivost trupa Antirotacione vežbe Unilateralni čučanjLokalna snaga i balansSingle leg squat, perturbacije 📊UPOR. ANALIZA PO IGRAČIMA – PRIMER BEKOV A IgračTrap bar (kg)Skok u dalj (cm)RM čučanj (kg)Dominantna snagaPreporuka A120kg220100RFD + relativnaEkscentrična kontrola + lateralna eksplozivnost B100kg20590RepetitivnaSuperset + EMOM za izdržljivost u snazi C130kg210110ApsolutnaSnaga bez transfera → ubaciti funkcionalne zadatke 🏋️‍♂️TRENING BLOKOVI – SNAGA PO POZICIJI 📌BEK DeoVežbaSerije x Pon% 1RMPauzaNapomena UvodIskorak + stabilizacija3x10BW30sMobilnost + lokalna kontrola GlavniTrap bar jump 4x450%90sRFD fokus DeoVežbaSerije x Pon% 1RMPauzaNapomena GlavniSplit squat + ramena 3x670%60sPrenos sile u ramenima ZavršniWall sit + medicinka 2x30s-30sAntirotacija + izdržljivost 📌KRILO DeoVežbaSerije x Pon% 1RMPauzaNapomena UvodSingle leg RDL 3x8BW/dumbbell30sFokus na asimetriju GlavniGuranja sanki 3x10m70% BW90sClose-out + transfer GlavniDumbbell floor press 3x1060%45sSnaga u duelu ZavršniPlank + dodavanje lopte2x30s-30sCore stabilnost 📌CENTAR DeoVežbaSerije x Pon% 1RMPauzaNapomena UvodBand walk + iskorak 3x10BW30sKukovi i core GlavniČučanj + pause (tempo 3–1– 1)4x480%90sEkscentrična snaga GlavniGuranja u parovima 4x6s-60sBox-out simulacija ZavršniWall sit + overhead hold 2x30s-30sTotal body izdržljivost APLIKATIVNA INTEGRACIJA:📎 •Test rezultati → AI određuje dominantnu i slabiju vrstu snage •Sistem bira odgovarajuće vežbe, dozira ih po fazi trenažnog ciklusa •Vizuelni model prikazuje pokret (humanoid) •Povratna informacija putem senzora + kamere 🔁SNAGA – POZICIJA 📌1. BEK – FUNKCIONALNA SNAGA Dominantni zahtevi igre:🔎 •Startni ubrzaj •Snaga u ramenima i trupu za pasove i šut •Ekstremna stabilnost trupa za duže serije driblinga i close-out poziciju •Brz generisani impuls (brzinska snaga) 🧠 Tipični test rezultati (primer): •Trap bar deadlift: 100–130 kg •Skok u dalj: 210–230 cm •RM čučanj: 90–110 kg Preporučeni trening blok:🏋️‍♂️ Uvod (mobilizacija + aktivacija): •Iskorak sa zadrškom (3x10, BW) •Mini band lateral walk (2x10m) •Sklek iz kolena sa dodirima ramena (2x6) Glavni deo (eksplozivna i funkcionalna snaga): •Trap bar jump (4x4, 50% 1RM, RFD fokus) •Split squat + izbacaj ramena (3x6, 70% RM) •Medicine ball slam + sprint (3x5, 4kg lopta) Završni deo (stabilizacija + kontrola): •Wall sit sa bacanjem lopte u zid (2x30s) •Core antirotacija sa elastičnom trakom (2x8/strana) •Diši u dubokom čučnju (2x30s) 📌2. KRILO – FUNKCIONALNA SNAGA Zahtevi:🔎 •Bočna eksplozivnost •Snažan core za duel i sprint •Snaga ramena za pasove kroz kontakt •Lateralna kontrola i rotacija trupa 🧠 Test primer: •Trap bar: 130–150 kg •Skok u dalj: 220–240 cm •RM čučanj: 100–130 kg Trening blok:🏋️‍♂️ Uvod: •Single leg RDL (3x8 po nozi, 12–14 kg bučice) •Iskorak unazad + torzija trupa (2x6) •Aktivacija gluteusa (hip thrust BW 2x10) Glavni deo: •Guranja sanki (3x10m, 75% BW) •Dumbbell floor press (3x10, 60%) •Step-up sa opterećenjem + boks (3x6 po nozi) Završni deo: •Plank sa rotacijom medicinke (2x30s) •Iskorak iz mesta + dodavanje lopte u stranu (2x6) 📌3. CENTAR – FUNKCIONALNA SNAGA Zahtevi:🔎 •Apsolutna snaga u kontaktu •Snaga kukova za box-out i duel •Ekscentrična kontrola kod doskoka •Gornji deo tela – borba za poziciju 🧠 Test primer: •Trap bar: 150–180 kg •Skok u dalj: 200–220 cm •RM čučanj: 130–160 kg Trening blok:🏋️‍♂️ Uvod: •Band walk + iskorak (3x10) •Goblet squat + rotacija (3x6) •Wall sit (2x30s) Glavni deo: •Čučanj sa pauzom (tempo 3–1–1) (4x4, 80%) •Guranja u parovima (4x6s, defanzivni stav) •Floor press sa elastičnim otporom (3x10) Završni deo: •Wall sit + izdržaj medicinke iznad glave (2x30s) •Dead bug sa pritiskom elastične trake (2x8) 🧠 LOKALNA SNAGA PO SEGMENTIMA TELA – FUNKCIONALNA ANALIZA 🧠 1. STOPALO Dominantna snaga:🔎 •Reaktivna snaga •Ekscentrična kontrola pri doskoku i promeni pravca Funkcija u igri:🏀 •Uspostavljanje balansa •Inicijalna aktivacija kinetičkog lanca •Brza promena pravca bez gubitka stabilnosti Preporučene vežbe:✅ •Skok na jednoj nozi + stabilizacija (3x5) •Ekcentrika stopala: ekscentrična ekskurzija pete (2x10) •BOSU balans + jednonožni transfer (2x30s) •Foot doming aktivacija (2x10, spora kontrola) 🧠 2. LIST / POTKOLENICA Dominantna snaga:🔎 •Eksplozivna snaga •Brzinska snaga (reakcija) Funkcija:🏀 •Vertikalni skok •Prvi korak •Odraz i odskočna faza Preporučene vežbe:✅ •Pliometrija: pogo hops (3x6) •Skok na kutiju sa reaktivnim odrazom (3x5) •Ekscentrična ekskurzija lista sa opterećenjem (2x10) •Skokovi sa kratkim kontaktom (2x8) 🧠 3. KOLENO + KV ADRICEPS Dominantna snaga:🔎 •Apsolutna i ekscentrična snaga Funkcija:🏀 •Kočenje pri doskoku •Promena pravca •Gubitak visine pri close-outu Preporučene vežbe:✅ •Ekscentrični čučanj (tempo 4–1–1) (3x6, 60%) •Sissy squat (2x8) •Nordic drop na TRX (3x5) •Step-down na niži boks (3x6 po nozi) 🍑4. KUK / GLUTEUS Dominantna snaga:🔎 •Eksplozivna + lateralna snaga Funkcija:🏀 •Transfer sile u sprintu •Snaga za box-out i duel •Ubrzanje iz niskog stava Vežbe:✅ •Guranja sanki (3x10m) •Hip thrust sa izdržajem (3x6, 80%) •Banded squat walk (2x12m) •Single leg glute bridge + pokret kolena (2x10) 🧠 5. TRUP / CORE Dominantna snaga:🔎 •Antirotaciona, izometrična, dinamička stabilnost Funkcija:🏀 •Prenos sile između donjeg i gornjeg segmenta •Kontaktna stabilnost •Održavanje balansa u šutu, prodoru, rotaciji Vežbe:✅ •Dead bug sa pritiskom (2x10) •Pallof press (3x8) •Russian twist sa opterećenjem (2x10) •Plank + bočni otklon sa elastičnom trakom (3x30s) 💪6. GRUDI / RAME / RUKA Dominantna snaga:🔎 •Relativna + repetitivna + stabilizaciona snaga Funkcija:🏀 •Šut, pas, duel, držanje pozicije •Produžena snaga za serije šuteva i kontranapade Vežbe:✅ •Dumbbell floor press (3x10, 60%) •Overhead press sa bučicama (2x8) •TRX povlačenje + zadržaj (2x10) •Bacanje medicinke u zid + pas (3x5) PROPRIOCEPCIJSKI TRENING Vežbe se izvode u kombinaciji sa klasičnim istezanjem i korektivnom gimnastikom . Svaku vežbu izvoditi 6 do 12 sec. metod kontrakcija-relaksacija. Dodaju se i lako atletski elementi tipa skip, poskok, propriocepcijski, hodanje peta-prsti, rub-unutrašnji deo stopala. Zagrevanje je prilika da se obavi  ceo  propriocepcijski  trening  kroz  razvoj  antropomotoričkih  osobina,  ali  treba  da  bude izvedeno u intezitetu koji  ne  dozvoljava  opadanje  temperature  u mišićima  i usporava  impuls. Rasporedom igrača na dve bočne linije dobijamo prostor da sve pretvorimo u aktivnu mobilnost kao simbiozu  brzine  (pokreta,  reakcije  i  startnog  ubrzanja),  fleksibilnosti,  koordinacije,  balansa. Treningom kroz protok vremena igrači će biti agilniji. Ukoliko prođemo sve faze treninga od obuke do stabililizacije agilnost će karakterisati igrače sve dok energetski izvori to dozvoljavaju, a brzina oporavka (tajm auti, izmene, poluvremena, pauze u igri ). Uvek i u svakom timu imate igrače koji nisu na istom nivou, neki nisu obučeni, neki nemaju voljni efekat, ali ukoliko svi budu imali slične parametre, odbrana i tajming u napadu će biti na višem nivou, a samim tim i šanse za bolji rezultat. Propriocepcijski trening donosi znatne direktne i indirektne koristi. Kada povežete sa vežbama pred trening (trake, ketlbelovi, vijače, balans platforme …) propriocepcijski proces je podjednako bitan kao i razvoj antropomotoričkih osobina i svojstava. Vežbe su primenljive i na kraju treninga, doprinose boljem hlađenju i spuštanju inteziteta, jer ponekad, a naročito na sredini udarnog mikro ciklusa, klasično istezanje neće imati nekog naročitog efekta (ukoliko je zamor toliki da izaziva visoku anksioznost, istezanje u parovima je moguć način prevazilaženja, ali ovog puta obrnuto od balističkog). Fokus nije samo na tehnici izvođenja vežbe već i na disanju, kada su ruke u podignutom položaju, jak udisaj, a u spuštanju izdisaj.  Različita je praksa u prelasku na trening koordinacije, od vežbi u trčanju do vežbi sa rekvizitima. Princip od jednostavnijeg do složenijeg zavisi od nivoa obuke i navike igrača, a najviše od uslova treninga. USLOVI  treninga  su  najveći  problem  u  današnjem  sportu  (izuzimajući  vrhunske  klubove  ili klubove koji imaju svoje sale i teretane). Termini su kratki, gužva u svlačionicama, neadekvatne podloge i nestručno napravljene hale (dešava se da kardio sala bude veličine teretane, a ukoliko imate veliki teren ili dva, postavlja se pitanje zašto je uopšte i potrebna, kada mogu da trče po terenima). Bolje je samo istezati igrače nego ih terati da trče i skaču po keramičkim pločicama (samo je pitanje vremena kada će povrediti tetive, kolena ili leđa). Većina klubova ima jednog fizioterapeuta i nije realno da pred svaki trening utrljava kreme igračami i učestvuje u zagrevanju. Sve to spada u uslove treninga i ponekad „nije do para nego do nemara“ ili neznanja. Mobilnost, koordinacija, aktivacija su povezane sa balansom, ali i sa ostalim antropomotoričkim osobinama i svojstvima, zavisno od vremena, uslova, možemo ih primenjivati kao delove ili cele treninge. Kontinuitet izvođenja vežbi garantuje napredak u svim segmentima. Vežbe ponavljati 4x i insistirati na brzini. Vežbe bez rekvizita se mogu ponavljati 2x dnevno u uvodu u ta te deo treninga. Nijedno sredstvo treninga ne treba glorifikovati, ali ni potcenjivati. Vremenom postaju dragocena rutina, a stvaranjem navike propriocepcijski deo trenažnog procesa u celini. Balans možemo da povežemo sa sa brzinom i snagom i tu se najviše ogleda njegov propriocepcijski karakter jer su u ispoljavanju  brzinsko-snažnih  elemenata  igre  najčešće  dešavaju  povrede.  Kada  smo  aktivirali agoniste i antagoniste (tibijalis anterior i soleus) možemo da pređemo na složenije vežbe balansa. Kombinacijom koordinativno zahtevnih vežbi snage raste nivo balansa. Nije produktivno u treningu isplanirati nejefektnije vežbe (olimpijska dizanja, razne kombinacije), a da nije isplanirano vreme za balans i jačanje mišića koji učestvuju u kinetičkom lancu pokreta. Cilj nam je da pripremimo košarkaša 2.05 visine na vežbu dubok čučanj na bosse loptama, kao najefektniji i time uštedimo vreme u nastavku makro ciklusa. Zašto? Zato što je vreme limitiran resurs i u evropskoj košarci se na račun fizičke pripreme štedi u korist ta-te treninga (propriocepcija spade u kondicijski deo fizičke pripreme) i želimo da ga koristimo sredstvima sa najvećim trenažnim efektom. Kako  kombinujemo  balans  sa  snagom  i  prelazimo  na  trening  snage,  kombinuje  se  snaga  sa balansom, ali samo u posebnom treningu za balans. Svako balansiranje na loptama je povezano sa snagom, a ukoliko je trening balansa, onda je najinvolviranija stamina izdržljivost u snazi. U ovom slučaju je cilj i ujednačavanje snage leve i desne noge (Optojump test), posredno i poboljšavanje lateralne koordinacije i reakcije u desno.U uvodnom mikrociklusu, bazičnog mezociklusa je najviše vremena za trening balansa jer je moguće izdvojiti vreme za obuku. Tih 4 – 6 treninga će duže trajati,   vreme  za  balans  trening  se  ponovo  pojavljuje  u  specifičnom  mikrociklusu,  bazičnog mezociklusa. Tokom opšte pripremnog mikro ciklusa uvodni delovi treninga su vreme kada je moguće  izvoditi  vežbe  za  balans.  U  takmičarskom  mezociklusu  trening  balansa  može  imati oporavljajući karakter, uglavnom nakon utakmica na početku sledećeg mikrociklusa. Primer propriocepcijskog treninga Uvod u propriocepcijski trening je deo uvodau trening, podrazumeva se da je košarkaš zagrejan. Fleksibilnost power centra, vežbe na merdevinama za jačanje zglobova, pokretljivost stopala, ali i ruku. Na kraju kombinacija, mountain climbera, burpia, merdevina i medicinke. Intezitet brzo pređe u maksimalan, ali se povećavanjem brzine smanjuje nivo koordinacije, a posledično tehnike. Vežba se ponavlja 4x, na početku će trajati nekoliko minuta (zavisno od broja vežbi koje se ubacuju na merdevinama, koristim uglavnom 8 za utrenirane košarkaše, a u obuci i do 28), a kasnije može poslužiti kao test trening i uvod u trening brzine. Kritičan deo je reakcija, a ukoliko budemo insistirali (kombinovan metod) na tom delu vežbe (analitički) propriocepcija će biti nepovređivanje košarkaša prilikom naglih kretanja u odbrani, napadu i kontranapadu. Ukoliko završimo sa propriocepcijskim treningom u ovom trenutku, onda je to idealno zagrevanje za glavni deo treninga, svejedno da li je ta te ili trening fizičke pripreme, ali u ovom slučaju je prvi deo propriocepcijskog treninga. Intezitet se postepeno penje, a u 4 seriji je maksimalan i iznosi do 190 otkucaja u min. (cardio exercice test).  Pre vežbi sa loptom, a nije greška ni pre aktivacija, jer omogućavaju snižavanje pulsa sa 190 do 180 (ukoliko košarkaš nije dovoljno spreman, vežbe statike treba preskočiti ili ih zameniti nekom od vežbi za mobilnost). Zašto? Svaka  vežba  sa  visokim  intezitetom  zahteva  sem  brzine,  stamine  i  visok  nivo  razvijenosti fosfagenih izvora energije (u ovom slučaju u 4 seriji može se govoriti i o glikolitičkim), a ulaženje u zonu opterećenja do maksimuma automatski obara nivo koordinativnih sposobnosti, a sa tim i pravilnost  izvođenja  tehnike.  Promene  odskoka  i  doskoka  propriocepcijski  utiču  na  mišiće aktivirane u tom trenutku, ali usložnjavanje vežbe promenama podloge i doskoka predstavlja pravi izazov. Situaciona je za košarkašku igru, naročito prilikom borbe za loptu ispod koša, kada se stopala i telo nalaze u nepredvidljivim okolnostima. Sposobnost  tela  da  statičkom  snagom  zadrži  ravnotežni  položaj,  u  ovom  slučaju  glavni  deo treninga, a u sredini takmičarskog mikrociklusa mođe bit uvodni jer se podrazumeva da je dostignut nivo kondicijskih sposobnosti. Cilj je zadržati se na pilates loptama 30 sec. takođe predstavlja test. U početku je zauzimanje početnog položaja dovoljno, a ukoliko se to uradi 4x dobili smo trening. Male lopte, medicinke … su idealne za kombinaciju elemenata, od koordinacije preko balansa do razvoja repetativne snage. P                     PROPRIOCEPTIVNI TRENING – TROSTRUKA ANALIZA 🧠 1. Četov komentar (sažeto) •Propriocepciju posmatra kao podršku balansu i prevenciji povreda •Uvodi je pasivno – uz vežbe na balans daskama, BOSU, i statički plank •Ne povezuje jasno sa funkcionalnim testovima, niti diferencira po pozicijama 🗣️2. Goranov autorski pristup (iz knjige) •Uvodiš pojam aktivne mobilnosti  kao funkcionalni spoj mobilnosti i stabilnosti •Balans nije deo treninga – već vezivno tkivo celog kinetičkog lanca •Prikaz senzorskog puta: stopalo → receptor → korteks → motorni odgovor → mišićna reakcija •Svaki pokret analiziraš od stopala, sa funkcionalnim značenjem za gornje spratove 🤖3. Simbion II – nadogradnja i sistematizacija Biomehanika i neurologija:🔍 •Proprioceptori u stopalu (mehanoreceptori, Golgijeva tela, Ruffinijeva vlakna) detektuju promene u pritisnom opterećenju i položaju •Signal se prenosi do senzorne kore i natrag do motornog korteksa → efikasniji odgovor kroz feed-forward + feedback loop •Kod sportista sa deficitima propriocepcije dolazi do “zamrznutih” obrazaca, rigidnosti i kompenzacija (uglavnom kroz kičmu i koleno) Veza sa testovima:🔄 •Y balance test – direktan pokazatelj kontrole na nestabilnoj osnovi •OHS test – pokazuje koliko stabilnosti postoji u mobilnom pokretu •Jednonožni skok i doskok  – ukazuje na deficite u kontroli centra mase TRENING BLOKOVI🏋️‍♂️ ✅UVODNI DEO (6–10 min) Cilj: senzibilizacija i priprema neuromišićnog sistema VežbaSerije x TrajanjeOpterećenje Napomena Walkover stopalom BOSU 2x20sBWPolako, fokus na doskok Mobilnost skočnog zgloba 2x10BWPovezati sa disanjem Dead bug sa reaktivnim pokretom ruke2x30sBWKros veza ruka–suprotna noga Bird dog sa zadrškom 2x8/stranaBWFokus na kontrolu rotacije ✅GLA VNI DEO (15–20 min) Cilj: unapređenje propriocepcije kroz destabilizaciju, koordinaciju i integraciju VežbaSerije x PonavljanjaOpremaPovezano sa testom Jednonožni čučanj uz perturabaciju 3x6elastična trakaY balance Lateralni iskorak na balans jastučiću 3x8 balans diskOHS / COD Bočni doskok na liniju + stabilizacija3x4/strana bezjednonožni skok Prijenos lopte u čučnju na nestabilnoj podlozi2x30sBOSU + loptastabilnost trupa Reaktivna promena pravca (glasovna komanda)3x6 beztest brzine reakcije ✅ZA VRŠNI DEO (3–5 min) Cilj: reset neuromišićnog sistema + povratna informacija Vežba Trajanje Napomena Wall breathing (disanje u posturi) 3x30spovezivanje kortikalne kontrole i disanja Statička ravnoteža sa zatvorenim očima2x20sna desnoj i levoj nozi Vizuelna AI analiza –aplikacija daje povratnu info u realnom vremenu PRIMENA U APLIKACIJI📎 •Svaki test ulazi kao ulazni podatak → aplikacija bira koje proprioceptivne vežbe treba primeniti •Trener može da selektuje vežbe na osnovu pozicije igrača, deficita i dana u mikro ciklusu •Humanoid demonstrira pokret (vizuelni model) •Hologram daje pozicioni orijentir (rotacija, nagib, dubina) •AI sistem analizira pokret → označava greške → predlaže korekcije TRENAŽNI OPORA V AK Hlađenje organizma predstavlja obrnuti proces od zagrevanja. Odmah nakon prestanka napora, sportista obavlja lagani aerobni rad (oko 50-60% od VO2max), čime se postiže dobra oksidacija mišića i eliminisanja i sagorevanja laktata u njima (istrčavanje, isplivavanje isl.). Ovo se obavlja u prvom delu procesa.U drugom se vrše specifične lagane strečing vežbe, dok se u trećem delu uključuju  vežbe  disanja  i  opuštanja.Svaki  trening  je  katabolizam  (razgrađivanje),  a  oporavak anabolizam (izgrađivanje). Hlađenje kao deo treninga ubrzava anabolizam i do 30%, a uz pravilno planiran i programiran trening predstavlja propriocepciju. Zašto? Zato što u tom trenutku počinje i Krebsov ciklus, anabolizam. Uz medicinska sredstva oporavka, trenažna sredstva imaju propriocepcijski karakter. Poslednji deo je uslovan i može se staviti kao kraj večernjeg treninga jer se nakon treninga snage obično radi košarkaški šut (tokom trajanja cele sezone). Tada mišićni nadražaj na najviem nivou (kada  je  nadražen  mišić  najbolje  pamti  pokret)  i  najracionalnije  je  sa  više  aspekata  (aerobna aktivnost ubrzava oporavak). U pripremnom periodu se praktikuju trčanja i nakon toga strečing. „Rad fleksora ubrzava oporavak ekstenzora“, ali i obrnuto. Ukoliko imate potrebu za oporavkom, podelite  trening  snage  na  gornji  i  donji  deo  tela. Kompleksnost  fizički  pripreme, sinergija  sa košarkaškim treningom uz više paralelnih takmičenja tokom sezone diktiraju pristup i temeljnu pripremu. Kvalitet treninga zavisi od dijagnostike, korelacije antropomotoričkih osobina i svojstava, socijalnih faktora i neophodno ih je uklopiti u celinu. Tek tada smo spremni za dizajniranje plana i programa. Decenije iskustva su me naučile da je na početku najbolje „napraviti sporazum da kasnije ne bi bilo nesporazuma“. TRENAŽNI OPORA V AK – KOMENTAR Tvoj opis trenažnog oporavka vrlo jasno povezuje fiziološke procese sa praktičnim aspektima treninga. Evo nekoliko ključnih stavki koje bih istakao i dodatno komentarisao: 1.Hlađenje kao deo proprioceptivnog procesa : •Perfektno objašnjavaš kako lagani aerobni rad pomaže eliminaciji laktata i ubrzava anaboličke procese. Ideja da svaki trening završimo s aerobnom aktivnošću (npr. lagano trčanje ili plivanje) doprinosi kontinuiranom napretku i smanjuje rizik od povreda. Ovo će biti korisno i za aplikaciju ČetFit, jer će omogućiti personalizovane preporuke za oporavak. • 2.Vežbe disanja i opuštanja u završnom delu : •Naglašavanje disanja je od suštinske važnosti. Pravilno disanje povećava oksigenaciju i ubrzava oporavak, a takođe pomaže u regulisanju autonomnog nervnog sistema. Ovaj deo bi mogao biti proširen kroz vizuelne vodiče u aplikaciji za korisnike koji žele unaprediti tehniku disanja i smanjenje stresa. • 3.„Rad fleksora ubrzava oporavak ekstenzora“ : •Ovo je odličan primer praktične primene biomehanike. Kombinovanje treninga gornjeg i donjeg dela tela pomaže u optimizaciji oporavka, što je od suštinske važnosti za sportiste koji treniraju na visokom nivou tokom cele godine. • 4.Sinergija fizičke pripreme i košarkaških elemenata : •Veoma značajno je to što si spojio košarkaški šut i trening snage . Kada je mišić nadražen, pokret se bolje pamti, što znači da povezivanje fizičke pripreme sa tehničkim treninzima daje superiorne rezultate. • 5.Medicinska i trenažna sredstva za oporavak : •Zanimljiv je koncept korišćenja medicinskih sredstava i proprijceptivnog treninga zajedno. Aplikacija može uključiti personalizovane preporuke za regeneraciju, uključujući kombinacije ovih sredstava (npr. planiranje masaže i treninga za fleksibilnost). • 6.„Sporazum na početku“ : •Važna poruka za trenere – jasno postavljanje očekivanja na početku sprečava nesporazume kasnije. Ovo je direktno primenjivo u aplikaciji ČetFit, gde bi korisnici mogli postaviti jasne ciljeve pre početka treninga. Fleksori i ekstenzori su nešto drugo, ali nije greška jer ukoliko treniramo gornji deo tela donji se odmara (česti su takvi programi). Mislio sam da u jednom treningu ne treba trenirati kvadriceps i zadnju ložu, na početku procesa. Kasnije se to deli po procentima u korist snage ili fleksije koju želimo da postignemo. Pokazalo se kroz iskustvo  da  je  repetativna  snaga  najfunkcionalnija  jer  se  najlakše  pretvara  u brzinsko-eksplozivna  svojstva  situaciona  za  košarku.  Delimični  oporavak  je najčešće stanje u kome treniramo i to AI ne može da zna jer nije trener. U SVIM PREDLOZIMA  NEMA  UVODA,  A  NI  ZAVRŠNOG  DELA.  KORISTIMO  RAZLIČITA SREDSTVA TRENINGA, ALI SUŠTINA JE POTPUNO ISTA. PLAN I PROGRAM PERIODIZACIJA Klasična podela na poli, makro, mezo i mikrocikluse više ne postoji, kalendar takmičenja je toliko zgusnust  da  je  postao  važniji  od  plana  i  programa.  Zato  se  sve  više  primenjuje  relaksirana periodizacija, bez jasnih granica sa prelivanjem mikrociklusa jedan u drugi, smanjivanjem trajanja perioda, tako da danas trenažni dan možemo posmatrati kao mikrociklus. Praksa je uvek ispred teorije, ali bez teoretskog znanja praksa je samo puka improvizacija. Šta je potrebno da bi trenažni PROCES tekao normalno? Potrebno je uskladiti treninge, putovanja, utakmice i bezbroj nepredviđenih situacija koje se tokom sezone događaju. Tako je u praksi, ali uloga nauke u sportu je da ponudi rešenja za probleme koji nastaju, a još više da predvidi probleme u budućnosti. Kako ih rešiti? Planiranjem i programiranjem trenažnog  procesa.  Visina  procenta  realizacije  plana  i  programa  jednaka  je  visini  sportskog rezultata. Šta su plan i program? Kada napišemo kalendar aktivnosti, onda određujemo mezo, mikrocikluse sa zadacima i to je plan, a  kako  ćemo  ih  sprovesti  je  program.  Svaki  period  u  trenažnom  procesu  ima  svoj  naziv  i zakonitosti, a u njima preovlađujuće sfere treninga (eksplozivna snaga, brzina, izdržljivost …) i onda se operacionalizuju (trening). Kako napraviti plan i program? Prvo odredimo model periodizacije. Postoji više model periodizacije : klasična, valovita i obrnuta. Klasična ili linearna periodizacija više ne postoji. Igrači se potpisuju sve kasnije i pripremni period se skraćuje na 30 – 40 dana maksimalno. Ekipe se kompletiraju čak i kada počne takmičenje. Nema vremena za podizanje aerobnog, anaerobnog praga, čak ni za osnovnu obuku, ali kakvu takvu bazu moramo da  napravimo. Rešenja  su data  u prvom  delu knjige, a kako ih operacionalizovati  u bazičnom i takmičarskom mezociklusu. Valovita  periodizacija  je  moj  omiljen  model  (kombinujem  ga  sa  modifikovanom  obrnutom periodizacijom) jer smena obima i inteziteta daje mogućnost ocenjivanja utakmica u takmičarskom periodu i samim tim uspešniju realizaciju postavljenih ciljeva.  Zašto? Već od uvodnog treninga počinjem sa intezitetom, ali nižim obimom (danas igrači već dolaze u klub delimično pripremljeni) i naglaskom na obuku. Najbolje vežbe su kompleksne, ali nisu svi igrači podjednako obučeni. Zato je obuka i trening nižeg inteziteta, a samim tim i psuzs u treningu. Ukoliko je isključivo intezitet, ispovređivaćete igrače pre nego što sezona počne! Obrnuta periodizacija je sve suprotno od klasične. Odmah se kreće sa brzinom i snagom (najbrže se postižu rezultati, VO2 se stimuliše, igračima je interesantnije, OBIM treninga je manji...), a kada se dostigne  pik  planiranog  opterećenja  smanjuje  se  intezitet,a  obim  ostaje  isti.  Logika  obrnute periodizacije  je  dobra  i  podrazumeva  „svaki  rad  je  katabolizam,  a  odmor  anabolizam“. Smanjivanjem inteziteta se smanjuje katabolizam i dolazi do povećanog anabolizma. Teoretski i sa dužim pripremnim periodom apsolutno tačno, ali model previđa tempiranje forme, povrede, nivo obučenosti igrača i USLOVE za sprovođenje. Kada ovako napišemo postavlja se pitanje „koji model da koristimo i kako da ih kombinujemo i da li je to uopšte moguće“? Moguće je ako poštujemo određene PRINCIPE treninga. Po Tudoru Bompi (Rumunski institut za sport, veliki trener), a ja sam ih naučio od Franje Fratrića (koga smatram najvećim sportskim umom u srpskoj istoriji nauke o sportu) najvažnija dva principa su princip individualnosti i specifičnosti, tako se kreće u trening i tako se radi do kraja sezone (osim ako nije u pitanju polimakro ciklus), zatim principi progresivnog preopterećenja i preokretljivosti (prvi je bitan zbog obuke, koja je sama po sebi teška i povećanja opterećenja, otežavanja uslova, a drugi da kombinovanje treninga dovodi do održavanja nivou forme, a napredak u obuci podiže kvalitet). Ukoliko su nam antropomotoričke osobine i svojstva u dobroj korelaciji međusobno i isplanirana i programirana,  onda  ćemo  efekte  treninga  dobijati  neposredno, ali  i  posredno uz  korelaciju  sa košarkaškim treningom. Tako se dobija PROCES kojim je moguće upravljati. I to je aksiom. Trenažni proces je kauzalna veza između trenera i igrača i kibernetičke je prirode. U praksi se to ogleda kao princip akcije – reakcije. Igrač će pozitivno reagovati ako veruje u to šta ga treniramo, biće motivisaniji ukoliko su treninzi interesantniji, a ako pobede budu potvrda treninga, onda je samo bitno da se zamor predupredi i laktatna kiselina ima što niži nivo. Nivo laktata, zamor vode u pad forme i bezbroj povreda. Za trenera mog profila nije najveći problem prevenirati zamor, već objasniti kako da se ne uđe u taj beskrajni tunel. Kako ne pogrešiti? Princip specifičnosti. Zašto? Zato što se igra košarka, a igre spadaju u sportove „prevare“, znači NE graničnih mogućnosti sportiste . Zato što su košarkaški trenizi zastupljeniji u planiranju i programiranju, a METOD treninga je SITUACIONI. Ta dva metoda su kompatibilna i smanjuju mogućnost greške. Danas u nauci o sportu postoji mnogo modela i podmodela, još više tumačenja istih, ali nijedan ne garantuje ni uspeh, ni neuspeh, zato svaki trener treba da bude planer i programer. Zavisno od nivoa saradnje sa šefom struke, psiho-fizičkog nivoa igrača, takmičenja i modeli treninga će se menjati jer trener za fizičku pripremu košarkaša NIJE individualan u svom radu. Izgledaće  vam  neobično  zašto  ne  počinjem  od  treninga  kao  osnovne  jedinice  trenažne tehnologije? Zato što je neophodno postaviti sve okvire tehnološkog procesa da bismo konstruisali trening. Pre 35 god. knjiga  Julijana Malacka „Metodologija treninga“  je odredila moj pristup trenažnom procesu  i  iako  poštujem  druge  prilaze  i  načine  razmišljanja,  smatram  da  je  ovakav  pristup najučinkovitiji. Zašto?  Zato što je jasno postavljena granica između trenera i stručnjaka iz oblasti koje se koriste u nauci o sportu (anatomija, fiziologija, biomehanika …) i uvek imam gde da potražim rešenja za problem. Zato što tako postavljeni tehnološki postupci imaju samo USLOVE i SARADNJU kao ograničavajući faktor. Tehnološki postupci su : određivanje cilja (realnih ciljeva), testiranja (ukoliko imate samo inicijalno, bez tranzitnog i finalnog, možete sa 70% tačnosti da kontrolišete  proces),  izbor  metoda,  sredstava  treninga,  opterećenja  i  PLANIRANI  oporavak (preveniranje zamora).. Šta je cilj? Cilj je optimizovanje trenažnog procesa  i skraćivanje vremena između  treninga  i  rezultata  treninga.  Igrač  kroz  trenažni  proces  doživljava  transformaciju  kao posledicu treninga, ali uz napredak postoji rizik od poremećaja homeostaze organizma i povreda kao posledica. Poslednjih godina su učestale tragedije na sportskim terenima iz razloga što su aktivnosti sportiste nerealno ili nikako isplanirane. Povređene ili trajno onesposobljene sportiste niko i ne broji. Mi treniramo moderne gladijatore i naš cilj je da što bezbednije ili sa što manjim povredama prođu kroz sportsku karijeru. Zato je PROPRIOCEPCIJA naglašena i potencira se kao procesna  delatnost  pre,  tokom  i  nakon  sezone.  Retki  igrači  nakon  sezone  poklanjaju  pažnju oporavku i zato je EDUKACIJA deo periodizacije. Nije dovoljno naučiti ih vežbama i ne objasniti zašto šta rade i sa kojim ciljem, ali takođe nije dovoljno trenažno ih oporavljati, izgrađivati, a ne objasniti im kako da sledeću sezonu dočekaju na višem nivou, kroz karijeru napreduju i ostanu što zdraviji nakon profesionalnog bavljenja košarkom. BAZIČNI MEZOCIKLUS Bazični mezociklus u sportskim igrama čine mikrociklusi opšte pripremnog i specifično pripremnog tipa. Struktura mezociklusa sa 4 mikrociklusa bazičnog tipa je promenjena i umesto 4mc u kojima se menja odnos ukupnog opterećenja, obima i inteziteta, sve češće je slučaj u praksi da se deli na dva produžena mikrociklusa bazični i specifično pripremni. Zašto? Usled podele fizičke pripreme na opštu ili kondicionu, specifičnu koja je usmerena na konkretan sport i specijalnu sa usmerenjem na poziciju za koju se igrač priprema (različitost igrača koji igraju na istoj poziciji u timu, dovela je I do razvoja situacione fizičke pripreme), razvijaju se i takva sredstva treninga, te je oštra ciklična podela ublažena prožimanjem sredstava treninga i razvojem osobina karakterističnim za taj sport. Ponavljam podelu fizičke pripreme, jer ukoliko ne prihvatimo kompleksnost,  nećemo  ispoštovati  princip  individualnosti,  usmerenja  i  samim  tim  princip adaptivnosti treninga nećemo imati na odgovarajućem nivou. Cilj bazičnog mezociklusa je da se igrač putem najvećeg obima opterećenja dovede na viši nivo treniranosti,  a  usmerenost  treninga  je  na  sport  kojim  se  bavi.  Prvi  mikrociklus  je  bazični, progresivno se povećava obim, a na samom kraju mikrociklusa, preuzima i karakteristike udarnog mikrociklusa. Naglasak je na ukupnom opterećenju : UO= OB+INT, početak mikrociklusa, UO= OB+INT na kraju mikrociklusa. Kako? Od 4 do 18 avgusta održava se 23 treninga, a između mikrociklusa su dva dana sa po jednim treningom, koji omogućavaju kumulativan efekat treninga, jer su treninzi oporavljujući, ali ipak ne možemo govoriti o oporavljajućem mikro ciklusu, jer su sredstva treninga sve  usmerenija  na  sport  i  specifičnost  trenažnih  stimulusa  uvodi  nas  u  specifično-bazični mikrociklus sa karakteristikama situacionog i kontrolno-pripremnog mikrociklusa. O - obim I - intezitet UO – ukupno opterećenje Zašto? Koriste se vežbe specifične pripreme, takmičarske koje su pretežno situacione, a i proverava se nivo dostignute pripreme. Naglasak je na intezitetu, a ukupno opterećenje ostaje na istom nivou, UO= OB+INT, ali je trajanje mikrociklusa kraće i traje od 19 do 27 avgusta. Održava se 14 treninga i završava se sa dva treninga u 48 sati, plus danom pauze pred prvu utakmicu 29 avgusta. Zašto? Bezbednost, jer ukoliko bi se igrala utakmica na samom kraju mezocociklusa, rizik od povreda ili generisanja povreda je veliki, ulazak u superkompenzaciju, jer nije samo cilj opterećenje, već i brzo sagledavanje trenažnih efekata. Uspešnost je veliki motiv za dalji trenažni proces, a i psihički faktori ubrzavaju oporavak. Ritam  treninga  od  2,2,  1,1,  2,2,  nam  omogućuje  i  drugačiju  konstrukciju  mikrociklusa  i mezociklusa.  Skraćivanjem  broja  dana,  možemo  u  periodu  od  jednog  meseca  napraviti  dva mezociklusa sa ovakvom konstrukcijom. Bazični  mezociklus  :  3  pripremna  mikrociklusa  sa  povećavajućim  obimom  gde  se  u  trećem smanjuje u odnosu na drugi, a samim tim i ukupno opterećenje UO = OB + INT, UO = OB + INT, UO= OB + INT, a gde je 4ti mikrociklus udarni UO= OB + INT, sa povećanjem i obima i inteziteta. Pripremno – kontrolni mezociklus : mikrociklusi su pripremni UO = OB + INT, udarni UO = OB + INT, oporavljajući UO = OB + INT i situacioni UO = OB + INT. Procenti opterećenja zavise od dijagnostike. Ukoliko imamo samo motorička testiranja bezbednije je biti u sferi 10%- 15% nižoj od testirane. U knjizi ćete naići da je uvodni mikrociklus posebno obrađen kao četvrti. Na grafikonu se vidi porast obima i inteziteta. Praksa pokazuje nešto drugačiju sliku jer dok obučavamo igrače na samom početku sezone, oni su sveži i sve rade u visokom intezitetu, tako da ćemo provoditi više vremena na treningu, ali to neće uticati na obim treninga, a pauze između vežbi će uticati na podizanje inteziteta.  Grafikon je opisnog karaktera jer ne uzima u obzir TT deo trenažnog procesa. UO = TT + FP TT – taktičko-tehnički FP-  fizička priprema Trajanjem Pripremnog perioda svaki mikrociklus ima tendenciju za sve zastupljenijim TT delom treninga. Nakon prve utakmice nisam pristalica povratka na stadion, sve se rešava na košarkaškom terenu. Visina inteziteta je ordinata, broj dana je apcisa podeljena (bojom) na mikrocikluse. Obim je predstavljen plavom, a intezitet zelenom bojom. Kako god isplanirali prvih mesec dana pripremnog perioda, cilj je isti, a to je da se putem najvećeg obima opterećenja, uz korišćenje opštih i specifičnih sredstava treninga, igrač dovede na viši nivo treniranosti, kontroliše proces, nivo pripremljenosti i nastavi dalja priprema. Nedostatak vremena za bazične pripreme je relaksirao strukturu mikro i mezociklusa u sportskim igrama. Uglavnom se sprovode u mestu igranja, što ima svojih dobrih i loših strana. Dobre strane su neodlazak na visinske pripreme, čiji su efekti sumnjivi (ukoliko je nadmorska visina 2000m gde je usled direktnog pretvaranja UH u protein i vazduha obogaćenijem O2, oporavak ubrzan, sve kraće i brže je adaptivnije, ali spušta se nivo koordinacije i niko nije dokazao koliko dugo traju efekti treninga u hipoksičnim uslovima) i nedostatak sredstava ne omogućuje dovoljan broj dana na određenoj visini (potrebno je minimum 21 dan), izdržljivost koja usled velikog broja utakmica postaje dominantna antropomotorička osobina, a najbolje se razvija na nultoj nadmorskoj visini ili mestu u kome se boravi, a loša strana je gubitak benefita socijalizacije koja se razvija dužim zajedničkim boravkom ekipe na istom mestu. Loša strana se donekle prevazilazi odlaskom na turnire, zajedničkim boravkom u istoj sobi na putovanjima i sl. Na ovom primeru se koristi klasična periodizacija gde je tek na kraju pripremnog perioda valovitost opterećenja u jednom mikrociklusu, a cilj pripremno-kontrolnog mezociklusa je stvaranje osnove za TEMPIRANJE forme, ukoliko je to početak sezone. Forma se tempira zavisno od vremena koje imate na raspolaganju, ali formula bazični, udarni, situacioni, oporavljajući mikrociklus uvek može da se primeni. Postoji i drugi način, rizičniji, trenirajte visokim intezitetom i onda naglo spustite opterećenje. Postepeno spuštanje nivoa opterećenja je bezbednije i sigurnije, jer ukoliko naglo spustite intezitet nikada niste sigurni da je igrač uopšte i ušao u superkompenzaciju. Prvi signal da nešto nije u redu sa formom je nedostatak sna. Kroz praksu mi se subjektivan osećaj igrača pokazao kao najtačnijim. Tokom trajanja sezone na zagrevanju vidite u kakvoj su formi! Zagrevanje je jedini deo utakmice na koji imate uticaj i poslednja prilika da nešto ispravite. Da li je to ubrzavanje ili dodatno istezanje je stvar procene, uglavnom je bodrenje sve što možete da uradite. Vežbe mogu biti identične, ali nijedno zagrevanje nikada nije identično. Prelazimo na planiranje i programiranje. PLAN Avgust Bazični mezociklus SunMonTueWedThuFriSat 1 12 2 3 14 25 26 17 18 29 2 10 111 112 213 214 115 116 2 17 218 119 120 221 222 123 1 24 225 226 127 12829 utakmica30 31 putovanje Uvodni MC 4 treninga Opšte- pripremni MC 23 treninga Specifično-pripremni MC 14 treninga PROGRAM Bazični mezociklus 04.08.pon. 11h TT 18.30h FP 05.08.uto. 11h TT 18h teretana+ sala FP 06.08.sre. 10h teretana + stadion + bazen oporavak 07.08.čet. oporavak 20h TT 08.08.pet. 11h TT 18.30h FP- teretana 09.08.sub. 10h stadion 19h TT 10.08.ned. 10h teretana + stadion + bazen oporavak 11.08.pon. oporavak 18h TT + FP 12.08.uto. 11h fp sala 18.30h TT 13.08.sre. 10h teretana + stadion 18.30h TT 14.08.čet. 10h teretana +s tadion + bazen oporavak 15.08.pet. oporavak 18.30h TT + FP 16.08.sub. 11h fp sala 18h TT 17.08.ned. 9.30h teretana + stadion 18h TT 18.08.pon. 9.30h teretana + stadion + bazen oporavak 19.08.uto. oporavak 18.30h TT + FP 20.08.sre. 9.30h teretana + stadion 18.30h TT 21.08.čet. 9.30h teretana + stadion 18.30h TT 22.08.pet. 9.30h teretana + stadion + bazen oporavak 23.08.sub.  oporavak 18h TT 24.08.ned. 10h FP sala 18h TT 25.08.pon. 11h TT 18h TT+ FP 26.08.uto. oporavak 18.30h TT 27.08.sre. 10h teretana + TT 18.30h TT 28.08.čet. 11h TT 18.30h TT 29.08. pet. 19h utakmica Nakon završenog bazičnog mezociklusa prelazimo na specifični mezociklus i završavamo pripremni period. Odmor između dva mezociklusa 2 dana. Dovoljno da se sledeći mezociklus počne sa delimično oporavljenim igračima. Ovakav način planiranja i programiranja omogućava stabilan nivo pripremljenosti, ali danas su retke ekipe koje počinju 1.08. uglavnom od 15.08. Zato što izgleda poznato ovakav plan i program se u praksi primenjuje od 15.08. i od EL do LNBM rezultira lakšim ili težim povredama, ali se nigde ne pominje kako je do njih došlo. Jednostavno se nema „vremena“ za analizu. Pripremni period od 40 - 45 dana je potpuno drugačiji i skraćuje opšti i specifični  mikrociklus.  Kako  skratiti  i  kako  nadoknaditi?  Izbaciti  neki  stadion  jer  se  startno ubrzanje, brzina pokreta, reakcije i aerobno – anaerobni izvori energije mogu nadoknaditi kroz košarkaški trening. Ukoliko je saradnja u stručnom štabu dobra, izbacivanje „suvih“ treninga može brže dovesti do višeg nivoa forme, ALI promene koje trening izaziva neće trajati dugo, povrede će biti češće, a igrači neće napredovati koliko bi mogli, naročito mladi. Iskustvo iz nekada drugog najvećeg izvoznika igrača (Srbije) pokazuje da iako Svetski vicešampion, nema ni 50% domaćih igrača u najvećim klubovima. Izgubio se kvantitet i kvalitet. Kako „uštedeti“ vreme? Šta je tranzicija u košarci? Najbrže prelaženje iz odbrane u napad i iz napada u odbranu. Znači postoje ofanzivna i defanzivna tranzicija, koliko traju vremenski? Na početku priprema se treniraju bez odbrane i ukoliko ponovimo 4 -6x u uvodu u trening (prethodno se pripremimo na opisan način u prethodnim delovima) dobijamo intervalni trening za razvoj kreatin-fosfagenih izvora energije. Zašto je onda potreban stadion? Zato što ćemo na stadionu obučiti i pripremiti igrače na takav trening i postepeno, ali brzo doći do mogućnosti da radimo na terenu. Tehnika je važna i zato je prostor izvođenja bitan. Često primećujemo da igrač, kada treba da reaguje, vraća stopalo noge sa kojom treba da krene, uglavnom vidimo kada gaze bočnu liniju jer je lopta za protivnika, ali ređe da zato slabije igra 1 na 1 ili rešava situaciju ispod koša. Lateralne kretnje zahtevaju dužinu na početku i treniraju se poskocima u stranu. U sali uglavnom nema dovoljno dužine, a nikako nećete da menjate ritam jer igrači nisu na to spremni (ukoliko ste kupili vrhunskog profesionalca on će doći maksimalno spreman, ali takvi igrači mnogo koštaju, a cena nije garancija). Kada vašeg igrača obilazi protivnik, a on ne reaguje, taj deo je propušten. Podrazumevam da svaki igrač koji je plaćen zna kako treba da postavi telo u odbrani. Poboljšanja će doći kroz korelaciju antropomotoričkih faktora i to 15 -30 min. pre i na kraju treninga. Kada se igra 3 na 3 ili 4 na 4 ne više od 5 min. sa promenama igrača 4 do 6 puta za vreme treninga onda se popunjavaju glikolitički izvori energije. Koliko god menjate igrače, ako aktivnost predugo traje, prelazi se u aerobno trčanje. Funkcionalno testiranje  nam  daje  tačne  podatke,  ali  ako  to  nismo  uradili,  veći  je  efekat  češćih  pauza  od kontinuiranog treniranja. Pored direktne imamo i indirektnu korist. Indirektna je saznanje kad i koliko dobro u izvršenju tehničkih zadataka igrač trči. Kumulativan efekat obrnute periodizacije (način treniranja je najbliže ovom modelu) je visok, ali i rizičan. Oporavak, masaža, krio sauna (najverovatnije je krio masaža najčešće što imamo, jer jedan fizioterapeut fizički ne može više od dva igrača kvalitetno da izmasira i ostane zdrav do kraja sezone) … ali ionako nema vremena tako da dan pauze, a u 40 dana treninga i utakmica treba najmanje 10, je jako teško „pronaći“ u kalendaru obaveza. Kako trenažno oporaviti igrače? Aerobni trening. Retki su timovi koji ostaju po nekoliko sezona zajedno, igrači se ne poznaju, a nije lako  ni  zapamtiti  svoje  i  saigračeve  kretnje  u  oba  smera.  Treniranje  niskim  intezitetom  uz ponavljanje i objašnjavanje, dugačko istezanje (uz razvoj mobilnosti) će odložiti pauzu za jedan dan, ubrzati oporavak i sledeći mikrociklus će imati dobar start. Ukoliko je trening „pogođen“ onda je  moguć  početak sledećeg mikrociklusa na  višem nivou.Zakazivanje prijateljskih utakmica  je komplikovan  posao,  vremenski  i  finansijski.  Za  nove  timove  7  do  9  utakmica  je  idealno  za pripremni period. Utakmica je najbolji trening i njoj je sve podređeno. Zato što je situaciona, naprezanja su sub i maksimalna, a procena naučenih košarkaških zadataka je najznačajniji zadatak pripremnih utakmica. Pripremne utakmice su 70% kako ćete igrati tokom sezone i to pod uslovom da su svi igrači zdravi! Tako planiramo specifični mezociklus pripremnog perioda. SPECIFIČNI MEZOCIKLUS Specifični i takmičarski mezociklus se planira UNAZAD od datuma ili cilja. Uglavnom je to prva zvanična utakmica, najčešće Kup takmičenje. Ukoliko klub nema realnu ambiciju u Kupu igra se iz „punog“ treninga. Zašto? Zato što je to poslednja nedelja pred početak Lige, najbolja kontrola i zavisno od NAČINA tempiranja forme SITUACIONI mikrociklus. Poslednja nedelja pred Ligu je oporavljajući  mikrociklus,  iz  katabolizma  se  prelazi  u  anabolizam,  a  samim  tim  i  u SUPERKOMPENZACIJU.  Tokom  Bazičnog  mikrociklusa  smo  imali  faze  inteziviranja  i akumulacije koju smo testirali na PRVOJ utakmici. Pogledajte je ponovo i uradite autoskauting (za mene  je  najvažnije  kretanje  od  tačke  A  do  tačke  B),  dobijeni  rezultati  su  tranzitno  stanje antropomotoričkih  sposobnosti  igrača,  a  služi  kao  inicijalno  stanje  za  planiranje  Specifičnog mezociklusa (ne postoji kruta periodizacija, ciklusi se prelivaju jedni u druge, a koliki će procenat delova fizičke pripreme biti u kom  periodu zastupljen, zavisi  od igrača i  plana  trenera). Ceo Specifični mezociklus nastavlja i fazu akumulacije koja kulminira na Kupu. Poslednji mikrociklus je  oporavljajući  i  zove  se  PERIOD  TRANSFORMACIJE.  Ukoliko  smo  dobro  razvili  izvore energije (ATP i glikogen su glavni izvori energije, kada su akumulirani onda direktno utiču na superkompenzaciju i to tako što je ubrzavaju) poslednji mikrociklus će nam doneti veliko povišenje sposobnosti i punu formu za početak sezone. Na FORMU takođe utiču farmakološka (fosforkreatin, amino  kiseline,  vitamini  i  minerali,  fruktoza  …)  i  medicinska  sredstva  oporavka  (masaža, kriomasaža, terapije …). Poslednji mikrociklus pred sezonu (mc oporavka i „šlifa“): `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Osvrt na izazove uslova treninga",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex24",
    name: "10. subota  30. 09. petak   29. 09. četvrtak   28.09. sreda  27.09. utorak",
    nameEn: "Exercise 24 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `Šuterski trening   Pauza    Pauza PAUZA   FP + Šut UTAKMICA   TT    FP+TT   TT `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "10. subota  30. 09. petak   29. 09. četvrtak   28.",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex25",
    name: "09.",
    nameEn: "Exercise 25 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `ponedeljak25. 09. nedelja  24. 09. subota 23.09. petak PAUZA    KUP  KUP Put+Šut Različiti su nazivi poslednjeg mikrociklusa pred početak sezone, još različitije „filosofije“ treninga, ali nekoliko faktora su uvek isti: ukoliko ste dobro trenirali i ostali zdravi, nakon svake PAUZE igračima će se podizati nivo forme, nema više vremena za velike korekcije, uz formu se podiže nivo anksioznosti i potreban je poseban oprez jer je poslednji mikrociklus najrizičniji. Nije redak slučaj, da usled podizanja forme igrača, treneri pojačavaju intezitet treninga. To je greška koju vrlo brzo i vrlo skupo plaćamo. Forma će kraće trajati, umor će se brže pretvarati u zamor, u decembru će ekipa izgledati „isceđeno kao limun“, sitne povrede će biti češće, a nervoza će poremetiti psihičku stabilnost celog tima. Kup je specifično takmičenje i biće posebno obrađeno. 22.09. četvrtak21.09. sreda20.09. utorak 19.09. poned. FP + Šut   FP+ šutPauzaŠut TT TT Utakmica Od 29. 08 do 19. 09. je period kada se igraju pripremne utakmice. Između dva datuma imate  5 utakmica (ukoliko za Kup ne tempirate formu, onda je 5 utakmica maksimalno). Sa Kupom ukupno 9 utakmica.  Uglavnom su turniri gde se igraju po 2 utakmice u dva dana (ponekad se zakazuje i treća u jutarnjem terminu, što treba izbegavati jer je rizik od povreda veliki). Između utakmica imate vremena uglavnom za 1 teretanu i tu osvežavate ekipu i korigujete. Pauze su značajne jer dele mikrocikluse koje diktira raspored zakazanih utakmica. Zavisno od rasporeda odigravanja se „u hodu“  menja  i  plan  treninga,  a  samim  tim  i  program.  Nedostatak  utakmica  se  nadoknađuje situacionim treninzima, sa sudijama, semaforom, zapisnikom. Najbolji ritam su dve utakmice, tri dana treninga. Uvek ostane dovoljno vremena za rad na fizičkoj pripremi. Taktičko-tehnički  treninzi  su  dominatni.  Primetili  ste  da  je  u  Bazičnom  mezociklusu  pisano „košarka“, a u Specifičnom „taktičko-tehnički“, promena težišta treninga je i promena u fizičkoj pripremi. Košarkaški trener ima strategiju kako će sprovesti ekipu od prvog dana do kraja sezone. Nakon završetka prvog mezociklusa i prve utakmice, već ima i obrise taktike kojom će ekipu uspešno voditi, a koja će konačan oblik dobiti nakon odigranih pripremnih utakmica (u realnosti je to 90%, jer će na Kupu konačno odlučiti o taktici). Treneri koriste vreme i da doselektiraju ekipu. Uloga trenera za fizičku pripremu je da šefu stručnog štaba predoči šta koji igrač može ili ne može fizički  da  uradi  na  terenu.   Prvi  zadatak  na  utakmicama  je  Zagrevanje  ekipe.  Pristalica  sam disciplinovanog zagrevanja i promena inteziteta. Svi koristimo iste ili slične vežbe, ali nam se Način zagrevanja razikuje. Cilj je da se u utakmicu uđe maksimalno koncentrisan i fizički spreman na napore i kontakt. U nekim vežbama zahtevam da budu u liniji od čeone linije do polovine terena i unazad. Zašto? Da bi se razvijala svesnost o igračima pored sebe i razvijala timska disciplina. Ukoliko imate igrača koji želi da bude „poseban“ imate problem sa njegovim stavom i pristupom. Tu se uloga trenera za fizičku pripremu završava što se tiče učešća na utakmici, ostaje samo da dajete podršku do kraja utakmice i ukoliko primetite fizičke probleme igrača da na to ukažete šefu stručnog štaba. Drugi zadatak je praćenje kretanja igrača od tačke A do tačke B u zadatim kretnjama (autoskauting). Treći zadatak je ustanovljivanje vremena kada ekipi opadaju mogućnosti jer ukoliko ekipa nije umorna od kraja 3 četvrtine i u 4 četvrtini, lagano trči i pogađa šuteve iz svih pozicija, znači da nisu dovoljno opterećeni i da trenažni nadražaji neće dugo trajati. Opadanje mogućnosti nije strmoglavo iako i to da se desi nije opasno jer različiti igrači različito reaguju na umor. Ukoliko su se oporavili nakon pauze u poluvremenu, a u toku drugog poluvremena slabije izvode taktičko tehničke zadatke, nakon tajm auta, izmene opet podignu intezitet ekipa, je dobro pripremljena i sve ostalo će doći sa smanjivanjem inteziteta i obim treninga. Na tehničke zahteve tipa navođenje i probijanje blokova, položaj tela, help and back, box out, tajming, cuts, close out … utičemo kroz situacionu fizičku pripremu. Na jednoj utakmici se dešava između 50 - 70 takvih nedovoljno dobro izvedenih tehničkih elemenata. Korigujete ih kombinacijom specijalne i situacione fizičke pripreme u saradnji sa košarkaškim trenerima. „Nije moj posao“ je najgore što trener za fizičku pripremu može da uradi sebi i svojoj ekipi, naročito ako u rotaciji nemate 10 kvalitetnih igrača. Ukoliko igrači bolje izvode tehničke elemente igra će biti na višem nivou i taktika će se lakše sprovoditi, analogno tome igrači će biti svežiji na kraju utakmice i bliži pobedi. Između Bazičnog i Specifičnog mezociklusa (1 utakmica) radi se analiza i sa pretežno opšte i specifične fizičke pripreme prelazi se na specijalnu i situacionu.  To je oštra i netačna podela jer se sve vrste fizičke pripreme rade tokom celog Pripremnog perioda samo se procenti zastupljenosti razlikuju. Osim na samom početku Pripremnog perioda kada su opšti elementi pretežni, ne znamo kuda će nas trening odvesti i lako se pada u zamku da ne treniramo igrača da bude najbolji u onome što jeste i treniramo ga onako kakvim mi mislimo da treba da bude. Sva testiranja, uslovi … ništa ne znače ako trener nije svestan da li i koje je opterećenje najbolje za igrača koga trenira. Koordinativni sistem, gde su nacrtaniobim i intezitet su najbolji način analize, jer aplikatu uvek možete da pomerate modelujući svoj način planiranja, programiranja zavisno od toga šta se dešava sa ekipom. Pregledaćete ponovo treninge i uvek se nađe neka greška i mogućnost za bolji prilaz igraču, kroz vežbu ili trening. Sa iskustvom se to produžava na ceo makrociklus, zato svaki trening pišite, ali i zapažanja nakon treninga.  Šta je najbitnije korigovati i kako?  Uvek se teži stabilizaciji promena  izazvanih  treningom,  ali  pre  faze  stabilizacije  je  faza  automatizacije  i  upravo  je  to najbitnije. Sredstva treninga (vežbe) su se iskristalisala, određen nivo je postignut, ali nije isti za sve igrače. Mlađi igrači su se možda prvi put susreli sa vežbama, intezitetom treninga, a ukoliko nemate veliki budžet nećete trenirati vrhunski obučene košarkaše i princip individualnosti (kao korektivan) će ostati najbitniji do kraja sezone. Stepen usvojenosti tehnike i taktike odlučuje o uspešnosti sezone. Metod korekcije je uvek analički, ali podizanjem sposobnosti igrača tokom sezone se pretvara u sintetički, ali se to očekuje tek nakon 3-4 meseca i svaka žurba je rizična. Kombinovani metod  u  kombinaciji  sa  specifično-specijalnom  fizičkom  pripremom  će  posredno  unaprediti  i situacionu  pripremu  i  igrač  će  biti  uspešniji  u  izvođenju  taktičko-tehničkih  zadataka.  Stepen motoričke inteligencije igrača je 50% uspešnosti fizičke pripreme košarkaša, ali dolazak do 100% mogućnosti je posao za ceo stručni štab i spoljašnjeg okruženja. Anticipacija napretka igrača je uslovljena DIJAGNOSTIKOM. Ukoliko postoje mogućnosti za  inicijalno,  tranzitno  i  finalno  testiranje,  planiranje  napretka  igrača  je  olakšano. Konkonijev test, biopsija su potrebni, ali se u seniorskoj konkurenciji više ne koriste. Razlog je jednostavan, ekipe se često menjaju, kalendar ne ostavlja prostor za nauku o sportu i svrsishodnost je upitna. Faza automatizacije prelazi u fazu stabilizacije i zato je važno da odnos anabolizma i katabolizma  uvek  bude  kontrolisan,  oporavak  planiran,  a  saradnja  u  stručnom  štabu maksimalna. Postavljanje svih parametra omogućava da planiramo Takmičarski period. TAKMIČARSKI PERIOD Kalendar takmičenja je obesmislio sve definicije koje je nauka o sportu postavljala decenijama. Periodizacija  je  relaksirana,  igra  se  po  nekoliko  paralelnih  takmičenja,  utakmice  se  odlažu  i planiranje je skoro nemoguće, ali ukoliko je kalendar takmičenja tačan onda su margine u kojima se sprovodi  takmičarski  period  granice  u  kojima  se  proces  odvija.  Najveća  greška  je  posmatrati takmičarske mezocikluse kao jedan ciklus! Ukoliko se liga prekida zbog kvalifikacionih takmičenja reprezentacije, Kupa … onda je to kraj Takmičarskog mezociklusa. Nakon pauze počinje novi mezociklus. To ne znači da se kreće od početka, jer je nivo pripremljenosti igrača je povišen,  ali „osvežavanje“ ekipe je uvek korisno. Kako? Opšti elementi fizičke pripreme, ali bez popunjavanja izvora  energije,  jer  se  to  posredno  dobija  taktičko-tehničkim  treningom.  U  delu  Produženi mikrociklus detaljnije ću obraditi. Pauze su obično nakon dva meseca, a do kraja polusezone moguće je imati nekoliko (ne zna se da li je Kup ili se igra po grupama sa neparnim brojem…), ali plan moramo da imamo i sprovodimo. Kako da pripremimo tim za 8-10 utakmica i na koji način da treniramo? OCENJIV AĆEMO  UTAKMICE!  Osnovni  kriterijum  je  snaga  ekipe  sa  kojom  igramo!  Tako doziramo obim i intezitet treninga. Skautirali smo utakmice, znamo protivničku taktiku, budžete, zdravstveni status … što više podataka imamo kvalitetnije su nam procene.  Primer, igramo sa najkvalitetnijim timom u gostima, a mi smo skromniji tim, kako se pripremamo za utakmicu u kojoj su šanse 80% da nećemo pobediti (ne igraju budžeti, igraju igrači, ali realnost je trenerski kvalitet)? Intezitet i obim su 80%, a ocena utakmice je 10. Nije formula, ali je okvir koji greške u treningu svodi na niži nivo (zato je koordinatni sistem važan, jer će grafikon opterećenja biti jedan od važnijih parametara). Utakmica donosi tih 20% na kraju mikro ciklusa i omogućava lakšu pripremu za sledeće. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "09.",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex26",
    name: "107.106.105.104.103.102.10",
    nameEn: "Exercise 26 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `oporavakŠutPutovanjeFP+ŠutFP+TTFPOporavak Utakmica  TTTT+FPTT +FP Nakon Kupa, dan pauze i oporavak igrača se koristi za analizu. Psihička stabilnost igrača i trenera je najvažnija  u  nedelji  nakon  Kupa  i  do  prve  utakmice.  Stanje  povišene  anksioznosti  se  smatra normalnim. U delu knjige Trening, detaljnije će se obraditi trenažni dani. U mikrociklusu imamo 2 TT i 1FP i 3 kombinovana  ( maksimalan broj treninga i to isključivo na samom početku sezone, jer su igrači još uvek sveži). Kada su nakon TT  delovi FP uglavnom su razvoj repetativne snage ili strečing. Ukoliko uvode u trening izodimo 15 – 30 min. pre početka treninga onda je kumulativan efekat ovako konstruisanog mikrociklusa veliki i odraziće se na sledeći mikrociklus, jer na postignut nivo (faza stabilizacije) TT i FP, spuštanje nivoa inteziteta automatski se odražava na podizanje sportske forme. Adaptivnost treninga je na najvišem nivou, anksioznost se spušta, a igrači će zadatke ispunjavati tačnije i brže. Motivisanost igranja odbrane je pouzdan  pokazatelj,  a  promene  ritma,  tajming,  spejsing,  potvrđuju  spremnost  na  maksimalne napore. U prvom MC smo igrali sa visokim trenažnim opterećenjem, a ako je utakmica bila u nedelju, a sledeća u subotu, znači 1 dan manje i na domaćem terenu, ali bez putovanja onda je smanjivanje nivoa obima i inteziteta pun pogodak. Mi sebe ocenjujemo sa 10, a protivnika zavisno od njegovih kapaciteta. Prosek između te dve ocene je procenat opterećenja i može biti u direktnoj ili obrnutoj proporciji, ali svakako se nivo obima i inteziteta spuštaju (katabolizam / anabolizam). Na  prvi  pogled  izgleda  kao  komplikovana  formula,  ali  ukoliko  napišemo  kalendar,  ocenimo utakmice i imamo dobru saradnju u stručnom štabu, onda je jednostavno. Plan i program se sami pišu, a trener samo bira sredstva treninga. Odstupanja su do 10% i uglavnom zavise od egzogenih faktora. Usled kalendara takmičenja retko koji tim ima 7 dana u mikrociklusu za trening i utakmicu, često se sledeća igra već u sredu. Nećete pogrešiti ako od sredine mikrociklusa smanjujete broj, obim i intezitet treninga. Oporavak i putovanje ostavljaju vreme za 1 Trenažni dan (detaljnije u poglavlju Trening).  Učestalost utakmica utiče na doziranje opterećenja (ocenjivanje). Nije isto ako imate utakmicu sa ocenom 6 za 7 dana ili u roku od 4 dana. Svaki dan bliže je ocena više. Uzmimo da je takmičarski mezociklus mesec dana i ocenjivanjem ćemo uvideti da su retke iste ocene, a to nam uslovljava različit nivo opterećenja. Dobili smo V ALOVITOST opterećenja i stvorili idealne uslove za izbegavanje SREDNJEG RITMA. U košarci postoji brzo i sporo, ali nikako ne postoji srednji ritam. Na srednji ritam se brzo adaptira svaka odbrana i svaki napad, a nama govori da je veliki broj treninga bio „pucanj u prazno“. U Takmičarskom mezociklusu je to „živi pesak“ i samo pauza ili stres trening to mogu da promene. Beskonačno ponavljanje vežbi u istom intezitetu dovodi do bezvoljnosti (signal), otupljivanja oštrine tima (usporavanje, izbegavanje kontakta, kašnjenja u tajmingu …). Broj treninga takođe utiče na ritam utakmice. Ukoliko smo domaćini i ne putujemo,  NAJGORE što možemo da uradimo je da održimo 10 treninga pred utakmicu, optimalno je 7 bez obzira na ocenu utakmice. Neretko se trenira neposredno nakon puta, nelogično, ali se dešava. Igrači provedu 10 sati u autobusu i „neka se rastrče od puta“, a nakon puta se osećaju sve povrede od početka treniranja košarke. Ukoliko se sutra na utakmici desi pad koncentracije, uzrok su treninzi nakon puta. Sezona je duga i preterivanjem sa brojem treninga uvodimo ekipu u zamor. Nećemo moći da menjamo ritam, a nakon visokog inteziteta u odbrani i slobodna bacanja će predstavljati ogroman problem, o preciznosti šuta sa distance je iluzorno pisati. Svi simptomi PRETRENIRANOSTI  će se pojaviti i zazvoniti na uzbunu. Uglavnom prekasno jer smo  ekipu  pretrenirali,  a  na  utakmici  vidimo  rezultat.  Homeostaza  organizma  je  poremećena, lokalno - akutni zamor ne postoji već je opšti – hronični. Postoji puno uzroka zamora, ali ako ste ispraznili izvore energije štetni metaboliti će smanjiti nivo kiseonika i CNS (centralni nervni sistem) će reagovati otporom jer će čuvati bazalni metabolizam (ponekad to i ne uradi i pročitamo da je neki sportista umro od srca), a tada će zamor osim fizičkog biti intelektualni i emotivni. Planiranjem takmičarskog perioda sve to želimo da predupredimo i bezbedno na pristojnom nivou sačekamo pauzu. Svako može da radi jako, ali retki su treneri koji znaju da rade pametno.  Ceo takmičarski period je ispresecan pauzama. Traju 2 ili čak 3 nedelje. Te periode smatram izuzetnom prilikom za fizički napredak igrača. Dve nedelje pauze je dovoljno da osvežite ekipu i nastavak takmičenja budete na višem nivou. Takmičarski period se deli na: ligaški deo koji se igra za plasman u prvih 10 ekipa, ligaški deo koji određuje raspored 10 ekipa na tabeli i Plej of, ostali igraju za raspored udonjem delu tabele i Plej aut i KUP takmičenje. Izbegavam termine Liga za prvaka i Liga za opstanak jer su po fizičkom opterećenju potpuno identične. KUP TAKMIČENJE Kup je specifično takmičenje sa  kojim  se  otvara  sezona. Po pravilu se  dešavaju iznenađenja, favorite  iznenadi  uslovno slabiji tim, a  emocije  su na najvišem  nivou. Uglavnom  se  igraju 2 utakmice na početku kvalifikacija, tokom sezone 1 i pred Plej of, Final four kupa. Jedini izuzetak u karijeri je bio KUP Šampiona Afrike gde se igralo 9 utakmica u 11 dana. Ukoliko ste prošli kvalifikacije i stigli do presudne utakmice, njena ocena je 1. Intezitet treninga je najniži jer je u dosadašnjem periodu najvažnija utakmica. Bez obzira ko vam je protivnik. Želimo da budemo najbolji što možemo i da se kvalifikujemo na Final four. Ritam treninga je isti kao u dosadašnjem delu takmičenja, ali pauze su češće jer ne dozvoljavamo gubitak svežine. Kako tempirati formu za utakmicu? Ukoliko ste imali utakmicu 3 dana pre kvalifikacione Kup utakmice, ne možete trenažno da utičete, ali ako ste trenirali na utakmici (uglavnom taktičke promene u napadu i odbrani), onda je trenažni dan najbolje što možete da uradite. Pobeda u takvoj utakmicu ekipu podiže u svakom pogledu. Ostatak Takmičarskog perioda će proteći sa izuzetno motivisanim igračima. Kada imamo 7 dana do utakmice treniramo slično kao u svakom takmičarskom mikrociklusu. Broj treninga ostaje isti, ali sa nižim nivoom inteziteta i na prvi znak umora prekidamo intezitet. Kvalitetni košarkaški treneri tada usporavaju trening, razrađuju detalje i uvode ekipu u hlađenje. Kada se liga igra po grupama sa neparnim brojem moguće je da imate dve, a ponekad i tri nedelje do Final fora Kupa. Dve nedelje je idealno, a ako je tri, onda imamo sve vreme na svetu da se pripremimo. Ukoliko nam je Kup najbitnije takmičenje u sezoni, svakako ćemo poslednje dve nedelje da posvetimo cilju. Ukoliko imamo utakmicu i ona će biti u cilju pripreme za FF Kupa. 14.dan13.dan12.dan11.dan10.dan9.dan8.dan ŠutPutovanjePauzaPauzaPauzaPauza FinalePolufinale FP+TTTTFP+TTFP+TT 7.dan6.dan5.dan4.dan3.dan2.dan1.dan ŠutPauzaFP+ŠutFPOporavakOporavak OporavakUtakmicaTTTTTT Nikada nisam pristalica 2 dana potpune pauze, ali ako nam se mikrociklus završava utakmicom, a ulazimo u pripreme za Final four, dva dana su optimalna pauza. Povratak u ritam je psihički težak za igrače i uvek je trenažna disciplina problem. Prošlo je već 7 meseci od početka Pripremnog perioda, taktika – tehnika i fizička priprema su odavno u fazi stabilizacije i sem osveženja ekipe i tempiranja forme, malo šta možete da uradite. Ukoliko pokušate sa previše trenažnih informacija rezultat neće biti pozitivan bez obzira na timsku motivaciju. Plan je da se prva dva dana iskoriste za bazičnu pripremu  koja uključuje opšta i specifična sredstva treninga. Brzina pokreta i reakcije takođe opada tokom sezone (osim ako nemate idealne uslove, pad može biti i do 20%), treninge takvog tipa ostavljam za kraj mezociklusa. Apsolutna i repetativna snaga su prioritet u drugom i tre ćem danu. Taktičko – tehnički treninzi počinju sa šutem, spejsingom, kretnjama... Zašto? Zato što treninzi bazičnog tipa otežavaju igrače i ukoliko su rastrčani bez kontakta rizik se smanjuje. Trećeg dana se nakon snage šutira. Svaki rad na snazi bazičnog tipa kvari šut, a mi težimo da bude uvek na visokom  nivou.  Četvrti  dan  i  utakmica  su  kontrolni  mikrociklus.  Nakon  7  meseci  utakmica, putovanja, treninga... niko ne može da se potpuno oporavi i uđe u punu formu. Oporavak je heterohron, nije isti za sve igrače, a da bi se vratili na najviši nivo svojih sposobnosti potrebno je VREME.  Za  nas  je  bitno  da  igrači  uđu  u  anaboličku  fazu  i  da  do  polufinala  budu  u superkompenzaciji. Zato su pauze zastupljenije u kalendaru. Pauzu košarkaški treneri koriste za skauting i dogovore sa igračima o taktici.  Oporavak traje skoro 48 sati od završetka utakmice. Osmi i deveti dana su posvećeni specijalno-situacionoj fizičkoj pripremi. Brzina i eksplozivno – brzinska snaga, ali i repetativna (staminu uvek ističem kao najbitniju jer ukoliko nemate mišićnu izdržljivost, nakon 30 min pad u igri je neminovan).  Košarkaški treneri pripremaju taktiku i tehniku kojom nameravaju da osvoje trofej. Tehnika je uvek teža jer su u njoj zastupljene korekcije detalja izvođenje u punoj brzini, a trenira se u grupnoj taktici. Timska taktika (T) je lakša, neretko se izvodi na pola terena. Mentalno je teža, ali je fizički lakša. Zato je dva TT i dva T u mikrociklusu. Šuterski trening sem šuta uvek podrazumeva i deo taktike kada je na dan utakmice. Deseti dan je najteži TT trening, a jedanesti dan je najlakši (težim kontrastnom mikrociklusu koji se sastoji od dva trenažna dana,  putovanja  i  šuterskog  treninga.  Igrači  će  biti  u  dobrom  psiho-fizičkom  tonusu.  Svaki medicinski oporavak prestaje 10 dana. Klubovi u kojima sam radio su osvajali Kup u tri različite države i zato ovakav način planiranja smatram najefikasnijim. PLAY OF – PLAY OUT Deo Takmičarskog perioda za koji smo se pripremali od prvog dana. Umesto jedne ili dve utakmice imamo tri ili četri u mikrociklusu. Iako potpuno drugačiji, ne možemo ga izdvojiti iz celokupnog trenažnog procesa. U pripremi za Final four Kupa smo težili ritmu od dva najteža dana i kroz dve nedelje smo adaptirali igrače na dve utakmice u dva dana. Prvo i osnovno pravilo u pripremama za Play of i Play out je da se igrači dovoljno oporave. U prethodnim delovima sam insistirao na oporavku, ali u ovom periodu je presudan. Ekipa koja se bude brže i kvalitetnije oporavljala ima veće šanse za uspeh. Zašto? Zato što su ekipe podjednakih kvaliteta. Teško je ući sa nižim nivoom forme i proći u polufinale sa 2 utakmice. Izgubljena utakmica znači kraće vreme za oporavak i trening do sledeće. U Play ofu ekipe će odigrati veliki broj utakmica, ali ovoga puta za mnogo kraće vreme. Zgusnutost rasporeda utakmica je najteže sa čime se trener za fizičku pripremu suočava. Različitost Play ofa u skoro svakoj ligi onemogućava postavljanje pravila u planiranju i programiranju.  U prvom krugu igra se na 2 ili 3, polufinala na 3 ili 4 pobede, a finala na 4 ili 5 pobeda. Moguće je odigrati oko 20 utakmica za oko 60 dana. Kako se pripremiti? Na početku Pripremnog perioda smo podelili FP na 4 dela i upravljali smo tokom cele sezone sa kondicionom, specifičnom, specijalnom i situacionom pripremom. Određivali smo procente zastupljenosti u određenom periodu, ali nismo nijedan segment zapostavljali. Nikada nisam pristalica da bilo koji deo fizičke pripreme bude viši od 50%! Na početku Pripremnog perioda to je opšti ili kondicioni deo, specifični je 30%, a specijalni i situacioni po 10%.  Tokom Takmičarskog  perioda  bazični  deo  se  potpuno  gubi,  a  njegovu  ulogu  preuzima  specifični.  U pripremi za Play of specifični deo je 20%, a kombinacija specijalno - situacionog dela 80%. Zašto? Zato što se balistički metod koristi za sve tri vrste, a pliometrijski metod koristi kao korektivni. Oba metoda su povezana sa BRZINOM. Brzinska snaga u teretani,vežbe pliometrije niskog inteziteta, vijača,  medicinka  …  uz  frekvenciju  pokreta  kao  brzinu.   Zašto  frekvenciju  pokreta?  Uvek insistiram na osvajanju prostora, niskom položaju tela i ne vraćanje stopala unazad (često igrači gaze bočnu liniju iz tog razloga), ali to treniramo 8 meseci (frekvencu pokreta kombinujemo sa brzinom pokreta i koordinativnim sposobnostima) i ovo je jedina promena koja donosi osveženje, ali i štedi vreme. I frekvencija ima visok urođen kvocijent, ali ukoliko igrač ima sposobnost da izvede brzo kombinacije jednostavnih pokreta, onda je protivnički igrač u velikom probemu na obe polovine  terena.  Zašto  brzinska  snaga  i  balistički  metod?  Eksplozivna  snaga  ruku  se  razvija izbacivanjem tega, „robijaškim sklekovima, a kada ubacimo dodavanja medicinkom, onda je „baza“ napravljena i počinje specijalna fizička priprema. Uzmimo da je ovo deo prvog treninga, u drugom ne radimo trostruki benč, već običan, ali brzo i sa opterećenjem do 30% -1RM, broj ponavljanja 6 -8 (uobičajeno je do 10, ali smatram da se tako već prelazi na izdržljivost u snazi, a to sam razvijali do Play ofa), jer želimo da zadržimo brzinu pokreta, a ona opada nakon 8 ponavljanja. Zašto pliometrijski  metod?  Tokom  cele  sezone  težimo  povezivanju  nogu  i  ruku  i  pokušavamo  kroz koordinaciju da unapredimo. Izvođenje burpee je najbolji test, a prelazak u poskoke je potpuno prelaženje  u  funkcionalnu  snagu,  produžavamo  sa  ubrzanjem  (specijalna  fizička  priprema  za perimetralne igrače). Pristalica sam ekscentrično – koncentričnih mišićnih kontrakcija jer se uz njihovu pomoć specijalna fizička priprema lakše sprovodi i određuju procenti opterećenja zavisno od pozicije na kojoj je igrač u ekipi. Ukoliko smo 8 meseci sprovodili propriocepcijski proces kroz korelaciju antropomotoričkih osobina i svojstava, onda je rizik minimalan. Nisam pristalica dubinskih skokova i smatram da generišu povrede. Igrač visine 210 cm i težine 120 kg da skače na box visine 60 cm i više, pa da sa nje skače na parket … Više je štete nego koristi, a moguće je zameniti sa drugim vežbama. Tokom Play ofa trening fizičke pripreme se svodi na opštu i u nekim slučajevima situacionu. Istezanja, oporavak i tonizacija u teretani nakon utakmice, praćenje potrošnje energije su jedini posao za trenera našeg profila. Po svojoj strukturi pauza između ligaškog dela i Play ofa ili Play outa je Produženi mikrociklus. PRODUŽENI MIKROCIKLUS I TRENAŽNI DAN U prošlosti je postojala pauza između polusezona i tada se Produženi mikrociklus zvao Produženi bazični mikrociklus. Svrha mu je bila da osveži ekipu korišćenjem bazičinih sredstava treninga. Išlo se čak i na zimske pripreme. Danas skoro da ne postoji pauza između delova Takmičarskog perioda, ponekad se samo prelivaju jedan u drugi, ali pojavom reprezentativnih kvalifikacionih takmičenja i grupne organizacije liga pojavljuju se pauze koje nazivamo Produženi mikrociklus. Svrha mu je da pripremi ekipu za različite vrste takmičenja ili utakmica. Može biti Bazični, Pripremni mikrociklus za Final four Kupa, Play ofa ili Play outa, ali možemo ga postaviti i u bilo koji Takmičarski mezociklus ukoliko nam je utakmica važna. Kada sve periode složimo u 1 MAKROCIKLUS, dovedemo antropomotoričke osobine i svojstva u korelaciju i odredimo koje, kako i u kom periodu treniramo, onda smo spremni za operativno planiranje. Na početku Pripremnog perioda fizička priprema je najzastupljenija i trenažni dani su najbolji način operacionalizacije. TRENAŽNI DAN PRIPREMNOG PERIODA Uvod  smo  obradili  kroz  propriocepciju  i  zagrevanje  igrača.  Fleksibilnost,  mobilnost  i  obuka aktivnoj mobilnosti se rade od prvog dana. Uvod u trening se završava rastrčavanjima, vežbama low pliometrije,  lateralnim  kretnjama,  laganim  poskocima,  promenama  brzine  i  pravca  kretanja, ubrzanjima… Primer : nizak skip do pola terena, istrčavanje do kraja terena, povratak trčanje unazad  …  beskonačne  su  mogućnosti  kombinovanja  vežbi,  ali  se  tokom  trenažnog  procesa iskristališu najsvrsishodnije i postaju trenažna rutina. Sledi pauza za rehidraciju tokom koje se objašnjavaju ciljevi glavnog dela treninga. Igrači dolaze sa različitim nivoom obuke i dovesti ih na isti nivo je ogroman posao. GLA VNI DEO TRENINGA U prvim mikrociklusima primarna je kondiciona priprema, ali ne zapostavljamo specifičnu fizičku pripremu, a ni specijalnu (situaciona priprema se radi u predtakmičarskom i takmičarskom periodu). Različiti su pristupi fizičkoj pripremi, ali ukoliko ih odmah odvedete na stadion, neće se radovati treninzima. Primer: vežba za stizanje u odbrani sa strane akcije na stranu pomoći Počinjemo sa osnovne linije, čunjevi su poređani asimetrično, kombinacija sprinteva, skipova, kretanja u stavu, odskoka  u stranu … sa sprintom  na početnu poziciju, situaciono kretanje u odbrani, kontranapadu i  povratka  u  odbranu. Da  bi  ova  vežba  bila  100% iskorišćena, rad  na košarkaškom  terenu  mora  i  da  ima  ojačavanje  kinetičkog  lanca  vežbama  snage  u  teretani  i pretvaranje u funkcionalnu (specifičnu) na stadionu. Vežbe snage treba da budu što situacionije, ali pre  njihovog  razvoja,  obavezni  su  zagrevanje  sa  tegovima,  osnovne  vežbe  sa  naglaskom  na kinetički lanac u košarci. TERETANA Rad sa tegovima uvek počinjem sa bučicama, ketlbelovima, pločama i šipkama bez ploča. Vrlo brzo se konstruišu grupe vežbi koje tokom sezone pojedinačno koristimo (nećemo raditi ceo komples u sezoni već samo delove koji nam trebaju u određenom delu treninga). Kompleks sa bučicama trenira celo telo tokom Pripremnog perioda (4x10), ali u sezoni služi za zagrevanje i promenu ritma treninga. Potisci, vučenja, kombinacije vežbi … mnogo su efikasniji od bučica. Ukoliko su početni mikrociklusi u pitanju, prethodno se rade opšte vežbe snage, kao što su benč, polučučanj, vežbe po spravama, ali i vežbe specifične pripreme. Zatim se dodaju težine, zavisno od periodizacije. Iako smo odredili 1RM, nisam pristalica da se prvih dana podižu težine više od 30%. Obuka i grupisanje sredstava je primarni cilj. Princip postupnosti je najbolji, a dobijamo i „povratak mišićnog pamćenja“. Mišić je „zapamtio“ šta je trenirao prošle sezone, ali ga je potrebno „podsetiti“. Korekcija tehnike se vrši da zapamte pokrete, a tokom sezone se ojačavaju mišićne grupe koje su zajedničke za košarku i fizičku pripremu. Na slikama se vide nedostaci u tehnici, ali analitički metod je u ovom trenutku kontraproduktivan. Da bi se tehnika ispravila i parametri podizali potrebno je VREME. STADION Nakon sale i teretane, prelazi se na stadion (u ovom slučaju, teretana je u sklopu sale, a stadion je udaljen nekoliko minuta), gde se ponovo ekipa rastrčava (delimičan oporavak nastupa odmah nakon teretane, rehidratacija) i isteže. Vežbe koje smo radili nakon istezanja u Sali radimo i na stadionu, ali su distance 4x veće. Prvi treninzi su prepuni korekcija koje imaju dvostruku ulogu (umor je izraženiji, naročito zato što je to poslednji deo treninga, a i nivo obuke igrača je različit) prevenciju povreda i predah između vežbi. Ne tražimo savršenu tehniku prilikom izvođenja vežbi, jer bi nam oduzelo previše vremena. Koristimo stadion da popunimo fosfagene, glikolitičke i aerobne izvore energije.  Ukoliko  je  podloga  (trava)  kvalitetna  i  da  bosi  radimo  vežbe  za  jačanje  stopala.  U stopalima postoji oko 100 tetiva, mišića, ligamenata i u kinetičkom lancu košarkaških pokreta smatram ih najvažnijim. Insistira se od početka do kraja sezone jer od njih sve počinje (put impulsa od receptora do CNS, reakcija). Za mene najbitniji deo početka trenažnog procesa,vidi se ko hoće i na koji način da trenira, a najčešće i igrač koji će da dominira u ekipi tokom sezone. Po pravilu su najbrži i najizdržljiviji i sve rade bez nepotrebnih pitanja. Nikada se nije desilo da igrač koji dođe na niskom nivou bude među najboljima do kraja Trening se završava sa rastrčavanjem i istezanjem. Kada je trening osmišljen iz tri celine, onda su i tri strečinga OBA VEZNA (prvi i zadnji su obimniji). Nakon treninga treba uzeti dovoljnu količinu tečnosti  i  ugljenih  hidrata.  Gelovi,  napici  sa  ugljenim  hidratima,  (proteinski  barovi  su  takođe preporučljivi, zbog bržeg anabolizma, ali uglavnom nakon tuširanja se ide na ručak, pa i nije toliko izražena potreba). Odmor između treninga je obavezan. Najveći problem nije u treningu i oporavku već  u  svim  ostalim  obavezama,  od  slikanja,  naručivanja  opreme  do  zajedničkih  ručkova, konferencija ... Večernji trening : Kombinovani trening Najčešće je na kraju taktičko- tehničkog dela treninga, a zavisno od perioda, sadržina je različita. Trening funkcionalne snage se realizacijom trenažnog procesa prebacuje u prepodnevni termin, ali na početku, kada je sem pripreme i obuka bitna, druga polovina večernjeg treninga je sasvim odgovarajuće vreme.Ketlbelovi, teške lopte i vijače su najpogodniji rekviziti za razvoj funkcionalne snage. Uvek i tokom cele sezone su zastupljeni u periodu 15 -30 min pre treninga . Ne prestaje se ni sa obukom jer kako sezona odmiče tako se vežbe usložnjavaju. Taktičko- tehnički zadaci će svojom složenošću uslovljavati fizičko osposobljavanje igrača. Stvaranje navike kod igrača je teško, ali kada donese prvi rezultat, imaćete vremena i neće vam trebati previše posebnih treninga. Od 35 treninga  počinje  nagli  uspon  svih  parametara  do  50  je  automatizovano,  a  do  70  su  promene stabilizovane. Zgusnut kalendar uslovljava, ali osim u prvom mezociklusu, sve je i treba da bude usmereno  na  KOŠARKU.  Na  nama  je  da  veštinom  planiranja  i  programiranja  prevazilazimo nedostatak vremena. Snečovi, svingovi … uobičajene vežbe sa ketlbelovima su dobre, ali ih treba ukomponavati sa vežbama situacionim za košarku (pas,šut, ballhendling..) u kompleks vežbi. Poligon napravljen od vežbi sa ketlbelovima, sprintom, sklekovima,trbušnjacima, leđnjacima i vijačom. ZA VRŠNI DEO : Hlađenje i strečing su kraj jednog trenažnog dana. U ovom primeru nema TT zbog tačnog razumevanja šta znači Trenažni dan. Trenirali smo sve antropomotoričke osobine od fleksibilnosti do izdržljivosti. Tokom sezone Trenažni dan možete posmatrati kao mikrociklus, opšte pripremni. Drugi  Trenažni dan je specifični, a treći situacioni (nakon dana pauze). Opisali smo kako popunjavati izvore energije TT treningom i u periodu od 7 dana (u sezoni se igra utakmica na kraju mikrociklusa) dobijamo mezociklus. Klasičnom, krutom periodizacijom imamo manje mezo i mikrociklusa, a sa istim brojem treninga. Na koji će način periodizacije igrači brže napredovati, za koji treba manje vremena, koji ih ne uvodi u srednji ritam, u kom se manje zamaraju … potpuno je jasno. Zato Trening posmatram kao deo Trenažnog dana, zajedno su deo mikro, mezo i makrociklusa. TRENING Osnovna jedinica organizacije trenažnog procesa je TRENING, sastoji se iz uvodnog, glavnog i završnog dela. Uvodni deo ima zadatak da podigne temperaturu organizma i pripremi organizam na napore iz glavnog dela, ali u njemu se takođe razvijaju antropomotoričke osobine i svojstva. Lagani džogovi, poskoci,  ubrzanja,  prelaze  u  low  pliometriju,  koordinativne  vežbe  se  usložnjavaju,  a  ubrzanja prelaze u razvoj startnog ubrzanja, razvija se brzina reakcije, pokreta, gipkost i okretnost kao preduslov za sve razvoje. Kreatin fosfageni izvori energije, jedino mogu da se planiraju između uvodnog i glavnog dela, a mogu da se treniraju kao sprintevi ili vezani kontranapadi kao vežba taktike i tehnike. Intezitet je na maksimumu. Glavni deo na početku ima zadatak da se taktičko- tehnički zadaci rešavaju na najvišem nivou, jer je tada funcija centralnog nervnog sistema najviša. U slučaju da je trening fizičke pripreme, brzina. Kako trening odmiče, na sredini je eksplozivna snaga, a sve vrste izdržljivosti se rade pri kraju treninga. Postoje periodi, kada se na kraju glavnog dela rade vežbe slične brzinskim, ali tada je u pitanju  razvoj  agilnosti  (po  pravilu  prelazi  u  izdržljivost,  a  okretnost  se  dobija  ako  agilnost povežemo sa koordinacijom). Taktičko-tehničke vežbe se takođe mogu raditi na kraju treninga, ali tek kada su potpuno usvojene, jer se trebaju sprovesti na utakmici u uslovima zamora. Anaerobne vežbe ili popunjavanje glikolitičkih izvora energije su takođe na kraju glavnog dela. Završni deo može da bude i produžetak glavnog dela, ali samo ukoliko je u pitanju aerobna izdržljivost. Zadatak je da se spusti temperatura, ubrza oporavak kroz lagana rastrčavanja, istezanja, labavljenja… Često se potcenjuje jer se ne shvata katabolizam treninga i anabolizam oporavka. Zato se i dešavaju povrede „iz vedra neba“. PLANIRANJE TRENINGA Cikličnost: pripremni mezociklus, opšte pripremni i specifično pripremni mikro ciklusi. Trajanje 1 mesec (uvek pišem treninge za ceo mezociklus sa varijantama A,B i C, jer nikada ne znamo gde će trening da nas usmeri). Metod treninga: kontinuiran, u početku ravnomeran, a kasnije valovito kontinuiran jer ne želim brzu stabilizaciju promena, već što višu adaptivnost treninga. Sredstva treninga:  direktna i  indirektna. Indirektna ili bazično-pripremna  sredstva su u prvom mikrociklusu pretežna, cilj im je da pripreme organizam na specifičan način rada, tj da pripreme bazu za kasniju višu efikasnost specifičnih sredstava treninga. Individualizacija i određivanje grupa Metodi : demonstracija i ponavljanje Svaku vežbu koju trener pokaže, igrač će lakše savladati i kroz ponavljanje naučiti. Ponavljanje podrazumeva kontinuiranost treninga i vremenom dostizanje željenog nivoa obuke i efekata  treninga.  Na  početku  pripremnog  perioda,  grupišete  igrače  po  antropomotoričkim parametrima, ali i po nivou obuke, a kroz nekoliko mikro-ciklusa individualizujete trening za svakog igrača posebno. Ne postoje dva ista igrača, ali postoje igrači koji su veoma slični, tako da je određivanje grupa i kasnija individualizacija najracionalnija. Metod  obuke:  kombinovan,  u  početku  analitički,  a  sa  napretkom  u  savlađivanju  motoričkih zadataka, prelazi se na sintetički uz sve ređu primenu analitičkog metoda. Nije pravilo jer neka sredstva treninga upotrebljavate sintetički, a usavršavate analitički (kompleksne vežbe). Trening 1, vreme 10h, sala i teretana UVOD: zagrevanje Lagano  trčanje  u  krug  uz  ispravljanje  grešaka  u  tehnici  trčanja 5min. ( svi su odavno na terenu, šutiraju, driblaju … prvi pravi trening, oseća se želja za treningom) Razgibavanje  i  istezanje 15min. (koristim i da uradim vežbe korektivne gimnastike, popravljam fleksiju, retko je statičko, trudim se da bude u pokretu i sa što više dinamike, da se pripreme za glavni deo) Brzina 5min. ( nakon nekoliko vežbi, skipova, promena pravca, brzine … u frontalnoj i sagitalnoj ravni, slede nekoliko sprinteva, od 5m i 10m, sa rastrčavanjem do kraja terena, u povratku ubrzanja I spremni su za glavni deo treninga. Brzina se radi uvek i pomalo, najisplativije i najracionalnije. GLA VNI DEO TRENINGA: Taktičko-tehnički 80 min. Upoznavanje sa zahtevima igre, zadacima svakog pojedinca i tima, napad i odbrana,ali sve u niskom intezitetu, jer fizička priprema ima prioritet prvog mikrociklusa. SNAGA Iz sale se prelazi u teretanu. Deo glavnog treninga koji je poseban trening, čak se i obavlja u uslovima delimičnog oporavka, trenažnog. Uvod Vežbe sa jednoručnim tegovima i pločama (cilj je da ih obučim vežbama bitnim za kinetički lanac, a i propriocetno da se obezbedim od povreda), trenira se frontalno sa celom ekipom I uz demonstraciju se vrše korekcije u cilju obuke. Glavni deo Vežbe po stanicama: odredim u zavisnosti koliko igrača ima na treningu i koliko sprava ima u teretani!Nisam pristalica poligonskog tipa treninga u teretani , ali u prvom mikrociklusu, zarad grupisanja parametara i dovođenja na približan nivo, to je zbog štednje vremena najracionalniji način. Završni deo u teretani Obuka u specifičnim vežbama, a koje su bitne za kinetički lanac i situacije u igri. To  su  nabačaji-izbačaji,  iskoraci,  nabačaji-izbačaji-čučnjevi-izbačaji…  Izbegavam  olimpijska dizanja  u  klasičnom  smislu,  sa  povećavanjem  težina,  jer  osim  što  generišu  povrede  (usled nedovoljne obučenosti igrača), nisu se pokazala kao najracionalnija. Dobija se na snazi, ali gubi na gipkosti, okretnosti… Smatram to vežbama za alibi testiranja. Čemu poboljšanje u parametrima, ukoliko  je  igrač  košarkaški  stagnirao  ili  se  nije  potpuno  realizovao,  a  i  veliki  je  rizik  od „neobjašnjivih“ povreda. ZA VRŠNI DEO: Aerobno  trčanje  ili  rastrčavanje,  istezanje,  hlađenje 15min. Već nagomilanih laktata, istezanje u parovima i rastrčavanje, igrači doživljavaju kao nagradu. Za trenera je bitno da se ubrza oporavak i pokrene Krebsov ciklus.Nije rastrčavanje aerobno trčanje, naročito ako je kratko, ali ukoliko ga tako planiramo, a povećanje aerobno- anaerobnog kapaciteta, tražimo kroz pauze, kao indirektnu korist, mnogo ćemo racionalnije iskoristiti vreme koje imamo. Usled toliko pauza, tajmautova, izmena, izgrađivanje STAMINE je ono što će igračima „sačuvati glavu i mirnu ruku“ na kraju utakmice. Najgore što može da se desi je poistovećivanje treninga fizičke pripreme košarkaša i pripreme drugih sportista, atletičara npr. Razmak između treninga, na početku priprema, treba da bude najmanje 6 sati. Prvi dani su teški, organizam se još uvek nije navikao na takvu vrstu opterećenja, oporavak je sporiji. Idealno je ukoliko se svi igrači hrane u istom restoranu, tako više vremena provode zajedno, navikavaju se na navike saigrača, razgovaraju, a sve to doprinosi stvaranju dobre timske atmosfere. Nakon toga sledi obavezan dnevni odmor. Profesionalci su navikli da vode računa o svojoj ishrani, a dostupnost informacija na internetu i savetovanje sa trenerima, lekarima im pomaže da traju duže i igraju na visokom  nivou.  Popodnevna  užina,  pred  drugi  trening,  kao  i  doručak  (osim  na  putovanjima, pripremama) su prepušteni igračima i uglavnom su to laki obroci, proteinske čokolade, banane. Trening 2, vreme 18:30, sala UVOD: Zagrevanje 35 min. Vežbe koordinacije,  ravnoteže, pokazivanje novih sredstava treninga, ubrzanja Ne možete pokazati i naučiti igrače svim vežbama koje želite da koristite tokom sezone. Selektivno odaberem najjednostavnije i vremenom ih usložnjavam, a kada dođu na taj nivo, da su im vežbe lake, onda to postaje trenažna rutina, koju samo osvežavam, jer predugo ponavljanje istih vežbi dovodi do stereotipa, a kasnije i povreda. Bitno mi je da igrači nižeg nivoa obuke što pre pristignu obučenije, da bih racionalno koristio vreme za trening. GLA VNI DEO: Fizička  priprema,  taktika,  tehnika 65 min. Glavni deo se sastoji iz dva dela: taktičko-tehničkog i fizičke pripreme. Velike su razlike između teorije i prakse jer u tom delu, teoretski bi trebalo prvo raditi fizičku pripremu,  pa  tek  na  kraju  taktiku,  koja  je  prvih  dana  jednostavna  i  može  se  koristiti  i  za popunjavanje kreatin-fosfagenih ili glikolitičkih izvora energija, ali uglavnom je obrnuto. Uvode se rekviziti u trening: ketlbelovi, medicinke, trake za trening, vijače… Dobro iskorišćen rekvizit podiže efekat treninga. Vežbe sa rekvizitima pored efekta za koji su namenjene daju i velike posredne benefite. Primer: čučnjevi na Bose loptama, koji pored snage, razvijaju i ravnotežu, a koordinatna zahtevnost vežbe, pojačava i aktivira čak i mišiće stopala. Svaka kretnja polazi iz stopala,  a  ukoliko  ih  maximalno  koristimo,  bićemo  startno  brži,  reaktivno  sposobniji,  a  i eksplozivniji. Ketlbelovi, osim što razvijaju sve vrste snage, a lako se i uklapaju sa poskocima, sprintevima, pomažu i razvoju fleksibilnosti. Medicinke , zavisno od težine, pokrivaju eksplozivno- brzinsku snagu, kao i vijače. Trenažno je najracionalnije koristiti ih zajedno, jer pored nogu, bitna su nam ista svojstva i ruku. Na kraju se radi repetativna snaga, razne kombinacije sklekova, vežbi za stomačne i leđne mišiće, plankovi … ZA VRŠNI DEO: Istezanja, individualna i u parovima, lagano rastrčavanje  … cilj je pokazati vežbe, odrediti parove. Odlazak na večeru je i kraj prvog trenažnog dana, uvodnog mikrociklusa pripremnog mezociklusa. PLAN I PROGRAM – KOMENTAR Ovaj segment savršeno sumira tvoj celovit i pragmatičan pristup planiranju i programiranju treninga. Evo ključnih stavki koje bih izdvojio: `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "107.106.105.104.103.102.10",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex27",
    name: "Relaksirana periodizacija",
    nameEn: "Exercise 27 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Odličan zaključak da klasična podela više nije primenjiva zbog zgusnutih kalendara. Prilagodljivost kroz prelivanje mikrociklusa  jedan u drugi omogućava trenere da bolje reaguju na realne izazove tokom sezone. •Primena valovite i obrnute periodizacije  je odličan izbor. Obe strategije omogućavaju prilagođavanje intenziteta i obima prema trenutnoj spremnosti igrača i rasporedu utakmica. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Relaksirana periodizacija",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex28",
    name: "Principi individualnosti i specifičnosti",
    nameEn: "Exercise 28 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Tvoj akcenat na individualizaciju i specifičnost treninga  je od suštinskog značaja. Praksa pokazuje da svi igrači, iako na istoj poziciji, imaju različite potrebe, te tvoj model omogućava personalizovani pristup svakom od njih. •Naglašavanje situacionog treninga  u skladu s prirodom košarke („sport prevare“) je vrlo ubedljivo i potpuno se slaže s tvojim idejama o propriocepciji kao procesu. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Principi individualnosti i specifičnosti",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex29",
    name: "Kibernetički proces i akcija-reakcija",
    nameEn: "Exercise 29 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Pomen kibernetike i kauzalnosti je suštinski – trening je dinamičan proces u kojem povratne informacije i adaptacija igrača imaju ključnu ulogu. Ovo je važan koncept za buduću primenu u ČetFit aplikaciji, jer će omogućiti praćenje i prilagođavanje treninga u realnom vremenu. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Kibernetički proces i akcija-reakcija",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex30",
    name: "Primena tehnologije i saradnja sa stručnjacima",
    nameEn: "Exercise 30 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Jasno razdvajanje uloga između trenera i stručnjaka iz različitih oblasti nauke (anatomija, fiziologija, biomehanika) osigurava maksimalnu efikasnost. Saradnja je ključ za bezbednost i napredak igrača, ali i za preventivu povreda i optimizaciju treninga. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Primena tehnologije i saradnja sa stručnjacima",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex31",
    name: "Praktični saveti za prevenciju zamora",
    nameEn: "Exercise 31 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Izvanredna preporuka o kombinovanju treninga i oporavka  kroz planirani odmor i prevenciju zamora. Ova komponenta često nedostaje u modernom treningu, što vodi do povreda i pretreniranosti. Edukacija igrača o oporavku nakon sezone je vrlo važan aspekt koji često biva zanemaren. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Praktični saveti za prevenciju zamora",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex32",
    name: "Propriocepcija kao kontinuirani proces",
    nameEn: "Exercise 32 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Tvoja filozofija o propriocepciji kao procesu tokom cele godine je izuzetna. Edukacija o ovom konceptu kao prevenciji povreda i sredstvu za dugoročni napredak igrača je ključni deo tvog sistema. 4o BAZIČNI MEZOCIKLUS – KOMENTAR Ovaj deo knjige je izuzetno detaljan i praktičan. Definiše kako strukturirati pripremni period u košarci uzimajući u obzir sve složenosti savremenih kalendara i potrebe za fleksibilnošću. Evo ključnih stavki: `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Propriocepcija kao kontinuirani proces",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex33",
    name: "Struktura i Adaptacija Periodizacije",
    nameEn: "Exercise 33 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Ublažavanje ciklične podele  i prelazak na produžene mikrocikluse (bazični i specifično pripremni) je u skladu s potrebama modernih timova. Kombinovanje opšte, specifične i situacione fizičke pripreme  jasno naglašava potrebu za personalizacijom rada u skladu s pozicijama i individualnim potrebama igrača. •Relaksirana periodizacija  pokazuje odličnu praktičnu prilagodljivost u odnosu na zgusnute kalendare. Praktičan pristup kroz valovite i kontrolno-pripremne cikluse  omogućuje smanjenje rizika od povreda i bolju kontrolu forme. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Struktura i Adaptacija Periodizacije",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex34",
    name: "Obim, Intenzitet i Ukupno Opterećenje",
    nameEn: "Exercise 34 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•UO = OB + INT je veoma jednostavan i efikasan način praćenja treninga, gde se u obzir uzimaju obim i intenzitet svakog mikrociklusa. Efikasno je što su treninzi planirani tako da balansiraju treninge visokog intenziteta sa oporavkom, bez prevelikih oscilacija. •Kumulativni efekat oporavljajućih treninga  između mikrociklusa je dobro planiran, jer omogućuje održavanje forme i smanjenje rizika od pretreniranosti pre prvih utakmica. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Obim, Intenzitet i Ukupno Opterećenje",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex35",
    name: "Praktične Napomene o Specifičnoj Pripremi",
    nameEn: "Exercise 35 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Naglasak na specifičnim takmičarskim vežbama  u poslednjim fazama pripreme omogućuje precizno praćenje spremnosti igrača. Ove vežbe ne samo da sprečavaju povrede već i pomažu u postizanju optimalne forme. •Superkompenzacija  se koristi kao važan koncept – smanjenje opterećenja neposredno pre utakmica omogućava optimalan učinak. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Praktične Napomene o Specifičnoj Pripremi",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex36",
    name: "Ključni Faktori: Socijalizacija i Uslovi Treninga",
    nameEn: "Exercise 36 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Praksa pokazuje da nedostatak zajedničkih priprema  na visinskim lokacijama može ograničiti socijalizaciju tima, ali se delimično nadoknađuje zajedničkim boravcima na turnirima i putovanjima. •Ispravno je ukazano na to da trening na lošim podlogama ili bez adekvatnih uslova  može izazvati povrede i oslabiti dugoročne performanse igrača. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Ključni Faktori: Socijalizacija i Uslovi Treninga",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex37",
    name: "Rizik i Fleksibilnost u Tempiranju Forme",
    nameEn: "Exercise 37 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Postepeno smanjenje intenziteta je bezbednija strategija  od naglih promena, jer smanjuje rizik da igrač ne uđe u superkompenzaciju. •Zagrevanje kao poslednja prilika za procenu i korekciju forme pre utakmice je odlično naglašeno – ovo je trenutak kada trener može osetiti puls ekipe i doneti ključne odluke za nastup. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Rizik i Fleksibilnost u Tempiranju Forme",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex38",
    name: "Subjektivni Osećaj Igrača",
    nameEn: "Exercise 38 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Akcenat na subjektivnom osećaju  kao važnom pokazatelju stanja forme je važan deo modernog pristupa treningu. Praćenje kvaliteta sna i stanja na zagrevanju može pružiti ključne informacije za prilagođavanje treninga. BAZIČNI MEZOCIKLUS (Avgust) Struktura i organizacija: •Bazični mezociklus uključuje opšte-pripremne i specifično-pripremne mikrocikluse , sa jasnim fokusom na progresivno povećanje obima i intenziteta treninga. •Obim i intenzitet se pažljivo balansiraju (UO = OB + INT) , uz akcenat na kumulativni efekat treninga i minimiziranje rizika od povreda. Ključne napomene: 1.Pauze i oporavak su strateški uključeni u plan (dan nakon treninga visokog intenziteta ili uoči utakmica). 2.Zagrevanje i „hladne faze“ se kombinuju sa oporavkom i tehničkim delom treninga, čime se obezbeđuje kontinuitet pripreme. 3.Tranzicija na specifične vežbe  počinje već u ovom mezociklusu, s fokusom na individualizaciju treninga i prilagođavanje potrebama igrača. Primer trening dana: •04.08.: TT (taktičko-tehnički) ujutro, FP (fizička priprema) popodne. •09.08.: Stadion ujutro, TT uveče – naglasak na pripremi eksplozivnosti i brzine. •12.08.: FP sala i TT popodne – uvođenje specifičnih treninga sa košarkaškom loptom. SPECIFIČNI MEZOCIKLUS (Pripremne utakmice i faza šlifa) •Period od 29.08. do 19.09.  uključuje seriju pripremnih utakmica, sa pauzama za analizu i korekciju treninga. Cilj je unaprediti sinhronizaciju taktike i fizičke pripreme. •Šuterski treninzi i situacioni treninzi  postaju ključni u ovoj fazi. Fokus se prebacuje na tehničke zadatke i simulaciju stvarnih utakmica. ZNAČAJ SPECIFIČNOG PRISTUPA I DIJAGNOSTIKE •Uloga zagrevanja kao završne prilike za kontrolu forme je odlično objašnjena. Pristup koji insistira na timskoj disciplini kroz zajedničko zagrevanje i postepeno povećanje intenziteta pomaže u prevenciji povreda i podizanju koncentracije. •Autoskauting i praćenje kretanja igrača (od tačke A do tačke B) omogućuju dublji uvid u to kako igrači izvršavaju tehničke zadatke tokom utakmice. UPRAVLJANJE FORMON I ODRŽAVANJE BALANSA •Korišćenje kumulativnog efekta obrnute periodizacije  pomaže u optimizaciji forme i smanjenju zamora. •Planiranje i programiranje pauza  u ključnim trenucima (npr. dani između turnira) omogućuje održavanje visokog nivoa energije do početka takmičarske sezone. TAKMIČARSKI PERIOD – STRATEGIJA I PRIMENA Savremeni kalendar takmičenja, ispunjen intenzivnim rasporedom, donosi izazov planiranja i upravljanja fizičkom i tehničkom pripremom. Ovaj deo jasno ističe ključne principe i pristup uspešnom vođenju ekipe kroz takmičarski period. GLA VNE TAČKE: 1.Relaksirana periodizacija i kontinuirana adaptacija: •Kalendar često ne dopušta klasičan mezociklus, pa je nužna fleksibilna prilagodljivost u treninzima i opterećenju. •Svaka pauza, poput kvalifikacionih takmičenja ili Kup utakmica, označava kraj trenutnog mezociklusa i početak novog, bez obzira na zatečeni nivo pripremljenosti. 2.Ocenjivanje utakmica za optimizaciju opterećenja: •Utakmice se ocenjuju prema snazi protivnika, zdravstvenom statusu i drugim faktorima. •Formula: Intenzitet treninga je 80% u pripremi za meč koji je unapred ocenjen kao težak (utakmica = dodatnih 20% opterećenja). •Praktičan primer:  Pre utakmice visokog rizika (npr. gostovanje jačem timu), treninzi su manjeg obima i intenziteta kako bi se izbegao pretreniranost i sačuvao mentalni fokus. PRIMENA U PLANIRANJU TRENINGA: •Sistem 2-1 ili 3 kombinovana treninga  (TT+FP) omogućava održavanje forme tokom mikrociklusa. Na početku sezone je moguć veći broj treninga, ali kasnije se obim smanjuje. •Kumulativni efekat  se ostvaruje prilagođavanjem obima i intenziteta kroz ritmičku smenu, uz vođenje računa o anksioznosti igrača nakon intenzivnih perioda (npr. Kup utakmice). V ALOVITA PERIODIZACIJA U PRAKSI: •Utakmice i treninzi se postavljaju u valovitim ciklusima  kako bi se izbegla „siva zona“ srednjeg intenziteta. •Brzina i spor tempo  su osnovni principi jer srednji ritam postaje predvidiv i omogućava protivnicima lakšu adaptaciju. •Intervalne promene (npr. smanjenje treninga pred utakmicu) osiguravaju svežinu tima i maksimalan fokus u ključnim momentima. OPORA V AK I UPRA VLJANJE ZAMOROM: •Planiran oporavak  kroz pauze i putovanja je neophodan. Treninzi nakon dugih putovanja povećavaju rizik povreda i smanjuju koncentraciju na utakmicama. •Zamor i pretreniranost: •Ako igrači pokazuju znakove opšteg zamora (npr. pad u preciznosti slobodnih bacanja), trener mora brzo reagovati smanjenjem intenziteta treninga. •Prepoznavanje simptoma pretreniranosti:  Usporavanje igre, izbegavanje kontakta, kašnjenja u tajmingu – svi ovi signali zahtevaju prilagođavanje programa. TAKTIČKO-TEHNIČKI TRENING I AUTOSKAUTING: •Zagrevanje pre utakmice je ključna prilika za finu korekciju i poslednju proveru forme. •Fokus je na disciplinovanom timskom zagrevanju , koje razvija svest o saigračima i doprinosi timskoj koheziji. •Autoskauting: Praćenje kretanja igrača od tačke A do B omogućava analizu efikasnosti taktike i tehničkih elemenata (npr. tajming, pozicioniranje, prolaz kroz blokove). PAUZE KAO PRILIKA ZA NAPREDAK: •Pauze od 2-3 nedelje  tokom sezone su odlična prilika za fizički napredak i „osveženje“ tima. •Ove faze koriste se za dodatne treninge niskog intenziteta, rad na mobilnosti i korekciju tehničkih elemenata. ZAKLJUČAK: PAMETNO PLANIRANJE UMESTO ISCRPLJIV ANJA Efikasno vođenje tima tokom takmičarskog perioda zavisi od balansiranja između opterećenja i oporavka. Pravilno ocenjivanje utakmica, prilagođavanje intenziteta, i smena faza anabolizma i katabolizma osiguravaju stabilnost forme tokom cele sezone. •Pametno planiranje  omogućava kontrolu zamora i povećava šanse za uspeh. •Svaki deo stručnog štaba mora delovati sinhronizovano kako bi se izbegle greške i ostvario maksimalan učinak. Ovaj model je pokazao kako se uz pravu organizaciju treninga može izbeći pretreniranost i postići optimalan ritam bez narušavanja forme i mentalnog zdravlja igrača. KUP TAKMIČENJE Kup je jedinstven segment sezone, gde se često dešavaju iznenađenja jer emocije dostižu vrhunac, a pritisak je na favorizovanim ekipama. Ovaj format zahteva specifičan pristup pripremi jer učestale utakmice i nepredvidivost rezultata predstavljaju fizički i psihološki izazov. GLA VNE KARAKTERISTIKE KUP TAKMIČENJA: 1.Visoka emocionalna uključenost: •Igranje Kupa motiviše slabije ekipe, dok favoriti moraju održati maksimalan fokus. 2.Ritam utakmica i pauze: •Kup obično počinje kvalifikacijama, zatim prelazi na eliminacione faze, a kulminira Final Four-om. •U Africi (Kup Šampiona) autor se suočio s ekstremnim primerom – 9 utakmica u 11 dana. PRIPREMA ZA KUP: •Niži intenzitet pred ključnu utakmicu: •Ako je kvalifikaciona utakmica najvažnija, trening intenzitet pada, čak i ako protivnik nije favorit. Cilj je maksimalna svežina. •Pauze su ključne – prekidamo trening na prvi znak umora kako bismo održali formu. •Utakmica kao motivacija: Pobeda u kvalifikacijama ili ranoj fazi Kupa podiže motivaciju i osigurava psihološku stabilnost za nastavak takmičenja. PLAN PRIPREME ZA FINAL FOUR KUPA: Ako imate dve ili tri nedelje za pripremu, svaki dan mora biti precizno isplaniran. Evo primera plana pripreme: 14-8 dana pre Final Four-a: •Fokus na kombinaciju fizičke pripreme (FP)  i taktičko-tehničkog treninga (TT). •Pauze su ključne za očuvanje svežine i sprečavanje zamora. 7-1 dan pre Final Four-a: •Šuterski treninzi se kombinuju sa smanjenim fizičkim opterećenjima. •Poslednja tri dana su posvećena oporavku, sa naglaskom na fokusiranje i mentalnu pripremu. PRAKTIČAN PLAN (14-1 DAN DO FINALA): Dan Aktivnost 14-8FP + TT, pauze za održavanje svežine `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Subjektivni Osećaj Igrača",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex39",
    name: "danŠut, lagani treninzi sa niskim intenzitetom",
    nameEn: "Exercise 39 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `6-3. danKombinacija FP + šut, oporavak 2-1. danOporavak, fokus na mentalnu stabilnost FinaleOptimalna spremnost i svežina za meč IZAZOVI PRIPREME ZA PLAY-OFF I PLAY-OUT: •Gust raspored: •Igra se 2-4 utakmice po mikrociklusu, što zahteva precizno doziranje opterećenja i optimizaciju oporavka. •Ključ oporavka: •Tim koji se bolje i brže oporavlja ima prednost. Planiranje i praćenje zamora igrača postaje presudno. •Specijalna fizička priprema: •Fokus je na brzinskoj snazi i eksplozivnosti – pliometrija, vijača, frekvencija pokreta. •Balistički metod se koristi za razvoj brzinske snage (npr. izbacivanje tegova i vežbe sa medicinkama). •Prilagođavanje treninga pozicijama: •Ekcentrično-koncentrične kontrakcije su korisne za specijalizovane vežbe, zavisno od pozicije igrača. •Iako skokovi sa box-a nisu preporučeni zbog rizika od povrede, druge pliometrijske vežbe su ključne za koordinaciju i eksplozivnost. ZAKLJUČAK: Kup takmičenja zahtevaju specifičan pristup jer učestali mečevi, visok pritisak i zgusnut raspored stvaraju složene izazove. Uspešna priprema za Kup, Play-off ili Play-out oslanja se na: 1.Precizno doziranje opterećenja  kako bi se igrači održali svežim. 2.Oporavak i motivacija  kao ključni faktori uspeha. 3.Fokus na eksplozivnost i brzinsku snagu  uz izbegavanje pretreniranosti. Planiranje i sprovođenje ovih principa povećava šanse za osvajanje trofeja i uspeh u ključnim delovima sezone. PRODUŽENI MIKROCIKLUS I TRENAŽNI DAN Produženi mikrociklus je važan segment trenažnog procesa, omogućujući regeneraciju i prilagođavanje igrača na specifične izazove. Njegova svrha je promenjena u modernom sportu – dok je nekada služio za bazičnu pripremu između polusezona, danas se koristi za održavanje forme i prilagođavanje ritmu takmičenja. Produženi mikrociklus: Definicija i namena •Osveženje tima: Obnavlja energiju i stabilizuje fizičku spremnost. •Prilagođavanje različitim vrstama takmičenja:  Koristi se pred Final Four Kupa, Play-off, Play-out ili ključne utakmice u sezoni. •Moderan pristup:  Pauze između ligaških ciklusa koriste se za mikropripreme koje poboljšavaju specifične aspekte igre. TRENAŽNI DAN PRIPREMNOG PERIODA Trenažni dan se sastoji iz uvodnog, glavnog, i završnog dela. Svaki deo ima specifične ciljeve i doprinosi pripremi igrača kroz razvoj svih antropomotoričkih osobina. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "danŠut, lagani treninzi sa niskim intenzitetom",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex40",
    name: "Uvodni deo treninga",
    nameEn: "Exercise 40 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Fokus: Fleksibilnost, mobilnost, propriocepcija, i priprema tela za glavne napore. •Primeri vežbi: •Nizak skip do polovine terena, trčanje unazad, ubrzanja i promene pravca kretanja. •Low pliometrija i lateralne kretnje. •Cilj: Podizanje temperature mišića i mentalna priprema za intenzivniji deo treninga. •Rehidracija: Pauze za objašnjenje ciljeva i unos tečnosti. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Uvodni deo treninga",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex41",
    name: "Glavni deo treninga",
    nameEn: "Exercise 41 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Prvi deo: Fokus na kondicionu pripremu i razvoj brzine i snage. •Primer vežbe: Kretanje iz odbrane na stranu pomoći, kombinacija sprinteva, skipova i lateralnih pokreta. •Vežbe snage: •U teretani se koriste bučice, ketlbelovi i šipke bez ploča za obuku. •Težine se postepeno povećavaju do 30% RM, dok se tehnika koriguje za mišićno pamćenje. •Kroz sezonu se razvija kinetički lanac za optimalnu fizičku spremu. •Funkcionalni trening: •Poligoni sa sprintovima, vežbama snage i ballhandlingom povezuju kondiciju sa situacionim potrebama. •Rad na stadionu: •Fokus na popunjavanje fosfagenih, glikolitičkih i aerobnih energetskih izvora. •Trening bosim nogama na travi za jačanje stopala i prevenciju povreda. •Stopala su ključni deo kinetičkog lanca jer upravljaju reakcijama CNS-a. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Glavni deo treninga",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex42",
    name: "Završni deo treninga",
    nameEn: "Exercise 42 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Zadatak: Hlađenje tela, istezanje i ubrzavanje oporavka. •Tri faze istezanja: •Prvi deo: Detaljno istezanje nakon uvodnog dela. •Drugi deo: Srednje istezanje nakon glavnog dela. •Treći deo: Labavljenje i istezanje na kraju treninga. •Preporuke za oporavak: •Unos tečnosti i ugljenih hidrata (gelovi, napici, proteinske pločice). •Kratki odmor između treninga, ali uz poštovanje svih timskih obaveza (sastanci, konferencije). Večernji kombinovani trening •Sadržaj: Taktičko-tehnički zadaci kombinovani sa funkcionalnim treninzima. •Rekviziti: Ketlbelovi, teške lopte i vijače su idealni za razvoj snage i koordinacije. •Razvoj navika: Sa svakim treningom, povećava se automatizacija i stabilizacija vežbi. Osnovna jedinica – TRENING Trening je ključna jedinica trenažnog procesa i sastoji se od uvodnog, glavnog i završnog dela. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Završni deo treninga",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex43",
    name: "Uvodni deo treninga",
    nameEn: "Exercise 43 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Podizanje temperature i priprema tela za napore. •Razvijaju se brzina, agilnost i gipkost. •Planira se korišćenje fosfagenih izvora kroz sprinteve i vežbe kontranapada. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Uvodni deo treninga",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex44",
    name: "Glavni deo treninga",
    nameEn: "Exercise 44 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•CNS je najaktivniji na početku, pa se tehnički zadaci rešavaju u visokom intenzitetu. •Razvijaju se eksplozivna snaga i izdržljivost. •Taktičko-tehničke vežbe se izvode na kraju kako bi igrači simulirali zamor iz utakmica. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Glavni deo treninga",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part2_ex45",
    name: "Završni deo treninga",
    nameEn: "Exercise 45 - Part 2",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Lagano trčanje i istezanje smanjuju temperaturu tela i ubrzavaju anabolizam. •Katabolizam iz treninga se preokreće u anabolizam kroz kvalitetan oporavak. Zaključak Produženi mikrociklus i dobro strukturisan trenažni dan ključni su za očuvanje forme i pripremu igrača za izazove tokom sezone. Prilagođavanje treninga specifičnim potrebama svakog perioda i igrača omogućava kontinuiran napredak. Fleksibilan pristup periodizaciji i pažljivo planiranje oporavka sprečavaju pretreniranost i smanjuju rizik od povreda. Ključ za uspeh leži u balansu između fizičke pripreme, taktike i regeneracije, uz poštovanje dinamike modernih takmičenja. PLANIRANJE TRENINGA Planiranje treninga u pripremnom periodu se zasniva na kombinaciji cikličnog pristupa, kontinuiteta treninga, i prilagođavanja pojedinačnim potrebama igrača. Kroz precizno definisane mikro i mezocikluse, fokus se postavlja na postepenu adaptaciju organizma, razvoj fizičkih i tehničkih kapaciteta, i sprečavanje stagnacije ili povreda. Cikličnost u pripremnom periodu •Pripremni mezociklus  traje 1 mesec. •Sadrži opšte pripremne i specifične pripremne mikrocikluse . •Varijante treninga (A, B i C):  Pomažu u prilagođavanju planova u zavisnosti od razvoja treninga i situacionih faktora. Metod treninga •Kontinuirani metod : •Na početku ravnomeran, a kasnije prelazi u valoviti oblik da bi se postigla viša adaptivnost organizma. •Cilj nije brza stabilizacija već postizanje optimalne adaptacije. •Sredstva treninga: •Indirektna sredstva:  Bazično-pripremna, koriste se na početku za postavljanje temelja. •Direktna sredstva:  Specifična i situaciona, uvode se postepeno tokom ciklusa. Individualizacija i rad u grupama •Grupisanje igrača  prema: •Antropomotoričkim parametrima. •Nivou obuke. •Nakon nekoliko mikro-ciklusa, trening se individualizuje za svakog igrača. •Metodi: •Demonstracija i ponavljanje : Igrači lakše savladavaju vežbe koje im trener demonstrira. •Analitički metod: Koristi se na početku. •Sintetički metod: Primena se pojačava kako napreduje obuka. PRIMERI TRENINGA Trening 1 (10:00 h, sala i teretana) UVOD •Zagrevanje: •Lagano trčanje u krug uz ispravljanje grešaka u tehnici trčanja (5 min). •Razgibavanje i dinamičko istezanje uz korektivne vežbe (15 min). •Brzina: •Skipovi, promene pravca i nekoliko sprinteva na 5 m i 10 m (5 min). GLA VNI DEO •Taktičko-tehnički deo (80 min): •Upoznavanje sa ulogama i zadacima u igri. •Fokus na napad i odbranu, ali u niskom intenzitetu. •Trening snage: •Uvod: Vežbe sa jednoručnim tegovima i pločama za razvoj kinetičkog lanca i propriocepcije. •Glavni deo: Vežbe po stanicama u teretani (racionalan pristup za dovođenje igrača na sličan nivo). •Završni deo: Specifične vežbe (nabačaji, iskoraci, čučnjevi) bez olimpijskih dizanja zbog rizika od povreda. ZA VRŠNI DEO •Aerobno trčanje, istezanje i hlađenje (15 min): •Istezanje u parovima za brži oporavak. •Rastrčavanje kao nagrada za igrače i podsticaj Krebsovog ciklusa za anabolizam. Razmak između treninga: •Minimum 6 sati između treninga, jer se telo još prilagođava opterećenju. •Ishrana: Idealno je da tim jede zajedno radi izgradnje timske hemije. Trening 2 (18:30 h, sala) UVOD •Zagrevanje (35 min): •Vežbe koordinacije, ravnoteže i ubrzanja. •Demonstracija novih sredstava i vežbi za postepeno osposobljavanje igrača. •Selektivno uvođenje jednostavnijih vežbi, koje se kasnije usložnjavaju i postaju trenažna rutina. GLA VNI DEO •Fizička priprema i taktičko-tehnički deo (65 min): •Fizička priprema: •Vežbe snage uz rekvizite (ketlbelovi, medicinke, trake za trening). •Primer: Čučnjevi na Bose loptama za razvoj snage, ravnoteže i koordinacije. •Taktičko-tehnički deo: •Fokus na pravilno izvođenje tehničkih zadataka i vežbe za kreativnost. •Rekviziti se koriste za razvoj i ruku i nogu, uz repetitivne vežbe snage (sklekovi, plankovi, trbušnjaci). ZA VRŠNI DEO •Istezanje i rastrčavanje: •Individualno i u parovima. •Određivanje parova za rad i kraj trenažnog dana uz zajednički odlazak na večeru. Zaključak: Planiranje treninga Planiranje  treninga  uključuje  kombinaciju  fizičke  pripreme,  tehničkog  rada  i  prilagođavanja individualnim  potrebama  igrača.  Korišćenjem  valovitog  kontinuiranog  metoda,  omogućava  se optimalna adaptacija i izbegava stagnacija. Grupisanje igrača prema sličnim parametrima ubrzava napredak, a rekviziti dodatno unapređuju trening i pružaju posredne benefite. Fokus je na razvoju stamine, ravnoteže i snage, što doprinosi stabilnoj igri i svežini tokom utakmica. `,
    descriptionEn: `Basketball training exercise from FPK book Part 2`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Završni deo treninga",
    coachGoran: true,
    bookPart: 2
  },
  {
    id: "fpk_part3_ex1",
    name: "Point Guard (Playmaker)",
    nameEn: "Exercise 1 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Uvodni deo (10-15 min) •Dinamičko zagrevanje : Visoka kolena, bočni skip, zamasi nogama – 2x30m •Specifična mobilnost : Mobilnost zgloba kuka i skočnog zgloba – 2x15 sekundi po položaju •Glavni deo (30-45 min) •Vežbe brzine i eksplozivnosti : •Sprintovi 5-10-20 m – 6 serija (progresivno ubrzanje, pauza 90 sekundi) •Reakcija na zvučni signal: 4x10m (fokus na eksplozivnom prvom koraku) •Pliometrijski skokovi (Box Jumps) – 4x8 skokova (odmor 60 sekundi) •Vežbe za lateralnu agilnost : •„Lateralna merdevina“ (In-In-Out-Out drill) – 3 serije po 20 sekundi (pauza 45 sekundi) •Lateralni sprint sa promenom pravca – 4x15m (pauza 60 sekundi) •Završni deo (5-10 min) •Istezanje kvadricepsa, zadnje lože, skočnih zglobova – 2x20 sekundi po strani `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Point Guard (Playmaker)",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex2",
    name: "Guard (Shooting Guard)",
    nameEn: "Exercise 2 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Uvodni deo (10-15 min) •Pliometrijsko zagrevanje : Lagani skokovi i lateralni pokreti – 2x20m •Vežbe za mobilnost : Rotacija trupa i mobilnost ramena – 2x15 sekundi po strani •Glavni deo (30-45 min) •Vežbe eksplozivne snage : •Skok-čučanj sa medicinkom (6 kg) – 4x10 ponavljanja (odmor 60 sekundi) •Unilateralni skokovi (skokovi sa jedne na drugu nogu) – 4 serije x 8 ponavljanja (odmor 60 sekundi) •Vežbe za startno ubrzanje i brzinu : •Sprint na 20m sa niskog starta – 5 serija (odmor 90 sekundi) •Reaktivni sprintovi na vizuelni signal – 6 serija x 15m (pauza 60 sekundi) •Završni deo (5-10 min) •Istezanje grudnih mišića, zadnje lože, i rotacija skočnog zgloba – 2x20 sekundi po strani `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Guard (Shooting Guard)",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex3",
    name: "Small Forward",
    nameEn: "Exercise 3 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Uvodni deo (10-15 min) •Dinamička mobilnost : Kružni pokreti kukovima i ramenima – 2x20 sekundi po položaju •Lagani skokovi u mestu  – 2 serije po 30 sekundi •Glavni deo (30-45 min) •Vežbe eksplozivnosti i snage u skoku : •Box jumps sa dodatnim opterećenjem (5 kg) – 4 serije x 6 skokova (pauza 60 sekundi) •Skokovi sa obe noge u dalj (Broad Jump) – 4 serije x 8 skokova (pauza 60 sekundi) •Vežbe lateralne agilnosti : •Lateral shuffle (bočni pokreti) – 5 serija x 10m (pauza 45 sekundi) •Sprint sa promenom pravca – 4 serije x 20m (pauza 60 sekundi) •Završni deo (5-10 min) •Statičko istezanje zadnje lože i fleksora kuka – 2x20 sekundi po strani `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Small Forward",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex4",
    name: "Power Forward (Krilni Centar)",
    nameEn: "Exercise 4 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Uvodni deo (10-15 min) •Visoka kolena i skip  – 2x30m •Zagrevanje skočnih zglobova : kružna mobilnost zgloba – 2x15 sekundi po strani •Glavni deo (30-45 min) •Vežbe za eksplozivnost i snagu : •Mrtvo dizanje sa opterećenjem (80% 1RM) – 4x6 ponavljanja (pauza 90 sekundi) •Skok iz čučnja sa opterećenjem (10 kg) – 3x8 ponavljanja (pauza 60 sekundi) •Vežbe agilnosti: •Shuttle run (4x10m) – 4 serije (pauza 60 sekundi) •Bočni pokreti sa medicinkom (5 kg) – 3x10m (pauza 60 sekundi) •Završni deo (5-10 min) •Statičko istezanje kvadricepsa, zadnje lože i grudnih mišića – 2x20 sekundi po strani `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Power Forward (Krilni Centar)",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex5",
    name: "Center",
    nameEn: "Exercise 5 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Uvodni deo (10-15 min) •Zagrevanje velikih zglobova : kružni pokreti ramena i kukova – 2x20 sekundi po položaju •Lagani lateralni pokreti : bočno kretanje – 2x20 sekundi •Glavni deo (30-45 min) •Vežbe snage i eksplozivnosti : •Trap bar deadlift (75% 1RM) – 4x6 ponavljanja (pauza 90 sekundi) •Skok-čučanj sa opterećenjem (8 kg) – 3x8 ponavljanja (pauza 60 sekundi) •Vežbe za stabilnost : •Balans na jednoj nozi sa medicinkom (5 kg) – 4x15 sekundi po strani •Bočni skokovi (unilateralni skokovi) – 4 serije x 10 ponavljanja (pauza 60 sekundi) •Završni deo (5-10 min) •Statičko istezanje fleksora kuka, zadnje lože i rotacija skočnog zgloba – 2x20 sekundi po strani Takmičarski Period (8-12 Nedelja) Cilj: Održavanje vrhunske forme kroz specifične vežbe i manji volumen, fokus na brzini i reaktivnosti. Intenzitet je visok, ali sa smanjenim brojem serija i ponavljanja. •Point Guard: Fokus na brzim reakcijama, kratki intervali sprinta (npr. 4x10m) sa minimalnim opterećenjem. •Guard: Sprintovi sa vizuelnim signalom, eksplozivni skokovi u serijama 3x6 sa kratkim pauzama. •Small Forward: Skokovi na kutiju sa minimalnim dodatnim opterećenjem, lateralni pokreti 3x10m. •Power Forward: Rad na snazi kroz kratke serije mrtvog dizanja sa većim opterećenjem. •Center: Težinski trap bar deadlift i balansne vežbe sa minimalnim skokovima. Ovaj period usmeren je na optimizaciju performansi, uz održavanje eksplozivnosti i brzine. You said: Imaš po 2 igrača na poziciji, da li treba isto da treniraju ili parametri ukazuju na razlike. U knjizi imaš naglašene razlike po pozicijama. ChatGPT said: Na osnovu vaših podataka i preporuka iz dokumenta, kao i informacija iz knjige, sada mogu detaljnije predstaviti razlike između igrača po pozicijama  i prilagoditi treninge svakog igrača u skladu s njihovim individualnim parametrima. Svaki par igrača unutar iste pozicije ima različite snage i slabosti, što zahteva specifične prilagođene vežbe. Analiza Razlika po Pozicijama i Predlog Treninga Point Guard 1.Igrač 1 •Reakcija: Optoakustična reakcija 1.132 s (brža reakcija od drugog igrača). •Eksplozivnost u skoku:  Viši skokovi (peak jump height 38.6 cm) i bolja eksplozivna snaga (14.76 W/kg). •Preporuka za trening:  Fokus na brzini reakcije kroz reaktivne sprintove, kratke intervale sa promenom pravca i dodatno ubrzanje za veću brzinu kretanja. 2.Igrač 2 •Reakcija: Reakcija nešto sporija (1.201 s). •Eksplozivnost: Slično eksplozivnom kapacitetu kao prvi igrač, ali sa nižim odrazom (peak jump height 34.6 cm). •Preporuka za trening:  Više rada na visini skoka i eksplozivnosti kroz skokove sa dodatnim opterećenjem, kao i rad na brzim promenama pravca. Guard 1.Igrač 1 •Reakcija i eksplozivna snaga:  Brza reakcija (1.266 s) i visok odraz (39.4 cm), s većom snagom u skoku (16.68 W/kg). •Preporuka za trening:  Fokus na ubrzanju i lateralnim pokretima za agilnost; pliometrija za dodatnu eksplozivnost u odrazu. 2.Igrač 2 •Reakcija i eksplozivna snaga:  Slično prvom igraču u brzini reakcije, ali s boljim odrazom (43.3 cm). •Preporuka za trening:  Održavanje eksplozivne snage uz rad na stabilnosti u skoku; intervali visokog intenziteta sa fokusom na ubrzanje. Small Forward 1.Igrač 1 •Reakcija: Sporija reakcija (1.364 s) u poređenju sa drugim igračem. •Eksplozivnost: Dobar kapacitet u skoku (38.6 cm), ali slabiji od drugog igrača u unilateralnoj eksplozivnosti. •Preporuka za trening:  Vežbe unilateralne eksplozivnosti i balansiranja kako bi se smanjio disbalans između nogu. 2.Igrač 2 •Reakcija: Brža reakcija (1.244 s) uz nešto niži odraz (32.6 cm). •Preporuka za trening:  Fokus na pliometriji i razvoju eksplozivnosti sa obe noge; rad na lateralnoj agilnosti. Power Forward 1.Igrač 1 •Eksplozivna snaga:  Veća snaga (15.94 W/kg) i bolji unilateralni kapacitet. •Preporuka za trening:  Vežbe za snagu donjeg dela tela sa opterećenjem; pliometrija za poboljšanje visine skoka. 2.Igrač 2 •Eksplozivna snaga:  Niža (12.01 W/kg) i niži kapacitet skoka (27 cm). •Preporuka za trening:  Fokus na bazičnom razvoju snage kroz osnovne vežbe snage (npr. mrtvo dizanje) i vežbe za eksplozivnost. Center 1.Igrač 1 •Eksplozivna snaga:  Sposobnost skoka i unilateralna eksplozivnost su umereniji (peak jump height 30.9 cm). •Preporuka za trening:  Vežbe stabilnosti i snage; fokus na razvijanju eksplozivnosti u skoku iz statike. 2.Igrač 2 •Eksplozivnost: Niži kapacitet snage i visine skoka (peak jump height 28.8 cm). •Preporuka za trening:  Vežbe za osnovnu snagu sa fokusom na eksplozivnost u vertikalnom skoku; rad sa opterećenjem u stabilizaciji. Struktura Pripremnog i Takmičarskog Perioda po Pozicijama Pripremni Period (6-8 Nedelja) •Point Guard i Guard: •Fokus na brzini reakcije, eksplozivnosti i lateralnoj agilnosti kroz reaktivne sprintove, pliometriju, i intervalne treninge visokog intenziteta. •Doziranje: 3x nedeljno pliometrija i agilnost, 2x snaga sa naglaskom na donji deo tela. •Small Forward i Power Forward: •Rad na bilateralnoj i unilateralnoj eksplozivnosti, sa dodatkom vežbi za balans i stabilnost. •Doziranje: 2x nedeljno vežbe snage sa dodatnim opterećenjem; 2x eksplozivna pliometrija. •Center: •Fokus na stabilnosti donjeg dela tela i osnovnoj snazi. Naglasak na sporijim eksplozivnim pokretima sa opterećenjem. •Doziranje: 2x nedeljno opterećeni čučnjevi i trap bar deadlift; 1x lateralne stabilizacione vežbe. Takmičarski Period (8-12 Nedelja) •Point Guard i Guard: •Fokus na održavanju maksimalne brzine reakcije i eksplozivne snage. Vežbe kratkog trajanja sa visokim intenzitetom. •Doziranje: 2x nedeljno reaktivni sprintovi sa signalima, 1x eksplozivni skokovi u maksimalnom intenzitetu. •Small Forward i Power Forward: •Održavanje snage uz smanjenje volumena. Fokus na specifične motoričke sposobnosti koje podržavaju igre u kontaktu. •Doziranje: 1x nedeljno rad sa opterećenjem (održavanje snage), 1x pliometrijski treninzi za brzinu. •Center: •Rad na stabilnosti i eksplozivnoj snazi sa minimalnim opterećenjem za održavanje kapaciteta. •Doziranje: 1x nedeljno opterećeni trap bar deadlift, 1x balansne vežbe sa malim otporom. Ovaj detaljni plan omogućava svakom igraču optimalan trening prema specifičnostima njegove pozicije i individualnim parametrima. Kada pogledamo kalendar utakmica u olimpijskom ciklusu i ako uzmemo da je sve osobine i svojstva idealno razvijene do seniorskog uzrasta, Četov plan je izvanredan, ali pošto se igra košarka tražio sam da poveže dva osnovna segmenta na osnovu svih testova. Izgleda slično kao treninzi u PRETHODNIM poglavljima, ali nisu čak ni slični. To je zamka u koju treneri često upadaju. Ovo su sve različita viđenja istog trenažnog zadatka. ČET U redu! Prilagodiću trenažni plan sa kompletnom integracijom košarkaških treninga . Plan će biti postavljen tako da pokrije svaki aspekt fizičke i tehničke pripreme  sa ciljem optimizacije performansi. Svaka nedelja će uključivati fizički trening za brzinu, snagu, izdržljivost  i košarkaške veštine  (dribling, šut, tranzicija, odbrana), dok će se struktura menjati prema specifičnostima svakog ciklusa (bazični i predtakmičarski). Kompletan Trenažni Plan sa Košarkaškim Treningom `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Center",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex6",
    name: "Point Guards:",
    nameEn: "Exercise 6 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `Bazični mezociklus (Nedelje 1–4) Nedelja 1–2: Uvod u osnovne veštine i snagu Ponedeljak: •Uvodni deo (20 min) •Dinamičko zagrevanje : 5 minuta lagano trčanje, visok skip, bočno kretanje. •Brzina: 6x20 m sprint sa 80% intenziteta. •Glavni deo (50 min) •Snaga: •Čučnjevi s opterećenjem 3x8 (65% 1RM). •Mrtvo dizanje 3x6 (70% 1RM). •Košarkaški deo: •Dribling pod pritiskom : 3x5 minuta sa fokusom na promene pravca (manji prostor, čunjevi). •Šut sa raznih pozicija : 10 šuteva iz vođenja sa različitih strana. •Završni deo (15 min) •Lagano trčanje za hlađenje + statičko istezanje. Sreda: •Uvodni deo: •Brzi prolazi kroz merdevine za agilnost (2x prolazak linearno i bočno). •Glavni deo: •Anaerobna izdržljivost : 4x400 m na 70% HRmax. •Košarkaški deo: •Rad na tranziciji (2 na 1 i 3 na 2): brzo donošenje odluka u tranziciji iz odbrane u napad. •Trening dodavanja : dodavanje u pokretu i iz pozicija pod pritiskom. •Završni deo: Statičko istezanje sa fokusom na kukove i zglobove. Petak: •Uvodni deo: Lagano zagrevanje sa drilovima za brzinu (10x10 m). •Glavni deo: •Eksplozivna snaga : Pliometrija sa skokovima sa kutije (3x10). •Košarkaški deo: •Šut pod pritiskom : Igre 1 na 1 i 2 na 2 sa fokusom na brze reakcije i šut. •Rad na pozicioniranju : vežbe za brzo zauzimanje pozicija u odbrani. •Završni deo: Statičko istezanje. Predtakmičarski mezociklus (Nedelje 5–8) Nedelje 5–6: Intenziviranje fizičkog i košarkaškog treninga Ponedeljak: •Brzina: Sprint 6x30 m na 90% intenziteta. •Glavni deo (60 min) : •Snaga: Olimpijsko dizanje (nabačaj) 4x4 (75% 1RM). •Košarkaški deo: •Trening reakcije u tranziciji : vežbe brzog kretanja iz odbrane u napad sa naglim promenama. •Šut sa različitih pozicija : 10 ponavljanja po poziciji. Sreda: •Anaerobni intervali : 6x150 m sprint. •Košarkaški deo: •Dribling i dodavanje pod pritiskom : dribling i brza dodavanja iz različitih pozicija. •Šuterski trening: brz šut iz različitih uglova. Petak: •Eksplozivna snaga : Skokovi sa dodatnim opterećenjem (3x10). •Košarkaške igre: Igre 2 na 2 i 3 na 3 sa fokusom na tranziciju i brze promene pravca. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Point Guards:",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex7",
    name: "Guards:",
    nameEn: "Exercise 7 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `Cilj: Razvoj brzine, eksplozivne snage, anaerobnog kapaciteta i šuta. Bazični mezociklus (Nedelje 1–4) Ponedeljak, Sreda, Petak: Uvodni deo: •Dinamičko zagrevanje sa fokusom na agilnost: 10 min. •Sprintovi 8x20 m sa maksimalnim ubrzanjem. Glavni deo: •Snaga: Mrtvo dizanje 3x6, čučanj sa skokom 3x8. •Košarkaški deo: •Šuterski trening sa kretnjama : 10 šuteva sa raznih pozicija u brzom pokretu. •Igre na pola terena : 2 na 2 sa fokusom na brze promene i šut. Završni deo: Statičko istezanje za fleksibilnost. Predtakmičarski mezociklus (Nedelje 5–8) Intenzifikacija sa košarkaškim tehničkim elementima : Ponedeljak: •Brzina: 8x30 m sprint. •Košarkaški deo: •Brzi šut: Vežbe sa brzim pozicioniranjem za šut. •Tranzicioni rad: 3 na 2 sa fokusom na šut iz tranzicije. Sreda i Petak: •Anaerobni intervali : 6x150 m. •Košarkaške igre: 3 na 3 sa fokusom na brzinu reakcije, šut i odbranu. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Guards:",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex8",
    name: "Centers:",
    nameEn: "Exercise 8 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `Cilj: Snaga, eksplozivnost i rad u reketu. Bazični mezociklus (Nedelje 1–4) Ponedeljak, Sreda, Petak: Uvodni deo: •Brzina: 6x15 m sprint (80-85% intenziteta). •Agilnost: Linearni i bočni rad kroz merdevine. Glavni deo: •Snaga: Mrtvo dizanje 4x5 (75% 1RM), čučanj sa skokom 3x8. •Košarkaški deo: •Trening skoka i pozicioniranja : skok za loptu, zauzimanje pozicija za odbranu i napad. •Blokade i rad u reketu : Igre 1 na 1 i vežbe za zauzimanje pozicije. Završni deo: Statičko istezanje. Predtakmičarski mezociklus (Nedelje 5–8) Nedelje 5–6: Intenzifikacija sa fokusom na košarkaške veštine i rad pod pritiskom Ponedeljak: •Brzina: 5x20 m sprint na 90%. •Košarkaški deo: •Rad na post igri: zauzimanje pozicija u reketu i brzi odgovori na dodavanja. •Trening blokada: vežbe za blokiranje i odbranu u reketu. Sreda i Petak: •Eksplozivna snaga : Pliometrijski skokovi sa kutije 3x8. •Košarkaške igre: 3 na 3 sa fokusom na rad pod pritiskom i kontrolu u reketu. Ovaj plan integriše fizički i košarkaški trening kroz sve faze pripreme, prilagođen potrebama svake pozicije. Svaka sesija ima preciznu strukturu, uključujući rad na fizičkoj pripremi (brzina, snaga, eksplozivnost, izdržljivost) i košarkaške veštine (dribling, šut, pozicioniranje, rad pod pritiskom), kako bi se obezbedio sveobuhvatan razvoj svakog igrača. You said: Ubaci taktiku napada i odbrane za ceo tim ChatGPT said: Dodaću taktički plan napada i odbrane za ceo tim , prilagođen fazama pripremnog perioda i specifičnim ulogama svakog igrača po pozicijama. Ovaj plan će uključiti osnovne principe napada i odbrane za bazični i predtakmičarski mezociklus, a zatim će biti prilagođen tako da podrži fizičke i tehničke aspekte razvijane u treninzima. Kompletan Pripremni Plan sa Taktikom Napada i Odbrane Taktički plan napada Tokom pripremnog perioda, cilj napada je razviti osnovne napadačke šablone i uvežbati dinamiku pozicioniranja, spacing i tranziciju . Fokus u bazičnom ciklusu je na osnovnim napadačkim postavkama, dok se u predtakmičarskom ciklusu prebacuje na naprednije koncepte i vežbe za brzinu reakcije i kretnje bez lopte. Bazični mezociklus (Nedelje 1–4): Osnove napada 1.Osnovna poziciona postavka – „5-Out“ •Cilj: Razviti spacing (raspoređivanje igrača po terenu) i omogućiti igračima da razumeju međusobnu ulogu i mogućnosti unutar napada. •Uloga igrača po pozicijama : •Point Guards : V ođenje igre i kreiranje prilika kroz prodore i asistencije. •Guards : Kretnje bez lopte, utrčavanja u „cut“ pozicije, preuzimanje šuteva sa distance. •Forwards : Rad u „high post“ poziciji, učestvovanje u „screen and roll“ situacijama. •Centers : Rad u reketu, blokade i postavljanje ekrana za spoljne igrače. •Vežbe: •Vežbanje osnovnog spacing-a sa 5-Out formacijom: kretanje bez lopte i dodavanja na slobodne igrače. •„Drive and kick“ varijante: Point guard kreira prodor, dok se spoljni igrači pozicioniraju za šut. 2.Screen and Roll i „Pick and Pop“ za Guards i Forwards •Cilj: Razviti tehniku „screen“ igre i učiniti šutere efikasnijim u situacijama nakon bloka. •Vežbe: •Postavljanje bloka za Guards sa loptom: centri postavljaju blokove, nakon čega se izmenjuju u napad na koš ili povlačenje na liniju za šut. •Opcije za Guards i Forwards nakon bloka: šut iz driblinga, dodavanje na otvorene pozicije ili ulaz u reket. Predtakmičarski mezociklus (Nedelje 5–8): Naprednija napadačka taktika 1.„Motion Offense“ •Cilj: Razvijanje kretnji bez lopte i aktivnih uloga svih igrača u napadu. •Uloge igrača: •Point Guards: Kontrolišu tempo i usmeravaju saigrače kroz pozicije. •Guards i Forwards : Stalno se kreću i preuzimaju slobodne pozicije (npr. backdoor cut, curl cut). •Centers: Postavljanje statičnih i dinamičkih blokova. •Vežbe: •„Motion“ napad sa stalnim menjanjem pozicija i dodavanjem lopte u slobodne delove terena. •Igre 4 na 4 ili 5 na 5, sa fokusom na spontane kretnje i zauzimanje prostora. 2.Brza tranzicija i kontre •Cilj: Unaprediti brzinu tranzicije iz odbrane u napad i organizovano korišćenje otvorenih pozicija. •Vežbe: •Trening tranzicije sa 3 na 2 i 4 na 3 situacijama: Point guard vodi tranziciju, a spoljni igrači trče prema pozicijama za šut ili ulaz. Taktički plan odbrane Odbrana je u ovom periodu usmerena ka razvoju osnovnih principa individualne i timske odbrane u bazičnom mezociklusu, dok predtakmičarski ciklus obuhvata intenzivnije odbrambene vežbe i simulacije odbrane u tranziciji. Bazični mezociklus (Nedelje 1–4): Osnove timske odbrane 1.Osnovna postavka – Čovek na čoveka („Man-to-Man Defense“) •Cilj: Razvijanje discipline u individualnoj odbrani, komunikacije i rotacija između igrača. •Vežbe: •1 na 1 odbrambene vežbe : Individualna odbrana protiv igrača sa loptom i bez lopte, sa fokusom na stavljanje pritiska na napadača. •Close-out vežbe: Brze reakcije na igrače koji primaju loptu, kako bi se postigla pravilna pozicija za odbranu. •Rotacija i pomoć: Simulacija „help-side“ odbrane, gde igrači sa strane pomažu centru kada igrač napada reket. 2.Zonska odbrana 2-3 za zatvaranje reketa •Cilj: Razvijanje timske koordinacije i zajedničkog zatvaranja prostora. •Vežbe: •Postavka zonske odbrane, gde su centri  centralni deo odbrane u reketu, dok spoljašnji igrači rotiraju na liniji šuta. •Praktična simulacija rotacija i preuzimanja u zonskoj postavci. Predtakmičarski mezociklus (Nedelje 5–8): Napredna odbrana i taktičke kombinacije 1.Presing odbrana na pola terena •Cilj: Povećanje intenziteta pritiska na protivničke ball-handler-e i stvaranje grešaka. •Vežbe: •Pola-terena presing : Igrači se postavljaju tako da primoraju protivnika na grešku, dok se centri povlače u rekete radi zaštite . •2 na 1 i 3 na 2 tranzicioni presing : Situaciona odbrana sa brzim preuzimanjem igrača i zatvaranjem linije dodavanja. 2.Pritiskanje napadača i tranziciona odbrana •Cilj: Sprečiti brze napade i obezbediti stabilnu odbranu prilikom tranzicije. •Vežbe: •Igra 5 na 5 sa tranzicionim fokusom : Brzo vraćanje u odbranu prilikom izgubljene lopte, sa rotacijama i zauzimanjem pozicija. •Situaciona odbrana : Vežbanje povratka u odbranu i organizacija u reketu kada je tim u defanzivnoj tranziciji. Zaključak Ovaj plan integriše osnovne i napredne napadačke i odbrambene šablone , sa specifičnim vežbama za individualnu i timsku odbranu, brze tranzicije i reakcije u napadu. Tokom bazičnog ciklusa, igrači rade na osnovama spacinga, komunikacije i individualne odbrane, dok se u predtakmičarskom ciklusu taktičke vežbe intenziviraju kroz tranzicioni napad, presing odbranu i naprednu timsku koordinaciju. „Stremimo ka tome da se trenažni proces sažme u nešto više od niza vežbi – u sistem koji razume zašto svaki element postoji i kako da ga adaptira za specifične potrebe svakog sportiste. „ Čet Vežbe kroz mikrocikluse Čet je predložio motion offense i tranzicije, brzu igru što će sigurno dovesti do popune anaerobnih izvora energije, ali i do ulaska u srednji ritam.  Tranzicionu odbranu, čovek na čoveka i zonu 2-3, ali nije predvideo dovoljan broj detalja i kako ih osposobiti na igru u odbrani. UKTS je na sajtu KSS omogućio besplatan download literature koju ću koristiti. Randy Sherman i Steve Robinson su autori tranzicije i sekundarnog kontranapada za koje ću napisati treninge na osnovu dijagnostičkih parametara. U zavisnosti od pulsa i cilja treninga doziramo vežbe, a od snage nogu (igrača na istoj poziciji) određujemo stranu terena na kojoj izvodi vežbu. Ukoliko je leva jača, onda je na levoj strani jer lakše može da promeni pravac i brzinu kretanja. Neretko se vidi da igrač sa obe strane terena dribla istom rukom i ne može da pobedi odbrambenog igrača iz tog razloga. Naravno da je nedovoljan nivo tehničke obučenosti razlog, ali i fizička mogućnost igrača ima značajnu ulogu. Zato u knjizi insistiram na fazama i Pripremnom periodu. Korišćenje igrača onakvim kakvim smo ga dobili u seniorima vodi njegovoj stagnaciji, korekcije su konstantan proces i uvek postoje detalji koje treba popravljati. Kada i kako Istu vežbu možemo ponavljati na različite načine zavisno od periodizacije. Uglavnom su u uvodu u trening i zone nisu striktne za ceo trening. Neki delovi treninga su aerobni, neki anaerobni, zavisno od periodizacije se određuje procentualna zastupljenost u treningu. Detalji, sem u obuci, su po pravilu anaerobni. Drugi mikrociklus bazičnog mezociklusa: svaku vežbu ponavljati do visine pulsa - Intensive endurance - for improving the aerobic  exercise capacity. Puls od 130- 170. Uvodni mikrociklus kome je cilj bio i obuka igrača je završen, a u drugom automatizaciju podižemo na određeni nivo kroz specifičnu fizičku pripremu koristeći kretnje iz košarkaških zadataka. Primetićete da su igrači „masni“ (od 8-12% je normativ). Masti sagorevaju na vatri ugljenih hidrata nakon 30 minuta treninga, tako da ponavljanja nisu primarna. Kroz svaki mikrociklus istu vežbu ponavljamo, ali sa postepenim podizanjem pulsa i produžetkom tranzicije, svaki nastavak ulazi u sekundarni kontranapad, a na kraju u pozicioni napad. Kada igrači zapamte kretnje i tajming počinjemo sa ubacivanjem atletskih elemenata. Od anklinga do poskoka, bezbroj je vežbi koje uglavnom možemo karakterisati kao vežbe pliometrije niskog inteziteta. Mesto gde se menja pravac (kasnije brzina) kretanje obeležavamo čunjevima. Sprintom se vraćamo na početnu poziciju. Kompletne akcije su u knjizi Transition offense na sajtu KSS, autori su Randy Sherman i Steve Robinson. Efekat je potpun ako dinamičko zagrevanje treniramo po istim linijama kretanja. Na svakom čunju menjamo vežbu i postepeno doprinosimo boljoj promeni i tajmingu, a samim tim i geometriji u napadu. Dimenzije terena su 28x15 i lako izračunavamo broj deonica za popunu izvora energije, a linija za 3 poena je 0.90m udaljena od auta. Ukoliko znamo da prosečna veličina patika za košarkaše je broj 47 ili 31 cm (bitno kao orjentir), između linija za 3p i auta imamo malo više od 0.50m. Tu su greške najčešće i u prvom delu knjige je bilo govora kako ispraviti. U sadašnjem slučaju kroz mikrocikluse umesto čunja postavićemo hexagon ili bilo koji drugi zadatak koji komplikuje vežbu (ključni momenat je da igrač startuje iz mesta bez pomeranja stajne noge unazad, ukoliko ne može pitanje je „zašto ne može?“ i koriguje se u hodu). Čete šta misliš da ne razrađujem dalje timske vežbe nego da odmah pređem na monocikluse individualne pripreme igrača koja vodi u situacioni trening? ČET Mislim da je to odlična ideja! Fokus na individualne monocikluse koji vode u situacioni trening je korak ka još većoj individualizaciji i prilagođavanju pripreme specifičnostima svakog igrača . Ovo će omogućiti da svaki igrač razvije neophodne veštine i fizičke kapacitete potrebne za njegovu ulogu na terenu, a zatim ih prenese u timsku dinamiku. Evo nekoliko prednosti ovog pristupa: 1.Bolje targetiranje slabosti i potencijala •Kroz individualne monocikluse lakše je korigovati specifične slabosti, poput problema sa promenom pravca, slabijeg driblinga s jednom rukom, ili ograničene eksplozivnosti. 2.Priprema za situacioni trening •Situacioni trening ima smisla samo kada su individualne sposobnosti dovoljno razvijene da se igrači efikasno uklapaju u taktiku i tranziciju. Ovaj pristup će omogućiti glatku progresiju od pojedinačnih vežbi ka timskim zahtevima. 3.Fokus na specifične zadatke i pozicije •Individualni monociklusi pružaju prostor da se svaka pozicija priprema za situacije koje su specifične za uloge igrača. Bekovi mogu raditi na brzini reakcije i driblingu, dok će centri fokusirati rad na skokovima i stabilnosti. 4.Efikasniji prelaz ka timskoj igri •Kada igrači uđu u situacioni trening već pripremljeni individualno, ceo timski proces postaje efikasniji, jer se manje vremena troši na osnovne korekcije. Predlog za Razradu Individualnih Monociklusa 1.Struktura monociklusa: •Uvodni deo: Dinamičko zagrevanje i vežbe mobilnosti vezane za specifične potrebe igrača. •Glavni deo: Fokus na razvoj ključnih antropomotoričkih osobina (snaga, brzina, eksplozivnost, izdržljivost) i tehničke elemente igre. •Završni deo: Vežbe regeneracije i mobilnosti za smanjenje zamora. 2.Integracija sa situacionim treningom: •Po završetku monociklusa, individualne vežbe treba direktno povezati sa taktičkim zadacima iz situacionih treninga, čime se osigurava kontinuitet. NE POVLAĐUJE VEĆ JE U PRA VU. KAKV A JE SVRHA OSIM KOMPLIKOV ANJA ? MEĐUTIM I JA SAM U PRA VU, NE ŽELIM DA PRIMAJU KOŠEVE „PREKO RUKE“ ILI KASNE SA REAKCIJOM NA POTEZ NAPADAČA. ŽELIM KONTROLU STABILIZATORA JER NE ŽELIM FAULOVE ZA TRI POENA ILI GAŽENJE AUT LINIJA. SIGURNO JE DA NEĆEMO PREKIDATI KOŠARKAŠKI TRENING DA BI POPRA VLJALI. P                  PLAN I PROGRAM Poređenje pristupa Četa, Gorana i nadogradnja od strane Simbiona II 🧠 1. ČETOV PRISTUP – statična struktura •Linearna periodizacija (Pripremni → Takmičarski → Prelazni) •Fiksni sadržaji po fazama: •Pripremni = bazične sposobnosti •Takmičarski = taktičko-tehnički rad •Prelazni = odmor •Fiksni dani za mikrocikluse (npr. PON = snaga, SRE = brzina…) 📌Problem: nema fleksibilnosti → ne odgovara realnim oscilacijama u formi, stresu i opterećenju. 🧠 2. GORANOV A METODIKA – živa periodizacija Tvoja struktura u knjizi: Makrociklus (1 godina):🔹 •Osnovna podela: •Pripremni deo – bazične sposobnosti + dijagnostika •Takmičarski deo – transfer sposobnosti u igru •Prelazni deo – aktivni oporavak + evaluacija Mezociklus:🔹 •Podeljeni po: •Trajanju (3–6 nedelja) •Svrsi (adaptacija, stabilizacija, konverzija) •Povezan sa testovima i sposobnostima Mikrociklus:🔹 •Planiraš ga individualno, na osnovu: •Igračke pozicije •Testova (brzina, snaga, izdržljivost, fleksibilnost...) •Povratnih informacija sa terena (forma, umor) 📌Tvoj sistem je fleksibilan, dijagnostički vođen i integrisan sa realnim ritmom sporta. 🤖3. SIMBIONOV A NADOGRADNJA – funkcionalni AI sistem 🧠 Integrativni model: CiklusŠta se uzima u obzir Šta se automatski menja MakroKalendarska sezona + eksterne obavezeKalendar se osvežava u 3 vremenske tačke godišnje MezoTestovi + trendovi formeSadržaji se menjaju na osnovu regresije/progresije MikroDaily RPE + AI analiza pokretaTrening menja intezitet i dužinu u realnom vremenu Periodizacija u aplikaciji:📈 •Boje ciklusa: •Zelena = adaptacija •Žuta = stres zona •Crvena = overreaching •Alarm za promenu mikrociklusa  ako AI detektuje disbalans (npr. snaga opada, a opterećenje raste) •Individualni plan se generiše na osnovu istorije opterećenja + testova + utakmica Hoćeš da napišem još i vizuelnu šemu (flowchart)  plana? Ili da pređem odmah na pisanje gotovih sedmičnih mikrociklusa  za različite faze? Napiši šemu. SIMBION Odlično, Gorane – evo vizuelne šeme (tekstualni flowchart)  plana i programa, tačno kako funkcioniše u tvojoj metodici + kako ga Simbion II vidi u aplikaciji. 🔁ŠEMA FUNKCIONALNE PERIODIZACIJE – GORAN × SIMBION II yaml CopyEdit GODIŠNJI PLAN (Makrociklus)⏳ │ ├──  PRIPREMNI PERIOD (6–10 nedelja) 📘 │   │ │   ├── Mezociklus 1: Osnovna dijagnostika │   │   └── Mikrociklus A: Testiranje + adaptacija │   │ │   ├── Mezociklus 2: Razvoj sposobnosti │   │   └── Mikrociklus B: Snaga / Izdržljivost / Brzina (po deficitu) │   │ │   └── Mezociklus 3: Konverzija u funkcionalne obrasce │       └── Mikrociklus C: Sposobnosti kroz igru + duel │ ├──  TAKMIČARSKI PERIOD (20–30 nedelja) 🏀 │   │ │   ├── Mezociklusi 4–6: Održavanje + individualna korekcija │   │   └── Mikrociklus D: Intenzitet → oporavak → meč │   │ │   └── Mezociklusi 7–8: Pik forma (turniri, playoff) │       └── Mikrociklus E: Regresija opterećenja, taktička preciznost │ └──  PRELAZNI PERIOD (2–4 nedelje) 🔄 │ ├── Mezociklus 9: Aktivni oporavak │   └── Mikrociklus F: Lagana dijagnostika + mobilnost │ └── Plan za povratak – modulisano na osnovu rezultata iz ciklusa F 🧠 Dinamika u aplikaciji • Svaki ciklus 📲dobija boju prema stanju igrača: •Zelena = pun adaptivni potencijal •Žuta = umor raste / vreme za korekciju •Crvena = AI signalizira pad performansi •Aplikacija koristi testove + trening load + AI analizu pokreta da: •automatski predloži strukturu mikrociklusa •upozori trenera ako treba da „pauzira“ igrača ili menja dan 📘GODIŠNJI PLAN – MAKROCIKLUS (Funkcionalna periodizacija u košarci prema Goranovoj metodici, nadograđena od strane Simbiona II) `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Centers:",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex9",
    name: "PRIPREMNI PERIOD (6–10 nedelja)🔷",
    nameEn: "Exercise 9 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `Cilj: Razvoj bazičnih sposobnosti i korekcija na osnovu dijagnostike Struktura: •Mezociklus 1: Dijagnostika i adaptacija •Mikrociklus A: testiranje, aktivacija, mobilnost, uvod u opterećenje •Mezociklus 2: Razvoj prioritetnih sposobnosti •Mikrociklus B: snaga / brzina / izdržljivost – po deficitu •Mezociklus 3: Konverzija sposobnosti u funkcionalne obrasce •Mikrociklus C: pliometrija, duel igra, kognitivni elementi 🧠 2. TAKMIČARSKI PERIOD (20–30 nedelja) Cilj: Održavanje forme, individualizacija i kontrola umora Struktura: •Mezociklusi 4–6: Takmičarski balans •Mikrociklus D: duel/sparing + regeneracija + korektivni dani •Mezociklusi 7–8: Vršna forma (turniri, plejof) •Mikrociklus E: redukcija volumena, specifični intenziteti, stabilizacija forme 🧠 3. PRELAZNI PERIOD (2–4 nedelje) Cilj: Aktivni oporavak, reevaluacija i prevencija gubitka forme Struktura: •Mezociklus 9: Oporavak i reevaluacija •Mikrociklus F: mobilnost, lagani tehnički rad, dijagnostika za sledeći ciklus Svaka faza se individualizuje prema:📌 •Rezultatima funkcionalne i motoričke dijagnostike •Igračkoj poziciji i ulozi u sistemu •Godišnjem ciklusu i ciljevima tima 🧠 CILJ MIKROCIKLUSA A: •Aktivacija neuromišićnog sistema •Dijagnostička opažanja u pokretu (screening kroz trening) •Priprema CNS-a za veći volumen i intenzitet •Uspostavljanje discipline, fokusa i trenažnog sistema DAN PO DAN📅 🧠 PONEDELJAK – AKTIV ACIONI START •Uvodni deo (20 min): •Foam roll + mobilnost zglobova (gležanj, kuk, torakalna) •Aktivacija core (dead bug, glute bridge) •Dynamic warm-up (skip, lateralni korak, A/B drill) •Glavni deo (45 min): •Tehnički elementi kretanja (shuffle, backpedal, cross step) •Skok u dalj (test) + izometrični čučanj (procena snage) •Pas + pivot (lak intenzitet) – 10 min •Završni deo (10 min): •Vežbe disanja + statičko istezanje •Dnevni RPE + subjekcija umora (skala 1–10) 🧠 UTORAK – KOORDINACIJA I MOBILNOST •Uvodni deo: •Rotacije kukova, sklopke, crawl vežbe (spider walk, inchworm) •Wall drills za kontrolu posture •Glavni deo: •Koordinacija sa merdevinama (različiti ritmovi) •Ravnoteža na BOSU / balansu •Vežbe sa medicinkom (kontrola i stabilnost) •Završni deo: •Istezanje zadnje lože, kvadricepsa, plantarne fascije •Pregled stopala (reakcija, pronacija/supinacija) 🧠 SREDA – LAKŠI DAN + IGRA •Uvodni deo: •Lagano zagrevanje (vođeni ritam muzike) •Mobilnost u parovima •Glavni deo: •3v3 na ¼ terena (2x8 minuta) •Vežbe „mirror drill“ (reakcija i lateralna eksplozija) •Lagani šut (3x10 sa svake pozicije) •Završni deo: •Disanje 4-7-8 + vizualizacija pokreta •Dnevni dnevnik: Šta si uradio dobro, gde ti je telo tvrdo 🧠 ČETVRTAK – KONCENTRACIJA NA STABILIZACIJU •Uvodni deo: •Rotacija ramenog pojasa sa štapom •Aktivacija gluteusa i stabilizatora skočnog zgloba •Glavni deo: •Core superset: antirotacija, bočni plank, stir the pot •Duel vežbe bez lopte (blokiranje, održavanje kontakta) •Sklek + dodavanje lopte (reakcija) •Završni deo: •Vežba sidra – statika + balans •Pisanje cilja za petak: „šta želim da poboljšam“ 🧠 PETAK – DIJAGNOSTIKA U KRETANJU •Uvodni deo: •Generalni warm-up •Aktivacija na kosoj ravni (multiplanarno kretanje) •Glavni deo: •5-10-5 agility test (2x) •Reactive shuffle drill (kamera ako postoji) •Hod unazad + nagla promena pravca → snimanje •Završni deo: •Statičke oscilacije (malo tremora) •Dnevni feedback: video + razgovor 🧠 SUBOTA – OPORA V AK SA FUNKCIONOM FORMOM •Uvodni deo: •Roll + deep squat mobilizacija •Vežbe sa partnerom: ogledalo + balans •Glavni deo: •Animal flow sekvenca •3v3 na ½ terena (nema trčanja, samo pravovremeno kretanje) •Pas – pivot – šut u ritmu (10 min ciklusa) •Završni deo: •Cold towel + disanje •„Pohvala dana“ – svako kaže šta je uradio bolje 🧠 NEDELJA – POTPUNI ODMOR I REFLEKSIJA •Zadatak: •Pisanje mikro-ciljeva za sledeći mikrociklus •Kratki upitnik: šta te boli, gde se osećaš snažno •Stretching kod kuće (video preko app) Ovaj mikrociklus je osnova tvoje škole:📌 •Fokus na pokret, ne izolaciju •Priprema tela za košarku, ne za teretanu •Vežbe + osećaj + refleksija 📅   MIKROCIKLUS B – BAZIČNI Cilj: Postepeni rast opterećenja, uspostavljanje osnovne snage, kontrole i ritma pokreta. Trening je u funkciji košarkaških obrazaca kretanja, sa elementima koji se oslanjaju na dijagnostiku iz prethodnog mikrociklusa. 🧠 PONEDELJAK – SNAGA NOGU + FOKUS NA BALANS •Uvodni deo (20’): •Foam roll (kvadriceps, gluteus) •Dinamička mobilnost (skip, glute activation, lunges) •Aktivacija stabilizatora (mini band lateral walk) •Glavni deo (45’): •Izometrijski čučanj 3x30’’ + wall sit 2x1’ •Bugarski čučanj 3x6/6 (dumbbell) •Step-up sa opterećenjem 3x6 •Skok u dalj 3x4 (kontrolisano) •Završni deo (10’): •Pas–pivot sekvenca sa otporom (guma) •Statičko istezanje zadnje lože i kvadricepsa 🧠 UTORAK – BRZINA REAKCIJE + STABILNOST •Uvodni deo: •Reaktivna aktivacija: A-skip, B-skip, pogo hops •Lateralni shuffle + brza promena pravca •Glavni deo: •5-10-5 COD test (2x) •Reaktivni izlazak iz čučnja – 3x6 (verbalni signal) •Duel borba u niskom stavu (10x5’’) •Pas iz skoka u kontaktu (8x) •Završni deo: •Bočni plank 2x30’’ + rotacija •Foam roll adduktori + hip stretch 🧠 SREDA – KOŠARKA + MOBILNOST •Uvodni deo: •Mobilnost 3D (zglobovi: skočni, kuk, torakalna) •Light jog + pivotiranje •Glavni deo: •Igra 2v2 + 3v3 (10 min rotacije) •Reaktivna odbrana (close-out, skok unazad) •Skok šut iz promene pravca (5x5 ponavljanja) •Završni deo: •Izduvavanje: disanje 3-6-9 •Statičko istezanje zadnje lože, piriformisa i listova 🧠 ČETVRTAK – IZDRŽLJIVOST U SNAGI •Uvodni deo: •Mobilnost + izometrijska aktivacija (wall press, plank walk) •Crawl pozicije: bear walk, leopard crawl •Glavni deo: •EMOM (Every Minute on the Minute): •5 sklekova + 3 bacanja medicinke (10 min) •Jump squat sa držanjem 3x6 •Farmer walk + side plank hold •Završni deo: •Opuštanje ramenog pojasa + vežbe vrata •Pisana refleksija (RPE + osećaj mišića) 🧠 PETAK – KOMBINOV ANI FUNKCIONALNI RAD •Uvodni deo: •Core rotacija, crawl + mobilnost •Ladder drills sa loptom •Glavni deo: •Koordinacija + šut (4 pozicije u 60 sekundi) •Duel 1v1 sa zadatkom (npr. samo pivot+šut) •Skok iz leđa (otpor iz bande) •Završni deo: •Timski cooldown – kružno disanje •Samomasaža foam roll ramenog pojasa 🧠 SUBOTA – RITAM + KRETANJE BEZ OPTEREĆENJA •Uvodni deo: •Lagani poligon + igrolike vežbe •Partner skip, pas iz okreta •Glavni deo: •3v3 bez kontakta – samo postavljanje tela •Šut bez skoka (10x5) •Ponavljanje pivot sekvence uz zadati ritam •Završni deo: •Statičko istezanje (kuk, zadnja loža, list) •Vizualizacija meča (2 min zatvorenih očiju) 🧠 NEDELJA – AKTIVNI ODMOR •Zadatak: •Vežbe disanja + hoda u prirodi (ili plivanje) •Upitnik: koje su mišićne grupe napete? •Individualna analiza napretka 🧠 FOKUSI MIKROCIKLUSA: •Počinje građenje snage kroz funkcionalne obrasce •Testirani deficiti se ubacuju kao individualni zadaci •Svaki trening ima košarkaški kontekst – nema izolacije bez smisla 🔴              MIKROCIKLUS C – UDARNI Cilj: Maksimalni intenzitet i volumen. Razvoj eksplozivne snage, brzine reakcije i duela pod zamorom. Treningi su pozicioni, individualizovani, povezani sa testovima i deficitarnim zonama. FOKUS MIKROCIKLUSA🎯 •Snaga: Eksplozivna + izometrička pod zamorom •Brzina: Startna, reakcije, promene pravca •Upotreba testova:  Podaci iz 5-10-5 COD, countermovement jump, skok u dalj •Poziciona diferencijacija:  razlika između playmakera i visokih igrača se poštuje •Upoređenje: gde je igrač u odnosu na standarde i saigrače na istoj poziciji DAN PO DAN – UDARNI📅 🧠 PONEDELJAK – EKSPLOZIVNA SNAGA NOGU •Snaga: Eksplozivna •Brzina: Startna •Serije/Ponavljanja: •Countermovement jump (CMJ): 3 serije x 4 skoka, pauza 90’’ •Pliometrijski boks skok: 4x5, visina 40–60cm •Bugarski čučanj iz mesta: 3x6/6 (eksplozivno podizanje) •Izdržaj (isometric hold): 3x20’’ na dnu čučnja •Pozicije: •Plej + bek: skokovi sa brzom promenom pravca •Visoki igrači: rad na boksu sa većim opterećenjem (dumbbell +20%) •Upoređenje: •CMJ proseci po pozicijama: •Bek: >42cm •Krilo: >45cm •Centar: >50cm •Ispod proseka = dodatni rad u sledećem ciklusu 🧠 UTORAK – REAKTIVNA BRZINA I AGILNOST •Brzina: Reakcije + promena pravca •Serije/Ponavljanja: •Mirror drill: 6x10’’ (3 levo / 3 desno) •5-10-5 COD sa svetlosnim signalom: 4x •Duel 1v1 bez lopte – borba za prostor: 3x20’’ •Snaga: Reaktivna + repetitivna iz duela •Pozicije: •Plej: niži ugao, kraće distance •Krilo + centar: duel borba, fokus na ramena i kukove •Upoređenje (5-10-5): •Elitni plejevi < 4.80s •Igrači preko 5.20s = slab COD, dodaje se core i rad kukova 🧠 SREDA – LAKŠI DAN, TAKTIČKO KOŠARKAŠKO UZEMLJENJE •Sadržaj: •4v4 na ¾ terena, 4 rotacije po 6 minuta •Šut pod umorom (šatl 4x4m + šut) •Pas iz skoka u kontaktu (5x4 ponavljanja) •Snaga: Posturalna i kontrola tela •Brzina: Odluke pod zamorom •Završni deo: Statičko istezanje + analiza klipova iz prethodnih treninga 🧠 ČETVRTAK – VRH INTENZITETA •Snaga: Eksplozivna + izometrička u zamoru •Brzina: Promena pravca iz kontakta •Serije: •Sprint 10m iz ležeće pozicije – 5x (pauza 60’’) •Pliometrija lateralna (skok u stranu): 4x6 •Duel close-out + promena pravca: 3x4 ponavljanja •Guranje sanki: 4x15m (15–30 kg) – važna za snagu u close-out situacijama •Pozicije: •Centri rade duže guranje sanki (30m) •Bekovi kraće, ali brže •Upoređenje (10m sprint): •Elitni plejevi: <1.80s •Igrači iznad 2.0s – individualni rad brzine 🧠 PETAK – KOMBINOV ANI DAN + TAKTIKA •Sadržaj: •Duel 1v1, 2v2 – rad pod umorom •Reakcija na signal + šut •Sprint + duel kontakt (ramenima) •Snaga: Dinamička + eksplozivna •Brzina: Reakcije iz zamora •Serije: 3 bloka po 8 minuta •Analiza: svaki igrač dobija RPE + kratku video refleksiju 🧠 SUBOTA – REKAPITULACIJA + SNIMANJE •Sadržaj: •Ponavljanje svih reakcijskih obrazaca •Ponavljanje skokova (CMJ + lateralno) •Snimanje 2v2 + 3v3 za analizu •Završni deo: •Statika + vizualizacija •Tim kroz razgovor opisuje gde je osećao snagu / slabost ⚪NEDELJA – AKTIVNI ODMOR (SAMO ROLL + PLIV ANJE / ŠETNJA) ZAKLJUČAK UDARNOG CIKLUSA:📌 •Ovo je “pik” u pripremnom delu •Ako testovi ne pokažu progres – resetuje se struktura •Odradili smo i: •Snagu: Eksplozivna, reaktivna, izometrička •Brzinu: Startna, COD, odluke •Opterećenje: Serije, pauze, RPE •Individualizacija:  po pozicijama i uporedni rezultati Sledeće: 🔜Specifični mikrociklus (D)  – prenosi sposobnosti u situacije igre: ritam, duel, taktika, položaj tela. I svi igraci na istoj poziciji isto rade? Zasto smo ih onda testirali? SIMBION Ako svi igrači na istoj poziciji rade isto – testovi su besmisleni. Greška koju ispravljam odmah:⚠️ U prethodnim mikrociklusima, vežbe su bile individualizovane „na papiru“ – ali nisam dovoljno jasno prikazao kako se razlikuju unutar iste pozicije . Zato sada uvodim: ✅Simbionova korekcija: Individualizacija unutar pozicije Na primer – za plejmejkere: IgračBrzina reakcije (5-10-5) CMJIndividualna potreba A4.65 s (elitno) 42cmFokus na taktiku i snagu trupa B5.25 s (slabo) 44cmFokus na COD + lateralni rad C4.95 s 38cmFokus na skok i eksploziju ➡️Znači: Svi su plejmejkeri, ali: •Igrač B radi više 5-10-5, drop step, lateral skip s gumom •Igrač C ide u CMJ + reakcioni start + izometrički čučanj •Igrač A radi duel + mentalni zadaci (taktika, fokus) U sledećem ciklusu (Specifični mikrociklus), svaki blok biće:📌 •Zajednički deo (za poziciju) •Individualna korekcija  (na osnovu testova) POZICIJA: PLEJMEJKERI (2 IGRAČA)🔎 IgračTest 5- 10-5CMJIdentifikovan deficit Korektivni sadržaj u mikrociklusu C A4.65 s42cmOdržavanje balansa pod pritiskomDuel drill + core izometrički rad (plank + rotacija) IgračTest 5- 10-5CMJIdentifikovan deficit Korektivni sadržaj u mikrociklusu C B5.25 s44cmSlaba lateralna brzina (COD)Lateralni shuffle + reaktivna promena pravca (mirror + otpor) 🧠 POZICIJA: KRILO (2 IGRAČA) IgračTest skok u daljCMJDeficit Korektivni sadržaj C215 cm45cmLoša stabilnost pri doskokuIzometrički doskok + „anti-knee valgus“ korekcije D230 cm48cmBrzina odluke iz trčanjaPas-šut sekvence + duel pod umorom 🧠 POZICIJA: CENTAR (2 IGRAČA) Igrač10m sprintCMJDeficit Korektivni sadržaj E2.15 s50cmSlab kontakt prilikom close-outaGuranje sanki + duel 1v1 u odbrani F1.90 s46cmSlab skok bez zaletaCMJ bez zamaha ruku + front squat jump 🧠 CMJ = CounterMovement Jump (Skok iz polučučnja sa zamahom ruku ) To je standardizovani test eksplozivne snage nogu , koristi se svuda – od NBA do FIBA, od sportskih laboratorija do trenažnih centara. Kako izgleda:📌 •Igrač stoji uspravno •Radi brzi kontramotivacioni pokret  (polučučanj) •Zatim eksplozivno skače što više •Skok se meri u centimetrima (vertikalna visina) 🧠 Šta meri: •Eksplozivnu snagu  donjih ekstremiteta •Efikasnost CNS aktivacije •Kapacitet da se iz prelaznog pokreta generiše maksimum Zašto je važan u košarci:🎯 •Koristi se za evaluaciju napretka kroz trening •Ima jasne normative po pozicijama i polu •Direktno se prenosi na skok šut, skok u odbrani, skok u kontaktu 📊NORMATIVE ZA CMJ (COUNTERMOVEMENT JUMP) PozicijaJuniori (15–18 god) Seniori (18+)Profesionalni nivo Plejmejker35–42 cm 40–46 cm45+ cm Bek (2)37–45 cm 42–48 cm47+ cm Krilo (3)40–48 cm 45–52 cm50+ cm Krilni centar (4)42–50 cm 48–55 cm53+ cm Centar (5)44–52 cm 50–56 cm55+ cm 🔎Vrednosti su uzete iz kombinacije Human Kinetics, NBA Draft Combine podataka, EBP sport research i elite trenažnih centara. Ove vrednosti će ti pomoći u proceni:📌 •Da li igrač ima kapacitet za svoju poziciju •Da li je napredovao kroz mikrociklus •Da li se trening mora menjati M📅 IKROCIKLUS D – SPECIFIČNI Cilj: Prenos razvijenih sposobnosti u takmičarsko-specifične uslove. Trening po pozicijama, duelima, promenama ritma i donošenju odluke pod pritiskom. GLA VNI FOKUSI:🎯 •🧠 Integracija sposobnosti u igračku funkciju • Dueli, close-out, pick’n’roll, tranzicija⚔️ • Testovi: 📊reakcija na signal , agility T-test, brzina odluke • 📌Normativi + individualna korekcija  po pozicijama 🧠 PONEDELJAK – REAKCIJA + CLOSE-OUT Element Sadržaj Uvodni deo3D mobilnost + wall drill + foam roll (kuk + list) Glavni deo •Close-out + promena pravca → duel 1v1 (3x5) •Reaktivni sprint 5m iz signala (verbalni/vidni) 4x •Duelna izdržljivost (2x2 iz ugla) 4 min rotacije | | Završni deo | Core izometrični plank + statika zadnja loža | Test uključen: •🧠 Reakcija na signal  – vreme mereno ručno Normativ:📊 •<0.25s (elitno), <0.30s (dobro), >0.35s (slabo) Korektivno:📌 •Igrači >0.35s rade dodatni rad refleksa sa svetlom ili zvukom 🧠 UTORAK – POZICIONI ŠABLONI I BRZINA ODLUKE Element Sadržaj Uvodni deoSkip sa promenom visine težišta + pivot drill Glavni deo • •Pick’n’roll 2v2 sa varijacijama (hedge, switch, drop) •1v1 bek protiv krila → simulacija mismatcha •Donošenje odluke: pas / prodor / šut (3 sekunde limit) | | Završni deo | Statička elongacija kvadricepsa i fleksora kuka | Test uključen: • ⏱Brzina odluke (reakcija u igri) •Snima se i ocenjuje: 1 = kašnjenje, 3 = optimalno, 5 = prebrza/neopravdana Normativ:📊 •Optimalna reakcija < 1.2 s •Pogrešna odluka ili neblagovremena reakcija = korekcija u sledećem danu 🧠 SREDA – AGILITY T-TEST + DUELNA KOREKCIJA Element Sadržaj Uvodni deoFoam roll + lateralna mobilnost (kuk, skočni zglob) Glavni deo • •T-test (2x, pauza 3 min) •Reaktivni duel 1v1 u „kutiji“ 3x3m (kontakt dozvoljen) •3v3 sa ograničenjem (2 driblinga max) | | Završni deo | Vizuelna refleksija + statičko istezanje listova | Test uključen: • 🏃‍♂️Agility T-test Normativ (seniori):📊 •Plej: <9.5s •Krilo: <10.0s •Centar: <10.5s Igrači iznad normativa → dodatni lateralni rad + core rotacija📌 🧠 ČETVRTAK – PRENOS U TAKMIČARSKU DINAMIKU Element Sadržaj Uvodni deoCrawl sekvence + wall resistance Glavni deo • •4v4 sa jednim kontaktom dozvoljenim •Pas-šut pod zamorom (iz 4 pravca) •Izlazak iz bloka → šut (3 serije x 4 ponavljanja) | | Završni deo | Statička relaksacija ramenog pojasa | Fokus:📌 •Ko zadržava tehniku pod zamorom •Analiza kretanja iz video klipa (snimak treninga) 🧠 PETAK – FUNKCIONALNA KOMPENZACIJA Element Sadržaj Uvodni deoGlute bridge + bird-dog rotacija Glavni deo • •3v3 iz „mrtve“ pozicije •Reaktivna promena pravca na vizuelni stimulus •Shadow defense 2x30 sekundi | | Završni deo | Pisana refleksija + timska analiza RPE | 🧠 SUBOTA – FINALNA REAKCIJA + TAKTIČKI POLIGON Element Sadržaj Uvodni deoLagano zagrevanje + vizualizacija Glavni deo • •Poligon: reakcija + COD + duel + finish •Simulacija meča 5v5 (12 min) sa fokusom na detalj •Timske greške analizirane uživo | | Završni deo | Mentalni reset + istezanje u tišini (vođeno disanje) | NEDELJA – REKAPITULACIJA⚪ •Individualni izveštaj svakog igrača •Video analiza njegovih odluka •Plan za naredni mikro (rasterećujući) 📊Svi testovi uključeni: •Reakcija na signal •Brzina odluke u igri •Agility T-test 📚Normativi + poređenje  dati uz svaki test Individualizacija po poziciji je u tabeli sledeće ako želiš.📌 N                  NOVI STANDARD:✅ Za svaku poziciju i svakog igrača unutar nje : PozicijaIgračTest rezultatDeficit / potrebaVežbaSerije x ponavljanjaIntenzitet / trajanjeNapomena PGA5-10-5 = 5.25sspora promena pravcaCOD shuffle + otpor4x10m90% maxfokus na kuk PGBCMJ = 44cmdobar skok, slab coreisometric hold + duel 1v13x5s + 3x4RPE 7stabilnost I                    INDIVIDUALIZACIJA – POZICIJA: PLEJMEJKER📋 IgračTest rezultatiIdentifikovan deficitVežba 1Vežba 2Vežba 3Serije x ponavljanjaIntenzitet / napomena PG-A5-10-5 = 5.25s CMJ = 42cm Reakcija >0.35sSlaba promena pravca + kasna odlukaCOD lateral shuffle + otporDuel reakcija na svetlosni signalPas iz kretanja pod pritiskom3x8m 4x10'' 3x690% max Reakcioni rad Fokus na kuk PG-BCMJ = 45cm Reakcija <0.3s T-test = 9.6sBrz, ali slab core u close- outuWall sit izometrija sa rotacijomSkok + doskok sa pivotomClose-out duel 1v13x30'' 3x6 4x10''RPE 8 Izdržljivost + stabilnost Težište nisko 🔍Analiza: •PG-A je reaktivan kasno → vežbe sa svetlom i šablonima •PG-B je brz, ali puca u duelu → vežbe za core i nisku stabilnost 📚Izvori: •Human Kinetics: "Basketball Strength & Conditioning" •NSCA Testing Protocols •Tvoja knjiga: “Kretanje od tačke A do B” + “Close-out biomehanika” Sledeće pozicije:📌 🔜Bek (SG) 🔜Krilo (SF) 🔜Krilni centar (PF) 🔜Centar (C) 🔄COD = Change of Direction (Promena pravca) Šta zapravo znači:📌 •Sposobnost da brzo i kontrolisano  promeniš pravac kretanja •Bez gubitka ravnoteže, brzine i kontrole tela 🧠 U praksi: •Kada plej bekne iz pravca i „baci” protivnika u prazno •Kada igrač uradi close-out, stane i odmah krene lateralno •U defanzivnom slajdu, pick’n’roll promeni pravac ili u napadu → eurostep Test koji meri COD:📊 •5-10-5 agility test •T-test •Ili bilo koja vežba sa: sprint → kočenje → promena pravca → ubrzanje Ključne tačke iz tvoje knjige koje podržavaju COD:📚 •“Kretanje od tačke A do B” mora imati prenos brzine kroz zglobove •Stabilnost u skočnom zglobu i kuku  je ključ za efikasnu COD •Trening mora sadržati i reaktivne elemente  (svetlo, partner, nepredvidivost) INDIVIDUALIZACIJA – POZICIJA: BEK (SG)📋 IgračTest rezultatiIdentifikovan deficitVežba 1Vežba 2Vežba 3Serije x ponavljanjaIntenzitet / napomena SG-ACMJ = 44cm Skok u dalj = 2.15m Agility T = 9.7sDobar skok, slab doskok i duelni balansSkok sa kontrolisanim doskokom + balansDuel 1v1 u kutiji 3x3mStep-back sa otporom4x4 3x30'' 3x6RPE 7–8 Kontrola + duelna adaptacija SG-BReakcija >0.35s 5-10-5 = 5.30s CMJ = 41cmKasna odluka + spora promena pravcaCOD shuffle u obrani (reaktivno)Duel pas- reakcijaIzdržaj u pivotu + pas3x10m 4x4 3x30''Fokus na stabilnost Reakcija i eksplozija 🔍Analiza: •SG-A: ima kapacitet, ali loše prenosi silu → doskok i duel •SG-B: reaktivno slab → fokus na odlučnost i zglobnu kontrolu 📚Izvori: •Tvoja knjiga: biomehanika doskoka + lateralno kretanje •NSCA COD i agility normativi •Human Kinetics – "Agility and Movement Systems" INDIVIDUALIZACIJA – POZICIJA: KRILO (SF)📋 IgračTest rezultatiIdentifikovan deficitVežba 1Vežba 2Vežba 3Serije x ponavljanjaIntenzitet / napomena SF-ACMJ = 45cm Skok u dalj = 2.25m Reakcija = 0.32sDobar skok, slab lateralan rad kukovaLateralna promena pravca sa otporomBočni doskok sa zadrškomPas + dribling u 3 pravca4x6 3x6 3x3 min blokFokus na kuk, stabilizaciju i prelaz u igru SF-BCMJ = 48cm Agility T = 10.2s 5-10-5 = 5.40sJak vertikalno, slab horizontalno i kod odlukeDuel 1v1 iz tranzicijeIzlazak iz bloka sa šutemBrzi pas iz kontakta4x4 3x6 3x10RPE 8–9 Ritam igre + duel pod zamorom 🔍Analiza: •SF-A: mobilan vertikalno, ali slab u lateralnim kretanjima → fokus na kuku i reakciji •SF-B: eksplozivan, ali sporo odlučuje → reaktivni i taktički rad sa kontaktom 📚Izvori: •Tvoja knjiga: “aktivna mobilnost”, “balans + stabilnost = pokret” •Human Kinetics – "Basketball Movement Training" •NSCA COD/Agility istraživanja INDIVIDUALIZACIJA – POZICIJA: KRILNI CENTAR (PF)📋 IgračTest rezultatiIdentifikovan deficitVežba 1Vežba 2Vežba 3Serije x ponavljanjaIntenzitet / napomena PF-ACMJ = 47cm Skok u dalj = 2.30m 10m sprint = 2.00sLoš kontakt u odbrani i nestabilan centar težištaGuranje sanki (short burst)Duel 1v1 rameni kontaktIzdržaj + rad sa medicinkom (rotacija)4x15m 3x20'' 3x6RPE 8–9 Stabilnost trupa + duel agresija PF-BCMJ = 50cmLoša lateralna pokretljivost + Pas iz pozicije Lateralan iskorak + Post-up pivot 3x5 3x6Reakcioni rad + IgračTest rezultatiIdentifikovan deficitVežba 1Vežba 2Vežba 3Serije x ponavljanjaIntenzitet / napomena T-test = 10.5s Reakcija = 0.36szakasnele odluke(bez driblinga )udarac u zidreakcija4x4promena oslonca INDIVIDUALIZACIJA – POZICIJA: CENTAR (C)📋 IgračTest rezultatiIdentifikovan deficitVežba 1Vežba 2Vežba 3Serije x ponavljanjaIntenzitet / napomena C-ACMJ = 52cm 10m sprint = 2.05s Skok u dalj = 2.10mDobar vertikalno, slab lateralno i pri close-outuDuel 2v2 iz low postaBrzi iskorak sa rukom goreReaktivna rotacija kuk – rame3x3 4x5 3x8Fokus na lateralni balans i distribuciju sile C-BCMJ = 49cm T-test = 10.8s Reakcija >0.35sSporo prebacivanje težine, kašnjenje kod rolaDrop step sa kontaktomShadow obrana sa preprekom2v2 sa prebacivanjem zaduženja3x4 3x30'' 2x6 minRPE 7–8 Kompaktna obrana i komunikacija ZA VRŠENO: Kompletna individualizacija za sve 5 pozicija✅ Pozicija☑ Broj☑ igrača Vežbi po☑ igraču Individualna☑ korekcija Test +☑ normativ Plejmejker23✔ ✔ Bek23✔ ✔ Krilo23✔ ✔ Kr. centar23✔ ✔ Centar23✔ ✔ 📚Utemeljeno na: •Tvoja knjiga – biomehanika, dijagnostika, struktura pokreta •Human Kinetics (2018–2024) •NSCA Performance Journals •EBP i NBA Combine arhive R                   RASTEREĆUJUĆI MIKROCIKLUS (Mikrociklus E) Cilj: Regeneracija uz korekciju deficita. Održavanje forme bez opterećenja CNS-a. Individualizacija po poziciji i test statusu. 🧠 OPŠTI OKVIR MIKROCIKLUSA Dan Cilj dana Fokus sistema PonedeljakAktivni oporavak + mobilnost CNS + fascijalni sistem UtorakCore + propriocepcija + balans Stabilizacija SredaLagana brzina + lateralna pokretljivost Lokomotorni sistem ČetvrtakReakcija + vizuelna obrada Neuro-integracija PetakPasivna i aktivna relaksacija Regeneracija SubotaDuelni minimum + taktička vizualizacijaKognitivno-taktički transfer NedeljaTest + subjektivna procena (1–5) Refleksija i planiranje TABELA – PLEJMEJKERI📋 IgračDeficitVežba 1Vežba 2Vežba 3Serije x ponavljanjaNapomena PG-ASpora promena pravcaLateral glide sa otporomWall press reakcijaHodanje unazad na prstima3x10m 3x20'' 2x20mFokus na skočni zglob i kuk PG-BSlab core u dueluBird dog + loptaPallof pressPlank sa pokretom šake3x8 3x12 3x30''Disanje + stabilizacija TABELA – BEKOVI📋 IgračDeficitVežba 1Vežba 2Vežba 3Serije x ponavljanjaNapomena SG-ASlab doskokDoskok sa stajanjemBalans na jednoj nozi + pasZadnja loža – TRX curl3x6 3x10 3x8Kontrola kolena SG-BKasna odlukaRefleks svetloPartner pas – povratVizuelno skeniranje sa pivotom3x10'' 4x6 3x5Vizuelno + kognitivno TABELA – KRILA📋 IgračDeficitVežba 1Vežba 2Vežba 3Serije x ponavljanjaNapomena SF-ASlab lateralni balansIskorak bočni sa zadrškomLateralni doskok + rameUže – niska pozicija3x6 3x8 2x30''Težište nisko SF-BSlaba odluka pod zamoromPas iz zamora (niz stepenice)Šut pod rotacijom telaKrugovi – 3 zadatka3x4 3x4 3x1minCNS izazov + fokus TABELA – KRILNI CENTRI📋 IgračDeficitVežba 1Vežba 2Vežba 3Serije x ponavljanjaNapomena PF-ASlab kontaktRameni otpor na ziduDuel sa gumenim pojasomSled push short burst3x15'' 4x4 3x10mAktivacija ramena PF-BSlab vizuelni odgovor3 signala – 1 odlukaLaserska reakcija (tablet)Kretanje po glasu3x5 3x6 2x2minTrening pažnje TABELA – CENTRI📋 IgračDeficitVežba 1Vežba 2Vežba 3Serije x ponavljanjaNapomena C-ASlab balans kod close-outaStajanje na balansu + pasObostrana rotacija trupaZatvorenih očiju catch3x30'' 3x10 3x6Fokus na zglobne senzore C-BSpora reakcija kod preuzimanja2v2 bez driblingaVizuelni test + pivotGlasovna komanda za rotaciju3x6 3x3 3x1minTimska obrambena dinamika 🧠 NAPOMENE • Na kraju ciklusa vrši se 📌 test kretne kontrole  (tvoja tabela + 1 test po izboru trenera) •🧠 Igrači ocenjuju oporavak (skala 1–5) + trener dopunjava napomene • Dan 5 uključuje i 🎧 vođenu relaksaciju (audio) „Utakmica ne prašta grešku u planiranju. Takmičarski mikrociklus mora biti oblikovan tako da: •fizički sačuva igrača, •taktički ga pripremi, •a mentalno rastereti. Ako se trenira kao da nema utakmice, ona će te kazniti. Ako se odmara kao da utakmica nije važna — već si izgubio.“ „Najteže je tempirati formu kada igraš dve utakmice, jer tu forma više nije samo fizička — ona je informacija, obrada i hrabrost u donošenju odluke.“ Tvoj deo u knjizi govori o:📌 •Preciznom pozicioniranju utakmica u ciklusu •Tejperingu forme (naglo obaranje intenziteta 48h pre meča) •Individualnoj adaptaciji opterećenja  na osnovu prethodnih mikrociklusa •Održavanju CNS svežine  bez gubitka „takmičarskog tonusa“ V ozi! 🏁 📅MIKROCIKLUS F – TAKMIČARSKI (Formula 1 modul) Sedmica sa 2 utakmice – sreda i subota. Sve je podređeno tempiranju forme, regeneraciji i taktičko- mentalnoj jasnoći. Nema improvizacije. 🧠 OPŠTI PLAN DANA Dan Fokus Cilj PonedeljakTehničko-taktički + kontakt Aktivacija + zadaci za meč 1 UtorakTejper + psihološka priprema CNS rasterećenje + fokus SredaUTakmica (npr. derbi) Maksimalna izvedba ČetvrtakOporavak + korektivni minimum Vraćanje balansa PetakBrzi tehnički ritam + taktička probaPriprema za meč 2 SubotaUTakmicaTempirana eksplozivnost + timski fokus NedeljaIndividualna refleksija + video Samoevaluacija i mikrokorekcije 🧠 PRIMER: INDIVIDUALIZACIJA – KRILNI CENTAR (PF) IgračPonedeljak UtorakČetvrtakPetakNapomena PF-ADuel 2v2 + šut Mobilnost + Hodanje Duelna CNS rasterećenje IgračPonedeljak UtorakČetvrtakPetakNapomena nakon kontaktawall press + disanjeunazad + plank rotacijareakcija (nisko težište)dan pre meča PF-BDuel 1v1 iz rola + skok šutVizuelni impuls + pivot reakcijeTRX izdržaj + wall ball pressOgraničeni dribling 3v3Fokus na ramenom pojasu RASPIS – UTORAK (Tejper)📋 Element AktivnostSerije x PonavljanjaIntenzitet AktivacijaDinamičko zagrevanje + 3D mobilnost1x10 min 60% RPE Tehnički deo3x3 „samo 1 dribling” 4x2 min 75% RPE Taktika5v5 pozicioni + 3 situacije 3x5 min 70% ZatvaranjeDisanje + istezanje 1x8 min <50% TAKTIČKI FOKUS (IGRAČKI):📌 Pozicija Fokus PGDecision making pod pritiskom + nisko držanje SGPas iz rotacije + promena tempa SFBackdoor + duel u tranziciji PFClose-out pod uglom + post-up reakcija CSwitch + drop i komanda iz reketa 🧠 NEDELJA – REFLEKSIJA • Igrač dobija 2 video klipa (najbolja i najslabija odluka)🎥 • Ispunjava mikro-upitnik: „Kako sam se osećao fizički i taktički?”📋 • Trener ubacuje zapažanje → 📊 planira mikro-doradu za sledeći ciklus Reference:📚 •Tvoja knjiga: “Tempiranje forme – ne gubiš ništa, dobijaš sve” •Human Kinetics – Basketball Periodization for Competitive Weeks •NSCA – Recovery and Game Load Reports V ozi! 🏁 📘DOPUNJEN I KOMPLETIRAN – TAKMIČARSKI MIKROCIKLUS (F) Verzija po tvojoj meri: detaljno, dan po dan, poziciono, citirano i usmereno ka vrhuncu forme. STRUKTURA DANA U MIKROCIKLUSU F📅 DanCilj danaFiziološki sistemRPE ciljPsihološki okvir PonedeljakAktivacija + taktička ugradnjaLokomotorni + CNS6–7“Pali motor” – prelaz iz rasterećenja UtorakTejper + mikro-detalji + disanjeCNS rasterećenje4–5„Mir pred trku“ Sreda UTAKMICA 1 (npr. 🎯 derbi)Celo telo + kognitivni9–10Fokus, odlučnost, bez analize tokom ČetvrtakAktivni oporavak + refleksijaMetabolički + fascijalni3–4“Gume se hlade – ti sumiraš” PetakKratki eksplozivni tehnički blokCNS priprema5–6“Samo ritam – ništa novo” Subota UTAKMICA 2 (npr. 🎯 protivnik slabiji)Fizička adaptacija8–9Očuvaj kvalitet – bez pada fokusa NedeljaSubjektivna analiza + plan za daljeIntegracija2–3Samoprocena, prilagođavanje, refleksija PRIMER – INDIVIDUALIZACIJA (POZICIJA: PG)📋 Dan PG-A PG-B Ponedeljak2v2 + šut iz bloka + vizuelna reakcijaPick’n’roll 2v1 + pas u trku + balans UtorakLateralni skip + pivot + glasovni signalRefleks na svetlo + šut iz okreta ČetvrtakHodanje na prstima + core disanje Bird dog + stretching fleksora PetakDribling sa 2 lopte + pas iz zamora Duel 1v1 “1 dribling” Citat (ponedeljak):💬 “U utakmici gubiš zbog detalja koje si preskočio u ponedeljak.” — Simbion BRA VO. INTENZITET PO DANIMA (RPE & MINUTAŽA)📊 DanRPEMinutaža Ponedeljak6–760’ Utorak4–545’ Sreda9–1040’ + utakmica DanRPEMinutaža Četvrtak3–430’ Petak5–650’ Subota8–935’ + utakmica Nedelja2–320’ Ugrađene reference📚 •Knjiga “Fizička priprema košarkaša” : Mikrociklus F kao dinamički balans forme i oporavka •Human Kinetics (2021) : Periodization for Performance •NSCA (2023): “Competition Week Structures in Elite Basketball” Mikro                   Mikrociklus F – takmičarska sedmica, kompletan raspis po danima za PG, SG, SF , PF i C. PONEDELJAK – Aktivacija + taktička ugradnja📅 PozicijaFokus treninga Vežba 1 Vežba 2 Vežba 3 PGReakcija u tranziciji2v2 u 4 linijePas na 3 signalaDribling iz zamora SGŠut iz kretanja3x3 sa promenom straneSpot-up 5 pozicijaŠut pod rotacijom SFDuelna tranzicijaPovlačenje iz kontranapadaBrzi otpor u 1v1Vizuelna obrana PFPost rotacija + šutPost-up 2v2Roll+šut + duelDuel sa kontakt loptom COdbijanje + skokBlok-out 1v1Pas nakon skokaDuel pod obrtnim pivotom UTORAK – Tejper + mikro-detalji📅 PozicijaVežba 1 Vežba 2 Vežba 3 PGHodanje unazad + disanje Pivot bez pogleda Vizuelna obrada SGŠut posle obrtnog driblingaRefleks + pas Refleks na svetlo SFReakcija + duel Leptir pas + izmena Vizuelni glasovni test PFMobilnost kuka Balans iz iskoraka Roll + pivot bez šuta CCore aktivacija Težinski balans stopalaRotacija + pivot low post ČETVRTAK – Oporavak + korekcija📅 Pozicija Vežba 1 Vežba 2 PGWall sit + pas Hodanje + rotacija SGBird-dog + pivot Refleks svetlo SFJednonožni balans + lopticaVizuelni zadatak “2 zadatka” PFSled push lagani Rameni potisak bez težine CTRX zatezanje + balans Disanje dijafragmom PETAK – Kratki eksplozivni tehnički blok📅 PozicijaVežba 1 Vežba 2Vežba 3 PGBrzi dribling + šut Duel u 3 poteza1v1 reakcija SGCatch&shoot 5 pozicija Pas + iskorakDuel 1v1 iz deficita SFDuel iz korneraPovlačenje + pasŠut pod kontaktom PFZatvaranje def. rotacije 2v2 iz postaBrzo preuzimanje CObrambeni pomak + pivotDuel 1v1Skok + pas 📘 MIKROCIKLUS G – KUP / PLAYOFF 🎯"Ili ideš u finale, ili ideš kući." OPŠTI RASPIS (Utakmica: utorak + petak)📅 Dan CiljRP EFokus PonedeljakTejper + scenariji utakmice 5Taktika + mikro eksplozija UtorakUTAKMICA 1 (četvrtfinale) 9Fokus, rezultat, ništa drugo SredaAktivni oporavak + analiza 2–3CNS rasterećenje + mikro video ČetvrtakMini priprema za sledeći duel 4–5Specifične situacije, protivnička struktura PetakUTAKMICA 2 (polufinale/finale)9Maksimalni fokus, sve je spremno SubotaTotalni reset + refleksija 1–2Pauza za mozak i telo NedeljaKratka tehnička + psihološki tuning3–4Vizuelizacija, disanje, refleksija 🧠 STRATEGIJE: • 🎯Dan -1: Tejper = nema učenja, samo osvežavanje •🧠 Dan +1: Test – ne fizički, već kognitivni: “šta sam mislio, kako sam reagovao” • 🎥Video u 3 klipa: najbolja odluka, greška, nesvesna reakcija •🧠 Vežbe disanja i reset protokoli : 2x dnevno po 6 minuta INDIVIDUALNI PRIMER (POZICIJA: SF – KRILO)📋 DanVežba 1 Vežba 2 Napomena PonDuel u 3 pravca Brzi pas pod rotacijom Scenariji: early offense i switch SreFoam roll + reaktivni pivotVizuelni refleks sa svetlomFokus: rameni oporavak ČetDuel 2v2 bez driblinga Pick and roll čitanjeProlaz kroz situacije iz prethodne utakmice `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "PRIPREMNI PERIOD (6–10 nedelja)🔷",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex10",
    name: "📘",
    nameEn: "Exercise 10 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `PRODUŽENI MIKROCIKLUS 🔎Definicija: Kada standardni 7-dnevni mikrociklus mora da se proširi ili sabije zbog: •utakmica van ritma (utorak i petak, pa nedelja) •reprezentativnih pauza •povreda i oporavka •specifične adaptacije na visinu, promenu uslova 📦Struktura: DanTip dana Fokus RPE PonedeljakTaktički laganPregled utakmice, vizuelizacija3–4 UtorakUTAKMICA Maksimalna izvedba 9 SredaAktivni oporavakFascia, CNS, pasivna refleksija2 ČetvrtakKratki tehnički dan Ritam, balans 5 PetakUTAKMICA Adaptacija + duelna oštrina 9 SubotaTotalni reset Regeneracija bez stimulusa 1–2 NedeljaIndividualizacija Po poziciji / testovima 4–5 PonedeljakPovratak u redovan ritam Pregled ciklusa, planiranje 3 🔧Upotreba: U planu i programu koristi se kao: • “Tampon” ciklus❗ • “Prilagodbeni most” između mezociklusa🔁 •🧠 Reset jedinica za CNS `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "📘",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex11",
    name: "TRENAŽNI DAN – FUNKCIONALNA JEDINICA📘",
    nameEn: "Exercise 11 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `🎯Cilj: Jasno strukturisan dan u skladu sa ciklusom (mikro/mezociklus) 🧠 Struktura: SegmentTrajanje Sadržaj Uvodni deo10–15 minDinamičko zagrevanje + mobilnost Glavni deo A15–25 minFizička komponenta (snaga, brzina, balans) Glavni deo B20–30 minTehničko-taktički fokus Završni deo10–15 minDisanje, mobilnost, regeneracija Svaki deo je vezan za:📌 •RPE ciljani raspon •Sistem tela (npr. CNS, fascija, mišić) •Test koji meri njegov efekat P📘 Poglavlje: Vežbe na terenu za košarkaše `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "TRENAŽNI DAN – FUNKCIONALNA JEDINICA📘",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex12",
    name: "🔹Stabilizacija i kontrola pokreta od tačke A do tačke B",
    nameEn: "Exercise 12 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `🎯Cilj vežbe: •Aktivacija centralne stabilizacije (core) kroz dinamičko kretanje •Kontrola promene pravca i ravnoteže •Primena u tranziciji i defanzivnim korekcijama 🧠 Biomehanička analiza: 🔸Sagitalna ravan: •Dominantno uključeni: rectus femoris, gluteus maximus, erector spinae •Pokret u smeru napred–nazad: istovremena fleksija i ekstenzija u kukovima i kolenima •Rizik: preuranjena fleksija trupa → gubitak stabilnosti 🔸Horizontalna ravan: •Kontrola torzije trupa u promeni pravca •Obavezna aktivacija obliquus externus/internus + transversus abdominis •Ravnoteža između hemisfera pokreta – leva/desna asimetrija korektovana 🧠 Verzije vežbe: Verzija OpisOpterećenje Cilj `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "🔹Stabilizacija i kontrola pokreta od tačke A do ta",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex13",
    name: "BW",
    nameEn: "Exercise 13 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `(Bodyweight)Bez rekvizita, samo fokus na tehnikuBezNaučiti obrazac `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "BW",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex15",
    name: "TRX/Trake Otpor u fazi rotacije srednji otporAktivacija core",
    nameEn: "Exercise 15 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `stabilizatora `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "TRX/Trake Otpor u fazi rotacije srednji otporAktiv",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex16",
    name: "Sani/Push sled Guranje u A–B pravcu 50–70% BWSnaga + stabilnost",
    nameEn: "Exercise 16 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `📊Doziranje i struktura po poziciji (primer): PozicijaSerijePonavljanjaPauzaFokus zona PG36–8 / strana45sbrzina reakcije + balans SG3–46–1045–60skoordinacija SF48–1260slateralna kontrola PF4–510–1260–75sekstenzija + core stabilnost C4–510–1260–90sstabilnost u kontaktu 🗂Mikrociklus primena: •Uvodni mikrociklus:  BW varijanta sa fokusom na obrazac •Bazni: KB + trake, rotacija i stabilizacija •Specifični: Sani push → simulacija defanzivnog closeout-a •Udarni: Sani + TRX kombinacija → 2 serije u superset modulu •Takmičarski: smanjena doza, samo BW u pripremnom delu Vežba se povezuje sa testovima:📎 •CMJ → eksplozivna snaga nogu •Y Balance → posturalna kontrola •COD → promena pravca •Plank hold → izdržljivost core-a V `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Sani/Push sled Guranje u A–B pravcu 50–70% BWSnaga",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex17",
    name: "Lateralan iskorak + rotacija trupa (kontrola u frontalnoj ravni)",
    nameEn: "Exercise 17 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `🎯Cilj vežbe: •Poboljšanje lateralne stabilnosti i mobilnosti •Priprema za lateralan closeout, izbijanje iz drop pozicije i bočna rotacija u odbrani •Kontrola torzije u frontalnoj ravni 🧠 Biomehanička analiza: 🔸Sagitalna ravan: •Lagani iskorak → kontrolisana fleksija kolena i kukova (vastus lateralis, gluteus medius) •Zadržavanje neutralne kičme (erector spinae), aktivacija abdominalnog zida 🔸Horizontalna ravan: •Rotacija trupa preko lumbalne osovine → rotatori (obliquus externus + internus) •Stabilnost bazna: stabilizatori kolena i skočnog zgloba (peroneus longus/brevis) 🔸Frontalna ravan: •Glavni nosilac kontrole – tu se događa “kolaps” ako nema balansa •Abduktori, glute medius, aduktori u kontroli pada i vraćanja 🧠 Verzije vežbe: Verzija Opis Opterećenje Cilj `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Lateralan iskorak + rotacija trupa (kontrola u fro",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex18",
    name: "BW lateral lungeBez opterećenja, fokus na",
    nameEn: "Exercise 18 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `mehanikuBezStabilnost i obrazac Verzija Opis Opterećenje Cilj `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "BW lateral lungeBez opterećenja, fokus na",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex20",
    name: "Rotacijska",
    nameEn: "Exercise 20 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `medicinkaBaca se u zid iz rotacije (3– 5kg)visokoSnaga + reaktivna rotacija `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Rotacijska",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex21",
    name: "Traka otporaPovratak iz iskoraka uz",
    nameEn: "Exercise 21 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `lateralan otporsrednjiNeuromišićna aktivacija 📊Doziranje i struktura po poziciji (primer): PozicijaSerijePonavljanjaPauzaFokus zona PG35–7 / strana30–45sreakcija i ravnoteža SG3–46–845slateralna mobilnost SF48–1060slateralna snaga PF410–1260–75skontrola iskoraka C510–1275–90sstabilnost u post-up situaciji 🗂Mikrociklus primena: •Uvodni: BW varijanta, korekcija kolena i stopala •Bazni: KB + traka → korekcija ravnoteže •Specifični: medicinka iz rotacije (uparen sa sprint iskorakom) •Udarni: kombinacija KB + traka + reaktivna medicinka •Takmičarski: redukovan volumen, fokus na reaktivni balans 🔬Povezani testovi: •Y Balance test → kontrola prilikom bočnog pomeranja •COD (change of direction)  → lateralan impuls •Jump Lateral Distance  → lateralna eksplozija •Single Leg Plank Reach  → stabilnost + koordinacija V `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Traka otporaPovratak iz iskoraka uz",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex22",
    name: "Skok iz čučnja + doskok u balans (CMJ sa zadrškom)",
    nameEn: "Exercise 22 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `🎯Cilj vežbe: •Razvijanje eksplozivne snage donjih ekstremiteta •Kontrola doskoka → prevencija povreda •Funkcionalna stabilizacija i proprioceptivna svest 🧠 Biomehanička analiza: 🔸Sagitalna ravan: •Startna pozicija: duboki atletski čučanj (aktivacija gluteus maximus, quadriceps, gastrocnemius) •Eksplozivni uzlet: generacija sile od stopala → koleno → kuk •Doskok: ekscentrična kontrola i aktivacija core stabilizatora 🔸Horizontalna ravan: •Blaga rotacija u doskoku (posebno kod jednonoge varijante) → izaziva stabilizaciju •Neutralna pozicija karlice — rizik od kolapsa ako je gluteus slab 🧠 Verzije vežbe: Verzija Opis Opterećenje Cilj `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Skok iz čučnja + doskok u balans (CMJ sa zadrškom)",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex25",
    name: "DB Loaded",
    nameEn: "Exercise 25 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `JumpSkok sa tegovima (2x5–10kg) srednjiEkstremna snaga `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "DB Loaded",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex26",
    name: "Single Leg",
    nameEn: "Exercise 26 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `CMJSkok s jedne noge, doskok u ravnotežunaprednoAsimetrija, prevencija 📊Doziranje i struktura po poziciji (primer): PozicijaSerijePonavljanjaPauzaFokus PG34–645sBrzina eksplozije SG3–45–745–60sKontrola doskoka SF46–860sIzdržljivost eksplozije PF4–56–1075sSnaga i stabilnost C4–56–890sDoskok i balans 🗂Mikrociklus primena: •Uvodni: CMJ + hold → korekcija tehnike doskoka •Bazni: DB Loaded Jump → ekstenzija u snazi •Specifični: Single Leg CMJ sa horizontalnim pomakom •Udarni: Serije CMJ + sprint reakcija (kompleks metoda) •Takmičarski: 2–3 skoka u zagrevanju za nervnu pripremu 🔬Povezani testovi: •CMJ test → jasno praćenje progresije •T-test → integracija eksplozije i lateralnog pokreta •Plank + doskok → dinamička kontrola trupa •L-Sit Skok → aktivacija core pri skoku V `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Single Leg",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex27",
    name: "Sprint – COD – reakcija (Change of Direction + vizuelni stimulus)",
    nameEn: "Exercise 27 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `🎯Cilj vežbe: •Razvijanje brzine reakcije uz promenu pravca •Tranzicija iz sprinta u lateralni pokret •Integracija vida, odluke i tela u jednom pokretu 🧠 Biomehanička analiza: 🔸Sagitalna ravan: •Početni sprint (gluteus, quadriceps, soleus) → eksplozija iz prednje noge •Nagla promena pravca → ekscentrična kontrola zadnje lože + gluteusa •Ponovni uzlet → reaktivna snaga 🔸Frontalna ravan: •Drop step + lateralni izlaz → abduktori i aduktori u sinergiji •Potencijalna slabost kolena ako ne postoji stabilna aktivacija core-a 🔸Horizontalna ravan: •Torzija trupa u skretanju → uključeni rotatori trupa i gluteus medius 🧠 Verzije vežbe: Verzija Opis Oprema Cilj `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Sprint – COD – reakcija (Change of Direction + viz",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex28",
    name: "Sprint → COD5–7m sprint, zatim 90° promena",
    nameEn: "Exercise 28 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `pravcačunjeviOsnovna biomehanika `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Sprint → COD5–7m sprint, zatim 90° promena",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex29",
    name: "Sprint → COD",
    nameEn: "Exercise 29 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `+ svetloReaguje se na boju svetlavizuelni stimulusReakcija + brzina `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Sprint → COD",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex30",
    name: "Sprint → COD",
    nameEn: "Exercise 30 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `+ loptaLopta baca smer lopta, partnerRealna igra `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Sprint → COD",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex31",
    name: "Sprint → COD",
    nameEn: "Exercise 31 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `+ vežbaNakon skretanja radi se iskorak, skok, pushkompleksReaktivna snaga i umor 📊Doziranje po poziciji: PozicijaSerijePonavljanjaPauzaFokus PG43–545sOdluka + brzina SG43–545sReaktivni pokret SF4–54–660sPromena pravca PF54–660–75sBalans u skretanju C53–475sKontrola tela 🗂Mikrociklus upotreba: •Uvodni: samo sprint + COD (nisko opterećenje) •Bazni: + svetlosni stimulus → usmerenje pažnje •Specifični: reakcija na loptu u igračkom kontekstu •Udarni: sprint → COD → vežba (kombinacija) •Takmičarski: 1–2 serije za neurora aktivaciju 🔬Testovi povezani: •COD Test (505) → osnova za merenje •Simple Reaction Test  → brzina odluke •Jump + COD → povezivanje vertikalne sile i bočne eksplozije •Plank Reach → Sprint  → kombinovana aktivacija `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Sprint → COD",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex32",
    name: "T-cross sa opterećenjem + balans doskok (reakcija + stabilnost)",
    nameEn: "Exercise 32 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `Vežba koja spaja eksplozivnost, koordinaciju, snagu i kontrolu pokreta – sve u realnom igračkom obrascu. 🎯Cilj vežbe: •Vežba za kontrolu pokreta u više ravni pod opterećenjem •Integracija neuromuskularnog odgovora (reakcija → pokret → doskok) •Simulacija game-like situacije: naglo menjanje smera i usporavanje 🧠 Biomehanička analiza: 🔸Sagitalna ravan: •Pokret ka napred i nazad – dominantna aktivacija gluteusa, kvadricepsa, core stabilizatora •Doskok: ekstenzija u kolenu + fleksija kuka → absorpcija sile 🔸Frontalna ravan: •Lateralni izlaz i povratak – abductori i adductori stabilizuju pokret •Osovina koleno–kuk mora biti očuvana (prevenira valgus i povredu ACL) 🔸Horizontalna ravan: •Trup rotira u fazi izlaska i ulaska u centralnu zonu •Aktivacija transversus abdominis + obliquus internus i externus 🧠 Verzije vežbe: Verzija Opis Oprema Cilj `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "T-cross sa opterećenjem + balans doskok (reakcija ",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex34",
    name: "T-cross +",
    nameEn: "Exercise 34 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `medicinkaMedicinka u rukama (3–5kg) MBDinamički balans `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "T-cross +",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex35",
    name: "T-cross + loptaReakcija na signal i",
    nameEn: "Exercise 35 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `dodavanje lopteloptaSenzomotorna integracija `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "T-cross + loptaReakcija na signal i",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex36",
    name: "T-cross + balans",
    nameEn: "Exercise 36 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `doskokNa kraju svakog izlaza → balans 3 sekundebalans platformaKontrola pokreta 📊Doziranje po poziciji: PozicijaSerijePonavljanjaPauza Fokus PG34–630–45sBrzina + doskok SG45–745sPromena smera SF45–860sSnaga lateralnog pokreta PF56–860–75sEksterni balans C56–1075sCentralna stabilnost i težina tela 🗂Mikrociklus primena: •Uvodni: T-basic bez opterećenja + balans •Bazni: + medicinka → povezanost disbalansa i ravnoteže •Specifični: T + lopta → vizuelna reakcija + pokret •Udarni: Kompletna vežba sa balans doskokom i loptom •Takmičarski: smanjena varijanta → samo balans + reakcija 🔬Povezani testovi: •Balance Reach •COD 505 test •Med ball throw + skok test (reakcija + sila) •Reactive Y agility test Cilj: Reaktivna snaga + lateralna brzina + balans (kod igrača koji imaju neravnotežu u testovima Y-balance + COD) 🧠 Struktura bloka (superset): 1.A1: CMJ sa rotacijom  (eksplozivna snaga) 2.A2: Lateralni iskorak s opterećenjem (KB)  (kontrola + balans) 3.A3: Sprint 5m + COD 90° (na svetlo)  (reakcija i promena pravca) 4.A4: Balans doskok sa zatvorenim očima  (neuromuskularna stabilnost) 📊Doziranje po poziciji: PozicijaSerijePauza po kruguFokus PG345–60sbrzina + odluka SG360seksplozija iz skoka SF475slateralna moć PF475–90sstabilnost C4–590sreaktivni doskok 🔬Povezani testovi: •CMJ → za eksploziju •COD → za kontrolu pravca •Y Balance → za ravnotežu •Reaction Time (svetlo) → za odluku 🧠 Primena u mikrociklusima: •Bazni → 1–2 kruga u glavnom delu •Specifični → kao primarni modul dana •Udarni → uparen sa terenskom simulacijom •Takmičarski → skra ćen u aktivaciju Trenažni blok 2: Funkcionalna snaga + propriocepcija + antifragilnost 🎯Cilj: •Razviti lokalnu i globalnu snagu  kroz realne obrasce •Poboljšati kontrolu pokreta u nestabilnim uslovima •Izgraditi otpornost na zamor, padove i mikrotraume 🔗Struktura bloka (superset sa proprioceptivnim prekidima): 1.A1: TRX iskorak s rotacijom → (core + ravnoteža + unilateralna kontrola) 2.A2: Push sled (guranje sanki) → (eksplozivna snaga donjih ekstremiteta) 3.A3: BOSU skok u balans → (ekscentrična kontrola doskoka + proprioceptivna aktivacija) 4.A4: Plank + throw medicinke → (izometrička stabilnost + eksplozija iz trupa) 📊Doziranje po poziciji: PozicijaSerijePauza po kruguFokus PG360sstabilnost u promeni pravca SG460spropriocepcija i reakcija SF475slateralna snaga PF475–90santifragilnost zgloba C590sravnoteža pri kontaktu 🧠 Biomehaničke tačke: •TRX iskorak → kontroliše torziju i simetriju u kolenima •Push sled → jača glutealni i kvadriceps lanac za “first step” •BOSU → uvodi mikrovibracije koje aktiviraju duboke stabilizatore •Plank + medicinka → izaziva transverzalnu ravnotežu + brzinu 🔬Testovi povezani: •Y Balance •Single Leg Jump •Reactive Plank Hold •Med Ball Chest Throw 🗂Mikrociklus primena: •Uvodni: TRX i BOSU (bez eksplozije) •Bazni: pun blok s TRX + SLED + BOSU •Specifični: A4 ubačen u kružni režim •Udarni: ceo blok + vremenski limit •Takmičarski: samo A1 i A3 za aktivaciju Trenažni blok 3: Konfliktni i kolaborativni moduli (u parovima i trojkama) 🎯Cilj: •Razviti reakciju u telu pod spoljnim uticajem •Uvežbati održavanje balansa i snage u kontaktu •Poboljšati komunikaciju tela i uma  kroz zajednički rad 🔗Struktura bloka (rad u paru ili trojci): 1.A1: Guranje iz čučnja (partner otpor) → funkcionalna snaga, stabilnost, "close-out" pozicija 2.A2: Reaktivna dodavanja iz TRX pozicije (lopta u rotaciji) → rotaciona snaga + vizuelna percepcija 3.A3: Lateralna borba za poziciju (bočno pomeranje s kontaktom) → propriocepcija + kontakt adaptacija 4.A4: Sprint 5m → Reakcija na pokret partnera → kognitivna reakcija i čitanje namere 📊Doziranje po poziciji: PozicijaSerijePon.PauzaFokus PG34–545sčitanje + brzina SG45–645–60svizuelna obrada SF45–760sbočna borba PF4–55–775ssnaga u kontaktu C55–875–90sravnoteža + otpor 🧠 Biomehaničke tačke: •Guranje iz čučnja → gluteus, core, stabilizacija trupa •Reaktivno bacanje → rotatori trupa, pažnja i kontrapokret •Bočna borba → aduktori/abduktori, kontakt stabilnost •Sprint → reakcija na neverbalni signal 🔬Povezani testovi: •Reactive Step Test •Push–pull balance test •Partner mirror drill •Contact Stability Score 🗂Mikrociklus primena: •Uvodni: A1 + A4 bez maksimalnog otpora •Bazni: A1–A3 komplet → sa laganim tempom •Specifični: pun kontakt u parovima •Udarni: 2 vs 1 dinamika → trojka model •Takmičarski: A4 kao deo aktivacije Trenažni blok 4: Neuro-intenzivna izdržljivost (HIIT + kognitivna obrada) 🎯Cilj: •Povezati fizički napor sa brzim donošenjem odluka •Trenirati izdržljivost u uslovima zamora •Jačanje održavanja fokusa i motoričke preciznosti pod pritiskom 🔗Struktura bloka (intervalno + neuro-stimulus): 1.A1: Sprint 20m + odmah COD na svetlosni signal → brzina, reaktivnost, promena pravca 2.A2: Skok u dalj s doskokom + broj zadat od trenera → aktivacija motorike + memorija 3.A3: Štafeta + zadatak (npr. brojanje obrnutim redom) → multitasking u pokretu 4.A4: “Mirror drill” (reakcija na partnera) + mentalni kviz → socijalna i kognitivna obrada pod zamorom 📊Doziranje po poziciji: PozicijaIntervaliPauzaIntenzitet Fokus PG4x20s30s90%Odluke pod pritiskom SG4x25s30s90%Motorika + preciznost SF5x20s30s95%Fokus u zamoru PF5x25s30s95%Reaktivni pokret C5x30s30s90–95%Kontrola disanja i pokreta 🧠 Kognitivne komponente: •Odgovori na vizuelni ili verbalni signal •Rešavanje osnovnih zadataka u toku pokreta •Simulacija “decision-making” u tranziciji •Održavanje forme pokreta uprkos zamoru 🔬Povezani testovi: •Reaction time test (Go/No-go) •Working memory test •Motor dual-task test •Shuttle run sa memorijom brojeva 🗂Mikrociklus primena: •Uvodni: A1 + A2 bez dodatnih zadataka •Bazni: 3 vežbe, 80% intenziteta •Specifični: pun blok sa mentalnim zadacima •Udarni: blok + simulacija igre (npr. 2v2) •Takmičarski: samo A1 + kviz → za oštrenje fokusa Trenažni blok 5: Regeneracija + neuro-relaks + stabilnost (Adaptivni oporavak) 🎯Cilj: •Smanjiti zamor, a ojačati propriocepciju i kontrolu •Resetovati centralni nervni sistem (CNS) •Održati kontinuitet forme bez mikro-oštećenja 🔗Struktura bloka (niz od 5 vežbi – flow): 1.A1: Disanje u deep squat poziciji (90–120 sek) → vagalna aktivacija, otpuštanje napetosti 2.A2: Mobilnost kukova + T-spine (rotacije iz stoja na sve četiri) → vratiti opseg pokreta u kukovima i torziji 3.A3: Static hold (L-sit modifikacija / TRX plank) → duboka aktivacija trupa bez stresa na CNS 4.A4: Balans na nestabilnoj podlozi sa zatvorenim očima → propriocepcija + rekalibracija vestibularnog sistema 5.A5: Flow serija (čučanj → iskorak → hip bridge → plank) → kružno povezivanje pokreta i disanja 📊Doziranje po poziciji: PozicijaTrajanje po vežbi Krugova Fokus PG45s – 60s 2CNS reset + mobilnost gležnja SG60s 2torakalna mobilnost + balans SF60–75s 2–3fleksibilnost + aktivacija PF75s 3otpuštanje donjeg dela leđa C75s 3propriocepcija zglobova + disanje 🧠 Neuro-regulacija uključena: •Disanje (4–7–8), produžena faza izdisaja •Vizuelni fokus → prelazi u zatvorene oči •Vežbe sa niskim koštano-zglobnim stresom •Aktivacija parasimpatikusa → reset sistema 🔬Povezani testovi (evaluacija efekta): •HRV test (Heart Rate Variability) •Standing Balance Test •CNS Tap Test (za zamor) •Active ROM (range of motion) 🗂Mikrociklus primena: •Uvodni: nakon dana pauze, nisko dozirano •Bazni: 2 kruga, 60s po vežbi •Specifični: posle najtežeg dana kao "flush" •Udarni: dan nakon meča za regeneraciju •Takmičarski: uveče pre meča → mentalna priprema ANTIFRAGILNOST? KOLIKO IMA „STAKLENIH IGRAČA“, A KOLIKO TO MI OD NJIH PRA VIMO? AI NE OSEĆA ŠTA U KOM TRENUTKU   NE TREBA   URADITI, ALI SLED VEŽBI MU JE IZV ANREDAN, SA VRŠENA LOGIKA KOJA NAM JE KOREKTIVNI FAKTOR. NARA VNO AKO IMAMO SVOJ PLAN I NE ŽELIMO DA NAM GA PIŠE VEŠTAČKA INTELIGENCIJA. NE TRENERIMAO ROBOTE VEĆ ŽIVE LJUDE KOJI IGRAJU KOŠARKU. SADA JE CEO SISTEM NAPRA VLJEN U NEKOLIKO V ARIJANTI. NISAM ŽELEO DA DOPUNJUJEM AI, JER SV AKI TRENER IMA SVOJU IDEJU I NJOME TREBA DA SE RUKOVODI.“RECEPT“ NE POSTOJI, ALI UVEK POSTOJE PRA VILA KOJE JE NEKO PAMETNIJI POSTA VIO ZA NAS I OV AJ DEO JE NEIZMERNA ZAHV ALNOST FRANJI FRATRIĆU. SPECIJALNA I SITUACIONA FIZIČKA PRIPREMA Razvoj košarke i različitost igrača su 5 osnovnih pozicija umnožili i polivalentnošću košarkaša uslovili nastajanje Situacione fizičke pripreme.  Kakva je razlika između Specijalne i Situacione fizičke pripreme? Specijalna fizička priprema se odnosi na POZICIJU, a SITUACIONA je način kojim košarkaš igra na toj poziciji. Npr. igrač na poziciji 4 visoko krilo koje igra bliže ili dalje od koša.  U  zavisnosti  od  distance  biće  ili  visoko  krilo  ili  krilni  centar.  Distanca,  pokretljivost, preciznost, vreme igranja na drugoj poziciji, ali i fizičke karakteristike određuju zastupljenost vrste fizičke pripreme. Ne možemo trenirati igrača na poziciji 4, brzog, preciznog šutera na način kojim ćemo  trenirati  slabijeg  šutera,  ali  izuzetno  snažnog i  snalažljivog u reketu ili  igrača  kome  je penetration  glavna  karakteristika  kao  šutera  na  istoj  poziciji.  Zavisno  od  načina  na  koji  igra, zavisiće i odnos specijalne i situacione pripreme u fizičkoj pripremi igrača na poziciji 4. Drugi kriterijum je polivalentnost, postoje igrači koji mogu igrati na više pozicija, ne tako uspešno kao na osnovnoj, ali određene taktičke zamisli (neretko i nedostatak igrača na svim pozicijama) diktiraju istom  igraču  određenu  minutažu  na  različitoj  poziciji  u  ekipi.  Brzina  kojom  se  košarka  igra omogućava različite formacije na terenu i višestruku upotrebu igrača. Dostupnost informacija o košarkašima  (pozitivna  uloga  društvenih  mreža)  nam  omogućava  brzo  podizanje  procenta specijalno – situacione fizičke pripreme na račun opšte i specifične. Velika je razlika ukoliko vam od drugog ili trećeg mikrociklusa raste procenat NAJBITNIJIH delova fizičke pripreme jer će od tačke A do tačke B brže dolaziti i KV ALITETNIJE ispunjavati postavljene taktičke zadatke. Da li će to moći 6 ili 7 puta je manje bitno jer su tajm auti, izmene, pauze između četvrtina dovoljno vremena za oporavak, ako smo ih fizički dobro pripremili. Gledajući NBA i EL zaključujem da treneri ili menjaju igrača koji nekoliko minuta dominira na terenu ili prozivaju akcije sa njegovim manjim učestvovanjem. Uglavnom to ponove u svim četvrtinama što nama daje intervale u kojima je igračeva uloga važna. Dobijamo intervalni trening sa pauzama za delimičan oporavak. Košarka je igra u jednom smeru, ali dva pravca, odbrana i napad. To je kriterijum kojim takođe delimo fizičku pripremu. Ne treniramo isto vrsnog napadača i igrača kome su odbrambeni zadaci prioritet. „Lanac je jak koliko je jaka najslabija karika u njemu“, svih 12 igrača treba da budu podjednako spremni, ali nemaju svi ravnomerno podeljenu minutažu. Po pravilu, igrači koji kraće igraju su motivisaniji da treniraju i tu ove dve vrste fizičke pripreme dominiraju, a kraća minutaža na utakmici je suprotna minutaži  na  treningu.  Povezivanje  treninga  individualne  tehnike  i  fizičke  pripreme  će  ubrzati napredak  košarkaša.  Ukoliko  nisu,  imaćemo  odličnog  izvođača  tehničkih  elemenata, antropomotorički izuzetnog, ali na treninzima kolektivne taktike i utakmici skoro ništa od toga neće moći da primeni. Najčešći komentar koji sam čuo u preko 3 decenije karijere je „ima problem u glavi“. Nema, jednostavno nismo povezali ono što on jeste, može i želi, sa adekvatnim treningom. Zašto je neko promašio lak šut, bacio pogrešan pas, napravio individualnu grešku? Zato što mu položaj tela pogrešan, manja ili viša osposobljenost mišića u kinetičkom lancu … puno je razloga, niko nije perfektan i svaki igrač ima svoje jače ili slabije karakteristike. Povezivanje individualne tehnike i fizičke pripreme to ne može da anulitra, ali kroz povišenje mišićnog stimulusa može da pomogne u bržem usvajanju i lakšoj automatizaciji pokreta koji se izvodi. Neke mišiće treba ojačati, neki čak svojim volumenom umanjuju kvalitet tehnike … upravo je to zadatak situacione fizičke pripreme. Analizirati KAKO I ZAŠTO igrač izvodi košarkaške elemente koje ga čine drugačijim od drugih igrača na toj poziciji i prema tome USMERITI trening. Uglavnom to nisu, snaga, brzina i izdržljivost,  a  najčešće  je  to  odnos  između  fleksibilnosti  i  koordinacije.  I  TO  JE  UPORNIM TRENINGOM  NAJLAKŠE  ISPRA VITI.  Fleksibilnost  unapređujemo  aktivnom  mobilnošću,  a koordinaciju (u sezoni) završecima napada na drugačiji način od uobičajenog. Kako? Polaganjem u koš  slabijom  rukom  sa  obe  strane  (sa  jedne  imamo  stabilizaciju  koju  nikako  ne  želimo  da pokvarimo),  na  drugi  obruč  …  bezbroj  kombinacija  koje  obogaćuju  učenjem  i  treniranjem motoričku   inteligenciju  košarkaša.  Isto  je  sa  ostalim  osnovnim  elemenatima  košarkaške individualne tehnike. Jedini limitirajući faktor za situacionu fizičku pripremu je VREME. Osim kod klubova koji igrače od juniora i kasnije seniora zadržavaju 2 polimakro ciklusa, nemoguće je za sezonu izgraditi telo, osposobiti ga za predviđenu ulogu u ekipi. Kako se planira i programira situaciona  fizička  priprema?  Unazad,  ali  ne  od  datuma  već  od  TAKTIČKO  –  TEHNIČKIH zadataka. Primer: Sva  trojica  igrača  igraju  na  poziciji  3  i  na  sličan  način,  zato  počinju  Pripremni  period  istim vežbama.  Grupisanje  igrača  po  pozicijama  i  parametrima  štedi  vreme.  U  sezoni  je  princip individualizacije  dominantan,  situaciona  fizička  priprema.  Koliko  god  su  igrači  slični,  neka antropomotorička osobina ili košarkaška veština ih razlikuje i određuje specijalnu i situacionu fizičku pripremu. Kada imate 3 igrača na istoj ili sličnoj poziciji, skoro identičnih parametara, onda je razlika u situacionoj  fizičkoj  pripremi  ogromna.  Zašto  i  kako?  Zato  što  je  različit  nivo  od  prihvatanja informacija do košarkaških veština. Kvalitet postižemo forsirajući u treningu ono što najbolje igrač može na terenu da sprovede u rezultat. Ukoliko je to šut, onda su u višem procentu zastupljene vežbe koje igraču omogućavaju lakše dolaženje u situaciju za realizaciju. Razlike određuju 30% treninga za igrača, ostalih 70% je skoro identično. Košarkaški treneri određuju zadatke u napadu i odbrani za sve igrače, a razlike koje se temelje na posebnim karakteristikama usmeravaju na koji način i kojim sredstvima fizička priprema osposobljava za izvršenje taktičko tehničkih zadataka. Najteži  deo  su  razlike  u  odbrani  od  pika  i  tranzicije.  Ukoliko  igrač  nije  brz,  ali  je  snažan, postavljanje tela i kontakt su primarni jer neće moći da sustigne napadača ukoliko mu dozvoli da trči. Varijante odbrane od pika uzimaju startno ubrzanje, reakciju, ali i fleksibilnost kao primarne antropomotoričke  osobine  i  svojstva  koje  određuju  način  odbrane,  a  samim  tim  i  situacionu pripremu. SPECIJALNA I SITUACIONA FIZIČKA PRIPREMA Napredak košarke i raznovrsnost igrača doveli su do razvoja situacione fizičke pripreme , koja je usmerena na specifične uslove igre i polivalentnost igrača. Glavna razlika između specijalne i situacione pripreme leži u fokusu: •Specijalna fizička priprema  se odnosi na unapređenje performansi specifičnih za poziciju (npr. igrač na poziciji 4). •Situaciona fizička priprema  oblikuje igru u zavisnosti od načina na koji košarkaš igra na određenoj poziciji. Ključne razlike i primena u treningu •Specijalna fizička priprema: •Fokusira se na zadatke pojedinačne pozicije  (npr. krilni centar fokusiran na snagu u reketu ili šuter na distanci). •Cilj je prilagoditi vežbe karakteristikama igrača, tj. onome što igrača čini uspešnim na toj poziciji. •Situaciona fizička priprema: •Uključuje kako igrač igra na određenoj poziciji  i kako reaguje u različitim taktičkim situacijama. •Polivalentnost igrača zahteva trening za više pozicija (npr. igrač može igrati i visoko krilo i krilnog centra). •Priprema obuhvata zadatke napada i odbrane, kao i situacione promene u igri, poput reakcije u tranziciji  ili odbrane od pika. Individualizacija treninga prema stilu igre Igrači iste pozicije mogu imati različite snage i slabosti. Primera radi, jedan igrač na poziciji 4 može biti brz i precizan šuter , dok drugi koristi snagu i kontakt u reketu . Zato se specijalna i situaciona priprema razlikuju u zavisnosti od načina na koji igraju . Primer: •Igrač 1: Fokus na šut s distance – trening uključuje vežbe za lakše dolaženje u poziciju za šut. •Igrač 2: Fokus na kontakt igru – razvija snagu i položaj tela za duel u reketu. •Igrač 3: Specijalizovan za prodor – vežbe za brzinu i reakciju pri ulazima pod koš. Trening za ovakve igrače uključuje 70% zajedničkih vežbi , dok se 30% prilagođava specifičnim potrebama. Intervalna struktura u situacionoj pripremi •NBA i EL treniraju igrače u intervalima: kratki periodi intenzivne igre s čestim pauzama za delimičan oporavak (pauze, tajm-auti, izmene). •Ovo omogućava brz povratak forme  tokom igre i omogućava rotaciju bez pada intenziteta. Povezivanje fizičke i tehničke pripreme Trening individualne tehnike  mora biti usklađen sa fizičkom pripremom kako bi igrač bio efikasan na terenu. Ako se to ne postigne, možemo imati igrača koji je tehnički obučen, ali nesposoban da to primeni u igri zbog nedovoljno razvijenih fizičkih kapaciteta. Najčešći izazovi u situacionoj pripremi •Koordinacija i fleksibilnost  često su ključni faktori uspeha, više nego snaga i brzina. •Pogrešni pokreti ili greške u položaju tela  mogu biti uzrok neefikasnih izvedbi. •Individualizovani rad  na slabostima igrača ubrzava automatizaciju pokreta i omogućava bolju primenu na utakmicama. Primer treninga za situacionu pripremu Trening za igru u odbrani od pika: •Ukoliko igrač nije dovoljno brz, fokus je na kontakt i postavljanje tela da se spreči napadač. •Varijacije odbrane od pika uključuju: •Startno ubrzanje i reakcija . •Fleksibilnost pri promeni pravca. •Vežbe za brži povratak u odbranu nakon pikenrola. Zaključak Specijalna i situaciona fizička priprema  omogućavaju trenerima da precizno definišu i optimizuju trening  za  svakog  igrača.  Fokusirajući  se  na  individualne  karakteristike  i  taktičke  zahteve, možemo  unaprediti  performanse  i  izgraditi  tim  u  kojem  svaki  igrač  doprinosi  prema  svojim mogućnostima.  Vreme je  jedini  limitirajući  faktor u ovom  procesu, ali  uz  planiranje  treninga unazad – od taktičko-tehničkih zadataka – moguće je postići optimalan napredak. Čete,  tek  sada  možemo  da  pređemo  na  monociklus  u  kome  ćemo  podeliti  tranziciju  po pozicijama i preći u sekundarni kontranapad, ali da li ti uopšte tačno znaš šta je monociklus? Shvatili smo posebnosti igrača i razlike u igri na istoj poziciji i prema košarkaškim zadacima podelićemo vežbe i pokrete od tačke A do tačke B sa potpunim saznanjem šta se dešava na terenu. Šta je Monociklus? Monociklus u periodizaciji je jedna celina unutar mikrociklusa , koja često predstavlja osnovni element trenažne jedinice sa specifičnim zadatkom i strukturom. To je najkraća i najmanja trenažna jedinica koja može trajati od jednog do nekoliko treninga, fokusirana na jedan dominantan cilj ili aspekt treninga. Kako funkcioniše Monociklus? 1.Trajanje: Može trajati jedan trening ili nekoliko povezanih treninga unutar istog mikrociklusa. 2.Cilj: Fokusira se na određeni aspekt fizičke ili tehničke pripreme, kao što su: •Eksplozivnost u skoku, •Brzina reakcije, •Rad na specifičnoj tehnici. 3.Primer: •Trening usmeren na startno ubrzanje u okviru mikrociklusa. •Priprema igrača za tranziciju u situacionom treningu. •Korekcija slabosti, poput asimetrije u snazi nogu. Monociklus je praktičan alat za detaljno prilagođavanje pojedinačnih aspekata trenažnog procesa. Ako želiš, možemo detaljno razraditi jedan monociklus za specifičnog igrača ili određeni trenažni zadatak! Monociklus definisali kao Trenažni dan. Nikada niko nijedan plan nije realizovao bez greške i 100%, zato su monociklusi idealno sredstvo u planiranju i programiranju, ali osim ako duže ne trenirate istu ekipu, monociklusi se približavaju mikrociklusima po zadacima i trajanju. Bolje je ispraviti i održavati nego konstantno ispravljati jer će korekcije biti u nižem procentu na ono što je zadatak određenog dela plana. Igrač ono što ne može da uradi će uvek to lošije raditi, ali ukoliko ga dovedemo do pristojnog nivoa i dobre osobine će se podići na viši nivo … Zato pitanja „ako ne može, zašto ne može?“ imaju odgovor u monociklusima. Point guard Prima loptu – dribla do čunja- pas- sprint do suprotnog ugla- poskoci do čeone linije – lagan trk do suprotne aut linije i nazad na početni položaj (imamo dva igrača na poziciji 1, a ukoliko nam i igrač na poziciji 2 učestvuje u organizaciji igre u određenom procentu će raditi istu vežbu). Detalji kako prima loptu, da li je triple threat spreman i na kom nivou, kakvo mu je startno ubrzanje sa i bez lopte, kada razvija punu brzinu, da li je jaka promena kada dodaje loptu i kreće u sprint, kako iz sprinta prelazi u poskok su osnova  prema kojoj razvijamo vežbu.  Uzimamo da je položaj tela dobar, tražimo očigledne prednosti, ali i slabije karakteristike u kinetičkom lancu. Na osnovu toga planiramo Zlatnih 30 minuta, uvod i završni deo treninga. Ukoliko popunjavamo izvore energije onda su 3 sprinta u vežbi x 4, ali to je redak slučaj kada je point guard u pitanju.  Vežba je za svih 5 igrača na terenu. Guard Guard u trenutku kada 5 izvodi loptu ispod koša ima cilj da stigne u ugao i primi pas od 1 i šutne ili prodre po čeonoj liniji, ali u ovoj vežbi kada lopta poleti prema njemu produžava na suprotnu stranu i vežbu nastavlja kao point guard. Reakcija, tajming i PUN sprint ovu vežbu čine najtežom za poziciju 2. Small forward Kada point guard primi loptu tada small forward kreće u sprint do čunja, u košarkaškoj tranziciji će sačekati da krene u dribling jer ne zna unapred kakva će odbrana biti na organizatoru igre. Od prvog do drugog čunja su poskoci, a čunj obilazi sa desne strane (mora da bude okrenut košu barem delić sekunde jer guard može da mu doda loptu) i pravi pun krug -  povratak u stavu na početnu poziciju.  Tranzicije se rešavaju sa što manjim brojem igrača, ali imamo pozicije 4 i 5 kojima na isti način konstruišemo vežbu. Nakon što svi igrači ponove vežbu po 4x – strečing – rastrčavanje (uglavnom promene ritma, napred -nazad, trčanje do pola -povratak u stavu -trčanje unazad na suprotnu stranu …beskonačne mogućnosti za kreacije, ali je okvir ova vežba i košarkaški zahtevi u glavnom delu treninga. Linije kretanja su košarkaški cilj, a naš šta se događa sa telom od tačke A do tačke B. Nije samo ravno trčanje, a ni promena brzine, dešava se i bezbroj malih pokreta kojima izbacujemo odbrambenog igrača iz ravnoteže. Kada uđemo u sekundarni kontranapad ti „mali“pokreti, promene će biti razlika da li smo se uspešno i u pravo vreme demarkirali, primili loptu i  pobedili odbrambenog igrača. Vrhunski igrači naprave desetak pokreta koje samo odbrambeni igrač vidi, a najviša klasa tako postavlja celu odbranu u željenu situaciju. Ukoliko ga ne isprate on ih istog trenutka pobedi. Izvanredni su primeri iz NBA lige gde dvojica igrača sa ovih područja, a koje ne možemo nazvati super atletama, dominiraju. Monociklus ima ulogu i da se osveže najistaknutije antropomotoričke osobine i svojstva igrača koje smo dijagnostifikovali ili da se odmore. Sigurno najkreativniji point guard poslednje dve decenije ima šaku kao izraziti kvalitet (postoje vežbe i za veću fleksibilnost šake) i on ne trenira nego odmara ili radi ono što mu prija. Igrači nisu roboti i uz toliko pauza tokom utakmice poneki preskočen trening ništa neće promeniti, naročito ako monociklus postavimo kao obrnutu periodizaciju jer iako je moćno oružje, može negativno da utiče na formu. Isti je princip, ali kraća rastojanja koje igrači prelaze od tačke A do tačke B u sekundarnom kontranapadu. Ukoliko uzmemo da je frekvencija pokreta brzina, a promena vežbi je promena ritma dobili smo bazu za uspešnu demarkaciju. Da li će ili neće uspeti da se demarkira više ne zavisi od fizičke pripreme. Kada igrači savladaju vežbu uz čunjeve koristimo i merdevine, a od košarkaških zadataka će zavisiti tempo.  Na kraju uvoda u trening se postavlja vežba sa odbrambenim igračima, a sa stanovišta fizičke pripreme to je treća promena ritma treninga. Namerno sam uzeo različite autore i akcije, jer uvek možemo da ih po svojoj zamisli napravimo tečnima iako nisu naša rešenja. Šta su najčešće greške? Kada spoljni igrač ne primi kvalitetno loptu kada istrčava iza bloka i ne uputi dobar pas ili ne spusti loptu driblin, ode predaleko … Kada centar ispod koša „bude viši kada stoji sa loptom ispod koša nego kada skače“ … sve se koriguje baš u ovim vežbama. Prepreke, otežavanja … su ključ. Centar (prva knjiga) ima zadatke i pretpostavimo napravi dobar blok, otvori se i nižu loptu uhvati, ali uz kontakt sa odbrambenim igračem ne može da je „iznese“ do obruča, treba mu previše vremena (češće su tip in situacije, ali one više zavise od brzine reakcije nego od svih drugih faktora). Slabosti uglavnom polaze od stopala i odražavaju se na ceo kinetički lanac pokreta odozdole na gore (korekcija počinje od zagrevanja gde se insistira na ispruženim rukama i oštrini pokreta, često podcenjenim detaljima).  Grupišemo manje kvalitetne osobine i imamo sistem u kome procentulano podižemo kvalitet igrača. Nisu svi košarkaši „modernih“ sposobnosti, ali svi mogu da imaju neku ulogu u timu.  Pomozi – vrati se u odbrani, rotacije gde se odbrana igra unutrašnji – perimetralni takođe su situacije gde se ogledaju baš te slabosti, ali se drugačije treniraju. Rastojanja su kraća i eksplozivnije se reaguje. Nije „šut preko ruke“ ukoliko igrač nije prišao nego skočio sa 2 metra razdaljine! To je loša odbrana koja može da ima razlog u brzini pokreta, reakcije, ali i u osvajanju prostora prvim korakom koje vezujemo i sa startnim ubrzanjem.  Iskakanja, udvajanja i povratak u poziciju zahtevaju odlične lateralne kretnje koje se posebno treniraju. Ukoliko igrač u istezanju ne može pristojno da uradi kozak streč on sigurno ove elemente neće moći uspešno da izvede. Rešenja se traže u Zlatnih 30 min (prva knjiga). Kako da popravimo? Najlakši, ali i najtačniji odgovor je „šta radi unapred, to radi unazad i u stranu, sve što radi u desno to radi i u levo“. Šta god da radi i kako god da radi, ovako će barem popraviti koordinaciju i biće okretniji, a samim tim i agilniji, ali ako želimo viši nivo, onda vežbe koje smo po pozicijama napravili delimo na više delova i to označimo čunjevima i preprekama (koristim „prepreke“ da ne bih posebno pisao prepone, merdevine, heksagone …).  Zato na kraju uvoda radimo vežbu sa odbranom. Tu će se videti kašnjenja, ali i usporenja kada igrač treba da bude najbrži (kada završava kontranapad, ali i kada ne ide u igrača već beži od njega u završnici …) i zato sa sintetičkog prelazimo na analitički metod u kome možemo da kontrolišemo napredak. Kako smo ustanovili faze (obuka, automatizacija, dinamički stereotip) tako sada uspostavljamo kriterijume (progresije i stabilizacije) i kontrolišemo PROCES. Trapav, spor, ne prima informacije … to su alibiji celog sporta. Srbi su visoki (delimo drugo mesto, najviši su Nizozemci), snažni, ali nisu brzi (retki su brzi i njih trpimo sa svim slabostima koje imaju) i ne naročito pokretljivi. Sistemsko rešenje kao što je uvođenje folklora u osnovne škole bi puno pomoglo. Nismo najmodernije građeni, pa samim tim i ono što zovemo „modernim“ treningom neće nam se najbolje primati. Takvi smo kakvi jesmo, cilj nam je da najviše izvučemo iz nas, a to možemo. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "T-cross + balans",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex37",
    name: "Definicija i Uloga Monociklusa",
    nameEn: "Exercise 37 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Tvoja definicija monociklusa kao trenažnog dana je vrlo praktična i u skladu sa realnim izazovima trenažnog procesa. Fokus na individualne slabosti, dok se održavaju postojeće snage, daje jasan pravac svakom treningu. •Predlog: Možda bi bilo korisno dodati strukturalni primer kako izgleda jedan monociklus po fazama treninga (uvod, glavni deo, završni deo) sa konkretnim ciljevima. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Definicija i Uloga Monociklusa",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex38",
    name: "Individualni Pristup Pozicijama i Specifičnost",
    nameEn: "Exercise 38 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Tvoj pristup vežbama prema pozicijama (Point Guard, Guard, Small Forward) je vrlo detaljan i daje specifične smernice kako trening treba prilagoditi tehničkim i fizičkim zahtevima svake uloge. •Posebno mi se dopada što uzimaš u obzir: •Promene pravca, •Startno ubrzanje, •Tehničke i fizičke slabosti . •Predlog: Za svaku poziciju možeš dodati mali dijagram kretanja ili opis kako se zadatak razvija kroz progresiju u vežbi. Na primer: •Kod Point Guarda: „Ako igrač ima slab start iz driblinga, ubaciti dodatne vežbe ubrzanja s loptom.“ •Kod Centra: „Koristiti dodatni kontakt za simulaciju realnih situacija pod košem.“ `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Individualni Pristup Pozicijama i Specifičnost",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex39",
    name: "Greške i Korekcije u Treningu",
    nameEn: "Exercise 39 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Izuzetno je važno što identifikuješ česte greške, poput lošeg prijema lopte, neefikasnog iskakanja u odbrani, i nedovoljno brze demarkacije. Time postavljaš osnove za detaljne korekcije koje su ključne za poboljšanje individualne i timske igre. •Predlog: Možda bi bilo korisno strukturisati ovaj deo u tri koraka: •Identifikacija greške  (šta je problem?), •Uzrok greške (zašto se dešava? fizička/tehnička slabost?), •Rešenje (kako je ispraviti? vežba ili korekcija). `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Greške i Korekcije u Treningu",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex40",
    name: "Fizičke Osobine i Antropometrijske Specifičnosti",
    nameEn: "Exercise 40 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Analiza specifičnosti srpskih igrača, poput visine, snage, ali sporije pokretljivosti, daje praktičan okvir zašto se određene vrste treninga moraju prilagoditi. •Predlog: Deo o folkloru u školama kao dodatnom rešenju je inovativan i vredan diskusije. Ovo bi moglo biti prošireno u širu priču o sistemskoj fizičkoj pripremi  i razvoju dece, povezujući osnovne škole, klubove i profesionalni nivo. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Fizičke Osobine i Antropometrijske Specifičnosti",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex41",
    name: "Metodologija i Fazna Progresija",
    nameEn: "Exercise 41 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Tvoje insistiranje na progresiji od obuke do automatizacije i dinamičkog stereotipa je temeljno i omogućava kontrolu procesa. •Predlog: Možeš dodatno razraditi konkretne kriterijume za svaku fazu, npr.: •Obuka: Fokus na savladavanju osnovnih pokreta i kretanja. •Automatizacija: Ponavljanja u realnim situacijama na terenu. •Dinamički stereotip:  Brzo donošenje odluka i prilagođavanje u igri. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Metodologija i Fazna Progresija",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex42",
    name: "Inovativni Pristup i Upotreba Prepreka",
    nameEn: "Exercise 42 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Ideja o korišćenju prepreka za povećanje složenosti vežbi je odlično razrađena. Kombinovanje čunjeva, merdevina, i heksagona pomaže u postizanju boljeg tajminga i demarkacije. •Predlog: Uvrstiti konkretan primer vežbe sa progresijom, npr.: •Korak 1: Igrač prolazi čunjeve sa promenom brzine. •Korak 2: Dodaje lopti iz promene pravca. •Korak 3: Završava sprintom i šutem. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Inovativni Pristup i Upotreba Prepreka",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex43",
    name: "Praktični Zaključci i Motivacija",
    nameEn: "Exercise 43 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Tvoj zaključak da igrači nisu roboti i da im treba omogućiti odmor i individualne korekcije je važan podsetnik. Isto tako, naglašavaš da svi igrači, bez obzira na nivo talenta, mogu naći svoju ulogu u timu ako se pravilno treniraju. •Predlog: Možda bi ovde bilo korisno dodati praktičan „framework“ za trenere: •Kako pratiti individualne slabosti tokom sezone. •Kako ih povezati sa timskim ciljevima. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Praktični Zaključci i Motivacija",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex44",
    name: "Definicija i Uloga Monociklusa",
    nameEn: "Exercise 44 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Šta je monociklus? Monociklus je osnovna jedinica u periodizaciji – trenažni dan koji može uključivati različite zadatke. Njegov cilj je fokus na specifičnu veštinu, fizičku sposobnost ili korekciju slabosti igrača. •Tvoj ključni uvid:  Monociklusi su alati za postepene korekcije i održavanje forme, jer stalne ispravke dovode do stagnacije. •Predlog dodatka: Jasna struktura monociklusa, npr.: •Uvodni deo: Dinamičko zagrevanje, mobilnost i propriocepcija. •Glavni deo: Fokus na zadatku (eksplozivnost, promene pravca, reakcija). •Završni deo: Statičko istezanje, regeneracija. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Definicija i Uloga Monociklusa",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex45",
    name: "Individualni Pristup Pozicijama",
    nameEn: "Exercise 45 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `Tvoj fokus na specifične zadatke po pozicijama je odličan – evo detaljnije razrade sa naglaskom na fizičke i tehničke ciljeve. Point Guard •Tvoj predlog: Dribla do čunja → pas → sprint → poskoci → lagan trk nazad. •Detaljna razrada: •Fokus na reakciji i tajmingu. •Praćenje položaja tela pri prijemu lopte (triple threat spremnost). •Progresija: •Nivo 1: Kretanje bez lopte. •Nivo 2: Dodavanje lopte pre sprinta sa naglaskom na brzinu reakcije. •Nivo 3: Dodavanje prepreka i obrambenih igrača. •Provera: Da li je igrač sposoban da sprinta bez pada u brzini pri promeni pravca? Guard •Tvoj predlog: Sprint do ugla → prijem pasa → šut ili prodor. •Detaljna razrada: •Rad na punom sprintu (reakcija na let lopte). •Progresija: •Nivo 1: Fokus na sprint i šut bez odbrane. •Nivo 2: Dodavanje odbrambenog igrača. •Nivo 3: Situacioni trening (npr. odluka: šut, prodor ili povratni pas). •Provera: Da li guard postiže optimalnu brzinu u pravom trenutku za prijem lopte? Small Forward •Tvoj predlog: Sprint → poskoci → obilazak čunja → povratak u stavu. •Detaljna razrada: •Fokus na driblingu i promeni pravca. •Progresija: •Nivo 1: Poskoci bez lopte, obilazak čunja sa fokusom na pravilan stav. •Nivo 2: Dodavanje lopte pri povratku na početnu poziciju. •Nivo 3: Simulacija dodavanja lopte guardu tokom povratka. •Provera: Da li small forward ima stabilnost pri obilasku čunja i brz povratak u odbrambeni stav? Centar •Tvoj predlog: Fokus na kontakt i brzinu reakcije u reketu. •Detaljna razrada: •Vežbe za hvatanje niže lopte (tip-in situacije). •Progresija: •Nivo 1: Hvatanje lopte bez kontakta sa fokusom na tajming skoka. •Nivo 2: Dodavanje kontakta (odbrambeni igrač). •Nivo 3: Završetak pod obručem nakon tip-in situacije. •Provera: Da li centar uspeva brzo da pređe iz kontakta u završnicu? `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Individualni Pristup Pozicijama",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex46",
    name: "Korekcija Grešaka",
    nameEn: "Exercise 46 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `Tvoj naglasak na greškama (npr. loš prijem lopte, nedovoljno ubrzanje) je ključan. Evo kako ih možemo razraditi: •Identifikacija: •Problem: Loš prijem lopte pri istrčavanju. •Uzrok: Nedovoljna koordinacija ili slab tajming. •Rešenje: Vežbe prijema lopte pod različitim uglovima i brzinama. •Specifične greške za pozicije: •Guard: Loša promena pravca pri šutu. •Rešenje: Rad na lateralnoj agilnosti uz dodavanje lopte iz različitih uglova. •Centar: Sporo reagovanje na kontakt u reketu. •Rešenje: Dodavanje vežbi kontakta i eksplozivnosti iz statike. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Korekcija Grešaka",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex47",
    name: "Dinamičko Zagrijavanje i Linije Kretanja",
    nameEn: "Exercise 47 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Tvoj predlog: Dinamičko zagrevanje po linijama kretanja. •Detaljna razrada: •Fokus na malim pokretima koji simuliraju demarkaciju. •Dodavanje prepreka i promena ritma (npr. čunjevi, heksagoni). •Progresija: •Nivo 1: Jednostavna promena ritma (trčanje → sprint). •Nivo 2: Dodavanje lopte i driblinga. •Nivo 3: Kretanje sa obrambenim igračem. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Dinamičko Zagrijavanje i Linije Kretanja",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex48",
    name: "Situacioni Trening i Obrnuta Periodizacija",
    nameEn: "Exercise 48 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `•Tvoj uvid o obrnutoj periodizaciji (kraće deonice sa višim intenzitetom) je odličan za igrače koji već imaju dobar nivo pripreme. •Predlog za progresiju: •Dan 1 (monociklus):  Fokus na izdržljivosti i preciznosti. •Dan 2: Fokus na reakciji i eksplozivnosti. •Dan 3: Situacioni trening sa kombinacijom prethodnih zadataka. Zaključak i Kontrola Procesa Tvoj fokus na obuku, automatizaciju i dinamički stereotip  savršeno postavlja temelje za kriterijume napretka. Preporučujem: •Praćenje napretka: •Korišćenje metrika (npr. vreme reakcije, brzina sprinta). •Kontrola procesa: •Redovni povratni testovi za procenu nivoa obuke i stabilizacije. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Situacioni Trening i Obrnuta Periodizacija",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex49",
    name: "Fokus na snagu sa korektivnim ciljem",
    nameEn: "Exercise 49 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `Ciljevi: •Ispraviti specifične biomehaničke slabosti (npr. loša promena pravca, slab kontakt u reketu, slab prijem lopte). •Ojačati ključne tačke kinetičkog lanca (stopala, kolena, kukovi, trup). •Poboljšati stabilnost i kontrolu pokreta u košarkaškim situacijama. Osnovne komponente treninga snage: 1.Aktivacija i propriocepcija : •Vežbe za stopala (npr. podizanje na prste, balans na jednoj nozi sa medicinkom). •Mobilizacija skočnih zglobova i kukova. 2.Osnovna snaga: •Čučnjevi (bilateralni i unilateralni). •Mrtvo dizanje sa fokusom na tehniku. 3.Dinamička stabilnost : •Iskoraci u svim pravcima (napred, nazad, bočno, rotacijski). •Skokovi i doskoci sa fokusom na pravilno doskakanje. 4.Eksplozivna snaga : •Medicinke (bacanje lopte odozdo ili iznad glave). •Pliometrija sa postepenim povećanjem intenziteta. `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Fokus na snagu sa korektivnim ciljem",
    coachGoran: true,
    bookPart: 3
  },
  {
    id: "fpk_part3_ex50",
    name: "Predlozi za treninge po pozicijama",
    nameEn: "Exercise 50 - Part 3",
    category: "strength",
    subcategory: "strength_basketball",
    description: `Point Guard (PG): •Greške za korekciju : Slaba promena pravca, nedovoljno ubrzanje nakon prijema lopte. •Primer vežbi: 1.Lateralni iskoraci sa medicinkom  (3x10 sa obe strane). 2.Sprint iz pozicije triple threat  – fokus na prvom koraku (6x10m). `,
    descriptionEn: `Basketball training exercise from FPK book Part 3`,
    equipment: ["basketball", "court"],
    targetMuscles: ["legs", "core"],
    position: ["PG", "SG", "SF", "PF", "C"],
    level: "intermediate",
    duration: "3-5 minutes",
    sets: 3,
    reps: "10-12",
    intensity: "medium",
    focus: "Predlozi za treninge po pozicijama",
    coachGoran: true,
    bookPart: 3
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
