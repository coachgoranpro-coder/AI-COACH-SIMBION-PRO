import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Users, Shield, CheckCircle, XCircle } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface UserData {
  id: string;
  email: string;
  displayName: string;
  subscriptionType: 'trial' | 'mvp' | 'pro';
  createdAt: any;
  expiresAt: any;
  isActive: boolean;
  role?: string;
}

interface AdminDashboardProps {
  language: Language;
}

export default function AdminDashboard({ language }: AdminDashboardProps) {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'active' | 'expired' | 'pro'>('all');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const usersData = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as UserData[];
      
      setUsers(usersData.sort((a, b) => 
        b.createdAt?.toMillis() - a.createdAt?.toMillis()
      ));
    } catch (error) {
      console.error('Error loading users:', error);
    }
    setLoading(false);
  };

  const extendTrial = async (userId: string, days: number) => {
    try {
      const userRef = doc(db, 'users', userId);
      const newExpireDate = new Date();
      newExpireDate.setDate(newExpireDate.getDate() + days);
      
      await updateDoc(userRef, {
        expiresAt: Timestamp.fromDate(newExpireDate)
      });
      
      alert(`Trial produžen za ${days} dana!`);
      loadUsers();
    } catch (error) {
      console.error('Error extending trial:', error);
      alert('Greška pri produžavanju trial-a');
    }
  };

  const upgradeUser = async (userId: string, subscriptionType: 'mvp' | 'pro') => {
    try {
      const userRef = doc(db, 'users', userId);
      const newExpireDate = new Date();
      newExpireDate.setFullYear(newExpireDate.getFullYear() + 1); // 1 godina
      
      await updateDoc(userRef, {
        subscriptionType,
        expiresAt: Timestamp.fromDate(newExpireDate),
        isActive: true
      });
      
      alert(`Korisnik upgradovan na ${subscriptionType.toUpperCase()}!`);
      loadUsers();
    } catch (error) {
      console.error('Error upgrading user:', error);
      alert('Greška pri upgrade-u korisnika');
    }
  };

  const toggleActive = async (userId: string, currentStatus: boolean) => {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        isActive: !currentStatus
      });
      
      alert(`Korisnik ${!currentStatus ? 'aktiviran' : 'blokiran'}!`);
      loadUsers();
    } catch (error) {
      console.error('Error toggling user status:', error);
      alert('Greška pri promeni statusa');
    }
  };

  const getDaysRemaining = (expiresAt: any): number => {
    if (!expiresAt) return 0;
    const expireDate = expiresAt.toDate ? expiresAt.toDate() : new Date(expiresAt);
    const now = new Date();
    const diff = expireDate.getTime() - now.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const isExpired = (expiresAt: any): boolean => {
    return getDaysRemaining(expiresAt) <= 0;
  };

  const filteredUsers = users.filter(user => {
    if (filter === 'all') return true;
    if (filter === 'active') return !isExpired(user.expiresAt) && user.isActive;
    if (filter === 'expired') return isExpired(user.expiresAt);
    if (filter === 'pro') return user.subscriptionType === 'pro';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-blue-400" />
          <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
        </div>
        <p className="text-slate-400">
          {language === 'sr' ? 'Upravljanje korisnicima i pretplatama' : 'Manage users and subscriptions'}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Ukupno</p>
              <p className="text-2xl font-bold text-white">{users.length}</p>
            </div>
            <Users className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Aktivni</p>
              <p className="text-2xl font-bold text-green-400">
                {users.filter(u => !isExpired(u.expiresAt) && u.isActive).length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Istekli</p>
              <p className="text-2xl font-bold text-red-400">
                {users.filter(u => isExpired(u.expiresAt)).length}
              </p>
            </div>
            <XCircle className="w-8 h-8 text-red-400" />
          </div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">PRO</p>
              <p className="text-2xl font-bold text-yellow-400">
                {users.filter(u => u.subscriptionType === 'pro').length}
              </p>
            </div>
            <Shield className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {(['all', 'active', 'expired', 'pro'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === f ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {f === 'all' && 'Svi'}
            {f === 'active' && 'Aktivni'}
            {f === 'expired' && 'Istekli'}
            {f === 'pro' && 'PRO'}
          </button>
        ))}
      </div>

      {/* Users Table */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
        </div>
      ) : (
        <div className="bg-slate-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-900">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">KORISNIK</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">EMAIL</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">TIP</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">STATUS</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">DANA</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">AKCIJE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {filteredUsers.map(user => {
                const daysLeft = getDaysRemaining(user.expiresAt);
                const expired = isExpired(user.expiresAt);
                
                return (
                  <tr key={user.id}>
                    <td className="px-4 py-3 text-white">{user.displayName}</td>
                    <td className="px-4 py-3 text-slate-300">{user.email}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        user.subscriptionType === 'pro' ? 'bg-yellow-600/20 text-yellow-400' : 'bg-gray-600/20 text-gray-400'
                      }`}>
                        {user.subscriptionType.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        expired ? 'bg-red-600/20 text-red-400' : 'bg-green-600/20 text-green-400'
                      }`}>
                        {expired ? 'Istekao' : 'Aktivan'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white">{daysLeft}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => extendTrial(user.id, 30)}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded"
                        >
                          +30d
                        </button>
                        <button
                          onClick={() => upgradeUser(user.id, 'pro')}
                          className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white text-xs rounded"
                        >
                          PRO
                        </button>
                        <button
                          onClick={() => toggleActive(user.id, user.isActive)}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded"
                        >
                          {user.isActive ? 'Blokiraj' : 'Aktiviraj'}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
