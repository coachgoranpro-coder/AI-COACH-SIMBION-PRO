// Google Gemini API Service for AI Coach SIMBION Pro
// Using Gemini 2.5 Flash - FREE tier with 1500 requests/day

import { GoogleGenerativeAI } from "@google/generative-ai";

interface GeminiMessage {
  role: 'user' | 'model';
  parts: string;
}

// Initialize Gemini with API key
const GEMINI_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || "";
let genAI: GoogleGenerativeAI | null = null;

if (GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
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
  try {
    if (!genAI) {
      return getFallbackResponse(language);
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

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
 * Generate training program using Gemini
 */
export async function generateTrainingProgram(
  diagnosticData: any,
  playerProfile: any,
  language: 'sr' | 'en' = 'sr'
): Promise<any> {
  
  const systemPrompt = language === 'sr' 
    ? `Ti si SIMBION - AI trener za fizičku pripremu košarkaša, baziran na Coach Goran metodologiji.

TVOJA ULOGA:
- Analiziraš dijagnostiku igrača (testove, slabosti, jake strane)
- Kreiraš personalizovani trening program (mikrociklusi, mezociklusi, makrociklusi)
- Vodiš računa o poziconiranju (PG, SG, SF, PF, C)
- Optimizuješ treninge prema specifičnostima košarke

METODOLOGIJA (Coach Goran FPK):
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
    : `You are SIMBION - AI Basketball Physical Conditioning Coach, based on Coach Goran methodology.

YOUR ROLE:
- Analyze player diagnostics (tests, weaknesses, strengths)
- Create personalized training programs (micro, meso, macro cycles)
- Account for position specifics (PG, SG, SF, PF, C)
- Optimize training for basketball specificity

METHODOLOGY (Coach Goran FPK):
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
    program: parseTrainingProgram(response)
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
 * Fallback response when API is not available
 */
function getFallbackResponse(language: 'sr' | 'en'): string {
  return language === 'sr'
    ? `⚠️ Gemini API nije dostupan. Molimo postavite VITE_GOOGLE_API_KEY u .env fajlu.

Za besplatni API key: https://aistudio.google.com/app/apikey

Gemini 2.5 Flash je BESPLATNO sa 1500 requests/day!`
    : `⚠️ Gemini API is not available. Please set VITE_GOOGLE_API_KEY in .env file.

For free API key: https://aistudio.google.com/app/apikey

Gemini 2.5 Flash is FREE with 1500 requests/day!`;
}

export default callGeminiAPI;
