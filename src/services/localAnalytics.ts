// 🖥️ LOCAL STORAGE ANALYTICS - Desktop Only (No Firebase)
export type ModuleType = 'aiChat' | 'diagnostics' | 'trainingGenerator' | 'correlationMatrix' | 'resources';
export type ResponseSource = 'agent' | 'database' | 'hybrid';

export interface SessionData {
  userId: string;
  email: string;
  sessionId: string;
  startTime: string;
  endTime?: string;
  duration?: number;
  modulesUsed: string[];
  activityCount: number;
}

export interface UserAnalytics {
  userId: string;
  email: string;
  totalSessions: number;
  totalTimeSpent: number;
  lastActive: Date;
  modulesUsage: Record<string, { count: number; lastUsed: Date }>;
  agentUsageTotal: number;
  databaseUsageTotal: number;
  preferredSource: ResponseSource;
}

const STORAGE_KEYS = {
  sessions: 'simbion_analytics_sessions',
  activities: 'simbion_analytics_activities',
  currentSession: 'simbion_current_session'
};

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Start session when user logs in
export async function startSession(userId: string, email: string): Promise<string> {
  try {
    const sessionId = generateSessionId();
    const sessions: SessionData[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.sessions) || '[]');
    
    const newSession: SessionData = {
      userId,
      email,
      sessionId,
      startTime: new Date().toISOString(),
      modulesUsed: [],
      activityCount: 0
    };
    
    sessions.push(newSession);
    localStorage.setItem(STORAGE_KEYS.sessions, JSON.stringify(sessions));
    localStorage.setItem(STORAGE_KEYS.currentSession, sessionId);
    
    console.log('📊 Desktop Session started:', sessionId);
    return sessionId;
  } catch (error) {
    console.error('Error starting session:', error);
    return '';
  }
}

// End session when user logs out
export async function endSession(sessionId?: string): Promise<void> {
  try {
    const currentSessionId = sessionId || localStorage.getItem(STORAGE_KEYS.currentSession);
    if (!currentSessionId) return;

    const sessions: SessionData[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.sessions) || '[]');
    const session = sessions.find(s => s.sessionId === currentSessionId);
    
    if (session) {
      const startTime = new Date(session.startTime);
      const endTime = new Date();
      const duration = Math.round((endTime.getTime() - startTime.getTime()) / 1000 / 60); // minutes
      
      session.endTime = endTime.toISOString();
      session.duration = duration;
      
      localStorage.setItem(STORAGE_KEYS.sessions, JSON.stringify(sessions));
      console.log('📊 Desktop Session ended:', currentSessionId, `(${duration} min)`);
    }
    
    localStorage.removeItem(STORAGE_KEYS.currentSession);
    localStorage.removeItem('currentSessionId');
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
    const sessionId = localStorage.getItem(STORAGE_KEYS.currentSession);
    
    // Save activity
    const activities: any[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.activities) || '[]');
    activities.push({
      userId,
      email,
      timestamp: new Date().toISOString(),
      module,
      action,
      responseSource,
      sessionId,
      metadata: metadata || {}
    });
    localStorage.setItem(STORAGE_KEYS.activities, JSON.stringify(activities));
    
    // Update session
    const sessions: SessionData[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.sessions) || '[]');
    const session = sessions.find(s => s.sessionId === sessionId);
    if (session) {
      if (!session.modulesUsed.includes(module)) {
        session.modulesUsed.push(module);
      }
      session.activityCount++;
      localStorage.setItem(STORAGE_KEYS.sessions, JSON.stringify(sessions));
    }
    
    console.log('📊 Desktop Activity logged:', module, action);
  } catch (error) {
    console.error('Error logging activity:', error);
  }
}

// Get all users analytics
export async function getAllUsersAnalytics(): Promise<UserAnalytics[]> {
  try {
    const sessions: SessionData[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.sessions) || '[]');
    const userMap = new Map<string, UserAnalytics>();
    
    sessions.forEach(session => {
      if (!userMap.has(session.userId)) {
        userMap.set(session.userId, {
          userId: session.userId,
          email: session.email,
          totalSessions: 0,
          totalTimeSpent: 0,
          lastActive: new Date(session.startTime),
          modulesUsage: {},
          agentUsageTotal: 0,
          databaseUsageTotal: 0,
          preferredSource: 'database'
        });
      }
      
      const user = userMap.get(session.userId)!;
      user.totalSessions++;
      user.totalTimeSpent += session.duration || 0;
      
      if (new Date(session.startTime) > user.lastActive) {
        user.lastActive = new Date(session.startTime);
      }
      
      session.modulesUsed.forEach(mod => {
        if (!user.modulesUsage[mod]) {
          user.modulesUsage[mod] = { count: 0, lastUsed: new Date() };
        }
        user.modulesUsage[mod].count++;
        user.modulesUsage[mod].lastUsed = new Date(session.startTime);
      });
    });
    
    return Array.from(userMap.values()).sort((a, b) => b.lastActive.getTime() - a.lastActive.getTime());
  } catch (error) {
    console.error('Error getting all analytics:', error);
    return [];
  }
}

// Get global analytics summary
export async function getGlobalAnalytics() {
  try {
    const sessions: SessionData[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.sessions) || '[]');
    const userIds = new Set(sessions.map(s => s.userId));
    
    const totalSessions = sessions.length;
    const totalTimeSpent = sessions.reduce((sum, s) => sum + (s.duration || 0), 0);
    
    const moduleStats: Record<ModuleType, number> = {
      aiChat: 0,
      diagnostics: 0,
      trainingGenerator: 0,
      correlationMatrix: 0,
      resources: 0,
    };
    
    sessions.forEach(session => {
      session.modulesUsed.forEach(mod => {
        if (moduleStats[mod as ModuleType] !== undefined) {
          moduleStats[mod as ModuleType]++;
        }
      });
    });
    
    return {
      totalUsers: userIds.size,
      totalAgentUsage: 0,
      totalDatabaseUsage: totalSessions,
      totalSessions,
      totalTimeSpent,
      averageSessionsPerUser: userIds.size > 0 ? (totalSessions / userIds.size).toFixed(1) : 0,
      averageTimePerUser: userIds.size > 0 ? Math.round(totalTimeSpent / userIds.size) : 0,
      moduleStats,
    };
  } catch (error) {
    console.error('Error getting global analytics:', error);
    return null;
  }
}
