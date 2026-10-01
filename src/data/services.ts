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
      { title: "Performance First", desc: "Core Web Vitals at 95+, edge caching and image optimisation by default." },
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
      { value: "8+", label: "Years of experience" },
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
      "Every checkout is optimised, every product page is persuasive, and every build is wired for analytics, upsells and growth.",
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
      "Every animation is optimised for 60fps, respects reduced-motion preferences and enhances usability rather than distracting from it.",
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
      { q: "Will animation slow my site down?", a: "No — we optimise every animation for performance and respect reduced-motion preferences for accessibility." },
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
      "Our 3D pipeline covers modelling, texturing, lighting and rendering, delivered optimised for real-time web (glTF/Three.js) or cinematic stills and loops.",
    ],
    features: [
      { title: "2D Illustration", desc: "Custom illustration, iconography and infographic systems." },
      { title: "3D Modelling & Renders", desc: "Product visuals, characters and environments in Blender." },
      { title: "Motion Graphics", desc: "Animated logos, explainer scenes and social loops." },
      { title: "Real-Time Assets", desc: "Optimised glTF models ready for Three.js and WebGL scenes." },
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
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
