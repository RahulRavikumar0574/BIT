import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Phone, Mail, Award, BookOpen, 
  FlaskConical, Briefcase, Sparkles, Calendar, Layers, MapPin
} from 'lucide-react';

const Header = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programmesDropdown, setProgrammesDropdown] = useState(false);
  const [labsDropdown, setLabsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { 
      name: 'Programmes', 
      href: '#programmes', 
      id: 'programmes',
      hasDropdown: true,
      dropdownItems: [
        { label: 'B.E. Mechanical Engineering (UG)', href: '#programmes' },
        { label: 'M.E. Industrial Safety Engineering (PG)', href: '#programmes' },
        { label: 'Ph.D. Research Programme', href: '#programmes' },
      ]
    },
    { name: 'Student Journey', href: '#student-journey', id: 'student-journey' },
    { 
      name: 'Special Labs', 
      href: '#special-labs', 
      id: 'special-labs',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Advanced Manufacturing & CNC', href: '#special-labs' },
        { label: 'CAD/CAM Simulation Studio', href: '#special-labs' },
        { label: 'Thermal & Fluid Dynamics', href: '#special-labs' },
        { label: 'Automobile & EV Testbed', href: '#special-labs' },
        { label: 'Industrial Safety & Ergonomics', href: '#special-labs' },
        { label: 'Research & Additive Mfg', href: '#special-labs' },
      ]
    },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Initiatives', href: '#initiatives', id: 'initiatives' },
    { name: 'News & Events', href: '#news-events', id: 'news-events' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setProgrammesDropdown(false);
    setLabsDropdown(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Institutional Identity Strip */}
      <div className="bg-bit-navy-dark text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center tracking-wide">
          
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-amber-400 font-semibold">
              <Award className="w-3.5 h-3.5 mr-1.5 text-bit-gold" />
              NBA Accredited (Tier-1) & NAAC 'A+'
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Autonomous Institution • Affiliated to Anna University</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 flex items-center">
              <MapPin className="w-3 h-3 mr-1 text-slate-400" />
              Sathyamangalam, Tamil Nadu
            </span>
          </div>

          <div className="flex items-center space-x-4 text-slate-300">
            <a href="tel:+914295226000" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-3 h-3 mr-1 text-bit-gold" />
              <span>+91 4295 226000</span>
            </a>
            <span className="text-slate-600">•</span>
            <a href="mailto:mech@bitsathy.ac.in" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-3 h-3 mr-1 text-bit-gold" />
              <span>mech@bitsathy.ac.in</span>
            </a>
            <span className="bg-amber-500/15 text-amber-300 px-2 py-0.5 rounded font-mono font-bold text-[10px] border border-amber-500/30">
              Est. 1996
            </span>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`bg-white transition-all duration-300 ${
        isScrolled 
          ? 'shadow-md py-2 border-b border-slate-200' 
          : 'shadow-xs py-2.5 sm:py-3 border-b border-slate-100'
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Identity (Compact, Elegant, Never wraps awkwardly) */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home', 'home')}
              className="flex items-center space-x-3 group focus:outline-none flex-shrink-0"
              aria-label="BIT Department of Mechanical Engineering Home"
            >
              {/* Emblem */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-bit-navy flex items-center justify-center p-1 shadow-sm border border-bit-gold/50 group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="42" stroke="#D97706" strokeWidth="4" strokeDasharray="6 3" />
                  <circle cx="50" cy="50" r="32" stroke="#ffffff" strokeWidth="3" />
                  <path d="M50 8L50 18M50 82L50 92M8 50L18 50M82 50L92 50M20 20L28 28M72 72L80 80M20 80L28 72M72 28L80 20" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="18" fill="#0B2545" stroke="#ffffff" strokeWidth="2" />
                  <text x="50" y="55" fontSize="13" fontWeight="900" fill="#F59E0B" textAnchor="middle" fontFamily="sans-serif">BIT</text>
                </svg>
              </div>

              {/* Text Hierarchy */}
              <div className="flex flex-col">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 leading-tight">
                  Bannari Amman Institute of Technology
                </span>
                <span className="text-sm sm:text-base lg:text-[17px] font-extrabold text-bit-navy tracking-tight group-hover:text-bit-navy-light transition-colors leading-tight whitespace-nowrap">
                  Department of Mechanical Engineering
                </span>
                <span className="text-[10px] text-slate-400 font-medium leading-none hidden sm:block">
                  Autonomous Institution • Sathyamangalam
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 flex-shrink-0">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                if (item.id === 'programmes') {
                  return (
                    <div 
                      key={item.name} 
                      className="relative"
                      onMouseEnter={() => setProgrammesDropdown(true)}
                      onMouseLeave={() => setProgrammesDropdown(false)}
                    >
                      <button
                        onClick={(e) => handleLinkClick(e, item.href, item.id)}
                        className={`whitespace-nowrap px-2.5 py-1.5 text-xs font-semibold rounded-md flex items-center transition-colors ${
                          isActive 
                            ? 'text-bit-navy bg-slate-100 font-bold' 
                            : 'text-slate-700 hover:text-bit-navy hover:bg-slate-50'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-3 h-3 ml-1 opacity-70" />
                      </button>

                      {programmesDropdown && (
                        <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-1.5 z-50 animate-fadeIn">
                          {item.dropdownItems.map((subItem, idx) => (
                            <a
                              key={idx}
                              href={subItem.href}
                              onClick={(e) => handleLinkClick(e, subItem.href, item.id)}
                              className="block px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-bit-navy hover:bg-bit-navy-soft transition-colors whitespace-nowrap"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.id === 'special-labs') {
                  return (
                    <div 
                      key={item.name} 
                      className="relative"
                      onMouseEnter={() => setLabsDropdown(true)}
                      onMouseLeave={() => setLabsDropdown(false)}
                    >
                      <button
                        onClick={(e) => handleLinkClick(e, item.href, item.id)}
                        className={`whitespace-nowrap px-2.5 py-1.5 text-xs font-semibold rounded-md flex items-center transition-colors ${
                          isActive 
                            ? 'text-bit-navy bg-slate-100 font-bold' 
                            : 'text-slate-700 hover:text-bit-navy hover:bg-slate-50'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-3 h-3 ml-1 opacity-70" />
                      </button>

                      {labsDropdown && (
                        <div className="absolute top-full left-0 w-60 bg-white rounded-lg shadow-xl border border-slate-100 py-1.5 z-50 animate-fadeIn">
                          {item.dropdownItems.map((subItem, idx) => (
                            <a
                              key={idx}
                              href={subItem.href}
                              onClick={(e) => handleLinkClick(e, subItem.href, item.id)}
                              className="block px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-bit-navy hover:bg-bit-navy-soft transition-colors whitespace-nowrap"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href, item.id)}
                    className={`whitespace-nowrap px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                      isActive 
                        ? 'text-bit-navy bg-slate-100 font-bold' 
                        : 'text-slate-700 hover:text-bit-navy hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}

              {/* Dedicated Placement Records Button (Crisp Pill, Never Wraps) */}
              <a
                href="#placement-records"
                onClick={(e) => handleLinkClick(e, '#placement-records', 'placement-records')}
                className={`whitespace-nowrap ml-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all shadow-xs flex items-center ${
                  activeSection === 'placement-records'
                    ? 'bg-bit-gold text-bit-navy-dark ring-2 ring-bit-navy'
                    : 'bg-bit-navy hover:bg-bit-navy-light text-white border border-bit-gold/40'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 mr-1.5 text-bit-gold flex-shrink-0" />
                <span>Placement Records</span>
              </a>
            </div>

            {/* Mobile / Tablet Actions */}
            <div className="flex xl:hidden items-center space-x-2">
              <a
                href="#placement-records"
                onClick={(e) => handleLinkClick(e, '#placement-records', 'placement-records')}
                className="whitespace-nowrap px-2.5 py-1 text-[11px] font-bold rounded-md bg-bit-navy text-white hover:bg-bit-navy-light transition-colors flex items-center border border-bit-gold/30"
              >
                <Briefcase className="w-3 h-3 mr-1 text-bit-gold flex-shrink-0" />
                <span>Placements</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-slate-700 hover:text-bit-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-bit-navy"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto shadow-xl">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-slate-100 last:border-b-0 py-1">
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href, item.id)}
                    className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-semibold whitespace-nowrap ${
                      activeSection === item.id 
                        ? 'bg-bit-navy-soft text-bit-navy font-bold' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.name}</span>
                  </a>

                  {item.dropdownItems && (
                    <div className="pl-4 pr-2 py-1 space-y-1 mt-1 bg-slate-50 rounded">
                      {item.dropdownItems.map((subItem, sIdx) => (
                        <a
                          key={sIdx}
                          href={subItem.href}
                          onClick={(e) => handleLinkClick(e, subItem.href, item.id)}
                          className="block py-1.5 px-2 text-xs font-medium text-slate-600 hover:text-bit-navy whitespace-nowrap"
                        >
                          • {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Placement Records in Mobile */}
              <div className="pt-2">
                <a
                  href="#placement-records"
                  onClick={(e) => handleLinkClick(e, '#placement-records', 'placement-records')}
                  className="flex items-center justify-between px-3 py-2.5 rounded-md bg-bit-navy text-white text-sm font-bold shadow-xs border border-bit-gold/40"
                >
                  <span className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-bit-gold" />
                    Placement Records & Outcomes
                  </span>
                  <span className="text-[10px] bg-bit-gold text-bit-navy-dark px-2 py-0.5 rounded font-black">
                    Important
                  </span>
                </a>
              </div>
              
              {/* Emergency Contacts in Mobile */}
              <div className="pt-4 mt-2 border-t border-slate-200 text-xs text-slate-500 space-y-2">
                <div className="flex items-center text-slate-600">
                  <Phone className="w-3.5 h-3.5 mr-2 text-bit-gold" />
                  <span>+91 4295 226000 / 221289</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Mail className="w-3.5 h-3.5 mr-2 text-bit-gold" />
                  <span>mech@bitsathy.ac.in</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Bannari Amman Institute of Technology, Sathyamangalam - 638 401
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
