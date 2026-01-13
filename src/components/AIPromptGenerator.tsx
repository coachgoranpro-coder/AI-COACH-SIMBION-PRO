import { useState } from 'react';
import { Bot, Copy, ExternalLink, AlertTriangle, Check, Sparkles } from 'lucide-react';
import { POSITION_STANDARDS, BREATHING_RULES } from '../data/coachGoranMethodology';
import type { BasketballPosition } from '../data/exerciseCatalog';

interface AIPromptGeneratorProps {
  language?: 'sr' | 'en';
  playerData?: {
    position?: BasketballPosition;
    tests?: Array<{ testName: string; value: number }>;
    level?: 'beginner' | 'intermediate' | 'advanced' | 'elite';
  };
}

type AIProvider = 'chatgpt' | 'claude' | 'gemini';

export default function AIPromptGenerator({ language = 'sr', playerData }: AIPromptGeneratorProps) {
  const [selectedProvider, setSelectedProvider] = useState<AIProvider>('gemini');
  const [copied, setCopied] = useState(false);

  const translations = {
    sr: {
      title: 'AI Prompt Generator',
      subtitle: 'Generiši promptove za eksterne AI asistente',
      disclaimer: 'Važno upozorenje',
      disclaimerText: 'SIMBION generiše strukturirane promptove za ekst​erne AI servise. ChatGPT®, Claude®, i Gemini™ su zaštićeni znakovi vlasnika. Nismo u afilijaciji sa ovim servisima.',
      selectProvider: 'Izaberi AI servis',
      generatePrompt: 'Generiši Prompt',
      copyPrompt: 'Kopiraj Prompt',
      openIn: 'Otvori u',
      promptCopied: 'Prompt kopiran!',
      promptPreview: 'Pregled Prompta',
      trademarks: 'Zaštićeni znakovi',
      trademarksText: 'ChatGPT® je registrovani znak OpenAI. Claude® je registrovani znak Anthropic. Gemini™ je zaštićeni znak Google LLC.',
      dataIncluded: 'Podaci uključeni u prompt',
      playerPosition: 'Pozicija igrača',
      testResults: 'Rezultati testova',
      methodologyStandards: 'Coach Goran standardi',
      breathingRules: 'Pravila disanja',
      rmZones: 'RM zone',
      noPlayerData: 'Nema podataka o igraču - koristićemo generički prompt'
    },
    en: {
      title: 'AI Prompt Generator',
      subtitle: 'Generate prompts for external AI assistants',
      disclaimer: 'Important Notice',
      disclaimerText: 'SIMBION generates structured prompts for external AI services. ChatGPT®, Claude®, and Gemini™ are trademarks of their respective owners. We are not affiliated with these services.',
      selectProvider: 'Select AI Service',
      generatePrompt: 'Generate Prompt',
      copyPrompt: 'Copy Prompt',
      openIn: 'Open in',
      promptCopied: 'Prompt copied!',
      promptPreview: 'Prompt Preview',
      trademarks: 'Trademarks',
      trademarksText: 'ChatGPT® is a registered trademark of OpenAI. Claude® is a registered trademark of Anthropic. Gemini™ is a trademark of Google LLC.',
      dataIncluded: 'Data included in prompt',
      playerPosition: 'Player position',
      testResults: 'Test results',
      methodologyStandards: 'Coach Goran standards',
      breathingRules: 'Breathing rules',
      rmZones: 'RM zones',
      noPlayerData: 'No player data - using generic prompt'
    }
  };

  const t = translations[language];

  const providers: Array<{ id: AIProvider; name: string; url: string; color: string }> = [
    { id: 'chatgpt', name: 'ChatGPT®', url: 'https://chat.openai.com', color: 'from-green-600/20 to-teal-600/20 border-green-500/30' },
    { id: 'claude', name: 'Claude®', url: 'https://claude.ai', color: 'from-orange-600/20 to-amber-600/20 border-orange-500/30' },
    { id: 'gemini', name: 'Gemini™', url: 'https://gemini.google.com', color: 'from-blue-600/20 to-indigo-600/20 border-blue-500/30' }
  ];

  const generatePrompt = (): string => {
    const positionStandards = playerData?.position 
      ? POSITION_STANDARDS.find(p => p.position === playerData.position)
      : null;

    const breathingRules = BREATHING_RULES[language];

    let prompt = language === 'sr' 
      ? `# AI Basketball Physical Training Expert

Ti si ekspert za fizičku pripremu košarkaša. Koristiš Coach Goran metodologiju iz knjige.

## OSNOVNO PRAVILO
Test → Level → Diagnosis → Exercise (NE Factor → Exercise!)

## OBAVEZNA STRUKTURA TRENINGA
1. UVOD (15min): Propriocepcija + Aktivacija
2. CNS ACTIVATION (5min): Nervni sistem na maksimum
3. GLAVNI DEO (35min): 4-6 vežbi
4. FINISHER (8min): Conditioning
5. ZAVRŠNI DEO (10min): Hlađenje + disanje

`
      : `# AI Basketball Physical Training Expert

You are an expert in basketball physical preparation. You use Coach Goran methodology from the book.

## CORE PRINCIPLE
Test → Level → Diagnosis → Exercise (NOT Factor → Exercise!)

## MANDATORY TRAINING STRUCTURE
1. INTRO (15min): Proprioception + Activation
2. CNS ACTIVATION (5min): Prime nervous system
3. MAIN WORKOUT (35min): 4-6 exercises
4. FINISHER (8min): Conditioning
5. COOLDOWN (10min): Cool-down + breathing

`;

    // Add player data if available
    if (playerData?.position && positionStandards) {
      prompt += language === 'sr'
        ? `\n## PODACI O IGRAČU\n**Pozicija:** ${positionStandards.displayName.sr}\n\n`
        : `\n## PLAYER DATA\n**Position:** ${positionStandards.displayName.en}\n\n`;

      prompt += language === 'sr'
        ? `**Standardi za poziciju:**\n`
        : `**Position Standards:**\n`;
      
      prompt += `- CMJ: ${positionStandards.standards.cmj.min}-${positionStandards.standards.cmj.good}-${positionStandards.standards.cmj.elite} cm\n`;
      prompt += `- RFD: ${positionStandards.standards.rfd.min}-${positionStandards.standards.rfd.good}-${positionStandards.standards.rfd.elite} N/kg\n`;
      prompt += `- Reaction: ${positionStandards.standards.reactionTime.elite}-${positionStandards.standards.reactionTime.good}-${positionStandards.standards.reactionTime.weak}s\n\n`;

      prompt += language === 'sr'
        ? `**Prioriteti:**\n${positionStandards.priorities.map(p => `- ${p}`).join('\n')}\n\n`
        : `**Priorities:**\n${positionStandards.priorities.map(p => `- ${p}`).join('\n')}\n\n`;
    }

    // Add test results if available
    if (playerData?.tests && playerData.tests.length > 0) {
      prompt += language === 'sr'
        ? `\n## REZULTATI TESTOVA\n`
        : `\n## TEST RESULTS\n`;
      
      playerData.tests.forEach(test => {
        prompt += `- ${test.testName}: ${test.value}\n`;
      });
      prompt += '\n';
    }

    // Add RM Zones
    prompt += language === 'sr'
      ? `\n## RM ZONE PROGRESIJE\n`
      : `\n## RM ZONE PROGRESSION\n`;
    
    prompt += `- 12RM = 67% 1RM (beginner phase)\n`;
    prompt += `- 5RM = 87% 1RM (intermediate phase)\n`;
    prompt += `- 1-2RM = 95-100% 1RM (elite phase)\n\n`;

    // Add breathing rules
    prompt += language === 'sr'
      ? `\n## PRAVILA DISANJA (VALSALVA PREVENCIJA)\n`
      : `\n## BREATHING RULES (VALSALVA PREVENTION)\n`;
    
    breathingRules.forEach(rule => {
      prompt += `- ${rule}\n`;
    });
    prompt += '\n';

    // Add task
    prompt += language === 'sr'
      ? `\n## TVOJ ZADATAK\n${playerData?.position ? `Kreiraj 7-dnevni trening program za ${positionStandards?.displayName.sr || 'igrača'}` : 'Kreiraj trening program'}. Poštuj OBAVEZNU STRUKTURU i primeni Test→Level→Diagnosis→Exercise logiku.\n\n`
      : `\n## YOUR TASK\n${playerData?.position ? `Create a 7-day training program for ${positionStandards?.displayName.en || 'player'}` : 'Create a training program'}. Respect MANDATORY STRUCTURE and apply Test→Level→Diagnosis→Exercise logic.\n\n`;

    prompt += language === 'sr'
      ? `**VAŽNO:** Uvek edukuj igrača o disanju PRE vežbe!`
      : `**IMPORTANT:** Always educate player about breathing BEFORE exercise!`;

    return prompt;
  };

  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');

  const handleGenerate = () => {
    const prompt = generatePrompt();
    setGeneratedPrompt(prompt);
  };

  const handleCopy = async () => {
    if (generatedPrompt) {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenExternal = () => {
    const provider = providers.find(p => p.id === selectedProvider);
    if (provider) {
      window.open(provider.url, '_blank');
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-purple-400" />
          {t.title}
        </h2>
        <p className="text-slate-300">{t.subtitle}</p>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-yellow-400 font-bold mb-2">{t.disclaimer}</h3>
            <p className="text-slate-300 text-sm mb-3">{t.disclaimerText}</p>
            <p className="text-xs text-slate-400">{t.trademarksText}</p>
          </div>
        </div>
      </div>

      {/* Provider Selection */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">{t.selectProvider}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {providers.map((provider) => (
            <button
              key={provider.id}
              onClick={() => setSelectedProvider(provider.id)}
              className={`p-6 rounded-xl border-2 transition-all ${
                selectedProvider === provider.id
                  ? `bg-gradient-to-r ${provider.color} shadow-lg`
                  : 'bg-slate-900/50 border-slate-600 hover:border-slate-500'
              }`}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Bot className={`w-6 h-6 ${selectedProvider === provider.id ? 'text-white' : 'text-slate-400'}`} />
                <h4 className={`text-xl font-bold ${selectedProvider === provider.id ? 'text-white' : 'text-slate-300'}`}>
                  {provider.name}
                </h4>
              </div>
              <p className="text-xs text-slate-400">{provider.url}</p>
            </button>
          ))}
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          {t.generatePrompt}
        </button>
      </div>

      {/* Generated Prompt Display */}
      {generatedPrompt && (
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
          {/* Toolbar */}
          <div className="bg-slate-900 border-b border-slate-700 px-6 py-3 flex items-center justify-between">
            <h3 className="text-white font-semibold">{t.promptPreview}</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center gap-2 transition-all text-sm"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? t.promptCopied : t.copyPrompt}
              </button>
              <button
                onClick={handleOpenExternal}
                className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg flex items-center gap-2 transition-all text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                {t.openIn} {providers.find(p => p.id === selectedProvider)?.name}
              </button>
            </div>
          </div>

          {/* Prompt Content */}
          <div className="p-6 max-h-[600px] overflow-y-auto">
            <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
              {generatedPrompt}
            </pre>
          </div>
        </div>
      )}

      {/* Data Included Info */}
      {!generatedPrompt && (
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-blue-400 font-bold mb-3">{t.dataIncluded}</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              {t.methodologyStandards}
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              {t.rmZones}
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              {t.breathingRules}
            </li>
            {playerData?.position && (
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                {t.playerPosition}: {POSITION_STANDARDS.find(p => p.position === playerData.position)?.displayName[language]}
              </li>
            )}
            {playerData?.tests && playerData.tests.length > 0 && (
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                {t.testResults} ({playerData.tests.length})
              </li>
            )}
            {(!playerData?.position && (!playerData?.tests || playerData.tests.length === 0)) && (
              <li className="flex items-center gap-2 text-yellow-400">
                <AlertTriangle className="w-4 h-4" />
                {t.noPlayerData}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
