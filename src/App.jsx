import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programmes from './components/Programmes';
import StudentJourney from './components/StudentJourney';
import SpecialLabs from './components/SpecialLabs';
import Projects from './components/Projects';
import PlacementRecords from './components/PlacementRecords';
import Initiatives from './components/Initiatives';
import Achievements from './components/Achievements';
import NewsEvents from './components/NewsEvents';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScrollObserver = () => {
      const sections = [
        'home', 'about', 'programmes', 'student-journey',
        'special-labs', 'projects', 'placement-records',
        'initiatives', 'news-events', 'contact'
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver);
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans selection:bg-bit-navy selection:text-white">
      {/* Primary Sticky Header */}
      <Header 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Snapshot */}
        <Hero 
          onExplore={() => scrollToSection('about')}
          onOpportunities={() => scrollToSection('student-journey')}
        />

        {/* About Department & 4 Key Pillars */}
        <About />

        {/* Academic Programmes */}
        <Programmes />

        {/* 5-Stage Personalised Student Journey */}
        <StudentJourney />

        {/* Special Laboratories Showcase */}
        <SpecialLabs />

        {/* Student Projects & Innovation Showcase */}
        <Projects />

        {/* Placement Records – Career Outcomes and Industry Connections */}
        <PlacementRecords />

        {/* Department Initiatives (Gurukulam, PCDP, Communities, SDG) */}
        <Initiatives />

        {/* Student Achievements & Testimonials */}
        <Achievements />

        {/* News, Workshops & Events */}
        <NewsEvents />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Verified Contact Details, Map & Enquiry Form */}
        <Contact />
      </main>

      {/* Comprehensive Academic Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;

