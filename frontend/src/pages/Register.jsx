import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Phone, Mail, BookOpen, GraduationCap, ChevronDown, Zap, CheckCircle, Camera, LogIn } from 'lucide-react';

const courses = [
  'NEET Dropper Batch',
  'NEET Class 12',
  'NEET Class 11',
  'Foundation Class 9 & 10',
  'Foundation Class 6 - 8',
];

const modes = ['Offline', 'Live Online', 'Recorded'];

export default function Register() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [enrollMode, setEnrollMode] = useState('online');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    classLevel: '',
    mode: '',
    message: '',
  });

  useEffect(() => {
    const stored = sessionStorage.getItem('enrollMode');
    if (stored) setEnrollMode(stored);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProfilePic = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // After short delay, redirect to the appropriate admission form
    setTimeout(() => {
      const dest = enrollMode === 'offline' ? '/admission/offline' : '/admission/online';
      sessionStorage.removeItem('enrollMode');
      navigate(dest);
    }, 2500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(200,240,0,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block py-1 px-4 bg-neonGreen/10 text-neonGreen border border-neonGreen/20 rounded-full text-xs font-black tracking-widest uppercase mb-5">
            Admissions Open 2026–27
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
            CREATE YOUR <span className="text-neonGreen">ACCOUNT</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Take the first step towards your medical dream. Fill in your details and our team will get in touch.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-16 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-neonGreen/10 flex items-center justify-center mx-auto mb-8"
              >
                <CheckCircle className="text-neonGreen" size={40} />
              </motion.div>
              <h2 className="text-4xl font-black mb-4 text-neonGreen">ACCOUNT CREATED!</h2>
              <p className="text-white/60 text-lg mb-2">
                Welcome, <span className="text-white font-bold">{form.name || 'Student'}</span>!
              </p>
              <p className="text-white/50">Redirecting you to your admission form…</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-12 space-y-6"
            >
              {/* Profile Picture Upload — centered in the middle */}
              <div className="flex flex-col items-center gap-3 py-4">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="relative w-28 h-28 rounded-full cursor-pointer group"
                  style={{ border: '2px dashed rgba(200,240,0,0.4)', background: 'rgba(255,255,255,0.03)' }}
                >
                  {profilePreview ? (
                    <img src={profilePreview} alt="Profile" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <div className="w-full h-full rounded-full flex flex-col items-center justify-center gap-1">
                      <Camera size={28} className="text-neonGreen/60 group-hover:text-neonGreen transition-colors" />
                      <span className="text-[10px] text-white/30 font-bold uppercase tracking-wider">Upload</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-neonGreen flex items-center justify-center shadow-lg">
                    <Camera size={14} className="text-black" />
                  </div>
                </div>
                <p className="text-white/30 text-xs">Click to upload profile picture</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePic}
                  className="hidden"
                />
              </div>

              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/70 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <User size={14} className="text-neonGreen" /> Full Name *
                  </label>
                  <input
                    id="reg-name" type="text" name="name" value={form.name}
                    onChange={handleChange} required placeholder="Your full name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-neonGreen/60 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/70 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <Phone size={14} className="text-neonGreen" /> Phone Number *
                  </label>
                  <input
                    id="reg-phone" type="tel" name="phone" value={form.phone}
                    onChange={handleChange} required placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-neonGreen/60 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-white/70 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  <Mail size={14} className="text-neonGreen" /> Email Address
                </label>
                <input
                  id="reg-email" type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="your@email.com (optional)"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-neonGreen/60 transition-all"
                />
              </div>

              {/* Course + Class */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/70 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <BookOpen size={14} className="text-neonGreen" /> Interested Course *
                  </label>
                  <div className="relative">
                    <select
                      id="reg-course" name="course" value={form.course}
                      onChange={handleChange} required
                      className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonGreen/60 transition-all cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#0b0b18]">Select a course</option>
                      {courses.map((c) => (
                        <option key={c} value={c} className="bg-[#0b0b18]">{c}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/70 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap size={14} className="text-neonGreen" /> Current Class
                  </label>
                  <input
                    id="reg-class" type="text" name="classLevel" value={form.classLevel}
                    onChange={handleChange} placeholder="e.g. Class 11 / Dropper"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-neonGreen/60 transition-all"
                  />
                </div>
              </div>

              {/* Mode */}
              <div className="space-y-3">
                <label className="text-white/70 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  <Zap size={14} className="text-neonGreen" /> Preferred Mode *
                </label>
                <div className="flex flex-wrap gap-3">
                  {modes.map((m) => (
                    <button
                      key={m} type="button"
                      onClick={() => setForm({ ...form, mode: m })}
                      className={`px-5 py-2 rounded-full border text-sm font-bold transition-all duration-200 ${form.mode === m ? 'bg-neonGreen text-black border-neonGreen' : 'bg-white/5 border-white/15 text-white/70 hover:border-neonGreen/50 hover:text-white'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-white/70 text-sm font-bold uppercase tracking-wider">
                  Any Message (optional)
                </label>
                <textarea
                  id="reg-message" name="message" value={form.message}
                  onChange={handleChange} rows={3}
                  placeholder="Any questions or special requirements..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-neonGreen/60 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                id="reg-submit" type="submit"
                className="btn-primary w-full py-4 text-lg mt-2 hover:scale-[1.02]"
              >
                Create My Account →
              </button>

              {/* Already have an account */}
              <div className="text-center pt-2">
                <p className="text-white/30 text-sm">
                  Already have an account?{' '}
                  <a
                    href="#"
                    className="text-neonGreen font-bold hover:underline inline-flex items-center gap-1"
                    onClick={(e) => { e.preventDefault(); /* TODO: link to login */ }}
                  >
                    <LogIn size={14} /> Login
                  </a>
                </p>
              </div>

              <p className="text-white/30 text-xs text-center">
                By submitting, you agree to be contacted by our admissions team. No spam, ever.
              </p>
            </motion.form>
          )}

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 mt-8 text-center"
          >
            {[
              { label: 'Expert Faculty', val: '10+' },
              { label: 'Students Enrolled', val: '500+' },
              { label: 'Success Rate', val: '95%' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-5">
                <div className="text-neonGreen text-2xl font-black">{stat.val}</div>
                <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
