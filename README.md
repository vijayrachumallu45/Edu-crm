# EduFlow CRM — Education CRM Web Application

**EduFlow CRM** is a clean, professional, frontend-only Education CRM web application built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Recharts**.

It allows educational institutions, universities, and academies to manage student enquiries, counselling sessions, admissions pipelines, student profiles, fee collections, marketing campaigns, support tickets, and analytics completely offline using local state and persistent browser `LocalStorage`.

---

## 🌟 Key Architectural Characteristics

> **CRITICAL ARCHITECTURAL NOTATIONS**
> - **Frontend-Only Application**: Requires ZERO backend server, database, or external service infrastructure.
> - **No Database**: Does NOT use MongoDB, MySQL, PostgreSQL, Firebase, or Supabase.
> - **No External API Connections**: Works 100% offline; no external REST/GraphQL API or API keys required.
> - **No API Keys or Secrets**: Built to run out-of-the-box without credentials.
> - **No Payment Gateway / Real Messaging**: Fees and communications are realistic mock representations.
> - **LocalStorage Persistence**: Data edits, additions, and deletions persist across page reloads.

---

## 🚀 Key Modules & Capabilities

1. **Dashboard Overview**:
   - 4 Priority KPI Cards (Total Enquiries, Active Applications, Enrolled Students, Pending Fees).
   - Admission Overview & Pipeline Stage visualizer.
   - Upcoming Follow-Ups quick task manager.
   - Recent Activity feed & Program Interest chart.

2. **Student Enquiries (`/enquiries`)**:
   - Complete lead tracking with status progression: `New` ➔ `Contacted` ➔ `Counselling` ➔ `Application` ➔ `Converted` ➔ `Closed`.
   - Single primary button design with dropdown actions for row tasks.
   - Detailed Enquiry Page (`/enquiries/:id`) featuring Personal, Academic, Program Interest, and Activity Timelines.
   - One-click **Convert to Student** workflow.

3. **Student Registry (`/students`)**:
   - Comprehensive student profile management (`/students/:id`).
   - Parent/Guardian contact details, fee summaries, attendance tracking, and academic risk status (`Good`, `Needs Attention`, `At Risk`).

4. **Admission Pipeline (`/admissions`)**:
   - Visual stage-based Kanban board across 6 admission lifecycle stages: `Enquiry`, `Counselling`, `Application`, `Document Review`, `Approved`, `Enrolled`.
   - Quick stage transition controls and application document verification status.

5. **Course Catalog (`/courses`)**:
   - Course list (BCA, BBA, MCA, MBA, B.Tech CS, M.Sc Data Science, Cyber Security, Applied AI).
   - Duration, seats allocation, eligibility criteria, and fee structures.

6. **Counselling Sessions (`/counselling`)**:
   - Log telephonic, online, and in-person guidance sessions with outcomes (`Interested`, `Needs Follow-Up`, `Application Planned`, `Not Interested`).

7. **Follow-Up Reminders (`/follow-ups`)**:
   - Track upcoming, completed, and overdue follow-up tasks with priority badges.

8. **Marketing Campaigns (`/campaigns`)**:
   - Monitor admission drive performance, lead generation counts, and campaign budgets.

9. **Tuition Fee Tracking (`/fees`)**:
   - Real-time frontend calculation (`Pending = Total Fee - Paid`).
   - Record Fee Payment modal with automatic receipt log update.

10. **Support & Feedback (`/support`, `/feedback`)**:
    - Student support ticket resolution workflow.
    - 5-star rating feedback and overall satisfaction metrics.

11. **CRM Analytics (`/analytics`)**:
    - Interactive Recharts visualizers for admission funnels, lead source breakdown, course popularity, and counsellor conversion rates.

12. **Settings & Demo Auth (`/settings`, `/login`)**:
    - Light/Dark mode toggle, currency formatting preference, and reset to initial factory mock data capability.

---

## 💻 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript 5
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Routing**: React Router DOM v6
- **State Management**: React Context API + LocalStorage Synchronization

---

## 🛠️ Quick Start & Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev -- --host 0.0.0.0
```

### 3. Open in Browser
Open `http://localhost:5173` in your web browser.

---

## 🔑 Demo Login Credentials

The application provides a quick demo sign-in option on the login page:

- **Email**: `admin@eduflow.demo`
- **Password**: `admin123`

*(Alternatively, click "One-Click Demo Sign In" for instant login).*

---

## 📁 Project Directory Structure

```text
educrm/
├── src/
│   ├── components/
│   │   ├── common/       # StatCard, Badge, Modal, ActionMenu
│   │   └── layout/       # Sidebar, Header, AppLayout
│   ├── context/          # EduContext state manager with LocalStorage sync
│   ├── data/             # Realistic fictional mock data datasets
│   ├── pages/            # Dashboard, Enquiries, Students, Admissions, Courses, Fees, etc.
│   ├── routes/           # AppRoutes protected routing
│   ├── types/            # TypeScript data interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License

Client-owned custom software project. Built with open-source MIT-licensed packages.
