export const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "panopticum2024",
}

export function checkAuth(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem("admin_authenticated") === "true"
}

export function setAuthenticated(value: boolean): void {
  if (typeof window === "undefined") return
  if (value) {
    localStorage.setItem("admin_authenticated", "true")
  } else {
    localStorage.removeItem("admin_authenticated")
  }
}
