// src/components/ui/NotificationBell.tsx
import { useState, useEffect, useRef } from 'react';
import { Bell, Dot } from 'lucide-react';

export const NotificationBell = () => {
  // Estado inicial das notificações
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Consulta agendada', description: 'Sua consulta foi marcada para amanhã às 10h.', read: false },
    { id: 2, title: 'Resultado disponível', description: 'Seu exame de sangue está disponível para download.', read: true },
    { id: 3, title: 'Lembrete', description: 'Não se esqueça de tomar seus medicamentos hoje!', read: false },
  ]);

  // Estado para controlar a visibilidade do dropdown
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Referência para o dropdown

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Função para calcular o número de notificações não lidas
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Função para marcar uma notificação individual como lida
  const markAsRead = (id: number) => {
    const updatedNotifications = notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    );
    setNotifications(updatedNotifications);
  };

  // Função para marcar todas as notificações como lidas
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((n) => ({ ...n, read: true }));
    setNotifications(updatedNotifications);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Ícone do sino */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-gray-100"
      >
        <Bell className="h-6 w-6 text-gray-600" />
        {/* Indicador de notificações não lidas */}
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        )}
      </button>

      {/* Dropdown de notificações */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-10">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-sm font-semibold text-gray-900">Notificações</h3>
            <button
              onClick={markAllAsRead}
              className="text-xs font-medium text-blue-600 hover:underline"
            >
              Marcar todas como lidas
            </button>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((n) => (
                <div
                  key={n.id}
                  className={`flex items-start gap-3 p-4 cursor-pointer ${
                    !n.read ? 'bg-gray-50 font-bold' : 'bg-white font-normal'
                  }`}
                  onClick={() => markAsRead(n.id)} // Marca a notificação como lida ao clicar
                >
                  <Dot className={`h-2 w-2 mt-1 ${!n.read ? 'text-blue-600' : 'text-gray-400'}`} />
                  <div>
                    <p className="text-sm text-gray-900">{n.title}</p>
                    <p className="text-xs text-gray-600">{n.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-600">Nenhuma notificação.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};