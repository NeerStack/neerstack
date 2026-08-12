const TOKEN_KEY = "Token";
const USER_KEY = "User";
export const AUTH_CHANGE_EVENT = "neerstack:auth";

function notifyAuthChange() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(TOKEN_KEY);
}

export function getUser(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(USER_KEY);
}

export function setSession(token: string, user: unknown) {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  notifyAuthChange();
}

export function clearSession() {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_KEY);
  notifyAuthChange();
}

export function isAuthenticated(): boolean {
  return Boolean(getToken() && getUser());
}

export function subscribeAuth(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(AUTH_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(AUTH_CHANGE_EVENT, onStoreChange);
}

export function getUserLabel(): string {
  try {
    const raw = getUser();
    if (!raw) return "Admin";
    const user = JSON.parse(raw) as { email?: string; name?: string };
    return user.email || user.name || "Admin";
  } catch {
    return "Admin";
  }
}
