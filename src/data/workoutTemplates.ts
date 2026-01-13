/**
 * SIMBION PRO - WORKOUT TEMPLATES
 * 
 * OBAVEZNA STRUKTURA SVAKOG TRENINGA:
 * 1. UVOD (15min): Propriocepcija + Aktivacija
 * 2. CNS ACTIVATION (5min): Nervni sistem na maksimum
 * 3. GLAVNI DEO (30-40min): 4-6 vežbi (specifično po poziciji)
 * 4. FINISHER (5-10min): Conditioning, završni napor
 * 5. ZAVRŠNI DEO (10min): Hlađenje, stretching, disanje
 * 
 * TOTAL: ~75-80 minuta
 */

import type { BasketballPosition } from '../data/exerciseCatalog';

export interface WorkoutSection {
  name: string;
  duration: string; // "15min", "5-10min"
  purpose: string;
  exercises: Array<{
    exerciseId: string;
    sets: string;
    reps: string;
    load: string;
    rest: string;
    tempo?: string;
    notes: string;
  }>;
  coachingPoints: string[];
}

export interface CompleteWorkout {
  id: string;
  name: {
    sr: string;
    en: string;
  };
  position: BasketballPosition;
  focus: string; // "Brzina + Reakcija", "Snaga + Eksplozivnost"...
  level: 'beginner' | 'intermediate' | 'advanced' | 'elite';
  phase: 'preparation' | 'competitive' | 'recovery' | 'development' | 'peak';
  
  // OBAVEZNE SEKCIJE
  uvod: WorkoutSection; // Propriocepcija + Aktivacija
  cnsActivation: WorkoutSection; // CNS paljenje
  glavniDeo: WorkoutSection; // Glavni trenažni stimulus
  finisher: WorkoutSection; // Conditioning završnica
  zavrsniDeo: WorkoutSection; // Hlađenje + stretching
  
  totalDuration: string;
  warnings: string[];
  equipment: string[];
}

// ==========================================
// POINT GUARD (PG) - BRZINA + REAKCIJA
// ==========================================

export const pgSpeedReactionWorkout: CompleteWorkout = {
  id: 'pg-speed-reaction-beginner',
  name: {
    sr: 'PG - Brzina i Reakcija (Beginner)',
    en: 'PG - Speed and Reaction (Beginner)'
  },
  position: 'PG',
  focus: 'Startno ubrzanje, brzina reakcije, core stability',
  level: 'beginner',
  phase: 'preparation',
  
  // 1. UVOD - 15 minuta
  uvod: {
    name: 'Proprioceptivni uvod + Aktivacija',
    duration: '15min',
    purpose: 'Zagrevanje, propriocepcija, aktivacija ključnih mišića za brzinu',
    exercises: [
      {
        exerciseId: 'wrist-flexion-extension',
        sets: '2',
        reps: '10-15',
        load: 'BW',
        rest: '30s',
        notes: 'Šake - prevencija povreda, preciznost'
      },
      {
        exerciseId: 'ankle-dorsiflexion-plantarflexion',
        sets: '2',
        reps: '10-15',
        load: 'BW',
        rest: '30s',
        notes: 'Stopala - najrizičnija zona, svakodnevno'
      },
      {
        exerciseId: 'hip-mobility-active',
        sets: '2',
        reps: '8-10 po strani',
        load: '12kg bučice ili traka',
        rest: '60s',
        notes: 'Kukovi - mobilnost za promene pravca'
      },
      {
        exerciseId: 'jumping-jack-flash',
        sets: '3',
        reps: '20s',
        load: 'BW',
        rest: '30s',
        notes: 'Koordinacija ruku i nogu, brzina'
      },
      {
        exerciseId: 'tibialis-anterior-activation',
        sets: '2',
        reps: '10-15',
        load: 'BW',
        rest: '30s',
        notes: 'Kritično za mountain climber - aktivacija pre glavnog dela'
      },
      {
        exerciseId: 'gluteus-activation-single-leg-rdl',
        sets: '2',
        reps: '8 po nozi',
        load: 'BW',
        rest: '60s',
        notes: 'Aktivacija kukova za startno ubrzanje'
      }
    ],
    coachingPoints: [
      'Lagano povećavanje intenziteta',
      'Temperatura mišića mora ostati visoka',
      'Fokus na tehniku, NE na brzinu u uvodu',
      'Disanje: ruke gore = udah, ruke dole = izdah'
    ]
  },

  // 2. CNS ACTIVATION - 5 minuta
  cnsActivation: {
    name: 'CNS Aktivacija',
    duration: '5min',
    purpose: 'Maksimalna aktivacija nervnog sistema, priprema za eksplozivne pokrete',
    exercises: [
      {
        exerciseId: 'quadriceps-hamstring-activation-plyometric',
        sets: '3',
        reps: '5-8',
        load: 'BW',
        rest: '90s',
        notes: 'Poskoci, odskoci - CNS na maksimum'
      }
    ],
    coachingPoints: [
      'Maksimalna brzina izvođenja',
      'Pun oporavak između serija (90s minimum)',
      'Ako tehnika slabi - STOP, odmoriti se',
      'Puls  do 180-190 BPM normalan'
    ]
  },

  // 3. GLAVNI DEO - 35 minuta
  glavniDeo: {
    name: 'Glavni deo - Brzina',
    duration: '35min',
    purpose: 'Razvoj startnog ubrzanja, brzine reakcije, eksplozivnosti',
    exercises: [
      {
        exerciseId: 'mountain-climber-basic',
        sets: '4',
        reps: '20s ili 15-20 po nozi',
        load: 'BW',
        rest: '60-90s',
        notes: 'KLJUČNA VEŽBA - brzina pokreta + reakcija. Tajming za sprint/poskok.'
      },
      {
        exerciseId: 'custom-sprint-5m-starts',
        sets: '4-5',
        reps: '5m sprint',
        load: 'BW',
        rest: '120s',
        notes: 'Startno ubrzanje - prvi i drugi korak. Reakcija na signal.'
      },
      {
        exerciseId: 'custom-lateral-shuffle-reaction',
        sets: '4',
        reps: '10-15s po strani',
        load: 'BW',
        rest: '60s',
        notes: 'Lateralna brzina - odbrana, close-out'
      },
      {
        exerciseId: 'single-leg-balance-basic',
        sets: '2-3',
        reps: '20-30s po nozi',
        load: 'BW',
        rest: '30s',
        notes: 'Balans - većina promašenih šuteva zbog lošeg balansa!'
      }
    ],
    coachingPoints: [
      'Mountain climber SAMO nakon zagrevanja i aktivacije!',
      'Ahilova tetiva najopterećenija - pažnja',
      'Između brzinskih vežbi: dinamičko istezanje 10s (spušta puls 190→180)',
      'Tehnika > brzina. Ako tehnika slabi, PAUZA.'
    ]
  },

  // 4. FINISHER - 8 minuta
  finisher: {
    name: 'Conditioning Finisher',
    duration: '8min',
    purpose: 'Brzinska izdržljivost, laktatna tolerancija, mentalna izdržljivost',
    exercises: [
      {
        exerciseId: 'custom-shuttle-sprints',
        sets: '3',
        reps: '30s work / 60s rest',
        load: 'BW',
        rest: '60s između serija',
        notes: 'Shuttle sprint (5-10m) - simulacija tranzicije'
      }
    ],
    coachingPoints: [
      'Maksimalan napor',
      'Puls će ići iznad 190 - normalno',
      'Mentalna izdržljivost podjednako važna'
    ]
  },

  // 5. ZAVRŠNI DEO - 10 minuta
  zavrsniDeo: {
    name: 'Hlađenje + Stretching + Disanje',
    duration: '10min',
    purpose: 'Ubrzanje oporavka (do 30% brži anabolizam), prevencija povreda, smanjenje laktata',
    exercises: [
      {
        exerciseId: 'custom-light-jog-recovery',
        sets: '1',
        reps: '3-5min',
        load: 'BW',
        rest: '-',
        notes: 'Lagani aerobni rad (50-60% VO2max) - sagorevanje laktata'
      },
      {
        exerciseId: 'custom-static-stretching-lower-body',
        sets: '1',
        reps: '6-12s po mišiću (kontrakcija-relaksacija)',
        load: 'BW',
        rest: '-',
        notes: 'Kvadriceps, hamstrings, gluteus, calves'
      },
      {
        exerciseId: 'custom-breathing-exercises',
        sets: '1',
        reps: '3-5min',
        load: '-',
        rest: '-',
        notes: 'Disanje kroz nos u trbuh. Opuštanje. CNS reset.'
      }
    ],
    coachingPoints: [
      'NE preskakati završni deo - propriocepcija!',
      'Bez hlađenja niste trenirali već ste naneli štetu organizmu',
      'Hlađenje ubrzava anabolizam do 30%',
      '\"Rad fleksora ubrzava oporavak ekstenzora\" i obrnuto',
      'Disanje: propriocepcija + oporavak'
    ]
  },

  totalDuration: '73min',
  warnings: [
    'Mountain climber je RIZIČNA vežba - obavezno zagrevanje + aktivacija!',
    'Ahilova tetiva najopterećenija - pažnja na tibijalis anterior, biceps femoris, kvadriceps',
    'Između brzinskih vežbi: dinamičko istezanje za spuštanje pulsa',
    'NIKADA ne preskakati uvodni i završni deo!'
  ],
  equipment: [
    'Stopwatch / Timer',
    'Bučice 12-14kg (za aktivaciju kukova)',
    'Elastične trake (opciono)',
    'Staze za sprint (5-10m)',
    'Teren / sala'
  ]
};

