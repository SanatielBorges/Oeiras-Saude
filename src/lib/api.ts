// src/lib/api.ts
import axios from "axios";

// Função de login simulada
export const loginAPI = async (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "123456") {
        resolve({
          user: { id: "1", name: "Usuário Teste" },
          token: "fake-jwt-token",
        });
      } else {
        reject("Credenciais inválidas");
      }
    }, 1000);
  });
};

// Simulação de uma instância de API
export const api = axios.create({
  baseURL: "https://api.exemplo.com", // Substitua pela URL da sua API futuramente
  headers: {
    "Content-Type": "application/json",
  },
});

// Métodos simulados para GET, POST, PUT, etc.
api.interceptors.request.use((config) => {
  console.log(`Request to ${config.url} with method ${config.method}`);
  return config;
});