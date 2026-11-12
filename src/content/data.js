import projectsJson from "./projects.json";
import profilePhoto from "../assets/Profile.webp";
import akademia from "../assets/projects/Akademia.webp";
import kelanaCoffe from "../assets/projects/KelanaCoffe.webp";
import lifeOS from "../assets/projects/LifeOS.webp";
import kaswarga from "../assets/projects/KasWarga.webp";
import rangkumin from "../assets/projects/Rangkum.in.webp";

export const PROFILE = {
  name: "Toriq Habil Fadhila",
  username: "archzz",
  role: "Software Engineer",
  tagline: "Membangun sistem dengan fondasi yang kuat, bukan sekadar fitur yang berjalan.",
  location: "Malang, Indonesia",
  email: "toriqqhabilfadhila21@gmail.com",
  github: "https://github.com/ArchzzRiqqs",
  linkedin: "https://www.linkedin.com/in/toriqhabilfadhila21/",
  photo: profilePhoto,
  photoSize: { width: 720, height: 981 },
  bio: "Saya tertarik pada bagaimana sebuah sistem dirancang, bekerja, dan berkembang. Sebelum menulis solusi, saya terbiasa memahami masalah hingga ke akarnya - kemudian membangun solusi yang sederhana, terstruktur, dan siap berkembang.",
  focus: ["System design", "Backend", "Database"],
  approach: ["Problem", "System", "Solution"],
  status: "Terbuka untuk peluang kerja dan kolaborasi",
};

export const NAV_LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#proyek", label: "Proyek" },
  { href: "#perjalanan", label: "Perjalanan" },
];

export const SKILL_GROUPS = [
  { title: "Frontend", items: ["JavaScript", "React", "Next.js"] },
  { title: "Backend", items: ["Node.js", "PHP", "Laravel", "CodeIgniter", "API"] },
  { title: "Database", items: ["PostgreSQL", "MySQL"] },
];


const PROJECT_IMAGES = {kelanacoffe: kelanaCoffe, lifeos: lifeOS, akademia, kaswarga, "rangkum-in": rangkumin,};
const PROJECT_IMAGE_SIZE = { width: 1400, height: 703 };

export const PROJECTS = projectsJson.map((p) => ({
  ...p,
  image: PROJECT_IMAGES[p.slug],
  imageSize: PROJECT_IMAGE_SIZE,
}));

export const REEL = {
  src: `${import.meta.env.BASE_URL}media/projects-reel.mp4`,
  poster: `${import.meta.env.BASE_URL}media/projects-reel-poster.webp`,
  size: {
    width: 1280,
    height: 720,
  },
};

export const EXPERIENCE = [
  {
    period: "2024 — 2025",
    title: "Software Engineering Intern",
    org: "PT. Naraya Telematika",
    desc: "Mengikuti program PKL/magang dan mendapatkan pengalaman langsung dalam lingkungan kerja serta proses pengembangan software.",
  },
];

export const EDUCATION = [
  {
    period: "2026 — Sekarang",
    title: "D-IV Sistem Informasi Bisnis",
    org: "Politeknik Negeri Malang",
    desc: "Mempelajari perpaduan teknologi dan bisnis melalui analisis sistem, pengembangan software, database, serta perancangan solusi sistem informasi.",
  },
  {
    period: "2023 — 2026",
    title: "Rekayasa Perangkat Lunak",
    org: "SMK PGRI 3 Malang",
    desc: "Membangun fondasi dalam pemrograman, pengembangan aplikasi, database, dan rekayasa perangkat lunak.",
  },
];