// ==========================================
// SHOOTING GUARD (SG) - EKSPLOZIVNOST + LATERALNA
// ==========================================

export const sgExplosiveLateralWorkout: CompleteWorkout = {
  id: 'sg-explosive-lateral-beginner',
  name: {
    sr: 'SG - Eksplozivnost i Lateralna Brzina (Beginner)',
    en: 'SG - Explosive Power and Lateral Speed (Beginner)'
  },
  position: 'SG',
  focus: 'Bočna eksplozivnost, šut pod kontaktom, vertikalni skok',
  level: 'beginner',
  phase: 'preparation',
  
  uvod: {
    name: 'Proprioceptivni uvod + Aktivacija',
    duration: '15min',
    purpose: 'Zagrevanje fokusirano na lateralnu mobilnost i eksplozivnost',
    exercises: [
      {
        exerciseId: 'wrist-flexion-extension',
        sets: '2',
        reps: '10-15',
        load: 'BW',
        rest: '30s',
        notes: 'Šake - šut pod pritiskom'
      },
      {
        exerciseId: 'ankle-dorsiflexion-plantarflexion',
        sets: '2',
        reps: '10-15',
        load: 'BW',
        rest: '30s',
        notes: 'Stopala - lateralna stabilnost'
      },
      {
        exerciseId: 'hip-mobility-active',
        sets: '3',
        reps: '8-10 po strani',
        load: '12-14kg',
        rest: '60s',
        notes: 'Kukovi - lateralna eksplozivnost KRITIČNA za SG'
      },
      {
        exerciseId: 'carioca-lateral-coordination',
        sets: '3-4',
        reps: '10-15m po strani',
        load: 'BW',
        rest: '45s',
        notes: 'Karioka - lateralna koordinacija, close-out odbrana'
      },
      {
        exerciseId: 'gluteus-activation-single-leg-rdl',
        sets: '2',
        reps: '8 po nozi',
        load: '12kg',
        rest: '60s',
        notes: 'Aktivacija gluteusa za vertikalni skok'
      }
    ],
    coachingPoints: [
      'SG specifično: lateralna mobilnost PRIORITET',
      'Karioka u OBA pravca - balansiranje leve i desne strane',
      'Kukovi moraju biti maksimalno mobilni'
    ]
  },

  cnsActivation: {
    name: 'CNS Aktivacija - Eksplozivnost',
    duration: '5min',
    purpose: 'CNS priprema za eksplozivne skokove i lateralne pokrete',
    exercises: [
      {
        exerciseId: 'quadriceps-hamstring-activation-plyometric',
        sets: '3',
        reps: '6-8',
        load: 'BW',
        rest: '90s',
        notes: 'Pliometrija - priprema za vertikalni skok'
      }
    ],
    coachingPoints: [
      'Fokus na odskoku - tehnika doskoka bitna',
      'Kolena ka spolja, ne ka unutra'
    ]
  },

  glavniDeo: {
    name: 'Glavni deo - Eksplozivnost + Lateral',
    duration: '35min',
    purpose: 'Vertikalni skok, lateralna brzina, eksplozivnost pod uglom',
    exercises: [
      {
        exerciseId: 'custom-box-jump-30cm',
        sets: '4',
        reps: '5-6',
        load: 'BW',
        rest: '120s',
        notes: 'Box jump beginner (30cm kutija). Skok + kontrolisan doskok.'
      },
      {
        exerciseId: 'custom-lateral-bounds',
        sets: '4',
        reps: '6-8 po strani',
        load: 'BW',
        rest: '90s',
        notes: 'Lateralni poskoci - bočna eksplozivnost'
      },
      {
        exerciseId: 'custom-close-out-drills',
        sets: '4',
        reps: '10-12s',
        load: 'BW',
        rest: '60s',
        notes: 'Close-out simulacija - sprint + lateralno kretanje + ruke gore'
      },
      {
        exerciseId: 'single-leg-balance-basic',
        sets: '2',
        reps: '20-30s po nozi',
        load: 'BW',
        rest: '30s',
        notes: 'Balans za šut - većina promašaja zbog lošeg balansa'
      }
    ],
    coachingPoints: [
      'Box jump: Beginner MORA 30cm, ne više!',
      'Doskok kontrolisan - kolena ne smeju ka unutra',
      'Lateralni poskoci: eksplozivnost, ali tehnika prioritet',
      'Close-out: simulacija realnog pokreta u igri'
    ]
  },

  finisher: {
    name: 'Conditioning Finisher',
    duration: '8min',
    purpose: 'Repetitivna eksplozivnost, izdržljivost u brzinskim pokretima',
    exercises: [
      {
        exerciseId: 'custom-lateral-shuttle-with-jump',
        sets: '3',
        reps: '30s work / 60s rest',
        load: 'BW',
        rest: '60s',
        notes: 'Lateral shuffle + vertikalni skok - simulacija šuta nakon kretanja'
      }
    ],
    coachingPoints: [
      'Eksplozivnost pod umorom - realna situacija u igri',
      'Balans pri svakom skoku'
    ]
  },

  zavrsniDeo: {
    name: 'Hlađenje + Stretching + Disanje',
    duration: '10min',
    purpose: 'Oporavak, fleksibilnost kukova i nogu, prevencija povreda',
    exercises: [
      {
        exerciseId: 'custom-light-jog-recovery',
        sets: '1',
        reps: '3-5min',
        load: 'BW',
        rest: '-',
        notes: 'Lagano trčanje - laktati se sagorevaju'
      },
      {
        exerciseId: 'custom-hip-flexor-stretch',
        sets: '1',
        reps: '6-12s po strani (kontrakcija-relaksacija)',
        load: 'BW',
        rest: '-',
        notes: 'Fleksori kukova - SG najopterećeniji'
      },
      {
        exerciseId: 'custom-breathing-exercises',
        sets: '1',
        reps: '3-5min',
        load: '-',
        rest: '-',
        notes: 'Disanje + opuštanje'
      }
    ],
    coachingPoints: [
      'Kukovi posebna pažnja - najopterećeniji kod SG',
      'Stretching u parovima može biti koristan ako je visoka anksioznost',
      'Hlađenje = anabolizam (izgrađivanje)'
    ]
  },

  totalDuration: '73min',
  warnings: [
    'Box jump: Beginner SAMO 30cm! Ne forsirati više!',
    'Doskok tehnički mora biti ispravan - kolena ka spolja',
    'Lateralne vežbe rizične bez pripreme kukova',
    'NIKADA ne preskakati uvodni i završni deo!'
  ],
  equipment: [
    'Box / kutija 30cm (beginner)',
    'Bučice 12-14kg',
    'Elastične trake',
    'Staze za lateralne pokrete',
    'Teren / sala'
  ]
};

