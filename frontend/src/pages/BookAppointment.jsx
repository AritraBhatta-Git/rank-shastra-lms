import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Plus, Minus, Search, CalendarCheck } from 'lucide-react';
import { useForm } from 'react-hook-form';

const faqData = [
  {
    question: "What is Rank Shastra's 'Rank Ka Science' methodology?",
    answer: "It is a data-driven approach where we analyze every student's performance across multiple parameters. We don't just teach the syllabus; we teach problem-solving strategies, time management, and conceptual depth required for competitive exams."
  },
  {
    question: "Do you provide online and offline classes both?",
    answer: "Yes, we offer a hybrid model. Students can attend physical classes at our Barrackpore center, join live online interactive sessions, or access high-quality recorded lectures based on their preference and location."
  },
  {
    question: "What is the fee structure for NEET dropper batch?",
    answer: "Our fee structure is competitive and varies based on the scholarship you might be eligible for. Generally, it's around ₹45,000 per year which includes all study materials, test series, and mentorship."
  },
  {
    question: "How do you handle doubt solving?",
    answer: "We have dedicated doubt-solving sessions after every class. Additionally, students can post their doubts on our student portal or WhatsApp group, where our faculty provides solutions within 24 hours."
  },
  {
    question: "Are there any scholarship tests?",
    answer: "Yes, we conduct the 'Rank Shastra Entrance & Scholarship Test' (RSEST) periodically. Top performers can get up to 100% scholarship on tuition fees."
  },
  {
    question: "What is the batch size at the center?",
    answer: "To ensure personal attention, we keep our batch sizes small, typically between 30 to 40 students per batch."
  },
  {
    question: "Can parents track the student's progress?",
    answer: "Absolutely. We have a dedicated parent-teacher portal where you can see test scores, attendance records, and faculty feedback updated weekly."
  }
];

