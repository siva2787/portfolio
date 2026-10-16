# Easwar S — Cinematic 3D Storytelling Portfolio

> **Production AI/ML & Full-Stack Engineering Digital Experience**  
> Light-first Swiss editorial typography, real-time procedural 3D neural core, talking portrait narrator, verified project case studies, and full-stack backend API.

---

## 🚀 Live Local Endpoints

Both frontend and backend are currently running and accessible locally:

| Service | Localhost URL | Description |
| :--- | :--- | :--- |
| **Frontend Application** | **[http://localhost:5173/](http://localhost:5173/)** | React 19 + TypeScript + Vite + Tailwind CSS + Three.js + Narrator |
| **Backend API** | **[http://localhost:4000/](http://localhost:4000/)** | Express + TypeScript + Zod Validation + Rate Limiter |
| **API Health Check** | **[http://localhost:4000/health](http://localhost:4000/health)** | Real-time health status, uptime, and service diagnosis |

---

## 🌟 Key Architecture & Implemented Features

### 1. Light-First Primary Theme & Dual Dark Theme
- **Primary Light Palette**: Clean warm ivory/alabaster (`#fbfbfa`), deep slate typography (`#0a0d14`), restrained cobalt/indigo accents (`#3b5bf5`), subtle realistic shadows, and hairline architectural borders.
- **Secondary Dark Palette**: Deep charcoal obsidian (`#080a0f`), elevated card surfaces (`#10131c`), glowing luminous accents (`#6366f1`), and persistent theme switcher saved to `localStorage`.

### 2. Signature Feature: The Talking Portrait Narrator
- **Preserved Real Identity**: Features Easwar's actual portrait asset framed with dynamic audio visualizer halos.
- **Section-Aware Storytelling**: Automatically tracks reader scroll position across `hero`, `about`, `journey`, `projects`, `skills`, `experience`, and `contact`.
- **Audio Controls**: Play, Pause, Resume, Restart, Mute/Unmute, Subtitle Caption drawer toggle, and user-initiated Auto-Narrate mode compliant with browser autoplay policies.
- **Synchronized Audio Visualizer**: Live pulsating frequency bars matching speech rhythm.

### 3. Cinematic 3D Neural Core (Three.js & WebGL)
- Procedural wireframe icosahedron with an inner glowing nucleus, orbital tilted rings, and a surrounding 180-particle constellation.
- Interactive mouse parallax tracking and audio reaction scale.
- Graceful WebGL fallback if hardware acceleration is unavailable.

### 4. Verified Project Case Studies
- **AI Personalized Learning Platform** (Microservice, adaptive study sequencing, real-time analytics)
- **ResumeIQ** (React 19, ATS semantic scoring, skill gap matrix, Zustand state store)
- **Student Helper App (ARASUMATE Utility)** (Streamlit peer utility for internal marks and attendance tracking)
- **LearnTwin AI**, **ZONE MasteryFlow**, **LegalMet AI**
- Interactive **"Deep Dive Case Study"** modal with 3 sub-tabs: *Problem & Solution*, *System Architecture*, and *Engineering Highlights*.

### 5. Verified Credentials & Experience
- **Ethical Hacking Masterclass** (Cydenium) with certificate preview
- **CodeAlpha Virtual Internship & Letter of Recommendation** (MSME recognized)
- **Smart India Hackathon (SIH '25)** National Stage
- **Spectrum Softtech Industrial Visit**, **Deloitte**, **Tata**, and **British Airways** simulations.

### 6. Full-Stack Contact Gateway & API
- Real contact submission endpoint at `/api/contact` validated by Zod schemas.
- Anti-spam honeypot filter and IP-based rate limiting (10 requests per 15-minute window).
- Unique verification receipt IDs (e.g., `ESW-XXXXXX`) and celebration confetti upon delivery.
- One-click copy email button for `sivaai2787@gmail.com`.

---

## 🛠️ CLI Commands & Development

### Run Development Servers Locally
```bash
# 1. Run the Frontend (Vite on http://localhost:5173)
cd frontend
npm run dev

# 2. Run the Backend (Express on http://localhost:4000)
cd backend
npm run dev
```

### Run Automated Tests & Type Checks
```bash
# Run backend integration tests (health check, contact validation, project routes)
cd backend
npx tsx --test src/tests/server.test.ts

# Run production build checks
cd frontend
npm run build

cd backend
npm run build
```

---

## 📦 Directory Structure

```
Portfolio-v1/
├── frontend/
│   ├── public/
│   │   ├── easwar-portrait.png          # Real portrait asset
│   │   ├── project-ai-learning.png       # Verified project screenshot
│   │   ├── project-student-helper.png    # Verified project screenshot
│   │   ├── resumeiq.png                  # Verified project screenshot
│   │   └── certs/                        # Verified certificate assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── 3d/HeroScene.tsx          # Three.js 3D Neural Core
│   │   │   ├── narrator/TalkingPortrait.tsx # Signature Talking Portrait
│   │   │   ├── navigation/Navbar.tsx     # Sticky navigation & theme toggle
│   │   │   ├── modals/                   # Case study & certificate modals
│   │   │   ├── icons/BrandIcons.tsx      # SVG brand icons
│   │   │   ├── sections/                 # Hero, About, Journey, Projects, Skills, Contact
│   │   │   └── footer/Footer.tsx         # Footer with live IST clock
│   │   ├── data/portfolioData.ts         # Verified project & milestone data
│   │   ├── services/narrationService.ts  # Voice synthesis & audio visualizer
│   │   ├── types/portfolio.ts            # TypeScript definitions
│   │   ├── App.tsx                       # Root orchestrator
│   │   └── index.css                     # Design tokens & responsive styles
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── backend/
│   ├── src/
│   │   ├── controllers/contact.controller.ts
│   │   ├── data/projects.data.ts
│   │   ├── routes/                       # contact, projects, meta routes
│   │   ├── validators/contact.validator.ts
│   │   ├── tests/server.test.ts          # Automated integration test suite
│   │   └── server.ts                     # Express server & security headers
│   ├── package.json
│   └── tsconfig.json
├── package.json
└── README.md
```