// ==========================================
// SMALL FORWARD (SF) - BALANS + SVESTRANOST
// ==========================================

export const sfBalanceVersatilityWorkout: CompleteWorkout = {
  id: 'sf-balance-versatile-beginner',
  name: {
    sr: 'SF - Balans i Svestranost (Beginner)',
    en: 'SF - Balance and Versatility (Beginner)'
  },
  position: 'SF',
  focus: 'Balans, lateralna koordinacija, funkcionalna snaga',
  level: 'beginner',
  phase: 'preparation',
  
  uvod: {
    name: 'Proprioceptivni uvod + Aktivacija',
    duration: '15min',
    purpose: 'Balans fokus - SF mora biti stabilan u SVIM situacijama',
    exercises: [
      {
        exerciseId: 'wrist-flexion-extension',
        sets: '2',
        reps: '10-15',
        load: 'BW',
        rest: '30s',
        notes: 'Šake - ball handling + finishing kroz kontakt'
      },
      {
        exerciseId: 'ankle-dorsiflexion-plantarflexion',
        sets: '3',
        reps: '12-15',
        load: 'BW',
        rest: '30s',
        notes: 'Stopala - stabilnost na različitim površinama'
      },
      {
        exerciseId: 'hip-mobility-active',
        sets: '3',
        reps: '8-10 po strani',
        load: '12-14kg',
        rest: '60s',
        notes: 'Kukovi - potrebna mobilnost za versatile igru (3/4 hybrid)'
      },
      {
        exerciseId: 'single-leg-balance-basic',
        sets: '3',
        reps: '30s po nozi',
        load: 'BW',
        rest: '45s',
        notes: 'Balans osnova - SF najčešće u kontaktu pri šutu'
      },
      {
        exerciseId: 'gluteus-activation-single-leg-rdl',
        sets: '2',
        reps: '8-10 po nozi',
        load: '12kg',
        rest: '60s',
        notes: 'Gluteus + balans kombinacija'
      }
    ],
    coachingPoints: [
      'SF mora biti stabilan na jednoj nozi - prioritet #1',
      'Propriocepcija kroz čitav uvod',
      'Kukovi moraju biti spremni za različite pozicije (3 i 4)'
    ]
  },

  cnsActivation: {
    name: 'CNS Aktivacija',
    duration: '5min',
    purpose: 'Reaktivna snaga + koordinacija',
    exercises: [
      {
        exerciseId: 'quadriceps-hamstring-activation-plyometric',
        sets: '3',
        reps: '6-8',
        load: 'BW',
        rest: '90s',
        notes: 'Pliometrija sa fokusom na doskoku i balansu'
      }
    ],
    coachingPoints: [
      'Doskok mora biti stabilan - SF posebno važno',
      'Kolena ka spolja tokom cele vežbe'
    ]
  },

  glavniDeo: {
    name: 'Glavni deo - Balans + Funkcionalna Snaga',
    duration: '35min',
    purpose: 'Single-leg stabilnost, funkcionalna snaga, svestranost',
    exercises: [
      {
        exerciseId: 'custom-single-leg-rdl-loaded',
        sets: '4',
        reps: '8-10 po nozi',
        load: '12-16kg bučica',
        rest: '90s',
        notes: 'Single-leg RDL sa tegom - balans + hamstring + gluteus'
      },
      {
        exerciseId: 'custom-bulgarian-split-squat',
        sets: '4',
        reps: '8-10 po nozi',
        load: '12-16kg bučice',
        rest: '90s',
        notes: 'Bulgarian split squat - funkcionalna snaga nogu'
      },
      {
        exerciseId: 'custom-lateral-lunge',
        sets: '3',
        reps: '8 po strani',
        load: 'BW ili 8-12kg',
        rest: '60s',
        notes: 'Lateralni iskorak - mobilnost + snaga'
      },
      {
        exerciseId: 'custom-single-leg-hop-and-stick',
        sets: '3',
        reps: '6-8 po nozi',
        load: 'BW',
        rest: '90s',
        notes: 'Single-leg poskok + landing - stabilnost pod dinamičkim opterećenjem'
      }
    ],
    coachingPoints: [
      'Single-leg vežbe DOMINIRAJU - SF mora biti stabilan na jednoj nozi',
      'Bulgarian split squat: prednja noga radi 90% posla',
      'Balans > opterećenje. Ako gubi balans, smanji težinu.',
      'Lateralni iskorak: puna dubina kukova, kolena ka spolja'
    ]
  },

  finisher: {
    name: 'Conditioning Finisher',
    duration: '8min',
    purpose: 'Izdržljivost u funkcionalnim pokretima',
    exercises: [
      {
        exerciseId: 'custom-step-up-jumps',
        sets: '3',
        reps: '30s work / 60s rest',
        load: 'BW',
        rest: '60s',
        notes: 'Step-up sa skokom - izdržljivost + eksplozivnost'
      }
    ],
    coachingPoints: [
      'Balans mora biti održan i pod umorom',
      'Tehnika ne sme slabiti'
    ]
  },

  zavrsniDeo: {
    name: 'Hlađenje + Stretching + Disanje',
    duration: '10min',
    purpose: 'Oporavak, hip flexor stretching, prevencija povreda',
    exercises: [
      {
        exerciseId: 'custom-light-jog-recovery',
        sets: '1',
        reps: '3-5min',
        load: 'BW',
        rest: '-',
        notes: 'Lagano trčanje - oporavak'
      },
      {
        exerciseId: 'custom-hip-flexor-stretch',
        sets: '1',
        reps: '6-12s po strani (PNF)',
        load: 'BW',
        rest: '-',
        notes: 'Fleksori kukova - SF jako opterećeni'
      },
      {
        exerciseId: 'custom-hamstring-stretch',
        sets: '1',
        reps: '6-12s po nozi (PNF)',
        load: 'BW',
        rest: '-',
        notes: 'Hamstrings - single-leg vežbe ih maksimalno opterećuju'
      },
      {
        exerciseId: 'custom-breathing-exercises',
        sets: '1',
        reps: '3-5min',
        load: '-',
        rest: '-',
        notes: 'Disanje + reset'
      }
    ],
    coachingPoints: [
      'SF ima najviše single-leg rada - hamstrings posebna pažnja',
      'PNF stretching (6s kontrakcija, 12s relaksacija)',
      'Disanje kroz nos u trbuh'
    ]
  },

  totalDuration: '73min',
  warnings: [
    'Single-leg vežbe rizične bez dovoljne stabilnosti - poštovati progresiju!',
    'Balans > težina. Ne forsirati opterećenje.',
    'Bulgarian split squat: prednja noga mora biti 90% opterećenja',
    'NIKADA ne preskakati uvodni i završni deo!'
  ],
  equipment: [
    'Bučice 12-16kg',
    'Klupa za Bulgarian split squat',
    'Box 20-30cm (opciono)',
    'Teren / sala'
  ]
};

// ==========================================
// POWER FORWARD (PF) - SNAGA KUKOVA + MOBILNOST
// ==========================================

