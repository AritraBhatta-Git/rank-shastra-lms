import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function AdmissionModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleChoice = (mode) => {
    sessionStorage.setItem('enrollMode', mode);
    onClose();
    navigate('/register');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-dark-100 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <button onClick={onClose} className="absolute top-5 right-5 text-white/40 hover:text-white z-10">
            <X size={22} />
          </button>

          <div className="p-8 md:p-10 text-center">
            <img src={logo} alt="Logo" className="h-12 w-auto mx-auto mb-5" />
            <h2 className="text-2xl md:text-3xl font-black mb-2 uppercase">
              Join <span className="text-neonGreen">Rank Shastra</span>
            </h2>
            <p className="text-white/50 text-sm mb-8">
              Choose how you'd like to enroll. You'll create your account first, then complete the admission form.
            </p>

            <div className="space-y-4">
              {/* Online Option */}
              <button
                onClick={() => handleChoice('online')}
                className="w-full flex items-center gap-4 p-5 rounded-2xl border border-white/10 hover:border-purple-500/60 transition-all group"
                style={{ background: 'rgba(124,58,237,0.06)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(124,58,237,0.2)' }}>
                  <Globe size={22} className="text-purple-400" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-black text-white text-base">Online Admission</p>
                  <p className="text-white/40 text-xs mt-0.5">Apply instantly from anywhere</p>
                </div>
                <ArrowRight size={18} className="text-white/30 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </button>

              {/* Offline Option */}
              <button
                onClick={() => handleChoice('offline')}
                className="w-full flex items-center gap-4 p-5 rounded-2xl border border-white/10 hover:border-yellow-400/60 transition-all group"
                style={{ background: 'rgba(255,215,0,0.04)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,215,0,0.15)' }}>
                  <MapPin size={22} className="text-yellow-400" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-black text-white text-base">Offline Admission</p>
                  <p className="text-white/40 text-xs mt-0.5">Visit our center in person</p>
                </div>
                <ArrowRight size={18} className="text-white/30 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
              </button>
            </div>

            <p className="text-white/20 text-xs mt-6">
              You'll be asked to create an account before completing the form.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
