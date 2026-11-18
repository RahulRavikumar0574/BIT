import React, { useState } from 'react';
import { studentAchievements, testimonialsData } from '../data/achievementsData';
import { 
  Trophy, Award, Star, Quote, ShieldCheck, 
  User, CheckCircle2, ChevronRight, Sparkles 
} from 'lucide-react';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider mb-3">
            Recognition & Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bit-navy tracking-tight">
            Student Achievements & Institutional Testimonials
          </h2>
          <div className="w-16 h-1 bg-bit-gold mx-auto my-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Celebrating competitive excellence at national championships, hackathons, and published 
            undergraduate research alongside reflections from our students, alumni, and industry partners.
          </p>
        </div>

        {/* Major Student Achievements & Project Awards Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-extrabold text-bit-navy flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-bit-gold" />
                Featured Competition & Research Awards
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                National collegiate championships, hackathons, and indexed research citations.
              </p>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-bit-gold/15 text-bit-gold-dark text-xs font-bold">
              Verified Student Honours
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentAchievements.map((achieve) => (
              <div 
                key={achieve.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-bit-navy-soft text-bit-navy text-[11px] font-bold">
                      {achieve.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-bit-gold-dark">
                      {achieve.year}
                    </span>
                  </div>

                  <h4 className="text-sm font-extrabold text-bit-navy leading-snug mb-2 group-hover:text-bit-navy-light transition-colors">
                    {achieve.title}
                  </h4>

                  <div className="text-xs font-semibold text-slate-500 mb-2">
                    {achieve.event}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {achieve.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-emerald-800 bg-emerald-50 rounded p-2 flex items-center">
                    <Award className="w-3.5 h-3.5 mr-1.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{achieve.award}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1.5 truncate">
                    Team: {achieve.team}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Segment: Student, Alumni & Industry Mentors */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-extrabold text-bit-navy">
              Voices of Experience & Industry Trust
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Reflections on personalized development, academic rigor, and professional readiness.
            </p>
            
            {/* Switch Tabs */}
            <div className="inline-flex p-1 bg-white rounded-xl border border-slate-200 shadow-xs mt-5">
              <button
                onClick={() => setActiveTab('students')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'students' 
                    ? 'bg-bit-navy text-white' 
                    : 'text-slate-600 hover:text-bit-navy'
                }`}
              >
                Current Students
              </button>
              <button
                onClick={() => setActiveTab('alumni')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'alumni' 
                    ? 'bg-bit-navy text-white' 
                    : 'text-slate-600 hover:text-bit-navy'
                }`}
              >
                Distinguished Alumni
              </button>
              <button
                onClick={() => setActiveTab('industry')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'industry' 
                    ? 'bg-bit-navy text-white' 
                    : 'text-slate-600 hover:text-bit-navy'
                }`}
              >
                Industry Advisory Mentors
              </button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {activeTab === 'students' && testimonialsData.students.map((t) => (
              <div 
                key={t.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-card flex flex-col justify-between relative"
              >
                <div>
                  <Quote className="w-8 h-8 text-bit-gold/30 mb-3" />
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-bit-navy/20"
                  />
                  <div>
                    <div className="text-sm font-extrabold text-bit-navy">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                    <span className="inline-block mt-1 text-[10px] font-bold text-bit-gold-dark bg-amber-50 px-2 py-0.5 rounded">
                      {t.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {activeTab === 'alumni' && testimonialsData.alumni.map((t) => (
              <div 
                key={t.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-card flex flex-col justify-between relative"
              >
                <div>
                  <Quote className="w-8 h-8 text-bit-gold/30 mb-3" />
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-bit-navy/20"
                  />
                  <div>
                    <div className="text-sm font-extrabold text-bit-navy">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                    <span className="inline-block mt-1 text-[10px] font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                      {t.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {activeTab === 'industry' && testimonialsData.industryMentors.map((t) => (
              <div 
                key={t.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-card flex flex-col justify-between relative"
              >
                <div>
                  <Quote className="w-8 h-8 text-bit-gold/30 mb-3" />
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-bit-navy/20"
                  />
                  <div>
                    <div className="text-sm font-extrabold text-bit-navy">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                    <span className="inline-block mt-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      {t.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-[11px] text-slate-400 mt-8">
            * Testimonials reflect verified student, alumni, and industry advisory statements with editable name placeholders.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;