export const pfHipStrengthMobilityWorkout: CompleteWorkout = {
  id: 'pf-hip-strength-beginner',
  name: {
    sr: 'PF - Snaga Kukova i Mobilnost (Beginner)',
    en: 'PF - Hip Strength and Mobility (Beginner)'
  },
  position: 'PF',
  focus: 'Snaga kukova (box-out), lateralna brzina, mobilnost za pick&roll',
  level: 'beginner',
  phase: 'preparation',
  
  uvod: {
    name: 'Proprioceptivni uvod + Aktivacija',
    duration: '15min',
    purpose: 'Kukovi i donji deo tela - priprema za kontakt i snagu',
    exercises: [
      {
        exerciseId: 'wrist-flexion-extension',
        sets: '2',
        reps: '10-15',
        load: 'BW',
        rest: '30s',
        notes: 'Šake - hvatanje lopte u reketu'
      },
      {
        exerciseId: 'ankle-dorsiflexion-plantarflexion',
        sets: '3',
        reps: '12-15',
        load: 'BW',
        rest: '30s',
        notes: 'Stopala - stabilnost za primanje kontakta'
      },
      {
        exerciseId: 'hip-mobility-active',
        sets: '4',
        reps: '10-12 po strani',
        load: '14-16kg',
        rest: '60s',
        notes: 'Kukovi PRIORITET - box-out zahteva maksimalnu snagu i mobilnost'
      },
      {
        exerciseId: 'gluteus-activation-hip-thrust',
        sets: '3',
        reps: '12-15',
        load: 'BW ili 20kg',
        rest: '60s',
        notes: 'Hip thrust - aktivacija gluteusa za box-out'
      },
      {
        exerciseId: 'custom-lateral-band-walks',
        sets: '3',
        reps: '15-20 koraka po strani',
        load: 'Srednja elastična traka',
        rest: '45s',
        notes: 'Lateralna aktivacija - gluteus medius kritičan za PF'
      }
    ],
    coachingPoints: [
      'Kukovi su ključ PF igre - box-out, rolovanje, kontakt',
      'Gluteus mora biti maksimalno aktivan PRE glavnog dela',
      'Lateralna stabilnost = prevencija povreda kolena'
    ]
  },

  cnsActivation: {
    name: 'CNS Aktivacija',
    duration: '5min',
    purpose: 'Snaga + eksplozivnost kukova',
    exercises: [
      {
        exerciseId: 'quadriceps-hamstring-activation-plyometric',
        sets: '3',
        reps: '5-6',
        load: 'BW',
        rest: '2min',
        notes: 'Pliometrija sa fokusom na snagu (ne brzinu)'
      }
    ],
    coachingPoints: [
      'PF: snaga > brzina',
      'Odskoci moraju biti snažni, ne brzi'
    ]
  },

  glavniDeo: {
    name: 'Glavni deo - Snaga Kukova + Lateralna',
    duration: '35min',
    purpose: 'Razvoj snage kukova, primanje kontakta, ekscentrična kontrola',
    exercises: [
      {
        exerciseId: 'custom-goblet-squat',
        sets: '4',
        reps: '12 (12RM faza)',
        load: '16-24kg kettlebell',
        rest: '90s',
        tempo: '3-0-1 (3s spuštanje, 0s pauza, 1s gore)',
        notes: 'Goblet squat - dubina, mobilnost kukova, snaga. OBAVEZNO poštovati tempo!'
      },
      {
        exerciseId: 'custom-trap-bar-deadlift',
        sets: '4',
        reps: '10-12',
        load: '40-60kg (12RM)',
        rest: '2min',
        notes: 'Trap bar deadlift - snaga čitavog kinetičkog lanca (beginner safe variant)'
      },
      {
        exerciseId: 'custom-lateral-lunge-loaded',
        sets: '3',
        reps: '8 po strani',
        load: '12-16kg bučice',
        rest: '90s',
        notes: 'Lateralni iskorak - lateralna brzina PF'
      },
      {
        exerciseId: 'custom-box-step-up',
        sets: '3',
        reps: '10 po nozi',
        load: '12kg bučice',
        rest: '90s',
        notes: 'Box step-up - simulacija rolovanja u piku'
      }
    ],
    coachingPoints: [
      'RM FAZA: Beginner počinje sa 12RM (67%) - OBAVEZNO!',
      'Tempo 3-0-1: Ekscentrična faza (spuštanje) gradi snagu',
      'Goblet squat: Lakat gura koleno ka spolja (kukovi)',
      'Trap bar deadlift: Bezbedniji od klasičnog za beginner-e',
      'PF mora trenirati ekscentričnu kontrolu - doskoci su agresivni'
    ]
  },

  finisher: {
    name: 'Conditioning Finisher',
    duration: '8min',
    purpose: 'Snaga pod umorom - box-out simulacija',
    exercises: [
      {
        exerciseId: 'custom-box-out-drill-loaded',
        sets: '3',
        reps: '20s work / 60s rest',
        load: 'Partner resistance ili 10kg weighted vest',
        rest: '60s',
        notes: 'Box-out simulacija - primanje kontakta pod umorom'
      }
    ],
    coachingPoints: [
      'Simulacija realnog kontakta u igri',
      'Kukovi rade i pod umorom'
    ]
  },

  zavrsniDeo: {
    name: 'Hlađenje + Stretching + Disanje',
    duration: '10min',
    purpose: 'Oporavak kukova i donjeg dela tela',
    exercises: [
      {
        exerciseId: 'custom-light-jog-recovery',
        sets: '1',
        reps: '3-5min',
        load: 'BW',
        rest: '-',
        notes: 'Lagano trčanje'
      },
      {
        exerciseId: 'custom-hip-90-90-stretch',
        sets: '1',
        reps: '45s po strani (PNF)',
        load: 'BW',
        rest: '-',
        notes: '90/90 hip stretch - kritično za PF mobilnost'
      },
      {
        exerciseId: 'custom-glute-stretch',
        sets: '1',
        reps: '45s po strani (PNF)',
        load: 'BW',
        rest: '-',
        notes: 'Gluteus stretch - najopterećenija grupa kod PF'
      },
      {
        exerciseId: 'custom-breathing-exercises',
        sets: '1',
        reps: '3-5min',
        load: '-',
        rest: '-',
        notes: 'Disanje + reset'
      }
    ],
    coachingPoints: [
      'Kukovi MORAJU biti stretchovani nakon treninga',
      '90/90 stretch: najbolja vežba za hip mobilnost',
      'PNF protokol (6s kontrakcija, 12s relaksacija)'
    ]
  },

  totalDuration: '73min',
  warnings: [
    'RM FAZA: OBAVEZNO početi sa 12RM (67%)! Ne forsirati više!',
    'Tempo mora biti poštovan - ekscentrična faza gradi snagu',
    'Goblet squat: Ako gubi dubinu, smanji težinu',
    'Trap bar deadlift: Beginner ne ide preko 60kg!',
    'NIKADA ne preskakati uvodni i završni deo!'
  ],
  equipment: [
    'Kettlebell 16-24kg',
    'Trap bar + tegovi (40-60kg)',
    'Bučice 12-16kg',
    'Box 30-40cm',
    'Elastične trake (srednje)',
    'Teren / sala'
  ]
};

// ==========================================
// CENTER (C) - APSOLUTNA SNAGA + CORE
// ==========================================

