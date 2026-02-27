import { useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Phone, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Medicine', path: '/medicine' },
  { label: 'Pathology', path: '/pathology' },
  { label: 'Ultrasound', path: '/ultrasound' },
  { label: 'Our Doctors', path: '/doctors' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [currentPath]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-orange-100'
          : 'bg-white/95 backdrop-blur-sm border-b border-orange-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
            >
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <div className="leading-tight">
              <div className="font-heading font-extrabold text-sm" style={{ color: '#B91C1C' }}>
                CITY PHARMA
              </div>
              <div className="text-xs text-gray-500 font-medium -mt-0.5">& Diagnostic Centre</div>
            </div>
          </Link>

          {/* Heartbeat SVG - desktop only */}
          <div className="hidden lg:flex items-center flex-1 mx-6 max-w-xs">
            <svg viewBox="0 0 200 40" className="w-full h-8" fill="none">
              <polyline
                points="0,20 30,20 45,5 55,35 65,10 75,30 85,20 200,20"
                stroke="#EA580C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="heartbeat-line"
              />
            </svg>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-white' : 'text-gray-700 hover:text-white'
                  }`}
                  style={isActive ? { background: 'linear-gradient(135deg, #EA580C, #B91C1C)' } : {}}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.background =
                        'linear-gradient(135deg, #EA580C, #B91C1C)';
                      (e.currentTarget as HTMLElement).style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.background = '';
                      (e.currentTarget as HTMLElement).style.color = '';
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:9931918438"
              className="ml-2 flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
            >
              <Phone className="w-3.5 h-3.5" />
              9931918438
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-orange-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 shadow-lg">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-white' : 'text-gray-700 hover:bg-orange-50'
                  }`}
                  style={isActive ? { background: 'linear-gradient(135deg, #EA580C, #B91C1C)' } : {}}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:9931918438"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
            >
              <Phone className="w-4 h-4" />
              Call: 9931918438
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
