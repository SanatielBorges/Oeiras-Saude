// src/components/Footer.tsx
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Quem Somos</a></li>
              <li><a href="#" className="hover:text-blue-400">Nossa Equipe</a></li>
              <li><a href="#" className="hover:text-blue-400">Carreiras</a></li>
              <li><a href="#" className="hover:text-blue-400">Contato</a></li>
            </ul>
          </div>
          {/* Coluna 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Consultas</a></li>
              <li><a href="#" className="hover:text-blue-400">Telemedicina</a></li>
              <li><a href="#" className="hover:text-blue-400">Exames</a></li>
              <li><a href="#" className="hover:text-blue-400">Prontuário Digital</a></li>
            </ul>
          </div>
          {/* Coluna 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Privacidade</a></li>
              <li><a href="#" className="hover:text-blue-400">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-400">LGPD</a></li>
            </ul>
          </div>
          {/* Coluna 4 */}
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
  );
};