import "./style.css";

const ELE = document.documentElement;

// Translations Dictionary
const translations = {
  en: {
    nav_home: "Home",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_certifications: "Certifications",
    nav_contact: "Contact",
    hero_welcome: "Hello & Welcome",
    hero_iam: "I'm",
    hero_name: "Randy",
    hero_role: "Mobile & Web Developer",
    hero_bio: "Hi, my name is Randy Fernanda Saputra. I am an undergraduate student at Bina Nusantara University majoring in Mobile Application & Technology. Skilled in cross-platform mobile development (iOS & Android) and web development. Solution-oriented, analytical, and committed to excellence.",
    hero_follow: "Follow Me",
    hero_download_cv: "Download CV",
    stat_languages: "Tech Stack & Tools",
    stat_projects: "Completed Projects",
    stat_exp: "Months Internship",
    exp_title: "Work Experience",
    exp_subtitle: "My professional journey and internship contributions",
    exp_role: "Mobile Developer Intern",
    exp_company: "Time International",
    exp_date: "3 Feb 2025 - 30 Jan 2026",
    exp_desc: "Developed cross-platform mobile applications for both Android and iOS using Flutter, as well as building web applications using React JS.",
    skills_title: "Technical Skills",
    skills_subtitle: "Programming languages, frameworks, databases, and development tools I work with",
    projects_title: "Featured Projects",
    projects_subtitle: "Showcase of mobile and web applications I have designed and developed",
    project_moneywise_title: "MoneyWise",
    project_moneywise_desc: "Comprehensive financial management Android application built with Flutter & Firebase, featuring automated receipt scanning powered by OCR technology and an interactive AI chatbot assistant for smart budgeting.",
    project_piring_title: "Piring Nusantara",
    project_piring_desc: "Interactive Augmented Reality (AR) application showcasing Indonesia's rich culinary heritage through detailed 3D dish models and cultural background stories built with Unity.",
    project_bonktoys_title: "Bonk Toys",
    project_bonktoys_desc: "E-commerce mobile application for action figure collectors built with Flutter, featuring curated catalogs, high-res galleries, and secure checkout integration.",
    project_bonkgarage_title: "Bonk Garage",
    project_bonkgarage_desc: "Diecast model car shop Android application developed using Kotlin, providing streamlined browsing and order tracking for enthusiast collectors.",
    project_puffpoof_title: "Puff & Poof",
    project_puffpoof_desc: "Adorable plush toy shop Android app built with Kotlin, offering clean product showcases and an effortless shopping experience.",
    project_pureplate_title: "Pure Plate",
    project_pureplate_desc: "Nutritious meal order Android app assisting health-conscious users with macronutrient breakdown and balanced meal delivery options.",
    project_willify_title: "Willify",
    project_willify_desc: "Sleek music streaming web application designed for seamless song discovery and continuous playback with clean responsive UI.",
    project_dokdok_title: "Dok Dok",
    project_dokdok_desc: "Telemedicine mobile application prototype built to connect underserved communities with remote healthcare professionals.",
    certifications_title: "Certifications",
    certifications_subtitle: "Credentials and certificates earned through online learning & competitions",
    cert_flutter: "Flutter Mobile Apps Development",
    cert_c: "C Programming For Beginners - Master the C Language",
    cert_ui: "INTUITIVA: Embrace Intuitive Digital Interface Design",
    contact_title: "Get In Touch",
    contact_subtitle: "Feel free to reach out for opportunities, collaborations, or inquiries",
    contact_find: "You can find me at",
    contact_location_title: "Permata Palem",
    contact_location_sub: "Cibinong, Bogor, Indonesia",
  },
  id: {
    nav_home: "Beranda",
    nav_experience: "Pengalaman",
    nav_skills: "Keahlian",
    nav_projects: "Proyek",
    nav_certifications: "Sertifikasi",
    nav_contact: "Kontak",
    hero_welcome: "Halo & Selamat Datang",
    hero_iam: "Saya",
    hero_name: "Randy",
    hero_role: "Pengembang Mobile & Web",
    hero_bio: "Halo, nama saya Randy Fernanda Saputra. Saya adalah mahasiswa Bina Nusantara University jurusan Mobile Application & Technology. Mahir dalam pengembangan aplikasi mobile lintas platform (iOS & Android) dan web. Berorientasi pada solusi, analitis, dan berkomitmen pada hasil optimal.",
    hero_follow: "Ikuti Saya",
    hero_download_cv: "Unduh CV",
    stat_languages: "Bahasa & Tools",
    stat_projects: "Proyek Selesai",
    stat_exp: "Bulan Magang",
    exp_title: "Pengalaman Kerja",
    exp_subtitle: "Perjalanan profesional dan kontribusi magang saya",
    exp_role: "Mobile Developer Intern",
    exp_company: "Time International",
    exp_date: "3 Feb 2025 - 30 Jan 2026",
    exp_desc: "Mengembangkan aplikasi mobile lintas platform untuk Android dan iOS menggunakan Flutter, serta membuat aplikasi web menggunakan React JS.",
    skills_title: "Keahlian Teknis",
    skills_subtitle: "Bahasa pemrograman, framework, database, dan tools pengembangan yang saya kuasai",
    projects_title: "Proyek Unggulan",
    projects_subtitle: "Koleksi aplikasi mobile dan web yang telah saya rancang dan kembangkan",
    project_moneywise_title: "MoneyWise",
    project_moneywise_desc: "Aplikasi Android pengelola keuangan komprehensif yang dibangun dengan Flutter & Firebase, dilengkapi fitur scan struk otomatis berbasis OCR dan asisten chatbot AI interaktif untuk penganggaran pintar.",
    project_piring_title: "Piring Nusantara",
    project_piring_desc: "Aplikasi Augmented Reality (AR) interaktif yang menampilkan kekayaan kuliner Indonesia melalui model 3D hidangan dan cerita latar budaya menggunakan Unity.",
    project_bonktoys_title: "Bonk Toys",
    project_bonktoys_desc: "Aplikasi mobile e-commerce untuk kolektor action figure yang dibangun dengan Flutter, menampilkan katalog terkurasi dan integrasi pembayaran aman.",
    project_bonkgarage_title: "Bonk Garage",
    project_bonkgarage_desc: "Aplikasi toko miniatur mobil diecast di Android menggunakan Kotlin, memberikan navigasi cepat dan pelacakan pesanan bagi penggemar otomotif.",
    project_puffpoof_title: "Puff & Poof",
    project_puffpoof_desc: "Aplikasi Android toko boneka manis yang dibuat dengan Kotlin, menyediakan katalog produk yang rapi dan pengalaman belanja yang mudah.",
    project_pureplate_title: "Pure Plate",
    project_pureplate_desc: "Aplikasi pemesanan makanan bergizi berbasis Android yang membantu pengguna memantau kadar makronutrisi dan memilih menu seimbang.",
    project_willify_title: "Willify",
    project_willify_desc: "Aplikasi web streaming musik anggun yang dirancang untuk pemutaran musik lancar dengan antarmuka responsif yang bersih.",
    project_dokdok_title: "Dok Dok",
    project_dokdok_desc: "Prototipe aplikasi telemedis mobile yang dirancang untuk menghubungkan masyarakat ke layanan konsultasi medis jarak jauh.",
    certifications_title: "Sertifikasi",
    certifications_subtitle: "Sertifikat yang diperoleh melalui pembelajaran daring dan kompetisi",
    cert_flutter: "Pengembangan Aplikasi Mobile Flutter",
    cert_c: "Pemrograman C Untuk Pemula - Menguasai Bahasa C",
    cert_ui: "INTUITIVA: Desain Antarmuka Digital yang Intuitif",
    contact_title: "Hubungi Saya",
    contact_subtitle: "Jangan ragu untuk menghubungi saya untuk peluang kerja, kolaborasi, atau pertanyaan",
    contact_find: "Anda dapat menemukan saya di",
    contact_location_title: "Permata Palem",
    contact_location_sub: "Cibinong, Bogor, Indonesia",
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update active state on language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    if (btnLang === lang) {
      btn.classList.add("bg-violet-600", "text-white", "shadow-sm");
      btn.classList.remove("text-slate-500", "dark:text-slate-400");
    } else {
      btn.classList.remove("bg-violet-600", "text-white", "shadow-sm");
      btn.classList.add("text-slate-500", "dark:text-slate-400");
    }
  });
}

