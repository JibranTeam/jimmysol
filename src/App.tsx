import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Code2, Rocket, Zap, Users, ArrowRight, ArrowUpRight, Check, Star,
  Shield, ChevronDown, ChevronLeft, ChevronRight, Quote, Copy
} from 'lucide-react';
import { cn } from './utils/cn';
import ServicePage from './pages/ServicePage';
import TeamPage from './pages/TeamPage';
import { PageTransition, RouteCurtain } from './components/PageTransition';
import { CornerTicks } from './components/CornerTicks';
import { services as serviceData, getServiceBySlug } from './data/services';

gsap.registerPlugin(ScrollTrigger);

/* ================= Navigation ================= */
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#connect' },
  ];
  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500', scrolled ? 'bg-[#0a1628]/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6')}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <svg viewBox="0 0 40 36" className="w-8 h-8 shrink-0" fill="none" aria-hidden="true">
            <path d="M20 3 L37 33 H3 Z" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M20 12 L29 28 H11 Z" stroke="#ffffff" strokeWidth="1.3" strokeLinejoin="round" opacity="0.65" />
          </svg>
          <span className="text-[14px] font-medium tracking-[0.22em] text-white whitespace-nowrap">THE&nbsp;JIMMY&nbsp;LAB</span>
        </a>
        <div className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-[15px] text-white/75 hover:text-white transition-colors">{item.name}</a>
          ))}
          <a href="#connect" className="btn-primary">Start Project <ArrowUpRight className="w-3.5 h-3.5" /></a>
        </div>
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#0a1628] border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="block text-white/80 hover:text-[#ff6b35] transition-colors py-2" onClick={() => setIsOpen(false)}>{item.name}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ================= Hero brief prompt ================= */
const BRIEF_KEY = 'thejimmylab:brief';
const PROMPTS = [
  'every new tool turns into a headache',
  'our site looks dated and loads slowly',
  'we need a brand that actually stands out',
  'checkout drops off and we cannot see why',
  'we want motion without wrecking performance',
];

const HeroPrompt = () => {
  const [value, setValue] = useState('');
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(false);
  const [typed, setTyped] = useState('');

  const idle = !value && !focused;

  /* typewriter loop: type → hold → delete → next phrase */
  useEffect(() => {
    if (!idle) return;
    let slot = 0;
    let char = 0;
    let deleting = false;
    let timer = 0;

    const tick = () => {
      const phrase = PROMPTS[slot];
      char += deleting ? -1 : 1;
      setTyped(phrase.slice(0, char));

      let delay = deleting ? 26 : 58;
      if (!deleting && char === phrase.length) {
        deleting = true;
        delay = 2200;              // hold the finished line
      } else if (deleting && char === 0) {
        deleting = false;
        slot = (slot + 1) % PROMPTS.length;
        delay = 420;               // beat before the next line
      }
      timer = window.setTimeout(tick, delay);
    };

    timer = window.setTimeout(tick, 500);
    return () => window.clearTimeout(timer);
  }, [idle]);

  const ready = value.trim().length > 2;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ready) return;
    try { window.sessionStorage.setItem(BRIEF_KEY, value.trim()); } catch { /* storage may be blocked */ }
    window.dispatchEvent(new CustomEvent('brief', { detail: value.trim() }));
    setSent(true);
    window.setTimeout(() => {
      window.location.hash = 'connect';
      setSent(false);
      setValue('');
    }, 550);
  };

  return (
    <div className="w-full max-w-[560px]">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35 mb-3">
        Or tell us what's broken
      </p>
      <form
        onSubmit={submit}
        data-cursor="snap"
        className="btn-field group"
      >
        <span className="relative flex-1 min-w-0">
          {/* animated ghost line — sits under the real input */}
          {idle && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center font-mono text-[11.5px] uppercase tracking-[0.1em] text-white/45 truncate"
            >
              {typed}
              <span className="caret-blink ml-px inline-block w-[6px] translate-y-[1px] border-b border-white/60" />
            </span>
          )}
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={idle ? '' : 'describe it in a line…'}
            spellCheck={false}
            autoComplete="off"
            aria-label="Describe your own business pain"
            className="relative w-full bg-transparent font-mono text-[11.5px] uppercase tracking-[0.1em] text-white placeholder:text-white/40 outline-none disabled:opacity-60"
          />
        </span>
        <button
          type="submit"
          disabled={!ready}
          aria-label="Submit"
          data-cursor-hover="true"
          className={cn(
            'flex shrink-0 items-center justify-center transition-[color,transform,opacity] duration-200 ease-out',
            ready || sent
              ? 'text-white cursor-pointer hover:-translate-y-0.5 hover:translate-x-0.5'
              : 'text-white/35 cursor-default'
          )}
        >
          {sent ? <Check className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
};

