// Modal for setting Email/Password credential to existing Google account
import React, { useState } from 'react';
import { EmailAuthProvider, linkWithCredential } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Eye, EyeOff, Lock } from 'lucide-react';

interface SetPasswordModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function SetPasswordModal({ onClose, onSuccess }: SetPasswordModalProps) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Lozinka mora imati najmanje 6 karaktera');
      return;
    }

    if (password !== confirmPassword) {
      setError('Lozinke se ne poklapaju');
      return;
    }

    setLoading(true);

    try {
      const user = auth.currentUser;
      if (!user || !user.email) {
        setError('Korisnik nije prijavljen');
        setLoading(false);
        return;
      }

      // Create email/password credential
      const credential = EmailAuthProvider.credential(user.email, password);
      
      // Link credential to existing Google account
      await linkWithCredential(user, credential);
      
      alert('✅ Lozinka uspešno postavljena! Sada možete koristiti email i lozinku za prijavu.');
      onSuccess();
    } catch (err: any) {
      console.error('Link credential error:', err);
      if (err.code === 'auth/provider-already-linked') {
        setError('Email/Password je već povezan sa nalogom');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('Email je već u upotrebi');
      } else {
        setError('Greška: ' + err.message);
      }
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-lg p-8 max-w-md w-full mx-4 border border-slate-700">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-orange-400" />
          <h2 className="text-2xl font-bold text-white">Postavite Lozinku</h2>
        </div>

        <p className="text-gray-400 mb-6">
          Dodajte lozinku svom nalogu da biste mogli da se prijavite i na desktop aplikaciji.
        </p>

        <form onSubmit={handleSetPassword} className="space-y-4">
          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nova Lozinka
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="Najmanje 6 karaktera"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Potvrdite Lozinku
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="Unesite ponovo"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              Otkaži
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? 'Postavlja se...' : 'Postavi Lozinku'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
