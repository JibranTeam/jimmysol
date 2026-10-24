import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronDown, Code2 } from "lucide-react";
import { cn } from "../utils/cn";
import { services, type Service } from "../data/services";

export default function ServicePage({ service }: { service: Service }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const index = services.indexOf(service);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen relative">
      <div className="liquid-bg" aria-hidden="true" />
      <div className="rule-grid" aria-hidden="true" />
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
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-[#ff6b35] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(circle at 15% 10%, ${service.color}26, transparent 55%)` }}
        />
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-white/45 mb-8"
          >
            <a href="#/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span className="font-semibold" style={{ color: service.color }}>{service.title}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-3 mb-7"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${service.color}22` }}>
                  <service.icon className="w-7 h-7" style={{ color: service.color }} />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: service.color }}>
                  Service / 0{index + 1}
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.02]"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
              >
                {service.tagline}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <a
                  href={`mailto:thejimmylab@gmail.com?subject=${encodeURIComponent(service.title + " inquiry")}`}
                  className="btn-primary"
                >
                  Start your project <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white/15 rounded-lg text-white hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all"
                >
                  Read the FAQ
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl p-6 glass relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-2xl" style={{ backgroundColor: `${service.color}33` }} />
                <div className="grid grid-cols-1 gap-5 relative">
                  {service.stats.map((s) => (
                    <div key={s.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="font-['Syne'] text-3xl font-extrabold" style={{ color: service.color }}>{s.value}</div>
                      <div className="text-sm text-white/55 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#0a1628]/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#ff6b35]">Overview</span>
            <h2 className="font-['Syne'] text-3xl md:text-4xl font-bold text-white mt-3 mb-6">What we do</h2>
            {service.overview.map((p) => (
              <p key={p.slice(0, 24)} className="text-white/65 text-[16px] leading-relaxed mb-5">{p}</p>
            ))}
            <div className="mt-8">
              <h3 className="font-['Syne'] text-lg font-bold text-white mb-4">Tech stack</h3>
              <div className="flex flex-wrap gap-2.5">
                {service.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-full border text-sm font-medium"
                    style={{ borderColor: `${service.color}33`, color: service.color, backgroundColor: `${service.color}12` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="rounded-2xl p-7 border border-white/10 bg-[#0a1628] shadow-[10px_10px_0_rgba(0,0,0,0.3)]">
              <h3 className="font-['Syne'] text-xl font-bold text-white mb-5">What you get</h3>
              <ul className="space-y-3.5">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-white/70">
                    <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${service.color}22` }}>
                      <Check className="w-3.5 h-3.5" style={{ color: service.color }} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#ff6b35]">Capabilities</span>
            <h2 className="font-['Syne'] text-3xl md:text-4xl font-bold text-white mt-3">Key features</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {service.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl p-7 border border-white/10 bg-[#0a1628] hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style={{ backgroundColor: `${service.color}1f` }}>
                  <service.icon className="w-5 h-5" style={{ color: service.color }} />
                </div>
                <h3 className="font-['Syne'] text-xl font-bold text-white mb-2.5">{f.title}</h3>
                <p className="text-white/60 text-[15px] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative py-20 bg-[#0a1628]/60 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#ff6b35]">FAQ</span>
            <h2 className="font-['Syne'] text-3xl md:text-4xl font-bold text-white mt-3">Questions, answered</h2>
          </motion.div>
          <div className="space-y-3.5">
            {service.faq.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="rounded-xl border border-white/10 bg-[#111d30] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-semibold text-white">{f.q}</span>
                    <ChevronDown
                      className={cn("w-5 h-5 shrink-0 transition-transform duration-300", open && "rotate-180")}
                      style={{ color: service.color }}
                    />
                  </button>
                  <div className={cn("grid transition-all duration-300 ease-in-out", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-white/65 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10 gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#ff6b35]">Explore</span>
              <h2 className="font-['Syne'] text-3xl md:text-4xl font-bold text-white mt-3">Other services</h2>
            </div>
            <a href="#/" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-[#ff6b35] transition-colors">
              All services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.slice(0, 3).map((s) => (
              <a
                key={s.slug}
                href={`#/services/${s.slug}`}
                className="group rounded-2xl p-6 border border-white/10 bg-[#0a1628] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${s.color}1f` }}>
                  <s.icon className="w-6 h-6" style={{ color: s.color }} />
                </div>
                <h3 className="font-['Syne'] text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4 line-clamp-2">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold transition-all" style={{ color: s.color }}>
                  Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 100%, ${service.color}26, transparent 60%)` }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Syne'] text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to build your <span className="gradient-text">{service.title.toLowerCase()}</span>?
          </h2>
          <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto">
            Tell us about your project and we'll get back within one business day with a clear plan and quote.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="mailto:thejimmylab@gmail.com" className="btn-primary">
              Get a free consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#/" className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white/15 rounded-lg text-white hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all">
              Back to home
            </a>
          </div>
        </div>
      </section>

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
          <p className="text-white/40 text-sm">© 2024 THE JIMMY LAB. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
