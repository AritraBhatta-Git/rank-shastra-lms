import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Info, X, Clock } from 'lucide-react';
import AdmissionModal from '../components/AdmissionModal';
import logo from '../assets/logo.png';
import neet1112Bg from '../assets/neet-11-12-bg.jpeg';
import PaymentButton from '../components/PaymentButton';

const coursesData = [
  {
    category: 'NEET',
    batches: [
      {
        id: 'neet-dropper',
        title: 'NEET Dropper (Achiever Batch)',
        target: 'NEET 2027',
        subjects: 'Physics, Chemistry, Biology',
        boards: 'All Boards (CBSE, ISC, State Boards)',
        mode: 'Hybrid (Online + Offline)',
        price: '₹10 / year',
        features: ['Daily Practice Papers', 'Weekly Full-Length Tests', 'One-on-One Mentorship']
      },
      {
        id: 'neet-11-12',
        title: 'NEET Class 11 & 12',
        target: 'NEET 2028',
        subjects: 'Physics, Chemistry, Biology',
        boards: 'CBSE, CISCE, WBBSE',
        mode: 'Offline / Live Online',
        price: '₹35,000 / year',
        features: ['Board + NEET Integration', 'Doubt Clearing Sessions', 'Detailed Notes'],
        bgImage: neet1112Bg
      }
    ]
  },
  {
    category: 'Foundation',
    batches: [
      {
        id: 'f-9-10',
        title: 'Foundation Class 9 & 10',
        target: 'Board + Olympiads',
        subjects: 'Science, Math, English, SST',
        boards: 'CBSE, CISCE, WBBSE',
        mode: 'Offline / Live Online',
        price: '₹20,000 / year',
        features: ['NTSE Preparation', 'Olympiad Training', 'Basic NEET Concepts']
      },
      {
        id: 'f-6-8',
        title: 'Foundation Class 6 - 8',
        target: 'Conceptual Strength',
        subjects: 'Science, Math, Logical Reasoning',
        boards: 'All Boards',
        mode: 'Offline / Live Online',
        price: '₹15,000 / year',
        features: ['Learning with Visuals', 'Weekly Fun Quizzes', 'Critical Thinking']
      }
    ]
  }
];

/* ── Coming Soon Modal ─────────────────────────────────────── */
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
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            className="relative glass-card p-10 max-w-sm w-full text-center z-10 border border-neonGreen/20"
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={16} />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-neonGreen/10 border border-neonGreen/30 flex items-center justify-center mx-auto mb-6">
              <Clock className="text-neonGreen" size={28} />
            </div>

            <h3 className="text-2xl font-black text-white mb-2">COMING SOON</h3>
            <p className="text-white text-sm leading-relaxed mb-6">
              Our brochures are being finalized. Please check back shortly or contact us directly for more details.
            </p>

            <button
              onClick={onClose}
              className="btn-primary w-full"
            >
              GOT IT
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Main Courses Page ─────────────────────────────────────── */
export default function Courses() {
  const [activeTab, setActiveTab] = useState('NEET');
  const [expandedId, setExpandedId] = useState(null);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleEnroll = (e, courseTitle) => {
    e.stopPropagation();
    setSelectedCourse(courseTitle);
    setIsAdmissionOpen(true);
  };

  const handleBrochure = (e) => {
    e.stopPropagation();
    setIsComingSoonOpen(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">OUR <span className="text-purple-500">COURSES</span></h1>
          <p className="text-white text-lg">Structured learning programs designed to take you from basics to mastery.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {coursesData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              className={`px-8 py-3 rounded-full font-black tracking-widest transition-all ${activeTab === cat.category ? 'bg-neonGreen text-black shadow-neon-green' : 'bg-white/5 text-white hover:bg-white/10'}`}
            >
              {cat.category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {coursesData.find(c => c.category === activeTab)?.batches.map((batch) => (
            <div key={batch.id} className="group glass-card relative overflow-hidden transition-all duration-300 border-white/5 hover:border-neonGreen/20">
              <div
                className="absolute inset-0 transition-opacity"
                style={{ opacity: batch.bgImage ? 0.3 : 0.1 }}
              >
                <img
                  src={batch.bgImage ?? logo}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Header (click to expand) */}
              <div
                className="relative z-10 p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                onClick={() => setExpandedId(expandedId === batch.id ? null : batch.id)}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black bg-neonGreen/10 text-neonGreen px-2 py-0.5 rounded border border-neonGreen/20 uppercase tracking-tighter">{batch.target}</span>
                    <span className="text-white text-xs font-bold uppercase">{batch.mode}</span>
                  </div>
                  <h3 className="text-2xl font-black group-hover:text-neonGreen transition-colors">{batch.title}</h3>
                  <p className="text-white text-sm mt-1">{batch.subjects}</p>
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="text-right hidden md:block">
                    <p className="text-xs text-white font-bold uppercase">Starting From</p>
                    <p className="text-xl font-black text-neonGreen">{batch.price}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300 ${expandedId === batch.id ? 'rotate-180 bg-neonGreen text-black' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedId === batch.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative z-10 px-8 pb-8 pt-2 border-t border-white/5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                              <Info size={14} /> Course Details
                            </h4>
                            <p className="text-white leading-relaxed">
                              This course covers the entire NCERT syllabus with added modules for competitive exams. We focus on problem-solving techniques and time management.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-3">Boards Covered</h4>
                            <p className="text-white">{batch.boards}</p>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-3">What's Included</h4>
                            <ul className="space-y-2">
                              {batch.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2 text-white text-sm">
                                  <Check className="text-neonGreen" size={16} /> {f}
                                </li>
                              ))}
                            </ul>
                          </div>

                         {/* Action Buttons - With Payment Integration */}
<div className="pt-4 flex flex-col sm:flex-row gap-4">
  {/* Payment Button - Direct Payment */}
  <PaymentButton 
    amount={batch.price === '₹10 / year' ? 10 : batch.price === '₹35 / year' ? 35000 : batch.price === '₹20,000 / year' ? 20000 : 15000}
    buttonText="PAY & ENROLL NOW"
    onSuccess={() => {
      // Payment success ke baad enrollment form open karo
      handleEnroll({ stopPropagation: () => {} }, batch.title);
    }}
    className="btn-primary py-2 px-8 flex-1"
  />
  
  {/* Brochure Button */}
  <button
    id={`brochure-${batch.id}`}
    onClick={handleBrochure}
    className="btn-secondary py-2 px-8 flex-1"
  >
    DOWNLOAD BROCHURE
  </button>
</div> 
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Admission Modal */}
      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
        prefilledCourse={selectedCourse}
      />

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={isComingSoonOpen}
        onClose={() => setIsComingSoonOpen(false)}
      />
    </div>
  );
}