export default function BookAppointment() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onSubmit = (data) => {
    console.log('Appointment request:', data);
    alert('Appointment request sent! We will confirm your slot within 24 hours.');
    reset();
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.p {...fadeIn} className="text-neonGreen text-xs font-black tracking-widest uppercase mb-4">
            We're Here To Help
          </motion.p>
          <motion.h1 {...fadeIn} className="text-5xl md:text-7xl font-black mb-6">
            BOOK AN <span className="text-neonGreen">APPOINTMENT</span>
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-white/60 text-lg">
            Have questions about admissions, courses, or fees? Schedule a one-on-one session with our counsellors — we're here to guide you every step of the way.
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <motion.div {...fadeIn} className="glass-card p-8 group hover:border-neonGreen/30 transition-all">
            <div className="w-12 h-12 rounded-full bg-neonGreen/10 flex items-center justify-center text-neonGreen mb-6 group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Call Us</h4>
            <p className="text-white/50 text-sm mb-4">Talk to our career expert.</p>
            <a href="tel:+918777674274" className="text-white font-bold hover:text-neonGreen transition-colors">+91 87776 74274</a>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="glass-card p-8 group hover:border-neonGreen/30 transition-all">
            <div className="w-12 h-12 rounded-full bg-neonGreen/10 flex items-center justify-center text-neonGreen mb-6 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Email Us</h4>
            <p className="text-white/50 text-sm mb-4">Send us your queries.</p>
            <a href="mailto:info@rankshastra.com" className="text-white font-bold hover:text-neonGreen transition-colors">info@rankshastra.com</a>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="glass-card p-8 group hover:border-neonGreen/30 transition-all">
            <div className="w-12 h-12 rounded-full bg-neonGreen/10 flex items-center justify-center text-neonGreen mb-6 group-hover:scale-110 transition-transform">
              <MapPin size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Visit Us</h4>
            <p className="text-white/50 text-sm mb-4">Our center location.</p>
            <p className="text-white font-bold">Barrackpore, Kolkata, WB</p>
          </motion.div>
        </div>

        {/* Appointment Form + Office Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2">
            <div className="glass-card p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-neonGreen/10 flex items-center justify-center text-neonGreen">
                  <CalendarCheck size={24} />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">Book Your <span className="text-neonGreen">Slot</span></h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-white/40 uppercase tracking-widest">Full Name</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-neonGreen outline-none transition-all text-white"
                      placeholder="Your Full Name"
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-white/40 uppercase tracking-widest">Phone Number</label>
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-neonGreen outline-none transition-all text-white"
                      placeholder="+91 00000 00000"
                    />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-white/40 uppercase tracking-widest">Email Address</label>
                    <input
                      {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-neonGreen outline-none transition-all text-white"
                      placeholder="you@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-white/40 uppercase tracking-widest">Course Interest</label>
                    <select
                      {...register('course')}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-neonGreen outline-none transition-all appearance-none text-white"
                    >
                      <option value="NEET Dropper Batch" className="bg-dark-100">NEET Dropper Batch</option>
                      <option value="NEET Class 11 & 12" className="bg-dark-100">NEET Class 11 & 12</option>
                      <option value="Foundation 9 & 10" className="bg-dark-100">Foundation Class 9 & 10</option>
                      <option value="Foundation 6-8" className="bg-dark-100">Foundation Class 6–8</option>
                      <option value="General Enquiry" className="bg-dark-100">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-white/40 uppercase tracking-widest">Preferred Date & Time</label>
                  <input
                    type="datetime-local"
                    {...register('datetime', { required: 'Please select a preferred time' })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-neonGreen outline-none transition-all text-white"
                  />
                  {errors.datetime && <span className="text-red-500 text-xs">{errors.datetime.message}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-white/40 uppercase tracking-widest">Your Message / Query</label>
                  <textarea
                    {...register('message')}
                    rows="4"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-neonGreen outline-none transition-all resize-none text-white"
                    placeholder="Briefly describe what you'd like to discuss..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto px-12 flex items-center justify-center gap-3">
                  BOOK APPOINTMENT <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Office Hours + Map */}
          <div className="flex flex-col gap-8">
            <div className="glass-card p-10 flex flex-col justify-center border-neonGreen/20">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-neonGreen" size={24} />
                <h3 className="text-2xl font-black">OFFICE HOURS</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Monday – Friday</span>
                  <span className="font-bold">10:00 AM – 07:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Saturday</span>
                  <span className="font-bold">10:00 AM – 05:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white/60">Sunday</span>
                  <span className="text-neonGreen font-bold">Closed</span>
                </li>
              </ul>
              <div className="mt-8 p-6 bg-neonGreen/5 rounded-2xl border border-neonGreen/10">
                <p className="text-sm text-white/70 italic">"For urgent queries on Sundays, please contact us on WhatsApp."</p>
                <a href="https://wa.me/918777674274" className="flex items-center gap-2 text-neonGreen font-black mt-3 hover:gap-4 transition-all">
                  WHATSAPP NOW <MessageSquare size={18} />
                </a>
              </div>
            </div>

            <div className="h-[220px] rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58850.1585891395!2d88.32832960662287!3d22.760233405445255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f890f576e9f1f1%3A0x7d6f5877c449d01b!2sBarrackpore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1714220000000!5m2!1sen!2sin"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* ── FAQ Section ── */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.p {...fadeIn} className="text-neonGreen text-xs font-black tracking-widest uppercase mb-3">
              Got Questions?
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
              FREQUENTLY <br /><span className="text-neonGreen">ASKED QUESTIONS</span>
            </h2>
            <p className="text-white/60">Everything you need to know about our institute and admissions.</p>

            <div className="mt-8 relative max-w-xl mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={20} />
              <input
                type="text"
                placeholder="Search for a question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 focus:border-neonGreen outline-none transition-all text-white placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="glass-card overflow-hidden border-white/5">
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left gap-6 group"
                  >
                    <h3 className={`text-lg md:text-xl font-bold transition-colors ${expandedIndex === idx ? 'text-neonGreen' : 'text-white'}`}>
                      {faq.question}
                    </h3>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${expandedIndex === idx ? 'bg-neonGreen text-black' : 'bg-white/5 text-white'}`}>
                      {expandedIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-2 text-white/50 leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                <p className="text-white/40">No matching questions found. Please contact us directly!</p>
              </div>
            )}
          </div>

          <div className="mt-16 text-center p-12 bg-neonGreen/5 rounded-[40px] border border-neonGreen/10">
            <h4 className="text-2xl font-black mb-4">STILL HAVE QUESTIONS?</h4>
            <p className="text-white/60 mb-8">Our counsellors are just a call away. Book your slot today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+918777674274" className="btn-secondary py-3 px-10">CALL US NOW</a>
              <a href="https://wa.me/918777674274" className="bg-[#25D366] text-white py-3 px-10 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <MessageSquare size={18} /> WHATSAPP
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
