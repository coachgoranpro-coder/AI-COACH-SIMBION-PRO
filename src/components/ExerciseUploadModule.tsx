import { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Loader, Download, Plus } from 'lucide-react';
import { callGeminiAPI } from '../services/geminiApi';
import { exercises as existingExercises, Exercise, ExerciseCategory } from '../data/exerciseCatalog';

type Language = 'sr' | 'en';

interface ExerciseUploadModuleProps {
  language?: Language;
  onExercisesAdded?: (exercises: Exercise[]) => void;
}

const translations = {
  sr: {
    title: 'Upload Vežbi',
    subtitle: 'Automatsko parsiranje i kategorizacija vežbi',
    uploadButton: 'Upload PDF/TXT',
    dragDrop: 'Prevuci fajl ili klikni da izabereš',
    supportedFormats: 'Podržani formati: PDF, TXT, DOCX',
    processing: 'AI parsira vežbe...',
    analyzing: 'Analiziram sadržaj...',
    categorizing: 'Kategorizujem vežbe...',
    success: 'Uspešno učitano',
    error: 'Greška pri parsiranju',
    exercisesFound: 'Pronađeno vežbi',
    reviewExercises: 'Pregledaj vežbe pre dodavanja',
    addToDatabase: 'Dodaj u bazu',
    downloadJSON: 'Download JSON',
    cancel: 'Otkaži',
    category: 'Kategorija',
    level: 'Nivo',
    equipment: 'Oprema',
    description: 'Opis',
    noExercises: 'Nisu pronađene vežbe',
    uploadAnother: 'Upload još vežbi',
    beginner: 'Početnik',
    intermediate: 'Srednji',
    advanced: 'Napredni',
    elite: 'Elitni',
    basketballSpecific: 'Košarkaško-specifično',
    yes: 'Da',
    no: 'Ne',
  },
  en: {
    title: 'Exercise Upload',
    subtitle: 'Automatic parsing and categorization of exercises',
    uploadButton: 'Upload PDF/TXT',
    dragDrop: 'Drag & drop or click to select file',
    supportedFormats: 'Supported formats: PDF, TXT, DOCX',
    processing: 'AI is parsing exercises...',
    analyzing: 'Analyzing content...',
    categorizing: 'Categorizing exercises...',
    success: 'Successfully loaded',
    error: 'Parsing error',
    exercisesFound: 'Exercises found',
    reviewExercises: 'Review exercises before adding',
    addToDatabase: 'Add to Database',
    downloadJSON: 'Download JSON',
    cancel: 'Cancel',
    category: 'Category',
    level: 'Level',
    equipment: 'Equipment',
    description: 'Description',
    noExercises: 'No exercises found',
    uploadAnother: 'Upload more exercises',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    elite: 'Elite',
    basketballSpecific: 'Basketball Specific',
    yes: 'Yes',
    no: 'No',
  },
};

