import { useEffect, useState } from "react";
import { api } from "../../services";
import { CustomProviderProps, LoginInput, User } from "../../types";
import { AuthContext } from "./AuthContext";
import { handleUploadImageToStorage, isTokenExpired } from "../../utils";


export const AuthProvider = ({ children }: CustomProviderProps) => {
  const [ accessToken, setAccessToken ] = useState<string | null>(
    () => localStorage.getItem("access_token")
  );
  const [ refreshToken, setRefreshToken ] = useState<string | null>(
    () => localStorage.getItem("refresh_token")
  );
  const [ user, setUser ] = useState<User | null>();
  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (accessToken && isTokenExpired(accessToken)) {
        await refreshAccessToken();
      }
      await getCurrentUser();
    };
  
    fetchUser();
  }, [accessToken]);

  async function login(loginInput: LoginInput) {
    const response = await api.post("/auth/token", loginInput);

    setAccessToken(response.data["access_token"]);
    setRefreshToken(response.data["refresh_token"]);

    localStorage.setItem("access_token", response.data["access_token"]);
    localStorage.setItem("refresh_token", response.data["refresh_token"]);
  }

  async function logout() {
    setAccessToken(null);
    setRefreshToken(null);

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  async function refreshAccessToken() {
    try {
      const response = await api.post(
        "/auth/refresh", 
        {
          "refresh_token": refreshToken
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      if (response.status !== 200) return logout();

      const data = response.data;

      setAccessToken(data["access_token"]);
      localStorage.setItem("access_token", data["access_token"]);
    } catch(error) {
      console.log(error);
      logout();
    }
  }

  async function getCurrentUser() {
    try {
      const response = await api.get(
        "/auth/user/me",
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
          }
        }
      );

      const data = response.data;

      const currentUser: User = {
        "id": data["id"],
        "firstName": data["first_name"],
        "lastName": data["last_name"],
        "email": data["email"],
        "phone": data["phone"],
        "photo": data["photo"],
        "type": data["type"],
        "googleSub": data["google_sub"]
      }

      setUser(currentUser);
    } catch(error: unknown) {
      console.error("Erro ao buscar usuário:", error);
    } finally {
      setLoading(false);
    }
  }

  async function createCustomer(userInput: User) {
    try {
      let profilePhotoUrl: string | null = null;
    
      if (userInput.photo) {
        try {
          profilePhotoUrl = await handleUploadImageToStorage(userInput.photo);
        } catch (uploadError) {
          console.error("Erro ao fazer upload da imagem:", uploadError);
          throw new Error("Erro ao enviar a foto de perfil. Tente novamente.");
        }
      }

      const customer = {
        "first_name": userInput.firstName,
        "last_name": userInput.lastName,
        "email": userInput.email,
        "phone": userInput.phone,
        "password": userInput.password,
        "photo": profilePhotoUrl
      }
      const response = await api.post("/auth/user/customer", customer);
        
      return response.data;
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, user, loading, refreshAccessToken, login, logout, createCustomer }}>
      { children }
    </AuthContext.Provider>
  )
}