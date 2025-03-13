import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { 
  Stethoscope, 
  Calendar, 
  Video, 
  FileText, 
  ArrowRight,
  ArrowLeftCircle,
  ArrowRightCircle,
  Phone,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

export function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: true,
    skipSnaps: true,
  });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const doctors = [
    {
      id: 1,
      name: 'Dra. Ana Silva',
      specialty: 'Clínica Geral',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 2,
      name: 'Dr. Carlos Santos',
      specialty: 'Cardiologia',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 3,
      name: 'Dra. Maria Oliveira',
      specialty: 'Pediatria',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 4,
      name: 'Dr. Ricardo Lima',
      specialty: 'Neurologia',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 5,
      name: 'Dra. Patricia Costa',
      specialty: 'Dermatologia',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 6,
      name: 'Dr. Fernando Alves',
      specialty: 'Ortopedia',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300'
    }
  ];

  const healthArticles = [
    {
      id: 1,
      title: 'A Importância da Atividade Física Regular',
      description: 'Descubra como 30 minutos de exercício diário podem melhorar sua saúde.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 2,
      title: 'Alimentação Saudável no Dia a Dia',
      description: 'Dicas práticas para uma dieta equilibrada e nutritiva.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 3,
      title: 'Saúde Mental: Cuidados Essenciais',
      description: 'Como manter o equilíbrio emocional na vida moderna.',
      image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 4,
      title: 'Prevenção de Doenças Cardiovasculares',
      description: 'Hábitos que ajudam a manter seu coração saudável.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Portal de Saúde</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link to="/register">
              <Button>Cadastrar</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Sua Saúde em Primeiro Lugar
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Acesse serviços de saúde de qualidade sem sair de casa. Agende consultas,
              gerencie seus exames e conecte-se com profissionais de saúde de forma simples e segura.
            </p>
            <div className="mt-10">
              <Link to="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Acesse Agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Doctors Carousel */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nossa Equipe Médica
          </h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-8">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]">
                    <div className="text-center">
                      <div className="relative mx-auto w-48 h-48 mb-4">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="rounded-full w-full h-full object-cover shadow-lg"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                      <p className="text-blue-600">{doctor.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeftCircle className="h-8 w-8 text-blue-600" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowRightCircle className="h-8 w-8 text-blue-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Health Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Artigos sobre Saúde
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600">{article.description}</p>
                  <Button variant="link" className="mt-4 p-0">
                    Ler mais
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
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

      {/* Health Tips */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Quem Somos</a></li>
                <li><a href="#" className="hover:text-blue-400">Nossa Equipe</a></li>
                <li><a href="#" className="hover:text-blue-400">Carreiras</a></li>
                <li><a href="#" className="hover:text-blue-400">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Consultas</a></li>
                <li><a href="#" className="hover:text-blue-400">Telemedicina</a></li>
                <li><a href="#" className="hover:text-blue-400">Exames</a></li>
                <li><a href="#" className="hover:text-blue-400">Prontuário Digital</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Privacidade</a></li>
                <li><a href="#" className="hover:text-blue-400">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-blue-400">LGPD</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-blue-400">
                    <Facebook className="h-5 w-5" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-blue-400">
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-blue-400">
                    <Twitter className="h-5 w-5" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-blue-400">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 Portal de Saúde. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}