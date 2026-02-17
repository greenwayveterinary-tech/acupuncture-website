import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '@/assets/b03470cfb0b27aeaddfbd274c77bc3123b3727da.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If not on homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Account for fixed nav height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Account for fixed nav height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home', type: 'route' },
    { to: '/acupuncture', label: 'Acupuncture', type: 'route' },
    { to: 'how-it-works', label: 'How it Works', type: 'scroll' },
    { to: 'pricing', label: 'Pricing', type: 'scroll' },
    { to: 'faqs', label: 'FAQs', type: 'scroll' },
    { to: '/for-vets', label: 'For Vets', type: 'route' },
    { to: '/contact', label: 'Contact', type: 'route' },
  ];

  return (
    <nav className="bg-white/10 backdrop-blur-md sticky top-0 z-50 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Greenway Veterinary Acupuncture" className="h-28 w-auto my-2" style={{ filter: 'grayscale(100%) brightness(3) contrast(0.9)' }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.type === 'scroll' ? (
                <button
                  key={link.to}
                  onClick={() => scrollToSection(link.to)}
                  className="text-primary-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-primary-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2.5 rounded-lg transition-colors"
            >
              Book / Enquire
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-white/20 bg-white/5 backdrop-blur-sm rounded-b-lg">
            {navLinks.map((link) => (
              link.type === 'scroll' ? (
                <button
                  key={link.to}
                  onClick={() => scrollToSection(link.to)}
                  className="block text-primary-foreground hover:text-accent transition-colors py-2 w-full text-left"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-primary-foreground hover:text-accent transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2.5 rounded-lg transition-colors text-center mt-4"
            >
              Book / Enquire
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}