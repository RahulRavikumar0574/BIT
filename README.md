# Department of Mechanical Engineering - Bannari Amman Institute of Technology (BIT)
### Official Institutional Website Prototype & Production Frontend

A modern, responsive, professional web application developed for the **Department of Mechanical Engineering**, **Bannari Amman Institute of Technology (BIT)**, Sathyamangalam, Tamil Nadu, India.

---

## 🌟 Institutional Identity & Core Philosophy
The website embodies the department's signature educational ethos:
> **"Every Student. Individually Developed. Industry-Ready. Empowered to Build."**
> *"Developing competent engineers through personalised learning, industry engagement, innovation and holistic student development."*

---

## 🚀 Key Features & Architectural Highlights

1. **Header & Institutional Navigation**
   - Official BIT mechanical emblem & typography.
   - Sticky navigation with backdrop blur and smooth scrolling.
   - Dropdown menus for Academic Programmes and Special Laboratories.
   - Fully accessible responsive mobile navigation drawer.

2. **Hero Section & Department Snapshot**
   - High-impact visual showing authentic mechanical engineering student laboratory practice.
   - Core headline, supporting statement, and dual CTA buttons (*Explore Our Department* and *Discover Student Opportunities*).
   - 4 Compact Institutional Cards:
     - **Established:** 1996 (Nearly 3 decades of academic excellence)
     - **Programmes:** UG, PG & Ph.D.
     - **NBA Accreditation:** Tier-1 Verified Institutional Status
     - **Core Focus:** Engineering, Innovation & Research

3. **About the Department & Four Pillars**
   - Comprehensive overview, department vision, mission, and institutional strengths.
   - **The Four Key Pillars:**
     1. *Every Student Individually Developed* (Personalised Competency Mapping & 1:15 Mentoring)
     2. *Learning Through Practice* (Special Labs & Technical Communities)
     3. *Industry Readiness* (Industry-Relevant Skills & Global Certifications)
     4. *Innovation & Entrepreneurship* (Prototyping & Venture Support)
   - Integration of contemporary engineering themes: AI & Data in Mechanical, Industry 4.0, Electric Vehicles, Sustainable Engineering, Green Skills, and UN SDGs.

4. **Academic Programmes**
   - **B.E. Mechanical Engineering** (Undergraduate)
   - **M.E. Industrial Safety Engineering** (Postgraduate)
   - **Ph.D. Research Programme** (Doctoral - Anna University Recognized Centre)
   - Detailed cards with descriptions, key learning areas, target career opportunities, industry certifications, and interactive curriculum modal.
   - Fully editable durations, intakes, and eligibility criteria adhering to official norms.

5. **Personalised Student Journey (5-Stage Framework)**
   - Horizontal desktop stepper transforming to responsive vertical cards on mobile.
   - **Stages:**
     1. `DISCOVER` — Identify student interests, assess strengths/skill gaps, understand career aspirations.
     2. `PLAN` — Architect individual learning roadmap, assign faculty mentors, set competency targets.
     3. `BUILD` — Participate in laboratories, join technical communities, develop practical skills.
     4. `REVIEW` — Assess individual progress, obtain 360° feedback, remediate improvement areas.
     5. `LAUNCH` — Placement preparation, higher education coaching, entrepreneurship, and career launch.
   - Includes tangible student deliverables for each stage.

6. **Special Laboratories Showcase**
   - Filterable categories: *Advanced Manufacturing*, *CAD/CAM and Design*, *Thermal Engineering*, *Automobile Engineering*, *Industrial Safety*, *Research and Innovation*.
   - High-resolution authentic imagery, equipment specifications, student activities, and learning outcomes.
   - Interactive equipment detail modals.

7. **Student Projects & Innovation**
   - Filterable by domain: *Design*, *Manufacturing*, *Thermal*, *Automobile*, *Industrial Safety*, *Innovation*.
   - Each project strictly follows the requested institutional format:
     - *Project Title*
     - *Student Team*
     - *Faculty Mentor*
     - *Laboratory or Technical Community*
     - *Problem Addressed*
     - *Design & Development Process*
     - *Individual Student Learning*
     - *Final Tangible Outcome*
     - *Future Scope*
   - Interactive project detail modal.

8. **Placement Records – Career Outcomes & Industry Connections**
   - Included in the main navigation.
   - **4 Headline Stats:** Total Students Placed, Recruiting Companies, Highest Salary Package, Placement Rate (with editable placeholders `[XX]`).
   - Clean, responsive Year-Wise Placement Table with 2025–26 (Ongoing), 2024–25, 2023–24, and 2022–23 records.
   - Top Recruiting Partners showcase (L&T, Tata Motors, Bosch, TVS, Ashok Leyland, Caterpillar, Cummins, Renault Nissan, Zoho, etc.).
   - Sector-wise breakdown: *Core Mechanical*, *IT & Software*, *Higher Education & Research*, *Internships & PPOs*.
   - Student placement success reflections.
   - Downloadable/viewable placement report dossiers with interactive preview modal.

9. **Department Student-Development Initiatives**
   - 15 comprehensive initiatives including *Gurukulam*, *PCDP*, *Specialised Student Communities*, *Forums & Societies*, *Self-Administration*, *Internal Hackathons*, *Entrepreneurship Incubation*, *Alumni Mentoring*, *Industrial Mentoring*, *Placement Training*, *GATE Prep*, *Green Campus & SDG*, *Sports & Holistic Wellness*, *Research & Patent Wing*.
   - Each initiative structured to answer: *What is it?*, *Why it matters?*, *How students participate?*, *What students develop or achieve?*

