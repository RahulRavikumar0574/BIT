import React from 'react';
import { departmentSnapshot } from '../data/departmentData';
import { 
  Award, Briefcase, GraduationCap, MapPin, Phone, 
  Mail, Globe, ChevronRight, ShieldCheck, Heart 
} from 'lucide-react';

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href, id) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) onNavigate(id);
  };

  return (
    <footer className="bg-bit-navy-dark text-slate-300 text-xs pt-16 pb-12 border-t-4 border-t-bit-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Institutional Brand & Motto (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-bit-navy flex items-center justify-center p-1.5 shadow-md border border-bit-gold/50">
                <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="42" stroke="#D97706" strokeWidth="4" strokeDasharray="6 3" />
                  <circle cx="50" cy="50" r="32" stroke="#ffffff" strokeWidth="3" />
                  <path d="M50 8L50 18M50 82L50 92M8 50L18 50M82 50L92 50M20 20L28 28M72 72L80 80M20 80L28 72M72 28L80 20" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="18" fill="#0B2545" stroke="#ffffff" strokeWidth="2" />
                  <text x="50" y="55" fontSize="13" fontWeight="900" fill="#F59E0B" textAnchor="middle" fontFamily="sans-serif">BIT</text>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Bannari Amman Institute of Technology
                </span>
                <span className="text-base font-extrabold text-white leading-tight">
                  Department of Mechanical Engineering
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              "{departmentSnapshot.tagline}"
            </p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              {departmentSnapshot.subTagline}
            </p>

            <div className="pt-2 flex items-center space-x-2 text-[11px] text-bit-gold-light">
              <Award className="w-4 h-4 text-bit-gold flex-shrink-0" />
              <span>NBA Accredited (Tier-1) • NAAC 'A+' • Est. {departmentSnapshot.establishedYear}</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleLinkClick(e, '#home', 'home')}
                  className="hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="w-3 h-3 mr-1 text-bit-gold" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, '#about', 'about')}
                  className="hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="w-3 h-3 mr-1 text-bit-gold" />
                  <span>About Department</span>
                </a>
              </li>
              <li>
                <a 
                  href="#student-journey" 
                  onClick={(e) => handleLinkClick(e, '#student-journey', 'student-journey')}
                  className="hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="w-3 h-3 mr-1 text-bit-gold" />
                  <span>Student Journey</span>
                </a>
              </li>
              <li>
                <a 
                  href="#special-labs" 
                  onClick={(e) => handleLinkClick(e, '#special-labs', 'special-labs')}
                  className="hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="w-3 h-3 mr-1 text-bit-gold" />
                  <span>Special Labs</span>
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => handleLinkClick(e, '#projects', 'projects')}
                  className="hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="w-3 h-3 mr-1 text-bit-gold" />
                  <span>Student Projects</span>
                </a>
              </li>
              <li>
                <a 
                  href="#initiatives" 
                  onClick={(e) => handleLinkClick(e, '#initiatives', 'initiatives')}
                  className="hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="w-3 h-3 mr-1 text-bit-gold" />
                  <span>Initiatives (PCDP)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Programmes & Placement Records (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">
              Academic & Placements
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="#programmes" 
                  onClick={(e) => handleLinkClick(e, '#programmes', 'programmes')}
                  className="hover:text-white transition-colors flex items-center"
                >
                  <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-bit-gold flex-shrink-0" />
                  <span>B.E. Mechanical Engineering</span>
                </a>
              </li>
              <li>
                <a 
                  href="#programmes" 
                  onClick={(e) => handleLinkClick(e, '#programmes', 'programmes')}
                  className="hover:text-white transition-colors flex items-center"
                >
                  <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-bit-gold flex-shrink-0" />
                  <span>M.E. Industrial Safety Engg</span>
                </a>
              </li>
              <li>
                <a 
                  href="#programmes" 
                  onClick={(e) => handleLinkClick(e, '#programmes', 'programmes')}
                  className="hover:text-white transition-colors flex items-center"
                >
                  <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-bit-gold flex-shrink-0" />
                  <span>Ph.D. Research Programme</span>
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="#placement-records" 
                  onClick={(e) => handleLinkClick(e, '#placement-records', 'placement-records')}
                  className="inline-flex items-center px-3 py-1.5 rounded-md bg-bit-navy hover:bg-bit-navy-light text-white font-bold text-xs border border-bit-gold/40 transition-colors shadow-xs"
                >
                  <Briefcase className="w-3.5 h-3.5 mr-1.5 text-bit-gold" />
                  <span>Placement Records 2024–26</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Institutional Coordinates (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">
              Verified Coordinates
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-bit-gold flex-shrink-0 mt-0.5" />
                <span>
                  Bannari Amman Institute of Technology, Alathukombai Post, Sathyamangalam - 638 401, Erode District, Tamil Nadu.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-bit-gold flex-shrink-0" />
                <span>+91 4295 226000 / 221289</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-bit-gold flex-shrink-0" />
                <span>mech@bitsathy.ac.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-bit-gold flex-shrink-0" />
                <a href="https://www.bitsathy.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  www.bitsathy.ac.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4 text-center sm:text-left">
          <div>
            © {currentYear} Department of Mechanical Engineering, Bannari Amman Institute of Technology (BIT). All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>Verified Content Last Updated: <strong>{departmentSnapshot.lastUpdated}</strong></span>
            <span>•</span>
            <span className="text-slate-300">Autonomous Institution</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

