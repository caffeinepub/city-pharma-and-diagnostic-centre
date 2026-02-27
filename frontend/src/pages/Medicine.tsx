import { useState } from 'react';
import {
  Pill,
  Truck,
  CheckCircle,
  ClipboardList,
  Package,
  MapPin,
  Clock,
  User,
  Phone,
  FileText,
  ArrowRight,
} from 'lucide-react';

const deliverySteps = [
  { icon: ClipboardList, label: 'Place Order', desc: 'Fill the form with your medicine details', color: '#EA580C' },
  { icon: CheckCircle, label: 'Verify', desc: 'Our team verifies your prescription', color: '#B91C1C' },
  { icon: Package, label: 'Pack', desc: 'Medicines are carefully packed', color: '#991B1B' },
  { icon: Truck, label: 'Deliver', desc: 'Free delivery to your doorstep', color: '#7F1D1D' },
];

const deliveryTimes = [
  'Morning (8 AM – 12 PM)',
  'Afternoon (12 PM – 4 PM)',
  'Evening (4 PM – 8 PM)',
];

interface FormData {
  name: string;
  contact: string;
  address: string;
  medicineName: string;
  prescription: File | null;
  deliveryTime: string;
}

export default function Medicine() {
  const [form, setForm] = useState<FormData>({
    name: '',
    contact: '',
    address: '',
    medicineName: '',
    prescription: null,
    deliveryTime: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, prescription: e.target.files?.[0] || null }));
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
              <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <div className="animate-truck">
              <Truck className="w-16 h-16 text-white opacity-90" />
            </div>
            <div className="animate-float">
              <Pill className="w-12 h-12 text-orange-200 mt-2" />
            </div>
            <div className="animate-float-delayed">
              <Pill className="w-10 h-10 text-white opacity-70 mt-4" />
            </div>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Medicine Services
          </h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto mb-6">
            Order your medicines online and get them delivered right to your doorstep.
          </p>

          {/* Free Delivery Badge */}
          <div className="inline-flex items-center gap-2 relative">
            <div
              className="absolute inset-0 rounded-full animate-pulse-ring"
              style={{ background: 'rgba(255,255,255,0.3)' }}
            />
            <div className="relative flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-full shadow-lg text-sm">
              <Truck className="w-4 h-4" />
              🎉 Free Delivery within 20 km!
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Delivery Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-gray-500">Simple 4-step process to get your medicines delivered</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-orange-200 via-red-300 to-red-800 z-0" />

            {deliverySteps.map((step, i) => (
              <div
                key={i}
                className={`relative z-10 flex flex-col items-center text-center p-4 animate-step-${i + 1}`}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${step.color}22, ${step.color}44)`, border: `2px solid ${step.color}` }}
                >
                  <step.icon className="w-9 h-9" style={{ color: step.color }} />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
                  style={{ background: step.color }}
                >
                  {i + 1}
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1">{step.label}</h3>
                <p className="text-gray-500 text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Order <span className="gradient-text">Medicine</span>
            </h2>
            <p className="text-gray-500">Fill in the details below and we'll deliver to your door</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 shadow-card text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, #EA580C22, #B91C1C44)' }}
              >
                <CheckCircle className="w-10 h-10" style={{ color: '#B91C1C' }} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Order Placed!</h3>
              <p className="text-gray-500 mb-6">
                Thank you! Your medicine order has been received. Our team will contact you shortly at your provided number.
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
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-card space-y-5"
            >
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:border-transparent transition-all"
                  style={{ '--tw-ring-color': '#EA580C' } as React.CSSProperties}
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

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <MapPin className="w-4 h-4 inline mr-1.5" style={{ color: '#EA580C' }} />
                  Delivery Address *
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Enter your complete delivery address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none resize-none transition-all"
                  onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>

              {/* Medicine Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <Pill className="w-4 h-4 inline mr-1.5" style={{ color: '#EA580C' }} />
                  Medicine Name *
                </label>
                <input
                  type="text"
                  name="medicineName"
                  value={form.medicineName}
                  onChange={handleChange}
                  required
                  placeholder="Enter medicine name(s)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all"
                  onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>

              {/* Prescription Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <FileText className="w-4 h-4 inline mr-1.5" style={{ color: '#EA580C' }} />
                  Upload Prescription (optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFile}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:text-white cursor-pointer"
                    style={{ '--file-bg': '#EA580C' } as React.CSSProperties}
                  />
                </div>
                {form.prescription && (
                  <p className="text-xs text-green-600 mt-1">✓ {form.prescription.name}</p>
                )}
              </div>

              {/* Delivery Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <Clock className="w-4 h-4 inline mr-1.5" style={{ color: '#EA580C' }} />
                  Preferred Delivery Time *
                </label>
                <select
                  name="deliveryTime"
                  value={form.deliveryTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all bg-white"
                  onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
                >
                  <option value="">Select preferred time</option>
                  {deliveryTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
              >
                Place Order <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
