# Specification

## Summary
**Goal:** Build a complete multi-page website for City Pharma and Diagnostic Centre with five pages, animated UI, service pricing, booking forms, and a doctor directory.

**Planned changes:**
- Configure Tailwind CSS with custom orange (#EA580C, #F97316) and maroon (#7F1D1D, #991B1B, #B91C1C) color palette; set up React Router v6 with routes: `/`, `/medicine`, `/pathology`, `/ultrasound`, `/doctors`
- Create a global sticky header with "CITY PHARMA" logo, desktop nav links, mobile hamburger drawer, and a continuously animating SVG heartbeat polyline
- Create a global footer with centre name, address, clickable phone link (tel:9931918438), quick links to all pages, and social media placeholder icons (Facebook, Instagram, Twitter)
- Add a globally rendered floating contact button (fixed bottom-right, orange pulse, phone icon, tel:9931918438)
- Apply Framer Motion page transition animations (fade/slide) on every route change
- **Home page (`/`):** Hero banner with animated SVG medical graphics (floating pills, stethoscope, heartbeat line), intro text, prominent phone number, three CTA buttons (Book Now → /pathology, Contact Us → tel:9931918438, Order Medicine → /medicine), four service cards (Medicine, Pathology, Ultrasound, Doctor Consultation) with Lucide icons and route links, three patient testimonials, newsletter signup with frontend-only success message
- **Medicine page (`/medicine`):** Hero with animated delivery truck/pill icons, pulsing "Free Delivery within 20 km" badge, medicine request form (Name, Contact, Address, Medicine Name, Prescription Upload, Preferred Delivery Time) with success confirmation, animated delivery process steps (Order → Verify → Pack → Deliver)
- **Pathology page (`/pathology`):** Hero with animated lab beaker icons, card-based pricing table for 9 blood tests (CBC ₹200, Lipid Profile ₹500, Blood Sugar Fasting ₹80, Blood Sugar PP ₹80, HbA1c ₹350, Thyroid Profile ₹450, Liver Function Test ₹600, Kidney Function Test ₹600, Complete Hemogram ₹300) and 3 urine tests (Routine Urine Examination ₹100, Urine Culture & Sensitivity ₹400, Urine Pregnancy Test ₹150), online booking form (Name, Contact, multi-select test, Date & Time, Prescription Upload) with success message
- **Ultrasound page (`/ultrasound`):** Hero with animated ultrasound wave SVG, pricing cards for 9 services (Abdominal ₹800, Pelvic ₹700, Obstetric ₹900, Whole Abdomen ₹1000, KUB ₹700, Neck ₹700, Breast ₹700, Scrotal ₹700, Doppler Study ₹1200), appointment booking form (Name, Contact, Service Selection, Date & Time, Notes) with success message, safety & hygiene highlights section, trained staff section
- **Doctors page (`/doctors`):** Responsive grid of 8 doctor cards, each with a ui-avatars.com avatar (background=991B1B), name, specialization badge, short bio, and "Call Now" button (tel:9931918438); Framer Motion hover scale/shadow effects
- All forms use controlled React state with validation feedback and visible success state; fully mobile-first responsive using Tailwind responsive prefixes

**User-visible outcome:** Users can browse a fully animated, mobile-responsive pharmacy and diagnostic centre website; view services and pricing; submit medicine delivery requests, pathology bookings, and ultrasound appointments (frontend-only); view the doctor directory; and quickly call the centre from any page.
