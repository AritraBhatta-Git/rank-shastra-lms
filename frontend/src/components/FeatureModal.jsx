import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

export default function FeatureModal({ feature, onClose }) {
  // Close on ESC
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!feature) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

        {/* Modal Card — slides up from bottom on mobile, centered on desktop */}
        <motion.div
          key="modal-card"
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          className="relative w-full sm:max-w-2xl md:max-w-3xl sm:mx-4 rounded-t-3xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          style={{ maxHeight: '92dvh' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Enlarged Background Image — fixed height, doesn't scroll */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ opacity: 0.35 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b18] via-[#0b0b18]/75 to-[#0b0b18]/25" />
            <div
              className="absolute inset-0"
              style={{ background: `radial-gradient(ellipse at top right, ${feature.accentColor}20 0%, transparent 60%)` }}
            />
          </div>

          {/* Drag handle — mobile only */}
          <div className="sm:hidden flex justify-center pt-3 pb-1 relative z-10">
            <div className="w-10 h-1 rounded-full bg-white/25" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all"
          >
            <X size={18} />
          </button>

          {/* Scrollable Content */}
          <div
            className="relative z-10 overflow-y-auto"
            style={{ maxHeight: 'calc(92dvh - 20px)' }}
          >
            <div className="px-5 pt-4 pb-8 sm:px-8 sm:pt-6 md:px-12 md:pb-12">

              {/* Number + Tag Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-3 mb-4"
              >
                <span
                  className="text-5xl sm:text-6xl font-black opacity-20 leading-none"
                  style={{ color: feature.accentColor, fontFamily: '"Bebas Neue", sans-serif' }}
                >
                  {feature.number}
                </span>
                <span
                  className="text-[10px] sm:text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full border"
                  style={{
                    color: feature.accentColor,
                    borderColor: `${feature.accentColor}40`,
                    background: `${feature.accentColor}15`,
                  }}
                >
                  {feature.tag}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 leading-tight text-white"
              >
                {feature.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white/60 text-sm sm:text-base md:text-lg mb-6"
              >
                {feature.desc}
              </motion.p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                {feature.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.06 }}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-xl border"
                    style={{
                      background: `${feature.accentColor}08`,
                      borderColor: `${feature.accentColor}25`,
                    }}
                  >
                    <CheckCircle
                      size={16}
                      className="mt-0.5 shrink-0"
                      style={{ color: feature.accentColor }}
                    />
                    <span className="text-white/80 text-xs sm:text-sm leading-relaxed">{h}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="/register"
                  className="btn-primary py-3 px-8 text-sm sm:text-base flex items-center justify-center gap-2 w-full sm:w-auto"
                  onClick={onClose}
                >
                  ENROLL NOW <ArrowRight size={16} />
                </a>
                <button
                  onClick={onClose}
                  className="btn-secondary py-3 px-8 text-sm sm:text-base w-full sm:w-auto"
                >
                  CLOSE
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
