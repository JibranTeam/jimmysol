export interface JournalSection {
  heading: string;
  paragraphs: string[];
}

export interface JournalPost {
  id: string;
  featured: boolean;
  category: string;
  date: string;
  read: string;
  title: string;
  excerpt: string;
  image: string;
  sections: JournalSection[];
  takeaway: string;
}

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'scroll-animation-techniques',
    featured: true,
    category: 'Motion',
    date: 'May 28, 2026',
    read: '4 min read',
    title: 'Modern Scroll-Linked Animation Techniques',
    excerpt: 'A deep dive into building performant, responsive scroll animations with the vanilla Motion library in Astro.',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&h=500&fit=crop&q=80',
    sections: [
      {
        heading: 'Why scroll animation is a performance problem first',
        paragraphs: [
          'Scroll-linked animation looks simple on the surface: an element moves as the page moves. Underneath, it is one of the easiest places to break a site, because every scroll event can trigger layout work. The moment animation code reads a layout value and then writes one back, the browser is forced to recalculate the page, and a smooth scroll turns into a stutter.',
          'The fix is boring in the best way. Animate only transform and opacity, never width, height, top or left. Keep the work off the main thread where the browser allows it, and let the browser know what is about to change before it changes.',
        ],
      },
      {
        heading: 'A small, honest toolkit',
        paragraphs: [
          'The vanilla Motion library is a good fit here because it is small and it does one job well: it maps scroll progress to animation progress without dragging a whole framework along. You define a range, you define what happens across that range, and the library handles the rest.',
          'The pattern we return to is always the same: one scroll container, one progress value, and several elements listening to that value at different speeds. Parallax, reveals and progress indicators are all the same technique with different numbers.',
        ],
      },
      {
        heading: 'Responsive by default, not by patch',
        paragraphs: [
          'Scroll animations that only work on a desktop monitor are not finished. On a phone, the viewport is shorter, scroll distances are smaller, and the same animation can feel either invisible or exhausting. Test ranges on a real phone, shorten distances on small screens, and respect reduced-motion settings.',
          'If a visitor has asked their device for less motion, honour it. A static version of the page is not a lesser version; it is the same content, delivered with respect.',
        ],
      },
    ],
    takeaway: 'Scroll animation should feel like the page itself is moving, not like an effect pasted on top of it. When it is built on transform and opacity alone, it usually does.',
  },
  {
    id: 'astro-for-portfolios',
    featured: false,
    category: 'Engineering',
    date: 'May 20, 2026',
    read: '4 min read',
    title: 'Why Astro is the Ultimate Framework for Portfolios',
    excerpt: "How Astro's island architecture and zero-JS output by default make it the perfect tool for fast creative portfolios.",
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80',
    sections: [
      {
        heading: 'A portfolio is mostly content',
        paragraphs: [
          'A portfolio site is, at its heart, a set of pages: work, writing, an about page and a way to get in touch. Very little of that needs JavaScript to exist. What it needs is to load fast, look sharp and be easy to update when new work ships.',
          'That is exactly the shape Astro is built for. Pages are rendered to plain HTML at build time, and JavaScript is only shipped for the parts of the page that actually need to be interactive.',
        ],
      },
      {
        heading: 'Islands, in plain English',
        paragraphs: [
          'Astro calls its interactive parts islands. A contact form, a filter, or a small animation can be an island, while everything around it stays static HTML. The result is a page that feels instant on first load, because the browser is not downloading and running a whole application just to show text and images.',
          'For a creative portfolio, that matters more than any framework feature list. Visitors judge the work in the first seconds, and a fast first paint is part of that judgement.',
        ],
      },
      {
        heading: 'When Astro is not the answer',
        paragraphs: [
          'Astro is not the right tool for everything. A heavily interactive product, a real-time dashboard, or an app with complex client-side state will be happier in a framework built for that job. Choosing Astro for a portfolio is not a claim that it fits everywhere; it is a claim that it fits this shape of site unusually well.',
          'The test we use is simple: if most of the site could be a document, build it as documents, and add interactivity only where it earns its place.',
        ],
      },
    ],
    takeaway: 'A portfolio should load like a document and behave like an app only where it needs to. Astro makes that the default, not a special effort.',
  },
  {
    id: 'motion-design-principles',
    featured: false,
    category: 'Motion',
    date: 'May 15, 2026',
    read: '4 min read',
    title: 'Core Principles of Functional Motion Design',
    excerpt: 'Why animation in web design is a functional tool, not just an aesthetic embellishment, and how to apply it.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&q=80',
    sections: [
      {
        heading: 'Motion should explain something',
        paragraphs: [
          'Every animation on a page should answer a question for the visitor: where did that panel come from, where did it go, what just changed, what happens next. If an animation does not answer one of those questions, it is decoration, and decoration at scale becomes noise.',
          'The best motion is often the quietest. A panel that slides from the button that opened it tells the visitor how to close it. A list item that fades out instead of vanishing tells them it was removed, not that the page broke.',
        ],
      },
      {
        heading: 'Timing is the message',
        paragraphs: [
          'Duration and easing carry meaning. Short, snappy motion reads as responsive. Slow, heavy motion reads as important or dramatic. Use the same timing for the same kind of action across a site, and visitors will learn the language without being told.',
          'A practical starting point: keep most interface motion between 200 and 400 milliseconds, use a gentle ease-out for things entering the screen, and reserve anything longer than half a second for moments that genuinely deserve attention.',
        ],
      },
      {
        heading: 'Less, but consistent',
        paragraphs: [
          'A site with three well-chosen animations feels more polished than a site with thirty. Pick a small set of motions, use them everywhere they apply, and cut the rest. Consistency is what makes motion feel designed rather than accidental.',
          'And always offer an off-ramp: reduced-motion support is not an edge case, it is a basic courtesy to visitors who need it.',
        ],
      },
    ],
    takeaway: 'Animation is a functional tool. Give it a job, give it consistent timing, and cut it when it has no job to do.',
  },
  {
    id: 'ai-assisted-development-2026',
    featured: true,
    category: 'AI',
    date: 'Oct 22, 2026',
    read: '6 min read',
    title: 'AI-Assisted Development in 2026: Speed Without Losing Craft',
    excerpt: 'AI tools now write a large share of first drafts. The craft has moved from typing code to reviewing it, and that changes how a good team works.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80',
    sections: [
      {
        heading: 'What actually changed',
        paragraphs: [
          'The biggest change in development this year is not that AI writes code. It is that the first draft of almost anything is now cheap, and the expensive part has moved to deciding whether that draft is correct, secure and maintainable.',
          'That shift rewards a different skill set. Reading code carefully, writing precise requirements, and testing edge cases matter more than they did when every line had to be typed by hand. Teams that treat AI output as a suggestion to review, rather than a result to ship, are the ones getting real value from it.',
        ],
      },
      {
        heading: 'Where AI helps most',
        paragraphs: [
          'AI is strongest on well-understood work: boilerplate, repetitive patterns, test scaffolding, migrations between known formats, and explaining unfamiliar code. It is weakest where judgement lives: architecture choices, security boundaries, and anything where the requirements themselves are unclear.',
          'A useful rule: let AI draft the parts you could already write yourself, and keep human attention for the parts you could not. If you cannot tell whether the output is right, that is the part that needs a human, not a faster model.',
        ],
      },
      {
        heading: 'A workflow that holds up',
        paragraphs: [
          'The workflow we recommend is simple. Start with a clear, written brief for the piece of work, even if it is short. Generate a draft, review it line by line, run the tests, and only then move on. Keep changes small so a bad draft is cheap to throw away.',
          'And keep the human in the loop on the boring parts too: dependency changes, database migrations and authentication code deserve a second pair of eyes precisely because they look routine.',
        ],
      },
    ],
    takeaway: 'AI makes the first draft fast. Craft now lives in the review, the brief and the tests — and that is where a good team should spend its time.',
  },
  {
    id: 'core-web-vitals-2026',
    featured: false,
    category: 'Performance',
    date: 'Oct 20, 2026',
    read: '5 min read',
    title: 'Core Web Vitals in 2026: What Actually Moves the Score',
    excerpt: 'Most sites fail the same few checks for the same few reasons. Here is the short list of fixes that move the score, in order.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
    sections: [
      {
        heading: 'Start with the largest contentful paint',
        paragraphs: [
          'Largest Contentful Paint measures how long it takes for the main content to appear. On most marketing and portfolio sites, the culprit is the same: a large hero image or a heavy font blocking the first paint, or a bundle of JavaScript that has to run before anything shows.',
          'The fixes, in order, are unglamorous: serve images at the size they are displayed, use modern formats, preload the hero image, and stop shipping JavaScript the first screen does not need. Each of these is small on its own; together they are usually the whole improvement.',
        ],
      },
      {
        heading: 'Layout shift is a design problem',
        paragraphs: [
          'Cumulative Layout Shift measures how much the page jumps around while it loads. Images without dimensions, fonts that swap late, and content injected above existing content are the usual causes.',
          'The fix is mostly discipline: reserve space for images and embeds, choose fonts with matching fallbacks, and never insert content above what the visitor is already reading. A page that stays still feels fast even before it is fast.',
        ],
      },
      {
        heading: 'Interaction is the newest bar',
        paragraphs: [
          'Interaction to Next Paint looks at how quickly the page responds when a visitor clicks, taps or types. Long tasks on the main thread are the enemy here: heavy scripts, unthrottled work and third-party widgets that all compete for the same moment.',
          'Split work into smaller pieces, defer what can wait, and audit third-party scripts regularly. A widget that nobody uses is not a feature; it is a tax on every interaction.',
        ],
      },
    ],
    takeaway: 'Web Vitals are not a mystery score. They are three questions: does the main content appear quickly, does the page stay still, and does it respond when touched. Fix them in that order.',
  },
  {
    id: 'interactive-3d-without-slowing-down',
    featured: false,
    category: 'Interactive',
    date: 'Oct 18, 2026',
    read: '6 min read',
    title: 'Interactive 3D on the Web Without Killing Performance',
    excerpt: '3D on a website grabs attention, but it is also the fastest way to drain a phone battery. Here is how to keep the wow and lose the cost.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop&q=80',
    sections: [
      {
        heading: 'Decide what the 3D is for',
        paragraphs: [
          'Before adding 3D to a page, decide its job. Is it the product itself, like a configurator a visitor needs to rotate? Or is it atmosphere, a background that sets a mood? The answer decides the budget.',
          'Atmosphere should be cheap: low polygon counts, simple materials, no shadows, and a frame rate cap. A product view can spend more, because the visitor asked for it by interacting. Spending a product budget on a background is how sites end up slow.',
        ],
      },
      {
        heading: 'The phone is the test device',
        paragraphs: [
          '3D that runs beautifully on a desktop graphics card can struggle on a mid-range phone, and most visitors will arrive on a phone. Test on a real device early, not at the end, and set a fallback: if the device cannot hold a steady frame rate, drop to a static image or a lighter scene automatically.',
          'A graceful fallback is not a failure. It is the difference between a visitor who sees a beautiful image and a visitor who sees a stuttering page.',
        ],
      },
      {
        heading: 'Load it only when it is needed',
        paragraphs: [
          'The simplest performance win is also the most overlooked: do not load the 3D scene until the visitor can see it, or until they ask for it. Lazy-load the scene, the textures and the library behind it, and keep the first paint free of all of it.',
          'Combined with a capped frame rate and a static fallback, this is usually enough to keep interactive 3D feeling premium instead of punishing.',
        ],
      },
    ],
    takeaway: 'Interactive 3D works when it has a job, a budget and a fallback. Give it all three, and it stays an experience instead of becoming a cost.',
  },
];

export function getJournalPostById(id: string): JournalPost | undefined {
  return JOURNAL_POSTS.find((post) => post.id === id);
}
