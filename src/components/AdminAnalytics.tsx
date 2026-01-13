// Admin Analytics Component - Detailed usage statistics
import { useState, useEffect } from 'react';
import { Users, Activity, Database, Zap, Clock, BarChart3 } from 'lucide-react';
import { getAllUsersAnalytics, getGlobalAnalytics, UserAnalytics } from '../services/localAnalytics';

type Language = 'sr' | 'en';

interface AnalyticsProps {
  language?: Language;
}

const translations = {
  sr: {
    title: 'Analytics & Tracking',
    subtitle: 'Praćenje korišćenja aplikacije i korisničkih navika',
    globalStats: 'Globalna Statistika',
    totalUsers: 'Ukupno Korisnika',
    totalSessions: 'Ukupno Sesija',
    avgSessionsPerUser: 'Prosečno Sesija/Korisnik',
    totalTime: 'Ukupno Vreme',
    avgTimePerUser: 'Prosečno Vreme/Korisnik',
    agentUsage: 'Agent (Gemini API)',
    databaseUsage: 'Lokalna Baza',
    mostUsedModule: 'Najkorišćeniji Modul',
    moduleUsage: 'Korišćenje Modula',
    aiChat: 'AI Chat',
    diagnostics: 'Dijagnostika',
    trainingGenerator: 'Generator Treninga',
    correlationMatrix: 'Matrica Korelacije',
    resources: 'Resursi',
    userBreakdown: 'Detaljno po Korisnicima',
    email: 'Email',
    sessions: 'Sesije',
    timeSpent: 'Vreme',
    lastActive: 'Poslednja Aktivnost',
    preferredSource: 'Preferira',
    agent: 'Agent',
    database: 'Baza',
    minutes: 'min',
    loading: 'Učitavanje...',
  },
  en: {
    title: 'Analytics & Tracking',
    subtitle: 'Application usage tracking and user behavior',
    globalStats: 'Global Statistics',
    totalUsers: 'Total Users',
    totalSessions: 'Total Sessions',
    avgSessionsPerUser: 'Avg Sessions/User',
    totalTime: 'Total Time',
    avgTimePerUser: 'Avg Time/User',
    agentUsage: 'Agent (Gemini API)',
    databaseUsage: 'Local Database',
    mostUsedModule: 'Most Used Module',
    moduleUsage: 'Module Usage',
    aiChat: 'AI Chat',
    diagnostics: 'Diagnostics',
    trainingGenerator: 'Training Generator',
    correlationMatrix: 'Correlation Matrix',
    resources: 'Resources',
    userBreakdown: 'User Breakdown',
    email: 'Email',
    sessions: 'Sessions',
    timeSpent: 'Time',
    lastActive: 'Last Active',
    preferredSource: 'Prefers',
    agent: 'Agent',
    database: 'Database',
    minutes: 'min',
    loading: 'Loading...',
  }
};

export default function AdminAnalytics({ language = 'sr' }: AnalyticsProps) {
  const [loading, setLoading] = useState(true);
  const [globalStats, setGlobalStats] = useState<any>(null);
  const [usersAnalytics, setUsersAnalytics] = useState<UserAnalytics[]>([]);
  
  const t = translations[language];

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    setLoading(true);
    const [global, users] = await Promise.all([
      getGlobalAnalytics(),
      getAllUsersAnalytics()
    ]);
    setGlobalStats(global);
    setUsersAnalytics(users);
    setLoading(false);
  };

  const getModuleName = (module: string) => {
    const names: Record<string, string> = {
      aiChat: t.aiChat,
      diagnostics: t.diagnostics,
      trainingGenerator: t.trainingGenerator,
      correlationMatrix: t.correlationMatrix,
      resources: t.resources,
    };
    return names[module] || module;
  };

  if (loading) {
    return (
      <div className="text-center py-8 text-slate-400">{t.loading}</div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">{t.title}</h1>
        <p className="text-slate-400">{t.subtitle}</p>
      </div>

      {/* Global Stats Cards */}
      {globalStats && (
        <div>
          <h2 className="text-xl font-bold text-white mb-4">{t.globalStats}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-800 rounded-xl p-4 border border-blue-500/30">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-slate-400 text-sm">{t.totalUsers}</p>
                  <p className="text-2xl font-bold text-white">{globalStats.totalUsers}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-4 border border-green-500/30">
              <div className="flex items-center gap-3">
                <Activity className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-slate-400 text-sm">{t.totalSessions}</p>
                  <p className="text-2xl font-bold text-white">{globalStats.totalSessions}</p>
                  <p className="text-xs text-slate-500">{t.avgSessionsPerUser}: {globalStats.averageSessionsPerUser}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-4 border border-purple-500/30">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-purple-400" />
                <div>
                  <p className="text-slate-400 text-sm">{t.totalTime}</p>
                  <p className="text-2xl font-bold text-white">{globalStats.totalTimeSpent} {t.minutes}</p>
                  <p className="text-xs text-slate-500">{t.avgTimePerUser}: {globalStats.averageTimePerUser} {t.minutes}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-4 border border-amber-500/30">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-amber-400" />
                <div>
                  <p className="text-slate-400 text-sm">{t.mostUsedModule}</p>
                  <p className="text-xl font-bold text-white">{getModuleName(globalStats.mostUsedModule)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Agent vs Database Usage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  {t.agentUsage}
                </h3>
                <span className="text-2xl font-bold text-amber-400">{globalStats.agentPercentage}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div 
                  className="bg-amber-400 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${globalStats.agentPercentage}%` }}
                />
              </div>
              <p className="text-slate-400 text-sm mt-2">{globalStats.totalAgentUsage} korišćenja</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-400" />
                  {t.databaseUsage}
                </h3>
                <span className="text-2xl font-bold text-blue-400">{globalStats.databasePercentage}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div 
                  className="bg-blue-400 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${globalStats.databasePercentage}%` }}
                />
              </div>
              <p className="text-slate-400 text-sm mt-2">{globalStats.totalDatabaseUsage} korišćenja</p>
            </div>
          </div>

          {/* Module Usage Stats */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">{t.moduleUsage}</h3>
            <div className="space-y-3">
              {Object.keys(globalStats.moduleStats).map((module) => (
                <div key={module} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white text-sm">{getModuleName(module)}</span>
                      <span className="text-slate-400 text-sm">{globalStats.moduleStats[module]}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${(globalStats.moduleStats[module] / Math.max(...Object.values(globalStats.moduleStats) as number[])) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* User Breakdown Table */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-bold text-white mb-4">{t.userBreakdown}</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.email}</th>
                <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.sessions}</th>
                <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.timeSpent}</th>
                <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.preferredSource}</th>
                <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.lastActive}</th>
              </tr>
            </thead>
            <tbody>
              {usersAnalytics.map((user) => (
                <tr key={user.userId} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="py-3 px-4 text-white">{user.email}</td>
                  <td className="py-3 px-4 text-slate-400">{user.totalSessions}</td>
                  <td className="py-3 px-4 text-slate-400">{user.totalTimeSpent} {t.minutes}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      user.preferredSource === 'agent'
                        ? 'bg-amber-500/20 text-amber-300'
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {user.preferredSource === 'agent' ? t.agent : t.database}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-400 text-sm">
                    {user.lastActive.toLocaleDateString(language === 'sr' ? 'sr-RS' : 'en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
