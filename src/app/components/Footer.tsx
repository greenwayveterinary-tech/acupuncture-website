import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/b03470cfb0b27aeaddfbd274c77bc3123b3727da.png';

export function Footer() {
  return (
    <footer className="bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Greenway Veterinary Acupuncture" className="h-36 w-auto" style={{ filter: 'grayscale(100%) brightness(3) contrast(0.9)' }} />
            </Link>
            <p className="text-muted-foreground text-sm">
              Natural pain relief & mobility support for dogs, cats and horses
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/acupuncture" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Acupuncture
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/for-vets" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  For Vets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone size={16} className="text-accent" />
                <a href="tel:02012345678" className="hover:text-accent transition-colors">
                  020 1234 5678
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail size={16} className="text-accent" />
                <a href="mailto:office@acupuncture-vet.co.uk" className="hover:text-accent transition-colors">
                  office@acupuncture-vet.co.uk
                </a>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                <MapPin size={16} className="text-accent mt-0.5" />
                <a 
                  href="https://www.google.com/maps/place/Greenway+Veterinary+Acupuncture/@51.6199839,-0.6927426,9z/data=!4m16!1m9!3m8!1s0x487671f9c5ad828f:0xfbfb8fdd0df73376!2sGreenway+Veterinary+Acupuncture!8m2!3d51.6199839!4d-0.6927426!9m1!1b1!16s%2Fg%2F1tfmmx3f!3m5!1s0x487671f9c5ad828f:0xfbfb8fdd0df73376!8m2!3d51.6199839!4d-0.6927426!16s%2Fg%2F1tfmmx3f?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  London & Surrounding Areas
                </a>
              </li>
            </ul>
          </div>

          {/* Trust Badges & Legal */}
          <div>
            <h3 className="text-primary-foreground mb-4">Accreditations</h3>
            <div className="space-y-3 mb-4">
              <a 
                href="https://www.rcvs.org.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors text-sm block"
              >
                RCVS Registered
              </a>
              <a 
                href="https://www.abva.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors text-sm block"
              >
                ABVA Member
              </a>
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Greenway Veterinary Acupuncture. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Greenway Veterinary Acupuncture is separate from{' '}
            <a href="https://conciergevet.co.uk" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              ConciergeVet
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}