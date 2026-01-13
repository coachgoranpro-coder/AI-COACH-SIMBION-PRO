/**
 * Training Knowledge Base - "Fizička priprema košarkaša" by Coach Goran
 * Integrated with AI Training Generator
 */

export interface TrainingPrinciple {
  id: string;
  title: string;
  description: string;
  application: string;
  references?: string[];
}

export const TRAINING_PRINCIPLES: TrainingPrinciple[] = [
  {
    id: 'player-capable',
    title: 'Player Must Be Capable To Do',
    description: 'Fizička priprema je osposobljavanje igrača da ispuni taktičko-tehničke zadatke. Ne treniramo fizičke parametre izolovano, već u funkciji košarkaške igre.',
    application: 'Svaka vežba mora imati direktnu primenu u igri. Izbegavati izolovane vežbe bez košarkaškog konteksta.',
    references: ['Don Nelson coaching clinic', 'NSCA Basketball Strength & Conditioning']
  },
  {
    id: 'four-levels',
    title: 'Četiri nivoa fizičke pripreme',
    description: 'Opšta (kondiciona) → Specifična (usmerena na košarku) → Specijalna (pozicija) → Situaciona (individualni stil)',
    application: 'Progresija je OBAVEZNA. Ne preskakati nivoe. Bekovi se ne treniraju isto kao centri. Dva igrača na istoj poziciji se ne treniraju identično.',
    references: ['Fratrić - Teorija sportskog treninga', 'Periodization in Team Sports']
  },
  {
    id: 'proprioception-process',
    title: 'Propriocepcija kao proces',
    description: 'Propriocepcija NIJE izdvojena vežba, već proces koji prožima sve trenažne sfere. Koordinacija, balans, fleksibilnost usko povezani.',
    application: '15-20min PRE treninga + hlađenje i istezanje POSLE. Prevencija povreda i adaptacija organizma.',
    references: ['Proprioception in Sport Medicine', 'Cook - Movement Patterns']
  },
  {
    id: 'no-skipping-steps',
    title: 'Ne preskakati stepenice',
    description: 'Putevi do rezultata su različiti, ali imaju zajedničku karakteristiku - ukoliko preskačete stepenice, pad je neminovan.',
    application: 'Postupnost je ključ. Brži napredak = veći rizik od povrede. Adaptacija zahteva vreme.',
    references: ['Tudor Bompa - Periodization', 'Verkoshansky - Special Strength']
  },
  {
    id: 'breathing-law',
    title: 'Zakon #1: Disanje (Valsalva fenomen)',
    description: 'Košarka je sport eksplozivne snage. Kod neobučenih sportista brzi maksimalni pokreti vode do Valsalva fenomena.',
    application: 'PRVO učiti disanje pri podizanju tereta. Uvek ponavljati na početku svih priprema.',
    references: ['NSCA Essentials', 'Strength Training Anatomy']
  },
  {
    id: 'proprioceptive-exercises',
    title: 'Zakon #2: Proprioceptivne vežbe',
    description: 'Sredstva ista ili slična kao kod razvoja gipkosti, koordinacije i okretnosti. Preventiva povreda.',
    application: 'Integrisati u zagrevanje i završni deo treninga. Balans ploče, stabilizacija, mobilnost zglobova.',
    references: ['NBA Performance Center', 'Human Kinetics - Basketball Conditioning']
  },
  {
    id: 'integration',
    title: 'Integracija sa košarkom',
    description: 'Fizička priprema mora biti uklopljena u košarkaški trening. Ukoliko nije, onda je paralelna i nema koristi.',
    application: 'Specifične vežbe sa loptom. Košarkaški kontekst u teretani. Razvoj u kinetičkom lancu pokreta bitnih za košarku.',
    references: ['FIBA Physical Preparation Protocols', 'EuroLeague Training Methods']
  },
  {
    id: 'individualization',
    title: '100% Personalizacija',
    description: 'Nemoguće je trenirati isto 2 igrača na istoj poziciji, čak iako su im parametri identični. Košarkaša trenirati da bude najbolji u onome što jeste.',
    application: 'Individualni dosijei. Praćenje napretka. Adaptacija programa prema reakcijama sportiste.',
    references: ['Tactical Periodization', 'Athlete Monitoring Systems']
  },
  {
    id: 'recovery-importance',
    title: 'Oporavak = Super kompenzacija',
    description: 'Trening je katabolizam, super kompenzacija je anabolizam. Povrede se dešavaju jer umor i nedovoljan oporavak utiču na koncentraciju.',
    application: 'Ishrana, rehidracija, san (i između treninga). Pauza od 7 dana spušta kapacitete za 20%, potrebno duplo više vremena za povratak.',
    references: ['Sports Science Journal - Recovery', 'Sleep & Performance Research']
  },
  {
    id: 'hydration-training',
    title: 'Hidratacija se trenira',
    description: 'Visok intenzitet: 7-10gr UH/kg + minimum 2.5-3L tečnosti. Umereni: 5-7gr UH/kg + 2.5-3L. Faktor koji donosi pobedu jeste podjednak kvalitet u prvom i drugom poluvremenu.',
    application: 'Individualni plan. "Salty sweater" test (crna majica - bele mrlje). Unos 30-60gr UH/h tokom treninga, 150-300ml na 15min.',
    references: ['NSCA Nutrition Guidelines', 'IOC Hydration in Sports']
  },
  {
    id: 'asocialization-threat',
    title: 'Asocijalizacija kao pretnja',
    description: 'Društvene mreže i komercijalizacija dovele do zatvaranja u sebe. Gledanje isključivo ličnih interesa. Statistika utiče na količinu novca.',
    application: 'Timski igrači retki i dragoceni. Motivacija za treningom u teretani niska kad nisu zadovoljni učinkom. Rano zakazivanje treninga pomaže.',
    references: ['Sport Psychology', 'Team Cohesion Research']
  },
  {
    id: 'periodization-relaxed',
    title: 'Relaksirana periodizacija',
    description: 'Gustina kalendara uslovljava prilagođenu periodizaciju. Cilj: adaptacija kroz fleksibilno planiranje.',
    application: 'Pripremni 40% specifičnosti → Specifični 60% → Takmičarski 80%. Prilagođavanje broju utakmica i treninga.',
    references: ['Franja Fratrić - Periodizacija', 'FIBA Season Planning']
  },
  {
    id: 'diagnostics-beyond-numbers',
    title: 'Test nije samo broj',
    description: 'Dijagnostika mora da analizira POKRET, ne samo rezultat. Skok 60cm bez primene u igri je besmislen. Pravi test: tehnička analiza + prenos na igru.',
    application: 'Video analiza, slow motion, analiza doskoka, asimetrije, balansa. Povezati test sa trenažnim planom: test → interpretacija → vežba → adaptacija.',
    references: ['Simbion AI - Biomehanička analiza', 'Kinovea motion analysis']
  },
  {
    id: 'individual-files',
    title: 'Individualni dosijei sa slikama',
    description: 'Svaki igrač ima dosije sa slikama i komentarima. Slike pokazuju napredak i motivišuće deluju na igrače.',
    application: 'Folder po igraču. Praćenje tokom sezone. Komparacija testova (inicijalno, tranzitno, finalno). Reagovanje na trenažne stimuluse.',
    references: ['Athlete Monitoring Systems', 'Load Management']
  },
  {
    id: 'sacometrija',
    title: 'Šacometrija i trenersko iskustvo',
    description: 'Dijagnostički aparat golim okom - brzina reakcije, koordinacija. Ne zanemariti vrednost iskusnog trenera. AI nadograđuje, ne zamenjuje.',
    application: 'Vizuelna procena + AI video analiza. Kombinacija iskustva i tehnologije. Trener vidi ono što brojevi ne pokazuju.',
    references: ['Coaching Experience', 'AI Motion Tracking']
  },
  {
    id: 'proprioception-priority',
    title: 'Propriocepcija najvažnija',
    description: 'Najvažnije za ekipu je da svi budu zdravi. Propriocepcija je prevencija povreda i osnov svega.',
    application: 'Prioritet u dijagnostici: balans, kontrola doskoka, stabilizacija, mobilnost. Svaki test mora proveriti proprioceptivnu kontrolu.',
    references: ['Injury Prevention', 'Movement Quality Assessment']
  },
  {
    id: 'test-precision-tactical',
    title: 'Test preciznosti + taktički zadaci',
    description: 'Najznačajni test jer ukoliko igrač ne može da postigne koš uzaludan je trening. Suština: taktičko-tehnički zadaci + fizičke mogućnosti.',
    application: 'Broj šuteva/ubačenih. Iz kojih pozicija? Sa kojim procentom? Koliko dugo sa istim intenzitetom? Povezati sa roll/pop, akcijama.',
    references: ['NBA Shooting Analytics', 'Sport-Specific Testing']
  },
  {
    id: 'write-analyze-repeat',
    title: 'Treninzi se pišu i ponovo čitaju',
    description: 'Najčuvanija "tajna" trenerskog esnafa. Analizom i poređenjem početnog i dostignutog nivoa obavezno nađu bolja rešenja.',
    application: 'Dnevnik treninga. Komparacija. Korekcija programa. Kontinuirano učenje iz prakse.',
    references: ['Reflective Practice', 'Coaching Journal']
  },
  {
    id: 'subjective-feeling',
    title: 'Subjektivan osećaj igrača',
    description: 'Ne ignorisati subjektivan osećaj - da li mu nešto "prija" ili ne. Sa manjim korekcijama postiže se viša motivisanost.',
    application: 'Razgovor sa igračem. Artikulisati osećaj u trenažni proces. "Kako si se osećao?" nakon treninga/testa.',
    references: ['Athlete Wellness Monitoring', 'RPE Scale']
  },
  {
    id: 'functional-transfer',
    title: 'Funkcionalni prenos u igru',
    description: 'Test je besmislen bez prenosa u igru. Koliko puta uhvati loptu? Koliko je puta bio u pravilnom položaju? Sve predradnje?',
    application: 'Ne trenirati izolovano. Svaka vežba mora imati košarkaški kontekst. Kako istu vežbu koristiti za više elemenata?',
    references: ['Functional Training', 'Transfer of Training']
  }
];

