import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, ShieldCheck, Heart, BookOpen, Lightbulb, Quote } from 'lucide-react';
import logo from '../assets/logo.png';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-32 pb-24">

      {/* ── About The Institute ── */}
      <section className="container mx-auto px-4 mb-24 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
          <img src={logo} alt="" className="h-[400px] w-auto" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p {...fadeIn} className="text-neonGreen text-xs font-black tracking-widest uppercase mb-4">
            About The Institute
          </motion.p>
          <motion.h1 {...fadeIn} className="text-5xl md:text-7xl font-black mb-8">
            MORE THAN JUST <br />
            <span className="text-neonGreen">COACHING</span>
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-white/60 text-xl leading-relaxed mb-6">
            Rank Shastra Institute was born from a simple observation: most students have the potential, but they lack the system. We don't just teach; we engineer results through a scientific approach to learning.
          </motion.p>
          <motion.p {...fadeIn} transition={{ delay: 0.3 }} className="text-white/50 text-lg leading-relaxed">
            Founded in Barrackpore, West Bengal, Rank Shastra has grown into a premier destination for NEET aspirants and school foundation students alike. Our institute combines experienced faculty, data-driven analytics, and personalised mentorship to create an environment where every student is empowered to achieve their peak academic performance. We believe that with the right system, every aspirant can become an achiever.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark-100 py-16 border-y border-white/5 mb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Successful Alumni", value: "500+" },
              { label: "Expert Faculty", value: "25+" },
              { label: "Tests Conducted", value: "1000+" },
              { label: "Centers", value: "2" }
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-4xl font-black text-neonGreen mb-2">{stat.value}</h3>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <motion.p {...fadeIn} className="text-neonGreen text-xs font-black tracking-widest uppercase mb-3">
            Our Purpose
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-black">MISSION & <span className="text-purple-500">VISION</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div {...fadeIn} className="glass-card p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-neonGreen/10 group-hover:text-neonGreen/20 transition-colors">
              <Target size={120} />
            </div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-4">
              <Target className="text-neonGreen" size={32} /> OUR MISSION
            </h2>
            <p className="text-white/60 leading-relaxed relative z-10 text-lg">
              To provide a structured, data-driven learning environment where every student's progress is tracked, analyzed, and optimized to ensure they reach their maximum potential in competitive medical entrance exams.
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="glass-card p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-gold/10 group-hover:text-gold/20 transition-colors">
              <Eye size={120} />
            </div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-4">
              <Eye className="text-gold" size={32} /> OUR VISION
            </h2>
            <p className="text-white/60 leading-relaxed relative z-10 text-lg">
              To become the most trusted name in medical coaching by bridging the gap between classroom teaching and individual conceptual understanding through technology and personal mentorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Vision of CEO ── */}
      <section className="py-24 bg-dark-100 border-y border-white/5 mb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <motion.p {...fadeIn} className="text-gold text-xs font-black tracking-widest uppercase mb-3">
              Leadership
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-black">VISION OF <span className="text-gold">CEO</span></h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* CEO Image / Avatar */}
            <motion.div {...fadeIn} className="flex flex-col items-center lg:items-start gap-6">
              <div className="w-52 h-52 rounded-3xl overflow-hidden border-2 border-gold/30 shadow-[0_0_40px_rgba(255,215,0,0.12)] bg-white/5 flex items-center justify-center">
                <img
                  src="https://i.pravatar.cc/400?img=11"
                  alt="CEO of Rank Shastra"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Mr. Rajiv Sharma</h3>
                <p className="text-gold font-black text-sm uppercase tracking-widest mt-1">Founder & CEO</p>
                <p className="text-white/40 text-sm mt-2">M.Sc. Biology | B.Ed | 18+ Years in Education</p>
              </div>
            </motion.div>

            {/* CEO Quote / Vision */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="glass-card p-10 relative overflow-hidden">
              <Quote className="absolute top-6 right-6 text-gold/10" size={80} />
              <div className="relative z-10 space-y-5">
                <p className="text-white/70 text-lg leading-relaxed italic">
                  "At Rank Shastra, we don't just prepare students for exams — we prepare them for life. Every child who walks through our doors carries a dream, and it is our sacred responsibility to provide the right tools, the right guidance, and the right environment for that dream to flourish."
                </p>
                <p className="text-white/60 text-base leading-relaxed">
                  "My vision is simple: build a system so strong that the results speak for themselves. We combine proven teaching methodologies with modern analytics to ensure that no student is left behind. When a student succeeds, the entire community succeeds."
                </p>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Lightbulb className="text-gold" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-black text-sm">Core Philosophy</p>
                      <p className="text-gold text-xs font-bold tracking-widest uppercase">Rank Ka Science. Result Ka System.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4">
        <div className="glass-card p-12 bg-neonGreen/5 border-neonGreen/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black">OUR CORE <span className="text-neonGreen">VALUES</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Excellence", desc: "We never settle for 'good enough'. We strive for rank-breaking results." },
              { icon: Heart, title: "Empathy", desc: "We understand student stress and provide emotional & academic support." },
              { icon: Award, title: "Integrity", desc: "Honesty in results, transparency in our teaching methods." }
            ].map((v, i) => (
              <div key={i} className="text-center md:text-left">
                <v.icon className="text-neonGreen mb-6 mx-auto md:mx-0" size={40} />
                <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
