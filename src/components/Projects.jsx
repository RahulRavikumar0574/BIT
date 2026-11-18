import React, { useState } from 'react';
import { projectFilters, studentProjectsData } from '../data/projectsData';
import { 
  Rocket, Users, UserCheck, Building, AlertCircle, 
  Settings2, Lightbulb, CheckCircle2, ArrowRight, X, Sparkles, Filter 
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === "All Projects"
    ? studentProjectsData
    : studentProjectsData.filter(proj => proj.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider mb-3">
            Applied Engineering & Inventions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bit-navy tracking-tight">
            Student Projects & Innovation Showcase
          </h2>
          <div className="w-16 h-1 bg-bit-gold mx-auto my-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real engineering prototypes conceived, simulated, fabricated, and validated by our students under 
            faculty mentorship, addressing regional industry problems and global sustainability goals.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-bit-navy text-white shadow-md'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Image and Badges */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    onError={(e) => { e.currentTarget.src = '/images/hero-lab.svg'; }}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 bg-bit-navy/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20">
                    {project.category}
                  </div>

                  {project.badge && (
                    <div className="absolute top-3 right-3 bg-bit-gold text-bit-navy-dark text-[11px] font-black px-2.5 py-1 rounded-md shadow-xs">
                      {project.badge}
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold text-slate-300 block">
                      {project.domain}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold leading-tight drop-shadow-sm line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Brief Content Preview */}
                <div className="p-5">
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
                    <div className="flex items-center text-slate-700">
                      <Users className="w-3.5 h-3.5 mr-2 text-bit-navy flex-shrink-0" />
                      <span className="font-semibold text-slate-500 mr-1">Team:</span>
                      <span className="truncate">{project.studentTeam.slice(0, 2).join(', ')}...</span>
                    </div>

                    <div className="flex items-center text-slate-700">
                      <UserCheck className="w-3.5 h-3.5 mr-2 text-bit-gold flex-shrink-0" />
                      <span className="font-semibold text-slate-500 mr-1">Mentor:</span>
                      <span className="truncate">{project.facultyMentor}</span>
                    </div>

                    <div className="flex items-center text-slate-700">
                      <Building className="w-3.5 h-3.5 mr-2 text-slate-400 flex-shrink-0" />
                      <span className="font-semibold text-slate-500 mr-1">Lab:</span>
                      <span className="truncate">{project.laboratoryCommunity}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* View Full Project Technical Details Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-3 rounded-lg bg-bit-navy-soft hover:bg-bit-navy text-bit-navy hover:text-white border border-bit-navy/20 font-bold text-xs transition-all duration-200 flex items-center justify-center group"
                >
                  <span>Explore Complete Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal with Exact Requested Technical Format */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Badges */}
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                {selectedProject.badge && (
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                    {selectedProject.badge}
                  </span>
                )}
              </div>

              {/* Project Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-bit-navy mb-4 leading-snug">
                {selectedProject.title}
              </h3>

              {/* Project Image Banner */}
              <div className="h-56 sm:h-64 rounded-xl overflow-hidden mb-6 bg-slate-900">
                <img
                  src={selectedProject.image}
                  onError={(e) => { e.currentTarget.src = '/images/hero-lab.svg'; }}
                  alt={selectedProject.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Exact Required Fields Specification Grid */}
              <div className="space-y-5 text-xs sm:text-sm">
                
                {/* Meta details bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <span className="font-bold text-bit-navy block mb-1">Student Team:</span>
                    <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                      {selectedProject.studentTeam.map((member, mIdx) => (
                        <li key={mIdx}>{member}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold text-bit-navy block mb-1">Faculty Mentor:</span>
                    <p className="text-slate-700 mb-2">{selectedProject.facultyMentor}</p>
                    <span className="font-bold text-bit-navy block mb-0.5">Lab / Community:</span>
                    <p className="text-slate-700">{selectedProject.laboratoryCommunity}</p>
                  </div>
                </div>

                {/* Problem Addressed */}
                <div className="bg-red-50/50 p-4 rounded-xl border border-red-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-900 mb-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1.5 text-red-700" />
                    Problem Addressed
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedProject.problemAddressed}
                  </p>
                </div>

                {/* Design and Development Process */}
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1 flex items-center">
                    <Settings2 className="w-4 h-4 mr-1.5 text-blue-700" />
                    Design & Development Process
                  </div>
                  <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                    {selectedProject.designProcess}
                  </p>
                </div>

                {/* Individual Student Learning */}
                <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center">
                    <Lightbulb className="w-4 h-4 mr-1.5 text-amber-700" />
                    Individual Student Learning & Competencies Acquired
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedProject.individualLearning}
                  </p>
                </div>

                {/* Final Outcome */}
                <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-700" />
                    Final Tangible Outcome
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedProject.finalOutcome}
                  </p>
                </div>

                {/* Future Scope */}
                <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-1 flex items-center">
                    <Rocket className="w-4 h-4 mr-1.5 text-purple-700" />
                    Future Scope & Deployment
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedProject.futureScope}
                  </p>
                </div>

              </div>

              {/* Close Button */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-bit-navy text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-bit-navy-light transition-colors"
                >
                  Close Project Dossier
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;

