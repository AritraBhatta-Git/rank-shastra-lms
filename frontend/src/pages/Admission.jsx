import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Users, ArrowRight, Clock, X } from 'lucide-react';
import AdmissionForm from './AdmissionForm'; // Existing form ko import karenge

// Coming Soon Modal
function ComingSoonModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            className="relative glass-card p-8 max-w-sm w-full text-center z-10"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white">
              <X size={20} />
            </button>
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="text-gold" size={28} />
            </div>
            <h3 className="text-2xl font-black mb-2">Coming Soon</h3>
            <p className="text-white/60 text-sm mb-6">
              Offline application form will be available soon. Visit our center or check back later.
            </p>
            <button onClick={onClose} className="btn-primary w-full">Got It</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Admission() {
  const [showOnlineForm, setShowOnlineForm] = useState(false);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);

  // Agar online form show karna hai toh woh dikhao
  if (showOnlineForm) {
    return <AdmissionForm onBack={() => setShowOnlineForm(false)} />;
  }

  return (
    <>
      <div className="min-h-screen pt-32 pb-24 bg-[#0b0b18]">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              ADMISSION <span className="text-purple-500">2026-27</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choose your preferred mode of application. Get started with your journey to success.
            </p>
          </div>

          {/* Two Cards */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Online Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setShowOnlineForm(true)}
                className="glass-card p-8 cursor-pointer group transition-all duration-300 hover:border-purple-500/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="text-purple-500" size={32} />
                </div>
                <h2 className="text-2xl font-black mb-2">Online Application</h2>
                <p className="text-white/60 mb-4">
                  Fill the admission form online. Quick, easy, and paperless.
                </p>
                <div className="flex items-center gap-2 text-purple-500 font-bold">
                  Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>

              {/* Offline Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setShowOfflineAlert(true)}
                className="glass-card p-8 cursor-pointer group transition-all duration-300 hover:border-gold/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="text-gold" size={32} />
                </div>
                <h2 className="text-2xl font-black mb-2">Offline Application</h2>
                <p className="text-white/60 mb-4">
                  Visit our center to fill the physical application form.
                </p>
                <div className="flex items-center gap-2 text-gold font-bold">
                  <Clock size={16} /> Coming Soon
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      <ComingSoonModal isOpen={showOfflineAlert} onClose={() => setShowOfflineAlert(false)} />
    </>
  );
}