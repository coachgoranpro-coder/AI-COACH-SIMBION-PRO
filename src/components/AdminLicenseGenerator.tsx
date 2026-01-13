// 🔑 Admin License Code Generator Component

import React, { useState, useEffect } from 'react';
import { Key, Copy, CheckCircle, Download } from 'lucide-react';
import { 
  createLicenseCode,
  getAllLicenseCodes,
  SUBSCRIPTION_PLANS 
} from '../services/activationService';

interface AdminLicenseGeneratorProps {
  language: 'sr' | 'en';
}

const translations = {
  sr: {
    title: 'Generator Licencnih Kodova',
    subtitle: 'Kreirajte kodove za prodaju pretplata',
    selectPlan: 'Odaberi Plan',
    generate: 'Generiši Kod',
    generateMultiple: 'Generiši Više',
    count: 'Broj Kodova',
    generated: 'Generisano',
    code: 'Kod',
    plan: 'Plan',
    created: 'Kreirano',
    status: 'Status',
    unused: 'Nekorišćen',
    used: 'Korišćen',
    usedBy: 'Koristio',
    copyCode: 'Kopiraj Kod',
    copied: 'Kopirano!',
    exportAll: 'Izvezi Sve',
    allCodes: 'Svi Kodovi',
    recentCodes: 'Nedavno Generisani',
    stats: 'Statistika',
    totalGenerated: 'Ukupno Generisano',
    totalUsed: 'Ukupno Korišćeno',
    totalUnused: 'Nekorišćeno',
    revenue: 'Prihod'
  },
  en: {
    title: 'License Code Generator',
    subtitle: 'Create codes for subscription sales',
    selectPlan: 'Select Plan',
    generate: 'Generate Code',
    generateMultiple: 'Generate Multiple',
    count: 'Number of Codes',
    generated: 'Generated',
    code: 'Code',
    plan: 'Plan',
    created: 'Created',
    status: 'Status',
    unused: 'Unused',
    used: 'Used',
    usedBy: 'Used By',
    copyCode: 'Copy Code',
    copied: 'Copied!',
    exportAll: 'Export All',
    allCodes: 'All Codes',
    recentCodes: 'Recently Generated',
    stats: 'Statistics',
    totalGenerated: 'Total Generated',
    totalUsed: 'Total Used',
    totalUnused: 'Unused',
    revenue: 'Revenue'
  }
};

export const AdminLicenseGenerator: React.FC<AdminLicenseGeneratorProps> = ({ language }) => {
  const t = translations[language];
  const [selectedPlan, setSelectedPlan] = useState<'1M' | '3M' | '6M'>('1M');
  const [count, setCount] = useState(1);
  const [generatedCodes, setGeneratedCodes] = useState<string[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [allCodes, setAllCodes] = useState<any[]>([]);

  useEffect(() => {
    loadCodes();
  }, []);

  const loadCodes = async () => {
    const codes = await getAllLicenseCodes();
    setAllCodes(codes);
  };

  const handleGenerateSingle = async () => {
    const result = await createLicenseCode(selectedPlan);
    if (result.success && result.code) {
      setGeneratedCodes([result.code, ...generatedCodes]);
      await loadCodes();
    }
  };

  const handleGenerateMultiple = async () => {
    const newCodes: string[] = [];
    
    for (let i = 0; i < count; i++) {
      const result = await createLicenseCode(selectedPlan);
      if (result.success && result.code) {
        newCodes.push(result.code);
      }
    }
    
    setGeneratedCodes([...newCodes, ...generatedCodes]);
    await loadCodes();
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleExportAll = () => {
    const csvContent = [
      ['Code', 'Plan', 'Created', 'Status', 'Used By'].join(','),
      ...allCodes.map((c: any) => [
        c.code,
        c.type,
        new Date(c.createdAt).toLocaleDateString(),
        c.isUsed ? 'Used' : 'Unused',
        c.activatedBy || ''
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `license-codes-${Date.now()}.csv`;
    a.click();
  };

  // Calculate stats
  const stats = {
    total: allCodes.length,
    used: allCodes.filter((c: any) => c.isUsed).length,
    unused: allCodes.filter((c: any) => !c.isUsed).length,
    revenue: allCodes
      .filter((c: any) => c.isUsed)
      .reduce((sum: number, c: any) => sum + (SUBSCRIPTION_PLANS as any)[c.type].price, 0)
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Key className="w-7 h-7 text-orange-400" />
          {t.title}
        </h2>
        <p className="text-gray-400">{t.subtitle}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">{t.totalGenerated}</div>
          <div className="text-2xl font-bold text-white">{stats.total}</div>
        </div>
        <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">{t.totalUsed}</div>
          <div className="text-2xl font-bold text-green-400">{stats.used}</div>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">{t.totalUnused}</div>
          <div className="text-2xl font-bold text-blue-400">{stats.unused}</div>
        </div>
        <div className="bg-orange-500/10 border border-orange-500/50 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">{t.revenue}</div>
          <div className="text-2xl font-bold text-orange-400">{stats.revenue}€</div>
        </div>
      </div>

      {/* Generator Form */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Plan Selection */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">{t.selectPlan}</label>
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value as '1M' | '3M' | '6M')}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
            >
              <option value="1M">1M - 25€ (15 {language === 'sr' ? 'igrača' : 'players'})</option>
              <option value="3M">3M - 50€ (30 {language === 'sr' ? 'igrača' : 'players'})</option>
              <option value="6M">6M - 100€ (60 {language === 'sr' ? 'igrača' : 'players'})</option>
            </select>
          </div>

          {/* Count */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">{t.count}</label>
            <input
              type="number"
              min="1"
              max="100"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value) || 1)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-end gap-2">
            <button
              onClick={handleGenerateSingle}
              className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold"
            >
              {t.generate}
            </button>
            <button
              onClick={handleGenerateMultiple}
              className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
            >
              {t.generateMultiple}
            </button>
          </div>
        </div>
      </div>

      {/* Recently Generated Codes */}
      {generatedCodes.length > 0 && (
        <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            {t.recentCodes} ({generatedCodes.length})
          </h3>
          <div className="space-y-2">
            {generatedCodes.slice(0, 5).map((code) => (
              <div key={code} className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3">
                <span className="font-mono text-sm text-green-300">{code}</span>
                <button
                  onClick={() => handleCopyCode(code)}
                  className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm flex items-center gap-2"
                >
                  {copiedCode === code ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      {t.copied}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {t.copyCode}
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Codes Table */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-slate-700 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">{t.allCodes}</h3>
          <button
            onClick={handleExportAll}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            {t.exportAll}
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-900/50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase">#</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase">{t.code}</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase">{t.plan}</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase">{t.created}</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase">{t.status}</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase">{t.usedBy}</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {allCodes.map((code: any, index: number) => (
                <tr key={code.code} className="hover:bg-slate-800/30">
                  <td className="px-4 py-3 text-sm text-gray-400">{index + 1}</td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-sm text-white">{code.code}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">{code.type}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    {new Date(code.createdAt).toLocaleDateString(language === 'sr' ? 'sr-RS' : 'en-US')}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      code.isUsed 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {code.isUsed ? t.used : t.unused}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    {code.activatedBy || '-'}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleCopyCode(code.code)}
                      className="text-gray-400 hover:text-white"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminLicenseGenerator;
