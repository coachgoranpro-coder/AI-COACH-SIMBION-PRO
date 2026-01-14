// Google Gemini API Service for AI Coach SIMBION Pro
// Using Gemini 1.5 Flash - FREE tier with 1500 requests/day

import { GoogleGenerativeAI } from "@google/generative-ai";
import { GOOGLE_API_KEY } from "../config/apiKeys";
import { generateLocalTrainingProgram, formatLocalTrainingProgram } from "./localTrainingGenerator";

interface GeminiMessage {
  role: 'user' | 'model';
  parts: string;
}

// Initialize Gemini with API key from config (bypass Vite env replacement)
let genAI: GoogleGenerativeAI | null = null;
try {
  if (GOOGLE_API_KEY && GOOGLE_API_KEY.length > 10) {
    genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
  }
} catch (error) {
  console.warn("Gemini initialization failed, will use local generator");
}

/**
 * Main function to call Gemini API with automatic retry on rate limit
 * @param prompt - User's message
 * @param conversationHistory - Previous messages
 * @param language - sr or en
 * @param retryCount - Number of retries attempted
 */
export async function callGeminiAPI(
  prompt: string,
  conversationHistory: GeminiMessage[] = [],
  language: 'sr' | 'en' = 'sr',
  retryCount: number = 0
): Promise<string> {
  // If Gemini is not available, fallback immediately
  if (!genAI) {
    console.log("🔄 Using LOCAL training generator (Gemini unavailable)");
    return getFallbackResponse(language);
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Build conversation context
    const chat = model.startChat({
      history: conversationHistory.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.parts }]
      })),
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    return response.text();

  } catch (error: any) {
    console.error("Gemini API Error:", error.message);
    
    // Check for rate limit error (429)
    if (error.message?.includes('429') && retryCount < 3) {
      // Extract retry delay from error message
      const retryMatch = error.message.match(/retry in ([\d.]+)s/i);
      const retryDelay = retryMatch ? Math.ceil(parseFloat(retryMatch[1])) : 20;
      
      console.log(`Rate limit hit. Retrying in ${retryDelay} seconds... (Attempt ${retryCount + 1}/3)`);
      
      // Wait and retry
      await new Promise(resolve => setTimeout(resolve, retryDelay * 1000));
      return callGeminiAPI(prompt, conversationHistory, language, retryCount + 1);
    }
    
    return getFallbackResponse(language);
  }
}

/**
 * Generate training program using Gemini AI or local fallback
 */
