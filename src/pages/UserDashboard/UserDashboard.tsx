// src/pages/UserDashboard/UserDashboard.tsx
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { UserIcon } from '@/components/ui/UserIcon';
import {
  Stethoscope,
  Calendar,
  FileText,
  Video,
  Bell,
  User,
  Phone,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { NotificationBell } from '@/components/ui/NotificationBell';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Portal de Saúde</span>
          </Link>
          <div className="flex items-center gap-4">
            <NotificationBell />
            <UserIcon />
          </div>
        </div>
      </nav>

      {/* Seção de Serviços */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título da Seção */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Serviços Disponíveis</h2>
            <p className="mt-2 text-lg text-gray-600">
              Acesse nossos serviços de saúde de forma rápida e prática.
            </p>
          </div>

          {/* Grid de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Agendamentos */}
            <Link
              to="/user-dashboard/appointments"
              className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-blue-200"
            >
              <Calendar className="h-12 w-12 text-blue-600 mb-4 group-hover:text-blue-700" />
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">
                Agendamentos
              </h3>
              <p className="text-gray-600">
                Gerencie suas consultas médicas.
              </p>
            </Link>

            {/* Resultados de Exames */}
            <Link
              to="/user-dashboard/exams"
              className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-blue-200"
            >
              <FileText className="h-12 w-12 text-blue-600 mb-4 group-hover:text-blue-700" />
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">
                Resultados de Exames
              </h3>
              <p className="text-gray-600">
                Acesse seus resultados laboratoriais.
              </p>
            </Link>

            {/* Telemedicina */}
            <Link
              to="/user-dashboard/telemedicine"
              className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-blue-200"
            >
              <Video className="h-12 w-12 text-blue-600 mb-4 group-hover:text-blue-700" />
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">
                Telemedicina
              </h3>
              <p className="text-gray-600">
                Consultas médicas online.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet /> {/* Renderiza rotas aninhadas (ex: agendamentos) */}

        {/* Seção de Artigos de Saúde */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Artigos sobre Saúde
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Exemplo de artigo */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://www.clinicaphysico.com.br/wp-content/uploads/2022/08/Quer-tornar-o-exercicio-fisico-prazeroso-Veja-4-dicas-do-que-nao-fazer-1024x682.webp"
                  alt="Artigo"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    A Importância da Atividade Física Regular
                  </h3>
                  <p className="text-gray-600">
                    Descubra como 30 minutos de exercício diário podem melhorar sua saúde.
                  </p>
                  <Button variant="link" className="mt-4 p-0">
                    Ler mais
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://altoastral.joaobidu.com.br/wp-content/uploads/2025/01/exercicios-ao-ar-livre.webp"
                  alt="Artigo"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    A Importância da Atividade Física Regular
                  </h3>
                  <p className="text-gray-600">
                    Descubra como 30 minutos de exercício diário podem melhorar sua saúde.
                  </p>
                  <Button variant="link" className="mt-4 p-0">
                    Ler mais
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://fornerialuce.com.br/media/magefan_blog/alimentacao-saudavel-5-dicas.jpg"
                  alt="Artigo"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    A Importância da Atividade Física Regular
                  </h3>
                  <p className="text-gray-600">
                    Descubra como 30 minutos de exercício diário podem melhorar sua saúde.
                  </p>
                  <Button variant="link" className="mt-4 p-0">
                    Ler mais
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://sinsjusto.org.br/media/sinsjusto/whatsapp_image_2024-01-16_at_13.13.12.jpeg"
                  alt="Artigo"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    A Importância da Atividade Física Regular
                  </h3>
                  <p className="text-gray-600">
                    Descubra como 30 minutos de exercício diário podem melhorar sua saúde.
                  </p>
                  <Button variant="link" className="mt-4 p-0">
                    Ler mais
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Contatos de Emergência */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Contatos de Emergência
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <a
                href="tel:192"
                className="flex items-center justify-center gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Phone className="h-8 w-8 text-red-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">SAMU</h3>
                  <p className="text-red-600 font-bold text-2xl">192</p>
                </div>
              </a>
              <a
                href="tel:193"
                className="flex items-center justify-center gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Phone className="h-8 w-8 text-red-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Bombeiros</h3>
                  <p className="text-red-600 font-bold text-2xl">193</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Seção de Dicas de Saúde */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Dicas de Saúde
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Heart className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mantenha-se Ativo
                </h3>
                <p className="text-gray-600">
                  Pratique pelo menos 30 minutos de atividade física moderada diariamente.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Heart className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Alimentação Balanceada
                </h3>
                <p className="text-gray-600">
                  Inclua frutas, verduras e legumes em todas as suas refeições.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Heart className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Hidratação
                </h3>
                <p className="text-gray-600">
                  Beba pelo menos 2 litros de água por dia para manter seu corpo hidratado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé Simplificado */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Portal de Saúde. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserDashboard;