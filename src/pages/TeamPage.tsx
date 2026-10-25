import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Globe2, MoonStar, Users2 } from "lucide-react";
import { cn } from "../utils/cn";

/* ================= Team data ================= */
const team = [
  { n: '01', name: 'Jibran', role: 'Founder & CEO', initials: 'J', color: 'from-[#ff6b35] to-[#ff9a5c]', link: 'https://www.linkedin.com/in/saadmalikceo/' },
  { n: '02', name: 'Jawad Malik', role: 'GHL - N8N - Make.com Expert, SEO', initials: 'JM', color: 'from-[#00d4aa] to-[#38bdf8]', link: 'https://www.linkedin.com/in/jawad-malik-9631b0250/' },
  { n: '03', name: 'Arsalan', role: 'UI/UX Developer / Graphic Designer', initials: 'A', color: 'from-[#a855f7] to-[#ec4899]', link: 'https://www.linkedin.com/in/aimen-sajjad-3b6854298/' },
  { n: '04', name: 'Irfan', role: 'Sr Frontend Developer', initials: 'I', color: 'from-[#f59e0b] to-[#ff6b35]', link: 'https://www.linkedin.com/in/laibasheikh04/' },
  { n: '05', name: 'M.Ali', role: 'WordPress Developer', initials: 'MA', color: 'from-[#3b82f6] to-[#06b6d4]', link: 'https://www.linkedin.com/in/muhammad-ali-4aa95515b/' },
  { n: '06', name: 'Sadeed', role: 'Sr Backend Developer', initials: 'S', color: 'from-[#ec4899] to-[#8b5cf6]', link: 'https://www.linkedin.com/in/alizey-tariq/' },
];

/* ================= Avatar Icon ================= */
const AvatarIcon = ({ variant = 1, className = '' }: { variant?: number; className?: string }) => {
  const BG = '#3A3D42'; const BODY = '#5C6066'; const SKIN = '#FFFFFF'; const NECK = '#C3C6CA'; const HAIR = '#6E7278';
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs><clipPath id={`avatar-clip-${variant}`}><circle cx="100" cy="100" r="100" /></clipPath></defs>
      <circle cx="100" cy="100" r="100" fill={BG} />
      <g clipPath={`url(#avatar-clip-${variant})`}>
        <ellipse cx="100" cy="212" rx="88" ry="76" fill={BODY} />
        <path d="M82 112h36v34a18 18 0 0 1-36 0z" fill={NECK} />
        <ellipse cx="62" cy="88" rx="7" ry="11" fill={SKIN} />
        <ellipse cx="138" cy="88" rx="7" ry="11" fill={SKIN} />
        {variant === 1 && (<><path d="M100 38c22 0 38 17 38 42v14c0 24-17 42-38 42s-38-18-38-42V80c0-25 16-42 38-42z" fill={SKIN} /><path d="M62 78c0-24 16-40 38-40s38 16 38 40c0-12-14-16-38-16S62 66 62 78z" fill={SKIN} /><path d="M100 34c22 0 39 15 39 34-6-10-19-14-39-14s-33 4-39 14c0-19 17-34 39-34z" fill={SKIN} /></>)}
        {variant === 2 && (<><path d="M100 40c21 0 37 16 37 40v14c0 24-16 42-37 42s-37-18-37-42V80c0-24 16-40 37-40z" fill={SKIN} /><path d="M63 84c-2-28 15-46 37-46s39 16 39 40c0 8-2 14-4 18-1-14-8-22-20-24-16-3-30 4-38 16-5 7-8 13-9 19-3-6-4-14-5-23z" fill={HAIR} /></>)}
        {variant === 3 && (<><path d="M100 40c21 0 37 16 37 40v14c0 24-16 42-37 42s-37-18-37-42V80c0-24 16-40 37-40z" fill={SKIN} /><path d="M62 86c-1-30 17-48 39-48 16 0 29 8 34 21 3 8 3 16 2 23-3-10-9-15-18-16 4-4 4-8 3-11-6 9-19 12-33 13-12 1-21 7-24 18-2-1-3 0-3 0z" fill={HAIR} /></>)}
        {variant === 4 && (<><path d="M100 44c20 0 35 15 35 38v12c0 23-15 40-35 40s-35-17-35-40V82c0-23 15-38 35-38z" fill={SKIN} /><path d="M100 36c25 0 42 18 42 44 0 16-2 30-5 40-2-8-3-18-3-28-8 4-14-2-16-10-9 8-25 12-42 10-6 8-9 18-10 28-3-10-6-24-6-40 0-26 15-44 40-44z" fill={HAIR} /></>)}
      </g>
    </svg>
  );
};