export const BASKETBALL_SOURCES = [
  {
    name: 'FIBA',
    description: 'Official FIBA protocols for physical preparation. Testing, norms and recommendations.',
    topics: ['periodization', 'testing', 'norms', 'youth development']
  },
  {
    name: 'NBA Performance Center',
    description: 'NBA training methods - speed, agility, strength and conditioning protocols.',
    topics: ['speed', 'agility', 'plyometrics', 'recovery']
  },
  {
    name: 'EuroLeague',
    description: 'European professional basketball training programs and methodologies.',
    topics: ['in-season training', 'load management', 'periodization']
  },
  {
    name: 'NSCA',
    description: 'National Strength & Conditioning Association - Basketball-specific research.',
    topics: ['strength', 'conditioning', 'periodization', 'testing']
  },
  {
    name: 'Human Kinetics',
    description: 'Sports science publisher - Basketball conditioning, mobility and flexibility.',
    topics: ['mobility', 'flexibility', 'warm-up', 'injury prevention']
  },
  {
    name: 'Basketball Reference',
    description: 'Statistical analysis and player performance data.',
    topics: ['player statistics', 'game analysis', 'performance metrics']
  }
];

export const TRAINING_BOOK_REFERENCES = [
  {
    title: 'Sportski trening',
    authors: ['M. Bjelica', 'D. Fratrić'],
    year: 2013,
    topics: ['periodization', 'training methodology', 'load management']
  },
  {
    title: 'Atletska priprema košarkaša',
    authors: ['J. Šiško', 'S. Poretić'],
    year: 2019,
    topics: ['strength', 'conditioning', 'speed', 'agility']
  },
  {
    title: 'Basketball Anatomy',
    authors: ['Brian Cole', 'Rob Panariello'],
    year: 2016,
    topics: ['biomechanics', 'injury prevention', 'muscle activation']
  },
  {
    title: 'Fizička priprema košarkaša',
    authors: ['Coach Goran'],
    year: 2024,
    topics: ['proprioception', 'individualization', 'adaptation', 'integration']
  }
];

