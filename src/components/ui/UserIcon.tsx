// src/components/ui/UserIcon.tsx
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { User, LogOut, Settings, Key } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';
import { ChangePasswordModal } from './ChangePasswordModal';

export const UserIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useAuth(); // Importa a função logout do contexto

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout(); // Chama a função logout do contexto
    setIsOpen(false); // Fecha o dropdown após o logout
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Ícone de usuário */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full hover:bg-gray-100">
        <User className="h-6 w-6 text-gray-600" />
      </button>

      {/* Dropdown de perfil */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-10">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <User className="h-10 w-10 text-blue-600" />
              <div>
                <p className="text-sm font-semibold">{user?.name}</p>
                <p className="text-xs text-gray-600">{user?.email}</p>
              </div>
            </div>
          </div>
          <div className="p-2">
            {/* Opção "Editar Perfil" */}
            <Link
              to="/user-dashboard/account"
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <Settings className="h-4 w-4 text-gray-500" />
              Editar Perfil
            </Link>
            {/* Opção "Alterar Senha" */}
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <Key className="h-4 w-4 text-gray-500" />
              Alterar Senha
            </button>
            {/* Opção "Sair" */}
            <button
              onClick={handleLogout} // Usa a função handleLogout
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-md"
            >
              <LogOut className="h-4 w-4 text-red-600" />
              Sair
            </button>
          </div>
        </div>
      )}

      {/* Modal de alteração de senha */}
      {isModalOpen && <ChangePasswordModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};