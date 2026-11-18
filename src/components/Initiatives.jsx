import React, { useState } from 'react';
import { departmentInitiativesData } from '../data/initiativesData';
import { 
  Target, BookOpenCheck, Users, Award, ShieldCheck, Flame, 
  Lightbulb, Network, Briefcase, TrendingUp, GraduationCap, 
  Leaf, Activity, Microscope, Search, CheckCircle2, ChevronRight 
} from 'lucide-react';

const iconMap = {
  Target: Target,
  BookOpenCheck: BookOpenCheck,
  Users: Users,
  Award: Award,
  ShieldCheck: ShieldCheck,
  Flame: Flame,
  Lightbulb: Lightbulb,
  Network: Network,
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
  GraduationCap: GraduationCap,
  Leaf: Leaf,
  Activity: Activity,
  Microscope: Microscope,
};

const Initiatives = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Mentoring & Roadmap',
    'Academic Innovation',
    'Hands-on Engineering',
    'Professional Development',
    'Venture Creation',
    'Sustainability',
    'Scholarly Pathways'
  ];

  const filteredInitiatives = departmentInitiativesData.filter(init => {
    const matchesSearch = init.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          init.whatIsIt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          init.whatStudentsDevelop.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || init.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="initiatives" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider mb-3">
            Holistic Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bit-navy tracking-tight">
            Department Student-Development Initiatives
          </h2>
          <div className="w-16 h-1 bg-bit-gold mx-auto my-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A comprehensive network of student clubs, personalized mentoring frameworks, gurukulam learning pods, 
            rapid hackathons, and sustainable engineering missions engineered to empower every individual student.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search initiatives, clubs or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-bit-navy"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-bit-navy text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* 15 Initiatives Cards Grid with Exact 4 Answers Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInitiatives.map((init) => {
            const IconComp = iconMap[init.icon] || Target;

            return (
              <div 
                key={init.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between p-6 group hover:-translate-y-1"
              >
                <div>
                  {/* Card Header & Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-bit-navy-soft text-bit-navy flex items-center justify-center group-hover:bg-bit-navy group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-bit-gold/15 text-bit-gold-dark text-[11px] font-bold">
                      {init.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {init.category}
                  </div>
                  <h3 className="text-base font-extrabold text-bit-navy leading-tight mb-4 group-hover:text-bit-navy-light transition-colors">
                    {init.name}
                  </h3>

                  {/* 4 Answers Framework for Each Initiative */}
                  <div className="space-y-3.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    
                    {/* What is it? */}
                    <div>
                      <div className="font-bold text-bit-navy uppercase text-[10px] tracking-wider mb-0.5">
                        What is it?
                      </div>
                      <p className="leading-relaxed text-slate-700">
                        {init.whatIsIt}
                      </p>
                    </div>

                    {/* Why it matters? */}
                    <div>
                      <div className="font-bold text-bit-gold-dark uppercase text-[10px] tracking-wider mb-0.5">
                        Why it matters?
                      </div>
                      <p className="leading-relaxed text-slate-600">
                        {init.whyItMatters}
                      </p>
                    </div>

                    {/* How students participate? */}
                    <div>
                      <div className="font-bold text-blue-900 uppercase text-[10px] tracking-wider mb-0.5">
                        How students participate?
                      </div>
                      <p className="leading-relaxed text-slate-600">
                        {init.howStudentsParticipate}
                      </p>
                    </div>

                  </div>
                </div>

                {/* What students develop or achieve */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 bg-slate-50/80 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <div className="font-bold text-emerald-800 uppercase text-[10px] tracking-wider mb-1 flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                    What Students Develop or Achieve:
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {init.whatStudentsDevelop}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Initiatives;

