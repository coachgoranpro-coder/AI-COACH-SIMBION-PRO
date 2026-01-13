import { useState, useRef, useEffect } from 'react';
import { Upload, Save, Trash2, FileText } from 'lucide-react';

interface TrainingPlanModuleProps {
  language?: 'sr' | 'en';
}

const translations = {
  sr: {
    title: 'Plan treninga',
    addTraining: 'Dodaj trening',
    uploadFile: 'Učitaj sa kompjutera',
    placeholder: 'Unesi ili nalepi plan treninga ovde...\n\nPrimer:\nNedelja 1 - Snaga\nPonedeljak: Squat 4x5, Deadlift 3x5...',
    save: 'Sačuvaj plan',
    delete: 'Obriši sadržaj',
    saved: 'Plan sačuvan!',
    confirmDelete: 'Da li želite da sačuvate plan pre brisanja?',
    saveAndDelete: 'Sačuvaj i obriši',
    deleteOnly: 'Samo obriši',
    cancel: 'Otkaži',
    fileLoaded: 'Fajl učitan',
    noContent: 'Nema sadržaja'
  },
  en: {
    title: 'Training Plan',
    addTraining: 'Add Training',
    uploadFile: 'Upload from Computer',
    placeholder: 'Enter or paste training plan here...\n\nExample:\nWeek 1 - Strength\nMonday: Squat 4x5, Deadlift 3x5...',
    save: 'Save Plan',
    delete: 'Clear Content',
    saved: 'Plan saved!',
    confirmDelete: 'Do you want to save the plan before clearing?',
    saveAndDelete: 'Save and Clear',
    deleteOnly: 'Just Clear',
    cancel: 'Cancel',
    fileLoaded: 'File loaded',
    noContent: 'No content'
  }
};

export default function TrainingPlanModule({ language = 'sr' }: TrainingPlanModuleProps) {
  const t = translations[language];
  const [planContent, setPlanContent] = useState('');
  const [saved, setSaved] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load saved plan from localStorage
    const savedPlan = localStorage.getItem('simbion-pro-training-plan');
    if (savedPlan) {
      setPlanContent(savedPlan);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('simbion-pro-training-plan', planContent);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleDelete = (saveFirst: boolean) => {
    if (saveFirst) {
      handleSave();
    }
    setPlanContent('');
    localStorage.removeItem('simbion-pro-training-plan');
    setShowDeleteConfirm(false);
  };

  const handleDeleteClick = () => {
    if (planContent.trim()) {
      setShowDeleteConfirm(true);
    } else {
      setPlanContent('');
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setPlanContent(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{t.title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-600"
          >
            <Upload className="w-4 h-4" />
            {t.uploadFile}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".txt,.doc,.docx"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Text Area */}
      <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
        <textarea
          value={planContent}
          onChange={(e) => setPlanContent(e.target.value)}
          placeholder={t.placeholder}
          className="w-full h-[500px] bg-slate-900 border border-slate-600 text-white rounded-lg p-4 focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none font-mono text-sm"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleSave}
          disabled={!planContent.trim()}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
            saved
              ? 'bg-green-600 text-white'
              : 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed'
          }`}
        >
          <Save className="w-5 h-5" />
          {saved ? t.saved : t.save}
        </button>

        <button
          onClick={handleDeleteClick}
          disabled={!planContent.trim()}
          className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all"
        >
          <Trash2 className="w-5 h-5" />
          {t.delete}
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-orange-900/50 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{t.confirmDelete}</h3>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => handleDelete(true)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-lg font-medium transition-all"
              >
                {t.saveAndDelete}
              </button>
              <button
                onClick={() => handleDelete(false)}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all"
              >
                {t.deleteOnly}
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all"
              >
                {t.cancel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
