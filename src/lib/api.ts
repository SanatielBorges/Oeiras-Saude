// src/lib/api.ts
export const loginAPI = async (email: string, password: string): Promise<{ user: { id: string; name: string }; token: string }> => {
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