import React, { useState } from 'react';
import { programmesData } from '../data/programmesData';
import { 
  GraduationCap, Clock, Users, CheckCircle, Award, 
  ArrowRight, BookOpen, Briefcase, FileCheck, X, Sparkles 
} from 'lucide-react';

const Programmes = () => {
  const [selectedProgramme, setSelectedProgramme] = useState(null);

  return (
    <section id="programmes" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider mb-3">
            Academic Offerings & Degree Pathways
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bit-navy tracking-tight">
            Academic Programmes
          </h2>
          <div className="w-16 h-1 bg-bit-gold mx-auto my-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Rigorous undergraduate, postgraduate, and doctoral curricula blending classical mechanical 
            principles with emerging Industry 4.0 automation, environmental safety, and frontier research.
          </p>
        </div>

        {/* 3 Programme Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {programmesData.map((prog) => (
            <div 
              key={prog.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Header Band */}
                <div className="p-6 bg-gradient-to-r from-bit-navy to-bit-navy-light text-white relative">
                  <span className="inline-block px-3 py-1 rounded-full bg-bit-gold/90 text-bit-navy-dark text-[11px] font-black uppercase tracking-wider mb-2">
                    {prog.degree}
                  </span>
                  <h3 className="text-xl font-extrabold text-white leading-tight">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-2 line-clamp-2">
                    {prog.tagline}
                  </p>
                </div>

                {/* Editable Metadata Strip */}
                <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 text-xs text-slate-600 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Duration:</span>
                    <span className="bg-white px-2 py-0.5 rounded text-[11px] font-medium border border-slate-200">
                      {prog.meta.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Intake / Approvals:</span>
                    <span className="text-[11px] text-slate-600 truncate max-w-[160px]" title={prog.meta.intake}>
                      {prog.meta.intake}
                    </span>
                  </div>
                </div>

                {/* Description Body */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Key Learning Areas */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-bit-navy flex items-center mb-3">
                      <BookOpen className="w-4 h-4 mr-1.5 text-bit-gold" />
                      Key Learning Areas
                    </h4>
                    <div className="space-y-2">
                      {prog.keyLearningAreas.slice(0, 4).map((area, aIdx) => (
                        <div key={aIdx} className="flex items-start text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career Pathways Preview */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-bit-navy flex items-center mb-2.5">
                      <Briefcase className="w-4 h-4 mr-1.5 text-bit-gold" />
                      Career Opportunities
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.careerOpportunities.slice(0, 3).map((career, cIdx) => (
                        <span 
                          key={cIdx}
                          className="px-2.5 py-1 rounded bg-bit-navy-soft text-bit-navy text-[11px] font-medium"
                        >
                          {career}
                        </span>
                      ))}
                      <span className="px-2 py-1 rounded bg-slate-100 text-slate-500 text-[11px]">
                        +{prog.careerOpportunities.length - 3} more
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProgramme(prog)}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-bit-navy text-bit-navy hover:text-white border border-slate-300 hover:border-bit-navy font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center group"
                >
                  <span>Learn More & View Full Curriculum</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verification & Editable Notice Note */}
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <FileCheck className="w-4 h-4 text-bit-gold flex-shrink-0" />
            <span>
              All programme durations, official intakes, and eligibility criteria adhere to Anna University and AICTE norms.
            </span>
          </div>
          <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
            Editable Department Data Files
          </span>
        </div>

      </div>

      {/* Programme Detail Modal */}
      {selectedProgramme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedProgramme(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider mb-2">
              {selectedProgramme.degree}
            </div>

            <h3 className="text-2xl font-extrabold text-bit-navy mb-2">
              {selectedProgramme.title}
            </h3>
            <p className="text-sm font-medium text-bit-gold-dark mb-4">
              {selectedProgramme.tagline}
            </p>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6 text-xs space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div><span className="font-bold text-slate-700">Duration:</span> {selectedProgramme.meta.duration}</div>
                <div><span className="font-bold text-slate-700">Intake:</span> {selectedProgramme.meta.intake}</div>
              </div>
              <div><span className="font-bold text-slate-700">Eligibility:</span> {selectedProgramme.meta.eligibility}</div>
              <div><span className="font-bold text-slate-700">Approval / Affiliation:</span> {selectedProgramme.meta.approval}</div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-bit-navy uppercase tracking-wider mb-2">
                  Comprehensive Learning Areas
                </h4>
                <div className="space-y-2">
                  {selectedProgramme.keyLearningAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-bit-navy uppercase tracking-wider mb-2">
                  Industry Certifications Embedded
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProgramme.industryCertifications.map((cert, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/60 text-xs font-medium text-amber-900 flex items-center">
                      <Award className="w-3.5 h-3.5 mr-2 text-bit-gold flex-shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-bit-navy uppercase tracking-wider mb-2">
                  Target Career Designations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProgramme.careerOpportunities.map((career, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedProgramme(null)}
                className="px-6 py-2 bg-bit-navy text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-bit-navy-light transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Programmes;

