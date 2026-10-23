<div align="center">

<img src="src/assets/logo.png" alt="FitLog logo" width="72" />

# FITLOG — Workout Library

**Train with intent. Log every set.**

A dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.

![Next.js](https://img.shields.io/badge/Next.js-App_Router-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-UI-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-Typed-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)

</div>


---

## 📖 About

**FitLog** is a responsive workout-library web app built with the Next.js App Router. Users browse a curated library of lifts covering every major muscle group, open any workout for full specs and step-by-step instructions, then build a focused daily plan of up to five lifts. Workouts can also be bookmarked for later, and everything is remembered between visits, with no account required.

The interface uses a dark theme with lime-green accents, Oswald headings, and Inter body text.

## 🛠️ Technologies Used

| Category | Technology |
| --- | --- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Server Components, dynamic routes) |
| **UI Library** | [React](https://react.dev/) (hooks and Context API) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with the [daisyUI](https://daisyui.com/) plugin |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (Font Awesome, Lucide, Phosphor, BoxIcons) |
| **Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| **Fonts** | Oswald and Inter via `next/font/google` |
| **State Persistence** | Browser `localStorage` |
| **Data Source** | REST endpoint serving the workout catalog (JSON) |

## ✨ Key Features

### 1.  Workout Library
The home page opens with a hero banner and a responsive grid of workout cards. The catalog is fetched on the server, so the page arrives fully rendered. Each card shows the target muscle groups, equipment, duration, calories burned, and rating at a glance.

### 2.  Detailed Workout Pages
Every lift has its own dynamic route (`/workouts/[id]`) with a large image, description, muscle-group tags, and a spec table covering equipment, difficulty, sets, reps, duration, calories, and rating. Numbered, step-by-step instructions sit below. Unknown IDs resolve to a custom "Lift not found" 404 page, and route-level loading states keep navigation smooth.

### 3.  Daily Plan Builder
Add any workout to today's plan with one click. The plan is **capped at five lifts** to keep sessions focused, and the app blocks duplicates and disables the button once the plan is full. Finished lifts can be marked as **done**, which strikes them through and locks the button. The plan is saved to `localStorage`, so it survives refreshes.

### 4.  Save for Later
Not ready to commit? Bookmark a workout and come back to it. Saved lifts live in their own tab, can be removed at any time, and persist across sessions. The navbar shows live counters for both **Plan** and **Saved**, so you always know where you stand.

### 5. Plan Dashboard with Live Stats & Sorting
The **My Plan** page switches between *Today's Plan* and *Saved* tabs. A summary panel totals the **exercises, minutes, and calories** for the active list. Sort by **duration**, **calories**, or **rating**. Friendly empty states and toast notifications confirm every action, such as adding, saving, completing, or removing a lift.

