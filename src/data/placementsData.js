export const placementOverviewStats = {
  totalPlaced: "[XX] Students",
  recruitingCompanies: "[XX]+ Companies",
  highestPackage: "₹[XX] LPA",
  placementPercentage: "[XX]%",
  averagePackage: "₹[XX] LPA",
  internshipOffers: "[XX]+ Offers",
  note: "All statistics display verified institutional records or editable placeholders pending final annual audit publication. Sample figures are clearly tagged."
};

export const yearWisePlacementRecords = [
  {
    academicYear: "2025–26",
    status: "Ongoing Drive",
    eligibleStudents: "[XX]",
    studentsPlaced: "[XX]",
    placementPercentage: "[XX]%",
    highestPackage: "₹[XX] LPA",
    averagePackage: "₹[XX] LPA",
    corePercentage: "[XX]%",
    itPercentage: "[XX]%",
    higherEdPathways: "[XX]",
    remarks: "Recruitment season currently in progress for the graduating batch."
  },
  {
    academicYear: "2024–25",
    status: "Completed",
    eligibleStudents: "[XX]",
    studentsPlaced: "[XX]",
    placementPercentage: "[XX]%",
    highestPackage: "₹[XX] LPA",
    averagePackage: "₹[XX] LPA",
    corePercentage: "[XX]%",
    itPercentage: "[XX]%",
    higherEdPathways: "[XX]",
    remarks: "Strong recruitment across Automotive OEMs, Energy, and Automation leaders."
  },
  {
    academicYear: "2023–24",
    status: "Completed",
    eligibleStudents: "[XX]",
    studentsPlaced: "[XX]",
    placementPercentage: "[XX]%",
    highestPackage: "₹[XX] LPA",
    averagePackage: "₹[XX] LPA",
    corePercentage: "[XX]%",
    itPercentage: "[XX]%",
    higherEdPathways: "[XX]",
    remarks: "Substantial growth in multidisciplinary Mechatronics and Safety Engineering profiles."
  },
  {
    academicYear: "2022–23",
    status: "Completed",
    eligibleStudents: "[XX]",
    studentsPlaced: "[XX]",
    placementPercentage: "[XX]%",
    highestPackage: "₹[XX] LPA",
    averagePackage: "₹[XX] LPA",
    corePercentage: "[XX]%",
    itPercentage: "[XX]%",
    higherEdPathways: "[XX]",
    remarks: "High placement conversion from pre-placement industrial internship offers."
  }
];

export const topRecruiters = [
  { name: "Larsen & Toubro (L&T)", sector: "Core Infrastructure & Heavy Engg", tier: "Core Pioneer" },
  { name: "Tata Motors", sector: "Automotive & Commercial Vehicles", tier: "Core Automotive" },
  { name: "Bosch India", sector: "Mobility Solutions & Industrial Tech", tier: "Global MNC" },
  { name: "Ashok Leyland", sector: "Commercial Vehicle Manufacturing", tier: "Core Automotive" },
  { name: "TVS Motor Company", sector: "Automotive & Electric Mobility", tier: "Core Automotive" },
  { name: "Caterpillar India", sector: "Heavy Machinery & Earthmoving", tier: "Global MNC" },
  { name: "Cummins India", sector: "Engine & Power Generation Tech", tier: "Core Thermal" },
  { name: "Renault Nissan Tech", sector: "Automotive R&D & Product Design", tier: "Core R&D" },
  { name: "Saint-Gobain", sector: "Advanced Materials & Manufacturing", tier: "Global Leader" },
  { name: "Thermax Limited", sector: "Energy & Environmental Solutions", tier: "Thermal & Green" },
  { name: "Titan Engineering & Automation", sector: "Precision Engg & Robotics", tier: "Automation" },
  { name: "Zoho Corporation", sector: "Enterprise Software & Cloud Tech", tier: "Tech / Product" },
  { name: "Cognizant", sector: "Digital Engineering & IoT Services", tier: "IT Services" },
  { name: "Infosys", sector: "Engineering Services & Simulation", tier: "IT Services" },
  { name: "TCS (Tata Consultancy Services)", sector: "Engineering & Industrial IoT", tier: "Tech Leader" },
  { name: "Accenture", sector: "Consulting & Technology Services", tier: "Global Consulting" }
];

