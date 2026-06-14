"use client";

import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Clapperboard,
  Film,
  Globe,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Play,
  Send,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "AI UGC Ad Editing",
    icon: Sparkles,
    copy: "AI-powered UGC ads for TikTok, Reels & paid social — hooks, captions, and pacing engineered to convert viewers into buyers.",
    badge: "Most Popular",
  },
  {
    title: "High-Retention Editing",
    icon: Clapperboard,
    copy: "Hook-first edits with sharp pacing, clean captions, and story-driven structure that keeps viewers watching until the end.",
    badge: null,
  },
  {
    title: "Real Estate Cinematics",
    icon: Building2,
    copy: "Cinematic property walkthroughs, luxury listing edits, and high-converting real estate social content for premium brands.",
    badge: null,
  },
  {
    title: "Web Development",
    icon: Globe,
    copy: "Clean, fast, conversion-focused websites and landing pages built with Next.js, React, and modern stacks.",
    badge: null,
  },
  {
    title: "Graphic Design & Creatives",
    icon: PenTool,
    copy: "Thumbnails, posters, ad creatives, carousels, and brand visuals that stop the scroll and sell your product.",
    badge: null,
  },
  {
    title: "App Development",
    icon: MonitorSmartphone,
    copy: "Custom mobile and web app builds — from MVPs to full-featured products with clean UI and solid code.",
    badge: null,
  },
];

interface PortfolioFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  copy: string;
}

interface PortfolioSlide {
  eyebrow: string;
  titleWhite: string;
  titleGold: string;
  description: string;
  features: PortfolioFeature[];
  link: string;
}

const portfolioSlides: PortfolioSlide[] = [
  {
    eyebrow: "UGC Content",
    titleWhite: "UGC CONTENT",
    titleGold: "EDITING",
    description:
      "Authentic, high-retention UGC content built for TikTok, Reels, and social media that connects, engages, and converts.",
    features: [
      { icon: Target, title: "STRONG HOOKS", copy: "Attention-grabbing openings that stop the scroll cold." },
      { icon: Film, title: "ENGAGING CAPTIONS", copy: "Text overlays that keep viewers watching until the end." },
      { icon: Zap, title: "SMOOTH PACING", copy: "Fast cuts, seamless transitions, and story-driven edits." },
      { icon: TrendingUp, title: "BUILT FOR ENGAGEMENT", copy: "Optimized for retention, saves, shares, and conversions." },
    ],
    link: "https://drive.google.com/drive/folders/1t5FciMj3t47mY6ec8YJgThfJoEZ8BgXq?usp=sharing",
  },
  {
    eyebrow: "AI Videos",
    titleWhite: "AI UGC",
    titleGold: "VIDEOS",
    description:
      "AI-powered video ads built for scale. Using cutting-edge tools to create cinematic, conversion-focused content at speed.",
    features: [
      { icon: Sparkles, title: "AI-GENERATED", copy: "Cutting-edge AI tools for product showcases and brand stories." },
      { icon: Zap, title: "SCALE FAST", copy: "Multiple ad variations and formats produced at speed." },
      { icon: Target, title: "CONVERSION FOCUSED", copy: "Each clip engineered for click-through and buyer action." },
      { icon: TrendingUp, title: "VIRAL POTENTIAL", copy: "Engineered with trending hooks and platform algorithms in mind." },
    ],
    link: "https://drive.google.com/drive/folders/1CxYmWGwOLtFf0mRTJLWnq6olq-jIkMLG?usp=sharing",
  },
  {
    eyebrow: "Real Estate",
    titleWhite: "REAL ESTATE",
    titleGold: "CINEMATICS",
    description:
      "Luxury property videos and real estate marketing content that sell the dream before buyers even step through the door.",
    features: [
      { icon: Building2, title: "CINEMATIC QUALITY", copy: "Smooth transitions and premium pacing for luxury listings." },
      { icon: Film, title: "SOCIAL REELS", copy: "Short-form property content built for Instagram and TikTok." },
      { icon: Target, title: "DRIVE INQUIRIES", copy: "Compelling visuals that push viewers to contact and book viewings." },
      { icon: Zap, title: "FAST TURNAROUND", copy: "Quick delivery without ever compromising on premium quality." },
    ],
    link: "https://drive.google.com/drive/folders/1KxwM4Q2_v0kTe_395385LHUItXy0e66z?usp=sharing",
  },
  {
    eyebrow: "Web & Apps",
    titleWhite: "WEB &",
    titleGold: "APP BUILDS",
    description:
      "Clean, fast, conversion-focused websites and mobile apps. From landing pages to full product builds with modern tech.",
    features: [
      { icon: Globe, title: "MODERN STACK", copy: "Built with Next.js, React, and cutting-edge web technologies." },
      { icon: MonitorSmartphone, title: "FULLY RESPONSIVE", copy: "Pixel-perfect across desktop, tablet, and mobile devices." },
      { icon: Zap, title: "FAST PERFORMANCE", copy: "Optimized for Core Web Vitals and lightning-fast load times." },
      { icon: Target, title: "CONVERSION READY", copy: "Designed to turn every visitor into a lead or paying customer." },
    ],
    link: "#contact",
  },
];

