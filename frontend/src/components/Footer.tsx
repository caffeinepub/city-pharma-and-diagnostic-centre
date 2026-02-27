import { Link } from '@tanstack/react-router';
import { Phone, MapPin, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Medicine Services', path: '/medicine' },
  { label: 'Pathology', path: '/pathology' },
  { label: 'Ultrasound', path: '/ultrasound' },
  { label: 'Our Doctors', path: '/doctors' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'city-pharma'
  );

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, #7F1D1D, #991B1B)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <div className="font-heading font-extrabold text-lg text-white">CITY PHARMA</div>
                <div className="text-xs text-orange-200">& Diagnostic Centre</div>
              </div>
            </div>
            <p className="text-orange-100 text-sm leading-relaxed mb-4 max-w-sm">
              Your trusted healthcare partner providing quality medicines, pathology services,
              ultrasound diagnostics, and expert doctor consultations.
            </p>
            <div className="flex items-start gap-2 text-orange-100 text-sm mb-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-300" />
              <span>City Pharma and Diagnostic Centre, Ranchi, Jharkhand</span>
            </div>
            <a
              href="tel:9931918438"
              className="flex items-center gap-2 text-white font-semibold text-base hover:text-orange-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-300" />
              9931918438
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-orange-100 hover:text-white text-sm transition-colors hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2 text-orange-100 text-sm">
              <li>Medicine Delivery</li>
              <li>Blood Tests</li>
              <li>Urine Tests</li>
              <li>Ultrasound Scans</li>
              <li>Doctor Consultation</li>
              <li>Free Delivery (20km)</li>
            </ul>
            {/* Social */}
            <div className="mt-6">
              <h3 className="font-heading font-semibold text-white mb-3 text-sm uppercase tracking-wider">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Facebook"
                >
                  <SiFacebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Instagram"
                >
                  <SiInstagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Twitter / X"
                >
                  <SiX className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-orange-200">
          <p>© {year} City Pharma and Diagnostic Centre. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-orange-400" fill="#fb923c" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:text-white transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
