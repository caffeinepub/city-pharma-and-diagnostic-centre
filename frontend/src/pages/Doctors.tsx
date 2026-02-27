import { Phone, Stethoscope } from 'lucide-react';

interface Doctor {
  name: string;
  specialization: string;
  bio: string;
  avatarName: string;
}

const doctors: Doctor[] = [
  {
    name: 'Dr. Swati Lal',
    specialization: 'Gynaecologist',
    bio: 'Dr. Swati Lal is a highly experienced gynaecologist specializing in women\'s health, prenatal care, and reproductive medicine. She is known for her compassionate approach and patient-centered care.',
    avatarName: 'Swati+Lal',
  },
  {
    name: 'Dr. Faruque',
    specialization: 'Child Specialist · Diabetic Specialist · General Physician',
    bio: 'Dr. Faruque brings extensive expertise in pediatrics, diabetes management, and general medicine. He is dedicated to providing comprehensive healthcare for patients of all ages.',
    avatarName: 'Dr+Faruque',
  },
  {
    name: 'Dr. Parmeshwar Lal',
    specialization: 'Senior General Physician',
    bio: 'Dr. Parmeshwar Lal is a senior general physician with decades of experience in diagnosing and treating a wide range of medical conditions with precision and care.',
    avatarName: 'Parmeshwar+Lal',
  },
  {
    name: 'Dr. Rahul Yogendar Raj',
    specialization: 'Orthopaedic Specialist',
    bio: 'Dr. Rahul Yogendar Raj specializes in orthopaedic conditions including bone fractures, joint disorders, and sports injuries, offering both surgical and non-surgical treatments.',
    avatarName: 'Rahul+Raj',
  },
  {
    name: 'Dr. Anup Tirkey',
    specialization: 'Dermatologist & Cosmetic Specialist',
    bio: 'Dr. Anup Tirkey is a skilled dermatologist and cosmetic specialist offering treatments for skin conditions, hair disorders, and aesthetic procedures.',
    avatarName: 'Anup+Tirkey',
  },
  {
    name: 'Dr. SK Choudhary',
    specialization: 'Senior Dermatologist',
    bio: 'Dr. SK Choudhary is a senior dermatologist with vast experience in treating complex skin diseases, allergies, and chronic dermatological conditions.',
    avatarName: 'SK+Choudhary',
  },
  {
    name: 'Dr. RL Munda',
    specialization: 'Senior General Physician & Child Specialist',
    bio: 'Dr. RL Munda combines expertise in general medicine and pediatrics, providing holistic healthcare for both adults and children with a focus on preventive care.',
    avatarName: 'RL+Munda',
  },
  {
    name: 'Dr. Mayank Sahan Sharma',
    specialization: 'Gastroenterologist',
    bio: 'Dr. Mayank Sahan Sharma is a gastroenterologist specializing in digestive disorders, liver diseases, and endoscopic procedures, ensuring comprehensive GI care.',
    avatarName: 'Mayank+Sharma',
  },
];

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${doctor.avatarName}&background=991B1B&color=fff&size=200`;

  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden card-hover group">
      {/* Avatar */}
      <div
        className="relative h-48 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #7F1D1D11, #EA580C22)' }}
      >
        <img
          src={avatarUrl}
          alt={doctor.name}
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
          loading="lazy"
        />
        <div
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
        >
          <Stethoscope className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-gray-900 text-base mb-1">{doctor.name}</h3>

        {/* Specialization badges */}
        <div className="flex flex-wrap gap-1 mb-3">
          {doctor.specialization.split(' · ').map((spec, i) => (
            <span
              key={i}
              className="text-xs font-medium px-2 py-0.5 rounded-full text-white"
              style={{ background: i === 0 ? '#B91C1C' : i === 1 ? '#991B1B' : '#7F1D1D' }}
            >
              {spec}
            </span>
          ))}
        </div>

        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">{doctor.bio}</p>

        <a
          href="tel:9931918438"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #EA580C, #B91C1C)' }}
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </div>
    </div>
  );
}

export default function Doctors() {
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
              <pattern id="cross" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20,5 L20,35 M5,20 L35,20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cross)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="animate-float">
              <Stethoscope className="w-20 h-20 text-white opacity-90" />
            </div>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Our Expert Doctors
          </h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">
            Meet our team of experienced and dedicated healthcare professionals committed to your wellbeing.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-5 py-2.5 text-white text-sm font-medium">
              8 Specialist Doctors
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-5 py-2.5 text-white text-sm font-medium">
              Multiple Specializations
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-5 py-2.5 text-white text-sm font-medium">
              Patient-Centered Care
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Meet Our <span className="gradient-text">Specialists</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our doctors bring years of expertise and a commitment to providing the best healthcare experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, i) => (
              <DoctorCard key={i} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #7F1D1D, #B91C1C)' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <Stethoscope className="w-12 h-12 text-orange-200 mx-auto mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Book a Consultation Today
          </h2>
          <p className="text-orange-100 mb-8">
            Our doctors are available for consultations. Call us to schedule your appointment.
          </p>
          <a
            href="tel:9931918438"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-brand"
            style={{ background: '#EA580C' }}
          >
            <Phone className="w-5 h-5" />
            Call Now: 9931918438
          </a>
        </div>
      </section>
    </div>
  );
}