const brands = [
  { name: "SMDC", role: "Real Estate", logo: "/images/logos/smdc.png" },
  { name: "ABCLOTHING", role: "TikTok Ads", logo: "/images/logos/abclothing.png" },
  { name: "Organic Shirt", role: "TikTok Ads", logo: "/images/logos/organic-shirt.png" },
  { name: "MX Studio", role: "Video Editor", logo: "/images/logos/mx-studio.png" },
  { name: "Luxa Brush", role: "Video Editor", logo: "/images/logos/luxa-brush.png" },
  { name: "WRLD KICKS", role: "UGC & Filming", logo: "/images/logos/wrld-kicks.png" },
  { name: "TLC Trading", role: "Video Editor", logo: "/images/logos/tlc-trading.png" },
  { name: "Tigrox", role: "UGC AI Ads", logo: "/images/logos/tigrox.png" },
  { name: "Khursha", role: "AI Skincare", logo: "/images/logos/khursha.png" },
  { name: "ADSCrafters", role: "Owner / Creative Lead", logo: "/images/logos/adscrafters.png" },
  { name: "More Businesses", role: "Graphic Design", logo: "/images/logos/more-business.png" },
];

const stats = [
  { value: "4+", label: "Years Experience", icon: BriefcaseBusiness },
  { value: "50+", label: "Clients Served", icon: Users },
  { value: "300+", label: "Projects Completed", icon: BarChart3 },
  { value: "100M+", label: "Views Generated", icon: TrendingUp },
];

