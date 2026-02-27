import { Phone } from 'lucide-react';

export default function FloatingContactButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse rings */}
      <div
        className="absolute inset-0 rounded-full animate-pulse-ring"
        style={{ background: 'rgba(234,88,12,0.4)' }}
      />
      <div
        className="absolute inset-0 rounded-full animate-pulse-ring"
        style={{ background: 'rgba(234,88,12,0.25)', animationDelay: '0.5s' }}
      />
      <a
        href="tel:9931918438"
        className="relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-brand transition-transform hover:scale-110 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
        aria-label="Call us at 9931918438"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
