
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Identidade */}
          <div>
            <h3 className="text-xl font-bold mb-4">Geisler Viana</h3>
            <p className="text-gray-200">
              Saúde integral através das Terapias Tradicionais Chinesas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-bronze transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre-guy-vina-medicina-chinesa" className="text-gray-200 hover:text-bronze transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos-medicina-tradicional-chinesa" 
                  className="text-gray-200 hover:text-bronze transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog-medicina-chinesa" 
                  className="text-gray-200 hover:text-bronze transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato-consulta-acupuntura" 
                  className="text-gray-200 hover:text-bronze transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatos</h4>
            <div className="space-y-2 text-gray-200">
              <p className="flex items-center">
                <Phone size={16} color="#ffffff" className="mr-2" />
                +55 11 99024-1982
              </p>
              <p>✉️ contato@geislerviana.com</p>
              <p>📍 Atendimento em São Paulo</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-200">
            © 2025 Geisler Viana. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
