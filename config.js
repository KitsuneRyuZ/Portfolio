/* ╔══════════════════════════════════════════════╗
   ║         config.js — Edit Everything Here     ║
   ║    Change any value and it updates the site  ║
   ╚══════════════════════════════════════════════╝ */

const CONFIG = {

  /* ── IDENTITY ─────────────────────────────────
     Your name, title, and branding                */
  identity: {
    name:       "KitsuneRyuz",          // Your display name
    title:      "Developer & Designer", // Short role title
    tagline:    "Building things worth using.", // Hero headline
    kanji:      "狐",                   // The big Japanese character in hero
    statusText: "Open to work",         // Badge text (set to "" to hide)
    statusOn:   true,                   // true = green dot shown
  },

  /* ── COLORS ────────────────────────────────────
     Change these to restyle the entire site       */
  colors: {
    bg:       "#f7f3ec",   // Main background (warm cream)
    bg2:      "#f0ebe1",   // Section background (slightly darker)
    surface:  "#e8e1d5",   // Card / input background
    border:   "#d5cabA",   // Border color
    ink:      "#1c1a17",   // Main text color
    muted:    "#7a6e5e",   // Secondary text
    faint:    "#b0a898",   // Disabled / very soft text
    accent:   "#c4736b",   // Primary accent (sakura rose)
    accent2:  "#e09a8e",   // Lighter accent
    sage:     "#6d9185",   // Secondary accent (matcha)
    gold:     "#c49a3c",   // Gold accent (used sparingly)
  },

  /* ── HERO SECTION ──────────────────────────────  */
  hero: {
    greeting:    "こんにちは — Hello",  // Small text above the name
    headline:    "Building things",     // First line of big heading
    headlineEm:  "worth using.",        // Second line (italic/accent)
    description: "I'm KitsuneRyuz — I craft clean, fast web experiences with a sharp eye for design and a love for great code.",
    btn1Text:    "See My Work",         // Primary button
    btn1Link:    "#projects",
    btn2Text:    "Let's Talk",          // Secondary button
    btn2Link:    "#contact",
  },

  /* ── ABOUT SECTION ─────────────────────────────  */
  about: {
    heading: "Who I am",
    paragraphs: [
      "Hey — I'm <strong>KitsuneRyuz</strong>. I build web apps and design systems that are fast, accessible, and genuinely look good. I care about the craft: clean code, thoughtful UI, and products that solve real problems.",
      "I've worked across the full stack — pixel-perfect frontends to scalable APIs. Whatever the project, I bring the same intentionality to every line of code."
    ],
    stats: [
      { number: "20+", label: "Projects Built" },
      { number: "3+",  label: "Years Exp." },
      { number: "∞",   label: "Coffee ☕" },
      { number: "0",   label: "Bugs Left*" },
    ],
    githubBtn: "https://github.com/kitsuneryuz",
    hireBtn:   "#contact",
  },

  /* ── SKILLS ────────────────────────────────────
     Add or remove skill entries freely             */
  skills: [
    { name: "JavaScript / TypeScript", pct: 92 },
    { name: "React / Next.js",         pct: 88 },
    { name: "CSS & Design",            pct: 95 },
    { name: "Node.js / Python",        pct: 78 },
    { name: "UI / UX Design",          pct: 82 },
    { name: "WebGL / Three.js",        pct: 65 },
  ],

  /* ── MARQUEE SKILLS ─────────────────────────── */
  marquee: [
    "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Python", "CSS", "Rust", "Git",
    "Figma", "REST APIs", "Docker", "PostgreSQL", "WebGL",
  ],

  /* ── PROJECTS ──────────────────────────────────
     type: "web" | "tool" | "design" | "other"
     live: null if no live link                     */
  projects: [
    {
      num:    "01",
      title:  "Project Alpha",
      desc:   "A full-stack dashboard with real-time data, custom REST API, and a polished UI built to handle thousands of concurrent users.",
      tags:   ["React", "Node.js", "MongoDB"],
      type:   "web",
      github: "#",
      live:   "#",
    },
    {
      num:    "02",
      title:  "DataForge CLI",
      desc:   "A developer CLI that auto-generates production-ready ETL pipelines from a single YAML config. Built for speed and reliability.",
      tags:   ["Python", "CLI", "Docker"],
      type:   "tool",
      github: "#",
      live:   null,
    },
    {
      num:    "03",
      title:  "Kiri Design System",
      desc:   "40+ accessible components, dark/light themes, full TypeScript types, and Storybook docs. Built from scratch, production-ready.",
      tags:   ["TypeScript", "Storybook", "CSS"],
      type:   "design",
      github: "#",
      live:   "#",
    },
    {
      num:    "04",
      title:  "Ryuz Chat",
      desc:   "End-to-end encrypted real-time chat. Zero server-side message storage, ephemeral rooms, file sharing, mobile-first interface.",
      tags:   ["Next.js", "WebRTC", "Crypto API"],
      type:   "web",
      github: "#",
      live:   "#",
    },
    {
      num:    "05",
      title:  "Fox Grid",
      desc:   "A zero-dependency Rust library for blazing-fast CSV parsing. SIMD-optimized, zero-copy reads — 10× faster than alternatives.",
      tags:   ["Rust", "SIMD", "CLI"],
      type:   "tool",
      github: "#",
      live:   null,
    },
  ],

  /* ── CONTACT ───────────────────────────────────  */
  contact: {
    heading:  "Let's work together",
    subtext:  "Have a project or just want to chat? I'm open to freelance, full-time roles, and collaborations. I reply fast.",
    email:    "your@email.com",
    github:   "https://github.com/kitsuneryuz",

    socials: [
      { label: "GitHub",   url: "https://github.com/kitsuneryuz" },
      { label: "Twitter",  url: "#" },
      { label: "LinkedIn", url: "#" },
    ],

    /* To hook up real form submission, replace the URL below.
       Formspree:  https://formspree.io/f/YOUR_FORM_ID
       Leave as "" to use the simulated demo mode.            */
    formEndpoint: "",
  },

  /* ── FOOTER ────────────────────────────────────  */
  footer: {
    copyright: "© 2025 KitsuneRyuz — All rights reserved.",
    url:       "kitsuneryuz.github.io/Portfolio",
  },

  /* ── ANIMATIONS ────────────────────────────────
     Toggle individual animation features           */
  animations: {
    petals:       true,   // Floating sakura petal particles
    grainOverlay: true,   // Film grain texture overlay
    typewriter:   true,   // Typewriter cycling phrases in hero
    scrollReveal: true,   // Fade-in on scroll
    skillBars:    true,   // Animate skill bars on scroll
  },

  /* ── TYPEWRITER PHRASES ────────────────────────
     Only used if animations.typewriter = true      */
  typewriterPhrases: [
    "I build things for the web.",
    "I write code that scales.",
    "I design with intention.",
    "I turn ideas into products.",
    "I craft clean, fast UIs.",
  ],

};
