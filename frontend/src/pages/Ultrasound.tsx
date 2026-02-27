import { useState } from 'react';
import {
  Scan,
  CheckCircle,
  Phone,
  User,
  Calendar,
  Clock,
  FileText,
  ArrowRight,
  Shield,
  UserCheck,
  Sparkles,
  Activity,
  Award,
  Heart,
} from 'lucide-react';

const ultrasoundServices = [
  { name: 'Abdominal Ultrasound', price: 800 },
  { name: 'Pelvic Ultrasound', price: 700 },
  { name: 'Obstetric Ultrasound', price: 900 },
  { name: 'Whole Abdomen', price: 1000 },
  { name: 'KUB Ultrasound', price: 700 },
  { name: 'Neck Ultrasound', price: 700 },
  { name: 'Breast Ultrasound', price: 700 },
  { name: 'Scrotal Ultrasound', price: 700 },
  { name: 'Doppler Study', price: 1200 },
];

const safetyHighlights = [
  { icon: Shield, title: 'Sterilized Equipment', desc: 'All probes and equipment are thoroughly sterilized before each use.' },
  { icon: Sparkles, title: 'Hygienic Environment', desc: 'Our facility maintains the highest standards of cleanliness and hygiene.' },
  { icon: UserCheck, title: 'Trained Professionals', desc: 'Scans performed by certified and experienced sonographers.' },
  { icon: Activity, title: 'Advanced Technology', desc: 'State-of-the-art ultrasound machines for accurate diagnostics.' },
  { icon: Award, title: 'Quality Reports', desc: 'Detailed reports reviewed by qualified radiologists.' },
  { icon: Heart, title: 'Patient Comfort', desc: 'Comfortable and private examination rooms for your ease.' },
];

interface FormData {
  name: string;
  contact: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

export default function Ultrasound() {
  const [form, setForm] = useState<FormData>({
    name: '',
    contact: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7F1D1D 0%, #B91C1C 60%, #EA580C 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="waves-bg" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0,30 Q15,10 30,30 Q45,50 60,30" fill="none" stroke="white" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves-bg)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Animated ultrasound waves */}
          <div className="flex justify-center items-end gap-1 mb-8 h-16">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div
                key={i}
                className={`w-2 rounded-full bg-white opacity-80 animate-wave-${Math.min(i, 5)}`}
                style={{
                  height: `${20 + Math.sin(i * 0.8) * 20 + 20}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
            <Scan className="w-12 h-12 text-white mx-4 animate-bounce-subtle" />
            {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((i) => (
              <div
                key={`r${i}`}
                className={`w-2 rounded-full bg-white opacity-80 animate-wave-${Math.min(i, 5)}`}
                style={{
                  height: `${20 + Math.sin(i * 0.8) * 20 + 20}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Ultrasound Services
          </h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">
            Advanced ultrasound diagnostics with trained professionals and state-of-the-art equipment.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Ultrasound <span className="gradient-text">Services & Pricing</span>
            </h2>
            <p className="text-gray-500">Affordable ultrasound scans with accurate results</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ultrasoundServices.map((service, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-red-50 p-5 card-hover"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
                    >
                      <Scan className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{service.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">Ultrasound Scan</p>
                    </div>
                  </div>
                  <div
                    className="text-right"
                  >
                    <div className="font-bold text-lg" style={{ color: '#B91C1C' }}>₹{service.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Book an <span className="gradient-text">Appointment</span>
            </h2>
            <p className="text-gray-500">Schedule your ultrasound scan at your convenience</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 shadow-card text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, #EA580C22, #B91C1C44)' }}
              >
                <CheckCircle className="w-10 h-10" style={{ color: '#B91C1C' }} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Appointment Booked!</h3>
              <p className="text-gray-500 mb-6">
                Your ultrasound appointment has been received. Our team will confirm your slot shortly.
              </p>
              <a
                href="tel:9931918438"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
                style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
              >
                <Phone className="w-4 h-4" />
                Call: 9931918438
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-card space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <User className="w-4 h-4 inline mr-1.5" style={{ color: '#EA580C' }} />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all"
                  onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <Phone className="w-4 h-4 inline mr-1.5" style={{ color: '#EA580C' }} />
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all"
                  onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <Scan className="w-4 h-4 inline mr-1.5" style={{ color: '#EA580C' }} />
                  Select Service *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all bg-white"
                  onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                >
                  <option value="">Select ultrasound service</option>
                  {ultrasoundServices.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} — ₹{s.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <Calendar className="w-4 h-4 inline mr-1.5" style={{ color: '#EA580C' }} />
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all"
                    onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                    onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <Clock className="w-4 h-4 inline mr-1.5" style={{ color: '#EA580C' }} />
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all"
                    onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                    onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <FileText className="w-4 h-4 inline mr-1.5" style={{ color: '#EA580C' }} />
                  Additional Notes (optional)
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any special instructions or medical history..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none resize-none transition-all"
                  onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
              >
                Book Appointment <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Safety & Hygiene */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Safety & <span className="gradient-text">Hygiene Standards</span>
            </h2>
            <p className="text-gray-500">Your safety is our top priority</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {safetyHighlights.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 card-hover"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #EA580C22, #B91C1C44)' }}
                >
                  <item.icon className="w-6 h-6" style={{ color: '#B91C1C' }} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trained Staff */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #7F1D1D, #B91C1C)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <UserCheck className="w-16 h-16 text-orange-200 mx-auto mb-6" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Our Trained Ultrasound Staff
          </h2>
          <p className="text-orange-100 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Our ultrasound department is staffed by certified sonographers and radiologists with years of experience. Each team member undergoes regular training to stay updated with the latest diagnostic techniques and equipment. We are committed to providing accurate, reliable, and compassionate care to every patient.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { label: '10+', desc: 'Years Experience' },
              { label: '5000+', desc: 'Scans Performed' },
              { label: '100%', desc: 'Patient Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
                <div className="font-heading text-3xl font-extrabold text-white mb-1">{stat.label}</div>
                <div className="text-orange-200 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
