import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Link2, Globe, Share2, ExternalLink } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0f0d20] pt-20 pb-10 border-t border-[#8b22f5]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Rank Shastra" className="h-10 w-auto" />
              <span className="text-xl font-black uppercase flex">
                <span className="text-silver-metallic">RANK</span>
                <span className="text-gold-metallic">SHASTRA</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Premium coaching institute for NEET and Foundation. Rank Ka Science. Result Ka System. Empowering students to achieve their medical dreams.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Globe, href: 'https://rankshastra.in', label: 'Website' },
                { Icon: Share2, href: '#', label: 'Share' },
                { Icon: Link2, href: '#', label: 'Links' },
                { Icon: ExternalLink, href: '#', label: 'More' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#c8f000] hover:text-black transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/60 hover:text-[#c8f000] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-[#c8f000] transition-colors">About Us</Link></li>
              <li><Link to="/faculty" className="text-white/60 hover:text-[#c8f000] transition-colors">Faculty Details</Link></li>
              <li><Link to="/courses" className="text-white/60 hover:text-[#c8f000] transition-colors">Courses</Link></li>
              <li><Link to="/book-appointment" className="text-white/60 hover:text-[#c8f000] transition-colors">Book an Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase">Our Courses</h4>
            <ul className="space-y-4">
              <li><Link to="/courses" className="text-white/60 hover:text-[#c8f000] transition-colors">NEET Dropper Batch</Link></li>
              <li><Link to="/courses" className="text-white/60 hover:text-[#c8f000] transition-colors">NEET 11 & 12</Link></li>
              <li><Link to="/courses" className="text-white/60 hover:text-[#c8f000] transition-colors">Foundation 9 & 10</Link></li>
              <li><Link to="/courses" className="text-white/60 hover:text-[#c8f000] transition-colors">Foundation 6 - 8</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/60">
                <MapPin className="text-[#c8f000] shrink-0" size={20} />
                <span>Barrackpore, Kolkata, West Bengal</span>
              </li>
              <li className="flex gap-3 text-white/60">
                <Phone className="text-[#c8f000] shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 text-white/60">
                <Mail className="text-[#c8f000] shrink-0" size={20} />
                <span>info@rankshastra.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Rank Shastra. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
