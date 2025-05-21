import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../http/Api";

import http from "../http";
interface AuthContextType {
  logout: () => void;
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  user: User | null;
  setUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token") || null;
    }
    return null;
  });

  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    }
    return null;
  });

  useEffect(() => {
    if (accessToken) {
      http.setSecurityData({ bearerAuth: accessToken });
    } else {
      http.setSecurityData(null);
    }
  }, [accessToken]);

  const setAccessTokenWithStorage = (token: string) => {
    localStorage.setItem("token", token);
    setAccessToken(token);
  };

  const setUserWithStorage = (userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData || null);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAccessToken(null);

    window.location.href = "/auth/sign-in";
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        setAccessToken: setAccessTokenWithStorage,
        accessToken,
        user,
        setUser: setUserWithStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