export const centerStrengthCoreWorkout: CompleteWorkout = {
  id: 'center-strength-core-beginner',
  name: {
    sr: 'C - Apsolutna Snaga i Core (Beginner)',
    en: 'C - Absolute Strength and Core (Beginner)'
  },
  position: 'C',
  focus: 'Apsolutna snaga, ekscentrična kontrola doskoka, core pod opterećenjem',
  level: 'beginner',
  phase: 'preparation',
  
  uvod: {
    name: 'Proprioceptivni uvod + Aktivacija',
    duration: '15min',
    purpose: 'Celo telo aktivacija - centri nose najveće opterećenje',
    exercises: [
      {
        exerciseId: 'wrist-flexion-extension',
        sets: '3',
        reps: '12-15',
        load: 'BW',
        rest: '30s',
        notes: 'Šake - hvatanje lopte u kontaktu'
      },
      {
        exerciseId: 'ankle-dorsiflexion-plantarflexion',
        sets: '3',
        reps: '15',
        load: 'BW',
        rest: '30s',
        notes: 'Stopala - nose najveću težinu igrača'
      },
      {
        exerciseId: 'hip-mobility-active',
        sets: '4',
        reps: '12-15 po strani',
        load: '16-20kg',
        rest: '60s',
        notes: 'Kukovi - post-up pozicija zahteva mobilnost'
      },
      {
        exerciseId: 'custom-thoracic-spine-rotation',
        sets: '3',
        reps: '10 po strani',
        load: 'BW',
        rest: '45s',
        notes: 'Torakalna kičma - rotacija za post-up i rolovanje'
      },
      {
        exerciseId: 'custom-core-activation-deadbug',
        sets: '3',
        reps: '10-12 po strani',
        load: 'BW',
        rest: '60s',
        notes: 'Dead bug - core aktivacija, lumbalna kontrola'
      }
    ],
    coachingPoints: [
      'Centri nose najveće opterećenje - uvod mora biti temeljit',
      'Core aktivacija OBAVEZNA pre težih vežbi',
      'Torakalna mobilnost važna za post-up i hook shot'
    ]
  },

  cnsActivation: {
    name: 'CNS Aktivacija',
    duration: '5min',
    purpose: 'Aktivacija za teške vežbe',
    exercises: [
      {
        exerciseId: 'custom-medicine-ball-slam',
        sets: '3',
        reps: '8',
        load: '8-10kg mediball',
        rest: '90s',
        notes: 'Medicine ball slam - CNS + core aktivacija'
      }
    ],
    coachingPoints: [
      'Eksplozivno, ali kontrolisano',
      'Core engagovan kroz ceo pokret'
    ]
  },

  glavniDeo: {
    name: 'Glavni deo - Apsolutna Snaga',
    duration: '35min',
    purpose: 'Maksimalna snaga, ekscentrična kontrola, core stabilnost',
    exercises: [
      {
        exerciseId: 'custom-back-squat',
        sets: '4',
        reps: '12 (12RM faza)',
        load: '50-70kg (12RM)',
        rest: '3min',
        tempo: '3-1-1 (3s spuštanje, 1s pauza dole, 1s gore)',
        notes: 'Back squat - bazična snaga. Pojas OBAVEZAN! Tempo MORA biti poštovan.'
      },
      {
        exerciseId: 'custom-romanian-deadlift',
        sets: '4',
        reps: '10-12',
        load: '40-60kg (12RM)',
        rest: '2-3min',
        notes: 'RDL - hamstrings, gluteus, ekscentrična kontrola za doskoke'
      },
      {
        exerciseId: 'custom-overhead-press',
        sets: '3',
        reps: '10-12',
        load: '20-30kg (12RM)',
        rest: '2min',
        notes: 'Overhead press - gornji deo tela, core stabilnost'
      },
      {
        exerciseId: 'custom-pallof-press',
        sets: '3',
        reps: '12 po strani',
        load: '20-30kg',
        rest: '60s',
        notes: 'Pallof press - antirotacija core, kritično za primanje kontakta'
      }
    ],
    coachingPoints: [
      'RM FAZA: 12RM (67%) - OBAVEZNO za beginner-e!',
      'Back squat: Pojas OBAVEZAN! Izdah pri naporu (Valsalva prevencija!)',
      'Tempo 3-1-1: Ekscentrična faza + pauza dole = maksimalna snaga',
      'RDL: Hamstrings su ključ ekscentrične kontrole pri doskoku',
      'Overhead press: Core radi antirotaciju pod vertikalnim opterećenjem',
      'Centri MORAJU trenirati core pod opterećenjem'
    ]
  },

  finisher: {
    name: 'Conditioning Finisher - Core Endurance',
    duration: '8min',
    purpose: 'Core izdržljivost pod umorom',
    exercises: [
      {
        exerciseId: 'custom-plank-variations-circuit',
        sets: '3 runde',
        reps: 'Front plank 30s → Side plank L 20s → Side plank R 20s → Rest 60s',
        load: 'BW',
        rest: '60s između rundi',
        notes: 'Plank circuit - core izdržljivost. Disanje kroz nos!'
      }
    ],
    coachingPoints: [
      'Disanje MORA biti kontrolisano - NE zadržavati dah!',
      'Core mora raditi i pod umorom - realna situacija u igri'
    ]
  },

  zavrsniDeo: {
    name: 'Hlađenje + Stretching + Disanje',
    duration: '10min',
    purpose: 'Oporavak donjeg dela tela i kičme',
    exercises: [
      {
        exerciseId: 'custom-light-jog-recovery',
        sets: '1',
        reps: '3-5min',
        load: 'BW',
        rest: '-',
        notes: 'Lagano trčanje'
      },
      {
        exerciseId: 'custom-hip-flexor-stretch',
        sets: '1',
        reps: '45s po strani (PNF)',
        load: 'BW',
        rest: '-',
        notes: 'Hip flexors - maksimalno opterećeni kod centara'
      },
      {
        exerciseId: 'custom-lat-stretch',
        sets: '1',
        reps: '45s po strani',
        load: 'BW',
        rest: '-',
        notes: 'Lats - gornji deo tela stretch'
      },
      {
        exerciseId: 'custom-child-pose-spinal-decompression',
        sets: '1',
        reps: '2-3min',
        load: 'BW',
        rest: '-',
        notes: 'Child pose - dekompresija kičme nakon aksijalnogopterećenja'
      },
      {
        exerciseId: 'custom-breathing-exercises',
        sets: '1',
        reps: '3min',
        load: '-',
        rest: '-',
        notes: 'Disanje + reset CNS-a'
      }
    ],
    coachingPoints: [
      'Kičma je bila pod aksijanim opterećenjem - dekompresija OBAVEZNA!',
      'Child pose: minimum 2min, disanje duboko',
      'Hip flexors i lats posebna pažnja kod centara'
    ]
  },

  totalDuration: '73min',
  warnings: [
    'POJAS OBAVEZAN za back squat i deadlift varijante!',
    'RM FAZA: 12RM (67%) - NE forsirati više kod beginner-a!',
    'Tempo MORA biti poštovan - ekscentrična faza gradi snagu',
    'Valsalva fenomen prevencija: Izdah pri naporu, NE zadržavati dah!',
    'Dekompresija kičme u završnom delu OBAVEZNA!',
    'NIKADA ne preskakati uvodni i završni deo!'
  ],
  equipment: [
    'Barbell + tegovi (50-100kg)',
    'Power rack (safety bars)',
    'Pojas za podizanje tegova (OBAVEZAN)',
    'Medicine ball 8-10kg',
    'Cable machine ili trake za Pallof press',
    'Teren / sala'
  ]
};

// ==========================================
// INTERMEDIATE LEVEL - SVE POZICIJE
// ==========================================

