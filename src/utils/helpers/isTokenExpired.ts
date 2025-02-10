import { jwtDecode } from "jwt-decode";

export function isTokenExpired(token: string | null): boolean {
  if (!token) return true;

  try {
    const decoded: { exp: number } = jwtDecode(token);
    return decoded.exp * 1000 < Date.now();
  } catch(error) {
    console.log(error);
    return true
  }
}