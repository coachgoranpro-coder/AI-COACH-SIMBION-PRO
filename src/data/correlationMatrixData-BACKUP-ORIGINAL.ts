// Kompletna simetrična korelaciona matrica svih faktora
// Svaka kombinacija faktora ima objašnjenje u oba pravca
// Complete symmetrical correlation matrix of all factors
// Each factor combination has explanation in both directions

export interface CorrelationEntry {
  value: string;
  explanation: {
    sr: string;
    en: string;
  };
  example?: {
    sr: string;
    en: string;
  };
}

export interface CorrelationMatrix {
  [key: string]: {
    [key: string]: CorrelationEntry;
  };
}

export const correlationMatrixData: CorrelationMatrix = {
  "Snaga (1RM, izometrija)": {
    "Brzina (Sprint 5-30m)": {
      value: "+",
      explanation: {
        sr: "Snaga nogu povećava silu odraza → brže ubrzanje u prvih 10m. Korelacija r=0.6-0.7.",
        en: "Leg strength increases ground reaction force → faster acceleration in first 10m. Correlation r=0.6-0.7."
      },
      example: {
        sr: "Čučanj 1.5×TM → poboljšanje sprinta za 0.1-0.2s na 20m.",
        en: "Squat 1.5×BW → 0.1-0.2s improvement in 20m sprint."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "++",
      explanation: {
        sr: "Maksimalna snaga je osnova RFD (rate of force development). r=0.75-0.85.",
        en: "Maximum strength is the foundation of RFD (rate of force development). r=0.75-0.85."
      },
      example: {
        sr: "Povećanje čučnja za 20kg → CMJ raste za 3-5cm.",
        en: "20kg increase in squat → CMJ increases by 3-5cm."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "–",
      explanation: {
        sr: "Hipertrofija i maksimalna snaga smanjuju kapilarizaciju i aerobnu efikasnost.",
        en: "Hypertrophy and maximal strength reduce capillarization and aerobic efficiency."
      },
      example: {
        sr: "Fokus na snagu 8 nedelja → pad YoYo za 5-10%.",
        en: "8-week strength focus → YoYo drops by 5-10%."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "+",
      explanation: {
        sr: "Snaga nogu pomaže deceleraciju i re-akceleraciju pri promeni pravca.",
        en: "Leg strength aids deceleration and re-acceleration during change of direction."
      },
      example: {
        sr: "Bolji eksc. čučanj → brži T-test za 0.2-0.3s.",
        en: "Better eccentric squat → T-test faster by 0.2-0.3s."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "+",
      explanation: {
        sr: "Olympic lifts i kompleksne vežbe razvijaju koordinaciju + snagu.",
        en: "Olympic lifts and complex exercises develop coordination + strength."
      },
      example: {
        sr: "Clean & Jerk progresija → bolja CNS aktivacija.",
        en: "Clean & Jerk progression → better CNS activation."
      }
    },
    "Mobilnost kukova": {
      value: "±",
      explanation: {
        sr: "Full ROM snaga može poboljšati mobilnost, ali hipertrofija bez stretchinga je smanjuje.",
        en: "Full ROM strength can improve mobility, but hypertrophy without stretching reduces it."
      },
      example: {
        sr: "ATG squat → bolja mobilnost. Heavy partial → lošija.",
        en: "ATG squat → better mobility. Heavy partial → worse."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "–",
      explanation: {
        sr: "Prevelika mišićna masa bez stretchinga smanjuje ROM.",
        en: "Excessive muscle mass without stretching reduces ROM."
      },
      example: {
        sr: "Fokus na hipertrofiju → gubitak 5-10° ROM.",
        en: "Hypertrophy focus → loss of 5-10° ROM."
      }
    },
    "Preciznost pokreta": {
      value: "0",
      explanation: {
        sr: "Snaga ne utiče direktno na preciznost, ali stabilnost trupa može pomoći.",
        en: "Strength doesn't directly affect precision, but trunk stability can help."
      },
      example: {
        sr: "Snaga se ne prenosi automatski na preciznost izvođenja.",
        en: "Strength doesn't automatically transfer to execution precision."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "+",
      explanation: {
        sr: "Snaga stabilizatora kukova i zglobova povećava balans.",
        en: "Hip and joint stabilizer strength increases balance."
      },
      example: {
        sr: "Unilateralne vežbe snage → +10% Y-balance skor.",
        en: "Unilateral strength exercises → +10% Y-balance score."
      }
    },
    "Core stabilnost": {
      value: "++",
      explanation: {
        sr: "Prenos sile kroz trup omogućava efikasnu transmisiju snage iz nogu u gornji deo.",
        en: "Force transfer through trunk enables efficient power transmission from legs to upper body."
      },
      example: {
        sr: "Slab core → 15-20% gubitak snage pri ekstremitetima.",
        en: "Weak core → 15-20% power loss at extremities."
      }
    },
    "Propriocepcija": {
      value: "+",
      explanation: {
        sr: "Pravilno angažovanje snage zavisi od pozicije tela u prostoru.",
        en: "Proper force engagement depends on body position in space."
      },
      example: {
        sr: "Proprioceptivni trening sa opterećenjem → bolja aktivacija.",
        en: "Proprioceptive training with load → better activation."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "+",
      explanation: {
        sr: "Snaga pomaže, ali RSI zahteva i elastičnost tetive + CNS brzinu.",
        en: "Strength helps, but RSI requires tendon elasticity + CNS speed."
      },
      example: {
        sr: "Povećanje snage bez pliometrije → RSI stagnira.",
        en: "Strength increase without plyometrics → RSI stagnates."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "–",
      explanation: {
        sr: "Aerobni rad smanjuje mTOR signalizaciju i sintezu proteina.",
        en: "Aerobic work reduces mTOR signaling and protein synthesis."
      },
      example: {
        sr: "Cardio + strength → interference effect.",
        en: "Cardio + strength → interference effect."
      }
    },
    "Anaerobna izdržljivost": {
      value: "+",
      explanation: {
        sr: "Potrebna za održavanje intenziteta pri ponovljenim naporima.",
        en: "Required for maintaining intensity during repeated efforts."
      },
      example: {
        sr: "Snaga pomaže u održavanju forme u RSA testovima.",
        en: "Strength helps maintain form in RSA tests."
      }
    }
  },

  "Brzina (Sprint 5-30m)": {
    "Snaga (1RM, izometrija)": {
      value: "+",
      explanation: {
        sr: "Veća horizontalna sila odraza → brži sprint. Korelacija jača u prvih 10m.",
        en: "Greater horizontal ground reaction force → faster sprint. Correlation stronger in first 10m."
      },
      example: {
        sr: "Trap bar jump u horizontal → -0.1s na 10m.",
        en: "Trap bar jump in horizontal → -0.1s on 10m."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "++",
      explanation: {
        sr: "Vertikalna eksplozivnost korelira sa horizontalnom brzinom. r=0.7-0.8.",
        en: "Vertical explosiveness correlates with horizontal speed. r=0.7-0.8."
      },
      example: {
        sr: "CMJ 60cm+ → sprint 20m <3.0s (elite).",
        en: "CMJ 60cm+ → sprint 20m <3.0s (elite)."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "–",
      explanation: {
        sr: "Aerobni treninzi menjaju tip vlakana (II→I), smanjuju eksplozivnost.",
        en: "Aerobic training changes fiber type (II→I), reduces explosiveness."
      },
      example: {
        sr: "Maraton trening → pad sprinta za 5-8%.",
        en: "Marathon training → sprint drops by 5-8%."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "++",
      explanation: {
        sr: "Brzi sportisti lakše prenose brzinu u lateralne pravce. r=0.75.",
        en: "Fast athletes transfer speed to lateral directions more easily. r=0.75."
      },
      example: {
        sr: "Sprint 30m <4.2s → Pro-agility <4.2s.",
        en: "Sprint 30m <4.2s → Pro-agility <4.2s."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "+",
      explanation: {
        sr: "Tehnički pokreti (arm swing, leg drive) povećavaju ekonomiju sprinta.",
        en: "Technical movements (arm swing, leg drive) increase sprint economy."
      },
      example: {
        sr: "Tehnički drillovi → 3-5% brži sprint.",
        en: "Technical drills → 3-5% faster sprint."
      }
    },
    "Mobilnost kukova": {
      value: "+",
      explanation: {
        sr: "Veći ROM kuka omogućava duže korake i bolju ekstenziju.",
        en: "Greater hip ROM enables longer strides and better extension."
      },
      example: {
        sr: "Hip opener rutina → +5cm dužina koraka.",
        en: "Hip opener routine → +5cm stride length."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "0",
      explanation: {
        sr: "Sekundarni uticaj, osim u završnim fazama pokreta.",
        en: "Secondary influence, except in terminal phases of movement."
      },
      example: {
        sr: "Pasivna fleksibilnost ne garantuje sprint brzinu.",
        en: "Passive flexibility doesn't guarantee sprint speed."
      }
    },
    "Preciznost pokreta": {
      value: "0",
      explanation: {
        sr: "Brzina sama po sebi ne utiče na preciznost.",
        en: "Speed by itself doesn't affect precision."
      },
      example: {
        sr: "Možeš biti brz i neprecizan.",
        en: "You can be fast and imprecise."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "–",
      explanation: {
        sr: "Velika brzina otežava održavanje balansa.",
        en: "High speed makes balance maintenance more difficult."
      },
      example: {
        sr: "Sprint >max → gubitak kontrole.",
        en: "Sprint >max → loss of control."
      }
    },
    "Core stabilnost": {
      value: "+",
      explanation: {
        sr: "Kretanje u punoj brzini zavisi od stabilnosti u tranziciji.",
        en: "Movement at full speed depends on stability in transition."
      },
      example: {
        sr: "Slab core → pad brzine kroz oscilacije.",
        en: "Weak core → speed drops through oscillations."
      }
    },
    "Propriocepcija": {
      value: "+",
      explanation: {
        sr: "Usmerena brzina se oslanja na povratnu informaciju iz zglobova i mišića.",
        en: "Directed speed relies on feedback from joints and muscles."
      },
      example: {
        sr: "Proprioceptivni deficit → neravnomerni koraci.",
        en: "Proprioceptive deficit → uneven steps."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "++",
      explanation: {
        sr: "Brz kontakt sa tlom i visok RFD direktno utiču na sprint brzinu.",
        en: "Fast ground contact time and high RFD directly affect sprint speed."
      },
      example: {
        sr: "RSI >0.5 → sprint 10m <1.7s.",
        en: "RSI >0.5 → sprint 10m <1.7s."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "–",
      explanation: {
        sr: "Prevelika aerobna adaptacija smanjuje fast-twitch dominaciju.",
        en: "Excessive aerobic adaptation reduces fast-twitch dominance."
      },
      example: {
        sr: "VO2max >65 + sprint deficit → konflikt sistema.",
        en: "VO2max >65 + sprint deficit → system conflict."
      }
    },
    "Anaerobna izdržljivost": {
      value: "+",
      explanation: {
        sr: "Održavanje sprint brzine u ponavljanjima.",
        en: "Maintaining sprint speed in repetitions."
      },
      example: {
        sr: "Repeated sprint ability test.",
        en: "Repeated sprint ability test."
      }
    }
  },

  "Eksplozivnost (CMJ, SJ)": {
    "Snaga (1RM, izometrija)": {
      value: "++",
      explanation: {
        sr: "F-V profil: maksimalna snaga je anchor eksplozivnosti. r=0.8.",
        en: "F-V profile: maximal strength is the anchor of explosiveness. r=0.8."
      },
      example: {
        sr: "Čučanj <1.2×TM → CMJ plateau.",
        en: "Squat <1.2×BW → CMJ plateau."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "++",
      explanation: {
        sr: "CMJ visina korelira sa sprint performansom kroz horizontalnu primenu sile.",
        en: "CMJ height correlates with sprint performance through horizontal force application."
      },
      example: {
        sr: "CMJ 55cm+ → sprint 20m elite zona.",
        en: "CMJ 55cm+ → sprint 20m elite zone."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "–",
      explanation: {
        sr: "Anaerobna glikoliza vs aerobna oksidacija = konflikt energetskih sistema.",
        en: "Anaerobic glycolysis vs aerobic oxidation = energy system conflict."
      },
      example: {
        sr: "Plyo blok 6 nedelja → pad YoYo za 8-12%.",
        en: "Plyo block 6 weeks → YoYo drops by 8-12%."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "++",
      explanation: {
        sr: "Eksplozivni pokreti omogućavaju brzu promenu pravca.",
        en: "Explosive movements enable fast change of direction."
      },
      example: {
        sr: "CMJ rast za 10cm → T-test brži za 0.3s.",
        en: "CMJ increase by 10cm → T-test faster by 0.3s."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "+",
      explanation: {
        sr: "Potrebna za optimalan prenos sile u kompleksnim pokretima.",
        en: "Required for optimal force transfer in complex movements."
      },
      example: {
        sr: "Bolja koordinacija → efikasniji CMJ.",
        en: "Better coordination → more efficient CMJ."
      }
    },
    "Mobilnost kukova": {
      value: "+",
      explanation: {
        sr: "Dobar ROM kuka omogućava dublji squat → veća snaga iz dna.",
        en: "Good hip ROM enables deeper squat → greater force from bottom."
      },
      example: {
        sr: "ATG squat mobilnost → +3-5cm CMJ.",
        en: "ATG squat mobility → +3-5cm CMJ."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "+",
      explanation: {
        sr: "Dovoljan opseg pokreta omogućava punu amplitudu eksplozivnih akcija.",
        en: "Adequate range of motion allows full amplitude of explosive actions."
      },
      example: {
        sr: "Ograničena fleksibilnost → parcijalni ROM.",
        en: "Limited flexibility → partial ROM."
      }
    },
    "Preciznost pokreta": {
      value: "0",
      explanation: {
        sr: "Nema direktnu vezu.",
        en: "No direct connection."
      },
      example: {
        sr: "Eksplozivnost nije jednaka preciznosti.",
        en: "Explosiveness is not equal to precision."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "+",
      explanation: {
        sr: "Omogućava efikasno iskorišćenje sile bez gubitka kontrole nad telom.",
        en: "Enables efficient force utilization without losing body control."
      },
      example: {
        sr: "Loš balans → nepravilno doskakivanje.",
        en: "Poor balance → improper landing."
      }
    },
    "Core stabilnost": {
      value: "+",
      explanation: {
        sr: "Stabilni trup omogućava efikasan prenos eksplozivne sile.",
        en: "Stable trunk enables efficient explosive force transfer."
      },
      example: {
        sr: "Slab core → 10-15% pad CMJ visine.",
        en: "Weak core → 10-15% drop in CMJ height."
      }
    },
    "Propriocepcija": {
      value: "+",
      explanation: {
        sr: "Efikasnija kontrola položaja tela omogućava optimalniju generaciju snage.",
        en: "More efficient body position control enables optimal force generation."
      },
      example: {
        sr: "Bolja telesna svest → pravilniji skok.",
        en: "Better body awareness → more proper jump."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "++",
      explanation: {
        sr: "CMJ mjeri koncentriku, RSI ceo stretch-shortening ciklus.",
        en: "CMJ measures concentric, RSI measures entire stretch-shortening cycle."
      },
      example: {
        sr: "CMJ visok + RSI nizak = elastični deficit.",
        en: "CMJ high + RSI low = elastic deficit."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "–",
      explanation: {
        sr: "Konfliktirajući putevi: AMPK vs mTOR.",
        en: "Conflicting pathways: AMPK vs mTOR."
      },
      example: {
        sr: "Endurance blok → CMJ pada.",
        en: "Endurance block → CMJ drops."
      }
    },
    "Anaerobna izdržljivost": {
      value: "++",
      explanation: {
        sr: "Višestruki eksplozivni napori u ponavljanjima (small-sided games).",
        en: "Multiple explosive efforts in repetitions (small-sided games)."
      },
      example: {
        sr: "Dobar CMJ + loša anaerobna → pad u Q4.",
        en: "Good CMJ + poor anaerobic → drops in Q4."
      }
    }
  },

  "Izdržljivost (YoYo IR1)": {
    "Snaga (1RM, izometrija)": {
      value: "–",
      explanation: {
        sr: "Trening snage smanjuje mitohondrijsku gustinu i kapilarnu mrežu.",
        en: "Strength training reduces mitochondrial density and capillary network."
      },
      example: {
        sr: "Heavy strength blok → YoYo pad 10-15%.",
        en: "Heavy strength block → YoYo drops 10-15%."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "–",
      explanation: {
        sr: "Aerobni rad menja tip vlakana ka slow-twitch, smanjuje eksplozivnost.",
        en: "Aerobic work changes fiber type toward slow-twitch, reduces explosiveness."
      },
      example: {
        sr: "Aerobni fokus → sprint 20m sporiji za 0.2s.",
        en: "Aerobic focus → sprint 20m slower by 0.2s."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "–",
      explanation: {
        sr: "Konfliktirajući putevi adaptacije (mTOR vs AMPK).",
        en: "Conflicting adaptation pathways (mTOR vs AMPK)."
      },
      example: {
        sr: "Endurance blok → CMJ pad za 5-8cm.",
        en: "Endurance block → CMJ drops by 5-8cm."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "±",
      explanation: {
        sr: "Izdržljivost pomaže u održavanju agilnosti kroz celu utakmicu, ali može smanjiti eksplozivnost.",
        en: "Endurance helps maintain agility through entire game, but may reduce explosiveness."
      },
      example: {
        sr: "Aerobna baza → manje pada agilnost u Q4.",
        en: "Aerobic base → less agility drop in Q4."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "0",
      explanation: {
        sr: "Izdržljivost i koordinacija su nezavisni, osim pod zamorom.",
        en: "Endurance and coordination are independent, except under fatigue."
      },
      example: {
        sr: "Umor degradira tehniku, ali ne zbog izdržljivosti per se.",
        en: "Fatigue degrades technique, but not due to endurance per se."
      }
    },
    "Mobilnost kukova": {
      value: "0",
      explanation: {
        sr: "Bez direktne veze.",
        en: "No direct connection."
      },
      example: {
        sr: "Izdržljivost ne utiče značajno na raspon pokreta.",
        en: "Endurance doesn't significantly affect range of motion."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "0",
      explanation: {
        sr: "Minimalan značaj, osim za prevenciju povreda.",
        en: "Minimal significance, except for injury prevention."
      },
      example: {
        sr: "Aerobni rad ne menja pasivnu fleksibilnost.",
        en: "Aerobic work doesn't change passive flexibility."
      }
    },
    "Preciznost pokreta": {
      value: "+",
      explanation: {
        sr: "Bolja aerobna priprema omogućava održavanje preciznosti do kraja.",
        en: "Better aerobic preparation enables precision maintenance until the end."
      },
      example: {
        sr: "Nizak VO2max → pad FT% u Q4 za 15-20%.",
        en: "Low VO2max → FT% drops in Q4 by 15-20%."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "–",
      explanation: {
        sr: "Zamor smanjuje sposobnost održavanja balansa tokom dužih aktivnosti.",
        en: "Fatigue reduces balance maintenance ability during prolonged activities."
      },
      example: {
        sr: "Umor → nestabilnost.",
        en: "Fatigue → instability."
      }
    },
    "Core stabilnost": {
      value: "0",
      explanation: {
        sr: "Dobra stabilnost trupa štiti tehniku kod dugotrajne aktivnosti.",
        en: "Good trunk stability protects technique during prolonged activity."
      },
      example: {
        sr: "Core ne zavisi direktno od aerobne izdržljivosti.",
        en: "Core doesn't directly depend on aerobic endurance."
      }
    },
    "Propriocepcija": {
      value: "0",
      explanation: {
        sr: "Slabo uključena osim u održavanju forme pod umorom.",
        en: "Weakly involved except in form maintenance under fatigue."
      },
      example: {
        sr: "Umor može degradirati propriocepciju.",
        en: "Fatigue can degrade proprioception."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "0",
      explanation: {
        sr: "Retko se aktivira u niskointenzivnim naporima.",
        en: "Rarely activated in low-intensity efforts."
      },
      example: {
        sr: "Izdržljivost ne utiče na elastičnost.",
        en: "Endurance doesn't affect elasticity."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "++",
      explanation: {
        sr: "Direktna veza kroz aerobni kapacitet i oporavak.",
        en: "Direct connection through aerobic capacity and recovery."
      },
      example: {
        sr: "VO2max >55 → YoYo IR1 >2000m.",
        en: "VO2max >55 → YoYo IR1 >2000m."
      }
    },
    "Anaerobna izdržljivost": {
      value: "+",
      explanation: {
        sr: "YoYo IR1 kombinuje oba sistema, ali više anaerobni u kasnijim fazama.",
        en: "YoYo IR1 combines both systems, but more anaerobic in later stages."
      },
      example: {
        sr: "Dobar laktacijski prag → bolji YoYo završetak.",
        en: "Good lactate threshold → better YoYo finish."
      }
    }
  },

  "Agilnost (T-test, Pro-agility)": {
    "Snaga (1RM, izometrija)": {
      value: "+",
      explanation: {
        sr: "Ekscentrična snaga ključna za deceleraciju i brzu promenu pravca.",
        en: "Ekscentrična strength ključna za deceleraciju i brzu promenu pravca."
      },
      example: {
        sr: "Nordic curl snaga → brži COD za 8-10%.",
        en: "Nordic curl strength → brži COD za 8-10%."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "++",
      explanation: {
        sr: "Linearni sprint je baza agilnosti. r=0.75-0.85.",
        en: "Linear sprint is the base of agility. r=0.75-0.85."
      },
      example: {
        sr: "Sprint 10m <1.7s → Pro-agility <4.0s.",
        en: "Sprint 10m <1.7s → Pro-agility <4.0s."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "++",
      explanation: {
        sr: "Eksplozivnost omogućava brzu re-akceleraciju nakon COD.",
        en: "Explosiveness enables fast re-acceleration after COD."
      },
      example: {
        sr: "CMJ >50cm → T-test <9.5s.",
        en: "CMJ >50cm → T-test <9.5s."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "±",
      explanation: {
        sr: "Izdržljivost može pomoći u održavanju agilnosti tokom celog meča.",
        en: "Endurance can help maintain agility throughout the entire match."
      },
      example: {
        sr: "Dobar YoYo → manje pada COD u Q4.",
        en: "Good YoYo → less COD drop in Q4."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "++",
      explanation: {
        sr: "Footwork i body control su osnova agilnosti.",
        en: "Footwork and body control are the foundation of agility."
      },
      example: {
        sr: "Ladder drills + COD → 10-12% brži T-test.",
        en: "Ladder drills + COD → 10-12% faster T-test."
      }
    },
    "Mobilnost kukova": {
      value: "+",
      explanation: {
        sr: "ROM kuka omogućava niske stance pri promeni pravca.",
        en: "Hip ROM enables low stance during change of direction."
      },
      example: {
        sr: "Hip mobility → dublji lateral lunge.",
        en: "Hip mobility → deeper lateral lunge."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "+",
      explanation: {
        sr: "Dobar opseg pokreta olakšava preusmerenje i rad nogu.",
        en: "Good range of motion facilitates redirection and leg work."
      },
      example: {
        sr: "Fleksibilnost pomaže COD.",
        en: "Flexibility helps COD."
      }
    },
    "Preciznost pokreta": {
      value: "+",
      explanation: {
        sr: "Doprinosi tačnom pozicioniranju tela pri promeni pravca.",
        en: "Contributes to precise body positioning during change of direction."
      },
      example: {
        sr: "Precizna mehanika COD → brži testovi.",
        en: "Precise COD mechanics → faster tests."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "++",
      explanation: {
        sr: "Jednonožna stabilnost kritična za COD bez gubitka kontrole.",
        en: "Single-leg stability is critical for COD without loss of control."
      },
      example: {
        sr: "Y-Balance asimetrija >10% → sporija agilnost.",
        en: "Y-Balance asymmetry >10% → slower agility."
      }
    },
    "Core stabilnost": {
      value: "+",
      explanation: {
        sr: "Pomaže u kontroli trupa pri lateralnim i rotacionim pokretima.",
        en: "Helps trunk control during lateral and rotational movements."
      },
      example: {
        sr: "Slab core → sporiji COD.",
        en: "Weak core → slower COD."
      }
    },
    "Propriocepcija": {
      value: "++",
      explanation: {
        sr: "Svest o poziciji tela omogućava brze korekcije u pokretu.",
        en: "Body position awareness enables fast corrections in movement."
      },
      example: {
        sr: "Proprioceptivni trening → stabilniji COD.",
        en: "Proprioceptive training → more stable COD."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "++",
      explanation: {
        sr: "Reaktivnost omogućava brze COD.",
        en: "Reactivity enables fast COD."
      },
      example: {
        sr: "Pliometrija → brži T-test.",
        en: "Plyometrics → faster T-test."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "0",
      explanation: {
        sr: "Nema direktne veze, osim kod oporavka.",
        en: "No direct connection, except in recovery."
      },
      example: {
        sr: "VO2max ne garantuje COD brzinu.",
        en: "VO2max doesn't guarantee COD speed."
      }
    },
    "Anaerobna izdržljivost": {
      value: "+",
      explanation: {
        sr: "U sportovima sa čestim reaktivnim zahtevima.",
        en: "In sports with frequent reactive demands."
      },
      example: {
        sr: "RSA + COD = game performance.",
        en: "RSA + COD = game performance."
      }
    }
  },

  "Koordinacija (Tehnička efikasnost)": {
    "Snaga (1RM, izometrija)": {
      value: "+",
      explanation: {
        sr: "Kompleksni treninzi snage razvijaju koordinaciju pokreta.",
        en: "Complex strength training develops movement coordination."
      },
      example: {
        sr: "Olympic lifts → bolja CNS sinhronizacija.",
        en: "Olympic lifts → better CNS synchronization."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "+",
      explanation: {
        sr: "Efikasna tehnika trčanja štedi energiju i povećava brzinu.",
        en: "Efficient running technique saves energy and increases speed."
      },
      example: {
        sr: "Tehnički trening → 3-5% brži sprint.",
        en: "Technical training → 3-5% faster sprint."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "+",
      explanation: {
        sr: "Precizna regrutacija motornih jedinica omogućava bolji izlaz snage.",
        en: "Precise motor unit recruitment enables better power output."
      },
      example: {
        sr: "Koordinacioni rad → viši CMJ.",
        en: "Coordination work → higher CMJ."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "0",
      explanation: {
        sr: "Koordinacija nije direktno povezana sa izdržljivošću, osim u situacijama umora.",
        en: "Coordination isn't directly connected to endurance, except in fatigue situations."
      },
      example: {
        sr: "Dobar tehnički obrazac → lakše održavanje.",
        en: "Good technical pattern → easier maintenance."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "++",
      explanation: {
        sr: "Agilnost je u osnovi koordinacija + brzina.",
        en: "Agility is fundamentally coordination + speed."
      },
      example: {
        sr: "Koordinacioni drillovi → brži COD.",
        en: "Coordination drills → faster COD."
      }
    },
    "Mobilnost kukova": {
      value: "+",
      explanation: {
        sr: "Kvalitetna mobilnost omogućava lakšu integraciju kompleksnih obrazaca.",
        en: "Quality mobility enables easier integration of complex patterns."
      },
      example: {
        sr: "Mobilnost → čistiji pokreti.",
        en: "Mobility → cleaner movements."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "+",
      explanation: {
        sr: "Omogućava glatkoću i bezbednost pokreta u širokom opsegu.",
        en: "Enables smoothness and safety of movement in wide range."
      },
      example: {
        sr: "Fleksibilnost pomaže kontroli.",
        en: "Flexibility helps control."
      }
    },
    "Preciznost pokreta": {
      value: "++",
      explanation: {
        sr: "Koordinacija je osnova fine motorike i tačnosti.",
        en: "Coordination is the foundation of fine motor skills and accuracy."
      },
      example: {
        sr: "Bolja koordinacija → konzistentniji FT%.",
        en: "Better coordination → more consistent FT%."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "++",
      explanation: {
        sr: "Neuromišićna kontrola omogućava održavanje balansa.",
        en: "Neuromuscular control enables balance maintenance."
      },
      example: {
        sr: "Jednonožne vežbe → +15-20% Y-Balance.",
        en: "Single-leg exercises → +15-20% Y-Balance."
      }
    },
    "Core stabilnost": {
      value: "+",
      explanation: {
        sr: "Održava stabilnost trupa pri izvođenju koordinisanih pokreta udova.",
        en: "Maintains trunk stability during coordinated limb movements."
      },
      example: {
        sr: "Core → bolja sinhronizacija.",
        en: "Core → better synchronization."
      }
    },
    "Propriocepcija": {
      value: "++",
      explanation: {
        sr: "Senzorna povratna informacija je temelj koordinacije.",
        en: "Sensory feedback is the foundation of coordination."
      },
      example: {
        sr: "Proprioceptivni trening → brža korekcija.",
        en: "Proprioceptive training → faster correction."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "++",
      explanation: {
        sr: "Precizna CNS aktivacija omogućava brz stretch-shortening.",
        en: "Precise CNS activation enables fast stretch-shortening."
      },
      example: {
        sr: "Koordinacioni rad + plyo → RSI raste.",
        en: "Coordination work + plyo → RSI increases."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "0",
      explanation: {
        sr: "U sportovima sa repetitivnim obrascima, koordinacija mora biti održiva.",
        en: "In sports with repetitive patterns, coordination must be sustainable."
      },
      example: {
        sr: "VO2max ne utiče direktno na tehniku.",
        en: "VO2max doesn't directly affect technique."
      }
    },
    "Anaerobna izdržljivost": {
      value: "+",
      explanation: {
        sr: "Tehnička tačnost pri visokom intenzitetu.",
        en: "Technical accuracy at high intensity."
      },
      example: {
        sr: "Koordinacija pomaže u održavanju forme.",
        en: "Coordination helps maintain form."
      }
    }
  },

  "Mobilnost kukova": {
    "Snaga (1RM, izometrija)": {
      value: "±",
      explanation: {
        sr: "Mobilnost mora biti podržana aktivnom kontrolom snage.",
        en: "Mobility must be supported by active strength control."
      },
      example: {
        sr: "ATG squat → bolja mobilnost + snaga.",
        en: "ATG squat → better mobility + strength."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "+",
      explanation: {
        sr: "ROM kuka omogućava duže korake i bolju hip extension.",
        en: "Hip ROM enables longer strides and better hip extension."
      },
      example: {
        sr: "Hip flexor stretch → +3-5cm dužina koraka.",
        en: "Hip flexor stretch → +3-5cm stride length."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "+",
      explanation: {
        sr: "Širi i brži pokreti zahtevaju dobar aktivni opseg.",
        en: "Wider and faster movements require good active range."
      },
      example: {
        sr: "Ograničen ROM → niži CMJ.",
        en: "Limited ROM → lower CMJ."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "0",
      explanation: {
        sr: "Neposredna veza nije izražena.",
        en: "Neposredna veza nije izražena."
      },
      example: {
        sr: "Mobilnost ne utiče na aerobnu izdržljivost.",
        en: "mobility ne affects na aerobnu endurance."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "+",
      explanation: {
        sr: "Veći ROM kuka omogućava dublje stance i brže COD.",
        en: "Veći ROM hip enables dublje stance i brže COD."
      },
      example: {
        sr: "Hip mobility → lateral lunge dublji za 15%.",
        en: "Hip mobility → lateral lunge dublji za 15%."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "+",
      explanation: {
        sr: "Lakše povezivanje pokreta kroz optimalne zglobne putanje.",
        en: "Lakše povezivanje pokreta kroz optimalne zglobne putanje."
      },
      example: {
        sr: "Dobar ROM → glatki pokreti.",
        en: "Dobar ROM → glatki pokreti."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "++",
      explanation: {
        sr: "Fleksibilnost daje pasivnu osnovu mobilnosti.",
        en: "flexibility daje pasivnu osnovu mobilityi."
      },
      example: {
        sr: "Stretching protokol → +10° hip ROM.",
        en: "Stretching protokol → +10° hip ROM."
      }
    },
    "Preciznost pokreta": {
      value: "+",
      explanation: {
        sr: "Kontrola kroz pun ROM omogućava preciznije kretanje.",
        en: "Kontrola kroz pun ROM enables preciznije kretanje."
      },
      example: {
        sr: "Mobilnost → tehnički čistiji pokreti.",
        en: "mobility → tehnički čistiji pokreti."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "+",
      explanation: {
        sr: "Mobilnost omogućava dostizanje većih udaljenosti u Y-Balance.",
        en: "mobility enables dostizanje većih udaljenosti u Y-Balance."
      },
      example: {
        sr: "Hip mobility → +5-8% Y-Balance reach.",
        en: "Hip mobility → +5-8% Y-Balance reach."
      }
    },
    "Core stabilnost": {
      value: "+",
      explanation: {
        sr: "Omogućava povezivanje gornjeg i donjeg dela tela u funkcionalnoj celini.",
        en: "enables povezivanje gornjeg i donjeg dela tela u funkcionalnoj celini."
      },
      example: {
        sr: "Mobilnost + core = efikasna rotacija.",
        en: "mobility + core = efikasna rotacija."
      }
    },
    "Propriocepcija": {
      value: "+",
      explanation: {
        sr: "Bolji osećaj granice pokreta omogućava sigurniju mobilnost.",
        en: "Bolji osećaj granice pokreta enables sigurniju mobility."
      },
      example: {
        sr: "Propriocepcija u krajnjem ROM.",
        en: "Propriocepcija u krajnjem ROM."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "+",
      explanation: {
        sr: "Brza korekcija zahteva pun funkcionalni opseg.",
        en: "Brza korekcija zahteva pun funkcionalni opseg."
      },
      example: {
        sr: "Mobilnost pomaže RSI.",
        en: "mobility helps RSI."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "0",
      explanation: {
        sr: "Nema direktan uticaj, osim u održavanju forme.",
        en: "Nema direktan uticaj, osim u održavanju forme."
      },
      example: {
        sr: "Mobilnost ne zavisi od VO2max.",
        en: "mobility ne depends od VO2max."
      }
    },
    "Anaerobna izdržljivost": {
      value: "0",
      explanation: {
        sr: "Funkcionalna pokretljivost tokom serija i izmena tempa.",
        en: "Funkcionalna pokretljivost tokom serija i izmena tempa."
      },
      example: {
        sr: "Mobilnost može pomoći ekonomiji.",
        en: "mobility može pomoći ekonomiji."
      }
    }
  },

  "Fleksibilnost (Sit & Reach)": {
    "Snaga (1RM, izometrija)": {
      value: "–",
      explanation: {
        sr: "Višak snage bez elastičnosti može smanjiti fleksibilnost.",
        en: "Višak snage bez elastičnosti može smanjiti flexibility."
      },
      example: {
        sr: "Hipertrofija bez stretchinga → gubitak ROM.",
        en: "Hipertrofija bez stretchinga → gubitak ROM."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "0",
      explanation: {
        sr: "Sekundarni uticaj, osim u završnim fazama pokreta.",
        en: "Sekundarni uticaj, osim u završnim fazama pokreta."
      },
      example: {
        sr: "Pasivna fleksibilnost nije garancija brzine.",
        en: "Pasivna flexibility nije garancija brzine."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "+",
      explanation: {
        sr: "Dobar opseg omogućava bolju amplitudu pokreta pri skokovima.",
        en: "Dobar opseg enables bolju amplitudu pokreta pri jumpovima."
      },
      example: {
        sr: "Fleksibilnost omogućava dublji countermovement.",
        en: "flexibility enables dublji countermovement."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "0",
      explanation: {
        sr: "Minimalan značaj, osim za prevenciju povreda.",
        en: "Minimalan značaj, osim za prevenciju povreda."
      },
      example: {
        sr: "Fleksibilnost ne utiče na YoYo.",
        en: "flexibility ne affects na YoYo."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "+",
      explanation: {
        sr: "Omogućava refleksni odgovor bez mišićno-zglobnih blokova.",
        en: "enables refleksni odgovor bez mišićno-zglobnih blokova."
      },
      example: {
        sr: "Bolja fleksibilnost → brži COD.",
        en: "Bolja flexibility → brži COD."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "+",
      explanation: {
        sr: "Omogućava bolji 'raspon preciznosti' pokreta.",
        en: "enables bolji 'raspon preciznosti' pokreta."
      },
      example: {
        sr: "Fleksibilnost pomaže tehniku.",
        en: "flexibility helps tehniku."
      }
    },
    "Mobilnost kukova": {
      value: "++",
      explanation: {
        sr: "Fleksibilnost je pasivna osnova za aktivnu mobilnost.",
        en: "flexibility je pasivna osnova za aktivnu mobility."
      },
      example: {
        sr: "Stretching → povećanje aktivnog ROM.",
        en: "Stretching → povećanje aktivnog ROM."
      }
    },
    "Preciznost pokreta": {
      value: "+",
      explanation: {
        sr: "Daje biomehaničku slobodu za precizne akcije.",
        en: "Daje biomehaničku slobodu za precizne akcije."
      },
      example: {
        sr: "ROM omogućava finu kontrolu.",
        en: "ROM enables finu kontrolu."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "+",
      explanation: {
        sr: "Omogućava zglobovima da se prilagode destabilizaciji.",
        en: "enables zglobovima da se prilagode destabilizaciji."
      },
      example: {
        sr: "Fleksibilnost pomaže reach test.",
        en: "flexibility helps reach test."
      }
    },
    "Core stabilnost": {
      value: "0",
      explanation: {
        sr: "Dobar opseg trupa omogućava bolji rad stabilizatora.",
        en: "Dobar opseg trunk/core enables bolji rad stabilizatora."
      },
      example: {
        sr: "Indirektna veza.",
        en: "Indirektna veza."
      }
    },
    "Propriocepcija": {
      value: "+",
      explanation: {
        sr: "Elastičnost omogućava bolje senzorne povratne informacije.",
        en: "Elastičnost enables bolje senzorne povratne informacije."
      },
      example: {
        sr: "Stretch → bolja svest o granicama.",
        en: "Stretch → bolja svest o granicama."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "+",
      explanation: {
        sr: "Omogućava puni opseg refleksnih pokreta.",
        en: "enables puni opseg refleksnih pokreta."
      },
      example: {
        sr: "Fleksibilnost pomaže SSC.",
        en: "flexibility helps SSC."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "0",
      explanation: {
        sr: "Nema direktne veze.",
        en: "Nema direktne veze."
      },
      example: {
        sr: "Nezavisni faktori.",
        en: "Nezavisni faktori."
      }
    },
    "Anaerobna izdržljivost": {
      value: "0",
      explanation: {
        sr: "Fleksibilnost ne doprinosi ponavljanim naporima.",
        en: "flexibility ne doprinosi ponavljanim naporima."
      },
      example: {
        sr: "Osim u prevenciji.",
        en: "Osim u prevenciji."
      }
    }
  },

  "Preciznost pokreta": {
    "Snaga (1RM, izometrija)": {
      value: "0",
      explanation: {
        sr: "Precizna sila zahteva dobar neuromišićni prenos, ne samo sirovu snagu.",
        en: "Precizna sila zahteva dobar neuromišićni prenos, ne samo sirovu snagu."
      },
      example: {
        sr: "Snaga ne garantuje tačnost.",
        en: "strength ne garantuje tačnost."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "0",
      explanation: {
        sr: "Brzina bez kontrole kompromituje preciznost.",
        en: "speed bez kontrole kompromituje preciznost."
      },
      example: {
        sr: "Brz ne znači precizan.",
        en: "Brz ne znači precizan."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "0",
      explanation: {
        sr: "Važno kada je potrebna eksplozivna preciznost.",
        en: "Važno kada je potrebna eksplozivna preciznost."
      },
      example: {
        sr: "Skok + preciznost = game situacija.",
        en: "jump + preciznost = game situacija."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "+",
      explanation: {
        sr: "Aerobna priprema omogućava održavanje preciznosti pod zamorom.",
        en: "Aerobna priprema enables održavanje preciznosti pod zamorom."
      },
      example: {
        sr: "Nizak VO2max → FT% pada za 15% u Q4.",
        en: "Nizak VO2max → FT% drop/decreasea za 15% u Q4."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "+",
      explanation: {
        sr: "Agilnost omogućava bolju poziciju za izvođenje preciznog pokreta.",
        en: "agility enables bolju poziciju za izvođenje preciznog pokreta."
      },
      example: {
        sr: "Precizna mehanika COD.",
        en: "Precizna mehanika COD."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "++",
      explanation: {
        sr: "Ključna za usklađeno izvođenje pokreta sa visokim stepenom kontrole.",
        en: "Ključna za usklađeno izvođenje pokreta sa visokim stepenom kontrole."
      },
      example: {
        sr: "Bolja koordinacija → FT% raste za 5-8%.",
        en: "Bolja coordination → FT% growthe za 5-8%."
      }
    },
    "Mobilnost kukova": {
      value: "+",
      explanation: {
        sr: "Omogućava korekcije pokreta unutar pune amplitude.",
        en: "enables korekcije pokreta unutar pune amplitude."
      },
      example: {
        sr: "Mobilnost pomaže preciznost.",
        en: "mobility helps preciznost."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "+",
      explanation: {
        sr: "Omogućava pravilno postavljanje tela za precizne završetke pokreta.",
        en: "enables pravilno postavljanje tela za precizne završetke pokreta."
      },
      example: {
        sr: "ROM → bolja kontrola.",
        en: "ROM → bolja kontrola."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "++",
      explanation: {
        sr: "Stabilnost omogućava tačno izvođenje bez oscilacija.",
        en: "stability enables tačno izvođenje bez oscilacija."
      },
      example: {
        sr: "Dobar balans → konzistentniji šut.",
        en: "Dobar balance → konzistentniji šut."
      }
    },
    "Core stabilnost": {
      value: "+",
      explanation: {
        sr: "Obezbeđuje stabilnu osnovu iz koje se precizno pokreću ekstremiteti.",
        en: "Obezbeđuje stabilnu osnovu iz koje se precizno pokreću ekstremiteti."
      },
      example: {
        sr: "Core trening → stabilniji release.",
        en: "Core trening → stabilniji release."
      }
    },
    "Propriocepcija": {
      value: "++",
      explanation: {
        sr: "Kritična za svestan položaj udova u prostoru, neophodna za precizne pokrete.",
        en: "Kritična za svestan položaj udova u prostoru, neophodna za precizne pokrete."
      },
      example: {
        sr: "Proprioceptivni trening → manje varijabilnost.",
        en: "Proprioceptivni trening → manje varijabilnost."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "+",
      explanation: {
        sr: "Brze korekcije i adaptacije pomažu u zadržavanju preciznosti.",
        en: "Brze korekcije i adaptacije pomažu u zadržavanju preciznosti."
      },
      example: {
        sr: "Reaktivnost pomaže prilagođavanje.",
        en: "Reaktivnost helps prilagođavanje."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "0",
      explanation: {
        sr: "Neposredno ne utiče, ali može da poboljša pažnju i kontinuitet.",
        en: "Neposredno ne affects, ali može da poboljša pažnju i kontinuitet."
      },
      example: {
        sr: "VO2max ne garantuje preciznost.",
        en: "VO2max ne garantuje preciznost."
      }
    },
    "Anaerobna izdržljivost": {
      value: "0",
      explanation: {
        sr: "Zamor direktno smanjuje preciznost.",
        en: "Zamor directly reduces preciznost."
      },
      example: {
        sr: "Anaerobni umor → pad preciznosti.",
        en: "Anaerobni umor → drop/decrease preciznosti."
      }
    }
  },

  "Balans (Y-Balance, Single-leg)": {
    "Snaga (1RM, izometrija)": {
      value: "+",
      explanation: {
        sr: "Snaga stabilizatora omogućava održavanje pozicije.",
        en: "strength stabilizatora enables održavanje pozicije."
      },
      example: {
        sr: "Jednonožne vežbe snage → +15% Y-Balance.",
        en: "Jednonožne vežbe snage → +15% Y-Balance."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "–",
      explanation: {
        sr: "Veća brzina = veći izazov za balans, posebno kod naglih promena pravca.",
        en: "Veća speed = veći izazov za balance, posebno kod naglih promena pravca."
      },
      example: {
        sr: "Sprint >max → gubitak kontrole.",
        en: "sprint >max → gubitak kontrole."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "+",
      explanation: {
        sr: "Omogućava efikasno iskorišćenje sile bez gubitka kontrole.",
        en: "enables efikasno iskorišćenje sile bez gubitka kontrole."
      },
      example: {
        sr: "Dobar balans → pravilniji CMJ.",
        en: "Dobar balance → pravilniji CMJ."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "–",
      explanation: {
        sr: "Zamor smanjuje sposobnost održavanja balansa.",
        en: "Zamor reduces sposobnost održavanja balancea."
      },
      example: {
        sr: "Umor → nestabilnost.",
        en: "Umor → nestability."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "++",
      explanation: {
        sr: "Balans omogućava brzu promenu pravca bez gubitka kontrole.",
        en: "balance enables brzu promenu pravca bez gubitka kontrole."
      },
      example: {
        sr: "Y-Balance asimetrija → sporiji COD.",
        en: "Y-Balance asimetrija → sporiji COD."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "++",
      explanation: {
        sr: "Stabilna osnova tela omogućava preciznu i skladnu izvedbu pokreta.",
        en: "Stabilna osnova tela enables preciznu i skladnu izvedbu pokreta."
      },
      example: {
        sr: "Koordinacioni drillovi → stabilniji balans.",
        en: "Koordinacioni drillovi → stabilniji balance."
      }
    },
    "Mobilnost kukova": {
      value: "+",
      explanation: {
        sr: "Pokretljivost u zglobovima pomaže adaptaciji položaja i korekciji.",
        en: "Pokretljivost u zglobovima helps adaptaciji položaja i korekciji."
      },
      example: {
        sr: "Hip mobility → +5-8% Y-Balance.",
        en: "Hip mobility → +5-8% Y-Balance."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "+",
      explanation: {
        sr: "Omogućava zglobovima da se prilagode destabilizaciji.",
        en: "enables zglobovima da se prilagode destabilizaciji."
      },
      example: {
        sr: "Fleksibilnost pomaže reach.",
        en: "flexibility helps reach."
      }
    },
    "Preciznost pokreta": {
      value: "++",
      explanation: {
        sr: "Fini balans je preduslov za precizne tehničke pokrete.",
        en: "Fini balance je preduslov za precizne tehničke pokrete."
      },
      example: {
        sr: "Stabilnost → tačnost.",
        en: "stability → tačnost."
      }
    },
    "Core stabilnost": {
      value: "++",
      explanation: {
        sr: "Snažan i stabilan trup omogućava preciznu kontrolu centra tela.",
        en: "Snažan i stabilan trunk enables preciznu kontrolu centra tela."
      },
      example: {
        sr: "Anti-rotacione vežbe → bolji Y-Balance.",
        en: "Anti-rotacione vežbe → bolji Y-Balance."
      }
    },
    "Propriocepcija": {
      value: "++",
      explanation: {
        sr: "Ključna za održavanje stabilnosti i pozicije tela u prostoru.",
        en: "Ključna za održavanje stabilityi i pozicije tela u prostoru."
      },
      example: {
        sr: "Proprioceptivni trening → +20% single-leg stance.",
        en: "Proprioceptivni trening → +20% single-leg stance."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "+",
      explanation: {
        sr: "Brza korekcija kada telo izlazi iz ravnoteže.",
        en: "Brza korekcija kada telo izlazi iz ravnoteže."
      },
      example: {
        sr: "Reaktivnost pomaže stabilizaciju.",
        en: "Reaktivnost helps stabilizaciju."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "0",
      explanation: {
        sr: "Dugotrajna aktivnost ne zavisi direktno od pozicijskog osećaja.",
        en: "Dugotrajna aktivnost ne depends directly od pozicijskog osećaja."
      },
      example: {
        sr: "VO2max ne utiče na balans direktno.",
        en: "VO2max ne affects na balance directly."
      }
    },
    "Anaerobna izdržljivost": {
      value: "0",
      explanation: {
        sr: "Kod sportova sa brzim promenama pravca ima ulogu u očuvanju kontrole.",
        en: "Kod sportova sa brzim promenama pravca ima ulogu u očuvanju kontrole."
      },
      example: {
        sr: "Umor može narušiti balans.",
        en: "Umor može narušiti balance."
      }
    }
  },

  "Core stabilnost": {
    "Snaga (1RM, izometrija)": {
      value: "++",
      explanation: {
        sr: "Core je veza između donjih i gornjih ekstremiteta u prenosu sile.",
        en: "Core je veza između donjih i gornjih ekstremiteta u prenosu sile."
      },
      example: {
        sr: "Slab core → 15-20% gubitak snage.",
        en: "Slab core → 15-20% gubitak snage."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "+",
      explanation: {
        sr: "Stabilnost trupa omogućava efikasnu transmisiju sile.",
        en: "stability trunk/core enables efikasnu transmisiju sile."
      },
      example: {
        sr: "Slab core → pad brzine.",
        en: "Slab core → drop/decrease brzine."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "+",
      explanation: {
        sr: "Stabilan trup omogućava efikasan prenos sile pri skoku.",
        en: "Stabilan trunk enables efikasan prenos sile pri jumpu."
      },
      example: {
        sr: "Anti-rotacija → +3-5cm CMJ.",
        en: "Anti-rotacija → +3-5cm CMJ."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "0",
      explanation: {
        sr: "Dobra stabilnost trupa štiti tehniku kod dugotrajne aktivnosti.",
        en: "Dobra stability trunk/core štiti tehniku kod dugotrajne aktivnosti."
      },
      example: {
        sr: "Core ne zavisi od aerobne izdržljivosti.",
        en: "Core ne depends od aerobne endurancei."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "+",
      explanation: {
        sr: "Brze promene zahtevaju jaku bazu za balans i reakciju.",
        en: "Brze promene zahtevaju jaku bazu za balance i reakciju."
      },
      example: {
        sr: "Core pomaže COD.",
        en: "Core helps COD."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "+",
      explanation: {
        sr: "Stabilna osovina tela čini koordinaciju ekstremiteta efikasnijom.",
        en: "Stabilna osovina tela čini koordinaciju ekstremiteta efikasnijom."
      },
      example: {
        sr: "Core → bolja sinhronizacija.",
        en: "Core → bolja sinhronizacija."
      }
    },
    "Mobilnost kukova": {
      value: "+",
      explanation: {
        sr: "Stabilna osnova dozvoljava slobodu pokreta u perifernim zglobovima.",
        en: "Stabilna osnova dozvoljava slobodu pokreta u perifernim zglobovima."
      },
      example: {
        sr: "Core omogućava hip mobilnost.",
        en: "Core enables hip mobility."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "0",
      explanation: {
        sr: "Uloga u kontroli opsega, ali sekundarna.",
        en: "Uloga u kontroli opsega, ali sekundarna."
      },
      example: {
        sr: "Indirektna veza.",
        en: "Indirektna veza."
      }
    },
    "Preciznost pokreta": {
      value: "+",
      explanation: {
        sr: "Core stabilnost smanjuje oscilacije pri preciznim pokretima.",
        en: "Core stability reduces oscilacije pri preciznim pokretima."
      },
      example: {
        sr: "Plank progresija → stabilniji šut.",
        en: "Plank progresija → stabilniji šut."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "++",
      explanation: {
        sr: "Core je centar kontrole balansa.",
        en: "Core je centar kontrole balancea."
      },
      example: {
        sr: "Dead bug → +10% single-leg.",
        en: "Dead bug → +10% single-leg."
      }
    },
    "Propriocepcija": {
      value: "+",
      explanation: {
        sr: "Prenos senzorne kontrole počinje iz centra tela.",
        en: "Prenos senzorne kontrole počinje iz centra tela."
      },
      example: {
        sr: "Core stability → bolja telesna svest.",
        en: "Core stability → bolja telesna svest."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "+",
      explanation: {
        sr: "Core omogućava brz i kontrolisan prenos sile.",
        en: "Core enables brz i kontrolisan prenos sile."
      },
      example: {
        sr: "Stabilnost pomaže RSI.",
        en: "stability helps RSI."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "0",
      explanation: {
        sr: "Nema direktan uticaj osim na posturu.",
        en: "Nema direktan uticaj osim na posturu."
      },
      example: {
        sr: "Nezavisni faktori.",
        en: "Nezavisni faktori."
      }
    },
    "Anaerobna izdržljivost": {
      value: "+",
      explanation: {
        sr: "Od presudnog značaja za tehničku preciznost u zamoru.",
        en: "Od presudnog značaja za tehničku preciznost u zamoru."
      },
      example: {
        sr: "Core → održavanje forme u Q4.",
        en: "Core → održavanje forme u Q4."
      }
    }
  },

  "Propriocepcija": {
    "Snaga (1RM, izometrija)": {
      value: "+",
      explanation: {
        sr: "Pravilno angažovanje snage zavisi od pozicije tela.",
        en: "Pravilno angažovanje snage depends od pozicije tela."
      },
      example: {
        sr: "Propriocepcija pomaže aktivaciju.",
        en: "Propriocepcija helps aktivaciju."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "+",
      explanation: {
        sr: "Usmerena brzina se oslanja na povratnu informaciju iz zglobova.",
        en: "Usmerena speed se oslanja na povratnu informaciju iz joints."
      },
      example: {
        sr: "Telesna svest → ravnomerniji koraci.",
        en: "Telesna svest → ravnomerniji koraci."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "+",
      explanation: {
        sr: "Brzi pokreti zahtevaju trenutni odgovor proprioceptivnog sistema.",
        en: "Brzi pokreti zahtevaju trenutni odgovor proprioceptivnog sistema."
      },
      example: {
        sr: "Bolja svest → pravilniji skok.",
        en: "Bolja svest → pravilniji jump."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "0",
      explanation: {
        sr: "Slabo uključena osim u održavanju forme pod umorom.",
        en: "Slabo uključena osim u održavanju forme pod umorom."
      },
      example: {
        sr: "Minimalna direktna veza.",
        en: "Minimalna direktna veza."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "++",
      explanation: {
        sr: "Brze korekcije pri COD zahtevaju dobru propriocepciju.",
        en: "Brze korekcije pri COD zahtevaju dobru propriocepciju."
      },
      example: {
        sr: "Bosu trening → stabilniji COD.",
        en: "Bosu trening → stabilniji COD."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "++",
      explanation: {
        sr: "Direktno povezana - propriocepcija omogućava fino upravljanje pokretima.",
        en: "directly povezana - propriocepcija enables fino upravljanje pokretima."
      },
      example: {
        sr: "Proprioceptivni drillovi → brža reakcija.",
        en: "Proprioceptivni drillovi → brža reakcija."
      }
    },
    "Mobilnost kukova": {
      value: "+",
      explanation: {
        sr: "Potrebna za kontrolu pokreta unutar dostupnog opsega.",
        en: "Potrebna za kontrolu pokreta unutar dostupnog opsega."
      },
      example: {
        sr: "Svest o granicama ROM.",
        en: "Svest o granicama ROM."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "+",
      explanation: {
        sr: "Više opsega zahteva bolji osećaj položaja i kontrole.",
        en: "Više opsega zahteva bolji osećaj položaja i kontrole."
      },
      example: {
        sr: "Stretch → bolja telesna svest.",
        en: "Stretch → bolja telesna svest."
      }
    },
    "Preciznost pokreta": {
      value: "++",
      explanation: {
        sr: "Bez senzorne kontrole nema preciznog pozicioniranja tela.",
        en: "Bez senzorne kontrole nema preciznog pozicioniranja tela."
      },
      example: {
        sr: "Proprioceptivni trening → manje greške.",
        en: "Proprioceptivni trening → manje greške."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "++",
      explanation: {
        sr: "Bez razvijene propriocepcije nema stabilnog balansa.",
        en: "Bez razvijene propriocepcije nema stabilnog balancea."
      },
      example: {
        sr: "Zatvorene oči → 50% pad balansa.",
        en: "Zatvorene oči → 50% drop/decrease balancea."
      }
    },
    "Core stabilnost": {
      value: "+",
      explanation: {
        sr: "Bolji core omogućava prenos senzorne informacije kroz stabilnu bazu.",
        en: "Bolji core enables prenos senzorne informacije kroz stabilnu bazu."
      },
      example: {
        sr: "Core → bolja telesna svest.",
        en: "Core → bolja telesna svest."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "++",
      explanation: {
        sr: "Brza korekcija zahteva pun funkcionalni opseg.",
        en: "Brza korekcija zahteva pun funkcionalni opseg."
      },
      example: {
        sr: "Propriocepcija pomaže RSI.",
        en: "Propriocepcija helps RSI."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "0",
      explanation: {
        sr: "Dugotrajna aktivnost ne zavisi direktno od pozicijskog osećaja.",
        en: "Dugotrajna aktivnost ne depends directly od pozicijskog osećaja."
      },
      example: {
        sr: "Nezavisni faktori.",
        en: "Nezavisni faktori."
      }
    },
    "Anaerobna izdržljivost": {
      value: "+",
      explanation: {
        sr: "Korektivni odgovor tela pod zamorom, posebno kod promene pravca.",
        en: "Korektivni odgovor tela pod zamorom, posebno kod promene pravca."
      },
      example: {
        sr: "Svest o telu → bolja kontrola u zamoru.",
        en: "Svest o telu → bolja kontrola u zamoru."
      }
    }
  },

  "Reaktivnost (RSI_mod)": {
    "Snaga (1RM, izometrija)": {
      value: "+",
      explanation: {
        sr: "Snaga je osnova, ali RSI zahteva i brzinu + elastičnost.",
        en: "strength je osnova, ali RSI zahteva i brzinu + elastičnost."
      },
      example: {
        sr: "Čučanj raste, RSI stagnira = elastični deficit.",
        en: "squat growthe, RSI stagnira = elastični deficit."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "++",
      explanation: {
        sr: "Brz ground contact time = brži sprint.",
        en: "Brz ground contact time = brži sprint."
      },
      example: {
        sr: "RSI >0.5 → sprint elite zona.",
        en: "RSI >0.5 → sprint elite zona."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "++",
      explanation: {
        sr: "RSI mjeri ceo SSC (stretch-shortening cycle).",
        en: "RSI mjeri ceo SSC (stretch-shortening cycle)."
      },
      example: {
        sr: "CMJ vs DJ → RSI otkriva elastičnost.",
        en: "CMJ vs DJ → RSI otkriva elastičnost."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "0",
      explanation: {
        sr: "Nema direktnu korelaciju, osim kod oporavka.",
        en: "Nema direktnu korelaciju, osim kod oporavka."
      },
      example: {
        sr: "Nezavisni sistemi.",
        en: "Nezavisni sistemi."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "++",
      explanation: {
        sr: "Reaktivnost omogućava brze COD.",
        en: "Reaktivnost enables brze COD."
      },
      example: {
        sr: "Pliometrija → brži T-test.",
        en: "Pliometrija → brži T-test."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "++",
      explanation: {
        sr: "Precizna CNS aktivacija omogućava optimalan SSC.",
        en: "Precizna CNS aktivacija enables optimalan SSC."
      },
      example: {
        sr: "Koordinacioni rad + plyo → RSI raste.",
        en: "Koordinacioni rad + plyo → RSI growthe."
      }
    },
    "Mobilnost kukova": {
      value: "+",
      explanation: {
        sr: "Bolji pokretni potencijal = brži odgovor.",
        en: "Bolji pokretni potencijal = brži odgovor."
      },
      example: {
        sr: "Mobilnost pomaže RSI.",
        en: "mobility helps RSI."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "+",
      explanation: {
        sr: "Viša fleksibilnost omogućava lakši transfer energije.",
        en: "Viša flexibility enables lakši transfer energije."
      },
      example: {
        sr: "Elastičnost pomaže SSC.",
        en: "Elastičnost helps SSC."
      }
    },
    "Preciznost pokreta": {
      value: "+",
      explanation: {
        sr: "Nema direktan uticaj, ali omogućava brže izvođenje tačnih pokreta.",
        en: "Nema direktan uticaj, ali enables brže izvođenje tačnih pokreta."
      },
      example: {
        sr: "Kontrola → bolji RSI.",
        en: "Kontrola → bolji RSI."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "+",
      explanation: {
        sr: "Sposobnost održavanja ravnoteže je ključna za uspešno korišćenje eksplozivne snage.",
        en: "Sposobnost održavanja ravnoteže je ključna za uspešno korišćenje eksplozivne snage."
      },
      example: {
        sr: "Balans → stabilniji landing.",
        en: "balance → stabilniji landing."
      }
    },
    "Core stabilnost": {
      value: "+",
      explanation: {
        sr: "Dobra stabilnost omogućava efikasno korišćenje snage.",
        en: "Dobra stability enables efikasno korišćenje snage."
      },
      example: {
        sr: "Core → bolji RSI transfer.",
        en: "Core → bolji RSI transfer."
      }
    },
    "Propriocepcija": {
      value: "++",
      explanation: {
        sr: "Kritična za anticipaciju i korekciju pokreta u milisekundama.",
        en: "Kritična za anticipaciju i korekciju pokreta u milisekundama."
      },
      example: {
        sr: "Propriocepcija → optimalan SSC.",
        en: "Propriocepcija → optimalan SSC."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "0",
      explanation: {
        sr: "Retko se aktivira u niskointenzivnim naporima.",
        en: "Retko se aktivira u niskointenzivnim naporima."
      },
      example: {
        sr: "Nezavisni sistemi.",
        en: "Nezavisni sistemi."
      }
    },
    "Anaerobna izdržljivost": {
      value: "++",
      explanation: {
        sr: "RSI + anaerobna = održavanje eksplozivnosti pod zamorom.",
        en: "RSI + anaerobna = održavanje explosivenessi pod zamorom."
      },
      example: {
        sr: "RSI visok + niska anaerobna → pad u Q4.",
        en: "RSI visok + niska anaerobna → drop/decrease u Q4."
      }
    }
  },

  "Aerobna izdržljivost (VO2max)": {
    "Snaga (1RM, izometrija)": {
      value: "–",
      explanation: {
        sr: "Aerobni rad smanjuje mTOR signalizaciju i sintezu proteina.",
        en: "Aerobni rad reduces mTOR signalizaciju i sintezu proteina."
      },
      example: {
        sr: "Cardio + strength → interference effect.",
        en: "Cardio + strength → interference effect."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "–",
      explanation: {
        sr: "Aerobna adaptacija menja tip vlakana ka slow-twitch.",
        en: "Aerobna adaptacija menja tip vlakana ka slow-twitch."
      },
      example: {
        sr: "VO2max >65 → pad sprinta.",
        en: "VO2max >65 → drop/decrease sprinta."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "–",
      explanation: {
        sr: "Konfliktirajući putevi: AMPK vs mTOR.",
        en: "Konfliktirajući putevi: AMPK vs mTOR."
      },
      example: {
        sr: "Endurance blok → CMJ pada.",
        en: "Endurance blok → CMJ drop/decreasea."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "++",
      explanation: {
        sr: "Direktna veza kroz aerobni kapacitet.",
        en: "Direktna veza kroz aerobni kapacitet."
      },
      example: {
        sr: "VO2max >55 → YoYo >2000m.",
        en: "VO2max >55 → YoYo >2000m."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "0",
      explanation: {
        sr: "Nema direktne veze, osim kod oporavka.",
        en: "Nema direktne veze, osim kod oporavka."
      },
      example: {
        sr: "VO2max ne garantuje COD.",
        en: "VO2max ne garantuje COD."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "0",
      explanation: {
        sr: "U sportovima sa repetitivnim obrascima, koordinacija mora biti održiva.",
        en: "U sportovima sa repetitivnim obrascima, coordination mora biti održiva."
      },
      example: {
        sr: "Indirektna veza kroz zamor.",
        en: "Indirektna veza kroz zamor."
      }
    },
    "Mobilnost kukova": {
      value: "0",
      explanation: {
        sr: "Nema direktan uticaj.",
        en: "Nema direktan uticaj."
      },
      example: {
        sr: "Nezavisni faktori.",
        en: "Nezavisni faktori."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "0",
      explanation: {
        sr: "Nema direktne veze.",
        en: "Nema direktne veze."
      },
      example: {
        sr: "Nezavisni faktori.",
        en: "Nezavisni faktori."
      }
    },
    "Preciznost pokreta": {
      value: "0",
      explanation: {
        sr: "Neposredno ne utiče, ali može da poboljša pažnju.",
        en: "Neposredno ne affects, ali može da poboljša pažnju."
      },
      example: {
        sr: "VO2max ne garantuje preciznost.",
        en: "VO2max ne garantuje preciznost."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "0",
      explanation: {
        sr: "Dugotrajna aktivnost ne zavisi direktno od pozicijskog osećaja.",
        en: "Dugotrajna aktivnost ne depends directly od pozicijskog osećaja."
      },
      example: {
        sr: "Nezavisni faktori.",
        en: "Nezavisni faktori."
      }
    },
    "Core stabilnost": {
      value: "0",
      explanation: {
        sr: "Nema direktan uticaj osim na posturu.",
        en: "Nema direktan uticaj osim na posturu."
      },
      example: {
        sr: "Nezavisni faktori.",
        en: "Nezavisni faktori."
      }
    },
    "Propriocepcija": {
      value: "0",
      explanation: {
        sr: "Slabo uključena osim u održavanju forme pod umorom.",
        en: "Slabo uključena osim u održavanju forme pod umorom."
      },
      example: {
        sr: "Minimalna veza.",
        en: "Minimalna veza."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "0",
      explanation: {
        sr: "Retko se aktivira u niskointenzivnim naporima.",
        en: "Retko se aktivira u niskointenzivnim naporima."
      },
      example: {
        sr: "Nezavisni sistemi.",
        en: "Nezavisni sistemi."
      }
    },
    "Anaerobna izdržljivost": {
      value: "+",
      explanation: {
        sr: "Bolja aerobna baza omogućava brži oporavak između anaerobnih napora.",
        en: "Bolja aerobna baza enables brži oporavak između anaerobnih napora."
      },
      example: {
        sr: "VO2max → brži oporavak između serija.",
        en: "VO2max → brži oporavak između serija."
      }
    }
  },

  "Anaerobna izdržljivost": {
    "Snaga (1RM, izometrija)": {
      value: "+",
      explanation: {
        sr: "Potrebna za održavanje intenziteta pri ponovljenim naporima.",
        en: "Potrebna za održavanje intenziteta pri ponovljenim naporima."
      },
      example: {
        sr: "Utrenirani sportisti bolje koriste snagu bez zamora.",
        en: "Utrenirani sportisti bolje koriste snagu bez zamora."
      }
    },
    "Brzina (Sprint 5-30m)": {
      value: "+",
      explanation: {
        sr: "Održavanje sprint brzine u ponavljanjima.",
        en: "Održavanje sprint brzine u ponavljanjima."
      },
      example: {
        sr: "Repeated sprint ability test.",
        en: "Repeated sprint ability test."
      }
    },
    "Eksplozivnost (CMJ, SJ)": {
      value: "++",
      explanation: {
        sr: "Višestruki eksplozivni napori u ponavljanjima.",
        en: "Višestruki eksplozivni napori u ponavljanjima."
      },
      example: {
        sr: "Dobar CMJ + anaerobna → performance u Q4.",
        en: "Dobar CMJ + anaerobna → performance u Q4."
      }
    },
    "Izdržljivost (YoYo IR1)": {
      value: "+",
      explanation: {
        sr: "YoYo IR1 kombinuje oba sistema, ali više anaerobni u kasnijim fazama.",
        en: "YoYo IR1 kombinuje oba sistema, ali više anaerobni u kasnijim fazama."
      },
      example: {
        sr: "Dobar laktacijski prag → bolji YoYo završetak.",
        en: "Dobar laktacijski prag → bolji YoYo završetak."
      }
    },
    "Agilnost (T-test, Pro-agility)": {
      value: "+",
      explanation: {
        sr: "U sportovima sa čestim reaktivnim zahtevima.",
        en: "U sportovima sa čestim reaktivnim zahtevima."
      },
      example: {
        sr: "RSA + COD = game performance.",
        en: "RSA + COD = game performance."
      }
    },
    "Koordinacija (Tehnička efikasnost)": {
      value: "+",
      explanation: {
        sr: "Sprint sposobnost u ponavljanjima direktno zavisi od anaerobne baze.",
        en: "sprint sposobnost u ponavljanjima directly depends od anaerobne baze."
      },
      example: {
        sr: "Održavanje tehničke preciznosti tokom zamora.",
        en: "Održavanje tehničke preciznosti tokom zamora."
      }
    },
    "Mobilnost kukova": {
      value: "0",
      explanation: {
        sr: "Veća mobilnost olakšava tehničku efikasnost tokom ponavljanih napora.",
        en: "Veća mobility olakšava tehničku efikasnost tokom ponavljanih napora."
      },
      example: {
        sr: "Indirektna veza.",
        en: "Indirektna veza."
      }
    },
    "Fleksibilnost (Sit & Reach)": {
      value: "0",
      explanation: {
        sr: "Održavanje opsega pri zamoru može prevenirati povrede.",
        en: "Održavanje opsega pri zamoru može prevenirati povrede."
      },
      example: {
        sr: "Minimalna direktna veza.",
        en: "Minimalna direktna veza."
      }
    },
    "Preciznost pokreta": {
      value: "0",
      explanation: {
        sr: "Zamor direktno smanjuje preciznost, posebno pri anaerobnim ponavljanjima.",
        en: "Zamor directly reduces preciznost, posebno pri anaerobnim ponavljanjima."
      },
      example: {
        sr: "Umor → pad preciznosti.",
        en: "Umor → drop/decrease preciznosti."
      }
    },
    "Balans (Y-Balance, Single-leg)": {
      value: "0",
      explanation: {
        sr: "Kod sportova sa brzim promenama pravca ima ulogu u očuvanju kontrole.",
        en: "Kod sportova sa brzim promenama pravca ima ulogu u očuvanju kontrole."
      },
      example: {
        sr: "Anaerobni umor → nestabilnost.",
        en: "Anaerobni umor → nestability."
      }
    },
    "Core stabilnost": {
      value: "+",
      explanation: {
        sr: "Stabilnost kod više ponavljanja i promena intenziteta.",
        en: "stability kod više ponavljanja i promena intenziteta."
      },
      example: {
        sr: "Core → održavanje forme.",
        en: "Core → održavanje forme."
      }
    },
    "Propriocepcija": {
      value: "+",
      explanation: {
        sr: "Korektivni odgovor tela pod zamorom, posebno kod promene pravca.",
        en: "Korektivni odgovor tela pod zamorom, posebno kod promene pravca."
      },
      example: {
        sr: "Svest o telu u zamoru.",
        en: "Svest o telu u zamoru."
      }
    },
    "Reaktivnost (RSI_mod)": {
      value: "++",
      explanation: {
        sr: "RSI + anaerobna = održavanje eksplozivnosti pod zamorom.",
        en: "RSI + anaerobna = održavanje explosivenessi pod zamorom."
      },
      example: {
        sr: "RSI visok + niska anaerobna → pad u Q4.",
        en: "RSI visok + niska anaerobna → drop/decrease u Q4."
      }
    },
    "Aerobna izdržljivost (VO2max)": {
      value: "+",
      explanation: {
        sr: "Aerobna baza omogućava brži oporavak.",
        en: "Aerobna baza enables brži oporavak."
      },
      example: {
        sr: "VO2max osnova za RSA (repeated sprint).",
        en: "VO2max osnova za RSA (repeated sprint)."
      }
    }
  }
};

export const factorGroups = {
  "Snaga i eksplozivnost": ["Snaga (1RM, izometrija)", "Eksplozivnost (CMJ, SJ)", "Reaktivnost (RSI_mod)", "Core stabilnost"],
  "Brzina i agilnost": ["Brzina (Sprint 5-30m)", "Agilnost (T-test, Pro-agility)"],
  "Izdržljivost": ["Izdržljivost (YoYo IR1)", "Aerobna izdržljivost (VO2max)", "Anaerobna izdržljivost"],
  "Kontrola pokreta": ["Koordinacija (Tehnička efikasnost)", "Preciznost pokreta", "Balans (Y-Balance, Single-leg)"],
  "Opseg i pokretljivost": ["Mobilnost kukova", "Fleksibilnost (Sit & Reach)"],
  "Senzorno-motoričko": ["Propriocepcija"]
};