// PG Intermediate - Brzina + Agilnost
export const pgSpeedIntermediateWorkout: CompleteWorkout = {
  id: 'pg-speed-reaction-intermediate',
  name: { sr: 'PG - Brzina i Reakcija (Intermediate)', en: 'PG - Speed and Reaction (Intermediate)' },
  position: 'PG',
  focus: 'Akceleracija, COD, reaktivna snaga',
  level: 'intermediate',
  phase: 'development',
  uvod: {
    name: 'Proprioceptivni uvod + Aktivacija',
    duration: '12min',
    purpose: 'Skraćen uvod - intermediate može brže',
    exercises: [
      { exerciseId: 'ankle-dorsiflexion-plantarflexion', sets: '2', reps: '12', load: 'BW', rest: '30s', notes: 'Brza aktivacija' },
      { exerciseId: 'hip-mobility-active', sets: '3', reps: '10 po strani', load: '14-16kg', rest: '45s', notes: 'Kukovi' },
      { exerciseId: 'custom-dynamic-lunges', sets: '2', reps: '10 po nozi', load: 'BW', rest: '30s', notes: 'Dinamični iskoraci' },
      { exerciseId: 'gluteus-activation-single-leg-rdl', sets: '2', reps: '10 po nozi', load: '14kg', rest: '45s', notes: 'Gluteus + balans' }
    ],
    coachingPoints: ['Brža tranzicija u glavni deo', 'Core već aktivan']
  },
  cnsActivation: {
    name: 'CNS Aktivacija',
    duration: '5min',
    purpose: 'CNS max',
    exercises: [{ exerciseId: 'quadriceps-hamstring-activation-plyometric', sets: '4', reps: '8', load: 'BW', rest: '90s', notes: 'Više intenzitet' }],
    coachingPoints: ['Max brzina', 'Kratak kontakt sa tlom']
  },
  glavniDeo: {
    name: 'Glavni deo - Brzina + Agilnost',
    duration: '40min',
    purpose: 'COD + akceleracija',
    exercises: [
      { exerciseId: 'custom-resisted-sprint-10m', sets: '5', reps: '5', load: '10kg sled', rest: '2min', notes: 'Resisted sprint - akceleracija' },
      { exerciseId: 'custom-pro-agility-drill', sets: '5', reps: '4', load: 'BW', rest: '90s', notes: 'Pro agility (5-10-5 test) - COD' },
      { exerciseId: 'custom-lateral-bound-continuous', sets: '4', reps: '8 po strani', load: 'BW', rest: '90s', notes: 'Lateralni bounds - eksplozivnost' },
      { exerciseId: 'custom-single-leg-box-jump', sets: '4', reps: '6 po nozi', load: 'BW', rest: '2min', notes: 'Single-leg box jump 40cm - reaktivna snaga' }
    ],
    coachingPoints: ['COD trenira se kroz shuttle', 'Resisted sprints < 10m (akceleracija)', 'Single-leg jump = balans + snaga']
  },
  finisher: {
    name: 'Conditioning Finisher',
    duration: '10min',
    purpose: 'Brzina pod umorom',
    exercises: [{ exerciseId: 'custom-suicide-sprints', sets: '4', reps: '4 linije (baseline → free throw → half → opposite free throw → full)', load: 'BW', rest: '90s', notes: 'Suicide sprints - izdržljivost + COD' }],
    coachingPoints: ['Max napor', 'Tehnika ne sme slabiti']
  },
  zavrsniDeo: {
    name: 'Hlađenje + Stretching',
    duration: '8min',
    purpose: 'Oporavak',
    exercises: [
      { exerciseId: 'custom-light-jog-recovery', sets: '1', reps: '2-3min', load: 'BW', rest: '-', notes: 'Lagano' },
      { exerciseId: 'custom-hamstring-stretch', sets: '1', reps: '30s po nozi', load: 'BW', rest: '-', notes: 'Hamstrings' },
      { exerciseId: 'custom-breathing-exercises', sets: '1', reps: '3min', load: '-', rest: '-', notes: 'Disanje' }
    ],
    coachingPoints: ['Skraćen završni deo - intermediate se brže oporavlja']
  },
  totalDuration: '75min',
  warnings: ['Resisted sprints < 10m SAMO!', 'COD tehniku ne forsirati', 'Single-leg jump - balans MORA biti siguran'],
  equipment: ['Sled 10kg', 'Box 40cm', 'Teren']
};

// SG Intermediate
export const sgExplosiveIntermediateWorkout: CompleteWorkout = {
  id: 'sg-explosive-intermediate',
  name: { sr: 'SG - Eksplozivnost i Lateralna (Intermediate)', en: 'SG - Explosive and Lateral (Intermediate)' },
  position: 'SG',
  focus: 'Vertikalni skok, lateralna eksplozivnost, šut pod pritiskom',
  level: 'intermediate',
  phase: 'development',
  uvod: {
    name: 'Proprioceptivni uvod',
    duration: '12min',
    purpose: 'Priprema za eksplozivne vežbe',
    exercises: [
      { exerciseId: 'ankle-dorsiflexion-plantarflexion', sets: '3', reps: '12', load: 'BW', rest: '30s', notes: 'Stopala' },
      { exerciseId: 'hip-mobility-active', sets: '3', reps: '10 po strani', load: '16kg', rest: '45s', notes: 'Kukovi' },
      { exerciseId: 'custom-lateral-leg-swings', sets: '2', reps: '15 po nozi', load: 'BW', rest: '30s', notes: 'Lateralna mobilnost' },
      { exerciseId: 'gluteus-activation-single-leg-rdl', sets: '2', reps: '10 po nozi', load: '16kg', rest: '45s', notes: 'Gluteus' }
    ],
    coachingPoints: ['Fokus na lateralnu mobilnost']
  },
  cnsActivation: {
    name: 'CNS Aktivacija',
    duration: '5min',
    purpose: 'Eksplozivnost CNS',
    exercises: [{ exerciseId: 'custom-depth-jump-30cm', sets: '4', reps: '5', load: 'BW', rest: '2min', notes: 'Depth jump 30cm - reaktivna snaga' }],
    coachingPoints: ['Kratak kontakt sa tlom', 'Max visina skoka']
  },
  glavniDeo: {
    name: 'Glavni deo - Vertikalni Skok + Lateralna',
    duration: '40min',
    purpose: 'Max vertikalni jump + lateralna eksplozivnost',
    exercises: [
      { exerciseId: 'custom-trap-bar-jump', sets: '5', reps: '5', load: '30% 1RM (~40-50kg)', rest: '3min', notes: 'Trap bar jump - max eksplozivnost' },
      { exerciseId: 'custom-box-jump-progressive', sets: '4', reps: '5', load: 'BW', rest: '2min', notes: 'Box jump 50-60cm - progresivno povećanje' },
      { exerciseId: 'custom-lateral-bounds-loaded', sets: '4', reps: '6 po strani', load: '8kg vest', rest: '90s', notes: 'Lateralni bounds sa ponderom' },
      { exerciseId: 'custom-single-leg-rdl-explosive', sets: '4', reps: '8 po nozi', load: '16-20kg', rest: '90s', notes: 'Eksplozivni single-leg RDL' }
    ],
    coachingPoints: ['Trap bar jump: Max brzina, lak teret', 'Box jump: Tehnika > visina', 'Lateralna eksplozivnost kritična za SG']
  },
  finisher: {
    name: 'Conditioning Finisher',
    duration: '10min',
    purpose: 'Eksplozivnost pod umorom',
    exercises: [{ exerciseId: 'custom-burpee-box-jump', sets: '4', reps: '10', load: 'BW', rest: '90s', notes: 'Burpee + box jump 40cm' }],
    coachingPoints: ['Simulacija šuta pod pritiskom']
  },
  zavrsniDeo: {
    name: 'Hlađenje + Stretching',
    duration: '8min',
    purpose: 'Oporavak',
    exercises: [
      { exerciseId: 'custom-light-jog-recovery', sets: '1', reps: '2-3min', load: 'BW', rest: '-', notes: 'Lagano' },
      { exerciseId: 'custom-hip-flexor-stretch', sets: '1', reps: '30s po strani', load: 'BW', rest: '-', notes: 'Hip flexors' },
      { exerciseId: 'custom-breathing-exercises', sets: '1', reps: '3min', load: '-', rest: '-', notes: 'Disanje' }
    ],
    coachingPoints: ['Stretching kukova prioritet']
  },
  totalDuration: '75min',
  warnings: ['Trap bar jump: Lak teret (30% 1RM), max brzina!', 'Box jump: Tehnika MORA biti sigurna', 'Depth jump: NE preko 30cm za intermediate!'],
  equipment: ['Trap bar + tegovi', 'Box 50-60cm', 'Weighted vest 8kg', 'Teren']
};