export default function ExerciseUploadModule({ 
  language = 'sr',
  onExercisesAdded 
}: ExerciseUploadModuleProps) {
  const t = translations[language];
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [parsedExercises, setParsedExercises] = useState<Exercise[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File) => {
    if (!file) return;

    setIsProcessing(true);
    setUploadStatus('processing');
    setStatusMessage(t.analyzing);

    try {
      const text = await file.text();
      
      setStatusMessage(t.categorizing);

      const prompt = `Ti si expert za fizičku pripremu u košarci. Analiziraj ovaj tekst i ekstraktuj SAMO VEŽBE (exercises/drills), ignoriši sve ostalo (uputstva, opise, naslove poglavlja, teoretski tekst).

PRAVILA ZA IDENTIFIKACIJU VEŽBI:
- Vežba mora imati jasno ime/naziv
- Mora opisivati fizičku aktivnost/pokret
- Mora biti nešto što sportista može da izvede
- IGNORIŠI: naslove, uputstva, teoretske opise, ciljeve, metodologiju, objašnjenja

VAŽNO: Tvoj odgovor mora biti ISKLJUČIVO čist JSON array format. Bez ikakvih poruka, emoji, ili dodatnog teksta.

Za SVAKU IDENTIFIKOVANU VEŽBU, kreiraj objekat:
- id: generiši jedinstveni ID (format: "uploaded_XXXX" gde je XXXX broj od 0001)
- name: {sr: "naziv na srpskom", en: "naziv na engleskom (prevedi)"}
- category: odaberi najprikladniju iz: speed_movement, speed_reaction, speed_start, speed_running, strength_speed, strength_explosive, strength_absolute, strength_endurance, strength_repetitive, strength_stamina, endurance_aerobic, endurance_anaerobic, endurance_muscular, coordination, flexibility, mobility, balance, proprioception, precision
- level: "beginner" ili "intermediate" ili "advanced" ili "elite" (proceni na osnovu kompleksnosti)
- basketballSpecific: true ili false (da li je direktno povezano sa košarkom)
- targetTests: [] (lista testova koji se poboljšavaju - npr. ["Sprint", "Vertical Jump"])
- positions: [] (prazno ako je za sve pozicije, ili ["PG","SG","SF","PF","C"] za specifične)
- sets: "3-4" ili broj serija ako je naveden u tekstu
- reps: "8-12" ili broj ponavljanja ako je naveden
- load: "bodyweight" ili "70-80% 1RM" ili opis opterećenja
- rest: "60-90s" (proceni odmor između serija)
- tempo: null ili "2-0-2-0" ako je relevantno
- equipment: [] (lista opreme - npr. ["šipka", "bench", "loptica"])
- progressions: {easier: "lakša varijanta ili null", harder: "teža varijanta ili null"}
- description: "Kratak, jasan opis izvođenja vežbe (2-3 rečenice)"
- coachingCues: ["ključni savet 1", "ključni savet 2", "ključni savet 3"]
- commonMistakes: ["česta greška 1", "česta greška 2"]

TEKST ZA ANALIZU:
${text.substring(0, 50000)}

ODGOVOR (samo JSON array vežbi, bez dodatnog teksta):`;



      const response = await callGeminiAPI(prompt, []);
      
      // Sačuvaj raw response za debug
      setDebugInfo(`RAW RESPONSE (prvih 500 karaktera):\n${response.substring(0, 500)}\n\n---\n\n`);
      
      // Agresivno čišćenje JSON odgovora
      let cleanedResponse = response
        // Ukloni markdown
        .replace(/```json/gi, '')
        .replace(/```/g, '')
        // Ukloni sve pre prvog [
        .replace(/^[^\[]*/, '')
        // Ukloni sve posle poslednjeg ]
        .replace(/\][^\]]*$/, ']')
        .trim();

      setDebugInfo(prev => prev + `CLEANED (prvih 500 karaktera):\n${cleanedResponse.substring(0, 500)}`);

      // Ako nema [ na početku, verovatno AI nije vratio JSON
      if (!cleanedResponse.startsWith('[')) {
        // Pokušaj da pronađeš JSON array bilo gde u tekstu
        const jsonArrayMatch = cleanedResponse.match(/\[[\s\S]*\]/);
        if (jsonArrayMatch) {
          cleanedResponse = jsonArrayMatch[0];
        } else {
          // Poslednji pokušaj - pronađi objekat i stavi ga u array
          const jsonObjectMatch = cleanedResponse.match(/\{[\s\S]*\}/);
          if (jsonObjectMatch) {
            cleanedResponse = `[${jsonObjectMatch[0]}]`;
          } else {
            throw new Error('AI nije vratio validnu JSON strukturu. Pokušaj sa kraćim tekstom ili drugačijim formatom.');
          }
        }
      }

      // Dodatno čišćenje - ukloni sve non-JSON karaktere
      cleanedResponse = cleanedResponse
        .replace(/[\u{1F300}-\u{1F9FF}]/gu, '') // Ukloni emoji
        .replace(/[^\x20-\x7E\n\r\t\u0080-\uFFFF]/g, ''); // Zadrži samo validne karaktere

      let parsed;
      try {
        parsed = JSON.parse(cleanedResponse);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        console.error('Failed to parse:', cleanedResponse.substring(0, 500));
        throw new Error(`Ne mogu da parsiram JSON. AI je možda vratio tekst umesto JSON strukture. Pokušaj sa drugim fajlom ili proverite format.`);
      }

      const exerciseArray = Array.isArray(parsed) ? parsed : [parsed];

      // Dodaj default vrednosti ako nedostaju
      const processedExercises = exerciseArray.map((ex, idx) => ({
        id: ex.id || `uploaded_${String(existingExercises.length + idx + 1).padStart(4, '0')}`,
        name: ex.name || { sr: `Vežba ${idx + 1}`, en: `Exercise ${idx + 1}` },
        category: ex.category || 'coordination',
        level: ex.level || 'intermediate',
        basketballSpecific: ex.basketballSpecific ?? true,
        targetTests: ex.targetTests || [],
        positions: ex.positions || [],
        sets: ex.sets || '3-4',
        reps: ex.reps || '8-12',
        load: ex.load || 'bodyweight',
        rest: ex.rest || '60-90s',
        tempo: ex.tempo || null,
        equipment: ex.equipment || [],
        progressions: ex.progressions || { easier: null, harder: null },
        description: ex.description || '',
        coachingCues: ex.coachingCues || [],
        commonMistakes: ex.commonMistakes || [],
      }));

      setParsedExercises(processedExercises as Exercise[]);
      setUploadStatus('success');
      setStatusMessage(`${t.success}: ${processedExercises.length} ${t.exercisesFound.toLowerCase()}`);
    } catch (error) {
      console.error('Exercise parsing error:', error);
      setUploadStatus('error');
      setStatusMessage(t.error + ': ' + (error as Error).message);
      
      // Ne postavljamo parsedExercises - ostaje prazan array
      setParsedExercises([]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleAddToDatabase = () => {
    if (onExercisesAdded) {
      onExercisesAdded(parsedExercises);
    }
    
    // Download kao TypeScript fajl
    const tsContent = `// Auto-generated exercises from upload
// Generated: ${new Date().toISOString()}

import { Exercise } from './exerciseCatalog';

export const uploadedExercises: Exercise[] = ${JSON.stringify(parsedExercises, null, 2)};
`;
    
    const blob = new Blob([tsContent], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `exercises_upload_${Date.now()}.ts`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert(`✅ ${parsedExercises.length} vežbi je sačuvano!\n\nFajl je preuzet. Dodaj ga u src/data/exerciseCatalog.ts`);
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(parsedExercises, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `exercises_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setParsedExercises([]);
    setUploadStatus('idle');
    setStatusMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getCategoryLabel = (category: ExerciseCategory): string => {
    const labels: Record<ExerciseCategory, string> = {
      speed_movement: 'Brzina pokreta',
      speed_reaction: 'Brzina reakcije',
      speed_start: 'Startna brzina',
      speed_running: 'Brzina trčanja',
      strength_speed: 'Brzinska snaga',
      strength_explosive: 'Eksplozivna snaga',
      strength_absolute: 'Apsolutna snaga',
      strength_endurance: 'Snažna izdržljivost',
      strength_repetitive: 'Repetitivna snaga',
      strength_stamina: 'Snaga izdržljivosti',
      unilateral_strength: 'Unilateralna snaga',
      endurance_aerobic: 'Aerobna izdržljivost',
      endurance_anaerobic: 'Anaerobna izdržljivost',
      endurance_muscular: 'Mišićna izdržljivost',
      coordination: 'Koordinacija',
      flexibility: 'Fleksibilnost',
      mobility: 'Mobilnost',
      balance: 'Ravnoteža',
      proprioception: 'Propriocepcija',
      precision: 'Preciznost',
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-gray-400">{t.subtitle}</p>
        </div>

        {/* Upload Area */}
        {uploadStatus === 'idle' && (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${
              isDragging
                ? 'border-blue-400 bg-blue-900/20'
                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
            }`}
          >
            <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{t.dragDrop}</h3>
            <p className="text-gray-400 mb-6">{t.supportedFormats}</p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <FileText className="w-5 h-5 inline mr-2" />
              {t.uploadButton}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.txt,.docx"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        )}

        {/* Processing Status */}
        {isProcessing && (
          <div className="bg-gray-800/50 rounded-lg p-8 text-center">
            <Loader className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{t.processing}</h3>
            <p className="text-gray-400">{statusMessage}</p>
          </div>
        )}

        {/* Success - Show Parsed Exercises */}
        {uploadStatus === 'success' && parsedExercises.length > 0 && (
          <div className="space-y-6">
            {/* Status Bar */}
            <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div>
                  <p className="text-white font-semibold">{statusMessage}</p>
                  <p className="text-gray-400 text-sm">{t.reviewExercises}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleDownloadJSON}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  {t.downloadJSON}
                </button>
                <button
                  onClick={handleAddToDatabase}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  {t.addToDatabase}
                </button>
              </div>
            </div>

            {/* Exercise List */}
            <div className="grid gap-4">
              {parsedExercises.map((exercise, idx) => (
                <div key={exercise.id} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {idx + 1}. {exercise.name.sr}
                      </h3>
                      <p className="text-gray-400 text-sm">{exercise.name.en}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {getCategoryLabel(exercise.category)}
                      </span>
                      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {t[exercise.level as keyof typeof t] || exercise.level}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exercise.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">{t.category}:</span>
                      <span className="text-white ml-2">{exercise.sets || 'N/A'} x {exercise.reps || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">{t.equipment}:</span>
                      <span className="text-white ml-2">
                        {exercise.equipment.length > 0 ? exercise.equipment.join(', ') : 'Body weight'}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">{t.basketballSpecific}:</span>
                      <span className="text-white ml-2">{exercise.basketballSpecific ? t.yes : t.no}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Positions:</span>
                      <span className="text-white ml-2">
                        {exercise.positions.length > 0 ? exercise.positions.join(', ') : 'All'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reset Button */}
            <div className="text-center pt-4">
              <button
                onClick={handleReset}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
              >
                {t.uploadAnother}
              </button>
            </div>
          </div>
        )}

        {/* Error State */}
        {uploadStatus === 'error' && (
          <div className="space-y-4">
            <div className="bg-red-900/30 border border-red-700 rounded-lg p-8 text-center">
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{t.error}</h3>
              <p className="text-gray-400 mb-6">{statusMessage}</p>
              <button
                onClick={handleReset}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                {t.uploadAnother}
              </button>
            </div>
            
            {/* Debug info */}
            {debugInfo && (
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">🔍 Debug Info (šta je AI vratio):</h4>
                <pre className="text-xs text-gray-300 overflow-auto max-h-96 whitespace-pre-wrap">
                  {debugInfo}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
