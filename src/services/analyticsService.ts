// Analytics & Usage Tracking Service
import { doc, setDoc, updateDoc, getDoc, collection, getDocs, increment, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export type ModuleType = 'aiChat' | 'diagnostics' | 'trainingGenerator' | 'correlationMatrix' | 'resources';
export type ResponseSource = 'agent' | 'database' | 'hybrid';

export interface SessionData {
  userId: string;
  email: string;
  sessionId: string;
  startTime: Date;
  endTime?: Date;
  duration?: number;
  modulesUsed: ModuleType[];
  activityCount: number;
}

export interface ModuleUsage {
  moduleName: ModuleType;
  count: number;
  lastUsed: Date;
  agentUsage: number;  // Koliko puta koristio Gemini Agent
  databaseUsage: number; // Koliko puta koristio lokalnu bazu
}

export interface UserActivity {
  userId: string;
  email: string;
  timestamp: Date;
  module: ModuleType;
  action: string;
  responseSource: ResponseSource;
  duration?: number;
  metadata?: Record<string, any>;
}

export interface UserAnalytics {
  userId: string;
  email: string;
  totalSessions: number;
  totalTimeSpent: number; // u minutama
  lastActive: Date;
  modulesUsage: Record<ModuleType, ModuleUsage>;
  agentUsageTotal: number;
  databaseUsageTotal: number;
  preferredSource: ResponseSource;
}

// Generate unique session ID
function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

// Initialize session when user logs in
export async function startSession(userId: string, email: string): Promise<string> {
  try {
    const sessionId = generateSessionId();
    const sessionRef = doc(collection(db, 'sessions'), sessionId);

    await setDoc(sessionRef, {
      userId,
      email,
      sessionId,
      startTime: serverTimestamp(),
      modulesUsed: [],
      activityCount: 0,
    });

    // Store session ID in localStorage for current session
    localStorage.setItem('currentSessionId', sessionId);
    
    console.log('📊 Session started:', sessionId);
    return sessionId;
  } catch (error) {
    console.error('Error starting session:', error);
    return '';
  }
}

// End session when user logs out or closes app
export async function endSession(sessionId?: string): Promise<void> {
  try {
    const currentSessionId = sessionId || localStorage.getItem('currentSessionId');
    if (!currentSessionId) return;

    const sessionRef = doc(db, 'sessions', currentSessionId);
    const sessionDoc = await getDoc(sessionRef);

    if (sessionDoc.exists()) {
      const sessionData = sessionDoc.data();
      const startTime = sessionData.startTime?.toDate();
      const endTime = new Date();
      const duration = startTime ? Math.round((endTime.getTime() - startTime.getTime()) / 1000 / 60) : 0; // minutes

      await updateDoc(sessionRef, {
        endTime: Timestamp.fromDate(endTime),
        duration,
      });

      // Update user analytics with total time
      if (sessionData.userId && duration > 0) {
        await updateUserTotalTime(sessionData.userId, duration);
      }
    }

    localStorage.removeItem('currentSessionId');
    console.log('📊 Session ended:', currentSessionId);
  } catch (error) {
    console.error('Error ending session:', error);
  }
}

// Log user activity
export async function logActivity(
  userId: string,
  email: string,
  module: ModuleType,
  action: string,
  responseSource: ResponseSource = 'database',
  metadata?: Record<string, any>
): Promise<void> {
  try {
    const sessionId = localStorage.getItem('currentSessionId');
    
    // Log activity
    const activityRef = doc(collection(db, 'activities'));
    await setDoc(activityRef, {
      userId,
      email,
      timestamp: serverTimestamp(),
      module,
      action,
      responseSource,
      sessionId,
      metadata: metadata || {},
    });

    // Update session
    if (sessionId) {
      const sessionRef = doc(db, 'sessions', sessionId);
      const sessionDoc = await getDoc(sessionRef);
      
      if (sessionDoc.exists()) {
        const data = sessionDoc.data();
        const modulesUsed = data.modulesUsed || [];
        if (!modulesUsed.includes(module)) {
          modulesUsed.push(module);
        }

        await updateDoc(sessionRef, {
          modulesUsed,
          activityCount: increment(1),
        });
      }
    }

    // Update user analytics
    await updateUserAnalytics(userId, email, module, responseSource);

    console.log(`📊 Activity logged: ${module} - ${action} (${responseSource})`);
  } catch (error) {
    console.error('Error logging activity:', error);
  }
}

// Update user analytics
async function updateUserAnalytics(
  userId: string,
  email: string,
  module: ModuleType,
  responseSource: ResponseSource
): Promise<void> {
  try {
    const analyticsRef = doc(db, 'analytics', userId);
    const analyticsDoc = await getDoc(analyticsRef);

    if (!analyticsDoc.exists()) {
      // Create new analytics document
      await setDoc(analyticsRef, {
        userId,
        email,
        totalSessions: 1,
        totalTimeSpent: 0,
        lastActive: serverTimestamp(),
        agentUsageTotal: responseSource === 'agent' ? 1 : 0,
        databaseUsageTotal: responseSource === 'database' ? 1 : 0,
        modulesUsage: {
          [module]: {
            moduleName: module,
            count: 1,
            lastUsed: serverTimestamp(),
            agentUsage: responseSource === 'agent' ? 1 : 0,
            databaseUsage: responseSource === 'database' ? 1 : 0,
          }
        },
        preferredSource: responseSource,
      });
    } else {
      // Update existing analytics
      const data = analyticsDoc.data();
      const modulesUsage = data.modulesUsage || {};
      
      if (!modulesUsage[module]) {
        modulesUsage[module] = {
          moduleName: module,
          count: 0,
          lastUsed: new Date(),
          agentUsage: 0,
          databaseUsage: 0,
        };
      }

      modulesUsage[module].count += 1;
      modulesUsage[module].lastUsed = serverTimestamp();
      
      if (responseSource === 'agent') {
        modulesUsage[module].agentUsage = (modulesUsage[module].agentUsage || 0) + 1;
      } else if (responseSource === 'database') {
        modulesUsage[module].databaseUsage = (modulesUsage[module].databaseUsage || 0) + 1;
      }

      // Calculate preferred source based on usage
      const totalAgent = (data.agentUsageTotal || 0) + (responseSource === 'agent' ? 1 : 0);
      const totalDatabase = (data.databaseUsageTotal || 0) + (responseSource === 'database' ? 1 : 0);
      const preferredSource = totalAgent > totalDatabase ? 'agent' : 'database';

      await updateDoc(analyticsRef, {
        lastActive: serverTimestamp(),
        agentUsageTotal: increment(responseSource === 'agent' ? 1 : 0),
        databaseUsageTotal: increment(responseSource === 'database' ? 1 : 0),
        modulesUsage,
        preferredSource,
      });
    }
  } catch (error) {
    console.error('Error updating user analytics:', error);
  }
}

// Update user total time spent
async function updateUserTotalTime(userId: string, minutes: number): Promise<void> {
  try {
    const analyticsRef = doc(db, 'analytics', userId);
    await updateDoc(analyticsRef, {
      totalTimeSpent: increment(minutes),
      totalSessions: increment(1),
    });
  } catch (error) {
    console.error('Error updating total time:', error);
  }
}

// Get user analytics
export async function getUserAnalytics(userId: string): Promise<UserAnalytics | null> {
  try {
    const analyticsRef = doc(db, 'analytics', userId);
    const analyticsDoc = await getDoc(analyticsRef);

    if (!analyticsDoc.exists()) {
      return null;
    }

    const data = analyticsDoc.data();
    return {
      userId: data.userId,
      email: data.email,
      totalSessions: data.totalSessions || 0,
      totalTimeSpent: data.totalTimeSpent || 0,
      lastActive: data.lastActive?.toDate() || new Date(),
      modulesUsage: data.modulesUsage || {},
      agentUsageTotal: data.agentUsageTotal || 0,
      databaseUsageTotal: data.databaseUsageTotal || 0,
      preferredSource: data.preferredSource || 'database',
    };
  } catch (error) {
    console.error('Error getting user analytics:', error);
    return null;
  }
}

// Get all users analytics (for admin panel)
export async function getAllUsersAnalytics(): Promise<UserAnalytics[]> {
  try {
    const analyticsRef = collection(db, 'analytics');
    const querySnapshot = await getDocs(analyticsRef);

    const analytics: UserAnalytics[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      analytics.push({
        userId: data.userId,
        email: data.email,
        totalSessions: data.totalSessions || 0,
        totalTimeSpent: data.totalTimeSpent || 0,
        lastActive: data.lastActive?.toDate() || new Date(),
        modulesUsage: data.modulesUsage || {},
        agentUsageTotal: data.agentUsageTotal || 0,
        databaseUsageTotal: data.databaseUsageTotal || 0,
        preferredSource: data.preferredSource || 'database',
      });
    });

    return analytics.sort((a, b) => b.lastActive.getTime() - a.lastActive.getTime());
  } catch (error) {
    console.error('Error getting all analytics:', error);
    return [];
  }
}

