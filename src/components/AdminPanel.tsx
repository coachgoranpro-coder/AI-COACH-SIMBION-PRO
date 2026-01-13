import { useState, useEffect } from 'react';
import { Key, Copy, Check, Users, TrendingUp, Calendar, Award, Download, Search, Trash2, Upload } from 'lucide-react';
import { createLicenseCode, getAllLicenseCodes, LicenseCode, deleteLicenseCode } from '../services/activationService';
import { getAdminStats, AdminStats, getAllUsers, UserData } from '../services/adminService';
import AdminAnalytics from './AdminAnalytics';
import ExerciseUploadModule from './ExerciseUploadModule';

type Language = 'sr' | 'en';

interface AdminPanelProps {
  language?: Language;
}

const translations = {
  sr: {
    title: 'Admin Panel',
    subtitle: 'Upravljanje korisnicima i licencnim kodovima',
    totalUsers: 'Ukupno Korisnika',
    activeUsers: 'Aktivnih',
    trialUsers: 'Trial',
    paidUsers: 'Plaćeni',
    users: 'Korisnici',
    codes: 'Kodovi',
    analytics: 'Analytics',
    exercises: 'Vežbe Upload',
    userDirectory: 'Imenik Korisnika',
    exportUsers: 'Export Korisnici',
    searchEmail: 'Pretraži po email-u...',
    loading: 'Učitavanje...',
    noResults: 'Nema rezultata',
    noUsers: 'Nema registrovanih korisnika',
    email: 'Email',
    status: 'Status',
    registrationDate: 'Datum registracije',
    expires: 'Ističe',
    code: 'Kod',
    maxAthletes: 'Max sportista',
    trial: 'Trial',
    paid: 'Plaćeno',
    expired: 'Isteklo',
    generateCodes: 'Generisanje Kodova',
    generate1M: 'Generiši 1 Mesec',
    generate3M: 'Generiši 3 Meseca',
    generate6M: 'Generiši 6 Meseci',
    generating: 'Generisanje...',
    allCodes: 'Svi Kodovi',
    exportCSV: 'Export CSV',
    searchCode: 'Pretraži po kodu ili korisniku...',
    all: 'Svi',
    available: 'Dostupni',
    used: 'Iskorišćeni',
    noCodes: 'Nema generisanih kodova',
    type: 'Tip',
    activatedBy: 'Aktivirao',
    creationDate: 'Datum kreiranja',
    actions: 'Akcije',
    copyCode: 'Kopiraj kod',
    deleteCode: 'Obriši kod',
    confirmDelete: 'Da li ste sigurni da želite da obrišete kod',
    codeGenerated: 'Kod $CODE$ uspešno generisan!',
  },
  en: {
    title: 'Admin Panel',
    subtitle: 'User and license code management',
    totalUsers: 'Total Users',
    activeUsers: 'Active',
    trialUsers: 'Trial',
    paidUsers: 'Paid',
    users: 'Users',
    codes: 'Codes',
    analytics: 'Analytics',
    exercises: 'Exercise Upload',
    userDirectory: 'User Directory',
    exportUsers: 'Export Users',
    searchEmail: 'Search by email...',
    loading: 'Loading...',
    noResults: 'No results',
    noUsers: 'No registered users',
    email: 'Email',
    status: 'Status',
    registrationDate: 'Registration Date',
    expires: 'Expires',
    code: 'Code',
    maxAthletes: 'Max Athletes',
    trial: 'Trial',
    paid: 'Paid',
    expired: 'Expired',
    generateCodes: 'Generate Codes',
    generate1M: 'Generate 1 Month',
    generate3M: 'Generate 3 Months',
    generate6M: 'Generate 6 Months',
    generating: 'Generating...',
    allCodes: 'All Codes',
    exportCSV: 'Export CSV',
    searchCode: 'Search by code or user...',
    all: 'All',
    available: 'Available',
    used: 'Used',
    noCodes: 'No codes generated',
    type: 'Type',
    activatedBy: 'Activated By',
    creationDate: 'Creation Date',
    actions: 'Actions',
    copyCode: 'Copy code',
    deleteCode: 'Delete code',
    confirmDelete: 'Are you sure you want to delete code',
    codeGenerated: 'Code $CODE$ successfully generated!',
  }
};

