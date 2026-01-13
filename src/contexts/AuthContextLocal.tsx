import React, { createContext, useContext, useEffect, useState } from 'react';
import { startTrialAfterApproval } from '../services/licenseService';

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'user';
  subscription_status: 'pending' | 'active' | 'expired' | 'cancelled';
  payment_confirmed: boolean;
}

interface AuthContextType {
  user: { id: string; email: string } | null;
  profile: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Default admin user
const DEFAULT_USERS = [
  {
    id: 'admin-001',
    email: 'admin@simbion.com',
    password: 'admin123',
    full_name: 'Admin Goran',
    role: 'admin' as const,
    subscription_status: 'active' as const,
    payment_confirmed: true,
    created_at: new Date().toISOString(),
  },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize users in localStorage
  useEffect(() => {
    const storedUsers = localStorage.getItem('simbion_users');
    if (!storedUsers) {
      localStorage.setItem('simbion_users', JSON.stringify(DEFAULT_USERS));
    }

    // Check if user is logged in
    const currentUser = localStorage.getItem('simbion_current_user');
    if (currentUser) {
      const userData = JSON.parse(currentUser);
      setUser({ id: userData.id, email: userData.email });
      setProfile(userData);
      
      // Pokreni trial ako je korisnik odobren
      if (userData.subscription_status !== 'pending') {
        startTrialAfterApproval();
      }
    }
    setLoading(false);
  }, []);

  const refreshProfile = async () => {
    const currentUser = localStorage.getItem('simbion_current_user');
    if (currentUser) {
      const userData = JSON.parse(currentUser);
      setProfile(userData);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const usersData = localStorage.getItem('simbion_users');
      const users = usersData ? JSON.parse(usersData) : DEFAULT_USERS;
      
      const foundUser = users.find((u: any) => 
        u.email === email && u.password === password
      );

      if (!foundUser) {
        return { error: new Error('Pogrešan email ili lozinka') };
      }

      // Save current user
      const userProfile = {
        id: foundUser.id,
        email: foundUser.email,
        full_name: foundUser.full_name,
        role: foundUser.role,
        subscription_status: foundUser.subscription_status,
        payment_confirmed: foundUser.payment_confirmed,
      };

      localStorage.setItem('simbion_current_user', JSON.stringify(userProfile));
      setUser({ id: foundUser.id, email: foundUser.email });
      setProfile(userProfile);
      
      // Pokreni trial ako je korisnik odobren (subscription_status !== 'pending')
      if (foundUser.subscription_status !== 'pending') {
        startTrialAfterApproval();
      }

      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const usersData = localStorage.getItem('simbion_users');
      const users = usersData ? JSON.parse(usersData) : DEFAULT_USERS;

      // Check if user already exists
      const existingUser = users.find((u: any) => u.email === email);
      if (existingUser) {
        return { error: new Error('Korisnik sa ovim email-om već postoji') };
      }

      // Create new user
      const newUser = {
        id: `user-${Date.now()}`,
        email,
        password,
        full_name: fullName,
        role: 'user' as const,
        subscription_status: 'pending' as const,
        payment_confirmed: false,
        created_at: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem('simbion_users', JSON.stringify(users));

      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signOut = async () => {
    localStorage.removeItem('simbion_current_user');
    setUser(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signIn, signUp, signOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