/* ================= Operators page ================= */
export default function TeamPage() {
  const avatarVariants = useMemo<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    team.forEach((m) => { map[m.n] = Math.floor(Math.random() * 4) + 1; });
    return map;
  }, []);

  const principles = [
    { icon: Users2, title: 'Senior-only roster', desc: 'No hand-offs to juniors. The people you meet in the first call are the people who ship your project.' },
    { icon: Globe2, title: 'Distributed by design', desc: 'Islamabad and Peterborough cover a 14-hour working window, so feedback loops never sleep.' },
    { icon: MoonStar, title: 'Async-first process', desc: 'Weekly demos, staging links and written updates keep every decision transparent and searchable.' },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="liquid-bg" aria-hidden="true" />
      <div className="rule-grid" aria-hidden="true" />
      {/* ---------- header ---------- */}
      <header className="sticky top-0 z-50 bg-[#05070a]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#ff6b35] rounded-lg shadow-layer-3 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-['Syne'] font-black text-lg tracking-tight text-white">
              THE JIMMY LAB<span className="text-[#ff3c2f]">.</span>
            </span>
          </a>
          <a href="#/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-[#ff6b35] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </a>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section className="relative py-20 md:py-24 overflow-hidden border-b-2 border-[#ff6b35]/30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff6b35]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#00d4aa]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="max-w-xl">
              <div className="inline-block px-4 sm:px-6 py-1.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 tracking-widest uppercase backdrop-blur-sm bg-white/5">// Operators</div>
              <h1 className="font-['Syne'] text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">The <span className="gradient-text">collective</span></h1>
              <p className="text-white/70 mt-5 max-w-md leading-relaxed text-[15px]">A senior team of strategists, designers, engineers and AI operators, distributed across Islamabad and Peterborough.</p>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 font-mono text-[11px] text-white font-bold uppercase tracking-[0.2em] shrink-0">Roster: 06 Confirmed</div>
          </motion.div>
        </div>
      </section>

      {/* ---------- roster ---------- */}
      <section className="relative py-16 md:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.n}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 * i }}
                className="bg-[#070f1a] p-5 h-full group relative overflow-hidden border-2 border-white/15 rounded-2xl hover:border-[#ff6b35] hover:bg-[#0f1c2e] transition-all duration-300 flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              >
                <div className="relative aspect-square w-full mb-5 overflow-hidden rounded-xl border border-white/20 bg-[#0a1628] flex items-center justify-center">
                  <div className={cn('absolute inset-0 bg-gradient-to-br opacity-20', member.color)} />
                  <AvatarIcon variant={avatarVariants[member.n]} className="relative z-[1] w-[78%] h-[78%] drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)] group-hover:scale-[1.04] transition-transform duration-500" />
                  <span className="absolute top-3 left-3 z-10 font-mono text-[10px] text-white font-bold tracking-[0.2em] uppercase bg-[#ff6b35] px-2.5 py-1 rounded-full shadow-md">// {member.n}</span>
                  <span className="absolute bottom-3 right-3 z-10 size-3 bg-[#00ff88] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,136,0.9)] border-2 border-white"></span>
                </div>
                <h3 className="font-['Syne'] text-lg font-bold tracking-tight text-white">{member.name}</h3>
                <p className="text-xs text-[#ffd700] mt-1.5 font-bold uppercase tracking-[0.12em] leading-relaxed">{member.role}</p>
                <span aria-disabled="true" title="LinkedIn links disabled for now" className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 bg-white/5 border border-white/10 px-3 py-2 rounded-full self-start cursor-not-allowed">LinkedIn</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- how we work ---------- */}
      <section className="relative py-16 md:py-20 bg-[#070f1a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-block px-4 sm:px-6 py-1.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold text-white mb-4 tracking-widest uppercase backdrop-blur-sm bg-white/5">How we operate</div>
            <h2 className="font-['Syne'] text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.05]">Small team. <span className="gradient-text">Full ownership.</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-[#0a1628] p-7 hover:border-[#ff6b35]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ff6b35]/15 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <h3 className="font-['Syne'] text-xl font-bold text-white mb-2.5">{p.title}</h3>
                <p className="text-white/60 text-[15px] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 100%, rgba(255,107,53,0.15), transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Syne'] text-3xl md:text-5xl font-extrabold text-white leading-tight">Want this team on <span className="gradient-text">your project?</span></h2>
          <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto">Tell us what you're building and we'll match you with the right operators within one business day.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="#connect" className="btn-primary">Start a project <ArrowRight className="w-4 h-4" /></a>
            <a href="#/" className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white/15 rounded-lg text-white hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all">Back to home</a>
          </div>
        </div>
      </section>

      {/* ---------- footer bar ---------- */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#ff6b35] rounded-md flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-['Syne'] font-black text-sm text-white">
              THE JIMMY LAB<span className="text-[#ff3c2f]">.</span>
            </span>
          </div>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} THE JIMMY LAB. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