// Language Switcher Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage(currentLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      updateLanguage(selectedLang);
    });
  });
});

// Theme Switch Logic
document.querySelectorAll(".theme-switch").forEach((item) =>
  item.addEventListener("click", () => {
    ELE.classList.toggle("dark");
    ELE.classList.contains("dark")
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  })
);

// Initial Theme Set
if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  ELE.classList.add("dark");
} else {
  ELE.classList.remove("dark");
}

// Mobile Nav Logic
const mobileNav = document.getElementById("mobile-nav");
const mobileNavItems = document.querySelectorAll("#mobile-nav a");
const backDrop = document.getElementById("backdrop");
const menuBar = document.querySelector("#menubar");
const menuBarIcon = document.querySelector("#menubar i");

function toggleMobileNav() {
  if (mobileNav) {
    mobileNav.classList.toggle("translate-y-full");
    mobileNav.classList.toggle("opacity-0");
    if (backDrop) backDrop.classList.toggle("hidden");
    if (menuBarIcon) {
      menuBarIcon.classList.toggle("fa-xmark");
      menuBarIcon.classList.toggle("fa-bars");
    }
  }
}

if (menuBar) {
  menuBar.addEventListener("click", toggleMobileNav);
}
if (backDrop) {
  backDrop.addEventListener("click", toggleMobileNav);
}
mobileNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (!mobileNav.classList.contains("translate-y-full")) {
      toggleMobileNav();
    }
  });
});