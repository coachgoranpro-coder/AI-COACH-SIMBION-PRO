import React, { useState } from 'react';
import { X, User, Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContextLocal';

interface LoginRegisterModalProps {
  onClose: () => void;
  language: 'sr' | 'en';
}

const translations = {
  sr: {
    login: 'Prijavite se',
    register: 'Registrujte se',
    email: 'Email',
    password: 'Lozinka',
    fullName: 'Puno ime',
    loginButton: 'Prijavi se',
    registerButton: 'Registruj se',
    switchToRegister: 'Nemate nalog? Registrujte se',
    switchToLogin: 'Već imate nalog? Prijavite se',
    loginSuccess: 'Uspešno ste se prijavili!',
    registerSuccess: 'Nalog kreiran! Čeka se odobrenje administratora.',
    errorGeneric: 'Došlo je do greške',
    errorFullName: 'Molimo unesite puno ime',
    adminApprovalNote: 'Napomena: Nova registracija zahteva odobrenje administratora.',
  },
  en: {
    login: 'Login',
    register: 'Register',
    email: 'Email',
    password: 'Password',
    fullName: 'Full Name',
    loginButton: 'Login',
    registerButton: 'Register',
    switchToRegister: "Don't have an account? Register",
    switchToLogin: 'Already have an account? Login',
    loginSuccess: 'Successfully logged in!',
    registerSuccess: 'Account created! Awaiting administrator approval.',
    errorGeneric: 'An error occurred',
    errorFullName: 'Please enter full name',
    adminApprovalNote: 'Note: New registration requires administrator approval.',
  },
};

export default function LoginRegisterModal({ onClose, language }: LoginRegisterModalProps) {
  const t = translations[language];
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (mode === 'login') {
        await signIn(email, password);
        setSuccess(t.loginSuccess);
        setTimeout(() => onClose(), 1500);
      } else {
        if (!fullName.trim()) {
          setError(t.errorFullName);
          setLoading(false);
          return;
        }
        await signUp(email, password, fullName);
        setSuccess(t.registerSuccess);
        setEmail('');
        setPassword('');
        setFullName('');
        setTimeout(() => {
          setMode('login');
          setSuccess('');
        }, 3000);
      }
    } catch (err: any) {
      setError(err.message || t.errorGeneric);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setFullName('');
    setError('');
    setSuccess('');
  };

  const switchMode = () => {
    resetForm();
    setMode(mode === 'login' ? 'register' : 'login');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-2xl max-w-md w-full border border-slate-700 shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 className="text-white text-2xl font-bold">
            {mode === 'login' ? t.login : t.register}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-900 border border-red-700 rounded-lg p-3 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-900 border border-green-700 rounded-lg p-3">
              <p className="text-green-200 text-sm">{success}</p>
            </div>
          )}

          {mode === 'register' && (
            <div>
              <label className="text-slate-300 text-sm font-medium mb-2 block">
                {t.fullName}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder={t.fullName}
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-slate-300 text-sm font-medium mb-2 block">
              {t.email}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="email@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-slate-300 text-sm font-medium mb-2 block">
              {t.password}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>
            {mode === 'register' && (
              <p className="text-slate-400 text-xs mt-1">Minimum 6 karaktera</p>
            )}
          </div>

          {mode === 'register' && (
            <div className="bg-blue-900 border border-blue-700 rounded-lg p-3">
              <p className="text-blue-200 text-xs">
                {t.adminApprovalNote}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors"
          >
            {loading
              ? (language === 'sr' ? 'Učitavanje...' : 'Loading...')
              : mode === 'login'
              ? t.loginButton
              : t.registerButton}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={switchMode}
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
            >
              {mode === 'login' ? t.switchToRegister : t.switchToLogin}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