export default function AdminPanel({ language = 'sr' }: AdminPanelProps) {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'users' | 'codes' | 'analytics' | 'exercises'>('users');
  const [licenses, setLicenses] = useState<LicenseCode[]>([]);
  const [filteredLicenses, setFilteredLicenses] = useState<LicenseCode[]>([]);
  const [users, setUsers] = useState<UserData[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [userSearchTerm, setUserSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'available' | 'used'>('all');
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    let filtered = licenses;

    if (searchTerm) {
      filtered = filtered.filter(license => 
        license.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        license.activatedBy?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter(license => 
        filterStatus === 'available' ? !license.isUsed : license.isUsed
      );
    }

    setFilteredLicenses(filtered);
  }, [licenses, searchTerm, filterStatus]);

  useEffect(() => {
    let filtered = users;

    if (userSearchTerm) {
      filtered = filtered.filter(user => 
        user.email.toLowerCase().includes(userSearchTerm.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  }, [users, userSearchTerm]);

  const loadData = async () => {
    setLoading(true);
    const [codes, statistics, allUsers] = await Promise.all([
      getAllLicenseCodes(),
      getAdminStats(),
      getAllUsers()
    ]);
    setLicenses(codes.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()));
    setStats(statistics);
    setUsers(allUsers);
    setLoading(false);
  };

  const handleGenerate = async (type: '1M' | '3M' | '6M') => {
    setGenerating(true);
    setMessage(null);

    const result = await createLicenseCode(type);

    if (result.success) {
      setMessage({ type: 'success', text: t.codeGenerated.replace('$CODE$', result.code || '') });
      await loadData();
    } else {
      setMessage({ type: 'error', text: result.message });
    }

    setGenerating(false);
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const exportToCSV = () => {
    const headers = [t.code, t.type, t.status, t.activatedBy, t.email, t.creationDate, language === 'sr' ? 'Datum Aktivacije' : 'Activation Date'];
    const rows = filteredLicenses.map(license => [
      license.code,
      license.type,
      license.isUsed ? t.used : t.available,
      license.activatedBy || '-',
      '',
      license.createdAt.toLocaleDateString('sr-RS'),
      license.activatedAt ? license.activatedAt.toLocaleDateString('sr-RS') : '-'
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `simbion-kodovi-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportUsersToCSV = () => {
    const headers = [t.email, t.status, t.registrationDate, t.expires, t.code, t.maxAthletes];
    const rows = filteredUsers.map(user => [
      user.email,
      user.subscriptionStatus === 'trial' ? t.trial : user.subscriptionStatus === 'active' ? t.paid : t.expired,
      user.createdAt.toLocaleDateString('sr-RS'),
      user.subscriptionStatus === 'trial' && user.trialExpiresAt
        ? user.trialExpiresAt.toLocaleDateString('sr-RS')
        : user.subscriptionStatus === 'active' && user.subscriptionExpiresAt
        ? user.subscriptionExpiresAt.toLocaleDateString('sr-RS')
        : '-',
      user.activationCode || '-',
      user.maxAthletes.toString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `simbion-korisnici-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async (code: string) => {
    if (!window.confirm(`${t.confirmDelete} ${code}?`)) {
      return;
    }
    
    const result = await deleteLicenseCode(code);
    
    if (result.success) {
      setMessage({ type: 'success', text: result.message });
      await loadData();
    } else {
      setMessage({ type: 'error', text: result.message });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-slate-400">{t.subtitle}</p>
        </div>

        {/* Statistics Cards */}
        {!loading && stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-800 rounded-xl p-4 border border-blue-500/30">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-slate-400 text-sm">{t.totalUsers}</p>
                  <p className="text-2xl font-bold text-white">{stats.totalUsers}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-4 border border-green-500/30">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-slate-400 text-sm">{t.activeUsers}</p>
                  <p className="text-2xl font-bold text-white">{stats.activeUsers}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-4 border border-yellow-500/30">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-yellow-400" />
                <div>
                  <p className="text-slate-400 text-sm">{t.trialUsers}</p>
                  <p className="text-2xl font-bold text-white">{stats.trialUsers}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-4 border border-purple-500/30">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-purple-400" />
                <div>
                  <p className="text-slate-400 text-sm">{t.paidUsers}</p>
                  <p className="text-2xl font-bold text-white">{stats.paidUsers}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'users'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Users className="w-5 h-5 inline-block mr-2" />
            {t.users}
          </button>
          <button
            onClick={() => setActiveTab('codes')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'codes'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Key className="w-5 h-5 inline-block mr-2" />
            {t.codes}
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'analytics'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <TrendingUp className="w-5 h-5 inline-block mr-2" />
            {t.analytics}
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'exercises'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Upload className="w-5 h-5 inline-block mr-2" />
            {t.exercises}
          </button>
        </div>

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Users className="w-6 h-6" />
                {t.userDirectory} ({filteredUsers.length})
              </h2>
              <button
                onClick={() => exportUsersToCSV()}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                {t.exportUsers}
              </button>
            </div>

            {/* User Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder={t.searchEmail}
                  value={userSearchTerm}
                  onChange={(e) => setUserSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Users Table */}
            {loading ? (
              <div className="text-center py-8 text-slate-400">{t.loading}</div>
            ) : filteredUsers.length === 0 ? (
              <div className="text-center py-8 text-slate-400">
                {userSearchTerm ? t.noResults : t.noUsers}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.email}</th>
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.status}</th>
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.registrationDate}</th>
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.expires}</th>
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.code}</th>
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.maxAthletes}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.uid} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                        <td className="py-3 px-4 text-white">{user.email}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            user.subscriptionStatus === 'trial' 
                              ? 'bg-yellow-500/20 text-yellow-300' 
                              : user.subscriptionStatus === 'active'
                              ? 'bg-green-500/20 text-green-300'
                              : 'bg-red-500/20 text-red-300'
                          }`}>
                            {user.subscriptionStatus === 'trial' ? t.trial : user.subscriptionStatus === 'active' ? t.paid : t.expired}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-400 text-sm">
                          {user.createdAt.toLocaleDateString('sr-RS', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric'
                          })}
                        </td>
                        <td className="py-3 px-4 text-slate-400 text-sm">
                          {user.subscriptionStatus === 'trial' && user.trialExpiresAt
                            ? user.trialExpiresAt.toLocaleDateString('sr-RS', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric'
                              })
                            : user.subscriptionStatus === 'active' && user.subscriptionExpiresAt
                            ? user.subscriptionExpiresAt.toLocaleDateString('sr-RS', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric'
                              })
                            : '-'
                          }
                        </td>
                        <td className="py-3 px-4 text-slate-400 text-sm font-mono">
                          {user.activationCode || '-'}
                        </td>
                        <td className="py-3 px-4 text-slate-400 text-sm">
                          {user.maxAthletes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Codes Tab */}
        {activeTab === 'codes' && (
          <div>
            {/* License Code Generation */}
            <div className="bg-slate-800 rounded-2xl p-6 mb-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <Key className="w-8 h-8 text-purple-400" />
                <h1 className="text-2xl font-bold text-white">{t.generateCodes}</h1>
              </div>

              {/* Generate Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => handleGenerate('1M')}
                  disabled={generating}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  {generating ? t.generating : t.generate1M}
                </button>
                <button
                  onClick={() => handleGenerate('3M')}
                  disabled={generating}
                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  {generating ? t.generating : t.generate3M}
                </button>
                <button
                  onClick={() => handleGenerate('6M')}
                  disabled={generating}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  {generating ? t.generating : t.generate6M}
                </button>
              </div>

              {/* Message */}
              {message && (
                <div className={`mt-4 p-3 rounded-lg ${
                  message.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                }`}>
                  {message.text}
                </div>
              )}
            </div>

            {/* License Codes List */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">{t.allCodes} ({filteredLicenses.length})</h2>
                <button
                  onClick={exportToCSV}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {t.exportCSV}
                </button>
              </div>

              {/* Search and Filter */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder={t.searchCode}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as 'all' | 'available' | 'used')}
                  className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">{t.all}</option>
                  <option value="available">{t.available}</option>
                  <option value="used">{t.used}</option>
                </select>
              </div>

              {/* Codes Table */}
              {loading ? (
                <div className="text-center py-8 text-slate-400">{t.loading}</div>
              ) : filteredLicenses.length === 0 ? (
                <div className="text-center py-8 text-slate-400">
                  {searchTerm || filterStatus !== 'all' ? t.noResults : t.noCodes}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.code}</th>
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.type}</th>
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.status}</th>
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.activatedBy}</th>
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.creationDate}</th>
                      <th className="text-left py-3 px-4 text-slate-300 font-semibold">{t.actions}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLicenses.map((license) => (
                        <tr key={license.code} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                          <td className="py-3 px-4 text-white font-mono text-sm">{license.code}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              license.type === '1M' ? 'bg-blue-500/20 text-blue-300' :
                              license.type === '3M' ? 'bg-green-500/20 text-green-300' :
                              'bg-purple-500/20 text-purple-300'
                            }`}>
                              {license.type}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              license.isUsed 
                                ? 'bg-red-500/20 text-red-300' 
                                : 'bg-green-500/20 text-green-300'
                            }`}>
                              {license.isUsed ? t.used : t.available}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-400 text-sm">
                            {license.activatedBy || '-'}
                          </td>
                          <td className="py-3 px-4 text-slate-400 text-sm">
                            {license.createdAt.toLocaleDateString('sr-RS', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => copyToClipboard(license.code)}
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                                title={t.copyCode}
                              >
                                {copiedCode === license.code ? (
                                  <Check className="w-4 h-4 text-green-400" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                              </button>
                              <button
                                onClick={() => handleDelete(license.code)}
                                className="text-red-400 hover:text-red-300 transition-colors"
                                title={t.deleteCode}
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="mt-6">
            <AdminAnalytics language={language} />
          </div>
        )}

        {/* Exercises Upload Tab */}
        {activeTab === 'exercises' && (
          <ExerciseUploadModule 
            language={language}
            onExercisesAdded={(exercises) => {
              console.log('Added exercises:', exercises);
              // Ovde možeš dodati logiku za čuvanje u bazu
            }}
          />
        )}
      </div>
    </div>
  );
}
