import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';

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

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">FREQUENTLY <br /><span className="text-neonGreen">ASKED QUESTIONS</span></h1>
          <p className="text-white/60 text-lg">Everything you need to know about our institute and admissions.</p>
          
          <div className="mt-10 relative max-w-xl mx-auto">
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

        <div className="max-w-3xl mx-auto space-y-4">
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
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${expandedIndex === idx ? 'bg-neonGreen text-black rotate-0' : 'bg-white/5 text-white'}`}>
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

        <div className="mt-20 max-w-2xl mx-auto text-center p-12 bg-neonGreen/5 rounded-[40px] border border-neonGreen/10">
          <h4 className="text-2xl font-black mb-4">STILL HAVE QUESTIONS?</h4>
          <p className="text-white/60 mb-8">If you didn't find what you were looking for, our counsellors are just a call away.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+919876543210" className="btn-secondary py-3 px-10">CALL US NOW</a>
            <a href="/contact" className="btn-primary py-3 px-10">SEND A MESSAGE</a>
          </div>
        </div>
      </div>
    </div>
  );
}
