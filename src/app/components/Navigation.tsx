import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '@/assets/b03470cfb0b27aeaddfbd274c77bc3123b3727da.png';

type RgbaColor = {
  r: number;
  g: number;
  b: number;
  a: number;
};

function parseRgbaColor(value: string): RgbaColor | null {
  if (!value || value === 'transparent') {
    return null;
  }

  const matches = value.match(/rgba?\(([^)]+)\)/);
  if (!matches) {
    return null;
  }

  const parts = matches[1].split(',').map((part) => Number.parseFloat(part.trim()));
  if (parts.length < 3 || parts.some(Number.isNaN)) {
    return null;
  }

  return {
    r: parts[0],
    g: parts[1],
    b: parts[2],
    a: parts[3] ?? 1,
  };
}

function getLuminance(color: Pick<RgbaColor, 'r' | 'g' | 'b'>): number {
  return (0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b) / 255;
}

function getBackgroundImageLuminance(backgroundImage: string): number | null {
  if (!backgroundImage || backgroundImage === 'none') {
    return null;
  }

  const colorMatches = [...backgroundImage.matchAll(/rgba?\(([^)]+)\)/g)];
  if (colorMatches.length === 0) {
    return null;
  }

  const colors = colorMatches
    .map((match) => {
      const parts = match[1].split(',').map((part) => Number.parseFloat(part.trim()));
      if (parts.length < 3 || parts.some(Number.isNaN)) {
        return null;
      }

      return { r: parts[0], g: parts[1], b: parts[2] };
    })
    .filter((color): color is { r: number; g: number; b: number } => color !== null);

  if (colors.length === 0) {
    return null;
  }

  const total = colors.reduce((sum, color) => sum + getLuminance(color), 0);
  return total / colors.length;
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const [desktopItemsOnLight, setDesktopItemsOnLight] = useState<Record<string, boolean>>({});
  const navRef = useRef<HTMLElement | null>(null);
  const desktopItemRefs = useRef<Record<string, HTMLElement | null>>({});
  const navigate = useNavigate();
  const location = useLocation();

  const setDesktopItemRef = (key: string) => (element: HTMLElement | null) => {
    desktopItemRefs.current[key] = element;
  };

  useEffect(() => {
    let animationFrame = 0;

    const getElementTone = (element: Element): 'light' | 'dark' | null => {
      const style = window.getComputedStyle(element as HTMLElement);
      const backgroundColor = parseRgbaColor(style.backgroundColor);
      if (backgroundColor && backgroundColor.a > 0.08) {
        return getLuminance(backgroundColor) > 0.62 ? 'light' : 'dark';
      }

      const gradientLuminance = getBackgroundImageLuminance(style.backgroundImage);
      if (gradientLuminance !== null) {
        return gradientLuminance > 0.62 ? 'light' : 'dark';
      }

      const elementText = (element as HTMLElement).innerText?.trim();
      if (elementText) {
        const textColor = parseRgbaColor(style.color);
        if (textColor) {
          return getLuminance(textColor) < 0.45 ? 'light' : 'dark';
        }
      }

      return null;
    };

    const getToneFromPoint = (xPosition: number, yPosition: number): 'light' | 'dark' | null => {
      const navElement = navRef.current;
      if (!navElement) {
        return null;
      }

      const elements = document.elementsFromPoint(xPosition, yPosition);
      const contentElements = elements.filter((element) => !navElement.contains(element));

      for (const element of contentElements) {
        const tone = getElementTone(element);
        if (tone) {
          return tone;
        }
      }

      return null;
    };

    const isLightBackgroundAtNav = (): boolean => {
      const navElement = navRef.current;
      if (!navElement) {
        return false;
      }

      const navRect = navElement.getBoundingClientRect();
      const sampleY = Math.min(window.innerHeight - 1, navRect.bottom + 6);
      const samplePoints = [0.2, 0.5, 0.8];
      let lightVotes = 0;
      let darkVotes = 0;

      for (const samplePoint of samplePoints) {
        const tone = getToneFromPoint(window.innerWidth * samplePoint, sampleY);
        if (tone === 'light') {
          lightVotes += 1;
        } else if (tone === 'dark') {
          darkVotes += 1;
        }
      }

      return lightVotes > darkVotes;
    };

    const updateNavigationStyles = () => {
      const nextIsLightSection = isLightBackgroundAtNav();
      setIsLightSection((previous) => (previous === nextIsLightSection ? previous : nextIsLightSection));

      const navElement = navRef.current;
      if (!navElement) {
        return;
      }

      const navRect = navElement.getBoundingClientRect();
      const sampleY = Math.min(window.innerHeight - 1, navRect.bottom + 6);
      const nextDesktopItemsOnLight: Record<string, boolean> = {};

      for (const [key, element] of Object.entries(desktopItemRefs.current)) {
        if (!element) {
          continue;
        }

        const itemRect = element.getBoundingClientRect();
        if (itemRect.width === 0 || itemRect.height === 0) {
          continue;
        }

        const sampleX = Math.min(window.innerWidth - 1, Math.max(0, itemRect.left + itemRect.width / 2));
        const tone = getToneFromPoint(sampleX, sampleY);
        if (tone) {
          nextDesktopItemsOnLight[key] = tone === 'light';
        }
      }

      setDesktopItemsOnLight((previous) => {
        const previousKeys = Object.keys(previous);
        const nextKeys = Object.keys(nextDesktopItemsOnLight);

        if (previousKeys.length !== nextKeys.length) {
          return nextDesktopItemsOnLight;
        }

        for (const key of nextKeys) {
          if (previous[key] !== nextDesktopItemsOnLight[key]) {
            return nextDesktopItemsOnLight;
          }
        }

        return previous;
      });
    };

    const scheduleUpdate = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(updateNavigationStyles);
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
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
    { to: '/blog', label: 'Blog', type: 'route' },
    { to: 'how-it-works', label: 'How it Works', type: 'scroll' },
    { to: 'pricing', label: 'Pricing', type: 'scroll' },
    { to: 'faqs', label: 'FAQs', type: 'scroll' },
    { to: '/tools', label: 'Pet Tools', type: 'route' },
    { to: '/for-vets', label: 'For Vets', type: 'route' },
    { to: '/contact', label: 'Contact', type: 'route' },
  ];

  const globalLinkClassName = isLightSection
    ? 'text-[#0a2e2e] hover:text-accent'
    : 'text-primary-foreground hover:text-accent';

  const getDesktopLinkClassName = (key: string) => {
    if (isLightSection || desktopItemsOnLight[key]) {
      return 'text-[#0a2e2e] hover:text-accent';
    }
    return 'text-primary-foreground hover:text-accent';
  };

  return (
    <nav
      ref={navRef}
      className={`backdrop-blur-md sticky top-0 z-50 shadow-lg transition-all duration-300 ${
        isLightSection
          ? 'bg-white/80 border-b border-[#0a2e2e]/10'
          : 'bg-white/10 border-b border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Greenway Veterinary Acupuncture"
              className="h-28 w-auto my-2 transition-all duration-300"
              style={{
                filter: isLightSection
                  ? 'grayscale(100%) brightness(0.2) contrast(1.1)'
                  : 'grayscale(100%) brightness(3) contrast(0.9)',
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.type === 'scroll' ? (
                <button
                  key={link.to}
                  ref={setDesktopItemRef(link.to)}
                  onClick={() => scrollToSection(link.to)}
                  className={`${getDesktopLinkClassName(link.to)} transition-colors duration-300`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.to}
                  ref={setDesktopItemRef(link.to)}
                  to={link.to}
                  className={`${getDesktopLinkClassName(link.to)} transition-colors duration-300`}
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
            className={`lg:hidden p-2 transition-colors duration-300 ${globalLinkClassName}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`lg:hidden py-4 space-y-3 border-t rounded-b-lg backdrop-blur-sm ${
              isLightSection
                ? 'border-[#0a2e2e]/10 bg-white/60'
                : 'border-white/20 bg-white/5'
            }`}
          >
            {navLinks.map((link) => (
              link.type === 'scroll' ? (
                <button
                  key={link.to}
                  onClick={() => scrollToSection(link.to)}
                  className={`block py-2 w-full text-left transition-colors duration-300 ${globalLinkClassName}`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block py-2 transition-colors duration-300 ${globalLinkClassName}`}
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
