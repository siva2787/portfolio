import type { ProjectItem, SkillGroup, JourneyMilestone, CertificateItem, NarrationItem } from '../types/portfolio';

export const PERSONAL_IDENTITY = {
  name: 'Easwar S',
  shortTitle: 'AI/ML Engineer & Full-Stack Developer',
  headline: 'Building Intelligent Software Systems Beyond Simple Wrappers.',
  bioSummary: 'Engineering adaptive AI platforms, full-stack web applications, and data-driven systems designed for real-world impact.',
  institution: 'Arasu Engineering College (AI & DS)',
  location: 'Kumbakonam / Chennai, India',
  email: 'sivaai2787@gmail.com',
  github: 'https://github.com/siva2787',
  linkedin: 'https://www.linkedin.com/in/easwar-s-3053a4386/',
  avatarUrl: '/easwar-portrait.png',
  openToWork: true,
  statusBadge: 'Available for Internships & AI Engineering Roles',
};

export const NARRATION_SCRIPTS: Record<string, NarrationItem> = {
  hero: {
    sectionId: 'hero',
    sectionTitle: 'Prologue',
    script: "Hi, I'm Easwar. Welcome to my portfolio. I'm passionate about building intelligent software and meaningful digital experiences. Let me walk you through my projects, technical architecture, and problem-solving journey.",
    estimatedDurationSeconds: 12,
  },
  about: {
    sectionId: 'about',
    sectionTitle: 'Philosophy',
    script: "My journey is driven by curiosity, experimentation, and a desire to turn ideas into useful products. I believe machine learning creates true value only when coupled with clean full-stack architecture and intuitive user interfaces.",
    estimatedDurationSeconds: 14,
  },
  journey: {
    sectionId: 'journey',
    sectionTitle: 'Journey',
    script: "Here is my engineering journey — from competitive national hackathons like Smart India Hackathon, to virtual internships at CodeAlpha, and industrial exposure to enterprise production systems.",
    estimatedDurationSeconds: 13,
  },
  skills: {
    sectionId: 'skills',
    sectionTitle: 'Expertise',
    script: "My technical toolkit brings together Python and deep learning frameworks with modern React, Node.js, and cloud deployments. Every skill here is backed by concrete code in real projects.",
    estimatedDurationSeconds: 12,
  },
  projects: {
    sectionId: 'projects',
    sectionTitle: 'Case Studies',
    script: "Here are some of the software products I have built. Each project challenged me to think deeply about system architecture, data flow, predictive accuracy, and end-user experience.",
    estimatedDurationSeconds: 13,
  },
  experience: {
    sectionId: 'experience',
    sectionTitle: 'Credentials',
    script: "Take a look at my verified internships, simulation achievements, and industry workshops covering data analytics, forensic technology, and ethical cybersecurity.",
    estimatedDurationSeconds: 11,
  },
  contact: {
    sectionId: 'contact',
    sectionTitle: 'Closing Scene',
    script: "If you have an engineering challenge, an internship opportunity, or an exciting project in mind, I'd love to connect. Drop a message or reach out on LinkedIn.",
    estimatedDurationSeconds: 11,
  },
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'ai-personalized-learning',
    slug: 'ai-personalized-learning',
    title: 'AI Personalized Learning Platform',
    tagline: 'Adaptive AI-driven study sequencing & predictive learner mastery',
    category: 'AI / ML',
    summary: 'A full-stack intelligent learning platform that dynamically tailors educational content to student pace, performance history, and knowledge retention curves.',
    problem: 'One-size-fits-all curricula cause high student cognitive fatigue and leave conceptual gaps unresolved before advancing to complex topics.',
    solution: 'Designed an adaptive evaluation engine that diagnoses knowledge gaps in real time, recommends targeted remedial modules, and graphs mastery trajectories across subjects.',
    architecture: [
      'React frontend with modular component architecture & interactive visual analytics',
      'Node.js & Express API gateway managing authentication and progress persistence',
      'Python ML microservice computing student mastery scores and next-best learning recommendations',
      'MongoDB database indexing questions, student submission vectors, and mastery graphs'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'JWT', 'REST API'],
    highlights: [
      'Real-time student diagnostic assessment with dynamic question difficulty scaling',
      'Intuitive analytics dashboard visualizing mastery heatmaps across curriculum domains',
      'Deployed full-stack with secure JWT authentication and modular microservice endpoints'
    ],
    githubUrl: 'https://github.com/siva2787/AI-PERSONALIZED-LEARNING',
    liveUrl: 'https://ai-personalized-learning-coral.vercel.app/',
    image: '/project-ai-learning.png',
    metrics: [
      { label: 'Architecture', value: 'Microservice' },
      { label: 'Auth Mode', value: 'JWT / Secure Cookie' },
      { label: 'Evaluation', value: 'Real-time Scoring' }
    ],
    featured: true
  },
  {
    id: 'resumeiq',
    slug: 'resumeiq',
    title: 'ResumeIQ — AI Resume Analyzer',
    tagline: 'ATS-grade semantic evaluation, skill gap breakdown & optimization insights',
    category: 'AI / ML',
    summary: 'A production-grade AI resume analysis system that scans resumes against target job roles, detects missing keywords, highlights formatting risks, and generates actionable structural recommendations.',
    problem: 'Job seekers struggle to understand why their applications are filtered out by automated Applicant Tracking Systems (ATS) and fail to align their experience with modern hiring rubrics.',
    solution: 'Constructed an AI-powered analyzer that parses PDF/text resumes, benchmarks skill coverage against industrial taxonomies, grades readability, and returns interactive visual scorecards.',
    architecture: [
      'React 19 single-page interface with responsive dashboard layout & Framer Motion transitions',
      'Zustand state store managing multi-stage resume parsing states and score caching',
      'AI analysis pipeline orchestrating semantic extraction, keyword gap identification, and rubric scoring',
      'Export engine compiling downloadable PDF diagnostic reports for job seekers'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'AI Parsing'],
    highlights: [
      'Instant ATS-readability and keyword relevance scoring with visual breakdown gauges',
      'Detailed skill gap matrix comparing applicant credentials to target role requisites',
      'Comprehensive report generation highlighting actionable phrasing optimizations'
    ],
    githubUrl: 'https://github.com/siva2787/ResumeIQ',
    liveUrl: 'https://resume-iq-ruby.vercel.app/',
    image: '/resumeiq.png',
    metrics: [
      { label: 'Scoring Vectors', value: 'ATS, Skills, Structure' },
      { label: 'Client Framework', value: 'React 19 + TS' },
      { label: 'State Management', value: 'Zustand Store' }
    ],
    featured: true
  },
  {
    id: 'studentau-helper',
    slug: 'studentau-helper',
    title: 'Student Helper App (ARASUMATE Utility)',
    tagline: 'Academic utility tool for internal marks forecasting & attendance management',
    category: 'Intelligent Utility',
    summary: 'A web utility built for university peers that computes internal marks, tracks attendance margins, and calculates required scores for targeted semester GPA tiers.',
    problem: 'Students struggled with manual calculations across multiple internal assessment rubrics, resulting in surprise grade penalties and attendance shortages.',
    solution: 'Developed an interactive calculation and forecasting dashboard that takes continuous assessment inputs and renders clear safety thresholds.',
    architecture: [
      'Streamlit web application with reactive numerical calculation widgets',
      'Python data analysis scripts modelling historical grading formulas',
      'Interactive visual distribution charts displaying grade trajectories'
    ],
    techStack: ['Python', 'Streamlit', 'Pandas', 'NumPy'],
    highlights: [
      'Rapid assessment calculator modeling university-specific internal mark formulas',
      'Attendance deficit forecaster alerting users before falling below mandatory percentages',
      'Zero-friction deployment accessed directly by classmates across mobile and desktop devices'
    ],
    githubUrl: 'https://github.com/siva2787/studentau',
    liveUrl: 'https://studentauapp.streamlit.app',
    image: '/project-student-helper.png',
    metrics: [
      { label: 'User Community', value: 'University Classmates' },
      { label: 'Deployment', value: 'Streamlit Cloud' }
    ],
    featured: true
  },
  {
    id: 'learntwin-ai',
    slug: 'learntwin-ai',
    title: 'LearnTwin AI',
    tagline: 'Cognitive digital twin for personalized study guidance & active recall',
    category: 'AI / ML',
    summary: 'An autonomous digital learning companion that mirrors student progress, builds a personalized knowledge graph, and conducts conversational retrieval practice.',
    problem: 'Students frequently review material passively without active recall, resulting in rapid retention decay and poor long-term exam performance.',
    solution: 'Engineered an interactive conversational tutor that questions students using Socratic techniques, evaluates concept comprehension, and schedules spaced repetitions.',
    architecture: [
      'Modern web client built with responsive mobile-first typography and dynamic chat flows',
      'Prompt orchestration engine structuring adaptive active recall drills',
      'Knowledge vector representation tracking concept grasp over recurring study sessions'
    ],
    techStack: ['TypeScript', 'React', 'Python', 'FastAPI', 'LLM Prompting', 'Vector Embeddings'],
    highlights: [
      'Socratic dialogue mode challenging students to explain fundamental concepts in their own words',
      'Dynamic retention index identifying weak conceptual nodes prior to testing intervals',
      'Lightweight API layer designed for high responsiveness during multi-turn study sessions'
    ],
    githubUrl: 'https://github.com/siva2787/learntwin-ai',
    metrics: [
      { label: 'Interaction Pattern', value: 'Socratic Active Recall' },
      { label: 'Focus Area', value: 'Retention Optimization' }
    ],
    featured: false
  },
  {
    id: 'zone-masteryflow',
    slug: 'zone-masteryflow',
    title: 'ZONE — MasteryFlow Platform',
    tagline: 'Deep work focus environment and mastery-based engineering roadmap tracker',
    category: 'Full-Stack',
    summary: 'A dedicated focus dashboard integrating milestone execution, Pomodoro flow states, and curriculum mastery tracking for software engineers.',
    problem: 'Context switching and unstructured study schedules decrease deep coding output and lead to project abandonment.',
    solution: 'Built a flow-state workspace uniting engineering project checkpoints with structured distraction-free work intervals.',
    architecture: [
      'Component-based client application with keyboard-first navigation',
      'Local persistence with offline-first state synchronization',
      'Visual milestone progress visualizer with dynamic completion stats'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Web Storage API'],
    highlights: [
      'Integrated distraction-free focus timer synchronized with sprint objectives',
      'Linear milestone breakdown visualizing prerequisites before unlocking advanced tasks'
    ],
    featured: false
  },
  {
    id: 'legalmet-ai',
    slug: 'legalmet-ai',
    title: 'LegalMet AI / LegalMetriX',
    tagline: 'Legal Metrology compliance auditor & label requirement verification solution',
    category: 'AI / ML',
    summary: 'An automated document and packaging analysis prototype that checks consumer goods labeling against statutory Legal Metrology rules.',
    problem: 'E-commerce vendors frequently face heavy regulatory fines due to non-compliant packaging declarations and mandatory field omissions.',
    solution: 'Designed an optical and rule-based verification pipeline to audit mandatory declarations (MRP, manufacturing dates, net quantity, manufacturer origin).',
    architecture: [
      'Python processing pipeline for image pre-processing and text extraction',
      'Rule validation engine checking extracted packaging fields against regulatory checklists',
      'Review dashboard displaying validation pass/fail breakdowns with annotated evidence'
    ],
    techStack: ['Python', 'OCR / Vision', 'FastAPI', 'Regex Engine'],
    highlights: [
      'Automated extraction of mandatory statutory packaging fields',
      'Instant compliance scorecard flagging non-conformities and missing manufacturer data'
    ],
    featured: false
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming Languages',
    description: 'Foundational languages for systems programming, data pipelines, and client development.',
    color: '#3b82f6',
    skills: [
      { name: 'Python', level: 'Advanced', context: 'Data Science, PyTorch, FastAPI, ML Pipelines', iconLetter: 'Py' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', context: 'Modern Async Flows, DOM, React Ecosystem', iconLetter: 'JS' },
      { name: 'TypeScript', level: 'Intermediate', context: 'Strict typing, full-stack data models & interfaces', iconLetter: 'TS' },
      { name: 'HTML5 / Modern CSS', level: 'Advanced', context: 'Semantic layouts, responsive grids, animations', iconLetter: 'H5' },
    ]
  },
  {
    category: 'AI, Machine Learning & LLMs',
    description: 'Frameworks and tooling applied to predictive modeling, NLP, and agentic workflows.',
    color: '#8b5cf6',
    skills: [
      { name: 'PyTorch', level: 'Intermediate', context: 'Neural network training, tensor calculations', iconLetter: 'Pt' },
      { name: 'scikit-learn', level: 'Advanced', context: 'Classification, regression, clustering, preprocessing', iconLetter: 'Sk' },
      { name: 'HuggingFace', level: 'Intermediate', context: 'Transformers, pipeline inference, model evaluation', iconLetter: 'HF' },
      { name: 'LLM & RAG Pipelines', level: 'Intermediate', context: 'Prompt orchestration, embeddings, active recall', iconLetter: 'LL' },
      { name: 'Pandas & NumPy', level: 'Advanced', context: 'High-throughput data manipulation and EDA', iconLetter: 'Pd' },
    ]
  },
  {
    category: 'Frontend & UI Engineering',
    description: 'Crafting responsive, editorial user experiences with robust state management.',
    color: '#06b6d4',
    skills: [
      { name: 'React 18 / 19', level: 'Advanced', context: 'Hooks, custom state architectures, reusable design systems', iconLetter: 'Re' },
      { name: 'Tailwind CSS', level: 'Advanced', context: 'Custom utility design systems, dark mode palettes', iconLetter: 'TW' },
      { name: 'Three.js / WebGL', level: 'Intermediate', context: 'Interactive 3D geometry, lighting, particle fields', iconLetter: '3D' },
      { name: 'Framer Motion', level: 'Intermediate', context: 'Declarative layout transitions & micro-interactions', iconLetter: 'FM' },
    ]
  },
  {
    category: 'Backend & APIs',
    description: 'Constructing performant, resilient API layers and data access gates.',
    color: '#10b981',
    skills: [
      { name: 'FastAPI', level: 'Intermediate', context: 'High-performance async Python APIs, OpenAPI schemas', iconLetter: 'FA' },
      { name: 'Node.js & Express', level: 'Intermediate', context: 'REST architecture, JWT auth, middleware chains', iconLetter: 'Nd' },
      { name: 'PostgreSQL', level: 'Intermediate', context: 'Relational schemas, indexing, ACID compliance', iconLetter: 'PG' },
      { name: 'MongoDB', level: 'Intermediate', context: 'Document schemas, dynamic query aggregation', iconLetter: 'Mg' },
    ]
  },
  {
    category: 'Infrastructure, DevOps & Tools',
    description: 'Disciplined version control, containerization, and modern developer tooling.',
    color: '#f59e0b',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', context: 'Trunk workflows, pull requests, open-source repos', iconLetter: 'Gt' },
      { name: 'Docker', level: 'Intermediate', context: 'Containerizing Python & Node services for deployment', iconLetter: 'Dk' },
      { name: 'Linux / Bash', level: 'Intermediate', context: 'Shell automation, remote server environments', iconLetter: 'Lx' },
      { name: 'Vercel / Cloud', level: 'Intermediate', context: 'Continuous integration, edge deployments, DNS', iconLetter: 'Vc' },
    ]
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: 'Dec 2025 – Jan 2026',
    role: 'Data Analytics Intern',
    organization: 'CodeAlpha · Virtual Internship Program',
    location: 'Remote (Govt. of India MSME Recognized)',
    description: 'Conducted exploratory data analysis, built statistical predictive models, and translated raw data into visual executive summaries. Received formal Letter of Recommendation for exceptional dedication.',
    highlights: [
      'Executed Python analytics notebooks utilizing Pandas, NumPy, and Matplotlib',
      'Formulated risk profiling and data storytelling frameworks',
      'Earned verifiable certificate of merit and recommendation'
    ],
    type: 'internship',
    badgeColor: '#10b981'
  },
  {
    period: '2025',
    role: 'National Finalist Team Member',
    organization: 'Smart India Hackathon (SIH)',
    location: 'National Stage',
    description: 'Collaborated in high-velocity agile sprints to prototype an end-to-end software solution addressing real-world operational challenges under rigorous evaluation by jury panels.',
    highlights: [
      'Architected end-to-end full-stack prototype within 36-hour sprint deadline',
      'Demonstrated rapid prototyping, stress resilience, and team cohesion',
      'Pitched technical architecture directly to industrial evaluators'
    ],
    type: 'hackathon',
    badgeColor: '#6366f1'
  },
  {
    period: 'Feb 2026',
    role: 'Enterprise IT Workflow Immersion',
    organization: 'Spectrum Softtech Solutions Pvt. Ltd.',
    location: "Kochi, Kerala (Kerala's First Private IT Park)",
    description: 'Participated in an intensive curriculum-based industrial visit, analyzing production software architectures, server infrastructure, and enterprise deployment pipelines.',
    highlights: [
      'Studied enterprise data center operations and production security layers',
      'Gained firsthand insights into large-scale commercial software lifecycles'
    ],
    type: 'industry',
    badgeColor: '#06b6d4'
  },
  {
    period: '2025 – 2026',
    role: 'Technical Project Lead & Exhibitor',
    organization: 'Arasu Engineering College Project Expo',
    location: 'Kumbakonam, Tamil Nadu',
    description: 'Demonstrated student utility applications and AI prototypes before faculty, academic peers, and visiting industry evaluators.',
    highlights: [
      'Exhibited Student Helper App and AI learning architectures to campus peers',
      'Iterated based on real student user feedback on usability and grading accuracy'
    ],
    type: 'academic',
    badgeColor: '#f59e0b'
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-ethical-hacking',
    name: 'Ethical Hacking Masterclass',
    issuer: 'Cydenium',
    date: '5 April 2026',
    type: 'Cybersecurity Masterclass',
    skills: ['Vulnerability Assessment', 'Network Reconnaissance', 'Responsible Disclosure', 'Security Fundamentals'],
    description: 'Completed an intensive ethical hacking training module focusing on practical vulnerability auditing, defensive posture, and ethical boundary testing.',
    verifiedBy: 'Naveen Aryan, Founder & CEO',
    image: '/certs/ethical-hacking.jpeg',
    color: '#6366f1'
  },
  {
    id: 'cert-codealpha',
    name: 'Data Analytics Internship Certificate & LOR',
    issuer: 'CodeAlpha (MSME Recognized)',
    date: '10 Jan 2026',
    type: 'Virtual Internship & LOR',
    skills: ['Python Data Analysis', 'Pandas', 'Predictive Modeling', 'Data Visualization'],
    description: 'Successfully completed virtual internship program with distinction. Earned formal Letter of Recommendation recognizing technical curiosity and problem-solving capability.',
    verifiedBy: 'Certificate ID: CA/DE1/6774 · CEO & Founder',
    color: '#10b981'
  },
  {
    id: 'cert-prime-vector',
    name: 'Prime Vector Applied Engineering Workshop',
    issuer: 'AICTE / MSME Government of India',
    date: '14 March 2026',
    type: 'Industry Workshop',
    skills: ['Applied Engineering', 'Emerging Tech', 'Systems Design'],
    description: 'Completed hands-on technology workshop sponsored by MSME & AICTE exploring modern engineering problem formulation.',
    verifiedBy: 'Cert ID: PV-WS-2026-0062',
    color: '#f59e0b'
  },
  {
    id: 'cert-deloitte',
    name: 'Data Analytics Job Simulation',
    issuer: 'Deloitte · Forage',
    date: 'May 2026',
    type: 'Corporate Job Simulation',
    skills: ['Forensic Technology', 'Business Analytics', 'Client Presentation'],
    description: 'Completed real-world client data scenarios evaluating forensic signals and synthesizing business intelligence reports.',
    verifiedBy: 'Tina McCreery, CHRO — Deloitte',
    color: '#0284c7'
  },
  {
    id: 'cert-tata',
    name: 'GenAI Powered Data Analytics Simulation',
    issuer: 'Tata · Forage',
    date: 'May 2026',
    type: 'Corporate Job Simulation',
    skills: ['GenAI Workflows', 'Exploratory Data Analysis', 'Risk Profiling', 'Strategic AI Planning'],
    description: 'Simulated enterprise delinquency risk modeling and implemented automated generative AI analytics strategies.',
    verifiedBy: 'Tom Brunskill, Co-Founder — Forage',
    color: '#06b6d4'
  },
  {
    id: 'cert-british-airways',
    name: 'Data Science Simulation',
    issuer: 'British Airways · Forage',
    date: 'May 2026',
    type: 'Corporate Job Simulation',
    skills: ['Predictive ML Modeling', 'Customer Behaviour Analysis', 'Data Wrangling'],
    description: 'Constructed machine learning models to predict customer flight bookings and passenger lounge eligibility at London Heathrow.',
    verifiedBy: 'British Airways Engineering Team',
    color: '#e11d48'
  }
];