// SF, PF, C Intermediate (skraćene verzije - isti princip)
export const sfBalanceIntermediateWorkout: CompleteWorkout = {
  id: 'sf-balance-intermediate',
  name: { sr: 'SF - Balans i Svestranost (Intermediate)', en: 'SF - Balance and Versatility (Intermediate)' },
  position: 'SF',
  focus: 'Single-leg snaga, funkcionalna svestranost, reaktivnost',
  level: 'intermediate',
  phase: 'development',
  uvod: { name: 'Uvod', duration: '12min', purpose: 'Priprema', exercises: [{ exerciseId: 'hip-mobility-active', sets: '3', reps: '10', load: '16kg', rest: '45s', notes: 'Kukovi' }], coachingPoints: ['Balans fokus'] },
  cnsActivation: { name: 'CNS', duration: '5min', purpose: 'Aktivacija', exercises: [{ exerciseId: 'custom-single-leg-depth-jump', sets: '4', reps: '4 po nozi', load: 'BW', rest: '2min', notes: 'Single-leg depth jump 20cm' }], coachingPoints: ['Max reaktivnost'] },
  glavniDeo: { name: 'Glavni', duration: '40min', purpose: 'Single-leg + funkcionalna', exercises: [
    { exerciseId: 'custom-pistol-squat-assisted', sets: '4', reps: '6-8 po nozi', load: 'BW ili TRX asist', rest: '2min', notes: 'Pistol squat' },
    { exerciseId: 'custom-single-leg-rdl-loaded', sets: '4', reps: '8 po nozi', load: '20-24kg', rest: '90s', notes: 'Single-leg RDL' },
    { exerciseId: 'custom-lateral-skater-jumps', sets: '4', reps: '10 po strani', load: 'BW', rest: '90s', notes: 'Skater jumps' }
  ], coachingPoints: ['Pistol squat = ultimate single-leg'] },
  finisher: { name: 'Finisher', duration: '10min', purpose: 'Izdržljivost', exercises: [{ exerciseId: 'custom-single-leg-hop-circuit', sets: '3', reps: '30s po nozi', load: 'BW', rest: '90s', notes: 'Single-leg hop kontinuirano' }], coachingPoints: ['Balans pod umorom'] },
  zavrsniDeo: { name: 'Završni', duration: '8min', purpose: 'Oporavak', exercises: [{ exerciseId: 'custom-breathing-exercises', sets: '1', reps: '5min', load: '-', rest: '-', notes: 'Disanje' }], coachingPoints: ['Stretching'] },
  totalDuration: '75min',
  warnings: ['Pistol squat: Asistencija OK dok ne savladaš tehniku', 'Single-leg depth jump < 20cm!'],
  equipment: ['Bučice 20-24kg', 'TRX (opciono)', 'Box 20cm']
};

export const pfHipStrengthIntermediateWorkout: CompleteWorkout = {
  id: 'pf-hip-strength-intermediate',
  name: { sr: 'PF - Snaga Kukova (Intermediate)', en: 'PF - Hip Strength (Intermediate)' },
  position: 'PF',
  focus: 'Snaga kukova 5RM faza, lateralna brzina, kontakt',
  level: 'intermediate',
  phase: 'development',
  uvod: { name: 'Uvod', duration: '12min', purpose: 'Priprema', exercises: [{ exerciseId: 'hip-mobility-active', sets: '4', reps: '12', load: '20kg', rest: '45s', notes: 'Kukovi prioritet' }], coachingPoints: ['Gluteus max aktivacija'] },
  cnsActivation: { name: 'CNS', duration: '5min', purpose: 'Aktivacija', exercises: [{ exerciseId: 'custom-box-jump-weighted', sets: '3', reps: '5', load: '10kg vest', rest: '2min', notes: 'Weighted box jump 40cm' }], coachingPoints: ['Snaga > brzina'] },
  glavniDeo: { name: 'Glavni', duration: '40min', purpose: '5RM faza - snaga raste', exercises: [
    { exerciseId: 'custom-goblet-squat', sets: '4', reps: '8 (5RM faza prelaz)', load: '28-36kg', rest: '2min', tempo: '3-1-1', notes: 'Goblet squat - povećanje težine' },
    { exerciseId: 'custom-trap-bar-deadlift', sets: '4', reps: '8', load: '80-100kg (5RM faza)', rest: '3min', notes: 'Trap bar deadlift - 5RM faza' },
    { exerciseId: 'custom-bulgarian-split-squat', sets: '4', reps: '8 po nozi', load: '20-24kg', rest: '2min', notes: 'Bulgarian split' }
  ], coachingPoints: ['5RM FAZA: 87% 1RM', 'Tempo MORA biti poštovan', 'Pojas za deadlift!'] },
  finisher: { name: 'Finisher', duration: '10min', purpose: 'Snaga pod umorom', exercises: [{ exerciseId: 'custom-sled-push', sets: '4', reps: '20m', load: '40-60kg', rest: '2min', notes: 'Sled push - snaga kukova' }], coachingPoints: ['Simulacija box-out otpora'] },
  zavrsniDeo: { name: 'Završni', duration: '8min', purpose: 'Oporavak', exercises: [{ exerciseId: 'custom-hip-90-90-stretch', sets: '1', reps: '60s po strani', load: 'BW', rest: '-', notes: '90/90 stretch' }], coachingPoints: ['Kukovi stretching obavezan'] },
  totalDuration: '75min',
  warnings: ['5RM FAZA: 87% 1RM - NE forsirati više!', 'Pojas OBAVEZAN za deadlift!', 'Tempo 3-1-1 MORA biti poštovan'],
  equipment: ['Kettlebell 28-36kg', 'Trap bar + 80-100kg', 'Sled + tegovi', 'Pojas']
};

export const centerStrengthIntermediateWorkout: CompleteWorkout = {
  id: 'center-strength-intermediate',
  name: { sr: 'C - Apsolutna Snaga (Intermediate)', en: 'C - Absolute Strength (Intermediate)' },
  position: 'C',
  focus: 'Apsolutna snaga 5RM faza, core pod maksimalnim opterećenjem',
  level: 'intermediate',
  phase: 'development',
  uvod: { name: 'Uvod', duration: '12min', purpose: 'Priprema', exercises: [{ exerciseId: 'custom-core-activation-deadbug', sets: '3', reps: '15 po strani', load: 'BW', rest: '45s', notes: 'Core aktivacija obavezna' }], coachingPoints: ['Core MORA biti aktivan pre teških vežbi'] },
  cnsActivation: { name: 'CNS', duration: '5min', purpose: 'CNS za teške vežbe', exercises: [{ exerciseId: 'custom-medicine-ball-slam', sets: '4', reps: '10', load: '12kg', rest: '90s', notes: 'Mediball slam' }], coachingPoints: ['Max snaga'] },
  glavniDeo: { name: 'Glavni', duration: '40min', purpose: '5RM FAZA - Apsolutna snaga', exercises: [
    { exerciseId: 'custom-back-squat', sets: '5', reps: '5 (5RM faza)', load: '90-110kg (87% 1RM)', rest: '4min', tempo: '3-1-1', notes: 'Back squat - 5RM faza. POJAS OBAVEZAN!' },
    { exerciseId: 'custom-romanian-deadlift', sets: '4', reps: '6-8', load: '80-100kg', rest: '3min', notes: 'RDL - ekscentrična snaga' },
    { exerciseId: 'custom-overhead-press', sets: '4', reps: '6-8', load: '40-50kg', rest: '2min', notes: 'Overhead press - core stabilnost' },
    { exerciseId: 'custom-farmer-carry', sets: '3', reps: '40m', load: '40kg po ruci', rest: '2min', notes: 'Farmer carry - core + grip' }
  ], coachingPoints: ['5RM FAZA: 87% 1RM!', 'Pojas OBAVEZAN!', 'Izdah pri naporu - Valsalva prevencija!', 'Farmer carry = funkcionalna core snaga'] },
  finisher: { name: 'Finisher', duration: '10min', purpose: 'Core pod umorom', exercises: [{ exerciseId: 'custom-weighted-plank', sets: '3', reps: '45s', load: '20kg plate na leđima', rest: '90s', notes: 'Weighted plank' }], coachingPoints: ['Core izdržljivost'] },
  zavrsniDeo: { name: 'Završni', duration: '8min', purpose: 'Dekompresija kičme', exercises: [{ exerciseId: 'custom-child-pose-spinal-decompression', sets: '1', reps: '3-5min', load: 'BW', rest: '-', notes: 'Child pose - dekompresija' }], coachingPoints: ['Dekompresija OBAVEZNA!'] },
  totalDuration: '75min',
  warnings: ['5RM FAZA: 87% 1RM - velika težina!', 'POJAS OBAVEZAN!', 'Izdah pri naporu - NE zadržavati dah!', 'Dekompresija kičme u završnom delu OBAVEZNA!'],
  equipment: ['Barbell + 90-150kg', 'Power rack', 'Pojas', 'Kettlebells 40kg', 'Mediball 12kg']
};

// ==========================================
// ADVANCED + ELITE NIVOI (skraćeno - isti princip)
// ==========================================

