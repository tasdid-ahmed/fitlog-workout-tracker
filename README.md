# 🏋️ FitLog — Workout Library

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyUI-1AD1A5?style=for-the-badge&logo=daisyui&logoColor=white)

FitLog is a dark, no-nonsense gym companion built with Next.js. Browse a library of twelve lifts, pick the ones you're doing today, and track your plan as you go — all with a clean, distraction-free interface designed for actually getting the workout done, not scrolling through fitness content.

**Live Site:**  https://fitlog-workout-tracker-beta.vercel.app/<br>
**Repository:** https://github.com/tasdid2222019/fitlog-workout-tracker


## 🛠️ Technologies Used

- **[Next.js](https://nextjs.org/)** (App Router) — routing, layouts, and page structure
- **TypeScript** — type-safe components and data models
- **Tailwind CSS v4** — styling
- **[daisyUI](https://daisyui.com/)** — themed UI components (buttons, badges, tabs)
- **[Sonner](https://sonner.emilkowal.ski/)** — toast notifications
- **[Lucide React](https://lucide.dev/)** — icons
- Public REST API for workout data

## ✨ Features

1. **Full workout library** — twelve lifts fetched live from a REST API, displayed as a responsive card grid with category tags, equipment, and stats (duration, calories, rating).
2. **Detailed workout pages** — each lift has its own page with a full description, a specs panel (equipment, difficulty, sets, reps, duration, calories, rating), and step-by-step instructions.
3. **Today's Plan & Saved lists** — add any workout to today's plan (capped at five) or save it for later, both reflected instantly in live navbar badge counters.
4. **Persistent state** — your plan and saved lists survive a page refresh via `localStorage`, so nothing's lost between visits.
5. **Live progress tracking** — the My Plan page totals your planned exercises, minutes, and calories in real time as you add, complete, or remove workouts.
6. **Sort and manage your plan** — sort either list by duration, calories, or rating, mark workouts as done, or remove them, each with instant toast feedback.
7. **Fully responsive design** — a mobile hamburger menu, a stacking hero layout, and a grid that adapts from one to three columns across phone, tablet, and desktop.
8. **Custom 404 page** — any invalid route lands on a branded not-found page instead of a generic error.

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/tasdid2222019/fitlog-workout-tracker.git
cd fitlog
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
  app/            → routes (Home, Workout Detail, My Plan, 404)
  components/     → UI components, organized by page/section
  context/        → global state (today's plan & saved workouts)
  lib/            → API calls and TypeScript types
```