/* ================= Hero ================= */
const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(layer1Ref.current, { yPercent: -20, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.to(layer2Ref.current, { yPercent: -40, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.to(layer3Ref.current, { yPercent: -60, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.from('.hero-title', { y: 100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 });
      gsap.from('.hero-subtitle', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.5 });
      gsap.from('.hero-cta', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.7 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden perspective-container">
      <div ref={layer1Ref} className="absolute inset-0 pointer-events-none parallax-layer" />
      <div ref={layer2Ref} className="absolute inset-0 pointer-events-none parallax-layer" />
      <div ref={layer3Ref} className="absolute inset-0 pointer-events-none parallax-layer" />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 pt-32 pb-20">
        <p className="eyebrow normal-case mb-7 flex items-center gap-3 text-white/55">
          <span className="hidden sm:inline-block h-px w-10 bg-white/25" aria-hidden="true" />
          <span>( Digital Experience Studio — Est. 2013 )</span>
        </p>
        <h1 className="hero-title text-white mb-9">
          <span className="display-thin block text-[clamp(2.6rem,9.2vw,8.4rem)]">We Architect</span>
          <span className="display-heavy block text-[clamp(2.9rem,10.4vw,9.6rem)]">Experiences.</span>
        </h1>
        <p className="hero-subtitle font-mono text-[12px] sm:text-[13.5px] leading-[1.85] tracking-[0.11em] uppercase text-white/55 max-w-[46ch] mb-12">
          Digital experience core. We design, build and optimise the
          <br className="hidden sm:block" /> interfaces and systems that move brands forward.
        </p>
        <div className="hero-cta flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-10">
          <a href="#services" className="btn-ghost min-w-[230px] shrink-0">
            <span>Explore the core</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <div className="flex-1 max-w-[640px]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
              <div className="min-w-0 flex-1">
                <HeroPrompt />
              </div>
              <a
                href="https://cal.com/uxkunal/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs text-white/70 transition-colors hover:text-white sm:mb-[18px]"
              >
                Book a Call
                <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.07] border border-white/[0.07]">
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '150+', label: 'Happy Clients' },
            { value: '10+', label: 'Years Experience' },
            { value: '5.0', label: 'Top Rated' },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.08 }} className="bg-[#05070a]/70 px-5 py-7">
              <div className="text-3xl md:text-[2.6rem] font-extralight tracking-[-0.02em] text-white leading-none">{stat.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 mt-3">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= Word reveal ================= */
const Words = ({
  text,
  aria,
  className,
  baseDelay = 0,
  outlineLast = false,
}: {
  text: string;
  aria: string;
  className?: string;
  baseDelay?: number;
  outlineLast?: boolean;
}) => {
  const words = text.split(' ');
  return (
    <p aria-label={aria} className={className}>
      {words.map((w, i) => {
        const last = i === words.length - 1;
        return (
          <span key={i} aria-hidden="true" className="inline-block whitespace-pre">
            <motion.span
              initial={{ opacity: 0, y: '0.55em', filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ delay: baseDelay + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={cn('inline-block [will-change:filter,opacity]', outlineLast && last && 'gradient-text')}
            >
              {w}
            </motion.span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </p>
  );
};

/* ================= MODES arts ================= */
const HoneycombPattern = ({ id, color }: { id: string; color: string }) => (
  <svg width="100%" height="100%"><defs><pattern id={id} x="0" y="0" width="28" height="49" patternUnits="userSpaceOnUse"><g stroke={color} strokeWidth="2" fill="none"><path d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM-0.01 58.25l13 7.5v15l-13 7.5L-13 80.75v-15l12.99-7.5zM27.99 58.25l13 7.5v15l-13 7.5L15 80.75v-15l12.99-7.5zM-0.01-15.25l13 7.5v15l-13 7.5L-13-17.75v-15l12.99-7.5zM27.99-15.25l13 7.5v15l-13 7.5L15-17.75v-15l12.99-7.5zM13.99 33.75l13 7.5v15l-13 7.5L1 56.25v-15l12.99-7.5zM-0.01 9.25l13 7.5v15l-13 7.5L-13 31.75v-15l12.99-7.5zM27.99 9.25l13 7.5v15l-13 7.5L15 31.75v-15l12.99-7.5z" /></g></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill={'url(#' + id + ')'} /></svg>
);
const DesignArt = ({ active: _a = false, color = '#ff6b35' }: { active?: boolean; color?: string }) => (
  <svg viewBox="0 0 200 160" width="130" height="115" fill="none">
    <ellipse cx="100" cy="140" rx="55" ry="9" fill={color} opacity="0.14" />
    <rect x="34" y="24" width="132" height="92" rx="10" fill="#101c2e" stroke={color} strokeWidth="2.5" />
    <rect x="34" y="24" width="132" height="20" rx="10" fill={color} opacity="0.18" />
    <circle cx="48" cy="34" r="3.2" fill={color} /><circle cx="59" cy="34" r="3.2" fill={color} opacity="0.8" /><circle cx="70" cy="34" r="3.2" fill={color} opacity="0.8" />
    <rect x="46" y="56" width="42" height="46" rx="6" fill={color} opacity="0.25" />
    <rect x="96" y="56" width="58" height="8" rx="4" fill="#ffffff" opacity="0.35" />
    <rect x="96" y="70" width="44" height="8" rx="4" fill="#ffffff" opacity="0.2" />
    <rect x="96" y="84" width="52" height="8" rx="4" fill="#ffffff" opacity="0.2" />
    <rect x="96" y="98" width="30" height="8" rx="4" fill={color} opacity="0.6" />
    <circle cx="163" cy="112" r="15" fill={color} /><path d="M157 112l4 4 8-8" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);
const BuildArt = ({ active: _b = false, color = '#ff6b35' }: { active?: boolean; color?: string }) => (
  <svg viewBox="0 0 200 160" width="130" height="115" fill="none">
    <ellipse cx="100" cy="140" rx="55" ry="9" fill={color} opacity="0.14" />
    <rect x="26" y="30" width="148" height="84" rx="10" fill="#0d1a2b" stroke={color} strokeWidth="2.5" />
    <path d="M62 58l-16 14 16 14" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M138 58l16 14-16 14" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M110 52l-20 40" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <rect x="26" y="30" width="148" height="16" rx="8" fill={color} opacity="0.15" />
    <circle cx="40" cy="38" r="2.6" fill={color} /><circle cx="50" cy="38" r="2.6" fill={color} opacity="0.5" />
  </svg>
);
const ConsultArt = ({ active = false, color = '#ff6b35' }: { active?: boolean; color?: string }) => (
  <svg viewBox="0 0 200 170" width="130" height="118" fill="none">
    <ellipse cx="100" cy="152" rx="46" ry="8" fill={color} opacity="0.14" />
    <g stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none">
      <path d="M90 24a14 14 0 0 1 20 0">
        <animate attributeName="opacity" values={active ? '0;0.9;0' : '0;0.45;0'} keyTimes="0;0.3;1" calcMode="spline" keySplines="0.3 0 0.4 1;0.4 0 0.7 1" dur="1.8s" repeatCount="indefinite" begin="0s" />
      </path>
      <path d="M82 16a26 26 0 0 1 36 0">
        <animate attributeName="opacity" values={active ? '0;0.6;0' : '0;0.28;0'} keyTimes="0;0.3;1" calcMode="spline" keySplines="0.3 0 0.4 1;0.4 0 0.7 1" dur="1.8s" repeatCount="indefinite" begin="0.35s" />
      </path>
      <path d="M76 10a34 34 0 0 1 48 0">
        <animate attributeName="opacity" values={active ? '0;0.35;0' : '0;0.18;0'} keyTimes="0;0.3;1" calcMode="spline" keySplines="0.3 0 0.4 1;0.4 0 0.7 1" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
      </path>
    </g>
    <line x1="100" y1="40" x2="100" y2="62" stroke={color} strokeWidth="7" strokeLinecap="round" />
    <circle cx="100" cy="36" r="11" fill={color}>
      <animate attributeName="r" values="11;12.5;11" dur="1.8s" repeatCount="indefinite" />
    </circle>
    <circle cx="42" cy="108" r="12" fill={color} />
    <circle cx="158" cy="108" r="12" fill={color} />
    <rect x="50" y="66" width="100" height="78" rx="22" fill="#0f1a29" stroke={color} strokeWidth="7" />
    <circle cx="82" cy="106" r="10" fill={color} />
    <circle cx="118" cy="106" r="10" fill={color} />
  </svg>
);
const LearnArt = ({ active: _a = false, color = '#ff6b35' }: { active?: boolean; color?: string }) => (
  <svg viewBox="0 0 200 212" width="132" height="140" fill="none">
    <ellipse cx="100" cy="202" rx="62" ry="7" fill={color} opacity="0.1" />
    <g stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.9">
      <line x1="100" y1="6" x2="100" y2="22" />
      <line x1="66" y1="18" x2="76" y2="29" />
      <line x1="134" y1="18" x2="124" y2="29" />
      <line x1="52" y1="48" x2="68" y2="48" />
      <line x1="148" y1="48" x2="132" y2="48" />
    </g>
    <path d="M100 30c-17 0-28 13-28 28 0 10 5 17 12 22v8h32v-8c7-5 12-12 12-22 0-15-11-28-28-28z" fill="#0f1a29" stroke={color} strokeWidth="5" strokeLinejoin="round" />
    <path d="M100 82V68m0 0l-8-12m8 12l8-12" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.85" />
    <rect x="86" y="88" width="28" height="12" rx="4" fill={color} />
    <rect x="86" y="88" width="28" height="4" rx="2" fill={color} opacity="0.55" />
    <circle cx="50" cy="140" r="15" fill="#0f1a29" stroke={color} strokeWidth="4" />
    <path d="M22 188c0-17 12-28 28-28s28 11 28 28" fill="#0f1a29" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <circle cx="150" cy="140" r="15" fill="#0f1a29" stroke={color} strokeWidth="4" />
    <path d="M122 188c0-17 12-28 28-28s28 11 28 28" fill="#0f1a29" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <circle cx="100" cy="150" r="16.5" fill="#0f1a29" stroke={color} strokeWidth="4.5" />
    <path d="M70 198c0-18 13-30 30-30s30 12 30 30" fill="#0f1a29" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
  </svg>
);

/* ================= MODES ================= */
const ModesSection = () => {
  const modes = [
    { n: '01', title: 'DESIGN', subtitle: 'Interface & Brand Systems', desc: 'Wireframes, design systems and pixel-perfect interfaces crafted around real user behaviour.', color: '#ff6b35', rgb: '255,107,53', Art: DesignArt, link: '#/services/ui-ux-design', cta: 'Explore Design' },
    { n: '02', title: 'BUILD', subtitle: 'Engineering & Development', desc: 'Production-grade React, Next.js and TypeScript builds engineered to scale from day one.', color: '#38bdf8', rgb: '56,184,248', Art: BuildArt, link: '#/services/web-development', cta: 'Explore Build' },
    { n: '03', title: '1 ON 1', subtitle: 'Technology & Project Consultancy', desc: 'Get focused 1-on-1 guidance to solve technical challenges, evaluate ideas, plan projects, or make smarter technology decisions.', color: '#06d6a0', rgb: '6,214,160', Art: ConsultArt, link: '#/services/consultation-training', cta: 'Explore Consultancy' },
    { n: '04', title: 'LEARN', subtitle: 'Web Development & Tech Training', desc: 'Learn modern web development through practical projects, expert guidance and real-world workflows.', color: '#ffd166', rgb: '255,209,102', Art: LearnArt, link: '#/services/consultation-training', cta: 'Explore Training' },
  ];
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const dragX = useRef<number | null>(null);
  const total = modes.length;
  const go = (dir: number) => setActive((prev) => (prev + dir + total) % total);
  const offsetOf = (i: number) => { let o = i - active; if (o > total / 2) o -= total; if (o < -total / 2) o += total; return o; };
  const onDown = (x: number) => { dragX.current = x; };
  const onUp = (x: number) => { if (dragX.current === null) return; const d = x - dragX.current; if (Math.abs(d) > 45) go(d < 0 ? 1 : -1); dragX.current = null; };
  return (
    <section id="modes" className="relative w-full overflow-hidden bg-[#070f1a] py-24 md:py-32 px-5">
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.10) 0%, transparent 65%)' }} />
      <div className="relative z-[2] mx-auto w-full max-w-4xl px-4 text-center mb-8 md:mb-10">
        <Words
          aria="Design. Build. Consult. Learn."
          text="Design. Build. Consult. Learn."
          outlineLast
          className="text-white [font-size:clamp(2.4rem,7vw,5.6rem)] leading-[0.98] tracking-[-0.02em] font-extrabold uppercase"
        />
        <Words
          aria="Four ways we work — one partner across the whole journey, from first sketch to shipped product, and hands-on guidance after launch."
          text="Four ways we work — one partner across the whole journey, from first sketch to shipped product, and hands-on guidance after launch."
          baseDelay={0.35}
          className="mx-auto mt-7 max-w-[58ch] font-mono text-[12px] sm:text-[13px] font-light leading-[1.9] tracking-[0.08em] uppercase text-white/50"
        />
      </div>
      <div className="modes-layout-container">
        <div className="modes-col-left"><h2 className="modes-vertical-heading">MODES</h2></div>
        <div className="modes-col-right">
          <div tabIndex={0} role="group" aria-label="Modes carousel" onMouseDown={(e) => onDown(e.clientX)} onMouseUp={(e) => onUp(e.clientX)} onTouchStart={(e) => onDown(e.touches[0].clientX)} onTouchEnd={(e) => onUp(e.changedTouches[0].clientX)} onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(-1); if (e.key === 'ArrowRight') go(1); }} className="w-full h-[680px] flex items-center justify-center relative z-10 cursor-grab active:cursor-grabbing select-none outline-none" style={{ perspective: '1250px', transformStyle: 'preserve-3d', touchAction: 'pan-y' }}>
            {modes.map((m, i) => {
              const o = offsetOf(i); const isActive = o === 0; const abs = Math.abs(o); const isHovered = hovered === i;
              return (
                <article key={m.n} onClick={() => !isActive && setActive(i)} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} className="modes-card group absolute flex flex-col overflow-hidden rounded-3xl p-8" style={{
                  width: 340, maxWidth: '90vw', height: 520,
                  background: isHovered ? 'linear-gradient(180deg, rgba(' + m.rgb + ',0.12) 0%, rgba(7,11,14,0.95) 55%, #070f1a 100%)' : 'linear-gradient(180deg, rgba(7,11,14,0.95) 0%, #070f1a 100%)',
                  border: '1.5px solid ' + (isHovered ? m.color + 'a8' : 'rgba(255,255,255,0.12)'),
                  boxShadow: isHovered ? '0 18px 40px -20px rgba(' + m.rgb + ',0.55), 0 28px 56px -16px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.14)' : '0 16px 32px -12px rgba(0,0,0,0.7)',
                  cursor: isActive ? 'default' : 'pointer', opacity: abs > 1 ? 0 : isActive ? 1 : 0.85,
                  filter: isActive ? 'blur(0px)' : 'blur(0.8px) brightness(0.9)',
                  transform: isActive ? (isHovered ? 'translateZ(220px) scale(1.04)' : 'translateZ(200px) scale(1.02)') : 'translateX(' + o * 360 + 'px) translateZ(' + (isHovered ? -80 : -100) + 'px) scale(' + (isHovered ? 0.85 : 0.82) + ') rotateY(' + o * -24 + 'deg)',
                  zIndex: isActive ? 20 : 10 - abs, pointerEvents: abs > 1 ? 'none' : 'auto', transformStyle: 'preserve-3d',
                }}>
                  <div className="flex flex-col items-center text-center">
                    <h3 className="font-['Syne'] text-[34px] font-extrabold leading-none tracking-tight transition-all duration-500" style={isHovered ? { color: 'transparent', WebkitTextStroke: '1.8px ' + m.color, textShadow: '0 0 24px rgba(' + m.rgb + ',0.25)' } : { color: '#ffffff' }}>{m.title}</h3>
                    <span className="mt-4 text-[11px] font-semibold tracking-[0.06em] rounded-full px-4 py-1.5" style={isHovered ? { color: m.color, background: 'rgba(' + m.rgb + ',0.12)', border: '1px solid rgba(' + m.rgb + ',0.4)' } : { color: 'rgba(255,255,255,0.70)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)' }}>{m.subtitle}</span>
                  </div>
                  <div className="relative flex-1 flex items-center justify-center my-4">
                    <div className="absolute w-[180px] h-[180px] rounded-full pointer-events-none" style={{ background: isHovered ? 'radial-gradient(circle, rgba(' + m.rgb + ',0.16) 0%, transparent 68%)' : 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 68%)' }} />
                    <div className="relative transition-transform duration-500" style={{ transform: isHovered ? 'scale(1.28)' : isActive ? 'scale(1.18)' : 'scale(1)' }}>
                      <m.Art active={isActive} color={isHovered ? m.color : "#e8e8e8"} />
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <p className="text-[15px] leading-[1.75] text-white/80 max-w-[280px]">{m.desc}</p>
                    <a href={m.link} className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold hover:text-white transition-colors" style={{ color: isHovered ? m.color : "rgba(255,255,255,0.70)" }}>{m.cta} <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></a>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="flex items-center gap-2 mt-4 z-20">
            {modes.map((m, i) => (
              <button key={'dot-' + m.n} onClick={() => setActive(i)} aria-label={'Go to ' + m.title} className="h-2 rounded-full transition-all duration-300" style={{ width: i === active ? 26 : 8, background: i === active ? m.color : 'rgba(255,255,255,0.18)' }} />
            ))}
          </div>
          <div className="flex gap-6 mt-6 z-20 justify-center items-center">
            <button title="Previous Mode" aria-label="Previous mode" className="modes-nav-btn" onClick={() => go(-1)}>←</button>
            <button title="Next Mode" aria-label="Next mode" className="modes-nav-btn" onClick={() => go(1)}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= Partners ================= */
const PartnersSection = () => {
  const partners = [
    { name: 'Microsoft Partner', src: 'https://vibe.filesafe.space/1782833602434895260/attachments/5b1bbe70-c019-48c5-8cdf-3816142efd50.png' },
    { name: 'Crowdstrike', src: 'https://vibe.filesafe.space/1782833602434895260/attachments/23178347-be2b-4253-85cf-2df15aeb4018.png' },
    { name: 'AWS Partner Network', src: 'https://vibe.filesafe.space/1782833602434895260/attachments/75a43c98-b13f-4ef3-9d59-d7af57cdf862.png' },
    { name: 'Klever Compliance', src: 'https://vibe.filesafe.space/1782833602434895260/attachments/3ed41909-e982-4938-afa4-a544a8f35c63.png' },
    { name: 'Google Cloud Partner', src: 'https://vibe.filesafe.space/1782833602434895260/attachments/ac8ed2de-8833-4fd4-b622-e210f2ec0cad.png' },
    { name: 'Apollo', src: 'https://vibe.filesafe.space/1782833602434895260/attachments/f00497e3-3051-4946-bf27-f7aac6bd2d4a.png' },
    { name: 'Kaseya', src: 'https://vibe.filesafe.space/1782833602434895260/attachments/0cd737ff-5444-4427-a0a3-a34897787e5c.png' },
    { name: 'YouAttest', src: 'https://vibe.filesafe.space/1782833602434895260/attachments/f00ffc54-2da2-4aea-bef1-0d27ee5c4455.png' },
    { name: 'Primary Logo', src: 'https://cdn.prod.website-files.com/6856e1e5780dec13ef3b7493/68f08e79927c526114395142_Primary%20Logo%20-%20Horizontal%20white_00.webp', srcSet: 'https://cdn.prod.website-files.com/6856e1e5780dec13ef3b7493/68f08e79927c526114395142_Primary%20Logo%20-%20Horizontal%20white_00-p-500.png 500w, https://cdn.prod.website-files.com/6856e1e5780dec13ef3b7493/68f08e79927c526114395142_Primary%20Logo%20-%20Horizontal%20white_00.webp 1318w', sizes: '140px', isWhite: true },
    { name: 'MyPlateMaterials', src: 'https://www.myplatematerials.com/cdn/shop/files/happetite-main-logo.png?v=1779783876', srcSet: 'https://www.myplatematerials.com/cdn/shop/files/happetite-main-logo_small.png?v=1779783876 1x, https://www.myplatematerials.com/cdn/shop/files/happetite-main-logo.png?v=1779783876 2x' },
    { name: 'LED ITALY', src: 'https://leditaly.com/wp-content/uploads/2022/03/LedItaly_restyling_DEF-6-1.png.webp', srcSet: 'https://leditaly.com/wp-content/uploads/yootheme/cache/67/LedItaly_restyling_DEF-6-1-67b2cf1c.webp 200w', sizes: '(min-width: 200px) 200px', isWhite: true },
    { name: 'The Elephant and The Rider', text: 'The Elephant and The Rider' },
  ];
  const LogoItem = () => (
    <>
      {partners.map((p, i) => {
        const text = (p as any).text as string | undefined;
        return (
          <div key={p.name + '-' + i} className="shrink-0 w-32 sm:w-56 h-16 sm:h-24 flex items-center justify-center transition-all duration-500 group-hover/marquee:grayscale group-hover/marquee:opacity-30 hover:grayscale-0! hover:opacity-100! hover:scale-105">
            {text ? <span className="text-center text-white font-['Syne'] font-semibold leading-tight text-[15px] sm:text-[20px] tracking-tight px-1">{text}</span> : (
              <img src={(p as any).src} srcSet={(p as any).srcSet} sizes={(p as any).sizes} alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} className="w-full h-full object-contain opacity-100 transition-transform duration-300" loading="lazy" />
            )}
          </div>
        );
      })}
    </>
  );
  return (
    <section className="py-16 relative overflow-hidden bg-transparent border-y border-white/5">
      <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'linear-gradient(transparent, rgba(7,15,26,0.85))' }} />
      <div className="container mx-auto px-3 sm:px-4 relative z-10 mb-8 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 sm:px-6 py-1.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 tracking-widest uppercase backdrop-blur-sm bg-white/5">Key Clients</div>
          <h2 className="font-['Syne'] text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[1.05]">Trusted by industry leaders<br className="hidden md:block" /><span className="text-white/60"> to deliver excellence.</span></h2>
        </div>
      </div>
      <div className="relative flex overflow-hidden group/marquee py-4 sm:py-8">
        <div className="flex w-max animate-marquee-slow space-x-8 sm:space-x-16 px-4 sm:px-8 items-center shrink-0 group-hover/marquee:[animation-play-state:paused]"><LogoItem /><LogoItem /><LogoItem /></div>
        <div className="flex w-max animate-marquee-slow space-x-8 sm:space-x-16 px-4 sm:px-8 items-center shrink-0 group-hover/marquee:[animation-play-state:paused]" aria-hidden="true"><LogoItem /><LogoItem /><LogoItem /></div>
        <div className="absolute inset-y-0 left-0 w-16 sm:w-40 pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(to right, #070f1a, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-40 pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(to left, #070f1a, transparent)' }} />
      </div>
    </section>
  );
};

/* ================= About ================= */
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 60, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.about-card', { scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }, y: 80, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const values = [
    { icon: Rocket, title: 'Innovation', desc: 'Pushing boundaries with cutting-edge technologies' },
    { icon: Users, title: 'Collaboration', desc: 'Working closely with clients at every step' },
    { icon: Shield, title: 'Quality', desc: 'Delivering excellence in every pixel' },
    { icon: Zap, title: 'Speed', desc: 'Fast turnaround without compromising quality' },
  ];
  return (
    <section id="about" ref={sectionRef} className="relative py-32 bg-[#0a1628] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00d4aa]/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="about-content">
            <div className="inline-block px-4 sm:px-6 py-1.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 tracking-widest uppercase backdrop-blur-sm bg-white/5">About Us</div>
            <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-white mb-6">We're a Team of <span className="gradient-text">Digital Craftsmen</span></h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">Founded in 2016, THE JIMMY LAB is a digital agency specializing in web development, web design, interactive experiences, animation, and custom digital solutions.</p>
            <p className="text-white/70 text-base leading-relaxed mb-4">We help businesses, startups, entrepreneurs, and brands worldwide turn ideas into modern digital experiences that combine creative design, advanced technology, performance, and usability.</p>
            <p className="text-white/70 text-base leading-relaxed mb-4">Our expertise spans custom website development, full-stack web applications, interactive websites, 2D and 3D animation, product configurators, SaaS platforms, and AI-powered web solutions. Every project is designed around the client's goals, audience, and business requirements.</p>
            <p className="text-white/70 text-base leading-relaxed mb-8">With a focus on creative innovation and technical excellence, we create digital products that look exceptional, work seamlessly, and provide a strong foundation for business growth.</p>
            <a href="#/team" className="group flex items-center gap-4 self-start -ml-3 pl-3 pr-5 py-3 rounded-2xl border border-transparent transition-all duration-300 hover:border-[#ff6b35]/40 hover:bg-[#ff6b35]/[0.06]">
              <div className="flex -space-x-3">{[1, 2, 3, 4].map((i) => (<div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a574] to-[#b88a5e] border-2 border-[#0a1628] flex items-center justify-center text-[#0a1628] font-bold text-sm">{String.fromCharCode(64 + i)}</div>))}</div>
              <div>
                <div className="text-white font-semibold flex items-center gap-2 group-hover:text-[#ff6b35] transition-colors">Meet our team <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></div>
                <div className="text-white/60 text-sm">creative professionals — view the operators page</div>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, i) => (
              <div key={i} className="about-card bg-gradient-to-br from-[#d4a574] to-[#b88a5e] cardboard-cutout shadow-layer-2 rounded-2xl p-6 hover-lift cursor-pointer">
                <div className="w-12 h-12 bg-[#0a1628]/10 rounded-xl flex items-center justify-center mb-4"><value.icon className="w-6 h-6 text-[#0a1628]" /></div>
                <h3 className="font-['Syne'] text-xl font-bold text-[#0a1628] mb-2">{value.title}</h3>
                <p className="text-[#0a1628]/70 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= Tech Stack Bands ================= */
const CollaborationBandsSection = () => {
  const stacks = [
    { name: 'React', type: 'Frontend' }, { name: 'Next.js', type: 'Framework' }, { name: 'TypeScript', type: 'Language' },
    { name: 'Tailwind CSS', type: 'Styling' }, { name: 'Framer Motion', type: 'Animation' }, { name: 'GSAP', type: 'Animation' },
    { name: 'Node.js', type: 'Backend' }, { name: 'Express', type: 'Backend' }, { name: 'Python', type: 'Language' },
    { name: 'PostgreSQL', type: 'Database' }, { name: 'MongoDB', type: 'Database' }, { name: 'Supabase', type: 'BaaS' },
    { name: 'Firebase', type: 'BaaS' }, { name: 'GraphQL', type: 'API' }, { name: 'REST API', type: 'Architecture' },
    { name: 'WordPress', type: 'CMS' }, { name: 'Shopify', type: 'E-Commerce' }, { name: 'Sanity', type: 'CMS' },
    { name: 'Figma', type: 'Design' }, { name: 'Docker', type: 'DevOps' }, { name: 'AWS', type: 'Cloud' }, { name: 'Vercel', type: 'Deployment' },
    { name: 'Azure', type: 'Cloud' }, { name: 'ASP.NET', type: 'Backend' }, { name: '.NET MVC', type: 'Backend' }, { name: '.NET Core', type: 'Backend' },
    { name: 'Three.js', type: '3D Web' }, { name: 'WebGL', type: '3D Web' }, { name: 'Blender', type: '3D / Motion' },
    { name: 'After Effects', type: 'Motion' }, { name: 'Unity', type: '3D / Games' }, { name: 'MERN Stack', type: 'Full-Stack' },
    { name: 'Webflow', type: 'No-Code' }, { name: 'n8n', type: 'AI Automation' }, { name: 'Zapier', type: 'AI Automation' },
    { name: 'OpenAI', type: 'AI' }, { name: 'ChatGPT', type: 'AI' }, { name: 'LangChain', type: 'AI' }, { name: 'Hugging Face', type: 'AI' },
    { name: 'TensorFlow', type: 'AI' }, { name: 'PyTorch', type: 'AI' },
  ];
  const CollaborationTrack = ({ hidden = false }: { hidden?: boolean }) => (
    <div className="animate-collab-marquee flex shrink-0 items-center justify-around gap-10 min-w-full group-hover/collab:[animation-play-state:paused]" aria-hidden={hidden}>
      {[...stacks, ...stacks].map((stack, index) => (
        <div key={stack.name + '-' + index} className="flex items-center gap-10">
          <div className="flex items-center gap-3 group/client cursor-pointer">
            <span className="font-['Syne'] font-bold text-xl md:text-[26px] text-white/50 group-hover/client:text-white transition-all duration-500 transform group-hover/client:scale-[1.05] whitespace-nowrap tracking-tight">{stack.name}</span>
            <span className="text-[10px] font-mono text-white/25 uppercase tracking-[0.18em] hidden sm:inline group-hover/client:text-[#ff6b35]/80 transition-colors duration-500 px-2.5 py-1 rounded-full border border-white/10 group-hover/client:border-[#ff6b35]/30 bg-white/5 group-hover/client:bg-[#ff6b35]/10">{stack.type}</span>
          </div>
          <span className="text-[#ff6b35]/40 font-mono text-[10px] scale-90" aria-hidden="true">✦</span>
        </div>
      ))}
    </div>
  );
  const bandText = 'THE JIMMY LAB • PUSHING THE LIMITS OF INTERACTION • DIRECT 1-ON-1 COLLABORATION • ';
  return (
    <>
      <section className="bg-[#070f1a] border-y border-white/[0.04] py-12 overflow-hidden relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-4 mb-8" aria-hidden="true">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.24em] text-white/60 text-center font-semibold">Our Tech Stack • Technologies We Master</p>
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 text-center mt-2 hidden sm:block">Trusted by modern frameworks & cloud platforms</p>
        </div>
        <div className="w-full flex gap-12 overflow-hidden relative group/collab">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#070f1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#070f1a] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-12 group-hover/collab:[animation-play-state:paused]"><CollaborationTrack /><CollaborationTrack hidden /></div>
        </div>
      </section>
      <section className="py-8 sm:py-10 md:py-16 overflow-hidden relative z-10 bg-[#070f1a] select-none cursor-pointer border-y border-white/[0.04] isolate contain-paint">
        <div className="w-full overflow-hidden md:rotate-[-1.5deg] md:scale-[1.02] md:origin-center">
          <div className="flex w-full overflow-hidden relative max-h-[4.5rem] sm:max-h-none group/band">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#070f1a] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#070f1a] to-transparent z-10 pointer-events-none" />
            <div className="animate-band-marquee flex shrink-0 items-center justify-around gap-8 min-w-full font-['Syne'] font-extrabold uppercase text-[clamp(1.5rem,5vw,5.5rem)] tracking-tighter leading-none py-2 text-white/85 group-hover/band:[animation-play-state:paused]"><span>{bandText}</span></div>
            <div className="animate-band-marquee flex shrink-0 items-center justify-around gap-8 min-w-full font-['Syne'] font-extrabold uppercase text-[clamp(1.5rem,5vw,5.5rem)] tracking-tighter leading-none py-2 text-white/85 group-hover/band:[animation-play-state:paused]" aria-hidden="true"><span>{bandText}</span></div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ================= Services ================= */
const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-title', { scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }, y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.service-card', { scrollTrigger: { trigger: '.services-grid', start: 'top 80%' }, y: 100, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const services = serviceData.map((s) => ({ icon: s.icon, title: s.title, desc: s.desc, color: s.color, link: '#/services/' + s.slug }));
  return (
    <section id="services" ref={sectionRef} className="relative py-32 bg-[#070f1a] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#d4a574]/5 cardboard-cutout rounded-full rotate-12" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#ff6b35]/5 cardboard-cutout rounded-full -rotate-6" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="service-title text-center mb-16">
          <div className="inline-block px-4 sm:px-6 py-1.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 tracking-widest uppercase backdrop-blur-sm bg-white/5">Our Services</div>
          <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-white mb-4">Solutions for Every <span className="gradient-text">Digital Need</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">From concept to launch, we provide comprehensive web development services that drive results.</p>
        </div>
        <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => {
            const hot = hoveredCard === i;
            return (
              <a
                key={i}
                href={service.link ?? '#services'}
                className="service-card relative group block"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => { if (service.link) window.location.hash = service.link.replace(/^#/, ''); }}
              >
                <div
                  className={cn(
                    'relative flex h-full flex-col overflow-hidden rounded-[6px] px-5 py-6 transition-all duration-500 sm:px-6 sm:py-7',
                    hot ? '-translate-y-1' : 'translate-y-0'
                  )}
                  style={{
                    background: hot ? service.color + '0d' : 'rgba(7, 11, 14, 0.72)',
                    border: '1px solid ' + (hot ? service.color + '66' : 'rgba(255,255,255,0.09)'),
                    boxShadow: hot ? '0 18px 40px -20px ' + service.color + '55' : 'none',
                  }}
                >
                  <CornerTicks color={hot ? service.color : 'rgba(255,255,255,0.28)'} />

                  <div className="flex flex-1 gap-3.5 sm:gap-4">
                    {/* circular hairline icon badge */}
                    <span
                      className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-500"
                      style={{
                        border: '1px solid ' + (hot ? service.color + 'aa' : 'rgba(255,255,255,0.16)'),
                        background: hot ? service.color + '14' : 'transparent',
                      }}
                    >
                      <service.icon
                        className="h-5 w-5 transition-transform duration-500 group-hover:scale-110"
                        style={{ color: hot ? service.color : 'rgba(255,255,255,0.92)' }}
                      />
                    </span>

                    <span className="flex min-w-0 flex-1 flex-col">
                      <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-white leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-[13.5px] leading-[1.6] text-white/50">
                        {service.desc}
                      </p>
                      <span
                        className="mt-5 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] transition-colors duration-300"
                        style={{ color: hot ? service.color : 'rgba(255,255,255,0.38)' }}
                      >
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ================= Portfolio ================= */
const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-card', { scrollTrigger: { trigger: '.portfolio-grid', start: 'top 80%' }, y: 80, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <section id="portfolio" ref={sectionRef} className="relative py-32 bg-[#0a1628] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 sm:px-6 py-1.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 tracking-widest uppercase backdrop-blur-sm bg-white/5">Our Work</div>
          <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-white mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Explore our latest work and see how we bring ideas to life.</p>
        </div>
        <div className="portfolio-grid grid md:grid-cols-2 gap-8">
          {[
            { title: 'E-Commerce Platform', cat: 'Web Development', color: '#ff6b35', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&q=80' },
            { title: 'SaaS Dashboard', cat: 'UI/UX Design', color: '#00d4aa', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80' },
            { title: 'Mobile Banking App', cat: 'Mobile Development', color: '#3b82f6', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&q=80' },
            { title: 'Restaurant Website', cat: 'Web Design', color: '#ffd700', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80' },
          ].map((p) => (
            <div key={p.title} className="portfolio-card group relative bg-[#0f1c2e] rounded-2xl overflow-hidden cursor-pointer shadow-[0_12px_40px_rgba(0,0,0,0.45)] border border-white/5 flex flex-col">
              <div className="relative h-[260px] overflow-hidden shrink-0">
                <img alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={p.img} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e] via-[#0f1c2e]/10 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-1 bg-[#0f1c2e]">
                <div className="inline-flex self-start px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-3 border" style={{ backgroundColor: p.color + '15', color: p.color, borderColor: p.color + '20' }}>{p.cat}</div>
                <h3 className="font-['Syne'] text-[22px] font-bold text-white leading-tight">{p.title}</h3>
                <div className="flex items-center gap-1.5 text-white/50 text-[13px] mt-3 group-hover:text-white/80 transition-colors"><span>View Project</span><ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></div>
              </div>
              <div className="h-[2px] w-full" style={{ backgroundColor: p.color, opacity: 0.6 }}></div>
            </div>
          ))}
        </div>
        <div className="w-full clear-both text-center mt-12 relative z-20">
          <button type="button" className="btn-primary inline-block px-10 py-4 text-sm font-bold tracking-wider cursor-pointer">VIEW ALL PROJECTS</button>
        </div>
      </div>
    </section>
  );
};

/* ================= Our Process ================= */
const OurProcessSection = () => {
  const [active, setActive] = useState(0);
  const phases = [
    { num: '01', label: 'PHASE ONE', name: 'Architect', title: 'Architect.', desc: 'Every project begins with our architecture phase. We take time to understand your current system, challenges, goals, and requirements, then create a detailed blueprint that defines the scope, timeline, priorities, and path forward.' },
    { num: '02', label: 'PHASE TWO', name: 'Build', title: 'Build.', desc: 'We bring the blueprint to life — writing clean, scalable code, crafting refined interfaces, and integrating every system. Weekly demos, staging links, and transparent sprints mean zero surprises, just steady progress.' },
    { num: '03', label: 'PHASE THREE', name: 'Accelerate', title: 'Accelerate.', desc: 'Launch is day one. We stress-test, harden security, optimize Core Web Vitals to 95+, and ship growth loops so your product accelerates from the first click and scales without friction.' },
  ];
  const current = phases[active];
  return (
    <section id="process" className="relative py-16 sm:py-20 lg:py-24 bg-[#070f1a] overflow-hidden" aria-labelledby="approach-heading">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#ff6b35]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[400px] bg-[#00d4aa]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 mb-10 lg:mb-14">
          <div className="inline-block px-4 sm:px-6 py-1.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 tracking-widest uppercase backdrop-blur-sm bg-white/5">Our Process</div>
          <h2 id="approach-heading" className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.05]">Architect<span className="text-white/30">.</span> Build<span className="text-white/30">.</span> <span className="gradient-text">Accelerate.</span></h2>
          <p className="mt-4 max-w-2xl text-white/55 text-lg leading-relaxed">A proven three-phase system that takes you from idea to launch — without chaos, delays, or guesswork.</p>
        </div>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-8 xl:gap-10">
          <div className="flex flex-col gap-3" role="tablist" aria-label="Approach phases">
            {phases.map((phase, idx) => {
              const isActive = active === idx;
              return (
                <motion.button key={phase.num} type="button" role="tab" layout id={'approach-tab-' + phase.num} aria-selected={isActive} aria-controls={'approach-panel-' + phase.num} tabIndex={isActive ? 0 : -1} onClick={() => setActive(idx)} whileHover={{ scale: isActive ? 1 : 1.015 }} whileTap={{ scale: 0.98 }} transition={{ layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }} className={cn('flex w-full cursor-pointer items-center gap-4 rounded-2xl border px-5 py-5 text-left sm:px-6 sm:py-6 will-change-transform', isActive ? 'border-transparent bg-white shadow-[0_10px_30px_rgba(255,255,255,0.15)]' : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.25)]')}>
                  <span className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold transition-colors', isActive ? 'bg-[#05070a] text-white' : 'bg-white/10 text-white border border-white/10')} aria-hidden="true">{phase.num}</span>
                  <span className="min-w-0">
                    <span className={cn('block text-[10px] font-bold uppercase tracking-[0.16em]', isActive ? 'text-[#05070a]/60' : 'text-white/40')}>{phase.label}</span>
                    <span className={cn('mt-0.5 block text-xl font-extrabold tracking-[-0.02em] sm:text-[1.35rem]', isActive ? 'text-[#05070a]' : 'text-white')}>{phase.name}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>
          <div className="relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[#12233b] to-[#0f1c2e] shadow-[12px_12px_0_rgba(0,0,0,0.3)] px-6 py-8 sm:min-h-[360px] sm:px-8 sm:py-10 lg:min-h-[400px] lg:px-10 lg:py-11 border border-white/5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} role="tabpanel" id={'approach-panel-' + current.num} initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="flex flex-1 flex-col will-change-transform">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">{current.label} · {current.num}</p>
                <h3 className="font-['Syne'] mt-3 font-extrabold leading-[1.05] tracking-[-0.03em] text-white [font-size:clamp(2.5rem,6vw,4rem)]">{current.title}</h3>
                <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-white/70">{current.desc}</p>
                <div className="mt-auto border-t border-white/10 pt-6 sm:pt-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="m-0 text-sm text-white/40">{active + 1} of {phases.length} · {current.name}</p>
                    <button type="button" onClick={() => setActive((active + 1) % phases.length)} className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm cursor-pointer" aria-label="Next phase">Next phase <ArrowRight className="w-4 h-4" /></button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= Testimonials ================= */
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const testimonials = [
    { name: 'Sarah Chen', role: 'CTO at TechVenture Inc.', initials: 'SC', gradient: 'from-blue-500 to-indigo-500', quote: 'THE JIMMY LAB transformed our entire digital infrastructure. Their team delivered a platform that handles 10x our previous traffic with half the latency. Absolutely exceptional work — they think like partners, not vendors.' },
    { name: 'Marcus Rivera', role: 'Founder & CEO, GrowthStack', initials: 'MR', gradient: 'from-emerald-500 to-teal-500', quote: 'Working with THE JIMMY LAB was a game-changer for our e-commerce business. They rebuilt our entire storefront and we saw a 60% increase in conversions within the first month. The attention to detail is unmatched.' },
    { name: 'Emily Watson', role: 'Product Director, HealthSync', initials: 'EW', gradient: 'from-rose-500 to-pink-500', quote: 'From the initial wireframes to the final deployment, every step was handled with incredible professionalism. The telemedicine platform they built serves over 100K patients daily without a single hiccup.' },
    { name: 'David Kim', role: 'CTO, FinanceHub', initials: 'DK', gradient: 'from-orange-500 to-amber-500', quote: 'The fintech dashboard THE JIMMY LAB built for us is blazing fast and beautiful. They understood complex trading workflows better than our own team. A true extension of our product org.' },
    { name: 'Priya Patel', role: 'Head of Engineering, EduTech', initials: 'PP', gradient: 'from-violet-500 to-purple-500', quote: 'We needed to scale our learning platform to millions of students overnight. THE JIMMY LAB delivered a resilient architecture that has not gone down once in 18 months. Incredible reliability.' },
    { name: 'James Wilson', role: 'CEO, RetailFlow', initials: 'JW', gradient: 'from-cyan-500 to-blue-500', quote: 'Our retail analytics suite is now the envy of the industry. The 2.5D cardboard interactions they designed made complex data feel tactile and joyful. Customers love it.' },
  ];
  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#070f1a] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.35] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#ff6b35]/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-[#00d4aa]/[0.03] blur-[100px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block px-4 sm:px-6 py-1.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 tracking-widest uppercase backdrop-blur-sm bg-white/5">Testimonials</div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-white mb-5">Good Work <span className="gradient-text">Speaks for Itself.</span></h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed">Don't just take our word for it — hear from the founders, CTOs, and product leaders who've trusted us with their vision.</p>
        </div>
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative p-8 sm:p-12 rounded-3xl glass overflow-hidden">
            <Quote className="w-10 h-10 text-white/10 absolute top-6 left-8 pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: 'easeOut' }} className="text-center">
                <div className="flex justify-center mb-5">{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />))}</div>
                <p className="text-lg sm:text-xl text-white leading-relaxed mb-8 max-w-3xl mx-auto">"{testimonials[active].quote}"</p>
                <div className="flex items-center justify-center gap-4">
                  <div className={cn('w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-sm shadow-lg', testimonials[active].gradient)}>{testimonials[active].initials}</div>
                  <div className="text-left"><div className="font-semibold text-white">{testimonials[active].name}</div><div className="text-sm text-white/60">{testimonials[active].role}</div></div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center gap-3 mt-8">
              <button onClick={prev} className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white transition-all cursor-pointer" aria-label="Previous testimonial"><ChevronLeft className="w-5 h-5" /></button>
              <div className="flex gap-2 items-center">{testimonials.map((_, i) => (<button key={i} onClick={() => setActive(i)} className={cn('h-1.5 rounded-full transition-all duration-300 cursor-pointer', i === active ? 'w-8 bg-[#ff6b35]' : 'w-1.5 bg-white/20 hover:bg-white/40')} aria-label={'Go to testimonial ' + (i + 1)} />))}</div>
              <button onClick={next} className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white transition-all cursor-pointer" aria-label="Next testimonial"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, idx) => (
            <button key={t.name} onClick={() => setActive(idx)} className={cn('text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer group', active === idx ? 'bg-white/[0.06] border-[#ff6b35]/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' : 'glass hover:bg-white/[0.05] hover:border-white/10')}>
              <div className="flex items-center gap-3 mb-4"><div className={cn('w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-xs shrink-0', t.gradient)}>{t.initials}</div><div className="min-w-0"><div className="text-sm font-semibold text-white truncate">{t.name}</div><div className="text-xs text-white/50 truncate">{t.role}</div></div></div>
              <p className="text-sm text-white/60 leading-relaxed line-clamp-4 group-hover:text-white/80 transition-colors">"{t.quote}"</p>
              <div className="flex gap-0.5 mt-3">{[...Array(5)].map((_, i) => (<Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />))}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= FAQ ================= */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { question: 'What technologies do you use?', answer: 'We specialize in modern web technologies including React, Next.js, TypeScript, Tailwind CSS, Node.js, and various CMS platforms. Our stack is always evolving to incorporate the best tools for each project.' },
    { question: 'How long does a typical project take?', answer: 'Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during our initial consultation.' },
    { question: 'Do you offer ongoing maintenance?', answer: 'Yes! We offer various maintenance packages including security updates, content updates, performance monitoring, and technical support. We believe in building long-term relationships with our clients.' },
    { question: 'What is your pricing structure?', answer: 'We offer both project-based pricing and retainer models. Every project is unique, so we provide custom quotes based on your specific requirements, timeline, and scope of work.' },
    { question: 'Can you help with existing websites?', answer: 'Absolutely! We offer website redesigns, performance optimization, feature additions, and migration services for existing websites. We can work with most modern web technologies.' },
  ];
  return (
    <section id="faq" className="relative py-32 bg-[#070f1a] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 sm:px-6 py-1.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 tracking-widest uppercase backdrop-blur-sm bg-white/5">FAQ</div>
          <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-white mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-[#111d30] shadow-[8px_8px_0_rgba(0,0,0,0.25)] overflow-hidden">
              <button type="button" onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-white/[0.02]">
                <span className="font-['Syne'] text-lg font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown className={cn('w-6 h-6 text-[#ff6b35] transition-transform duration-300 shrink-0', openIndex === i && 'rotate-180')} />
              </button>
              <div className={cn('grid transition-[grid-template-rows,opacity] duration-300 ease-in-out', openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                <div className="overflow-hidden"><p className="px-6 pb-6 text-white/75 leading-relaxed border-t border-white/5 pt-4">{faq.answer}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= Journal ================= */
const JournalSection = () => {
  const articles = [
    { id: 'scroll-animation-techniques', featured: true, category: 'Motion', date: 'May 28, 2026', read: '4 min read', title: 'Modern Scroll-Linked Animation Techniques', excerpt: 'A deep dive into building performant, responsive scroll animations with the vanilla Motion library in Astro.', image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&h=500&fit=crop&q=80' },
    { id: 'astro-for-portfolios', featured: false, category: 'Engineering', date: 'May 20, 2026', read: '4 min read', title: 'Why Astro is the Ultimate Framework for Portfolios', excerpt: "How Astro's island architecture and zero-JS output by default make it the perfect tool for fast creative portfolios.", image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80' },
    { id: 'motion-design-principles', featured: false, category: 'Motion', date: 'May 15, 2026', read: '4 min read', title: 'Core Principles of Functional Motion Design', excerpt: 'Why animation in web design is a functional tool, not just an aesthetic embellishment, and how to apply it.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&q=80' },
  ];
  return (
    <section id="journal" className="relative py-24 md:py-32 lg:py-40 bg-[#0a1628] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[8%] w-64 h-64 bg-[#d4a574]/5 cardboard-cutout rounded-full rotate-12" />
        <div className="absolute bottom-20 right-[10%] w-48 h-48 bg-[#ff6b35]/5 cardboard-cutout rounded-full -rotate-6" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col max-w-xl">
            <div className="inline-block px-4 sm:px-6 py-1.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 tracking-widest uppercase backdrop-blur-sm bg-white/5">Journal</div>
            <h2 className="font-['Syne'] text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.05] tracking-tight text-white mb-4">Perspectives on design &amp; <span className="gradient-text">engineering.</span></h2>
            <p className="text-[15px] leading-relaxed text-white/60 max-w-[520px]">Stay updated with our research, notes, and technical findings on frontend performance and interactive motion.</p>
          </div>
          <a href="#services" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/70 hover:text-[#ff6b35] transition-colors duration-300 shrink-0 group">Read All Articles<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></a>
        </div>
        <div className="md:hidden mb-2">
          <div className="flex items-center justify-between gap-4 mb-6"><span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">Swipe to explore</span><div className="flex items-center gap-1.5">{articles.map((_, i) => (<span key={i} className={cn('w-2 h-2 rounded-full transition-all duration-300', i === 0 ? 'bg-[#ff6b35] w-5' : 'bg-white/15')} />))}</div></div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {articles.map((post) => (
              <article key={'m-' + post.id} className="snap-start shrink-0 w-[calc(100vw-2.5rem)] max-w-sm group flex flex-col justify-between bg-[#070f1a] cardboard-cutout shadow-layer-2 rounded-2xl p-5 border border-white/10">
                <div>
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-5 bg-[#0a1628] border border-white/[0.06]">{post.featured && (<span className="absolute top-3 left-3 z-10 text-[9px] font-bold tracking-[0.18em] uppercase bg-[#ff6b35] text-white px-2.5 py-1 rounded-full shadow-md border border-white/10">Featured</span>)}<img src={post.image} alt={post.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" loading="lazy" /></div>
                  <div className="flex items-center gap-2 mb-4 text-[11px] font-mono"><span className="text-[9px] uppercase tracking-wider text-[#ff6b35] border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-2 py-0.5 rounded-md">{post.category}</span><span className="text-white/20">•</span><span className="text-white/40">{post.date}</span><span className="text-white/20">•</span><span className="text-white/40">{post.read}</span></div>
                  <h3 className="font-['Syne'] text-[18px] font-bold mb-3 leading-snug text-white group-hover:text-[#ff6b35] transition-colors"><a href={'#' + post.id}>{post.title}</a></h3>
                  <p className="text-[13px] text-white/60 leading-relaxed mb-6">{post.excerpt}</p>
                </div>
                <div className="pt-4 border-t border-white/[0.06]"><a href="#services" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ff6b35]">Read Post <span aria-hidden="true">→</span></a></div>
              </article>
            ))}
          </div>
        </div>
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {articles.map((post) => (
            <article key={post.id} className="group flex flex-col justify-between bg-[#070f1a] cardboard-cutout shadow-layer-2 hover:shadow-[12px_12px_0_rgba(0,0,0,0.35),24px_24px_0_rgba(0,0,0,0.22),30px_30px_35px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 rounded-2xl p-5 border border-white/10 hover:border-[#ff6b35]/30 transition-all duration-500">
              <div>
                <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-5 bg-[#0a1628] border border-white/[0.06]"><div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b35]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />{post.featured && (<span className="absolute top-3 left-3 z-20 text-[9px] font-bold tracking-[0.18em] uppercase bg-[#ff6b35] text-white px-2.5 py-1 rounded-full shadow-lg border border-white/10">Featured</span>)}<img src={post.image} alt={post.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" loading="lazy" /></div>
                <div className="flex items-center gap-2.5 mb-4 text-[11px] font-mono"><span className="text-[9px] uppercase tracking-wider text-[#ff6b35] border border-[#ff6b35]/25 bg-[#ff6b35]/10 px-2 py-0.5 rounded-md group-hover:bg-[#ff6b35] group-hover:text-white transition-colors duration-300">{post.category}</span><span className="text-white/20">•</span><span className="text-white/40">{post.date}</span><span className="text-white/20">•</span><span className="text-white/40">{post.read}</span></div>
                <h3 className="font-['Syne'] text-[20px] font-bold mb-3 leading-snug text-white group-hover:text-[#ff6b35] transition-colors duration-300"><a href={'#' + post.id} className="focus-visible:outline-none">{post.title}</a></h3>
                <p className="text-[13px] text-white/60 leading-relaxed mb-6">{post.excerpt}</p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]"><a href="#services" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ff6b35] group-hover:gap-3 transition-all">Read Post <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= Connect ================= */
const ConnectSection = () => {
  const [copied, setCopied] = useState(false);
  const [brief, setBrief] = useState('');
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [inquiryCopied, setInquiryCopied] = useState(false);
  const briefRef = useRef<HTMLTextAreaElement>(null);
  const email = 'thejimmylab@gmail.com';
  // Direct-send backend: Formspree form for thejimmylab@gmail.com.
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdeekyqk';
  const copyEmail = () => { navigator.clipboard?.writeText(email); setCopied(true); window.setTimeout(() => setCopied(false), 2000); };

  // Build the inquiry text once, so submit + copy-to-clipboard stay identical.
  const inquiryText = [
    'Name: ' + name.trim(),
    'Email: ' + senderEmail.trim(),
    'Project type: ' + (projectType || 'Not specified'),
    'Estimated budget: ' + (budget || 'Not specified'),
    '',
    brief.trim(),
  ].join('\n');

  const submitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError('');
    setSending(true);
    try {
      const formData = new FormData();
      formData.append('name', name.trim());
      formData.append('email', senderEmail.trim());
      formData.append('_replyto', senderEmail.trim());
      formData.append('_subject', 'Project inquiry' + (projectType ? ': ' + projectType : '') + ' — ' + name.trim());
      formData.append('projectType', projectType || 'Not specified');
      formData.append('budget', budget || 'Not specified');
      formData.append('message', inquiryText);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Form service rejected the submission');
      setSent(true);
    } catch {
      setSendError('Could not send right now. Please try again, or copy the inquiry below and email it to ' + email + '.');
    } finally {
      setSending(false);
    }
  };

  const copyInquiry = async () => {
    try { await navigator.clipboard?.writeText(inquiryText); } catch { /* clipboard may be blocked */ }
    setInquiryCopied(true);
    window.setTimeout(() => setInquiryCopied(false), 2000);
  };

  // pick up whatever was typed in the hero prompt
  useEffect(() => {
    const apply = (text: string) => {
      if (!text) return;
      setBrief(text);
      window.setTimeout(() => {
        briefRef.current?.focus({ preventScroll: true });
        briefRef.current?.setSelectionRange(text.length, text.length);
      }, 700);
    };
    try {
      const stored = window.sessionStorage.getItem(BRIEF_KEY);
      if (stored) { apply(stored); window.sessionStorage.removeItem(BRIEF_KEY); }
    } catch { /* storage may be blocked */ }
    const onBrief = (e: Event) => apply((e as CustomEvent<string>).detail);
    window.addEventListener('brief', onBrief);
    return () => window.removeEventListener('brief', onBrief);
  }, []);
  return (
    <section id="connect" className="relative bg-[#0a0a0a] py-24 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] gap-16 lg:gap-20 items-start">
          <div className="flex flex-col">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#ff6b35] mb-5">Connect</p>
            <h2 className="font-['Syne'] font-bold text-white leading-[0.98] tracking-tight text-[clamp(3rem,5.5vw,4.75rem)]">Let's start<br />something<br /><span className="gradient-text block">remarkable.</span></h2>
            <p className="text-white/45 text-[15px] leading-[1.7] mt-7 max-w-[400px]">Have an idea or a project that needs a motion-first digital experience? Send us an email or use the form.</p>
            <div className="mt-7 self-start inline-flex items-center gap-2.5 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/[0.07] px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse shrink-0" />
              <span className="font-mono text-[12px] text-[#ff6b35] tracking-tight whitespace-nowrap">Accepting projects for Q3 2025</span>
            </div>
            <div className="mt-10">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-white/30 mb-3.5">Send an email</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                <a href={'mailto:' + email} className="font-['Syne'] text-[22px] md:text-[26px] font-semibold text-white hover:text-[#ff6b35] transition-colors tracking-tight leading-none">{email}</a>
                <button onClick={copyEmail} className="inline-flex items-center gap-2 rounded-md border border-white/[0.12] bg-white/[0.06] px-3 py-1.5 font-mono text-[11px] text-white/70 hover:text-white hover:border-white/25 hover:bg-white/[0.1] transition-all shrink-0"><Copy className="w-3.5 h-3.5" />{copied ? 'Copied!' : 'Copy Email'}</button>
              </div>
            </div>
            <div className="mt-9">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-white/30 mb-4">Follow us</p>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                {['GitHub', 'LinkedIn', 'X / Twitter', 'Dribbble'].map((s) => (<a key={s} href="#" className="font-mono text-[13.5px] text-white/45 hover:text-[#ff6b35] transition-colors">{s}</a>))}
              </div>
            </div>
            <div className="w-full mt-12 p-6 rounded-2xl bg-white/5 border border-white/15 relative overflow-hidden group select-none">
              <div className="absolute right-6 top-6 flex items-center justify-center"><span className="absolute w-6 h-6 rounded-full bg-[#ff6b35]/20 animate-ping"></span><span className="relative w-2.5 h-2.5 rounded-full bg-[#ff6b35] shadow-[0_0_10px_rgba(255,107,53,0.6)]"></span></div>
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/40 block mb-2">Office Location</span>
              <h3 className="text-lg font-['Syne'] font-bold text-white mb-2">Islamabad, Pakistan</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">Working globally with modern asynchronous processes.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#0e0e0e] border border-white/[0.08] p-8 sm:p-10">
            <h3 className="font-['Syne'] text-[26px] font-bold text-white mb-8">Send a Project Inquiry</h3>
            <form className="space-y-6" onSubmit={submitInquiry}>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
                <div className="flex flex-col"><label className="text-[13.5px] font-semibold text-white mb-2.5">Your Name <span className="text-[#ff5a4e]">*</span></label><input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="w-full h-[48px] rounded-md bg-[#1a1a1a] border border-white/[0.08] px-4 text-[14px] text-white placeholder-white/25 focus:border-[#ff6b35]/60 focus:outline-none transition-colors" /></div>
                <div className="flex flex-col"><label className="text-[13.5px] font-semibold text-white mb-2.5">Your Email <span className="text-[#ff5a4e]">*</span></label><input type="email" required value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} placeholder="john@example.com" className="w-full h-[48px] rounded-md bg-[#1a1a1a] border border-white/[0.08] px-4 text-[14px] text-white placeholder-white/25 focus:border-[#ff6b35]/60 focus:outline-none transition-colors" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
                <div className="flex flex-col"><label className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 mb-2.5">Project Type</label><div className="relative"><select value={projectType} onChange={(e) => setProjectType(e.target.value)} aria-label="Project Type" style={{ colorScheme: 'dark' }} className="w-full h-[48px] rounded-md bg-[#1a1a1a] border border-white/25 pl-4 pr-10 text-[14px] text-white focus:border-[#ff6b35] focus:outline-none transition-colors appearance-none cursor-pointer"><option value="" disabled>Select a project type</option><option>Animation & Creative Development</option><option>Web Design & UI/UX</option><option>Website Redesign</option><option>Graphic Design</option><option>Logo Design</option><option>Branding & Visual Identity</option><option>Frontend Development</option><option>Backend Development</option><option>Full-Stack Development</option><option>Web Application / SaaS Development</option><option>E-Commerce Development</option><option>3D & Interactive Experiences</option><option>Product Configurators</option><option>Mobile App Development</option><option>Integration & Automation</option><option>SEO & Website Optimization</option><option>Website / Application Upgrade</option><option>Legacy Technology / Stack Migration</option><option>Maintenance & Technical Support</option><option>Code Review & Technical Audit</option><option>1:1 Consultation / Strategy</option><option>1:1 Learning / Training</option><option>Not Sure — Help Me Choose</option><option>Other</option></select><ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-white" /></div></div>
                <div className="flex flex-col"><label className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 mb-2.5">Estimated Budget</label><div className="relative"><select value={budget} onChange={(e) => setBudget(e.target.value)} aria-label="Estimated Budget" style={{ colorScheme: 'dark' }} className="w-full h-[48px] rounded-md bg-[#1a1a1a] border border-white/25 pl-4 pr-10 text-[14px] text-white focus:border-[#ff6b35] focus:outline-none transition-colors appearance-none cursor-pointer"><option value="" disabled>Select a budget range</option><option>Under $5k</option><option>$5k – $10k</option><option>$10k – $25k</option><option>$25k – $50k</option><option>$50k – $100k</option><option>$100k+</option></select><ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-white" /></div></div>
              </div>
              <div className="flex flex-col"><label className="text-[13.5px] font-semibold text-white mb-2.5">Tell us about the project <span className="text-[#ff5a4e]">*</span></label><textarea ref={briefRef} value={brief} onChange={(e) => setBrief(e.target.value)} rows={5} required placeholder="Project overview, goals, timelines, etc..." className="w-full rounded-md bg-[#1a1a1a] border border-white/[0.08] px-4 py-3.5 text-[14px] text-white placeholder-white/25 focus:border-[#ff6b35]/60 focus:outline-none transition-colors resize-y min-h-[140px] leading-relaxed" /></div>
              <button type="submit" disabled={sending} className="w-full h-[52px] mt-2 rounded-md bg-[#ff6b35] text-[15px] font-semibold text-white hover:bg-[#ff8552] transition-all shadow-[0_0_28px_rgba(255,107,53,0.28)] hover:shadow-[0_0_40px_rgba(255,107,53,0.42)] disabled:opacity-60">{sending ? 'Sending…' : 'Send an Inquiry →'}</button>
              <p className="text-white/40 text-[13px] leading-relaxed">Sends directly to {email} — no email app needed.</p>
              {sent && (
                <div className="rounded-md border border-white/10 bg-white/5 p-4">
                  <p className="text-white text-[14px] font-semibold">Inquiry sent successfully.</p>
                  <p className="text-white/60 text-[13px] leading-relaxed mt-1">Thank you — we will get back within one business day.</p>
                </div>
              )}
              {sendError && (
                <div className="rounded-md border border-white/10 bg-white/5 p-4">
                  <p className="text-white text-[14px] font-semibold">{sendError}</p>
                  <button type="button" onClick={copyInquiry} className="mt-3 inline-flex items-center gap-2 rounded-md border border-white/[0.12] bg-white/[0.06] px-3 py-1.5 font-mono text-[11px] text-white/70 hover:text-white hover:border-white/25 hover:bg-white/[0.1] transition-all"><Copy className="w-3.5 h-3.5" />{inquiryCopied ? 'Copied!' : 'Copy Inquiry'}</button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= Footer ================= */
const Footer = () => (
  <footer className="relative bg-[#070f1a] border-t border-white/10 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-[#ff6b35] rounded-lg shadow-layer-3 flex items-center justify-center"><Code2 className="w-7 h-7 text-white" /></div>
            <span className="font-['Syne'] font-black text-xl tracking-[-0.05em] text-white">THE JIMMY LAB<span className="text-[#ff3c2f]">.</span></span>
          </div>
          <p className="text-[#ff6b35] font-mono text-[11px] font-bold uppercase tracking-[0.22em] mb-5">Digital Experiences. Built Better.</p>
          <p className="text-white/60 leading-relaxed max-w-md mb-6">We design, build, and optimize digital experiences that help businesses, brands, and ideas move forward. Whether you need a new website, a custom web application, an immersive interactive experience, help improving an existing project, technical consulting, or training, we work closely with you to understand your goals and build a solution that fits your needs.</p>
          <div className="flex gap-4">{['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (<a key={social} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-[#ff6b35] hover:border-[#ff6b35] hover:text-white transition-all"><span className="text-xs font-bold">{social[0]}</span></a>))}</div>
        </div>
        <div>
          <h4 className="font-['Syne'] font-bold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Services', href: '#services' },
              { name: 'Work', href: '#portfolio' },
              { name: 'Process', href: '#process' },
              { name: 'Team', href: '#/team' },
              { name: 'Journal', href: '#journal' },
              { name: 'Contact', href: '#connect' },
            ].map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-white/60 hover:text-[#ff6b35] transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-['Syne'] font-bold text-white mb-6">Services</h4>
          <ul className="space-y-3">
            {[
              { name: 'Web Design & UI/UX', href: '#/services/ui-ux-design' },
              { name: 'Full-Stack Development', href: '#/services/web-development' },
              { name: 'Animation & Creative', href: '#/services/web-animation' },
              { name: 'E-Commerce', href: '#/services/e-commerce' },
              { name: 'Mobile Apps', href: '#/services/mobile-development' },
              { name: 'AI Solutions', href: '#/services/ai-solutions' },
              { name: 'SEO & Optimization', href: '#services' },
              { name: 'Maintenance & Support', href: '#connect' },
            ].map((service) => (
              <li key={service.name}>
                <a href={service.href} className="text-white/60 hover:text-[#ff6b35] transition-colors">{service.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-sm">© 2024 THE JIMMY LAB. All rights reserved.</p>
        <div className="flex gap-6 text-sm"><a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a><a href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</a></div>
      </div>
    </div>
  </footer>
);

const HomePage = () => (
  <div className="min-h-screen relative">
    <div className="liquid-bg" aria-hidden="true" />
    <div className="rule-grid" aria-hidden="true" />
    <div className="relative z-[1]">
      <Navigation />
      <HeroSection />
      <ModesSection />
      <PartnersSection />
      <AboutSection />
      <CollaborationBandsSection />
      <ServicesSection />
      <PortfolioSection />
      <OurProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <JournalSection />
      <ConnectSection />
      <Footer />
    </div>
  </div>
);

function App() {
  const [route, setRoute] = useState<string>(() => window.location.hash || '#/');
  const [showCurtain, setShowCurtain] = useState(false);
  useEffect(() => {
    const onHashChange = () => {
      const next = window.location.hash || '#/';
      const current = route;
      const isSamePage = next.split('#').slice(0, 2).join('#') === current.split('#').slice(0, 2).join('#');
      if (isSamePage) { setRoute(next); return; }
      setShowCurtain(true);
      window.setTimeout(() => {
        setRoute(next);
        if (next.startsWith('#') && !next.startsWith('#/')) {
          window.setTimeout(() => {
            const el = document.getElementById(next.slice(1));
            if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
            else window.scrollTo(0, 0);
          }, 80);
        } else {
          window.scrollTo(0, 0);
        }
      }, 320);
      window.setTimeout(() => setShowCurtain(false), 1000);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [route]);

  const serviceMatch = route.match(/^#\/services\/([^#/?]+)/);
  const service = serviceMatch ? getServiceBySlug(serviceMatch[1]) : undefined;
  const isTeamPage = /^#\/team\/?$/.test(route);
  const routeKey = service ? 'service-' + service.slug : isTeamPage ? 'team' : 'home';
  return (
    <>
      <AnimatePresence>{showCurtain && <RouteCurtain key="curtain" />}</AnimatePresence>
      <AnimatePresence mode="wait">
        <PageTransition key={routeKey}>
          {service ? <ServicePage service={service} /> : isTeamPage ? <TeamPage /> : <HomePage />}
        </PageTransition>
      </AnimatePresence>
    </>
  );
}

export default App;
