import React, { useState } from 'react';
import { X, User, Mail, Lock, LogIn, UserPlus } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: (email: string, password: string, name: string) => Promise<void>;
  onLogin: (email: string, password: string) => Promise<void>;
  language: 'sr' | 'en';
}

export default function AuthModal({ isOpen, onClose, onRegister, onLogin, language }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<'register' | 'login'>('register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const t = {
    register: language === 'sr' ? 'Registruj se' : 'Register',
    login: language === 'sr' ? 'Prijavi se' : 'Login',
    name: language === 'sr' ? 'Ime i prezime' : 'Full name',
    email: language === 'sr' ? 'Email adresa' : 'Email address',
    password: language === 'sr' ? 'Lozinka' : 'Password',
    registerButton: language === 'sr' ? 'Kreiraj nalog' : 'Create account',
    loginButton: language === 'sr' ? 'Prijavi se' : 'Sign in',
    registerInfo: language === 'sr' 
      ? 'Registracijom dobijate 30 dana besplatnog trial perioda.' 
      : 'Registration includes 30 days free trial.',
    loginInfo: language === 'sr'
      ? 'Prijavite se sa vašim nalogom.'
      : 'Sign in with your account.',
    minPassword: language === 'sr' ? 'Minimalno 6 karaktera' : 'Minimum 6 characters'
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (activeTab === 'register') {
        await onRegister(email, password, name);
      } else {
        await onLogin(email, password);
      }
      
      // Reset form
      setEmail('');
      setPassword('');
      setName('');
      onClose();
    } catch (error: any) {
      setMessage(error.message || 'Greška.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700 p-6 max-w-md w-full shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {activeTab === 'register' ? t.register : t.login}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Switch */}
        <div className="flex space-x-2 mb-6 bg-slate-800/50 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              activeTab === 'register'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserPlus className="w-4 h-4 inline mr-2" />
            {t.register}
          </button>
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              activeTab === 'login'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LogIn className="w-4 h-4 inline mr-2" />
            {t.login}
          </button>
        </div>

        {/* Info */}
        <div className="mb-6 p-3 bg-blue-600/10 border border-blue-500/20 rounded-lg">
          <p className="text-sm text-blue-300">
            {activeTab === 'register' ? t.registerInfo : t.loginInfo}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {activeTab === 'register' && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.name}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="Marko Marković"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t.email}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t.password}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                placeholder="••••••"
              />
            </div>
            {activeTab === 'register' && (
              <p className="mt-1 text-xs text-slate-400">{t.minPassword}</p>
            )}
          </div>

          {/* Error/Success Message */}
          {message && (
            <div className="p-3 bg-red-600/10 border border-red-500/20 rounded-lg">
              <p className="text-sm text-red-300">{message}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white font-medium rounded-lg transition-colors shadow-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {language === 'sr' ? 'Molimo sačekajte...' : 'Please wait...'}
              </span>
            ) : (
              activeTab === 'register' ? t.registerButton : t.loginButton
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
