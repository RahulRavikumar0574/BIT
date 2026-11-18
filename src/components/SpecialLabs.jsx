import React, { useState } from 'react';
import { labCategories, laboratoriesData } from '../data/labsData';
import { 
  FlaskConical, Wrench, CheckCircle2, ArrowRight, X, 
  Layers, ShieldAlert, Cpu, Sparkles 
} from 'lucide-react';

const SpecialLabs = () => {
  const [activeCategory, setActiveCategory] = useState("All Labs");
  const [selectedLab, setSelectedLab] = useState(null);

  const filteredLabs = activeCategory === "All Labs"
    ? laboratoriesData
    : laboratoriesData.filter(lab => lab.category === activeCategory);

  return (
    <section id="special-labs" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider mb-3">
            Industry 4.0 Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bit-navy tracking-tight">
            Special Laboratories & Fabrication Studios
          </h2>
          <div className="w-16 h-1 bg-bit-gold mx-auto my-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hands-on experiential environments equipped with modern CNC machining, computational FEA/CFD suites, 
            wind tunnels, electric mobility testbeds, and advanced industrial safety instrumentation.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {labCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-bit-navy text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Laboratory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredLabs.map((lab) => (
            <div 
              key={lab.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Image Container with Tag */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-800">
                  <img
                    src={lab.image}
                    onError={(e) => { e.currentTarget.src = '/images/hero-lab.svg'; }}
                    alt={lab.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-bit-navy shadow-xs border border-white/50">
                    {lab.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-base font-extrabold leading-tight drop-shadow-sm">
                      {lab.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5">
                  <p className="text-xs text-bit-gold-dark font-medium mb-3">
                    {lab.tagline}
                  </p>

                  {/* Key Equipment Sample */}
                  <div className="mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center">
                      <Wrench className="w-3.5 h-3.5 mr-1 text-bit-gold" />
                      Key Facilities & Equipment
                    </div>
                    <div className="space-y-1.5">
                      {lab.equipment.slice(0, 3).map((eq, eIdx) => (
                        <div key={eIdx} className="flex items-start text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-bit-navy mt-1.5 mr-2 flex-shrink-0" />
                          <span className="leading-snug">{eq}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Student Activities */}
                  <div className="mb-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Student Practice & Projects
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {lab.studentActivities[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedLab(lab)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-bit-navy text-bit-navy hover:text-white border border-slate-200 hover:border-bit-navy font-bold text-xs transition-all duration-200 flex items-center justify-center group"
                >
                  <span>View Equipment & Learning Outcomes</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="text-center text-xs text-slate-500 max-w-xl mx-auto">
          Equipment records and machine configurations are continuously maintained by department technical 
          superintendents and kept open for administrative updates.
        </div>

      </div>

      {/* Lab Detail Interactive Modal */}
      {selectedLab && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedLab(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider mb-2">
              {selectedLab.category}
            </div>

            <h3 className="text-2xl font-extrabold text-bit-navy mb-2">
              {selectedLab.name}
            </h3>
            <p className="text-sm font-medium text-bit-gold-dark mb-6">
              {selectedLab.tagline}
            </p>

            {/* Modal Image */}
            <div className="rounded-xl overflow-hidden mb-6 h-56 w-full">
              <img 
                src={selectedLab.image} 
                alt={selectedLab.imageAlt} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-bit-navy mb-2 flex items-center">
                  <Wrench className="w-4 h-4 mr-1.5 text-bit-gold" />
                  Detailed Equipment & Machine Specifications
                </h4>
                <div className="space-y-2">
                  {selectedLab.equipment.map((eq, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-800 flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-bit-navy mb-2">
                  Hands-On Student Activities
                </h4>
                <div className="space-y-2">
                  {selectedLab.studentActivities.map((act, idx) => (
                    <div key={idx} className="flex items-start text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-bit-gold mt-1.5 mr-2 flex-shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-bit-navy mb-2">
                  Core Learning Outcomes
                </h4>
                <div className="space-y-2">
                  {selectedLab.learningOutcomes.map((out, idx) => (
                    <div key={idx} className="flex items-start text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-bit-navy mr-2 flex-shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedLab(null)}
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

export default SpecialLabs;

