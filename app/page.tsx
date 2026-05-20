"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Clapperboard,
  Diamond,
  Film,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  PenTool,
  Play,
  Send,
  Sparkles,
  Star,
  Users,
  X,
  Zap
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

const services = [
  { title: "High-Retention Editing", icon: Clapperboard, copy: "Hook-first edits with sharp pacing, clean captions, and story-driven structure." },
  { title: "UGC Ad Content", icon: Film, copy: "Conversion-focused UGC built for TikTok, Reels, Shorts, and paid social." },
  { title: "Real Estate Video Editing", icon: Building2, copy: "Cinematic property walkthroughs, social reels, and luxury listing edits." },
  { title: "UGC AI Video", icon: Sparkles, copy: "AI-assisted workflows, prompts, and polished content systems for scale." },
  { title: "Graphic Design", icon: PenTool, copy: "Thumbnails, posters, ad creatives, carousels, and brand visuals." },
  { title: "Social Media Content", icon: Zap, copy: "Platform-native content designed to capture attention and keep momentum." }
];

const brands = [
  { name: "SMDC", role: "Real Estate" },
  { name: "ABCLOTHING Lifestyle", role: "TikTok Ads" },
  { name: "Organic Shirt", role: "TikTok Ads" },
  { name: "MX Studio", role: "Video Editor" },
  { name: "Skintech Luxa Brush", role: "Video Editor" },
  { name: "WRLD KICKS", role: "UGC & Filming" },
  { name: "TLC Trading", role: "Video Editor" },
  { name: "Tigrox", role: "UGC AI Ads", logo: "/images/logos/tigrox.png" },
  { name: "Khursha", role: "AI Skincare Graphics", logo: "/images/logos/khursha.png" },
  { name: "ADSCrafters", role: "Owner / Creative Lead", logo: "/images/logos/adscrafters.png" },
  { name: "More Businesses", role: "Graphic Design", logo: "/images/logos/more-business.png" }
];

const styles = [
  { title: "Alex Hormozi Style", icon: Zap, copy: "Bold text, punchy cuts, strong hooks, and direct storytelling." },
  { title: "UGC Style", icon: Users, copy: "Natural, authentic, relatable content built to drive conversions." },
  { title: "Cinematic Real Estate", icon: Building2, copy: "Smooth transitions, elegant pacing, and premium property visuals." },
  { title: "Luxury Brand Ads", icon: Diamond, copy: "High-end edits that create desire and elevate perceived value." },
  { title: "Fast-Paced TikTok", icon: Clapperboard, copy: "Quick cuts, beat syncs, and scroll-stopping visual rhythm." },
  { title: "Minimal Clean Editing", icon: PenTool, copy: "Refined cuts, restrained text, and polished professional pacing." }
];

const testimonials = [
  {
    quote: "Khurt delivered exceptional work. The edits were clean, engaging, and exactly what we needed.",
    client: "SMDC Marketing Team",
    role: "Real Estate",
    logo: "/images/logos/smdc.png"
  },
  {
    quote: "The TikTok ad creatives were clean, on-brand, and easy to use for our campaigns. Great work and smooth communication.",
    client: "ABCLOTHING Lifestyle",
    role: "TikTok Ads",
    logo: "/images/logos/abclothing.png"
  },
  {
    quote: "Khurt created engaging content that helped our products look more professional and ready for social media promotion.",
    client: "Organic Shirt",
    role: "TikTok Ads",
    logo: "/images/logos/organic-shirt.png"
  },
  {
    quote: "Creative, reliable, and professional. He understands the vision and brings it to life with polished editing.",
    client: "MX Studio",
    role: "Video Editor",
    logo: "/images/logos/mx-studio.png"
  },
  {
    quote: "The product visuals and edits were clean, premium, and well-suited for beauty and lifestyle marketing.",
    client: "Skintech Luxa Brush",
    role: "Video Editor",
    logo: "/images/logos/luxa-brush.png"
  },
  {
    quote: "Great communication and fast turnaround. Our UGC ads performed really well.",
    client: "WRLD KICKS",
    role: "UGC & Filming",
    logo: "/images/logos/wrld-kicks.png"
  },
  {
    quote: "High-quality work and very easy to work with. Highly recommended.",
    client: "TLC Trading",
    role: "Video Editor",
    logo: "/images/logos/tlc-trading.png"
  },
  {
    quote: "Khurt helped create clean and engaging AI-powered UGC ads for our product campaign. The visuals were polished, creative, and built for attention.",
    client: "Tigrox",
    role: "UGC AI Ads",
    logo: "/images/logos/tigrox.png"
  },
  {
    quote: "Great product visuals and ad creatives. Khurt understood the beauty brand direction and delivered clean, premium-looking graphics.",
    client: "Khursha",
    role: "AI Skincare Product Graphics",
    logo: "/images/logos/khursha.png"
  },
  {
    quote: "ADSCrafters helps creators and businesses produce impactful short-form content with strong visuals, clear messaging, and conversion-focused editing.",
    client: "ADSCrafters",
    role: "Owner / Creative Lead",
    logo: "/images/logos/adscrafters.png"
  },
  {
    quote: "Khurt created professional graphics and ad creatives that helped improve our online presence and made our brand look more polished.",
    client: "More Businesses",
    role: "Graphic Design",
    logo: "/images/logos/more-business.png"
  }
];
const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0 }
};

