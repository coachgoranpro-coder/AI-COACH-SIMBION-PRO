// 👥 Team Roster Management Component with Player Limits

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, AlertCircle, Users, CheckCircle } from 'lucide-react';
import { 

} from '../services/activationService';

interface Player {
  id: string;
  name: string;
  position: string;
  age: number;
  addedDate: string;
}

interface TeamRosterProps {
  userId: string;
  language: 'sr' | 'en';
}

const translations = {
  sr: {
    title: 'Roster Tima',
    addPlayer: 'Dodaj Igrača',
    playerName: 'Ime i Prezime',
    position: 'Pozicija',
    age: 'Godina',
    actions: 'Akcije',
    delete: 'Obriši',
    noPlayers: 'Još nema igrača. Dodajte prvog igrača.',
    playerAdded: 'Igrač uspešno dodat!',
    playerDeleted: 'Igrač obrisan',
    limitReached: 'Dostigli ste limit!',
    limitWarning: 'Limit skoro dostignut',
    currentPlan: 'Trenutni Plan',
    playerCount: 'Broj Igrača',
    playerLimit: 'Limit',
    remainingSlots: 'Preostalo mesta',
    upgradeNeeded: 'Potrebno Nadograditi Plan',
    upgradeTip: 'Nadogradite pretplatu za više igrača',
    positions: {
      pg: 'Plejmejker',
      sg: 'Bek Šuter',
      sf: 'Krilo',
      pf: 'Krilni Centar',
      c: 'Centar'
    },
    placeholders: {
      name: 'Unesite ime igrača',
      position: 'Izaberite poziciju',
      age: 'Godine'
    }
  },
  en: {
    title: 'Team Roster',
    addPlayer: 'Add Player',
    playerName: 'Full Name',
    position: 'Position',
    age: 'Age',
    actions: 'Actions',
    delete: 'Delete',
    noPlayers: 'No players yet. Add your first player.',
    playerAdded: 'Player successfully added!',
    playerDeleted: 'Player deleted',
    limitReached: 'Limit Reached!',
    limitWarning: 'Limit Almost Reached',
    currentPlan: 'Current Plan',
    playerCount: 'Player Count',
    playerLimit: 'Limit',
    remainingSlots: 'Remaining Slots',
    upgradeNeeded: 'Upgrade Needed',
    upgradeTip: 'Upgrade subscription for more players',
    positions: {
      pg: 'Point Guard',
      sg: 'Shooting Guard',
      sf: 'Small Forward',
      pf: 'Power Forward',
      c: 'Center'
    },
    placeholders: {
      name: 'Enter player name',
      position: 'Select position',
      age: 'Age'
    }
  }
};

