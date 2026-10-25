import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Code2 } from 'lucide-react';
import { JOURNAL_POSTS, type JournalPost } from '../data/journal';
import { goToConnect } from '../utils/goToConnect';

export default function JournalPostPage({ post }: { post: JournalPost }) {
  const others = JOURNAL_POSTS.filter((p) => p.id !== post.id).slice(0, 3);
  const year = new Date().getFullYear();

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
            href="#journal"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-[#ff6b35] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-white/45 mb-8"
          >
            <a href="#/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="#journal" className="hover:text-white transition-colors">Journal</a>
            <span>/</span>
            <span className="font-semibold text-[#ff6b35]">{post.category}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-2.5 mb-5 text-[11px] font-mono">
              <span className="text-[9px] uppercase tracking-wider text-[#ff6b35] border border-[#ff6b35]/25 bg-[#ff6b35]/10 px-2 py-0.5 rounded-md">{post.category}</span>
              <span className="text-white/20">•</span>
              <span className="text-white/40">{post.date}</span>
              <span className="text-white/20">•</span>
              <span className="text-white/40">{post.read}</span>
            </div>
            <h1 className="font-['Syne'] text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-5">{post.title}</h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10">{post.excerpt}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl aspect-[16/9] mb-12 bg-[#0a1628] border border-white/[0.06]"
          >
            <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
          </motion.div>

          <div className="space-y-10">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-['Syne'] text-2xl font-bold text-white mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-[15px] text-white/65 leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
            ))}
            <div className="rounded-2xl bg-[#070f1a] border border-[#ff6b35]/25 p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff6b35] mb-3">Takeaway</p>
              <p className="text-[15px] text-white/80 leading-relaxed">{post.takeaway}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-12">
            <a href="#journal" className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white/15 rounded-lg text-white hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Journal
            </a>
            <a href="#connect" onClick={(e) => { e.preventDefault(); goToConnect(); }} className="btn-primary">
              Start a project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 border-t border-white/5 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Syne'] text-2xl md:text-3xl font-bold text-white mb-8">More from the Journal</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((other) => (
              <article key={other.id} className="group flex flex-col justify-between bg-[#070f1a] rounded-2xl p-5 border border-white/10 hover:border-[#ff6b35]/30 transition-all duration-500">
                <div>
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-5 bg-[#0a1628] border border-white/[0.06]">
                    <img src={other.image} alt={other.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-[11px] font-mono">
                    <span className="text-[9px] uppercase tracking-wider text-[#ff6b35] border border-[#ff6b35]/25 bg-[#ff6b35]/10 px-2 py-0.5 rounded-md">{other.category}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-white/40">{other.date}</span>
                  </div>
                  <h3 className="font-['Syne'] text-[18px] font-bold mb-3 leading-snug text-white group-hover:text-[#ff6b35] transition-colors">
                    <a href={'#/journal/' + other.id}>{other.title}</a>
                  </h3>
                  <p className="text-[13px] text-white/60 leading-relaxed mb-6">{other.excerpt}</p>
                </div>
                <div className="pt-4 border-t border-white/[0.06]">
                  <a href={'#/journal/' + other.id} className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ff6b35] group-hover:gap-3 transition-all">
                    Read Post <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            ))}
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
          <p className="text-white/40 text-sm">© {year} THE JIMMY LAB. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
