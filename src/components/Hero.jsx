import React from 'react';
import { 
  ArrowRight, Compass, Calendar, GraduationCap, Award, 
  Lightbulb, ShieldCheck, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { departmentSnapshot } from '../data/departmentData';

const Hero = ({ onExplore, onOpportunities }) => {
  return (
    <section id="home" className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      
      {/* Background Subtle Institutional Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0B2545_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Hero Content: 7 Columns */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Department Badge */}
            <div className="inline-flex items-center self-start px-3.5 py-1.5 rounded-full bg-bit-navy-soft border border-bit-navy/15 text-bit-navy text-xs sm:text-sm font-bold mb-6 tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-bit-gold mr-2 animate-pulse" />
              Bannari Amman Institute of Technology • Sathyamangalam
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bit-navy-dark tracking-tight leading-[1.18] mb-6">
              Every Student.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bit-navy via-bit-navy-light to-bit-gold-dark">
                Individually Developed.
              </span>{' '}
              Industry-Ready.{' '}
              <span className="text-bit-gold-dark underline decoration-bit-gold/50 decoration-wavy decoration-2">
                Empowered to Build.
              </span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-8 max-w-2xl">
              Developing competent engineers through personalised learning, industry engagement, 
              innovation and holistic student development. From day one, each student's journey is mapped, 
              mentored, and transformed into tangible engineering capability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onExplore}
                className="px-7 py-3.5 bg-bit-navy hover:bg-bit-navy-light text-white font-bold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center group border border-bit-navy-light"
              >
                <span>Explore Our Department</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpportunities}
                className="px-7 py-3.5 bg-white hover:bg-slate-50 text-bit-navy font-bold text-sm sm:text-base rounded-lg border-2 border-bit-navy/30 hover:border-bit-navy shadow-sm transition-all duration-200 flex items-center justify-center group"
              >
                <Compass className="w-4 h-4 mr-2 text-bit-gold group-hover:rotate-45 transition-transform" />
                <span>Discover Student Opportunities</span>
              </button>
            </div>

            {/* Key Assurance Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>1:15 Faculty Mentoring Ratio</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Industry 4.0 Special Labs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Structured 5-Stage Journey</span>
              </div>
            </div>

          </div>

          {/* Right Hero Image Showcase: 5 Columns */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Accent Backdrop Card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-bit-gold/20 via-bit-navy/10 to-bit-navy/30 rounded-2xl filter blur-xl opacity-70 transform rotate-1" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="/images/hero-lab.svg"
                  alt="BIT Mechanical engineering students engaged in precision laboratory fabrication and CNC design"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Overlaid Gradient for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-bit-navy-dark/90 via-bit-navy-dark/30 to-transparent" />

                {/* Floating Image Tag Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-bit-navy text-xs font-bold flex items-center space-x-1.5 border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Advanced Manufacturing Centre</span>
                </div>

                {/* Bottom Caption Inside Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider font-semibold text-bit-gold-light mb-1">
                    Hands-On Engineering Practice
                  </div>
                  <p className="text-sm font-medium text-slate-100 leading-snug">
                    Students programming precision multi-axis CNC machines and generative CAD assemblies at BIT Mechanical Labs.
                  </p>
                </div>
              </div>

              {/* Overlaid Interactive Mini-Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-xl shadow-xl p-3 sm:p-4 border border-slate-100 flex items-center space-x-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-lg bg-bit-navy flex items-center justify-center text-bit-gold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-bit-navy">Verified Institutional Standard</div>
                  <div className="text-[11px] text-slate-500">Autonomous • AICTE Approved</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Compact Information Cards: Department Snapshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
          
          {/* Card 1: Established */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-start space-x-4 border-l-4 border-l-bit-navy">
            <div className="p-2.5 rounded-lg bg-bit-navy-soft text-bit-navy">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Established
              </div>
              <div className="text-2xl font-black text-bit-navy">
                {departmentSnapshot.establishedYear}
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                Nearly three decades of engineering excellence
              </div>
            </div>
          </div>

          {/* Card 2: Programmes */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-start space-x-4 border-l-4 border-l-bit-gold">
            <div className="p-2.5 rounded-lg bg-amber-50 text-bit-gold-dark">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Programmes
              </div>
              <div className="text-2xl font-black text-bit-navy">
                {departmentSnapshot.programmesOffered}
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                B.E., M.E. Safety & Anna Univ. Ph.D. Centre
              </div>
            </div>
          </div>

          {/* Card 3: NBA Accreditation */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-start space-x-4 border-l-4 border-l-emerald-600">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                NBA Accreditation
              </div>
              <div className="text-lg font-bold text-bit-navy leading-tight">
                Tier-1 Verified Status
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                {departmentSnapshot.accreditationStatus}
              </div>
            </div>
          </div>

          {/* Card 4: Focus */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-start space-x-4 border-l-4 border-l-blue-600">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Core Focus
              </div>
              <div className="text-lg font-bold text-bit-navy leading-tight">
                Engineering & Research
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                Industry 4.0, Green Mobility & Practical Innovation
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

