import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Zap, MapPin, ArrowRight, Play, MessageCircle, Phone, BarChart2, Target, ClipboardList, Video, Headphones, CheckCircle } from 'lucide-react';
import FeatureModal from '../components/FeatureModal';
import heroBg from '../assets/hero-bg.png';
import strategicPlanningImg from '../assets/strategic-planning.png';
import liveRecordedImg from '../assets/live-recorded.png';
import conceptClarityImg from '../assets/concept-clarity.png';
import performanceTrackingImg from '../assets/performance-tracking.png';
import doubtSolvingImg from '../assets/doubt-solving.png';
import smartMaterialImg from '../assets/smart-material.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const navigate = useNavigate();

  const handleEnroll = (mode) => {
    sessionStorage.setItem('enrollMode', mode || 'online');
    navigate('/register');
  };

  const features = [
    {
      number: '01', tag: 'Our Strength',
      title: 'Expert Faculty & Personal Mentorship',
      desc: 'Learn from experienced educators with proven NEET results — and get one-on-one guidance tailored to you.',
      icon: Users, image: conceptClarityImg, accentColor: '#c8f000',
      highlights: [
        'IIT/AIIMS alumni faculty with 10+ years teaching experience',
        'Dedicated personal mentor assigned to each student',
        'Weekly 1-on-1 progress check-ins',
        'Customised feedback on strengths and weak areas',
        'Motivational counselling to keep momentum high',
        'Parent update sessions every month',
      ],
    },
    {
      number: '02', tag: 'Analytics',
      title: 'Performance Tracking',
      desc: 'Deep-dive analytics after every test to pinpoint exactly where you lose marks and how to fix it.',
      icon: BarChart2, image: performanceTrackingImg, accentColor: '#a78bfa',
      highlights: [
        'Chapter-wise accuracy and speed reports',
        'Rank comparison among batch peers',
        'Error pattern analysis across all subjects',
        'Monthly performance scorecards',
        'Graphical progress charts for easy review',
        'Instant test result with detailed solutions',
      ],
    },
    {
      number: '03', tag: 'Study Plan',
      title: 'Strategic Planning',
      desc: 'Structured study roadmaps aligned with NEET syllabus — no guesswork, just a system that works.',
      icon: Target, image: strategicPlanningImg, accentColor: '#f59e0b',
      highlights: [
        'Day-wise personalised study timetable',
        'Prioritised high-weightage chapter coverage',
        'Revision cycles built into the plan',
        'NEET exam-pattern aligned scheduling',
        'Holiday & buffer weeks factored in',
        'Adaptive plan adjustment based on test scores',
      ],
    },
    {
      number: '04', tag: 'Evaluation',
      title: 'Regular Test & Analysis',
      desc: 'Frequent mock tests under real NEET conditions to build speed, accuracy and exam-day confidence.',
      icon: ClipboardList, image: smartMaterialImg, accentColor: '#34d399',
      highlights: [
        'Weekly chapter tests and monthly full syllabus mocks',
        'Strict NEET NTA exam pattern followed',
        'OMR-based practice for accuracy training',
        'Time management drills built into every test',
        'Detailed post-test solution discussion sessions',
        'All-India rank simulator after each mock',
      ],
    },
    {
      number: '05', tag: 'Flexible Learning',
      title: 'Live + Recorded Classes',
      desc: 'Attend classes live or catch up anytime with recorded sessions — learn at your pace, never miss a concept.',
      icon: Video, image: liveRecordedImg, accentColor: '#38bdf8',
      highlights: [
        'HD live interactive classes with real-time Q&A',
        'All sessions recorded and available 24/7',
        'Downloadable notes with every lecture',
        'Smart bookmarking of important concepts',
        'Multi-device access — phone, tablet, laptop',
        'Offline download option for uninterrupted study',
      ],
    },
    {
      number: '06', tag: 'Always Available',
      title: '24/7 Doubt Support',
      desc: 'Your questions never wait. Get doubts resolved anytime through our dedicated doubt-solving platform.',
      icon: Headphones, image: doubtSolvingImg, accentColor: '#fb7185',
      highlights: [
        'Round-the-clock doubt chat with expert tutors',
        'Average response time under 5 minutes',
        'Topic-specific doubt sessions every evening',
        'Weekend intensive doubt-clearing workshops',
        'Peer doubt community for collaborative learning',
        'Recorded doubt sessions available for revision',
      ],
    },
  ];

  const whatWeOffer = [
    { icon: BookOpen, title: 'NEET Coaching', desc: 'Intensive coaching for Class 11, 12 & Droppers with focus on high-yield topics and exam strategies.', color: '#c8f000' },
    { icon: Users, title: 'Foundation Program', desc: 'Strong basics for Class 6–10 to prepare students for future competitive exams.', color: '#a78bfa' },
    { icon: Video, title: 'Live & Recorded Classes', desc: 'Hybrid learning with HD live sessions and 24/7 recorded lecture access on all devices.', color: '#38bdf8' },
    { icon: ClipboardList, title: 'Test Series & Analysis', desc: 'Regular mock tests with detailed performance analytics and rank simulation.', color: '#f59e0b' },
    { icon: Target, title: 'Personal Mentorship', desc: 'Dedicated mentor for every student with weekly check-ins and customised feedback.', color: '#34d399' },
    { icon: Headphones, title: 'Doubt Solving Support', desc: 'Round-the-clock doubt resolution with expert tutors responding in under 5 minutes.', color: '#fb7185' },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-x-hidden">

      {/* ── 1. HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(124,58,237,0.18) 0%, transparent 65%)' }} />
        </div>
        <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full overflow-hidden">
          <img src={heroBg} alt="Rank Shastra" className="w-full h-full object-cover object-center" style={{ opacity: 0.92, filter: 'brightness(1.05) contrast(1.05) saturate(1.1)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0b0b18 0%, rgba(11,11,24,0.55) 35%, transparent 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0b0b18 0%, transparent 40%)' }} />
        </div>

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/4 right-1/3 z-20 text-neonGreen/30 hidden lg:block">
          <Zap size={60} />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }} className="absolute bottom-1/4 right-1/4 z-20 text-gold/20 hidden lg:block">
          <BookOpen size={80} />
        </motion.div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-7xl md:text-8xl lg:text-[10rem] mb-8 leading-[0.9] tracking-tight hero-main-title">
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="hero-admission block">
                  ADMISSION
                </motion.span>
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }} className="hero-open py-2">
                  OPEN NOW!
                </motion.span>
              </h1>
              <motion.div className="mb-8 flex justify-center lg:justify-start" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
                <span className="hero-tagline-brush">Crack NEET. Own Your Future.</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                <button
                  onClick={() => handleEnroll('online')}
                  className="btn-primary px-12 lg:px-16 text-lg"
                  style={{ background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)', boxShadow: '0 0 24px 4px rgba(220,38,38,0.45)' }}
                >
                  Enroll Now
                </button>
                <Link to="/book-appointment" className="btn-secondary px-10 text-lg flex items-center justify-center gap-2">
                  Book a Free Demo
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT MAKES US DIFFERENT (big heading) ── */}
      <section className="pt-20 pb-4 text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight"
          >
            What Makes Us <span className="text-neonGreen">Different</span>
          </motion.h2>
        </div>
      </section>

      {/* ── 3. HIGHLIGHTS ROW ── */}
      <section className="py-12 bg-dark-200 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, text: 'Ncert based concept Clarity' },
              { icon: Users, text: 'EXPERT FACULTY' },
              { icon: Zap, text: 'REGULAR TESTS' },
              { icon: Trophy, text: 'PERSONAL MENTORSHIP' },
            ].map((item, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neonGreen group-hover:bg-neonGreen group-hover:text-black transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <span className="font-bold text-sm md:text-lg tracking-wider">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. RANK KA SCIENCE / RESULT KA SYSTEM + Features 01–06 ── */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              RANK KA <span className="text-purple-500">SCIENCE</span>.<br />
              RESULT KA <span className="text-gold">SYSTEM</span>.
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our proven methodology focuses on strategic planning and conceptual clarity to ensure every student hits their peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  onClick={() => setSelectedFeature(item)}
                  className="glass-card group cursor-pointer relative overflow-hidden flex flex-col justify-end"
                  style={{ border: `1px solid ${item.accentColor}25`, minHeight: '220px' }}
                >
                  <div className="absolute inset-0 z-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ opacity: 0.32 }} />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, #0b0b18 35%, ${item.accentColor}10 100%)` }} />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(ellipse at top left, ${item.accentColor}18 0%, transparent 60%)` }} />
                  </div>
                  <div className="relative z-10 p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl sm:text-4xl font-black opacity-25 leading-none" style={{ color: item.accentColor, fontFamily: '"Bebas Neue", sans-serif' }}>{item.number}</span>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: `${item.accentColor}18`, color: item.accentColor }}>
                        <Icon size={18} />
                      </div>
                    </div>
                    <span className="text-[9px] font-black tracking-widest uppercase mb-1 block" style={{ color: `${item.accentColor}99` }}>{item.tag}</span>
                    <h3 className="text-base sm:text-lg font-black mb-1 leading-tight text-white">{item.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed line-clamp-2 mb-3">{item.desc}</p>
                    <div className="flex items-center gap-1 text-xs font-bold tracking-wider sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" style={{ color: item.accentColor }}>
                      TAP TO EXPLORE <ArrowRight size={11} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to right, transparent, ${item.accentColor}, transparent)` }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. WHAT WE OFFER ── */}
      <section className="py-24 bg-dark-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.p {...fadeIn} className="text-neonGreen text-xs font-black tracking-widest uppercase mb-3">Programs & Services</motion.p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">WHAT WE <span className="text-purple-500">OFFER</span></h2>
            <p className="text-white/60 max-w-xl mx-auto">Everything a serious aspirant needs — under one roof.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeOffer.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="glass-card p-8 group transition-all duration-300"
                  style={{ border: `1px solid ${item.color}20` }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: `${item.color}15`, color: item.color }}>
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-black mb-2 text-white">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-4 flex items-center gap-2" style={{ color: item.color }}>
                    <CheckCircle size={14} />
                    <span className="text-xs font-bold tracking-wider uppercase">Available Now</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. OFFLINE BATCHES STARTING BANNER ── */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-neonGreen/20 animate-pulse" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-black text-purple-500 uppercase tracking-tighter">
              OFFLINE BATCHES STARTING <span className="text-neonGreen underline decoration-2 underline-offset-8">SOON</span>
            </h2>
            <button onClick={() => handleEnroll('offline')} className="bg-white text-black font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* ── 7. LEARN YOUR WAY + MAP ── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-black mb-8">LEARN YOUR <span className="text-purple-500">WAY</span></h2>
              <div className="space-y-6">
                {[
                  { title: 'Offline Center', desc: 'Visit our state-of-the-art center in Barrackpore for face-to-face interaction.', icon: MapPin },
                  { title: 'Live Online', desc: 'Real-time interactive classes from the comfort of your home.', icon: Play },
                  { title: 'Recorded Sessions', desc: 'Access high-quality recorded lectures for flexible learning pace.', icon: Users },
                ].map((mode, idx) => (
                  <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-neonGreen/10 flex items-center justify-center text-neonGreen shrink-0">
                      <mode.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{mode.title}</h4>
                      <p className="text-white/50 text-sm">{mode.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="rounded-3xl overflow-hidden aspect-video relative border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58850.1585891395!2d88.32832960662287!3d22.760233405445255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f890f576e9f1f1%3A0x7d6f5877c449d01b!2sBarrackpore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1714220000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neonGreen/10 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              LIMITED SEATS.<br /><span className="text-neonGreen">MAXIMUM IMPACT.</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Don't wait for the right time. The time is now. Join the institute that turns aspirants into achievers.
            </p>
            <div className="flex justify-center gap-4">
              <a href="tel:+918777674274" className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neonGreen hover:text-black transition-all">
                <Phone size={24} />
              </a>
              <a href="https://wa.me/918777674274" className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all">
                <MessageCircle size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {selectedFeature && <FeatureModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />}
    </div>
  );
}