export async function generateTrainingProgram(
  diagnosticData: any,
  playerProfile: any,
  language: 'sr' | 'en' = 'sr'
): Promise<any> {
  
  // TRY GEMINI FIRST
  if (genAI) {
    try {
      const systemPrompt = language === 'sr' 
    ? `Ti si SIMBION - AI trener za fizičku pripremu košarkaša.

TVOJA ULOGA:
- Analiziraš dijagnostiku igrača (testove, slabosti, jake strane)
- Kreiraš personalizovani trening program (mikrociklusi, mezociklusi, makrociklusi)
- Vodiš računa o poziconiranju (PG, SG, SF, PF, C)
- Optimizuješ treninge prema specifičnostima košarke

METODOLOGIJA:
1. UVOD (15-20 min):
   - Temperatura tela (5-7 min cardio)
   - Mobilnost zglobova
   - Korektivne vežbe
   - Vežbe u pokretu
   - Brzina (akceleracija, reakcija)
   - Fleksibilnost

2. GLAVNI DEO (45-60 min):
   - SNAGA: brzinska → eksplozivna → apsolutna → izdržljivost
   - BRZINA: "uvek i pomalo" (pokreta, reakcije, startno ubrzanje)
   - IZDRŽLJIVOST: anaerobna fokus (30-400m sprintevi), aerobna minimalno
   - KOORDINACIJA i specifične vežbe

3. ZAVRŠETAK (5-10 min):
   - Hlađenje
   - Statičko istezanje
   - Recovery

PARAMETRI TRENINGA:
- Sets, Reps, Load, Rest, Tempo
- Progresija od lakšeg ka težem
- Basketball specific exercises
- Target tests (CMJ, Sprint, Squat, itd.)

Generiši detaljan program baziran na dijagnostici.`
    : `You are SIMBION - AI Basketball Physical Conditioning Coach.

YOUR ROLE:
- Analyze player diagnostics (tests, weaknesses, strengths)
- Create personalized training programs (micro, meso, macro cycles)
- Account for position specifics (PG, SG, SF, PF, C)
- Optimize training for basketball specificity

METHODOLOGY:
1. WARM-UP (15-20 min):
   - Body temperature (5-7 min cardio)
   - Joint mobility
   - Corrective exercises
   - Movement drills
   - Speed (acceleration, reaction)
   - Flexibility

2. MAIN PART (45-60 min):
   - STRENGTH: speed → explosive → absolute → endurance
   - SPEED: "always and a little" (movement, reaction, starting acceleration)
   - ENDURANCE: anaerobic focus (30-400m sprints), minimal aerobic
   - COORDINATION and specific exercises

3. COOL DOWN (5-10 min):
   - Cool down
   - Static stretching
   - Recovery

TRAINING PARAMETERS:
- Sets, Reps, Load, Rest, Tempo
- Progression from easier to harder
- Basketball specific exercises
- Target tests (CMJ, Sprint, Squat, etc.)

Generate detailed program based on diagnostics.`;

  const userPrompt = `
Dijagnostika igrača:
${JSON.stringify(diagnosticData, null, 2)}

Profil igrača:
${JSON.stringify(playerProfile, null, 2)}

Kreiraj personalizovani trening program sa:
1. Analiza dijagnostike
2. Prioriteti za razvoj
3. Nedeljni mikrociklus (4-6 treninga)
4. Konkretne vežbe sa parametrima
5. Progresija za naredne nedelje
`;

      const response = await callGeminiAPI(userPrompt, [
        { role: 'model', parts: systemPrompt }
      ], language);

      return {
        analysis: response,
        program: parseTrainingProgram(response),
        generator: 'gemini'
      };
    } catch (error) {
      console.warn("Gemini API failed, falling back to local generator:", error);
    }
  }

  // FALLBACK TO LOCAL GENERATOR
  console.log("🔄 Using LOCAL training generator (Gemini unavailable)");
  const localProgram = generateLocalTrainingProgram(diagnosticData, playerProfile, language);
  const formattedProgram = formatLocalTrainingProgram(localProgram, language);

  return {
    analysis: formattedProgram,
    program: {
      type: 'local_generated',
      content: formattedProgram,
      metadata: localProgram.metadata,
      timestamp: new Date().toISOString()
    },
    generator: 'local'
  };
}

/**
 * Parse training program from Gemini response
 */
function parseTrainingProgram(response: string): any {
  // Basic parsing - can be enhanced
  return {
    type: 'ai_generated',
    content: response,
    timestamp: new Date().toISOString()
  };
}

/**
 * Fallback response - simple help message
 */
function getFallbackResponse(language: 'sr' | 'en'): string {
  return language === 'sr'
    ? `Zdravo! Ja sam SIMBION - vaš AI trener za fizičku pripremu košarkaša.

Mogu da vam pomognem sa:

📊 **DIJAGNOSTIKA** - Analiza performansi i testova
💪 **TRENING PROGRAMI** - Personalizovani mikro i makro ciklusi  
📈 **CORRELATION MATRIX** - Povezanost faktora
📚 **METODOLOGIJA** - Principi treninga baziranog na nauci

Kako mogu da vam pomognem danas?`
    : `Hello! I'm SIMBION - your AI basketball physical conditioning coach.

I can help you with:

📊 **DIAGNOSTICS** - Performance analysis and testing
💪 **TRAINING PROGRAMS** - Personalized micro and macro cycles
📈 **CORRELATION MATRIX** - Factor connections
📚 **METHODOLOGY** - Science-based training principles

How can I help you today?`;
}

export default callGeminiAPI;
