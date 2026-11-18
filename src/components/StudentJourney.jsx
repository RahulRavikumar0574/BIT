import React, { useState } from 'react';
import { studentJourneyStages } from '../data/journeyData';
import { 
  Compass, Route, Hammer, ClipboardCheck, Rocket, 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Layers 
} from 'lucide-react';

const iconMap = {
  Compass: Compass,
  Route: Route,
  Hammer: Hammer,
  ClipboardCheck: ClipboardCheck,
  Rocket: Rocket,
};

const StudentJourney = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = studentJourneyStages[activeStageIndex];
  const CurrentIcon = iconMap[currentStage.icon] || Compass;

  return (
    <section id="student-journey" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-bit-navy-soft/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-bit-gold/15 text-bit-gold-dark text-xs font-extrabold uppercase tracking-widest mb-3">
            Core Institutional Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bit-navy tracking-tight">
            The Personalised Student Journey
          </h2>
          <div className="w-16 h-1 bg-bit-gold mx-auto my-4 rounded-full" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Every student is individually developed through a structured 5-stage framework of discovering 
            strengths, planning learning, building competencies, reviewing progress, and launching into a fulfilling career.
          </p>
        </div>

        {/* 5-Stage Stepper Navigation (Horizontal on Desktop, Responsive Wrap) */}
        <div className="mb-12">
          
          {/* Desktop Connecting Line & Step Cards */}
          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-slate-200 -z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
              {studentJourneyStages.map((stage, idx) => {
                const IconComp = iconMap[stage.icon] || Compass;
                const isSelected = activeStageIndex === idx;

                return (
                  <button
                    key={stage.step}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`text-left p-4 rounded-xl transition-all duration-300 relative focus:outline-none flex flex-col justify-between ${
                      isSelected 
                        ? 'bg-bit-navy text-white shadow-lg ring-2 ring-bit-gold scale-102' 
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200'
                    }`}
                  >
                    <div>
                      {/* Step Number + Icon */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-xs ${
                          isSelected 
                            ? 'bg-bit-gold text-bit-navy-dark shadow-sm' 
                            : 'bg-white text-bit-navy border border-slate-200'
                        }`}>
                          {stage.step}
                        </span>
                        <div className={`p-1.5 rounded-md ${
                          isSelected ? 'text-bit-gold-light' : 'text-slate-500'
                        }`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Phase & Name */}
                      <div className={`text-[11px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-bit-gold-light' : 'text-slate-500'
                      }`}>
                        Stage {idx + 1}
                      </div>
                      <div className={`text-sm sm:text-base font-extrabold leading-tight mt-0.5 ${
                        isSelected ? 'text-white' : 'text-bit-navy'
                      }`}>
                        {stage.phase}
                      </div>
                    </div>

                    <div className={`text-[11px] mt-3 pt-2 border-t ${
                      isSelected 
                        ? 'border-white/20 text-slate-200' 
                        : 'border-slate-200 text-slate-500'
                    }`}>
                      {stage.badge}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Detailed Interactive Stage Spotlight Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Stage Details (7 Columns) */}
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-bit-navy text-white text-xs font-bold font-mono">
                  Stage {currentStage.step} of 05
                </span>
                <span className="px-3 py-1 rounded-full bg-bit-gold/20 text-bit-gold-dark text-xs font-bold">
                  {currentStage.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-bit-navy mb-2">
                {currentStage.phase}: {currentStage.name}
              </h3>
              
              <p className="text-sm sm:text-base font-medium text-bit-gold-dark mb-4">
                "{currentStage.tagline}"
              </p>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {currentStage.description}
              </p>

              {/* Action Items List */}
              <div className="space-y-4 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Structured Interventions & Milestones:
                </div>
                {currentStage.actionItems.map((action, aIdx) => (
                  <div key={aIdx} className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-2xs flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-bit-navy leading-snug">
                        {action.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-normal">
                        {action.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stage Deliverable Badge */}
              <div className="bg-bit-navy-soft rounded-xl p-4 border border-bit-navy/15 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Tangible Student Deliverable:
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-bit-navy">
                    {currentStage.studentDeliverable}
                  </div>
                </div>
                <span className="px-3 py-1 rounded bg-white text-emerald-700 text-xs font-bold border border-emerald-200 shadow-2xs">
                  Audited Portfolio
                </span>
              </div>

            </div>

            {/* Right Visual Breakdown & Mentor Interaction (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col space-y-5">
              
              {/* Process Blueprint Infographic Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-bit-navy mb-4 flex items-center">
                  <CurrentIcon className="w-4 h-4 mr-2 text-bit-gold" />
                  How It Works for Every Student
                </h4>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start space-x-3">
                    <span className="font-bold text-bit-navy">1.</span>
                    <span>No student is left behind; academic progress, club achievements, and soft skills are logged into the digital PCDP portal.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start space-x-3">
                    <span className="font-bold text-bit-navy">2.</span>
                    <span>Bi-weekly one-on-one sessions with assigned faculty mentors to review portfolio targets and course performance.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start space-x-3">
                    <span className="font-bold text-bit-navy">3.</span>
                    <span>Seamless integration with special labs, Hackathons, and national design competitions (SAE, SIH).</span>
                  </div>
                </div>

                {/* Stage Navigator Controls */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    disabled={activeStageIndex === 0}
                    onClick={() => setActiveStageIndex(prev => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    ← Previous Stage
                  </button>
                  <span className="text-xs font-bold text-bit-navy">
                    {activeStageIndex + 1} / 5
                  </span>
                  <button
                    disabled={activeStageIndex === studentJourneyStages.length - 1}
                    onClick={() => setActiveStageIndex(prev => Math.min(studentJourneyStages.length - 1, prev + 1))}
                    className="px-3 py-1.5 rounded-lg bg-bit-navy text-white text-xs font-bold hover:bg-bit-navy-light disabled:opacity-40 disabled:cursor-not-allowed flex items-center"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>

              {/* Institutional Assurance Guarantee */}
              <div className="bg-gradient-to-br from-bit-navy to-bit-navy-dark text-white rounded-2xl p-6 shadow-md border border-bit-navy-light">
                <div className="text-xs font-bold uppercase tracking-wider text-bit-gold-light mb-1">
                  Department Outcome Guarantee
                </div>
                <div className="text-sm font-bold text-white mb-2">
                  From Foundational Curiosity to Industry Readiness
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  By the end of Stage 05 (Launch), every BIT Mechanical graduate possesses verified technical credentials, 
                  working prototype artifacts, and professional communication poise for high-impact employment or global graduate research.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StudentJourney;

