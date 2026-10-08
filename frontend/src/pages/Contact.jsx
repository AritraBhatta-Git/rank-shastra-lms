import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Contact form:', data);
    alert('Message sent successfully! We will get back to you soon.');
    reset();
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">GET IN <span className="text-neonGreen">TOUCH</span></h1>
          <p className="text-white/60 text-lg">Have questions? We're here to help you navigate your medical career path.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="glass-card p-8 group hover:border-neonGreen/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-neonGreen/10 flex items-center justify-center text-neonGreen mb-6 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Call Us</h4>
              <p className="text-white/50 text-sm mb-4">Talk to our career expert.</p>
              <a href="tel:+919876543210" className="text-white font-bold hover:text-neonGreen transition-colors">+91 98765 43210</a>
            </div>

            <div className="glass-card p-8 group hover:border-neonGreen/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-neonGreen/10 flex items-center justify-center text-neonGreen mb-6 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Email Us</h4>
              <p className="text-white/50 text-sm mb-4">Send us your queries.</p>
              <a href="mailto:info@rankshastra.com" className="text-white font-bold hover:text-neonGreen transition-colors">info@rankshastra.com</a>
            </div>

            <div className="glass-card p-8 group hover:border-neonGreen/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-neonGreen/10 flex items-center justify-center text-neonGreen mb-6 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Visit Us</h4>
              <p className="text-white/50 text-sm mb-4">Our center location.</p>
              <p className="text-white font-bold">Barrackpore, Kolkata, WB</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Send a <span className="text-neonGreen">Message</span></h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-white/40 uppercase tracking-widest">Full Name</label>
                    <input 
                      {...register('name', { required: 'Name is required' })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-neonGreen outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-white/40 uppercase tracking-widest">Email Address</label>
                    <input 
                      {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-neonGreen outline-none transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-white/40 uppercase tracking-widest">Subject</label>
                  <select 
                    {...register('subject')}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-neonGreen outline-none transition-all appearance-none"
                  >
                    <option value="Admission Query" className="bg-dark-100">Admission Query</option>
                    <option value="Course Information" className="bg-dark-100">Course Information</option>
                    <option value="Technical Support" className="bg-dark-100">Technical Support</option>
                    <option value="Other" className="bg-dark-100">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-white/40 uppercase tracking-widest">Message</label>
                  <textarea 
                    {...register('message', { required: 'Message is required' })}
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-neonGreen outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto px-12 flex items-center justify-center gap-3">
                  SEND MESSAGE <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map & Office Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 h-[400px] rounded-3xl overflow-hidden border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58850.1585891395!2d88.32832960662287!3d22.760233405445255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f890f576e9f1f1%3A0x7d6f5877c449d01b!2sBarrackpore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1714220000000!5m2!1sen!2sin" 
              className="w-full h-full grayscale"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
          <div className="glass-card p-10 flex flex-col justify-center h-full border-neonGreen/20">
             <div className="flex items-center gap-3 mb-6">
                <Clock className="text-neonGreen" size={24} />
                <h3 className="text-2xl font-black">OFFICE HOURS</h3>
             </div>
             <ul className="space-y-4">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Monday - Friday</span>
                  <span className="font-bold">10:00 AM - 07:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Saturday</span>
                  <span className="font-bold">10:00 AM - 05:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white/60">Sunday</span>
                  <span className="text-neonGreen font-bold">Closed</span>
                </li>
             </ul>
             <div className="mt-10 p-6 bg-neonGreen/5 rounded-2xl border border-neonGreen/10">
                <p className="text-sm text-white/70 italic">"For urgent queries on Sundays, please contact us on WhatsApp."</p>
                <a href="https://wa.me/919876543210" className="flex items-center gap-2 text-neonGreen font-black mt-3 hover:gap-4 transition-all">
                   WHATSAPP NOW <MessageSquare size={18} />
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
