import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, LogIn, Home, Users, GraduationCap, BookOpen, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home',               path: '/',                 icon: Home },
  { name: 'About Us',           path: '/about',            icon: Users },
  { name: 'Faculty Details',    path: '/faculty',          icon: GraduationCap },
  { name: 'Courses',            path: '/courses',          icon: BookOpen },
  { name: 'Book an Appointment',path: '/book-appointment', icon: CalendarCheck },
];

export default function Navbar() {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered]  = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <>
      <style>{`
        @keyframes loginGlow {
          0%,100% { box-shadow: 0 0 8px 2px rgba(200,240,0,.4), 0 0 20px 4px rgba(200,240,0,.15); }
          50%      { box-shadow: 0 0 16px 4px rgba(200,240,0,.7), 0 0 36px 10px rgba(200,240,0,.25); }
        }
        .login-btn {
          background: linear-gradient(135deg,#c8f000,#a3cc00);
          color:#0b0b18; font-weight:900; border-radius:9999px; border:none;
          padding:.5rem 1.3rem; font-size:.82rem; letter-spacing:.06em;
          text-transform:uppercase; cursor:pointer; display:inline-flex;
          align-items:center; gap:.4rem;
          transition:transform .2s ease,opacity .2s ease;
          animation:loginGlow 2.5s ease-in-out infinite;
          white-space:nowrap; text-decoration:none;
          font-family:var(--font-family-sans,'Inter',sans-serif);
        }
        .login-btn:hover { transform:translateY(-2px); opacity:.92; }

        .nav-pill {
          position:relative; display:flex; align-items:center; gap:6px;
          padding:.45rem .9rem; border-radius:9999px;
          font-size:.78rem; font-weight:700; letter-spacing:.05em;
          text-transform:uppercase; white-space:nowrap;
          transition:color .2s ease;
          text-decoration:none;
        }
        .nav-pill .nav-icon { transition:transform .25s ease; }
        .nav-pill:hover .nav-icon { transform:translateY(-2px) scale(1.15); }

        /* active glow underline */
        .nav-active-bar {
          position:absolute; bottom:-4px; left:50%; transform:translateX(-50%);
          height:2px; width:70%; border-radius:9999px;
          background:linear-gradient(90deg,transparent,#c8f000,transparent);
          box-shadow:0 0 8px 2px rgba(200,240,0,.6);
        }

        /* hover backdrop */
        .nav-hover-bg {
          position:absolute; inset:0; border-radius:9999px;
          background:rgba(200,240,0,.07);
          border:1px solid rgba(200,240,0,.12);
          pointer-events:none;
        }

        /* mobile link */
        .mobile-nav-link {
          display:flex; align-items:center; gap:12px;
          padding:.9rem 1.6rem; border-radius:16px;
          font-size:1rem; font-weight:800; text-transform:uppercase;
          letter-spacing:.08em; width:100%;
          transition:background .2s ease, color .2s ease;
          text-decoration:none;
        }
        .mobile-nav-link.active {
          background:rgba(200,240,0,.1);
          border:1px solid rgba(200,240,0,.2);
          color:#c8f000;
        }
        .mobile-nav-link:not(.active) {
          color:rgba(255,255,255,.75);
          border:1px solid rgba(255,255,255,.05);
        }
        .mobile-nav-link:not(.active):hover {
          background:rgba(255,255,255,.05);
          color:#fff;
        }
      `}</style>

      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0b18]/95 backdrop-blur-2xl border-b border-[#c8f000]/10 py-2'
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <img src={logo} alt="Rank Shastra" className="h-10 w-10 md:h-11 md:w-11 object-cover rounded-full border border-[#c8f000]/20 group-hover:border-[#c8f000] transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-[#c8f000]/5 animate-pulse group-hover:bg-[#c8f000]/15 transition-colors" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-silver-metallic">RANK</span>
                <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-gold-metallic">SHASTRA</span>
              </div>
              <div className="flex justify-between w-full px-0.5 -mt-1">
                {['I','N','S','T','I','T','U','T','E'].map((c,i) => (
                  <span key={i} className="text-[7px] font-bold text-white/80">{c}</span>
                ))}
              </div>
              <span className="text-[6px] font-extrabold text-[#FFD700] tracking-wider uppercase mt-0.5">Rank Ka Science, Result Ka System</span>
            </div>
          </Link>

          {/* ── Desktop Nav — immersive center pill row ── */}
          <div
            className="hidden xl:flex items-center gap-1 flex-1 justify-center"
            style={{
              background: scrolled ? 'rgba(255,255,255,0.03)' : 'transparent',
              borderRadius: '9999px',
              padding: scrolled ? '4px 12px' : '0',
              border: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
              transition: 'all .3s ease',
            }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const isHov    = hovered === link.path;
              const Icon     = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="nav-pill"
                  style={{ color: isActive ? '#c8f000' : isHov ? '#fff' : 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={() => setHovered(link.path)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* hover bg */}
                  <AnimatePresence>
                    {isHov && !isActive && (
                      <motion.span
                        className="nav-hover-bg"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.18 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* icon */}
                  <Icon
                    size={13}
                    className="nav-icon"
                    style={{ color: isActive ? '#c8f000' : isHov ? '#c8f000' : 'rgba(255,255,255,0.35)' }}
                  />

                  {/* label */}
                  <span style={{ position: 'relative' }}>
                    {link.name}
                    {/* active underline glow */}
                    {isActive && (
                      <motion.span
                        className="nav-active-bar"
                        layoutId="nav-active-bar"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
            <Link to="/register" className="login-btn">
              <LogIn size={13} /> Login / Sign Up
            </Link>
            <a href="tel:+918777674274" className="btn-secondary py-2 px-5 flex items-center gap-2 text-sm">
              <Phone size={15} /> CALL US
            </a>
          </div>

          {/* ── Mobile toggle ── */}
          <div className="xl:hidden flex items-center gap-2">
            <a href="tel:+918777674274" className="text-[10px] font-bold tracking-wider px-4 py-2 rounded-full border border-[#c8f000]/60 text-[#c8f000]">
              CALL US
            </a>
            <button className="text-white ml-1 p-1" onClick={() => setIsOpen(v => !v)}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed inset-0 z-40 xl:hidden bg-[#080818]/98 backdrop-blur-2xl flex flex-col"
            >
              {/* top bar */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <img src={logo} alt="Rank Shastra" className="h-9 w-9 rounded-full border border-[#c8f000]/30" />
                  <span className="font-black text-lg uppercase tracking-tight">
                    <span className="text-white">RANK</span><span className="text-[#FFD700]">SHASTRA</span>
                  </span>
                </Link>
                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white p-1">
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 flex flex-col justify-center px-6 gap-2">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.35 }}
                    >
                      <Link
                        to={link.path}
                        className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isActive ? 'bg-[#c8f000] text-black' : 'bg-white/5 text-white/50'}`}>
                          <Icon size={17} />
                        </div>
                        {link.name}
                        {isActive && (
                          <span className="ml-auto w-2 h-2 rounded-full bg-[#c8f000] shadow-[0_0_6px_2px_rgba(200,240,0,0.6)]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* bottom actions */}
              <div className="px-6 pb-8 space-y-3 border-t border-white/5 pt-6">
                <Link to="/register" className="login-btn w-full justify-center" onClick={() => setIsOpen(false)}>
                  <LogIn size={16} /> Login / Sign Up
                </Link>
                <a href="tel:+918777674274" className="btn-secondary text-center flex items-center justify-center gap-2 w-full">
                  <Phone size={18} /> CALL US
                </a>
                <a href="https://wa.me/918777674274" className="bg-[#25D366] text-white py-3 px-8 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <MessageSquare size={18} /> WHATSAPP
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
