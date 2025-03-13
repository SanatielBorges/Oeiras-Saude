import { Button } from '@/components/ui/button';
import { Calendar, FileText, Video, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-white shadow-md p-4">
      <nav className="space-y-2">
        <Button 
          variant="ghost" 
          className="w-full justify-start" 
          onClick={() => navigate('/user-dashboard')}
        >
          <Calendar className="mr-2 h-4 w-4" /> Agendamentos
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start" 
          onClick={() => navigate('/user-dashboard/exams')}
        >
          <FileText className="mr-2 h-4 w-4" /> Resultados de Exames
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start" 
          onClick={() => navigate('/user-dashboard/telemedicine')}
        >
          <Video className="mr-2 h-4 w-4" /> Telemedicina
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start" 
          onClick={() => navigate('/user-dashboard/account')}
        >
          <User className="mr-2 h-4 w-4" /> Minha Conta
        </Button>
      </nav>
    </div>
  );
};