const testimonials = [
  {
    quote: "Khurt delivered exceptional work. The edits were clean, engaging, and exactly what we needed.",
    client: "SMDC Marketing Team",
    role: "Real Estate",
    logo: "/images/logos/smdc.png",
  },
  {
    quote: "The TikTok ad creatives were clean, on-brand, and easy to use for our campaigns. Great work and smooth communication.",
    client: "ABCLOTHING Lifestyle",
    role: "TikTok Ads",
    logo: "/images/logos/abclothing.png",
  },
  {
    quote: "Khurt created engaging content that helped our products look more professional and ready for social media promotion.",
    client: "Organic Shirt",
    role: "TikTok Ads",
    logo: "/images/logos/organic-shirt.png",
  },
  {
    quote: "Creative, reliable, and professional. He understands the vision and brings it to life with polished editing.",
    client: "MX Studio",
    role: "Video Editor",
    logo: "/images/logos/mx-studio.png",
  },
  {
    quote: "The product visuals and edits were clean, premium, and well-suited for beauty and lifestyle marketing.",
    client: "Skintech Luxa Brush",
    role: "Video Editor",
    logo: "/images/logos/luxa-brush.png",
  },
  {
    quote: "Great communication and fast turnaround. Our UGC ads performed really well.",
    client: "WRLD KICKS",
    role: "UGC & Filming",
    logo: "/images/logos/wrld-kicks.png",
  },
  {
    quote: "High-quality work and very easy to work with. Highly recommended for anyone looking for a reliable video editor.",
    client: "TLC Trading",
    role: "Video Editor",
    logo: "/images/logos/tlc-trading.png",
  },
  {
    quote: "Khurt helped create clean and engaging AI-powered UGC ads for our product campaign. Polished, creative, and built for attention.",
    client: "Tigrox",
    role: "UGC AI Ads",
    logo: "/images/logos/tigrox.png",
  },
  {
    quote: "Great product visuals and ad creatives. Khurt understood the beauty brand direction and delivered clean, premium-looking graphics.",
    client: "Khursha",
    role: "AI Skincare Graphics",
    logo: "/images/logos/khursha.png",
  },
  {
    quote: "ADSCrafters helps creators and businesses produce impactful short-form content with strong visuals and conversion-focused editing.",
    client: "ADSCrafters",
    role: "Owner / Creative Lead",
    logo: "/images/logos/adscrafters.png",
  },
  {
    quote: "Khurt created professional graphics and ad creatives that helped improve our online presence and made our brand look polished.",
    client: "More Businesses",
    role: "Graphic Design",
    logo: "/images/logos/more-business.png",
  },
];

// ─── ANIMATION VARIANTS ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0 },
};

// ─── REUSABLE COMPONENTS ───────────────────────────────────────────────────────

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
      {children}
      <span className="gold-line" />
    </div>
  );
}