10. **Student Achievements & Testimonials**
    - Competition trophies, national championships, and Scopus journal publications.
    - Tabbed authentic testimonials: *Current Students*, *Distinguished Alumni*, and *Industry Advisory Mentors*.

11. **News, Workshops & Technical Events**
    - Filterable announcements for workshops, guest lectures, industrial visits, make-a-thons, and international conferences.
    - "View All News" modal archive.

12. **Frequently Asked Questions (FAQ)**
    - Interactive accordion covering programmes, laboratories, PCDP, placements, and higher education.
    - Real-time keyword search.

13. **Verified Contact Details & Enquiry Form**
    - Institutional address: Bannari Amman Institute of Technology, Sathyamangalam - 638 401, Tamil Nadu.
    - Verified phone numbers and official email addresses.
    - Embedded Google Maps interactive view.
    - Interactive enquiry form with client-side field validation, error alerts, and confirmation dialogs.

---

## 🛠️ Tech Stack

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS v3 with custom BIT institutional color system
  - `bit-navy`: `#0B2545` (Primary Academic)
  - `bit-gold`: `#D97706` (Institutional Accent)
  - `bit-slate`: High-contrast neutral typography
- **Icons:** Lucide React (`lucide-react`)
- **Fonts:** Plus Jakarta Sans & Merriweather (system fallback)
- **Architecture:** Decoupled modular design with separate data stores in `src/data/`

---

## 📁 Project Directory Structure

```
d:\Projects\BIT\
├── index.html                  # HTML entry point with meta SEO & fonts
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite server & build configuration
├── tailwind.config.js          # Custom BIT palette & typography
├── postcss.config.js           # PostCSS configuration
├── src/
│   ├── main.jsx                # React DOM root entry
│   ├── App.jsx                 # Main layout & section coordinator
│   ├── index.css               # Tailwind directives & global styling
│   ├── components/             # Reusable UI components
│   │   ├── Header.jsx          # Institutional header & mobile drawer
│   │   ├── Hero.jsx            # Hero section with department snapshot
│   │   ├── About.jsx           # Overview, vision, mission, 4 pillars
│   │   ├── Programmes.jsx      # UG, PG & Ph.D. degree cards & modals
│   │   ├── StudentJourney.jsx  # 5-stage student development framework
│   │   ├── SpecialLabs.jsx     # Laboratory facilities & equipment
│   │   ├── Projects.jsx        # Filterable student projects showcase
│   │   ├── PlacementRecords.jsx# Dedicated placement statistics & table
│   │   ├── Initiatives.jsx     # 15 student development initiatives
│   │   ├── Achievements.jsx    # Awards & tabbed testimonials
│   │   ├── NewsEvents.jsx      # News, workshops & archive modal
│   │   ├── Faq.jsx             # Interactive FAQ accordion & search
│   │   ├── Contact.jsx         # Contact coordinates & enquiry form
│   │   └── Footer.jsx          # Institutional footer & copyright
│   └── data/                   # Editable data files (No hardcoded data in UI)
│       ├── departmentData.js   # Vision, mission, snapshot, contacts
│       ├── programmesData.js   # Programme learning areas, eligibility
│       ├── journeyData.js      # Discover, Plan, Build, Review, Launch
│       ├── labsData.js         # Lab categories, equipment, outcomes
│       ├── projectsData.js     # Student innovation dossiers
│       ├── placementsData.js   # Year-wise stats, recruiters, stories
│       ├── initiativesData.js  # PCDP, Gurukulam, clubs, SDG data
│       ├── achievementsData.js # Honors, student & alumni testimonials
│       ├── newsData.js         # News items & workshops
│       └── faqData.js          # Frequently asked questions
```

---

## 💻 How to Run Locally in VS Code

### Prerequisites
- Node.js (version 18 or higher installed on your computer). You can verify by opening a terminal and running `node -v`.

### Step 1: Open the Project in VS Code
1. Open Visual Studio Code.
2. Select **File > Open Folder...** and choose `d:\Projects\BIT`.

### Step 2: Open Terminal in VS Code
- Press `Ctrl + ~` (or select **Terminal > New Terminal**).

### Step 3: Install Dependencies (If not already installed)
```bash
npm install
```

### Step 4: Start the Development Server
```bash
npm run dev
```

The terminal will display the local development URL:
```
  VITE v6.0.7  ready in 350 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```
- Hold `Ctrl` and click `http://localhost:3000/` or open your browser and navigate to `http://localhost:3000`.

### Step 5: Build for Production (Optional)
To generate an optimized, minified production build:
```bash
npm run build
```
The output will be placed in the `dist/` directory, ready to be hosted on any web server or integrated into the official BIT domain.

---

## 📝 How to Update Department Data & Images

All content is cleanly separated from UI components inside `src/data/`:
- **Placement Records:** Open `src/data/placementsData.js` to update year-wise tables, placed student counts, or salary packages.
- **Academic Programmes:** Open `src/data/programmesData.js` to modify eligibility, intake seats, or curriculum highlights.
- **Laboratories & Equipment:** Open `src/data/labsData.js` to add new machine tools or edit lab descriptions.
- **Student Projects:** Open `src/data/projectsData.js` to add new student innovation teams and award winners.
- **News & Announcements:** Open `src/data/newsData.js` to publish new workshops or events.

---

## 🏛️ Verification & Data Integrity Note
All official institutional information (establishment year, campus address, phones, emails, and degree names) reflects verified BIT Sathyamangalam records. Audited statistics such as annual placement percentages and intake numbers are provided with clearly labeled editable placeholders (`[XX]`) to allow department administrators to input the exact audited figures upon annual release without modifying code.

