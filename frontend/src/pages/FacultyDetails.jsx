import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, Award, Star, ChevronRight } from 'lucide-react';

const facultyData = [
  {
    name: 'Dr. Suresh Mukherjee',
    designation: 'Senior Biology Faculty & HOD',
    qualification: 'MBBS, M.Sc. (Zoology), Ph.D. in Life Sciences',
    assignedClasses: ['NEET Dropper Batch', 'Class 11 & 12 (Biology)'],
    experience: '15+ Years',
    img: 'https://i.pravatar.cc/300?img=1',
    accentColor: '#c8f000',
    speciality: 'Human Physiology & Genetics',
    achievements: ['NEET Top Ranker Mentor 2022–2024', '500+ Students Qualified NEET', 'Author of NEET Biology Digest'],
  },
  {
    name: 'Prof. Ramesh Kumar Singh',
    designation: 'Physics HOD & Senior Lecturer',
    qualification: 'M.Sc. Physics (Gold Medalist), B.Ed',
    assignedClasses: ['NEET Dropper Batch', 'Class 11 & 12 (Physics)', 'Foundation 9 & 10'],
    experience: '12+ Years',
    img: 'https://i.pravatar.cc/300?img=2',
    accentColor: '#a78bfa',
    speciality: 'Mechanics & Modern Physics',
    achievements: ['IIT-JEE Qualified Mentor', '300+ NEET Physics 160+ Scorers', 'Best Faculty Award 2023'],
  },
  {
    name: 'Dr. Anjali Verma',
    designation: 'Chemistry Expert & Career Counselor',
    qualification: 'M.Sc. Chemistry, Ph.D. Organic Chemistry',
    assignedClasses: ['NEET Dropper Batch', 'Class 11 & 12 (Chemistry)'],
    experience: '10+ Years',
    img: 'https://i.pravatar.cc/300?img=3',
    accentColor: '#f59e0b',
    speciality: 'Organic Chemistry & Reaction Mechanisms',
    achievements: ['Published 3 Research Papers', '200+ NEET Chemistry High Scorers', 'Career Counselor Certified'],
  },
  {
    name: 'Mr. Arindra Bose',
    designation: 'Mathematics & Foundation Faculty',
    qualification: 'M.Sc. Mathematics, B.Ed',
    assignedClasses: ['Foundation Class 6–10', 'Scholarship Test Prep'],
    experience: '8+ Years',
    img: 'https://i.pravatar.cc/300?img=4',
    accentColor: '#34d399',
    speciality: 'Algebra, Geometry & Olympiad Prep',
    achievements: ['State Math Olympiad Coach', '150+ Scholarship Winners', 'NTSE Mentor'],
  },
  {
    name: 'Ms. Priya Dutta',
    designation: 'Biology & Science Foundation Faculty',
    qualification: 'M.Sc. Botany, B.Ed',
    assignedClasses: ['Foundation Class 6–10', 'Class 11 Science'],
    experience: '6+ Years',
    img: 'https://i.pravatar.cc/300?img=5',
    accentColor: '#38bdf8',
    speciality: 'Plant Biology & Ecology',
    achievements: ['Best Science Teacher Award 2022', '100+ NEET Aspiring Students Mentored'],
  },
  {
    name: 'Mr. Saurav Ghosh',
    designation: 'English & Communication Trainer',
    qualification: 'M.A. English Literature, CELTA Certified',
    assignedClasses: ['Foundation Class 6–10', 'Communication Skills – All Batches'],
    experience: '7+ Years',
    img: 'https://i.pravatar.cc/300?img=6',
    accentColor: '#fb7185',
    speciality: 'Communication, Writing & Soft Skills',
    achievements: ['IELTS 8.5 Band Achiever', 'Trained 400+ Students in Communication'],
  },
];

export default function FacultyDetails() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-20 text-center">
        <motion.p {...fadeIn} className="text-neonGreen text-xs font-black tracking-widest uppercase mb-4">
          Meet The Team
        </motion.p>
        <motion.h1 {...fadeIn} className="text-5xl md:text-7xl font-black mb-6">
          OUR EXPERT <span className="text-neonGreen">FACULTY</span>
        </motion.h1>
        <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
          The brilliant minds behind Rank Ka Science — dedicated educators who have transformed thousands of aspirants into achievers.
        </motion.p>
      </section>

      {/* Faculty Cards */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {facultyData.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card overflow-hidden group"
              style={{ border: `1px solid ${f.accentColor}20` }}
            >
              {/* Top image strip */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  style={{ objectPosition: 'center top' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, #0b0b18 0%, ${f.accentColor}15 100%)` }}
                />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: `${f.accentColor}22`, color: f.accentColor, border: `1px solid ${f.accentColor}40` }}
                  >
                    {f.experience} Experience
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-black text-white mb-1">{f.name}</h3>
                <p className="font-bold text-sm mb-1" style={{ color: f.accentColor }}>{f.designation}</p>

                {/* Details Table */}
                <div className="mt-5 space-y-3">
                  <div className="flex gap-3 items-start">
                    <GraduationCap size={16} className="text-white/30 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-0.5">Qualification</p>
                      <p className="text-white/80 text-sm">{f.qualification}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <BookOpen size={16} className="text-white/30 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-0.5">Speciality</p>
                      <p className="text-white/80 text-sm">{f.speciality}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Users size={16} className="text-white/30 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-1">Assigned Classes</p>
                      <div className="flex flex-wrap gap-2">
                        {f.assignedClasses.map((cls, ci) => (
                          <span
                            key={ci}
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ background: `${f.accentColor}15`, color: f.accentColor, border: `1px solid ${f.accentColor}30` }}
                          >
                            {cls}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mt-5 pt-5 border-t border-white/5">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                    <Star size={12} style={{ color: f.accentColor }} /> Key Achievements
                  </p>
                  <ul className="space-y-2">
                    {f.achievements.map((ach, ai) => (
                      <li key={ai} className="flex items-start gap-2 text-white/60 text-xs">
                        <ChevronRight size={12} className="mt-0.5 shrink-0" style={{ color: f.accentColor }} />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom glow line */}
              <div
                className="h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, transparent, ${f.accentColor}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mt-24">
        <div className="glass-card p-12 text-center bg-neonGreen/5 border-neonGreen/10">
          <Award className="text-neonGreen mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-black mb-4">LEARN FROM THE <span className="text-neonGreen">BEST</span></h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Our faculty brings a combined experience of 58+ years in competitive exam coaching. Join us and experience the difference.</p>
          <a href="/book-appointment" className="btn-primary px-12 inline-block">Book an Appointment</a>
        </div>
      </section>
    </div>
  );
}