function Heading({
  white,
  gold,
  center = false,
}: {
  white: string;
  gold: string;
  center?: boolean;
}) {
  return (
    <h2
      className={`display-title text-6xl uppercase md:text-8xl xl:text-9xl ${center ? "text-center" : ""}`}
    >
      <span className="metal-text block">{white}</span>
      <span className="gold-fill-text block">{gold}</span>
    </h2>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budgetRange: "",
    message: "",
  });

  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Project Inquiry from ${contactForm.name}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nProject Type: ${contactForm.projectType}\nBudget Range: ${contactForm.budgetRange}\n\nMessage:\n${contactForm.message}`
    );
    window.location.href = `mailto:khurbusiness@gmail.com?subject=${subject}&body=${body}`;
  };

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setSlideDirection(1);
    setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length);
  };

  const prevSlide = () => {
    setSlideDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + portfolioSlides.length) % portfolioSlides.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  const slide = portfolioSlides[currentSlide];

  return (
    <main className="noise luxury-bg min-h-screen overflow-hidden">

      {/* ── HEADER ────────────────────────────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050505]/88 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-[1540px] items-center justify-between px-5 md:px-8 xl:px-12">
          <a href="#home" className="flex flex-col items-start leading-none text-white">
            <span className="display-title text-5xl md:text-6xl">
              KB<span className="text-gold">.</span>
            </span>
            <span className="mt-1 text-[10px] font-black uppercase tracking-[0.35em] text-gold">
              Media
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm font-bold uppercase transition hover:text-gold ${
                  active === item.href.slice(1) ? "text-gold" : "text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-3 left-1/2 h-0.5 -translate-x-1/2 bg-gold transition-all ${
                    active === item.href.slice(1) ? "w-8" : "w-0"
                  }`}
                />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-gold px-7 py-3 text-sm font-black uppercase text-gold shadow-gold-soft transition hover:bg-gold hover:text-black lg:inline-flex"
          >
            Work With Me
            <Send className="h-4 w-4" />
          </a>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/60 text-gold lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-gold/20 bg-black px-5 py-5 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-3 text-sm font-bold uppercase text-white transition hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen overflow-hidden pt-24">
        <div className="absolute inset-0 opacity-40">
          <Image src="/images/editing-setup.png" alt="" fill priority className="object-cover object-right" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.88)_34%,rgba(5,5,5,0.40)_67%,#050505_100%)]" />
        <div className="absolute left-[46%] top-[24%] h-80 w-80 rounded-full bg-gold/25 blur-[90px]" />
        <motion.div
          className="light-streak bottom-[8%] right-[2%] z-20"
          animate={{ x: [0, 18, 0], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto grid max-w-[1540px] items-start px-5 pt-8 md:px-8 lg:min-h-[calc(100vh-6rem)] lg:items-center lg:pt-0 xl:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[0.96fr_1.18fr_0.86fr]">

            {/* Left — copy */}
            <Reveal className="relative z-20 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                AI UGC · Video Editing · Web &amp; Apps
              </div>
              <p className="mb-4 text-lg font-semibold uppercase tracking-[0.32em] text-white/80">
                Hey, I&apos;m
              </p>
              <h1 className="display-title text-[5.8rem] uppercase leading-[0.82] md:text-[9rem] xl:text-[12.5rem]">
                <span className="metal-text block">Khurt</span>
                <span className="gold-fill-text block">Barrios</span>
              </h1>
              <p className="mt-4 text-lg font-black uppercase text-white md:text-xl">
                Video Editor <span className="mx-2 text-gold">•</span> AI Content Creator <span className="mx-2 text-gold">•</span> Web Developer
              </p>
              <div className="my-5 h-px max-w-xl bg-gradient-to-r from-gold to-transparent" />
              <p className="max-w-xl text-base leading-8 text-white/70 md:text-lg">
                I create high-retention AI UGC ads, cinematic content, and conversion-focused websites designed to capture attention and drive real results.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-3 rounded-[8px] bg-gold px-8 py-4 text-sm font-black uppercase text-black shadow-gold transition hover:-translate-y-1"
                >
                  <Play className="h-5 w-5 fill-current" />
                  View Portfolio
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-[8px] border border-gold px-8 py-4 text-sm font-black uppercase text-white transition hover:-translate-y-1 hover:bg-gold hover:text-black"
                >
                  <Users className="h-5 w-5" />
                  Work With Me
                </a>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {["300+ Projects", "50+ Clients", "100M+ Views", "4+ Years"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold text-white/60"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Center — portrait */}
            <div className="relative z-30 mx-auto h-64 w-full max-w-[300px] sm:h-80 sm:max-w-[380px] md:h-[440px] md:max-w-[480px] lg:h-[520px] lg:-ml-28 lg:max-w-[520px] xl:-ml-36 xl:h-[680px] xl:max-w-[640px]">
              <div className="absolute inset-x-12 bottom-10 top-10 rounded-full bg-gold/28 blur-[68px]" />
              <Image
                src="/images/khurt-portrait.png"
                alt="Khurt Barrios professional portrait"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 42vw"
                className="portrait-shadow object-contain object-bottom"
              />
            </div>

            {/* Right — card */}
            <Reveal className="relative z-10 hidden min-h-[470px] items-end lg:flex" delay={0.15}>
              <div className="absolute inset-0 rounded-[8px] border border-gold/25 bg-black/20 shadow-gold-soft" />
              <Image
                src="/images/editing-setup.png"
                alt="Working and editing setup"
                fill
                priority
                sizes="28vw"
                className="rounded-[8px] object-cover opacity-80"
              />
              <div className="absolute inset-0 rounded-[8px] bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="relative m-5 glass-card rounded-[8px] p-5">
                <ArrowUpRight className="mb-4 h-10 w-10 text-gold" />
                <p className="display-title text-3xl uppercase">
                  Engaging Content{" "}
                  <span className="gold-text">That Performs.</span>
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    { v: "300+", l: "Projects" },
                    { v: "100M+", l: "Views" },
                  ].map(({ v, l }) => (
                    <div key={l} className="rounded-lg border border-gold/20 bg-black/50 px-3 py-2.5 text-center">
                      <p className="text-2xl font-black text-gold">{v}</p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/55">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section id="about" className="relative px-5 py-24 md:px-8 xl:px-12">
        <div className="mx-auto max-w-[1540px]">
          <Reveal>
            <SectionEyebrow>About Me</SectionEyebrow>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <Heading white="The Creator" gold="Behind The Edits" />
              </div>
              <div className="space-y-5 text-lg leading-8 text-white/75">
                <p>
                  I&apos;m Khurt Barrios, a freelance video editor, AI content creator, graphic designer, and web/app developer with 4+ years of experience specializing in high-retention short-form content.
                </p>
                <p>
                  I focus on creating clean, engaging, and high-converting AI UGC ads for TikTok, Reels, and Shorts — using strong storytelling, smooth pacing, and intentional editing styles that drive real results.
                </p>
                <p>
                  Beyond content, I also build fast, conversion-focused websites and mobile apps — combining creative and technical skills to deliver complete digital solutions for brands and businesses.
                </p>
                <p className="text-xl font-semibold text-gold">
                  My goal: deliver polished, high-quality work that keeps attention, builds brands, and drives real results.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal key={stat.label} delay={index * 0.06}>
                  <div className="glass-card rounded-[8px] p-7">
                    <Icon className="mb-5 h-10 w-10 text-gold" />
                    <p className="text-5xl font-black text-gold">{stat.value}</p>
                    <p className="mt-2 text-sm font-bold uppercase tracking-widest text-white/55">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="px-5 py-24 md:px-8 xl:px-12">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="mx-auto max-w-4xl text-center">
            <SectionEyebrow>What I Do</SectionEyebrow>
            <Heading white="Content Built" gold="For Results" center />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
              From AI UGC ads to full web development — I create content and digital products that capture attention and convert.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -7 }}
                    className="group relative h-full rounded-[8px] glass-card p-8 transition hover:shadow-gold"
                  >
                    {service.badge && (
                      <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black">
                        {service.badge}
                      </span>
                    )}
                    <Icon className="mb-7 h-12 w-12 text-gold transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-2xl font-black uppercase">{service.title}</h3>
                    <p className="mt-4 leading-7 text-white/60">{service.copy}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO SLIDER ──────────────────────────────────────────────── */}
      <section id="portfolio" className="relative overflow-hidden px-5 py-24 md:px-8 xl:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,196,0,0.07),transparent_40rem)]" />
        <div className="relative mx-auto max-w-[1540px]">

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: slideDirection * 56 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDirection * -56 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <SectionEyebrow>Portfolio</SectionEyebrow>
              <div className="display-title text-6xl uppercase leading-[0.88] md:text-7xl xl:text-8xl">
                <span className="metal-text block">{slide.titleWhite}</span>
                <span className="gold-fill-text block">{slide.titleGold}</span>
              </div>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
                {slide.description}
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {slide.features.map((feature) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={feature.title} className="flex gap-4">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                        <FeatureIcon className="h-4 w-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase tracking-wider text-white">{feature.title}</p>
                        <p className="mt-0.5 text-sm leading-6 text-white/50">{feature.copy}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <a
                href={slide.link}
                target={slide.link.startsWith("http") ? "_blank" : undefined}
                rel={slide.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm font-black uppercase text-gold transition hover:bg-gold hover:text-black"
              >
                View Works
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Slider navigation */}
          <div className="mt-10 inline-flex flex-col gap-5">
            <div className="flex items-center">
              {portfolioSlides.map((_, i) => (
                <div key={i} className="flex items-center">
                  <button
                    onClick={() => goToSlide(i)}
                    className={`text-sm font-black transition-colors ${
                      i === currentSlide ? "text-gold" : "text-white/35 hover:text-white/65"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                  {i < portfolioSlides.length - 1 && (
                    <span
                      className={`mx-3 inline-block h-px w-10 transition-colors ${
                        i < currentSlide ? "bg-gold/50" : "bg-white/20"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-black uppercase text-white transition hover:border-gold hover:text-gold"
              >
                <ArrowLeft className="h-4 w-4" />
                Prev
              </button>
              <button
                onClick={nextSlide}
                className="flex items-center gap-3 rounded-full border border-gold px-6 py-3 text-sm font-black uppercase text-gold transition hover:bg-gold hover:text-black"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────────────────────────── */}
      <section id="experience" className="relative px-5 py-24 md:px-8 xl:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,196,0,0.12),transparent_28rem)]" />
        <div className="relative mx-auto max-w-[1540px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionEyebrow>Experience</SectionEyebrow>
              <Heading white="Experience &" gold="Creative Journey" />
              <p className="mt-8 max-w-lg text-lg leading-8 text-white/70">
                With 4+ years across video editing, AI UGC content, graphic design, web development, and real estate marketing — I&apos;ve worked with brands and businesses across industries to create work that performs and delivers results.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="rounded-[8px] border border-gold/20 bg-black/30 p-5">
                      <Icon className="mb-3 h-7 w-7 text-gold" />
                      <p className="text-4xl font-black text-white">{stat.value}</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-widest text-white/50">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <div>
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white/45">
                Brands &amp; Clients I&apos;ve Worked With
              </p>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {brands.map((brand, index) => (
                  <Reveal key={brand.name} delay={index * 0.04}>
                    <div className="grid min-h-28 place-items-center rounded-[8px] glass-card p-5 text-center">
                      {brand.logo ? (
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          width={170}
                          height={80}
                          className="max-h-12 w-auto object-contain"
                        />
                      ) : (
                        <p className="text-xl font-black uppercase tracking-[0.08em] text-white">
                          {brand.name}
                        </p>
                      )}
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
                        {brand.role}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section id="testimonials" className="px-5 py-24 md:px-8 xl:px-12">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
            <Reveal>
              <SectionEyebrow>Testimonials</SectionEyebrow>
              <Heading white="Client" gold="Feedback" />

              <div className="mt-8 inline-flex flex-col rounded-[8px] glass-card px-6 py-5">
                <div className="flex items-end gap-3">
                  <span className="display-title text-7xl text-gold">5.0</span>
                  <div className="mb-2.5 flex text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-black uppercase tracking-wider text-white/70">
                  100% Client Satisfaction
                </p>
                <p className="mt-1 text-xs text-white/40">
                  Based on {testimonials.length}+ client reviews
                </p>
              </div>

              <p className="mt-7 text-lg leading-8 text-white/70">
                Here&apos;s what brands, businesses, and clients say about working with me and the results we&apos;ve achieved together.
              </p>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.client} delay={index * 0.05}>
                  <div className="h-full rounded-[8px] glass-card p-7">
                    <div className="mb-4 text-5xl font-black leading-none text-gold">&ldquo;</div>
                    <p className="min-h-28 text-base leading-7 text-white/80">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="my-5 h-px bg-white/10" />
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-white p-1.5">
                        {testimonial.logo ? (
                          <Image
                            src={testimonial.logo}
                            alt={`${testimonial.client} logo`}
                            width={48}
                            height={48}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <span className="text-xs font-black text-black">
                            {testimonial.client.slice(0, 3).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-black text-gold">{testimonial.client}</p>
                        <p className="text-xs text-white/50">{testimonial.role}</p>
                        <div className="mt-1 flex text-gold">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section id="contact" className="relative overflow-hidden px-5 py-24 md:px-8 xl:px-12">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/editing-setup.png" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

        <div className="relative mx-auto max-w-[1540px] rounded-[8px] glass-card p-6 md:p-10 xl:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionEyebrow>Let&apos;s Work Together</SectionEyebrow>
              <h2 className="display-title text-5xl uppercase md:text-7xl xl:text-8xl">
                <span className="metal-text block">Let&apos;s Create</span>
                <span className="metal-text block">Something</span>
                <span className="gold-fill-text block">That Performs.</span>
              </h2>

              <p className="mt-6 max-w-sm text-base leading-8 text-white/65">
                Have a project in mind? Let&apos;s bring your ideas to life with high-quality ads and creative solutions that connect, engage, and deliver real results.
              </p>

              <div className="mt-7 space-y-3 text-base text-white/70">
                <p><span className="font-bold text-gold">WhatsApp:</span> 09690135745</p>
                <p><span className="font-bold text-gold">Telegram:</span> 09690135745</p>
                <p><span className="font-bold text-gold">Email:</span> khurbusiness@gmail.com</p>
                <p><span className="font-bold text-gold">Based in:</span> Philippines</p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Instagram", href: "https://www.instagram.com/khurisk_/", icon: Instagram },
                  { label: "Email", href: "mailto:khurbusiness@gmail.com", icon: Mail },
                  { label: "WhatsApp", href: "https://wa.me/639690135745", icon: MessageCircle },
                  { label: "Portfolio", href: "https://drive.google.com/drive/folders/1pWIJqRwcIZzXgY_y3jRtccH2LQl_Sgnh?usp=sharing", icon: ArrowUpRight },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-gold/60 px-5 py-4 font-black uppercase text-gold transition hover:bg-gold hover:text-black"
                    >
                      {item.label}
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mb-6 text-xl font-black uppercase text-white">Send Me a Message</p>
              <form onSubmit={handleContactSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Your Name", key: "name", type: "text" },
                    { label: "Your Email", key: "email", type: "email" },
                  ].map((field) => (
                    <label key={field.key} className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gold">
                        {field.label}
                      </span>
                      <input
                        required
                        type={field.type}
                        value={contactForm[field.key as keyof typeof contactForm]}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, [field.key]: e.target.value })
                        }
                        className="w-full rounded-[8px] border border-gold/35 bg-black/55 px-4 py-4 text-white outline-none transition focus:border-gold focus:shadow-gold-soft"
                        placeholder={field.label}
                      />
                    </label>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gold">
                      Project Type
                    </span>
                    <select
                      required
                      value={contactForm.projectType}
                      onChange={(e) => setContactForm({ ...contactForm, projectType: e.target.value })}
                      className="w-full rounded-[8px] border border-gold/35 bg-[#050505] px-4 py-4 text-white outline-none transition focus:border-gold"
                    >
                      <option value="" disabled>Select type</option>
                      <option>AI UGC Ad Editing</option>
                      <option>Video Editing</option>
                      <option>Real Estate Video</option>
                      <option>Web Development</option>
                      <option>App Development</option>
                      <option>Graphic Design</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gold">
                      Budget Range
                    </span>
                    <select
                      required
                      value={contactForm.budgetRange}
                      onChange={(e) => setContactForm({ ...contactForm, budgetRange: e.target.value })}
                      className="w-full rounded-[8px] border border-gold/35 bg-[#050505] px-4 py-4 text-white outline-none transition focus:border-gold"
                    >
                      <option value="" disabled>Select budget</option>
                      <option>Under $100</option>
                      <option>$100 – $300</option>
                      <option>$300 – $500</option>
                      <option>$500 – $1,000</option>
                      <option>$1,000+</option>
                      <option>Let&apos;s Discuss</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gold">
                    Tell Me About Your Project
                  </span>
                  <textarea
                    required
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, message: e.target.value })
                    }
                    className="min-h-36 w-full resize-y rounded-[8px] border border-gold/35 bg-black/55 px-4 py-4 text-white outline-none transition focus:border-gold focus:shadow-gold-soft"
                    placeholder="Describe your project, goals, and timeline..."
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-3 rounded-[8px] bg-gold px-8 py-4 font-black uppercase text-black shadow-gold transition hover:-translate-y-1"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 px-5 py-8 md:px-8 xl:px-12">
        <div className="mx-auto flex max-w-[1540px] flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
          <a href="#home" className="display-title text-3xl text-white">
            KB<span className="text-gold">.</span>
          </a>
          <p>© {new Date().getFullYear()} Khurt Barrios. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/khurisk_/" target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">
              Instagram
            </a>
            <a href="mailto:khurbusiness@gmail.com" className="transition hover:text-gold">
              Email
            </a>
            <a href="https://wa.me/639690135745" target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