/**
 * Get training principle by ID
 */
export function getTrainingPrinciple(id: string): TrainingPrinciple | undefined {
  return TRAINING_PRINCIPLES.find(p => p.id === id);
}

/**
 * Get relevant principles for training context
 */
export function getRelevantPrinciples(
  factors: string[],
  season: string,
  _context: string
): TrainingPrinciple[] {
  const relevant: TrainingPrinciple[] = [];

  // Always include core principles
  relevant.push(
    getTrainingPrinciple('player-capable')!,
    getTrainingPrinciple('breathing-law')!
  );

  // Season-specific
  if (season === 'off-season') {
    relevant.push(
      getTrainingPrinciple('four-levels')!,
      getTrainingPrinciple('no-skipping-steps')!
    );
  } else if (season === 'in-season') {
    relevant.push(
      getTrainingPrinciple('recovery-importance')!,
      getTrainingPrinciple('integration')!
    );
  }

  // Factor-specific
  if (factors.some(f => f.toLowerCase().includes('koordinacija') || f.toLowerCase().includes('coordination'))) {
    relevant.push(getTrainingPrinciple('proprioception-process')!);
  }

  if (factors.some(f => f.toLowerCase().includes('snaga') || f.toLowerCase().includes('strength'))) {
    relevant.push(getTrainingPrinciple('proprioceptive-exercises')!);
  }

  // Always add personalization and recovery
  relevant.push(
    getTrainingPrinciple('individualization')!,
    getTrainingPrinciple('periodization-relaxed')!
  );

  return relevant;
}

/**
 * Format principles as prompt context
 */
export function formatPrinciplesForPrompt(principles: TrainingPrinciple[], language: 'sr' | 'en'): string {
  const header = language === 'sr' 
    ? '📚 PRINCIPI IZ KNJIGE "Fizička priprema košarkaša" (Coach Goran):\n\n'
    : '📚 PRINCIPLES FROM "Basketball Physical Preparation" (Coach Goran):\n\n';

  const content = principles.map(p => {
    return `• ${p.title}: ${p.description}\n  → Primena: ${p.application}`;
  }).join('\n\n');

  const sources = language === 'sr'
    ? '\n\n🌐 REFERENCE IZVORI:\n' + BASKETBALL_SOURCES.map(s => `• ${s.name}: ${s.description}`).join('\n')
    : '\n\n🌐 REFERENCE SOURCES:\n' + BASKETBALL_SOURCES.map(s => `• ${s.name}: ${s.description}`).join('\n');

  return header + content + sources;
}
