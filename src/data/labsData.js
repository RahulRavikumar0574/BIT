export const labCategories = [
  "All Labs",
  "Advanced Manufacturing",
  "CAD/CAM and Design",
  "Thermal Engineering",
  "Automobile Engineering",
  "Industrial Safety",
  "Research and Innovation"
];

export const laboratoriesData = [
  {
    id: "lab-adv-mfg",
    name: "Advanced Manufacturing & CNC Machining Centre",
    category: "Advanced Manufacturing",
    image: "/images/lab-advanced-manufacturing.svg",
    imageAlt: "Advanced CNC milling machine and machining tools in mechanical laboratory",
    tagline: "Precision multi-axis machining, automation, and subtractive fabrication technologies.",
    equipment: [
      "CNC Vertical Machining Centre (VMC 3-Axis / 4-Axis compatible) [Editable]",
      "CNC Lathe & Turning Centre with Fanuc Controller [Editable]",
      "Wire EDM (Electrical Discharge Machine) [Editable]",
      "Coordinate Measuring Machine (CMM) & Surface Roughness Tester [Editable]",
      "Universal Tool & Cutter Grinder and Precision Lathes [Editable]"
    ],
    studentActivities: [
      "G-code & M-code programming and virtual CAM verification using Mastercam / Siemens NX.",
      "Machining intricate aeronautical, automotive, and orthopedic implant prototype components.",
      "Investigation of surface finish, tool wear dynamics, and cutting force measurement during machining.",
      "Statistical Process Control (SPC) and quality inspection using micrometers, CMM, and profile projectors."
    ],
    learningOutcomes: [
      "Mastery of CNC programming, setup, and safe operation of heavy industrial machine tools.",
      "Deep understanding of GD&T tolerances and precision dimensional inspection.",
      "Preparedness for industrial production planning, CNC programming, and tooling engineering roles."
    ]
  },
  {
    id: "lab-cad-cam",
    name: "CAD/CAM & Digital Simulation Studio",
    category: "CAD/CAM and Design",
    image: "/images/lab-cad-cam.svg",
    imageAlt: "High-end engineering computer workstation showing 3D CAD design models",
    tagline: "Generative modeling, finite element simulation, computational design, and digital prototyping.",
    equipment: [
      "High-Performance Graphics Workstations (Intel Xeon / RTX Professional GPUs) [Editable]",
      "Industry CAD Suites: Dassault Systèmes CATIA & SolidWorks [Licensed Campus Edition]",
      "CAE Simulation Suites: ANSYS Mechanical, Fluent (CFD) & LS-DYNA [Editable]",
      "PTC Creo, Autodesk Fusion 360, and Altair HyperMesh [Editable]",
      "High-speed networked centralized server storage for rendering [Editable]"
    ],
    studentActivities: [
      "Parametric solid and surface modeling of complex mechanical assemblies and engine components.",
      "Structural FEA, modal vibration analysis, and fatigue life prediction under cyclic loading.",
      "Topology optimization and generative design for component mass reduction and 3D print readiness.",
      "Computational fluid dynamics (CFD) analysis of aerodynamic drag on race car spoilers and heat exchangers."
    ],
    learningOutcomes: [
      "Competency to translate complex engineering briefs into certified production drawings.",
      "Validated skills in stress concentration analysis, failure prediction, and aerodynamic simulation.",
      "Preparedness for Dassault Systèmes and ANSYS global professional credentials."
    ]
  },
  {
    id: "lab-thermal",
    name: "Thermal Engineering & Fluid Dynamics Lab",
    category: "Thermal Engineering",
    image: "/images/lab-thermal.svg",
    imageAlt: "Thermal engineering test apparatus with pressure gauges, piping and heat exchangers",
    tagline: "Thermodynamics, heat transfer phenomena, refrigeration cycles, and fluid flow dynamics.",
    equipment: [
      "Subsonic Wind Tunnel with Multi-Tube Manometer & Lift/Drag Balance [Editable]",
      "Computerized Multi-Cylinder Petrol & Diesel Engine Test Rig with Eddy Current Dynamometer [Editable]",
      "Shell & Tube, Concentric Tube, and Plate-Fin Heat Exchanger Evaluation Testbeds [Editable]",
      "Vapour Compression Refrigeration & Air Conditioning (HVAC) Test Unit [Editable]",
      "Centrifugal & Reciprocating Pump Flow Benches with Venturi & Orifice Meters [Editable]"
    ],
    studentActivities: [
      "Conducting heat transfer coefficient benchmarking across forced and free convection surfaces.",
      "Experimental lift and drag measurement around airfoils, automobiles, and bluff bodies in wind tunnels.",
      "Thermal efficiency and emission profiling of bio-diesel fuel blends in test engines.",
      "Performance evaluation of eco-friendly refrigerants with low Global Warming Potential (GWP)."
    ],
    learningOutcomes: [
      "Practical mastery of thermodynamic laws, psychrometry, and fluid transport phenomena.",
      "Ability to design and optimize heat exchangers, piping networks, and cooling systems.",
      "Foundation for careers in HVAC design, aerospace aerodynamics, and thermal power systems."
    ]
  },
  {
    id: "lab-automobile",
    name: "Automobile & Electric Mobility Testbed",
    category: "Automobile Engineering",
    image: "/images/lab-automobile.svg",
    imageAlt: "Modern vehicle chassis, electric powertrain and automotive testing instrumentation",
    tagline: "Powertrain diagnostics, electric vehicle battery integration, chassis tuning, and telematics.",
    equipment: [
      "Full Chassis Suspension & Steering System Cut-Section Working Simulator [Editable]",
      "Electric Vehicle (EV) Powertrain Testbed with BLDC / PMSM Motor & Inverter Rig [Editable]",
      "Battery Pack Assembly & Thermal Characterization Test Station [Editable]",
      "Automotive Diagnostic Scanner (OBD-II) with CAN-bus Data Logger [Editable]",
      "Brake Test Bench & Regenerative Braking Experimental Apparatus [Editable]"
    ],
    studentActivities: [
      "Fabrication and tuning of student competition vehicles (SAE BAJA all-terrain vehicle & e-Kart).",
      "Analyzing Battery Management System (BMS) performance under fast discharge and thermal stress.",
      "CAN-bus automotive network protocol decoding and sensor data streaming to IoT cloud.",
      "Vehicle dynamics setup: camber, caster, toe angle tuning, and damper response calibration."
    ],
    learningOutcomes: [
      "Thorough knowledge of conventional powertrain teardown and modern EV battery architectures.",
      "Practical experience in automotive electricals, regenerative braking, and motor controller tuning.",
      "Immediate readiness for OEM automotive design, EV startups, and tier-1 auto component manufacturers."
    ]
  },
  {
    id: "lab-safety",
    name: "Industrial Safety & Ergonomics Studio",
    category: "Industrial Safety",
    image: "/images/lab-safety.svg",
    imageAlt: "Industrial safety inspection and testing laboratory equipment",
    tagline: "Hazard identification, workplace toxicology, fire safety modeling, and ergonomic evaluation.",
    equipment: [
      "Industrial Fire Simulator & Fire Extinguisher Discharge Test Station [Editable]",
      "Digital Sound Level Meter, Noise Dosimeter & Octave Band Analyzer [Editable]",
      "Gas Chromatography / Flue Gas & Toxic Vapor Analyzer [Editable]",
      "Lux Meter, Heat Stress (WBGT) Monitor & Dust Sampler [Editable]",
      "Ergonomic Posture Analysis Tools (RULA/REBA Digital Biomechanical Sensors) [Editable]"
    ],
    studentActivities: [
      "Conducting comprehensive Hazard and Operability (HAZOP) simulations for process chemical plants.",
      "Occupational noise mapping and acoustic barrier efficiency measurement in high-decibel zones.",
      "Industrial ventilation and indoor air quality (IAQ) monitoring for particulate matters and VOCs.",
      "Biomechanical posture evaluation to eliminate repetitive strain injuries on industrial workstations."
    ],
    learningOutcomes: [
      "Ability to formulate OSHA and ISO 45001 compliant environmental health and safety audit documents.",
      "Capability to lead industrial accident investigations and quantitative hazard risk modeling.",
      "Direct pathway toward recognized global safety certifications (NEBOSH, CSP, IOSH)."
    ]
  },
  {
    id: "lab-research",
    name: "Research, Additive Manufacturing & Innovation Cell",
    category: "Research and Innovation",
    image: "/images/lab-research.svg",
    imageAlt: "3D additive manufacturing printer building an intricate mechanical prototype component",
    tagline: "Rapid prototyping, composite material synthesis, smart sensors, and patent incubation.",
    equipment: [
      "Industrial Grade Fused Deposition Modeling (FDM) 3D Printers [Editable]",
      "SLA / DLP High-Resolution Resin 3D Printer for Micro-Fluidic & Intricate Parts [Editable]",
      "Vacuum Bagging & Autoclave Assisted Composite Laminate Curing Setup [Editable]",
      "Pin-on-Disc Wear Testing Rig & Micro-Hardness Tester [Editable]",
      "IoT Prototyping Benches with Microcontrollers, Strain Gauges & Accelerometers [Editable]"
    ],
    studentActivities: [
      "Rapid fabrication of complex conceptual mechanical geometries for collegiate competitions.",
      "Synthesis and tensile characterization of natural fiber reinforced polymer composite materials.",
      "Development of low-cost assistive mechanical prosthetics and robotic grippers.",
      "Filing provisional patents and preparing proof-of-concept prototypes for startup pitch competitions."
    ],
    learningOutcomes: [
      "End-to-end fluency in additive manufacturing, slicing parameters, and support optimization.",
      "Research methodology expertise in material testing, characterization, and scientific publication.",
      "Demonstrated ability to convert theoretical patent ideas into functional market-ready prototypes."
    ]
  }
];

