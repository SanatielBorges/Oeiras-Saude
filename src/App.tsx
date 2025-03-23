import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import { PrivateRoute } from './components/PrivateRoute';
import { Account } from './pages/UserDashboard/Account';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user-dashboard/account" element={<Account />} />
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