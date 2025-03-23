// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  id: string;
  name: string;
  email: string;
  token: string;
  birthDate?: string; // Data de Nascimento (opcional)
  gender?: string;    // Gênero (opcional)
  phone?: string;     // Telefone (opcional)
  cep?: string;       // CEP (opcional)
  address?: string;   // Endereço (opcional)
  number?: string;    // Número (opcional)
  neighborhood?: string; // Bairro (opcional)
  city?: string;      // Cidade (opcional)
  state?: string;     // Estado (opcional)
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (updatedUser: Partial<User>) => void; // Adicionado aqui
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
  updateUser: () => {}, // Adicionado aqui
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Simulação de API
      const fakeUser = {
        id: "1",
        name: "Usuário Teste",
        email: "user@example.com",
        token: "fake-jwt",
        birthDate: "01/01/1990", // Exemplo de data de nascimento
        gender: "Masculino",     // Exemplo de gênero
        phone: "(99) 99999-9999", // Exemplo de telefone
        cep: "12345-678",        // Exemplo de CEP
        address: "Rua Exemplo",  // Exemplo de endereço
        numero: '1234', // Exemplo de número
        neighborhood: "Bairro Exemplo", // Exemplo de bairro
        city: "Cidade Exemplo",  // Exemplo de cidade
        state: "Estado Exemplo", // Exemplo de estado
      };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
      navigate("/user-dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const updateUser = (updatedUser: Partial<User>) => {
    if (user) {
      const newUser = { ...user, ...updatedUser };
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};