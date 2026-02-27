import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Pill,
  FlaskConical,
  Scan,
  Stethoscope,
  Phone,
  ArrowRight,
  Star,
  Mail,
  CheckCircle,
  Heart,
  Shield,
  Clock,
  Award,
} from 'lucide-react';

const services = [
  {
    icon: Pill,
    title: 'Medicine',
    desc: 'Quality medicines with free home delivery within 20 km.',
    path: '/medicine',
    color: '#EA580C',
  },
  {
    icon: FlaskConical,
    title: 'Pathology',
    desc: 'Accurate blood & urine tests at affordable prices.',
    path: '/pathology',
    color: '#B91C1C',
  },
  {
    icon: Scan,
    title: 'Ultrasound',
    desc: 'Advanced ultrasound diagnostics by trained professionals.',
    path: '/ultrasound',
    color: '#991B1B',
  },
  {
    icon: Stethoscope,
    title: 'Doctor Consultation',
    desc: 'Expert doctors across multiple specializations.',
    path: '/doctors',
    color: '#7F1D1D',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'City Pharma has been a lifesaver! The medicine delivery is prompt and the staff is very helpful. Highly recommended for all healthcare needs.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    text: 'Got my blood tests done here and the reports were accurate and delivered quickly. The pricing is very reasonable compared to other labs.',
    rating: 5,
  },
  {
    name: 'Sunita Devi',
    text: "The ultrasound facility is excellent and the doctors are very experienced. I always trust City Pharma for my family's healthcare.",
    rating: 5,
  },
];

const features = [
  { icon: Shield, label: 'Trusted Quality', desc: 'Certified medicines & equipment' },
  { icon: Clock, label: '24/7 Support', desc: 'Always here when you need us' },
  { icon: Award, label: 'Expert Doctors', desc: '8+ specialist doctors on board' },
  { icon: Heart, label: 'Patient First', desc: 'Your health is our priority' },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setNewsletterSuccess(true);
      setEmail('');
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #7F1D1D 0%, #991B1B 40%, #B91C1C 70%, #EA580C 100%)',
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" fill="white" />
              Your Trusted Healthcare Partner
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Quality Healthcare
              <span className="block text-orange-200">At Your Doorstep</span>
            </h1>
            <p className="text-orange-100 text-lg leading-relaxed mb-8 max-w-lg">
              City Pharma and Diagnostic Centre offers comprehensive healthcare services — medicines,
              pathology, ultrasound, and expert doctor consultations — all under one roof.
            </p>

            {/* Phone */}
            <a
              href="tel:9931918438"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-5 py-3 text-white font-bold text-xl mb-8 hover:bg-white/30 transition-colors"
            >
              <Phone className="w-5 h-5 text-orange-200" />
              9931918438
            </a>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/pathology"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                style={{ background: 'white', color: '#B91C1C' }}
              >
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:9931918438"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </a>
              <Link
                to="/medicine"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                style={{ background: '#EA580C', color: 'white' }}
              >
                <Pill className="w-4 h-4" />
                Order Medicine
              </Link>
            </div>
          </div>

          {/* Animated Medical SVG */}
          <div className="relative flex items-center justify-center h-80 lg:h-96">
            {/* Heartbeat line */}
            <svg
              viewBox="0 0 300 80"
              className="absolute top-4 left-0 right-0 w-full opacity-60"
              fill="none"
            >
              <polyline
                points="0,40 50,40 70,10 85,70 100,20 115,60 130,40 300,40"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="heartbeat-line"
              />
            </svg>

            {/* Floating pill 1 */}
            <div className="absolute top-8 left-8 animate-float">
              <div className="w-16 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Pill className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Floating pill 2 */}
            <div className="absolute top-16 right-12 animate-float-delayed">
              <div className="w-12 h-12 rounded-full bg-orange-400/40 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Pill className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Central stethoscope */}
            <div className="relative animate-float-slow">
              <div
                className="w-40 h-40 rounded-full flex items-center justify-center shadow-2xl"
                style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}
              >
                <Stethoscope className="w-20 h-20 text-white" />
              </div>
              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-slow" />
            </div>

            {/* Floating flask */}
            <div className="absolute bottom-12 left-12 animate-float-delayed">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Floating scan */}
            <div className="absolute bottom-8 right-8 animate-float">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Scan className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100 card-hover"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
                >
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm" style={{ color: '#7F1D1D' }}>
                    {f.label}
                  </div>
                  <div className="text-xs text-gray-500">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 text-sm font-medium mb-3 px-4 py-1.5 rounded-full"
              style={{ background: '#FEF3C7', color: '#B91C1C' }}
            >
              Our Services
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From medicines to diagnostics, we provide everything you need for your health under one
              roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.path}
                className="group bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100 flex flex-col items-center text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}22, ${service.color}44)`,
                  }}
                >
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <div
                  className="flex items-center gap-1 text-sm font-semibold mt-auto"
                  style={{ color: service.color }}
                >
                  Learn More{' '}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 text-sm font-medium mb-3 px-4 py-1.5 rounded-full"
              style={{ background: '#FEF3C7', color: '#B91C1C' }}
            >
              Patient Reviews
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients <span className="gradient-text">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-orange-400" fill="#fb923c" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">Verified Patient</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #7F1D1D, #B91C1C)' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <Mail className="w-12 h-12 text-orange-200 mx-auto mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
            Stay Updated with Health Tips
          </h2>
          <p className="text-orange-100 mb-8">
            Subscribe to our newsletter for health tips, service updates, and special offers.
          </p>

          {newsletterSuccess ? (
            <div className="flex items-center justify-center gap-2 bg-white/20 rounded-xl px-6 py-4 text-white font-semibold">
              <CheckCircle className="w-5 h-5 text-green-300" />
              Thank you for subscribing! We'll be in touch soon.
            </div>
          ) : (
            <form
              onSubmit={handleNewsletter}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-95 whitespace-nowrap"
                style={{ background: '#EA580C' }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