// Get global analytics summary
export async function getGlobalAnalytics() {
  try {
    const analyticsSnapshot = await getDocs(collection(db, 'analytics'));
    
    let totalUsers = 0;
    let totalAgentUsage = 0;
    let totalDatabaseUsage = 0;
    let totalSessions = 0;
    let totalTimeSpent = 0;

    const moduleStats: Record<ModuleType, number> = {
      aiChat: 0,
      diagnostics: 0,
      trainingGenerator: 0,
      correlationMatrix: 0,
      resources: 0,
    };

    analyticsSnapshot.forEach((doc) => {
      const data = doc.data();
      totalUsers++;
      totalAgentUsage += data.agentUsageTotal || 0;
      totalDatabaseUsage += data.databaseUsageTotal || 0;
      totalSessions += data.totalSessions || 0;
      totalTimeSpent += data.totalTimeSpent || 0;

      // Count module usage
      const modulesUsage = data.modulesUsage || {};
      Object.keys(modulesUsage).forEach((module) => {
        if (moduleStats[module as ModuleType] !== undefined) {
          moduleStats[module as ModuleType] += modulesUsage[module].count || 0;
        }
      });
    });

    return {
      totalUsers,
      totalAgentUsage,
      totalDatabaseUsage,
      agentPercentage: totalAgentUsage + totalDatabaseUsage > 0 
        ? Math.round((totalAgentUsage / (totalAgentUsage + totalDatabaseUsage)) * 100)
        : 0,
      databasePercentage: totalAgentUsage + totalDatabaseUsage > 0
        ? Math.round((totalDatabaseUsage / (totalAgentUsage + totalDatabaseUsage)) * 100)
        : 0,
      totalSessions,
      averageSessionsPerUser: totalUsers > 0 ? Math.round(totalSessions / totalUsers) : 0,
      totalTimeSpent,
      averageTimePerUser: totalUsers > 0 ? Math.round(totalTimeSpent / totalUsers) : 0,
      moduleStats,
      mostUsedModule: Object.keys(moduleStats).reduce((a, b) => 
        moduleStats[a as ModuleType] > moduleStats[b as ModuleType] ? a : b
      ) as ModuleType,
    };
  } catch (error) {
    console.error('Error getting global analytics:', error);
    return null;
  }
}
