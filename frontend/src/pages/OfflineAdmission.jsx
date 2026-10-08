import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  MapPin, Clock, Phone, Mail, ArrowLeft, Navigation,
  Building2, Calendar, FileText, CheckCircle2
} from 'lucide-react';

const steps = [
  { icon: FileText, title: 'Download Form', desc: 'Collect the admission form from our center reception or request via WhatsApp.' },
  { icon: CheckCircle2, title: 'Fill Details', desc: 'Fill in all required student & guardian details clearly in block letters.' },
  { icon: Building2, title: 'Visit Our Center', desc: 'Submit the form in person along with required documents.' },
  { icon: Calendar, title: 'Confirmation', desc: 'Our team will verify your details and confirm your seat within 24 hours.' },
];

const docs = [
  'Recent Passport-size Photograph (×2)',
  'Aadhaar Card (Student)',
  'Aadhaar Card (Guardian)',
  'Previous Class Marksheet / Report Card',
  'School ID / Bonafide Certificate',
];

export default function OfflineAdmission() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#0b0b18] relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="purple-ambient w-[500px] h-[500px] bg-[#7c3aed]/10 top-[-10%] right-[-5%]" />
      <div className="purple-ambient w-[400px] h-[400px] bg-[#FFD700]/5 bottom-[-10%] left-[-5%]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full px-5 py-2 mb-5">
            <Building2 size={14} className="text-[#FFD700]" />
            <span className="text-[#FFD700] text-xs font-bold tracking-widest uppercase">Offline Admission</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            VISIT OUR <span className="text-[#FFD700]">CENTER</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Come meet us in person. Our counselors are ready to guide you through the admission process and help you find the right course.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Center Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 flex flex-col gap-6"
          >
            <h2 className="text-2xl font-black text-white flex items-center gap-3 border-l-4 border-[#FFD700] pl-4">
              <MapPin size={22} className="text-[#FFD700]" /> CENTER DETAILS
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFD700]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Address</p>
                  <p className="text-white font-semibold leading-relaxed text-sm">
                    Rank Shastra Institute<br />
                    Barrackpore, North 24 Parganas<br />
                    West Bengal — 700120
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={18} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Center Hours</p>
                  <p className="text-white font-semibold text-sm">Mon – Sat &nbsp;|&nbsp; 9:00 AM – 7:00 PM</p>
                  <p className="text-white/40 text-xs mt-0.5">Closed on public holidays</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c8f000]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={18} className="text-[#c8f000]" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+918777674274" className="text-[#c8f000] font-bold text-sm hover:underline">
                    +91 87776 74274
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:rankshastra@gmail.com" className="text-blue-400 font-bold text-sm hover:underline">
                    rankshastra@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://maps.google.com/?q=Barrackpore+North+24+Parganas+West+Bengal"
              target="_blank"
              rel="noreferrer"
              className="mt-auto flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-[#FFD700]/40 text-[#FFD700] font-bold text-sm hover:bg-[#FFD700]/10 transition-colors"
            >
              <Navigation size={16} /> Get Directions
            </a>
          </motion.div>

          {/* Steps Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card p-8 flex flex-col gap-6"
          >
            <h2 className="text-2xl font-black text-white flex items-center gap-3 border-l-4 border-[#c8f000] pl-4">
              HOW IT WORKS
            </h2>

            <div className="flex flex-col gap-5">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center group-hover:bg-purple-500/25 transition-colors">
                      <step.icon size={18} className="text-purple-400" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#c8f000] text-[#0b0b18] text-[10px] font-black flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-0.5">{step.title}</p>
                    <p className="text-white/45 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/918777674274?text=Hello%2C%20I%20want%20to%20apply%20for%20offline%20admission%20at%20Rank%20Shastra."
              target="_blank"
              rel="noreferrer"
              className="mt-auto btn-primary flex items-center justify-center gap-2 text-sm"
              style={{ background: 'linear-gradient(135deg,#25D366 0%,#1da851 100%)', color: '#fff', boxShadow: '0 2px 16px rgba(37,211,102,0.25)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              WhatsApp for Offline Admission
            </a>
          </motion.div>
        </div>

        {/* Documents Required */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-5xl mx-auto glass-card p-8"
        >
          <h2 className="text-2xl font-black text-white flex items-center gap-3 border-l-4 border-purple-500 pl-4 mb-7">
            <FileText size={22} className="text-purple-400" /> DOCUMENTS REQUIRED
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {docs.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + i * 0.06 }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-purple-500/40 transition-colors"
              >
                <CheckCircle2 size={16} className="text-[#c8f000] flex-shrink-0" />
                <span className="text-white/80 text-sm font-medium">{doc}</span>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-white/35 text-xs text-center">
            * Please bring originals + 1 photocopy of each document. Seat confirmation subject to document verification.
          </p>
        </motion.div>

        {/* Also try online */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-5xl mx-auto mt-8 text-center"
        >
          <p className="text-white/35 text-sm">
            Prefer to apply from home?{' '}
            <button
              onClick={() => navigate('/admission/online')}
              className="text-purple-400 hover:text-purple-300 font-bold underline underline-offset-2 transition-colors"
            >
              Switch to Online Admission →
            </button>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
