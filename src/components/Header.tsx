
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b9206f45-e2a0-405b-a879-1c879054f72b.png" 
              alt="Geisler Viana - Qi Gong" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="transition-colors duration-300 pb-1"
              style={{ color: '#174288' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a87a47'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#174288'}
            >
              Home
            </Link>
            <Link 
              to="/sobre-geisler-viana" 
              className="transition-colors duration-300 pb-1"
              style={{ color: '#174288' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a87a47'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#174288'}
            >
              Sobre
            </Link>
            <Link 
              to="/servicos-medicina-tradicional-chinesa" 
              className="transition-colors duration-300 pb-1"
              style={{ color: '#174288' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a87a47'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#174288'}
            >
              Projetos
            </Link>
            <Link 
              to="/blog-medicina-chinesa" 
              className="transition-colors duration-300 pb-1"
              style={{ color: '#174288' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a87a47'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#174288'}
            >
              Blog
            </Link>
            <Link 
              to="/contato-consulta-acupuntura" 
              className="transition-colors duration-300 pb-1"
              style={{ color: '#174288' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a87a47'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#174288'}
            >
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="transition-colors duration-300 py-2"
                style={{ color: '#174288' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a87a47'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#174288'}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/sobre-guy-vina-medicina-chinesa" 
                className="transition-colors duration-300 py-2"
                style={{ color: '#174288' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a87a47'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#174288'}
                onClick={toggleMenu}
              >
                Sobre
              </Link>
              <Link 
                to="/servicos-medicina-tradicional-chinesa" 
                className="transition-colors duration-300 py-2"
                style={{ color: '#174288' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a87a47'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#174288'}
                onClick={toggleMenu}
              >
                Projetos
              </Link>
              <Link 
                to="/blog-medicina-chinesa" 
                className="transition-colors duration-300 py-2"
                style={{ color: '#174288' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a87a47'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#174288'}
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link 
                to="/contato-consulta-acupuntura" 
                className="transition-colors duration-300 py-2"
                style={{ color: '#174288' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a87a47'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#174288'}
                onClick={toggleMenu}
              >
                Contato
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
