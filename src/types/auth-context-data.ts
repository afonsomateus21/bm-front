import { LoginInput } from "./login-input";
import { User } from "./user";

export interface AuthContextData {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null | undefined;
  loading: boolean;
  register: (registerInput: User) => Promise<User>;
  login: (loginInput: LoginInput) => Promise<void>;
  logout: () => void;
  refreshAccessToken: () => Promise<void>;
}