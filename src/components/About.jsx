import React, { useState } from 'react';
import { 
  aboutDepartment, 
  departmentSnapshot 
} from '../data/departmentData';
import { 
  Target, Eye, Compass, Award, CheckCircle2, ChevronRight, 
  Cpu, Factory, Zap, Leaf, Users, Globe, BookOpen, Layers
} from 'lucide-react';

const iconMap = {
  Cpu: Cpu,
  Factory: Factory,
  Zap: Zap,
  Leaf: Leaf,
  Users: Users,
  Globe: Globe,
};

const About = () => {
  const [activePillarTab, setActivePillarTab] = useState('pillar-1');

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider mb-3">
            Institutional Legacy & Educational Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bit-navy tracking-tight">
            About the Department of Mechanical Engineering
          </h2>
          <div className="w-16 h-1 bg-bit-gold mx-auto my-4 rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Nurturing competent engineers since {departmentSnapshot.establishedYear} through a purposeful 
            amalgamation of fundamental scientific principles, Industry 4.0 experiential laboratories, 
            and dedicated faculty mentoring.
          </p>
        </div>

        {/* Overview & Educational Approach Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Department Overview: 7 cols */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-bit-navy mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2.5 text-bit-gold" />
              Department Overview
            </h3>
            <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
              {aboutDepartment.overview}
            </p>
            
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm mb-6">
              <h4 className="text-sm font-bold text-bit-navy uppercase tracking-wider mb-2">
                Our Educational Approach: Individualised Progression
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {aboutDepartment.educationalApproach}
              </p>
            </div>

            {/* Department Strengths Grid */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Core Institutional Strengths
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutDepartment.departmentStrengths.map((strength, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3.5 border border-slate-200/80 shadow-xs">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-bit-navy leading-snug">{strength.title}</div>
                        <div className="text-[11px] text-slate-500 mt-1 leading-normal">{strength.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision & Mission: 5 cols */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-bit-navy to-bit-navy-dark text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-bit-navy-light relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-28 h-28 bg-bit-gold/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center space-x-2 text-bit-gold-light text-xs font-bold uppercase tracking-wider mb-3">
                <Eye className="w-4 h-4" />
                <span>Department Vision</span>
              </div>
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed italic font-serif">
                "{aboutDepartment.vision}"
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex-1">
              <div className="flex items-center space-x-2 text-bit-navy text-xs font-bold uppercase tracking-wider mb-4">
                <Target className="w-4 h-4 text-bit-gold" />
                <span>Department Mission</span>
              </div>
              <div className="space-y-3.5">
                {aboutDepartment.mission.map((item, index) => (
                  <div key={index} className="flex items-start text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-bit-navy-soft text-bit-navy font-bold text-[10px] flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 border border-bit-navy/15">
                      {index + 1}
                    </span>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Highlight Four Key Pillars of Mechanical Engineering */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-bit-gold uppercase tracking-widest">
              Foundational Framework
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-bit-navy mt-1">
              The Four Pillars of Our Department
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Every major initiative, lab curriculum, and faculty intervention is rooted in these four pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutDepartment.fourPillars.map((pillar) => (
              <div 
                key={pillar.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-bit-gold/90 font-mono">
                      {pillar.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-bit-navy-soft text-bit-navy text-[11px] font-bold">
                      Pillar {pillar.number}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-bit-navy group-hover:text-bit-navy-light transition-colors leading-tight mb-1">
                    {pillar.title}
                  </h4>
                  <div className="text-xs font-semibold text-bit-gold-dark mb-3">
                    {pillar.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start text-[11px] text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-bit-navy mt-1.5 mr-2 flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-bit-navy group-hover:text-bit-gold-dark">
                  <span>Structured Outcome</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Modern Themes Banner (AI, Industry 4.0, EVs, Sustainability, SDGs) */}
        <div className="bg-gradient-to-r from-bit-navy-dark via-bit-navy to-bit-navy-dark text-white rounded-2xl p-8 shadow-xl border border-bit-navy-light">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-bit-gold uppercase tracking-widest">
              Contemporary Engineering Integration
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold mt-1">
              Cross-Disciplinary Industry 4.0 & Sustainable Themes
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              We connect mechanical design with Artificial Intelligence, clean electric mobility, and 
              United Nations Sustainable Development Goals across active coursework and capstone projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aboutDepartment.strategicThemes.map((theme, tIdx) => {
              const IconComp = iconMap[theme.icon] || Cpu;
              return (
                <div 
                  key={tIdx} 
                  className="bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-bit-gold/20 text-bit-gold-light">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-white leading-tight">
                      {theme.theme}
                    </div>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed pl-1">
                    {theme.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

