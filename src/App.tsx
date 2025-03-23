import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import { PrivateRoute } from './components/PrivateRoute';
import { Account } from './pages/UserDashboard/Account';
import { Appointments } from './pages/UserDashboard/Appointments'; 

function App() {
  return (
    <Routes>
      {/* Rotas Públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Rota para Minha Conta */}
      <Route path="/user-dashboard/account" element={<Account />} />

      {/* Rota para Agendamentos */}
      <Route
        path="/user-dashboard/appointments"
        element={
          <PrivateRoute>
            <Appointments />
          </PrivateRoute>
        }
      />

      {/* Rotas Protegidas (requerem autenticação) */}
      <Route
        path="/user-dashboard"
        element={
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;