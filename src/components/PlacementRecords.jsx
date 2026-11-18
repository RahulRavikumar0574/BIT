import React, { useState } from 'react';
import { 
  placementOverviewStats, 
  yearWisePlacementRecords, 
  topRecruiters, 
  placementSectors, 
  studentPlacementStories, 
  placementReports 
} from '../data/placementsData';
import { 
  Briefcase, TrendingUp, Building2, Award, Download, 
  FileText, CheckCircle2, ChevronRight, Filter, Info, 
  ExternalLink, UserCheck, ShieldCheck, X, Eye 
} from 'lucide-react';

const PlacementRecords = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedReport, setSelectedReport] = useState(null);
  const [viewingRecordDetails, setViewingRecordDetails] = useState(null);

  const filteredRecords = selectedYear === 'All'
    ? yearWisePlacementRecords
    : yearWisePlacementRecords.filter(r => r.academicYear === selectedYear);

  return (
    <section id="placement-records" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-bit-navy text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-sm border border-bit-gold/40">
            <Briefcase className="w-3.5 h-3.5 mr-2 text-bit-gold" />
            Dedicated Career Outcomes & Placements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bit-navy tracking-tight">
            Placement Records – Career Outcomes and Industry Connections
          </h2>
          <div className="w-20 h-1 bg-bit-gold mx-auto my-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Demonstrating tangible student outcomes with top automotive OEMs, core engineering conglomerates, 
            multidisciplinary automation innovators, and premier global universities.
          </p>
        </div>

        {/* 4 Placement Statistics Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          
          {/* Card 1: Total Students Placed */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 border-t-bit-navy">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Total Placed
              </span>
              <div className="p-2 rounded-lg bg-bit-navy-soft text-bit-navy">
                <UserCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-bit-navy">
              {placementOverviewStats.totalPlaced}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Verified campus placement offers
            </div>
            <div className="mt-3 text-[11px] font-semibold text-bit-navy-light bg-slate-100 px-2 py-0.5 rounded inline-block">
              Placeholder [XX]
            </div>
          </div>

          {/* Card 2: Recruiting Companies */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 border-t-bit-gold">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Recruiting Companies
              </span>
              <div className="p-2 rounded-lg bg-amber-50 text-bit-gold-dark">
                <Building2 className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-bit-navy">
              {placementOverviewStats.recruitingCompanies}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Core & multidisciplinary recruiters
            </div>
            <div className="mt-3 text-[11px] font-semibold text-bit-gold-dark bg-amber-50 px-2 py-0.5 rounded inline-block">
              Placeholder [XX]+
            </div>
          </div>

          {/* Card 3: Highest Package */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 border-t-emerald-600">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Highest Package
              </span>
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-bit-navy">
              {placementOverviewStats.highestPackage}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Premier automotive & tech roles
            </div>
            <div className="mt-3 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block">
              Placeholder ₹[XX] LPA
            </div>
          </div>

          {/* Card 4: Placement Percentage */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 border-t-blue-600">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Placement Rate
              </span>
              <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-bit-navy">
              {placementOverviewStats.placementPercentage}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Of eligible graduating students
            </div>
            <div className="mt-3 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded inline-block">
              Placeholder [XX%]
            </div>
          </div>

        </div>

        {/* Year-Wise Placement Records Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 sm:p-8 mb-16">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-extrabold text-bit-navy flex items-center">
                <FileText className="w-5 h-5 mr-2 text-bit-gold" />
                Year-Wise Official Placement Track Record
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Transparent auditing of eligible cohorts and students placed over recent academic years.
              </p>
            </div>

            {/* Filter by Year */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-bold text-slate-600">Year Filter:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-slate-50 border border-slate-300 text-xs font-bold text-bit-navy rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-bit-navy"
              >
                <option value="All">All Academic Years</option>
                <option value="2025–26">2025–26 (Ongoing)</option>
                <option value="2024–25">2024–25</option>
                <option value="2023–24">2023–24</option>
                <option value="2022–23">2022–23</option>
              </select>
            </div>
          </div>

          {/* Clean Professional Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-bit-navy text-white text-[11px] sm:text-xs uppercase tracking-wider font-bold">
                  <th className="py-3.5 px-4 rounded-l-lg">Academic Year</th>
                  <th className="py-3.5 px-4">Drive Status</th>
                  <th className="py-3.5 px-4">Eligible Students</th>
                  <th className="py-3.5 px-4">Students Placed</th>
                  <th className="py-3.5 px-4">Placement Percentage</th>
                  <th className="py-3.5 px-4 text-right rounded-r-lg">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filteredRecords.map((record, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 font-extrabold text-bit-navy flex items-center">
                      <span className="w-2 h-2 rounded-full bg-bit-gold mr-2" />
                      {record.academicYear}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        record.status === 'Ongoing Drive' 
                          ? 'bg-amber-100 text-amber-800 animate-pulse' 
                          : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-mono text-slate-700">
                      {record.eligibleStudents}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-bit-navy">
                      {record.studentsPlaced}
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {record.placementPercentage}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => setViewingRecordDetails(record)}
                        className="px-3 py-1 bg-bit-navy-soft hover:bg-bit-navy text-bit-navy hover:text-white rounded text-xs font-bold transition-colors inline-flex items-center"
                      >
                        <Eye className="w-3.5 h-3.5 mr-1" />
                        <span>View Details</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Verification Notice */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <div className="flex items-center">
              <Info className="w-4 h-4 mr-1.5 text-bit-gold flex-shrink-0" />
              <span>
                All statistics are verified through internal audits. Data placeholders are clearly marked [XX] and easily editable by the web admin.
              </span>
            </div>
            <span className="text-[11px] text-slate-400">
              Additional academic years easily addable in `placementsData.js`
            </span>
          </div>

        </div>

        {/* Top Recruiting Companies Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-bit-gold uppercase tracking-widest">
              Industry Partnerships
            </span>
            <h3 className="text-2xl font-extrabold text-bit-navy mt-1">
              Top Recruiting Partners & Corporate Ecosystem
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Regular campus recruitment from world-class automotive manufacturers, engineering infrastructure giants, and software innovators.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {topRecruiters.map((recruiter, rIdx) => (
              <div 
                key={rIdx}
                className="bg-white rounded-xl p-4 border border-slate-200 hover:border-bit-navy/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-bit-navy-soft text-bit-navy mx-auto mb-2 flex items-center justify-center font-bold text-xs group-hover:bg-bit-navy group-hover:text-white transition-colors">
                  {recruiter.name.charAt(0)}
                </div>
                <div className="font-extrabold text-xs sm:text-sm text-bit-navy group-hover:text-bit-navy-light mb-1">
                  {recruiter.name}
                </div>
                <div className="text-[10px] text-slate-500 line-clamp-1">
                  {recruiter.sector}
                </div>
                <div className="mt-2 text-[10px] font-semibold text-bit-gold-dark bg-amber-50 rounded py-0.5">
                  {recruiter.tier}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sector-Wise Placement Opportunities Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-bit-navy uppercase tracking-widest">
              Multi-Track Pathways
            </span>
            <h3 className="text-2xl font-extrabold text-bit-navy mt-1">
              Sector-Wise Placement & Career Opportunities
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Our multidisciplinary curriculum prepares graduates for versatile career destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {placementSectors.map((sector) => (
              <div 
                key={sector.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-card transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-extrabold text-bit-navy flex items-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-bit-gold mr-2.5" />
                      {sector.title}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold">
                      {sector.percentage}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {sector.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Career Designations:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {sector.sampleRoles.map((role, rIdx) => (
                        <span key={rIdx} className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-medium">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-600 italic">
                  "{sector.highlight}"
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Placement Success Stories */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-bit-gold uppercase tracking-widest">
              Proven Outcomes
            </span>
            <h3 className="text-2xl font-extrabold text-bit-navy mt-1">
              Student Placement Success Stories
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Real reflections on how personalized mentoring and special labs enabled career milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentPlacementStories.map((story) => (
              <div 
                key={story.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                      {story.package}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {story.batch}
                    </span>
                  </div>

                  <h4 className="text-sm font-extrabold text-bit-navy mb-0.5">
                    {story.name}
                  </h4>
                  <div className="text-xs font-semibold text-bit-gold-dark mb-2">
                    {story.company}
                  </div>
                  <div className="text-[11px] text-slate-500 mb-3">
                    Role: {story.role}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-bit-navy pl-3 mb-4">
                    "{story.quote}"
                  </p>
                </div>

                <div className="text-[11px] font-medium text-slate-500 pt-3 border-t border-slate-100 flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600 flex-shrink-0" />
                  <span>{story.journeyPillar}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloadable Placement Reports Grid */}
        <div className="bg-gradient-to-r from-bit-navy to-bit-navy-dark text-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-bit-gold-light">
                Official Department Audits
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold mt-1">
                Download Placement & Higher Education Reports
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                Access comprehensive brochures and audited recruitment dossiers detailing year-by-year 
                visiting companies, compensation tiers, and alumni higher study enrollments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {placementReports.slice(0, 2).map((rep, rIdx) => (
                <button
                  key={rIdx}
                  onClick={() => setSelectedReport(rep)}
                  className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-left text-xs transition-colors flex items-center space-x-3"
                >
                  <Download className="w-5 h-5 text-bit-gold flex-shrink-0" />
                  <div>
                    <div className="font-bold text-white leading-tight">{rep.academicYear} Report</div>
                    <div className="text-[10px] text-slate-300">{rep.fileSize}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Year Record Detail Modal */}
      {viewingRecordDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setViewingRecordDetails(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider">
              Academic Year {viewingRecordDetails.academicYear}
            </span>
            <h3 className="text-xl font-extrabold text-bit-navy mt-2 mb-4">
              Placement Audit Summary
            </h3>

            <div className="space-y-3 text-xs sm:text-sm bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4">
              <div className="flex justify-between">
                <span className="font-semibold text-slate-600">Eligible Students:</span>
                <span className="font-mono font-bold text-slate-900">{viewingRecordDetails.eligibleStudents}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-600">Total Placed:</span>
                <span className="font-mono font-bold text-bit-navy">{viewingRecordDetails.studentsPlaced}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-600">Placement Percentage:</span>
                <span className="font-bold text-emerald-700">{viewingRecordDetails.placementPercentage}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-600">Highest Salary Package:</span>
                <span className="font-bold text-bit-navy">{viewingRecordDetails.highestPackage}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-600">Average Salary Package:</span>
                <span className="font-bold text-bit-navy">{viewingRecordDetails.averagePackage}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-600">Core Engineering Offers:</span>
                <span className="font-bold text-slate-900">{viewingRecordDetails.corePercentage}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-600">IT / Multidisciplinary Offers:</span>
                <span className="font-bold text-slate-900">{viewingRecordDetails.itPercentage}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 italic mb-6">
              "{viewingRecordDetails.remarks}"
            </p>

            <button
              onClick={() => setViewingRecordDetails(null)}
              className="w-full py-2.5 bg-bit-navy text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-bit-navy-light transition-colors"
            >
              Close Record Summary
            </button>
          </div>
        </div>
      )}

      {/* Downloadable Placement Report Preview Modal */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setSelectedReport(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-bit-navy-soft text-bit-navy flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-extrabold text-bit-navy mb-1">
              {selectedReport.title}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              File Format: {selectedReport.fileSize} • Academic Year {selectedReport.academicYear}
            </p>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs text-slate-700 mb-6 leading-relaxed">
              {selectedReport.description}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  alert(`Downloading ${selectedReport.title} (Official BIT Report Dossier)...`);
                  setSelectedReport(null);
                }}
                className="flex-1 py-2.5 bg-bit-navy hover:bg-bit-navy-light text-white font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center"
              >
                <Download className="w-4 h-4 mr-1.5 text-bit-gold" />
                <span>Download Report Dossier</span>
              </button>
              <button
                onClick={() => setSelectedReport(null)}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default PlacementRecords;

