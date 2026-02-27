import { useState } from 'react';
import {
  FlaskConical,
  Droplets,
  CheckCircle,
  Phone,
  User,
  Calendar,
  Clock,
  FileText,
  ArrowRight,
} from 'lucide-react';

const bloodTests = [
  { name: 'CBC (Complete Blood Count)', price: 200 },
  { name: 'Lipid Profile', price: 500 },
  { name: 'Blood Sugar Fasting', price: 80 },
  { name: 'Blood Sugar PP', price: 80 },
  { name: 'HbA1c', price: 350 },
  { name: 'Thyroid Profile', price: 450 },
  { name: 'Liver Function Test', price: 600 },
  { name: 'Kidney Function Test', price: 600 },
  { name: 'Complete Hemogram', price: 300 },
];

const urineTests = [
  { name: 'Routine Urine Examination', price: 100 },
  { name: 'Urine Culture & Sensitivity', price: 400 },
  { name: 'Urine Pregnancy Test', price: 150 },
];

const allTests = [...bloodTests.map((t) => t.name), ...urineTests.map((t) => t.name)];

interface FormData {
  name: string;
  contact: string;
  selectedTests: string[];
  date: string;
  time: string;
  prescription: File | null;
}

export default function Pathology() {
  const [form, setForm] = useState<FormData>({
    name: '',
    contact: '',
    selectedTests: [],
    date: '',
    time: '',
    prescription: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTestToggle = (testName: string) => {
    setForm((prev) => ({
      ...prev,
      selectedTests: prev.selectedTests.includes(testName)
        ? prev.selectedTests.filter((t) => t !== testName)
        : [...prev.selectedTests, testName],
    }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, prescription: e.target.files?.[0] || null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.selectedTests.length === 0) {
      alert('Please select at least one test.');
      return;
    }
    setSubmitted(true);
  };

  const totalPrice = form.selectedTests.reduce((sum, testName) => {
    const test = [...bloodTests, ...urineTests].find((t) => t.name === testName);
    return sum + (test?.price || 0);
  }, 0);

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
              <pattern id="hex" width="50" height="50" patternUnits="userSpaceOnUse">
                <polygon points="25,5 45,15 45,35 25,45 5,35 5,15" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <div className="animate-float">
              <FlaskConical className="w-16 h-16 text-white opacity-90" />
            </div>
            <div className="animate-float-delayed">
              <Droplets className="w-12 h-12 text-orange-200 mt-3" />
            </div>
            <div className="animate-float-slow">
              <FlaskConical className="w-10 h-10 text-white opacity-60 mt-5" />
            </div>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Pathology Services
          </h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">
            Accurate and affordable blood & urine tests with quick report delivery.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Blood Tests Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Blood Test <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-gray-500">Transparent pricing with no hidden charges</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {bloodTests.map((test, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-xl border border-orange-100 bg-orange-50 card-hover"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
                  >
                    <Droplets className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">{test.name}</span>
                </div>
                <span className="font-bold text-sm ml-2 whitespace-nowrap" style={{ color: '#B91C1C' }}>
                  ₹{test.price}
                </span>
              </div>
            ))}
          </div>

          {/* Urine Tests */}
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Urine Test <span className="gradient-text">Pricing</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {urineTests.map((test, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-xl border border-red-100 bg-red-50 card-hover"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #B91C1C, #7F1D1D)' }}
                  >
                    <FlaskConical className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">{test.name}</span>
                </div>
                <span className="font-bold text-sm ml-2 whitespace-nowrap" style={{ color: '#7F1D1D' }}>
                  ₹{test.price}
                </span>
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
              Book a <span className="gradient-text">Test</span>
            </h2>
            <p className="text-gray-500">Select your tests and schedule an appointment</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 shadow-card text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, #EA580C22, #B91C1C44)' }}
              >
                <CheckCircle className="w-10 h-10" style={{ color: '#B91C1C' }} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Booking Confirmed!</h3>
              <p className="text-gray-500 mb-6">
                Your test booking has been received. Our team will contact you to confirm the appointment.
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

              {/* Test Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FlaskConical className="w-4 h-4 inline mr-1.5" style={{ color: '#EA580C' }} />
                  Select Tests * {form.selectedTests.length > 0 && (
                    <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: '#B91C1C' }}>
                      {form.selectedTests.length} selected — ₹{totalPrice}
                    </span>
                  )}
                </label>
                <div className="border border-gray-200 rounded-xl p-3 max-h-56 overflow-y-auto space-y-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-1">Blood Tests</p>
                  {bloodTests.map((test) => (
                    <label
                      key={test.name}
                      className="flex items-center justify-between gap-2 px-2 py-2 rounded-lg hover:bg-orange-50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={form.selectedTests.includes(test.name)}
                          onChange={() => handleTestToggle(test.name)}
                          className="w-4 h-4 rounded accent-orange-600"
                        />
                        <span className="text-sm text-gray-700">{test.name}</span>
                      </div>
                      <span className="text-xs font-semibold" style={{ color: '#B91C1C' }}>₹{test.price}</span>
                    </label>
                  ))}
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-3 mb-2 px-1">Urine Tests</p>
                  {urineTests.map((test) => (
                    <label
                      key={test.name}
                      className="flex items-center justify-between gap-2 px-2 py-2 rounded-lg hover:bg-orange-50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={form.selectedTests.includes(test.name)}
                          onChange={() => handleTestToggle(test.name)}
                          className="w-4 h-4 rounded accent-orange-600"
                        />
                        <span className="text-sm text-gray-700">{test.name}</span>
                      </div>
                      <span className="text-xs font-semibold" style={{ color: '#7F1D1D' }}>₹{test.price}</span>
                    </label>
                  ))}
                </div>
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

              {/* Prescription */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <FileText className="w-4 h-4 inline mr-1.5" style={{ color: '#EA580C' }} />
                  Upload Prescription (if required)
                </label>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFile}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:text-white cursor-pointer"
                />
                {form.prescription && (
                  <p className="text-xs text-green-600 mt-1">✓ {form.prescription.name}</p>
                )}
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
    </div>
  );
}