export const placementSectors = [
  {
    id: "core-mech",
    title: "Core Mechanical Engineering Placements",
    icon: "Cog",
    percentage: "[XX]%",
    description: "Roles within premier automotive OEMs, tier-1 component manufacturers, aerospace tooling, defense manufacturing, and heavy process equipment.",
    sampleRoles: [
      "Graduate Engineer Trainee (GET)",
      "CAD/CAE Design Engineer",
      "Production & Manufacturing Specialist",
      "Thermal & HVAC Systems Engineer",
      "Quality Assurance & Metrology Engineer"
    ],
    highlight: "Hands-on laboratory hours and GD&T certifications give our graduates direct advantage during core technical panel interviews."
  },
  {
    id: "it-software",
    title: "IT, Robotics & Software Placements",
    icon: "Code2",
    percentage: "[XX]%",
    description: "Mechanical engineers with strong programming skills (Python, C++, ROS, IoT) recruited into digital twin development, robotics automation, and enterprise cloud applications.",
    sampleRoles: [
      "Robotics & Automation Engineer",
      "Industrial IoT Solution Developer",
      "PLM (Product Lifecycle Mgmt) Analyst",
      "Software Engineer / Systems Analyst",
      "Simulation & Digital Twin Developer"
    ],
    highlight: "BIT's Gurukulam and coding bootcamps train students to compete successfully alongside computer science peers."
  },
  {
    id: "higher-ed",
    title: "Higher Education & Research Pathways",
    icon: "GraduationCap",
    percentage: "[XX]%",
    description: "Graduates securing admissions into prestigious Indian institutions (IITs, IISc, NITs, IIMs) and top international universities in USA, Germany, UK, and Singapore.",
    sampleRoles: [
      "M.Tech / M.S. in Automotive Systems, Robotics, Aerospace",
      "MBA in Supply Chain & Operations Management",
      "Direct Ph.D. Fellowships in Premier Research Institutes",
      "GATE, GRE, CAT Competitive Coaching Qualifiers"
    ],
    highlight: "Faculty supervisors assist with published research papers, statement of purpose drafting, and academic recommendation letters."
  },
  {
    id: "internships",
    title: "Industry Internships & Pre-Placement Offers (PPOs)",
    icon: "Briefcase",
    percentage: "[XX]%",
    description: "Mandatory structured summer and semester-long industrial internships leading directly to full-time career placement prior to graduation.",
    sampleRoles: [
      "Full-Semester On-Site Industrial Internship",
      "Summer R&D Project Internship with Stipend",
      "Dual-degree & industry-sponsored project tracks"
    ],
    highlight: "Over [XX]% of participating interns convert their internship into full-time Pre-Placement Offers (PPO) before their final semester."
  }
];

export const studentPlacementStories = [
  {
    id: "story-1",
    name: "[Student Name Placeholder]",
    rollNo: "[XXME101]",
    batch: "Class of 2024",
    company: "Tata Motors / [Leading Automotive OEM]",
    role: "Graduate Engineer Trainee – EV Powertrain Design",
    package: "₹[XX] LPA",
    quote: "Working in the Automobile & Electric Mobility lab and representing BIT in SAE BAJA gave me real confidence. When the interviewers asked practical questions on chassis torsion and battery cooling, I drew directly from my hands-on build experience.",
    journeyPillar: "Learning Through Practice & PCDP Mentoring"
  },
  {
    id: "story-2",
    name: "[Student Name Placeholder]",
    rollNo: "[XXME204]",
    batch: "Class of 2024",
    company: "Larsen & Toubro (L&T) / [Core EPC Leader]",
    role: "Design Engineer – Plant Piping & Structural Analysis",
    package: "₹[XX] LPA",
    quote: "The personalized competency development roadmap helped me complete ANSYS and CATIA certifications early in my third year. The dedicated faculty mentoring prepared me for rigorous technical evaluations.",
    journeyPillar: "Personalised Competency Development"
  },
  {
    id: "story-3",
    name: "[Student Name Placeholder]",
    rollNo: "[XXME308]",
    batch: "Class of 2024",
    company: "TVS Motor Company / [Mobility Leader]",
    role: "Automation & Robotics Specialist",
    package: "₹[XX] LPA",
    quote: "BIT's encouragement to blend mechanical design with robotics programming gave me a multidisciplinary edge. I was able to demonstrate working PLC programs and kinematic simulations during my recruitment interview.",
    journeyPillar: "Industry Readiness & Hackathons"
  }
];

export const placementReports = [
  {
    title: "Annual Placement & Career Outcomes Report 2024–25 [Editable Draft]",
    fileSize: "2.4 MB (PDF)",
    academicYear: "2024–25",
    description: "Comprehensive statistical compendium of company visits, department salary breakdowns, sector distributions, and recruiter testimonials."
  },
  {
    title: "Placement Statistics & Corporate Partners Dossier 2023–24",
    fileSize: "2.1 MB (PDF)",
    academicYear: "2023–24",
    description: "Detailed report highlighting student placement milestones, major hiring sectors, and student achievements."
  },
  {
    title: "Higher Education & Competitive Examination Outcomes 2024",
    fileSize: "1.8 MB (PDF)",
    academicYear: "2023–24",
    description: "Roster of alumni admitted to premier national (IITs/NITs) and international universities with scholarship details."
  }
];

