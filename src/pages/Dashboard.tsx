
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Stethoscope, 
  Calendar, 
  FileText, 
  Video, 
  Bell, 
  User,
  LogOut 
} from 'lucide-react';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <Stethoscope className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Portal de Saúde</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Próximas Consultas */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Próximas Consultas</h3>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">Agendar Nova Consulta</Button>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Ver todas as consultas
                  </a>
                </div>
              </div>
            </div>

            {/* Prontuário Médico */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Prontuário Médico</h3>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">Ver Prontuário</Button>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Baixar prontuário
                  </a>
                </div>
              </div>
            </div>

            {/* Telemedicina */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <Video className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Telemedicina</h3>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">Iniciar Consulta Virtual</Button>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Ver médicos disponíveis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}