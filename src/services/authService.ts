export interface AdminUser {
  username: string;
  role: 'super_admin' | 'editor';
  token: string;
  loginTime: string;
}

const AUTH_KEY = 'yugam_admin_auth_session';

export const authService = {
  // Default credentials: admin / yugam2026
  login: async (username: string, password: string): Promise<{ success: boolean; message?: string; user?: AdminUser }> => {
    // Simulate async auth verification
    await new Promise((r) => setTimeout(r, 400));

    const cleanUsername = username.trim().toLowerCase();
    const cleanPassword = password.trim();

    if ((cleanUsername === 'admin' && cleanPassword === 'yugam2026') || (cleanUsername === 'editor' && cleanPassword === 'astra2026')) {
      const user: AdminUser = {
        username: cleanUsername,
        role: cleanUsername === 'admin' ? 'super_admin' : 'editor',
        token: `yugam_auth_token_${Math.random().toString(36).substring(2)}_${Date.now()}`,
        loginTime: new Date().toISOString(),
      };
      try {
        sessionStorage.setItem(AUTH_KEY, JSON.stringify(user));
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      } catch (e) {
        console.error(e);
      }
      return { success: true, user };
    }

    return { success: false, message: 'Invalid administrative username or access password.' };
  },

  getCurrentUser: (): AdminUser | null => {
    if (typeof window === 'undefined') return null;
    try {
      const session = sessionStorage.getItem(AUTH_KEY) || localStorage.getItem(AUTH_KEY);
      if (session) {
        return JSON.parse(session);
      }
    } catch (e) {
      console.error(e);
    }
    return null;
  },

  isAuthenticated: (): boolean => {
    const user = authService.getCurrentUser();
    return !!(user && user.token);
  },

  logout: () => {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(AUTH_KEY);
  },
};
