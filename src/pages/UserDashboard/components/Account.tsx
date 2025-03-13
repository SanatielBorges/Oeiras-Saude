import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Account = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Minha Conta</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <User className="h-12 w-12 text-blue-600 mb-4" />
        <div className="space-y-2">
          <p className="text-gray-600">Nome: [Nome do Usuário]</p>
          <p className="text-gray-600">E-mail: [user@example.com]</p>
          <Button variant="secondary">Editar Perfil</Button>
        </div>
      </div>
    </div>
  );
};