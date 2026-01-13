export const translations = {
  sr: {
    // Navigation
    appName: 'AI Coach SIMBION Pro',
    subtitle: 'Profesionalna platforma za fizičku pripremu',
    aiChat: 'AI SIMBION',
    diagnostics: 'DIJAGNOSTIKA',
    correlation: 'KORELACIJA FAKTORA',
    trainingGenerator: 'GENERATOR TRENINGA',
    trainingPlan: 'PLAN TRENINGA',
    resources: 'RESURSI',
    
    // Common
    save: 'Sačuvaj',
    cancel: 'Otkaži',
    delete: 'Obriši',
    edit: 'Izmeni',
    back: 'Nazad',
    next: 'Dalje',
    analyze: 'Analiziraj',
    generate: 'Generiši',
    
    // AI Chat
    chatPlaceholder: 'Postavi pitanje SIMBION AI agentu...',
    send: 'Pošalji',
    thinking: 'Razmišljam...',
    
    // Diagnostics
    athleteName: 'Ime igrača',
    age: 'Uzrast',
    position: 'Pozicija',
    testResults: 'Rezultati testova',
    sprint5m: 'Sprint 5m (s)',
    sprint10m: 'Sprint 10m (s)',
    sprint20m: 'Sprint 20m (s)',
    illinois: 'Illinois test (s)',
    cmj: 'CMJ (cm)',
    sj: 'SJ (cm)',
    yoyo: 'Yo-Yo IR1 (m)',
    ttest: 'T-test (s)',
    proAgility: 'Pro-Agility (s)',
    saveResults: 'Sačuvaj rezultate',
    
    // Correlation
    correlationTitle: 'Matrica korelacija faktora fizičke pripreme',
    correlationDescription: 'Naučno dokazane veze između fizičkih sposobnosti',
    clickForInfo: 'Klikni na ćeliju za više informacija',
    
    // Training Plan
    planTitle: 'Kreiranje plana treninga',
    planDescription: 'Unesi tekstualni opis plana - SIMBION će ga analizirati na osnovu dijagnostike i korelacija',
    planPlaceholder: 'Opiši plan treninga (fokusi, volumen, intenzitet, metode...)...',
    analyzePlan: 'Analiziraj plan',
    analyzing: 'Analiziram plan...',
    planErrors: 'Identifikovane greške',
    planSuggestions: 'Predlozi za poboljšanje',
    correctedPlan: 'Korigovani plan',
    
    // Resources
    resourcesTitle: 'Resursi i literatura',
    books: 'Knjige',
    articles: 'Članci',
    videos: 'Video materijali',
  },
  
  en: {
    // Navigation
    appName: 'AI Coach SIMBION Pro',
    subtitle: 'Professional Basketball Training Platform',
    aiChat: 'AI SIMBION',
    diagnostics: 'DIAGNOSTICS',
    correlation: 'FACTOR CORRELATION',
    trainingGenerator: 'TRAINING GENERATOR',
    trainingPlan: 'TRAINING PLAN',
    resources: 'RESOURCES',
    
    // Common
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    back: 'Back',
    next: 'Next',
    analyze: 'Analyze',
    generate: 'Generate',
    
    // AI Chat
    chatPlaceholder: 'Ask SIMBION AI agent...',
    send: 'Send',
    thinking: 'Thinking...',
    
    // Diagnostics
    athleteName: 'Athlete Name',
    age: 'Age',
    position: 'Position',
    testResults: 'Test Results',
    sprint5m: 'Sprint 5m (s)',
    sprint10m: 'Sprint 10m (s)',
    sprint20m: 'Sprint 20m (s)',
    illinois: 'Illinois Test (s)',
    cmj: 'CMJ (cm)',
    sj: 'SJ (cm)',
    yoyo: 'Yo-Yo IR1 (m)',
    ttest: 'T-test (s)',
    proAgility: 'Pro-Agility (s)',
    saveResults: 'Save Results',
    
    // Correlation
    correlationTitle: 'Physical preparation factor correlation matrix',
    correlationDescription: 'Scientifically proven relationships between physical abilities',
    clickForInfo: 'Click on cell for more information',
    
    // Training Plan
    planTitle: 'Training Plan Creation',
    planDescription: 'Enter textual plan description - SIMBION will analyze it based on diagnostics and correlations',
    planPlaceholder: 'Describe training plan (focuses, volume, intensity, methods...)...',
    analyzePlan: 'Analyze Plan',
    analyzing: 'Analyzing plan...',
    planErrors: 'Identified Errors',
    planSuggestions: 'Improvement Suggestions',
    correctedPlan: 'Corrected Plan',
    
    // Resources
    resourcesTitle: 'Resources and Literature',
    books: 'Books',
    articles: 'Articles',
    videos: 'Videos',
  },
};

export type Language = 'sr' | 'en';
export type TranslationKey = keyof typeof translations.sr;