export const TeamRoster: React.FC<TeamRosterProps> = ({ userId, language }) => {
  const t = translations[language];
  const [players, setPlayers] = useState<Player[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPlayer, setNewPlayer] = useState({ name: '', position: '', age: '' });
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'warning'; text: string } | null>(null);
  
  const storageKey = `simbion_players_${userId}`;

  // Load players from localStorage
  useEffect(() => {
    try {
      const data = localStorage.getItem(storageKey);
      if (data) {
        setPlayers(JSON.parse(data));
      }
    } catch (error) {
      console.error('❌ Error loading players:', error);
    }
  }, [storageKey]);

  // Save players to localStorage
  const savePlayers = (updatedPlayers: Player[]) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(updatedPlayers));
      setPlayers(updatedPlayers);
      console.log('✅ Players saved:', updatedPlayers.length);
    } catch (error) {
      console.error('❌ Error saving players:', error);
    }
  };

  const handleAddPlayer = () => {
    // Validate input
    if (!newPlayer.name.trim() || !newPlayer.position || !newPlayer.age) {
      setMessage({ type: 'error', text: 'Popunite sva polja / Fill all fields' });
      return;
    }

    // Check player limit
    // const limitCheck = canAddPlayer(userId);
    // if (!limitCheck.allowed) {
    //   setMessage({ type: 'error', text: limitCheck.reason || t.limitReached });
    //   return;
    // }

    // Add player
    const player: Player = {
      id: `player_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: newPlayer.name.trim(),
      position: newPlayer.position,
      age: parseInt(newPlayer.age),
      addedDate: new Date().toISOString()
    };

    const updatedPlayers = [...players, player];
    savePlayers(updatedPlayers);

    // Reset form
    setNewPlayer({ name: '', position: '', age: '' });
    setShowAddForm(false);
    setMessage({ type: 'success', text: t.playerAdded });

    // Clear success message after 3 seconds
    setTimeout(() => setMessage(null), 3000);
  };

  const handleDeletePlayer = (playerId: string) => {
    const updatedPlayers = players.filter(p => p.id !== playerId);
    savePlayers(updatedPlayers);
    setMessage({ type: 'success', text: t.playerDeleted });
    setTimeout(() => setMessage(null), 2000);
  };

  // Get current stats
  const currentCount = players.length;
  const limit = 15;
  const remaining = limit - currentCount;
  const approaching = remaining <= 3;
  const atLimit = currentCount >= limit;
  // const plan = 'trial';
  const planInfo = { duration: 30, price: 0, players: 15, name: 'Trial (30 dana)', nameEn: 'Trial (30 days)' };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header with Stats */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Users className="w-7 h-7 text-orange-400" />
          {t.title}
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Current Plan */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <div className="text-xs text-gray-400 mb-1">{t.currentPlan}</div>
            <div className="text-lg font-bold text-white">
              {language === 'sr' ? planInfo.name : planInfo.nameEn}
            </div>
          </div>

          {/* Player Count */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <div className="text-xs text-gray-400 mb-1">{t.playerCount}</div>
            <div className="text-lg font-bold text-orange-400">{currentCount}</div>
          </div>

          {/* Limit */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <div className="text-xs text-gray-400 mb-1">{t.playerLimit}</div>
            <div className="text-lg font-bold text-white">{limit}</div>
          </div>

          {/* Remaining */}
          <div className={`bg-slate-800/50 border rounded-lg p-4 ${
            atLimit ? 'border-red-500/50' : approaching ? 'border-yellow-500/50' : 'border-green-500/50'
          }`}>
            <div className="text-xs text-gray-400 mb-1">{t.remainingSlots}</div>
            <div className={`text-lg font-bold ${
              atLimit ? 'text-red-400' : approaching ? 'text-yellow-400' : 'text-green-400'
            }`}>
              {remaining}
            </div>
          </div>
        </div>

        {/* Warning/Error Messages */}
        {atLimit && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-red-300 font-semibold">{t.limitReached}</div>
              <div className="text-red-200 text-sm mt-1">{t.upgradeTip}</div>
            </div>
          </div>
        )}

        {approaching && !atLimit && (
          <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4 mb-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-yellow-300 font-semibold">{t.limitWarning}</div>
              <div className="text-yellow-200 text-sm mt-1">
                {remaining} {language === 'sr' ? 'mesta preostalo' : 'slots remaining'}
              </div>
            </div>
          </div>
        )}

        {/* Success/Error Message */}
        {message && (
          <div className={`rounded-lg p-4 mb-4 flex items-center gap-2 ${
            message.type === 'success' ? 'bg-green-500/10 border border-green-500/50' :
            message.type === 'error' ? 'bg-red-500/10 border border-red-500/50' :
            'bg-yellow-500/10 border border-yellow-500/50'
          }`}>
            {message.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-400" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400" />
            )}
            <span className={
              message.type === 'success' ? 'text-green-300' :
              message.type === 'error' ? 'text-red-300' :
              'text-yellow-300'
            }>
              {message.text}
            </span>
          </div>
        )}
      </div>

      {/* Add Player Button */}
      {!showAddForm && (
        <button
          onClick={() => setShowAddForm(true)}
          disabled={atLimit}
          className={`mb-6 px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
            atLimit
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-orange-500 hover:bg-orange-600 text-white'
          }`}
        >
          <Plus className="w-5 h-5" />
          {t.addPlayer}
        </button>
      )}

      {/* Add Player Form */}
      {showAddForm && (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-white mb-4">{t.addPlayer}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">{t.playerName}</label>
              <input
                type="text"
                value={newPlayer.name}
                onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
                placeholder={t.placeholders.name}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
              />
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">{t.position}</label>
              <select
                value={newPlayer.position}
                onChange={(e) => setNewPlayer({ ...newPlayer, position: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
              >
                <option value="">{t.placeholders.position}</option>
                {Object.entries(t.positions).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">{t.age}</label>
              <input
                type="number"
                min="10"
                max="50"
                value={newPlayer.age}
                onChange={(e) => setNewPlayer({ ...newPlayer, age: e.target.value })}
                placeholder={t.placeholders.age}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleAddPlayer}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold"
            >
              {language === 'sr' ? 'Sačuvaj' : 'Save'}
            </button>
            <button
              onClick={() => {
                setShowAddForm(false);
                setNewPlayer({ name: '', position: '', age: '' });
              }}
              className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold"
            >
              {language === 'sr' ? 'Otkaži' : 'Cancel'}
            </button>
          </div>
        </div>
      )}

      {/* Players Table */}
      {players.length === 0 ? (
        <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-12 text-center">
          <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">{t.noPlayers}</p>
        </div>
      ) : (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase">#</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase">{t.playerName}</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase">{t.position}</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase">{t.age}</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase">{t.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {players.map((player, index) => (
                <tr key={player.id} className="hover:bg-slate-800/30">
                  <td className="px-6 py-4 text-sm text-gray-400">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-white font-medium">{player.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {t.positions[player.position as keyof typeof t.positions]}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">{player.age}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDeletePlayer(player.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                      title={t.delete}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TeamRoster;