function Reveal({
  children,
  className = "",
  delay = 0
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
  center = false
}: {
  white: string;
  gold: string;
  center?: boolean;
}) {
  return (
    <h2 className={`display-title text-6xl uppercase md:text-8xl xl:text-9xl ${center ? "text-center" : ""}`}>
      <span className="metal-text block">{white}</span>
      <span className="gold-fill-text block">{gold}</span>
    </h2>
  );
}

export default function Home() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budgetRange: "",
    message: ""
  });

  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New Project Inquiry from ${contactForm.name}`);

    const body = encodeURIComponent(
      `Name: ${contactForm.name}
Email: ${contactForm.email}
Project Type: ${contactForm.projectType}
Budget Range: ${contactForm.budgetRange}

Message:
${contactForm.message}`
    );

    window.location.href = `mailto:khurbusiness@gmail.com?subject=${subject}&body=${body}`;
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

  return (
    <main className="noise luxury-bg min-h-screen overflow-hidden">
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

          <div className="hidden items-center gap-7 lg:flex xl:gap-10">
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
            className="hidden rounded-full border border-gold px-7 py-3 text-sm font-black uppercase text-gold shadow-gold-soft transition hover:bg-gold hover:text-black lg:inline-flex"
          >
            Work With Me
            <Send className="ml-3 h-4 w-4" />
          </a>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/60 text-gold lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
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
                className="block border-b border-white/10 py-3 text-sm font-bold uppercase text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

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

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1540px] items-center px-5 md:px-8 xl:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[0.96fr_1.18fr_0.86fr]">
            <Reveal className="relative z-20 max-w-3xl">
              <p className="mb-5 text-lg font-semibold uppercase tracking-[0.32em] text-white">Hey, I&apos;m</p>
              <h1 className="display-title text-[5.8rem] uppercase leading-[0.82] md:text-[9rem] xl:text-[12.5rem]">
                <span className="metal-text block">Khurt</span>
                <span className="gold-fill-text block">Barrios</span>
              </h1>
              <p className="mt-3 text-xl font-black uppercase text-white md:text-2xl">
                Video Editor <span className="mx-2 text-gold">•</span> Graphic Designer <span className="mx-2 text-gold">•</span> Content Creator
              </p>
              <div className="my-5 h-px max-w-xl bg-gradient-to-r from-gold to-transparent" />
              <p className="max-w-xl text-base leading-8 text-white/76 md:text-lg">
                I create high-retention content, UGC ads, and cinematic visuals designed to capture attention and drive results.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-[8px] bg-gold px-8 py-4 text-sm font-black uppercase text-black shadow-gold transition hover:-translate-y-1"
                >
                  <Play className="mr-3 h-5 w-5 fill-current" />
                  View Portfolio
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-[8px] border border-gold px-8 py-4 text-sm font-black uppercase text-white transition hover:-translate-y-1 hover:bg-gold hover:text-black"
                >
                  <Users className="mr-3 h-5 w-5" />
                  Work With Me
                </a>
              </div>
            </Reveal>

            <div className="relative z-30 mx-auto h-[520px] w-full max-w-[520px] lg:-ml-28 xl:-ml-36 xl:h-[680px] xl:max-w-[640px]">
              <div className="absolute inset-x-12 bottom-10 top-10 rounded-full bg-gold/28 blur-[68px]" />
              <Image
                src="/images/khurt-portrait.png"
                alt="Khurt Barrios professional portrait placeholder"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 42vw"
                className="portrait-shadow object-contain object-bottom"
              />
            </div>

            <Reveal className="relative z-10 hidden min-h-[470px] items-end lg:flex" delay={0.15}>
              <div className="absolute inset-0 rounded-[8px] border border-gold/25 bg-black/20 shadow-gold-soft" />
              <Image
                src="/images/editing-setup.png"
                alt="Working and editing setup placeholder"
                fill
                priority
                sizes="28vw"
                className="rounded-[8px] object-cover opacity-80"
              />
              <div className="absolute inset-0 rounded-[8px] bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="relative m-5 glass-card rounded-[8px] p-5">
                <ArrowUpRight className="mb-4 h-12 w-12 text-gold" />
                <p className="display-title text-4xl uppercase">
                  Engaging Content <span className="gold-text">That Performs.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="about" className="relative px-5 py-24 md:px-8 xl:px-12">
        <div className="mx-auto max-w-[1540px]">
          <Reveal>
            <SectionEyebrow>About Me</SectionEyebrow>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <Heading white="The Creator" gold="Behind The Edits" />
              </div>
              <div className="space-y-5 text-lg leading-8 text-white/75">
                <p>I&apos;m Khurt Barrios, a freelance video editor, graphic designer, and content creator with over 4+ years of experience specializing in high-retention short-form content.</p>
                <p>I focus on creating clean, engaging, and high-converting videos for TikTok, Reels, and Shorts using strong storytelling, smooth pacing, and intentional editing styles.</p>
                <p>I also use AI tools, prompting, and workflow automation to highlight key moments and edit with purpose.</p>
                <p className="text-2xl font-semibold text-gold">My goal is simple: deliver polished, high-quality content that keeps attention and drives results.</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {["3+ Years Experience", "300+ Projects Completed", "50+ Clients Served", "Content That Performs"].map((stat, index) => (
              <Reveal key={stat} delay={index * 0.06}>
                <div className="glass-card rounded-[8px] p-7">
                  <BriefcaseBusiness className="mb-7 h-11 w-11 text-gold" />
                  <p className="text-3xl font-black uppercase">{stat}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-24 md:px-8 xl:px-12">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="mx-auto max-w-4xl text-center">
            <SectionEyebrow>Premium Services</SectionEyebrow>
            <Heading white="Content Built" gold="For Attention" center />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.05}>
                  <motion.div whileHover={{ y: -7 }} className="group h-full rounded-[8px] glass-card p-8 transition hover:shadow-gold">
                    <Icon className="mb-8 h-14 w-14 text-gold transition group-hover:scale-110" />
                    <h3 className="text-2xl font-black uppercase">{service.title}</h3>
                    <p className="mt-4 leading-7 text-white/65">{service.copy}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-5 py-24 md:px-8 xl:px-12">
        <div className="mx-auto max-w-[1540px]">
          <Reveal>
            <SectionEyebrow>Portfolio</SectionEyebrow>
            <Heading white="Selected" gold="Creative Work" />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Real Estate Works",
                copy: "Cinematic condo ads, luxury property edits, and high-converting real estate content.",
                href: "https://drive.google.com/drive/folders/1KxwM4Q2_v0kTe_395385LHUItXy0e66z?usp=sharing"
              },
              {
                title: "Graphic Design",
                copy: "Posters, social media creatives, branding visuals, and ad graphics.",
                href: "https://drive.google.com/drive/folders/1nODWjs6jBzZYFq9TYI-4J6GXhEEDqcAc?usp=drive_link"
              },
              {
                title: "UGC AI Videos",
                copy: "AI-generated ads, cinematic AI content, and viral short-form creatives.",
                href: "https://drive.google.com/drive/folders/1CxYmWGwOLtFf0mRTJLWnq6olq-jIkMLG?usp=sharing"
              },
              {
                title: "UGC Video Works",
                copy: "Product ads, TikTok edits, engaging UGC campaigns, and conversion-focused videos.",
                href: "https://drive.google.com/drive/folders/1t5FciMj3t47mY6ec8YJgThfJoEZ8BgXq?usp=sharing"
              }
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[24px] border border-gold/20 bg-[#0b0b0b] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-[0_0_40px_rgba(255,196,0,0.15)]"
              >
                <h3 className="text-2xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{item.copy}</p>
                <div className="mt-8 inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-black uppercase text-black transition group-hover:scale-105">
                  View Works →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative px-5 py-24 md:px-8 xl:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,196,0,0.12),transparent_28rem)]" />
        <div className="relative mx-auto max-w-[1540px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionEyebrow>Experience</SectionEyebrow>
              <Heading white="Experience &" gold="Creative Journey" />
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/76">
                With over 4+ years of experience in video editing, UGC content, graphic design, and real estate marketing, I&apos;ve worked with brands, creators, and businesses to create content that performs and delivers results.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {brands.map((brand, index) => (
                <Reveal key={brand.name} delay={index * 0.04}>
                  <div className="grid min-h-32 place-items-center rounded-[8px] glass-card p-6 text-center">
                    {brand.logo ? (
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={170}
                        height={80}
                        className="max-h-14 w-auto object-contain"
                      />
                    ) : (
                      <p className="text-2xl font-black uppercase tracking-[0.08em] text-white">{brand.name}</p>
                    )}

                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                      {brand.role}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 xl:px-12">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="mx-auto max-w-5xl text-center">
            <SectionEyebrow>Content Style</SectionEyebrow>
            <Heading white="Editing Styles" gold="I Specialize In" center />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {styles.map((style, index) => {
              const Icon = style.icon;

              return (
                <Reveal key={style.title} delay={index * 0.05}>
                  <div className="group overflow-hidden rounded-[8px] glass-card">
                    <div className="placeholder-grid grid aspect-video place-items-center bg-[#090909]">
                      <Icon className="h-20 w-20 text-gold transition group-hover:scale-110" />
                    </div>
                    <div className="p-7">
                      <p className="mb-3 text-xl font-black text-gold">0{index + 1}</p>
                      <h3 className="text-2xl font-black uppercase">{style.title}</h3>
                      <p className="mt-4 leading-7 text-white/65">{style.copy}</p>
                      <div className="mt-7 h-0.5 w-20 bg-gold" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-5 py-24 md:px-8 xl:px-12">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
            <Reveal>
              <SectionEyebrow>Testimonials</SectionEyebrow>
              <Heading white="Client" gold="Feedback" />
              <p className="mt-7 text-xl leading-8 text-white/75">
                Here&apos;s what brands, businesses, and clients say about working with me and the results we&apos;ve achieved together.
              </p>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.client} delay={index * 0.06}>
                  <div className="h-full rounded-[8px] glass-card p-7">
                    <div className="mb-5 text-6xl font-black text-gold">“</div>
                    <p className="min-h-32 text-lg leading-8 text-white/82">“{testimonial.quote}”</p>
                    <div className="my-6 h-px bg-white/10" />

                    <div className="flex items-center gap-4">
                      <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-white p-2 text-xs font-black text-black">
                        {testimonial.logo ? (
                          <Image
                            src={testimonial.logo}
                            alt={`${testimonial.client} logo`}
                            width={56}
                            height={56}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          testimonial.client.slice(0, 3).toUpperCase()
                        )}
                      </div>

                      <div>
                        <p className="font-black text-gold">{testimonial.client}</p>
                        <p className="text-sm text-white/55">{testimonial.role}</p>
                        <div className="mt-1 flex text-gold">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star key={starIndex} className="h-4 w-4 fill-current" />
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

      <section id="contact" className="px-5 py-24 md:px-8 xl:px-12">
        <div className="mx-auto max-w-[1540px] rounded-[8px] glass-card p-6 md:p-10 xl:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionEyebrow>Let&apos;s Work Together</SectionEyebrow>
              <h2 className="display-title text-6xl uppercase md:text-8xl">
                <span className="metal-text block">Let&apos;s Create Content</span>
                <span className="gold-fill-text block">That Drives Results.</span>
              </h2>

              <div className="mt-8 space-y-4 text-lg text-white/76">
                <p><span className="text-gold">Email:</span> khurbusiness@gmail.com</p>
                <p><span className="text-gold">WhatsApp:</span> 09690135745</p>
                <p><span className="text-gold">Telegram:</span> 09690135745</p>
                <p><span className="text-gold">Location:</span> Philippines</p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/khurisk_/",
                    icon: Instagram
                  },
                  {
                    label: "Email",
                    href: "mailto:khurbusiness@gmail.com",
                    icon: Mail
                  },
                  {
                    label: "WhatsApp",
                    href: "https://wa.me/639690135745",
                    icon: MessageCircle
                  },
                  {
                    label: "Portfolio Link",
                    href: "https://drive.google.com/drive/folders/1pWIJqRwcIZzXgY_y3jRtccH2LQl_Sgnh?usp=sharing",
                    icon: Mail
                  }
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-[8px] border border-gold/70 px-5 py-4 font-black uppercase text-gold transition hover:bg-gold hover:text-black"
                    >
                      {item.label}
                      <Icon className="ml-3 h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={handleContactSubmit} className="grid gap-4">
                {[
                  { label: "Name", key: "name", type: "text" },
                  { label: "Email", key: "email", type: "email" },
                  { label: "Project Type", key: "projectType", type: "text" },
                  { label: "Budget Range", key: "budgetRange", type: "text" }
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

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gold">
                    Message
                  </span>

                  <textarea
                    required
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, message: e.target.value })
                    }
                    className="min-h-40 w-full resize-y rounded-[8px] border border-gold/35 bg-black/55 px-4 py-4 text-white outline-none transition focus:border-gold focus:shadow-gold-soft"
                    placeholder="Tell me about your project"
                  />
                </label>

                <button
                  className="mt-2 inline-flex items-center justify-center rounded-[8px] bg-gold px-8 py-4 font-black uppercase text-black shadow-gold transition hover:-translate-y-1"
                  type="submit"
                >
                  Send Message
                  <Send className="ml-3 h-5 w-5" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
