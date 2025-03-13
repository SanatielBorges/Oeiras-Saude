// Main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <App />
        <Toaster
          position="top-right" // Posição das notificações
          toastOptions={{
            style: {
              background: "#fff",
              color: "#333",
              border: "1px solid #ddd",
              borderRadius: "8px",
            },
          }}
        />
      </AuthProvider>
    </Router>
  </StrictMode>
);