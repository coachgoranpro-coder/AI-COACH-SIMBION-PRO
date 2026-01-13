import { useState, useEffect } from 'react';
import { Activity, Brain, LineChart, LogOut } from 'lucide-react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './lib/firebase';
import { translations, Language } from './i18n/translations';
import Logo from './components/Logo';
import LoginScreen from './components/LoginScreen';
import ActivationScreen from './components/ActivationScreen';
import AdminPanel from './components/AdminPanel';
import AISimbionChat from './components/AISimbionChat';
import DiagnosticsModule from './components/DiagnosticsModule';
import CorrelationMatrix from './components/CorrelationMatrix';
import SetPasswordModal from './components/SetPasswordModal';
import { initializeTrial, getUserSubscription, isTrialValid, getRemainingTrialDays } from './services/trialService';
import { startSession, endSession, logActivity } from './services/localAnalytics';

type View = 'aiChat' | 'diagnostics' | 'correlation' | 'admin';

function App() {
  const [currentView, setCurrentView] = useState<View>('aiChat');
  const [language, setLanguage] = useState<Language>('sr');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showSetPasswordModal, setShowSetPasswordModal] = useState(false);
  const [correlationContext, setCorrelationContext] = useState<{
    factor1: string;
    factor2: string;
    correlation: string;
    explanation: string;
    days?: number;
    row?: string;
    col?: string;
    basketball?: { trainings: number; games: number; gameDays: string[] };
  } | null>(null);

  const t = translations[language];

  // Add Trial/Subscription Check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        try {
          // Check if user has subscription data
          let userSub = await getUserSubscription(user.uid);
          
          // If no subscription data exists, initialize trial
          if (!userSub) {
            await initializeTrial(user.uid, user.email || '');
            userSub = await getUserSubscription(user.uid);
          }
          
          if (userSub) {
            const isValid = isTrialValid(userSub);
            const remainingDays = getRemainingTrialDays(userSub);
            
            setSubscription({
              status: userSub.subscriptionStatus,
              expiresAt: userSub.subscriptionStatus === 'active'
                ? userSub.subscriptionExpiresAt
                : userSub.trialExpiresAt,
              isValid,
              remainingDays,
              isTrial: userSub.subscriptionStatus === 'trial',
              admin: userSub.admin || false,
            });

            // Start analytics session
            await startSession(user.uid, user.email || '');

            // Check if user logged in with Google and doesn't have email/password
            const providers = user.providerData.map(p => p.providerId);
            const hasGoogle = providers.includes('google.com');
            const hasPassword = providers.includes('password');
            
            // Show password setup modal for Google-only users
            if (hasGoogle && !hasPassword) {
              setShowSetPasswordModal(true);
            }
          }
        } catch (error) {
          console.error('Error loading subscription:', error);
          setSubscription(null);
        }
      } else {
        setSubscription(null);
        // End session on logout
        await endSession();
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await endSession(); // End analytics session before logout
      await signOut(auth);
      setCurrentUser(null);
      setSubscription(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Logo size={80} showProBadge={true} />
          <p className="mt-4 text-blue-300">{language === 'sr' ? 'Učitavanje...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  const handleCorrelationClick = (
    factor1: string,
    factor2: string,
    correlation: string,
    explanation: string,
    days: number = 7,
    row: string = '',
    col: string = '',
    basketball?: { trainings: number; games: number; gameDays: string[] }
  ) => {
    setCorrelationContext({ factor1, factor2, correlation, explanation, days, row, col, basketball });
    setCurrentView('aiChat');
  };

  const handleViewChange = (view: View) => {
    setCurrentView(view);
    if (view !== 'aiChat') {
      setCorrelationContext(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Log module usage
    if (currentUser) {
      const moduleMap: Record<View, any> = {
        aiChat: 'aiChat',
        diagnostics: 'diagnostics',
        correlation: 'correlationMatrix',
        admin: 'admin',
      };
      logActivity(
        currentUser.uid,
        currentUser.email || '',
        moduleMap[view],
        `Opened ${view} module`,
        'database'
      );
    }
  };

  const navItems = [
    { id: 'aiChat' as View, icon: Brain, label: t.aiChat },
    { id: 'diagnostics' as View, icon: Activity, label: t.diagnostics },
    { id: 'correlation' as View, icon: LineChart, label: t.correlation },
  ];

  // Show loading screen
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Učitavanje...</div>
      </div>
    );
  }

  // Show login screen if not authenticated
  if (!currentUser) {
    return <LoginScreen onLoginSuccess={() => {}} />;
  }

  // Show activation screen if trial/subscription expired
  if (subscription && !subscription.isValid) {
    return (
      <ActivationScreen 
        userId={currentUser.uid}
        email={currentUser.email || ''}
        language={language}
        onActivationSuccess={() => {
          // Reload subscription data
          window.location.reload();
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <header className="bg-slate-800/90 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo size={36} showProBadge={false} />
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                {t.appName}
              </h1>
              <span className={`ml-3 px-2 py-1 text-xs rounded border ${
                subscription?.admin
                  ? 'bg-purple-600/20 text-purple-300 border-purple-500/30'
                  : subscription?.isTrial
                  ? 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30'
                  : 'bg-blue-600/20 text-blue-300 border-blue-500/30'
              }`}>
                {subscription?.admin
                  ? 'Admin'
                  : subscription?.isTrial
                  ? `Trial: ${subscription.remainingDays} ${language === 'sr' ? 'dana' : 'days'}`
                  : language === 'sr' ? 'Aktivno' : 'Active'
                }
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <button
                onClick={() => setLanguage('sr')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  language === 'sr'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                SR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                EN
              </button>
              
              {subscription?.admin && (
                <button
                  onClick={() => setCurrentView('admin')}
                  className={`ml-2 px-3 py-1 rounded text-xs font-medium transition-all ${
                    currentView === 'admin'
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-600/20 text-purple-300 hover:bg-purple-600/30'
                  }`}
                >
                  Admin Panel
                </button>
              )}
              
              <button
                onClick={handleLogout}
                className="ml-2 p-2 bg-red-600/20 text-red-400 rounded hover:bg-red-600/30 transition-all"
                title={language === 'sr' ? 'Odjavi se' : 'Logout'}
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>

          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleViewChange(item.id);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  currentView === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-700/70 text-slate-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {currentView === 'admin' ? (
          <AdminPanel language={language} />
        ) : (
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-2xl shadow-blue-500/10 border border-blue-500/20 p-8">
            {currentView === 'aiChat' && (
              <AISimbionChat
                key="aiChat"
                language={language}
                correlationContext={correlationContext}
                onBackToCorrelation={correlationContext ? () => setCurrentView('correlation') : undefined}
              />
            )}

            {currentView === 'diagnostics' && (
              <DiagnosticsModule key="diagnostics" language={language} />
            )}

            {currentView === 'correlation' && (
              <CorrelationMatrix
                key="correlation"
                currentLanguage={language}
                onCellClick={handleCorrelationClick}
                initialSelectedCell={correlationContext?.row && correlationContext?.col ? { row: correlationContext.row, col: correlationContext.col } : null}
              />
            )}
          </div>
        )}
      </main>

      {/* Set Password Modal */}
      {showSetPasswordModal && (
        <SetPasswordModal
          onClose={() => setShowSetPasswordModal(false)}
          onSuccess={() => setShowSetPasswordModal(false)}
        />
      )}
    </div>
  );
}

export default App;


