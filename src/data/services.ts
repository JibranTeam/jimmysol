import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Palette,
  Smartphone,
  ShoppingBag,
  Sparkles,
  Wand2,
  PenTool,
  Boxes,
  GraduationCap,
  Search,
  ShieldCheck,
  Workflow,
  RefreshCw,
  FileSearch,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  tagline: string;
  overview: string[];
  features: { title: string; desc: string }[];
  deliverables: string[];
  stack: string[];
  stats: { value: string; label: string }[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    desc: "Production-grade websites and web applications engineered to scale from day one.",
    color: "#ff6b35",
    tagline: "Fast, secure and scalable web applications built around your business.",
    overview: [
      "We design and build high-performance websites and full-stack web applications using modern, battle-tested technologies. From marketing sites and SaaS platforms to complex internal tools, every build is engineered for speed, security and long-term maintainability.",
      "Our process combines clean architecture, component-driven design and rigorous testing so your product launches on time and grows without friction.",
    ],
    features: [
      { title: "Full-Stack Engineering", desc: "React, Next.js, Node.js and TypeScript across the entire stack." },
      { title: "Performance First", desc: "Core Web Vitals at 95+, edge caching and image optimization by default." },
      { title: "Scalable Architecture", desc: "Clean, testable codebases that grow with your product and team." },
      { title: "Security Hardened", desc: "Auth, roles, data protection and OWASP best practices baked in." },
    ],
    deliverables: [
      "Custom websites & web apps",
      "Headless CMS integration",
      "Third-party API integrations",
      "Analytics & monitoring setup",
      "Documentation & handover",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS", "Vercel"],
    stats: [
      { value: "150+", label: "Projects delivered" },
      { value: "95+", label: "Avg. Lighthouse score" },
      { value: "2013", label: "Founded" },
    ],
    faq: [
      { q: "How long does a typical web project take?", a: "A marketing site typically takes 2–4 weeks, while a full web application can take 6–16 weeks depending on scope and complexity." },
      { q: "Do you provide ongoing support?", a: "Yes — we offer maintenance and retainer packages covering updates, monitoring and new feature development." },
      { q: "Can you work with our existing codebase?", a: "Absolutely. We regularly audit, refactor and extend existing React, Node.js and PHP codebases." },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces and design systems crafted around real user behaviour.",
    color: "#a855f7",
    tagline: "Interfaces that feel effortless — designed from research, not guesswork.",
    overview: [
      "We design interfaces that are beautiful and functional, grounded in user research and behavioural insight. From wireframes and prototypes to complete design systems, we make products that people genuinely enjoy using.",
      "Every screen is crafted with clear hierarchy, accessible contrast and a motion language that guides the eye — so your product feels premium and performs.",
    ],
    features: [
      { title: "UX Research", desc: "User interviews, journeys and usability testing to inform every decision." },
      { title: "Design Systems", desc: "Scalable component libraries with tokens that keep teams aligned." },
      { title: "High-Fidelity Prototyping", desc: "Interactive prototypes for fast validation and stakeholder buy-in." },
      { title: "Accessible by Default", desc: "WCAG-conscious contrast, focus states and semantic structure." },
    ],
    deliverables: [
      "Wireframes & user flows",
      "Interactive prototypes",
      "Design system & tokens",
      "UI kits & components",
      "Developer handoff specs",
    ],
    stack: ["Figma", "Framer", "Adobe XD", "Illustrator", "After Effects"],
    stats: [
      { value: "200+", label: "Screens designed" },
      { value: "40%", label: "Avg. conversion lift" },
      { value: "5★", label: "Client satisfaction" },
    ],
    faq: [
      { q: "Do you also implement the designs?", a: "Yes — our designers and engineers work side-by-side, so the shipped product matches the design pixel-for-pixel." },
      { q: "Can you redesign our existing product?", a: "Absolutely. We start with a UX audit, then redesign and improve without disrupting your current flow." },
      { q: "What tools do you use?", a: "Figma is our primary tool, with Framer for high-fidelity prototypes and After Effects for motion studies." },
    ],
  },
  {
    slug: "mobile-development",
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Native-quality mobile apps for iOS and Android built with modern cross-platform tooling.",
    color: "#3b82f6",
    tagline: "Mobile experiences that feel native, ship fast and scale with your users.",
    overview: [
      "We build polished mobile applications that run flawlessly on both iOS and Android. Using modern cross-platform tooling, we ship one codebase without sacrificing the native feel, performance or polish your users expect.",
      "From MVP to app-store launch, we handle design, development, testing and release — so you can focus on your users.",
    ],
    features: [
      { title: "Cross-Platform", desc: "One codebase, two platforms — React Native and Flutter expertise." },
      { title: "Offline-First", desc: "Local data, sync and caching for a responsive, resilient experience." },
      { title: "App Store Ready", desc: "Full App Store and Play Store submission and compliance." },
      { title: "Push & Analytics", desc: "Push notifications, deep links and product analytics wired in." },
    ],
    deliverables: [
      "iOS & Android apps",
      "API integration",
      "Push notifications",
      "Store submission",
      "Crash monitoring",
    ],
    stack: ["React Native", "Expo", "Flutter", "Swift", "Kotlin", "Firebase"],
    stats: [
      { value: "40+", label: "Apps shipped" },
      { value: "4.8★", label: "Avg. store rating" },
      { value: "2", label: "Platforms covered" },
    ],
    faq: [
      { q: "Native or cross-platform?", a: "For most products, cross-platform (React Native/Flutter) gives the best speed-to-market and cost, while still feeling native." },
      { q: "Can you take our app to the store?", a: "Yes — we handle the full submission process for both the App Store and Google Play." },
      { q: "Do you build MVPs?", a: "Definitely. MVPs are our speciality — a lean, focused first release to validate your idea fast." },
    ],
  },
  {
    slug: "e-commerce",
    icon: ShoppingBag,
    title: "E-Commerce",
    desc: "High-converting storefronts and headless commerce builds that turn browsers into buyers.",
    color: "#00d4aa",
    tagline: "Storefronts built to convert — fast, flexible and beautiful at every step.",
    overview: [
      "We design and build e-commerce experiences that reduce friction and maximise conversion. From custom Shopify themes to fully headless builds, we craft storefronts that load fast and sell harder.",
      "Every checkout is optimized, every product page is persuasive, and every build is wired for analytics, upsells and growth.",
    ],
    features: [
      { title: "Headless Commerce", desc: "Next.js storefronts with Shopify, Sanity or custom backends." },
      { title: "Conversion-Focused UX", desc: "Persuasive product pages, quick checkout and trust signals." },
      { title: "Payments & Subscriptions", desc: "Stripe, PayPal, Apple Pay and recurring billing flows." },
      { title: "Scale-Ready", desc: "Edge rendering and caching to handle traffic spikes with ease." },
    ],
    deliverables: [
      "Custom storefront",
      "Payment integration",
      "Product & inventory setup",
      "Email & upsell flows",
      "Analytics dashboard",
    ],
    stack: ["Shopify", "Shopify Plus", "Headless", "Stripe", "Sanity", "Next.js"],
    stats: [
      { value: "60%", label: "Avg. conversion lift" },
      { value: "50+", label: "Stores launched" },
      { value: "1s", label: "Avg. load time" },
    ],
    faq: [
      { q: "Shopify or custom?", a: "It depends on your needs. Shopify is great for speed-to-market; a headless build gives maximum flexibility and performance." },
      { q: "Can you migrate our existing store?", a: "Yes — we migrate products, customers and orders with zero downtime and SEO preserved." },
      { q: "Do you handle payments?", a: "We integrate Stripe, PayPal, Apple Pay and local payment gateways, plus subscription billing." },
    ],
  },
  {
    slug: "ai-solutions",
    icon: Sparkles,
    title: "AI Solutions",
    desc: "AI-powered products, automations and copilots that put intelligence to work for your business.",
    color: "#ffd700",
    tagline: "Turn your data and workflows into intelligent, automated products.",
    overview: [
      "We build practical AI-powered solutions — from chat assistants and content copilots to intelligent automation and document processing. We focus on real business outcomes, not hype.",
      "Whether it's integrating large language models, building custom pipelines, or automating operations, we ship AI that saves time, reduces cost and unlocks new capability.",
    ],
    features: [
      { title: "LLM Integration", desc: "OpenAI, Anthropic and open-source models wired into your product." },
      { title: "Custom Copilots", desc: "Domain-specific assistants trained on your data and docs." },
      { title: "Intelligent Automation", desc: "n8n, Zapier and custom agents that run your operations." },
      { title: "RAG & Search", desc: "Retrieval-augmented generation for accurate, grounded answers." },
    ],
    deliverables: [
      "AI strategy & audit",
      "Custom AI assistant",
      "Automation workflows",
      "Model integration",
      "Monitoring & evals",
    ],
    stack: ["OpenAI", "LangChain", "Hugging Face", "TensorFlow", "PyTorch", "n8n"],
    stats: [
      { value: "30+", label: "AI systems built" },
      { value: "70%", label: "Avg. time saved" },
      { value: "24/7", label: "Always-on agents" },
    ],
    faq: [
      { q: "What can AI actually do for my business?", a: "It depends on your data and workflows — but common wins are automating support, document processing, content and data analysis." },
      { q: "Is our data kept private?", a: "Yes. We can use private models, on-prem hosting and strict data isolation depending on your compliance needs." },
      { q: "How do you measure success?", a: "We define clear metrics up front — time saved, cost reduced, or revenue generated — and report against them." },
    ],
  },
  {
    slug: "web-animation",
    icon: Wand2,
    title: "Web Animation",
    desc: "Scroll-driven, 2D & 3D motion that makes interfaces feel alive and unforgettable.",
    color: "#ec4899",
    tagline: "Motion that guides, delights and sets your brand apart.",
    overview: [
      "We craft interactive, scroll-driven and 3D motion that turns static pages into memorable experiences. From micro-interactions to full product configurators, we use motion as a functional tool — not decoration.",
      "Every animation is optimized for 60fps, respects reduced-motion preferences and enhances usability rather than distracting from it.",
    ],
    features: [
      { title: "Scroll Experiences", desc: "GSAP and Framer Motion scenes tied to scroll and time." },
      { title: "3D & WebGL", desc: "Three.js, WebGL and Blender for immersive product visuals." },
      { title: "Micro-Interactions", desc: "Subtle, purposeful motion that makes UI feel premium." },
      { title: "Performance-Tuned", desc: "Buttery 60fps animation with zero jank on any device." },
    ],
    deliverables: [
      "Motion design system",
      "Scroll-driven scenes",
      "3D product configurators",
      "Lottie & SVG animations",
      "Performance audit",
    ],
    stack: ["GSAP", "Framer Motion", "Three.js", "WebGL", "Blender", "After Effects"],
    stats: [
      { value: "100+", label: "Animated builds" },
      { value: "60fps", label: "Guaranteed smooth" },
      { value: "2D & 3D", label: "Full range" },
    ],
    faq: [
      { q: "Will animation slow my site down?", a: "No — we optimize every animation for performance and respect reduced-motion preferences for accessibility." },
      { q: "Can you animate an existing site?", a: "Yes. We can add scroll experiences, interactions and motion to your current product without a rebuild." },
      { q: "Do you do 3D product configurators?", a: "Absolutely — interactive 3D configurators are one of our signature offerings." },
    ],
  },
  {
    slug: "logo-design-branding",
    icon: PenTool,
    title: "Logo Design & Branding",
    desc: "Distinctive logos and complete brand systems that make you instantly recognisable everywhere.",
    color: "#f472b6",
    tagline: "A mark people remember, and a brand system that holds up everywhere it lands.",
    overview: [
      "We design logos and brand identities from the ground up — research, strategy, sketching, refinement — until the mark captures exactly who you are. Then we build the system around it: colour, type, voice and usage rules.",
      "You leave with a logo that works at 16px and at 16 metres, plus guidelines your whole team can apply without guessing.",
    ],
    features: [
      { title: "Brand Strategy", desc: "Positioning, audience and messaging defined before a single pixel is drawn." },
      { title: "Logo Suites", desc: "Primary, secondary and icon marks built for every context and surface." },
      { title: "Identity Systems", desc: "Colour palettes, typography and graphic languages that scale with you." },
      { title: "Brand Guidelines", desc: "Clear, practical documentation so consistency survives handover." },
    ],
    deliverables: [
      "Logo suite (SVG, PNG, EPS)",
      "Colour & type system",
      "Brand guidelines document",
      "Social & stationery kits",
      "Favicon & app icons",
    ],
    stack: ["Illustrator", "Figma", "Photoshop", "After Effects"],
    stats: [
      { value: "80+", label: "Identities crafted" },
      { value: "3 wks", label: "Avg. turnaround" },
      { value: "∞", label: "Revisions till love" },
    ],
    faq: [
      { q: "How many concepts do we get?", a: "We present two to three distinct strategic directions, then refine the chosen route together until it's right." },
      { q: "Do you redesign existing logos?", a: "Yes — evolutionary refreshes that keep your equity while modernising the mark are a big part of our work." },
      { q: "What files do we receive?", a: "Full vector and raster suites, plus favicon, app icons and a printable brand guidelines document." },
    ],
  },
  {
    slug: "graphic-design-2d-3d",
    icon: Boxes,
    title: "2D/3D Graphic Design",
    desc: "Illustration, motion graphics and 3D visuals that give your product a visual language of its own.",
    color: "#22d3ee",
    tagline: "Custom 2D illustration and 3D renders — no stock clichés, ever.",
    overview: [
      "From editorial illustration and icon sets to fully rendered 3D product scenes, we create original graphic assets that make your brand unmistakable across web, print and video.",
      "Our 3D pipeline covers modeling, texturing, lighting and rendering, delivered optimized for real-time web (glTF/Three.js) or cinematic stills and loops.",
    ],
    features: [
      { title: "2D Illustration", desc: "Custom illustration, iconography and infographic systems." },
      { title: "3D Modelling & Renders", desc: "Product visuals, characters and environments in Blender." },
      { title: "Motion Graphics", desc: "Animated logos, explainer scenes and social loops." },
      { title: "Real-Time Assets", desc: "Optimized glTF models ready for Three.js and WebGL scenes." },
    ],
    deliverables: [
      "Illustration & icon sets",
      "3D models (glTF / Blend)",
      "Rendered stills & loops",
      "Motion graphics packages",
      "Source files & licences",
    ],
    stack: ["Blender", "Illustrator", "Photoshop", "After Effects", "Three.js"],
    stats: [
      { value: "300+", label: "Assets produced" },
      { value: "4K", label: "Render quality" },
      { value: "60fps", label: "Real-time ready" },
    ],
    faq: [
      { q: "Can 3D models run on our website?", a: "Yes — we deliver Draco-compressed glTF models tuned for Three.js, typically under 2 MB per scene." },
      { q: "Do you work from our sketches?", a: "Absolutely. Rough sketches, moodboards or napkins — we can start from anything and professionalise it." },
      { q: "Who owns the artwork?", a: "You do. Full commercial rights transfer on final payment, including source files." },
    ],
  },
  {
    slug: "consultation-training",
    icon: GraduationCap,
    title: "1:1 Consultation & Training",
    desc: "Focused 1-on-1 guidance, code reviews and hands-on training for teams and individuals.",
    color: "#a3e635",
    tagline: "Senior expertise on tap — unblock your team without hiring for it.",
    overview: [
      "Book focused 1-on-1 sessions with our senior engineers and designers: architecture reviews, stack decisions, project planning, or hands-on pair programming on your own codebase.",
      "We also run structured training tracks — modern frontend, animation, AI tooling — built around your team's real projects instead of toy examples.",
    ],
    features: [
      { title: "Technical Consultancy", desc: "Architecture, stack selection and roadmap decisions with a senior operator." },
      { title: "Code Review & Audits", desc: "Deep-dive reviews with a prioritised, actionable report." },
      { title: "1:1 Mentorship", desc: "Recurring sessions tailored to your growth goals." },
      { title: "Team Training", desc: "Live workshops on React, motion, AI workflows and performance." },
    ],
    deliverables: [
      "Session recordings & notes",
      "Prioritised audit report",
      "Learning roadmap",
      "Workshop materials",
      "30-day follow-up support",
    ],
    stack: ["React", "Next.js", "TypeScript", "GSAP", "OpenAI", "n8n"],
    stats: [
      { value: "120+", label: "Sessions delivered" },
      { value: "4.9★", label: "Avg. session rating" },
      { value: "1:1", label: "Always personal" },
    ],
    faq: [
      { q: "How do sessions work?", a: "60 or 90 minute video calls, screen-share first. You leave each session with notes and next steps." },
      { q: "Can you train our whole team?", a: "Yes — private cohort workshops, scheduled around your sprints, using your own codebase as the curriculum." },
      { q: "Do you offer ongoing retainers?", a: "We keep a limited number of monthly advisory slots for continued guidance between builds." },
    ],
  },
  {
    slug: "seo-website-optimization",
    icon: Search,
    title: "SEO & Website Optimization",
    desc: "Higher rankings, faster pages and more organic traffic — technical SEO and performance work that compounds over time.",
    color: "#ef4444",
    tagline: "Get found on Google, load fast everywhere, and turn search traffic into enquiries.",
    overview: [
      "We audit your site end to end — technical SEO, on-page structure, Core Web Vitals and content gaps — then fix what actually moves rankings, not just what looks good in a report.",
      "Every optimization is measured: before-and-after speed scores, ranking movement and traffic, with a clear monthly report on what changed and what comes next.",
    ],
    features: [
      { title: "Technical SEO Audit", desc: "Crawl, indexation, sitemaps, schema and redirect issues found and fixed." },
      { title: "On-Page Optimization", desc: "Titles, meta, headings, internal links and content structure tuned per page." },
      { title: "Speed & Core Web Vitals", desc: "Image, code and caching optimizations that lift real user load times." },
      { title: "Local & Keyword Strategy", desc: "Keyword mapping and local search setup so the right people find you." },
    ],
    deliverables: [
      "Full SEO & performance audit",
      "On-page optimization report",
      "Core Web Vitals improvements",
      "Keyword & content roadmap",
      "Monthly ranking & traffic report",
    ],
    stack: ["Google Search Console", "PageSpeed Insights", "Ahrefs", "Screaming Frog", "Next.js", "Vercel"],
    stats: [
      { value: "90+", label: "Target PageSpeed score" },
      { value: "100%", label: "On-page SEO coverage" },
      { value: "Monthly", label: "Ranking reports" },
    ],
    faq: [
      { q: "How long before SEO results show?", a: "Technical and speed fixes usually show within weeks; ranking and traffic growth typically builds over 2–3 months." },
      { q: "Do you write content too?", a: "We map keywords and optimize existing pages, and can brief or produce SEO content as part of a package." },
      { q: "Is this a one-time job or ongoing?", a: "Both — a one-time audit and fix, or a monthly retainer for continuous optimization and reporting." },
    ],
  },
  {
    slug: "maintenance-support",
    icon: ShieldCheck,
    title: "Maintenance & Support",
    desc: "Your site stays fast, secure and up to date — updates, monitoring, backups and fixes handled for you.",
    color: "#0ea5e9",
    tagline: "Never worry about updates, downtime or broken pages again.",
    overview: [
      "Websites break quietly: outdated plugins, expired certificates, slow databases and small bugs that cost enquiries. Our maintenance plans keep everything patched, monitored and backed up.",
      "When something does go wrong, you have a team that already knows your site — no explaining your stack to a stranger, no waiting days for a fix.",
    ],
    features: [
      { title: "Updates & Patching", desc: "Core, plugin and dependency updates tested before they go live." },
      { title: "Uptime Monitoring", desc: "24/7 monitoring with fast response when your site goes down." },
      { title: "Backups & Security", desc: "Automated backups, malware scans and security hardening." },
      { title: "Small Fixes Included", desc: "Content tweaks, bug fixes and small changes without a new project." },
    ],
    deliverables: [
      "Monthly update & health report",
      "Automated daily backups",
      "Uptime & security monitoring",
      "Priority bug-fix support",
      "Small content & design changes",
    ],
    stack: ["Vercel", "Cloudflare", "UptimeRobot", "GitHub", "WordPress", "Next.js"],
    stats: [
      { value: "24/7", label: "Uptime monitoring" },
      { value: "Daily", label: "Automated backups" },
      { value: "Same-day", label: "Priority fix response" },
    ],
    faq: [
      { q: "What counts as a small fix?", a: "Text and image changes, broken links, layout bugs and small feature tweaks — anything that fits in a short session." },
      { q: "Do you support sites you did not build?", a: "Yes — we start with a quick health check, then take over maintenance from there." },
      { q: "Can I cancel anytime?", a: "Yes — maintenance is month to month, with your backups and documentation handed over if you leave." },
    ],
  },
  {
    slug: "integration-automation",
    icon: Workflow,
    title: "Integration & Automation",
    desc: "Connect your tools and automate the busywork — CRMs, forms, payments and workflows that run themselves.",
    color: "#f59e0b",
    tagline: "Less copy-paste, fewer dropped leads, more time for real work.",
    overview: [
      "Most teams lose hours moving data between tools: form to CRM, CRM to email, email to spreadsheet. We connect your stack and automate those flows so nothing falls through the cracks.",
      "From GoHighLevel, n8n and Make.com to custom API integrations, we build automations that are reliable, monitored and easy to change as your business grows.",
    ],
    features: [
      { title: "CRM & Tool Integrations", desc: "GoHighLevel, HubSpot, Stripe, forms and email tools connected properly." },
      { title: "Workflow Automation", desc: "Lead routing, follow-ups, notifications and reporting on autopilot." },
      { title: "Custom API Work", desc: "When no plug-in exists, we build the integration directly." },
      { title: "Monitored & Documented", desc: "Every automation logged, with alerts and docs so it never silently breaks." },
    ],
    deliverables: [
      "Integration & automation map",
      "Connected CRM, forms & payments",
      "Automated lead & follow-up flows",
      "Error alerts & monitoring",
      "Documentation & handover",
    ],
    stack: ["GoHighLevel", "n8n", "Make.com", "Zapier", "HubSpot", "Stripe", "REST APIs", "Webhooks"],
    stats: [
      { value: "100%", label: "Leads captured, none lost" },
      { value: "24/7", label: "Automations running" },
      { value: "1 map", label: "Full workflow documentation" },
    ],
    faq: [
      { q: "Which tools can you connect?", a: "GoHighLevel, HubSpot, Stripe, Calendly, email platforms and most tools with an API or webhook — tell us your stack and we will map it." },
      { q: "What if an automation breaks?", a: "Every flow has error alerts, and maintenance clients get priority fixes — nothing fails silently for weeks." },
      { q: "Do I need a CRM first?", a: "No — we can set up GoHighLevel or a simpler CRM as part of the project, then build the automations on top." },
    ],
  },
  {
    slug: "website-redesign-migration",
    icon: RefreshCw,
    title: "Website Redesign & Migration",
    desc: "A fresh look without losing what works — redesigns and platform moves with zero ranking or content loss.",
    color: "#6366f1",
    tagline: "New design, same traffic — a relaunch done properly.",
    overview: [
      "A redesign should never cost you your Google rankings or your content. We rebuild your site with a modern design and faster stack, while carefully preserving URLs, SEO value and everything your visitors already love.",
      "Moving platforms — WordPress to Next.js, Wix to Shopify, or anything in between — gets the same treatment: full content migration, redirect mapping and post-launch checks.",
    ],
    features: [
      { title: "Redesign Without Regression", desc: "New look, same (or better) speed, SEO and conversion performance." },
      { title: "Full Content Migration", desc: "Pages, posts, products, images and forms moved intact." },
      { title: "Redirect & SEO Preservation", desc: "301 redirect maps so old links keep working and rankings hold." },
      { title: "Post-Launch Checks", desc: "Broken-link, speed and analytics verification before we hand over." },
    ],
    deliverables: [
      "Redesigned website on a modern stack",
      "Migrated content, media & forms",
      "301 redirect map",
      "SEO preservation checklist",
      "Post-launch verification report",
    ],
    stack: ["Next.js", "React", "WordPress", "Shopify", "Wix", "Framer", "Vercel"],
    stats: [
      { value: "0", label: "Pages lost in migration" },
      { value: "100%", label: "Redirects mapped" },
      { value: "2x", label: "Faster on average post-launch" },
    ],
    faq: [
      { q: "Will I lose my Google rankings?", a: "No — redirect mapping and SEO preservation are built into every redesign and migration, with checks after launch." },
      { q: "Can you move my site to a different platform?", a: "Yes — WordPress, Wix, Shopify, Squarespace and custom stacks are all in scope, with content migrated intact." },
      { q: "How long does a redesign take?", a: "Most redesigns take 3–6 weeks depending on page count and whether a platform move is included." },
    ],
  },
  {
    slug: "code-review-technical-audit",
    icon: FileSearch,
    title: "Code Review & Technical Audit",
    desc: "A senior, independent look at your codebase — what is solid, what is risky, and what to fix first.",
    color: "#10b981",
    tagline: "Know exactly where your code stands — before it becomes a problem.",
    overview: [
      "This is a full technical audit, not a quick session review: architecture, code quality, security, performance and scalability, examined by senior engineers and delivered as a prioritised, actionable report.",
      "You get a clear fix order — critical issues first — with concrete recommendations your team can act on, whether you hire us to fix them or handle them in-house.",
    ],
    features: [
      { title: "Architecture Review", desc: "Structure, patterns and scalability assessed against how your product actually grows." },
      { title: "Security Audit", desc: "Auth, data handling, dependencies and common vulnerability classes checked." },
      { title: "Performance Profiling", desc: "Slow queries, render bottlenecks and bundle bloat identified with evidence." },
      { title: "Prioritised Action Plan", desc: "Every finding ranked by impact, with effort estimates and fix guidance." },
    ],
    deliverables: [
      "Full technical audit report",
      "Security & dependency findings",
      "Performance profiling results",
      "Prioritised fix roadmap",
      "Walkthrough call with your team",
    ],
    stack: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Lighthouse", "Snyk", "GitHub"],
    stats: [
      { value: "5 areas", label: "Architecture, security, performance & more" },
      { value: "1 report", label: "Prioritised and actionable" },
      { value: "7 days", label: "Typical audit turnaround" },
    ],
    faq: [
      { q: "How is this different from your consultation code reviews?", a: "Consultation reviews happen inside a 1:1 session. This is a standalone, documented audit of the whole codebase with a written report and roadmap." },
      { q: "Do you need access to our code?", a: "Yes — read-only repository access is enough, under NDA if you need one." },
      { q: "Can you fix what you find?", a: "Yes — fixes can be quoted as a follow-up project, or your team can work from the report directly." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