// Advanced template primer (PG)
export const pgSpeedAdvancedWorkout: CompleteWorkout = {
  id: 'pg-speed-advanced',
  name: { sr: 'PG - Brzina Elite (Advanced)', en: 'PG - Elite Speed (Advanced)' },
  position: 'PG',
  focus: 'Max brzina, COD, kompleksne agilnosti',
  level: 'advanced',
  phase: 'peak',
  uvod: { name: 'Minimalni uvod', duration: '10min', purpose: 'Brza aktivacija', exercises: [{ exerciseId: 'hip-mobility-active', sets: '2', reps: '8', load: '16kg', rest: '30s', notes: 'Brzo' }], coachingPoints: ['Advanced treba manje pripreme'] },
  cnsActivation: { name: 'CNS Max', duration: '5min', purpose: 'Max CNS', exercises: [{ exerciseId: 'custom-depth-jump-40cm', sets: '4', reps: '4', load: 'BW', rest: '2min', notes: 'Depth jump 40cm' }], coachingPoints: ['Max reaktivnost'] },
  glavniDeo: { name: 'Glavni - Max Performance', duration: '45min', purpose: 'Peak brzina', exercises: [
    { exerciseId: 'custom-flying-30m-sprint', sets: '6', reps: '3', load: 'BW', rest: '4min', notes: 'Flying 30m - max brzina faza' },
    { exerciseId: 'custom-reactive-agility-drill', sets: '5', reps: '5', load: 'BW', rest: '3min', notes: 'Reactive agility - odlučivanje pod pritiskom' },
    { exerciseId: 'custom-depth-jump-to-sprint', sets: '5', reps: '4', load: 'BW', rest: '3min', notes: 'Depth jump → immediate sprint 10m' }
  ], coachingPoints: ['Flying sprints = max velocity training', 'Reactive drills = game-like', 'Kompleksni protokoli (pliometrija → sprint)'] },
  finisher: { name: 'Finisher', duration: '8min', purpose: 'Speed endurance', exercises: [{ exerciseId: 'custom-repeated-sprint-ability', sets: '6', reps: '30m sprint / 30s rest', load: 'BW', rest: '30s', notes: 'RSA protocol' }], coachingPoints: ['Brzina pod maksimalnim umorom'] },
  zavrsniDeo: { name: 'Završni', duration: '7min', purpose: 'Brzi oporavak', exercises: [{ exerciseId: 'custom-breathing-exercises', sets: '1', reps: '5min', load: '-', rest: '-', notes: 'CNS reset' }], coachingPoints: ['Minimalni stretching - advanced se brže oporavlja'] },
  totalDuration: '75min',
  warnings: ['Depth jump 40cm SAMO za advanced!', 'Flying sprints zahtevaju dugačku stazu (60m+ total)', 'RSA protokol = maksimalni napor'],
  equipment: ['Teren minimum 60m', 'Čunjevi', 'Štoperica']
};

// Elite template primer (C) - MAX SNAGA
export const centerStrengthEliteWorkout: CompleteWorkout = {
  id: 'center-strength-elite',
  name: { sr: 'C - Max Snaga (Elite)', en: 'C - Max Strength (Elite)' },
  position: 'C',
  focus: '1-2RM faza, maksimalna apsolutna snaga',
  level: 'elite',
  phase: 'peak',
  uvod: { name: 'Minimalni uvod', duration: '10min', purpose: 'Priprema za max težinu', exercises: [{ exerciseId: 'custom-core-activation-deadbug', sets: '2', reps: '12', load: 'BW', rest: '45s', notes: 'Core obavezno' }], coachingPoints: ['Minimalna priprema za elite'] },
  cnsActivation: { name: 'CNS Potenciacija', duration: '8min', purpose: 'PAP protokol', exercises: [
    { exerciseId: 'custom-back-squat-warmup-sets', sets: '3', reps: '3-2-1', load: '60%-80%-90% 1RM', rest: '2-3min', notes: 'Warm-up setovi ka 1RM' }
  ], coachingPoints: ['PAP (Post-Activation Potentiation) protokol'] },
  glavniDeo: { name: 'Glavni - 1-2RM FAZA', duration: '50min', purpose: 'MAKSIMALNA SNAGA', exercises: [
    { exerciseId: 'custom-back-squat', sets: '6', reps: '1-2 (1-2RM faza)', load: '140-160kg (95-100% 1RM)', rest: '5min', tempo: 'Kontrolisano', notes: 'Back squat - 1-2RM faza. SPOTTER OBAVEZAN! POJAS OBAVEZAN!' },
    { exerciseId: 'custom-deadlift-conventional', sets: '5', reps: '2-3', load: '140-170kg', rest: '5min', notes: 'Deadlift - blizu max' },
    { exerciseId: 'custom-bench-press', sets: '4', reps: '3-5', load: '90-110kg', rest: '3min', notes: 'Bench press - gornji deo' }
  ], coachingPoints: ['1-2RM FAZA: 95-100% 1RM - MAKSIMALNA TEŽINA!', 'SPOTTER OBAVEZAN za sve vežbe!', 'POJAS OBAVEZAN!', 'Izdah pri naporu - Valsalva kontrola!', '5min rest između setova minimum!', 'Elite centri mogu 140-170kg deadlift'] },
  finisher: { name: 'Finisher - Accessory', duration: '12min', purpose: 'Accessory work', exercises: [
    { exerciseId: 'custom-pull-ups-weighted', sets: '3', reps: '8-10', load: '20kg', rest: '2min', notes: 'Weighted pull-ups' },
    { exerciseId: 'custom-ab-rollout', sets: '3', reps: '12-15', load: 'BW', rest: '90s', notes: 'Ab wheel rollout - core' }
  ], coachingPoints: ['Accessory nakon main lifts'] },
  zavrsniDeo: { name: 'Završni - Dekompresija', duration: '10min', purpose: 'Oporavak CNS + kičma', exercises: [
    { exerciseId: 'custom-child-pose-spinal-decompression', sets: '1', reps: '5min', load: 'BW', rest: '-', notes: 'Child pose minimum 5min' },
    { exerciseId: 'custom-breathing-exercises', sets: '1', reps: '5min', load: '-', rest: '-', notes: 'CNS reset' }
  ], coachingPoints: ['Dekompresija KRITIČNA nakon 1-2RM treninga!', 'CNS oporavak minimum 48-72h'] },
  totalDuration: '90min',
  warnings: [
    '1-2RM FAZA: 95-100% 1RM - EKSTREMNO TEŠKA TEŽINA!',
    'SPOTTER OBAVEZAN za SVE main lifts!',
    'POJAS OBAVEZAN!',
    'Izdah pri naporu - Valsalva MORA biti kontrolisan!',
    'Dekompresija kičme OBAVEZNA minimum 5min!',
    'CNS oporavak: minimum 48-72h između 1-2RM treninga!',
    'Elite nivo: SAMO igrači sa 2+ godina iskustva!'
  ],
  equipment: ['Barbell + 140-200kg tegova', 'Power rack sa spotter bars', 'Pojas profesionalni', 'Chalk', 'Straps (opciono za deadlift)']
};

// Katalog svih template-a (15 total)
export const workoutTemplates = [
  // Beginner (5)
  pgSpeedReactionWorkout,
  sgExplosiveLateralWorkout,
  sfBalanceVersatilityWorkout,
  pfHipStrengthMobilityWorkout,
  centerStrengthCoreWorkout,
  // Intermediate (5)
  pgSpeedIntermediateWorkout,
  sgExplosiveIntermediateWorkout,
  sfBalanceIntermediateWorkout,
  pfHipStrengthIntermediateWorkout,
  centerStrengthIntermediateWorkout,
  // Advanced (1 primer)
  pgSpeedAdvancedWorkout,
  // Elite (1 primer)
  centerStrengthEliteWorkout
  // Napomena: Advanced i Elite za ostale pozicije slede isti princip
  // Total: 12 kompletnih + principi za ostatak
];

export function getWorkoutByPosition(position: BasketballPosition, level: 'beginner' | 'intermediate' | 'advanced' | 'elite'): CompleteWorkout | undefined {
  return workoutTemplates.find(w => w.position === position && w.level === level);
}

export function getWorkoutById(id: string): CompleteWorkout | undefined {
  return workoutTemplates.find(w => w.id === id);
}
