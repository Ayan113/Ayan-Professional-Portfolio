'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';

import {
  aboutHighlights,
  approachSteps,
  contactLinks,
  experience,
  heroKeywords,
  heroMetrics,
  navigation,
  profile,
  projects,
  skillCategories,
  systemPrinciples,
} from '@/data/portfolio';

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-96px' }}
      variants={revealVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
        {description}
      </p>
    </Reveal>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.38.82 1.11.82 2.24v3.32c0 .32.22.69.82.57A12 12 0 0 0 12 0Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM3 9h4v12H3Zm7 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.66 4.77 6.11V21h-4v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95V21h-4Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m12 3 8 4.5-8 4.5-8-4.5Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M10 4a3 3 0 0 0-6 0v4a3 3 0 0 0 1.5 2.6A3.5 3.5 0 0 0 9 17v1a3 3 0 0 0 6 0v-1a3.5 3.5 0 0 0 3.5-6.4A3 3 0 0 0 20 8V4a3 3 0 0 0-6 0" />
      <path d="M12 4v16" />
      <path d="M9 8h3" />
      <path d="M12 8h3" />
      <path d="M8.5 12H12" />
      <path d="M12 12h3.5" />
    </svg>
  );
}

function KeywordTicker() {
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setKeywordIndex((current) => (current + 1) % heroKeywords.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-slate-200 shadow-[0_18px_50px_rgba(8,15,37,0.35)] backdrop-blur-xl">
      <span className="font-mono text-cyan-300">$ deploy --mode</span>
      <div className="relative min-w-[180px] overflow-hidden font-mono text-white">
        <AnimatePresence mode="wait">
          <motion.span
            key={heroKeywords[keywordIndex]}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2"
          >
            {heroKeywords[keywordIndex]}
            <span className="text-cyan-300">_</span>
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  category,
  headline,
  problem,
  solution,
  stack,
  impact,
  highlight,
}: (typeof projects)[number]) {
  return (
    <Reveal>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25 }}
        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_80px_rgba(3,8,20,0.35)] backdrop-blur-xl md:p-7"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_45%)]" />
        </div>
        <div className="relative">
          <div className="flex flex-col gap-6 border-b border-white/8 pb-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                {category}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white md:text-[2rem]">
                {title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">{headline}</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4 md:max-w-xs">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">Impact Signal</p>
              <p className="mt-2 text-lg font-semibold text-white">{highlight}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-black/15 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">Problem</p>
              <p className="mt-3 text-sm leading-7 text-slate-300 md:text-[15px]">{problem}</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/15 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">Solution</p>
              <p className="mt-3 text-sm leading-7 text-slate-300 md:text-[15px]">{solution}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-2xl border border-white/8 bg-black/15 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">Tech Stack</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/15 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">Impact</p>
              <div className="mt-4 space-y-3">
                {impact.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-slate-300 md:text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  return (
    <main className="portfolio-shell relative overflow-hidden text-slate-100">
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-[linear-gradient(90deg,rgba(34,211,238,0.9),rgba(59,130,246,0.9),rgba(168,85,247,0.85))]"
      />

      <div className="ambient-grid" />
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="ambient-noise" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(7,11,21,0.72)] backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 bg-white/6 font-display text-sm font-semibold text-white">
              AC
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-white">{profile.name}</p>
              <p className="text-xs text-slate-400">AI Engineer</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/12 hover:text-white"
          >
            Let&apos;s build
            <ArrowUpRightIcon />
          </a>
        </div>
      </header>

      <section id="home" className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
              <BrainIcon />
              {profile.title}
            </div>

            <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
              {profile.heroHeadline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              {profile.heroDescription}
            </p>

            <div className="mt-8">
              <KeywordTicker />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                View Projects
                <ArrowUpRightIcon />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              >
                Contact Me
                <ArrowUpRightIcon />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <span>{profile.location}</span>
              <span className="h-1 w-1 rounded-full bg-slate-500" />
              <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
                GitHub
              </a>
              <span className="h-1 w-1 rounded-full bg-slate-500" />
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] p-4 shadow-[0_40px_120px_rgba(2,8,23,0.48)] backdrop-blur-2xl md:p-5">
              <div className="absolute inset-x-6 top-5 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
              <div className="grid gap-5 xl:grid-cols-[0.88fr_1.12fr]">
                <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-white/8">
                    <Image
                      src="/photo.png"
                      alt="Portrait of Ayan Chatterjee"
                      fill
                      priority
                      sizes="(min-width: 1280px) 24rem, (min-width: 768px) 40vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-2xl border border-white/12 bg-[rgba(6,10,20,0.74)] p-4 backdrop-blur-xl">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-200/80">
                      System Focus
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white">
                      LLM applications, agent orchestration, multimodal UX, and scalable backend design.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[26px] border border-white/10 bg-black/20 p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <StackIcon />
                        Runtime blueprint
                      </div>
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-200">
                        live
                      </span>
                    </div>
                    <div className="mt-5 space-y-3 font-mono text-sm text-slate-300">
                      <div className="terminal-line">
                        <span className="text-cyan-300">$</span> ingest context
                      </div>
                      <div className="terminal-line">
                        <span className="text-cyan-300">$</span> retrieve signals
                      </div>
                      <div className="terminal-line">
                        <span className="text-cyan-300">$</span> orchestrate reasoning
                      </div>
                      <div className="terminal-line">
                        <span className="text-cyan-300">$</span> ship usable product
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                    {heroMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-[24px] border border-white/10 bg-white/[0.045] p-5"
                      >
                        <p className="font-display text-3xl font-semibold text-white">{metric.value}</p>
                        <p className="mt-1 text-sm font-medium text-slate-200">{metric.label}</p>
                        <p className="mt-3 text-sm leading-6 text-slate-400">{metric.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="About"
          title="AI engineering across the full system, not only the model."
          description="I work at the intersection of AI capability, product thinking, and software execution. That means I can move from experimentation to architecture to user experience without losing the system picture."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="rounded-[30px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_30px_90px_rgba(2,8,23,0.34)] backdrop-blur-xl md:p-8">
            <div className="space-y-5 text-base leading-8 text-slate-300">
              {aboutHighlights.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-3 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.85)]" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">Deep Work Areas</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  GANs, diffusion models, retrieval systems, autonomous agents, inference optimization, full stack AI UX.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">Execution Lens</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Idea to MVP to scalable AI product with pragmatic focus on latency, trust, accuracy, and maintainability.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="rounded-[30px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_30px_90px_rgba(2,8,23,0.34)] backdrop-blur-xl md:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-100">
                <BrainIcon />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-white">What I optimize for</p>
                <p className="mt-1 text-sm text-slate-400">Systems that are useful, scalable, and trusted.</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {systemPrinciples.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.02))] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-200/80">Engineering signal</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Built systems handling 50GB+ data pipelines, improved model performance by 18%, and optimized inference and workflow execution for real product environments.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Projects"
          title="AI products framed as systems, not side experiments."
          description="Each case study is presented like a product build: a real problem, a deliberate architecture, and measurable or product-relevant outcomes."
        />

        <div className="mt-12 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Skills"
          title="A stack built for modern AI product delivery."
          description="From model engineering to backend services to polished user interfaces, the stack is organized around shipping real AI applications end to end."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <Reveal key={category.title}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_70px_rgba(2,8,23,0.28)] backdrop-blur-xl"
              >
                <p className="font-display text-xl font-semibold text-white">{category.title}</p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Built on execution across AI, backend, and product delivery."
          description="The experience story is outcome-first: how each role sharpened the ability to design, ship, and scale software systems that can support intelligent products."
        />

        <div className="mt-12 relative space-y-5 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-[linear-gradient(180deg,rgba(34,211,238,0.35),rgba(255,255,255,0))] md:before:left-[19px]">
          {experience.map((item) => (
            <Reveal key={`${item.company}-${item.period}`} className="relative pl-12">
              <div className="absolute left-0 top-7 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.22)]">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_70px_rgba(2,8,23,0.28)] backdrop-blur-xl md:p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-display text-2xl font-semibold text-white">{item.role}</p>
                    <p className="mt-1 text-base text-slate-300">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-300">
                    {item.period}
                  </span>
                </div>
                <p className="mt-5 text-base leading-8 text-slate-300">{item.outcome}</p>
                <div className="mt-5 space-y-3">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3 text-sm leading-7 text-slate-400 md:text-[15px]">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="approach" className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Approach"
          title="My AI Engineering Approach"
          description="This is how I turn an AI idea into a working system: align the problem, design the intelligence layer, ship the product surface, and continuously optimize what matters."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {approachSteps.map((step) => (
            <Reveal key={step.step}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_70px_rgba(2,8,23,0.28)] backdrop-blur-xl"
              >
                <div className="absolute right-5 top-5 font-mono text-[11px] tracking-[0.28em] text-slate-500">
                  {step.step}
                </div>
                <p className="font-display text-2xl font-semibold text-white">{step.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300 md:text-[15px]">{step.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build AI products that feel production-ready from day one."
          description="If you need someone who can think through model behavior, orchestration, APIs, and user experience as one system, I’m ready to collaborate."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr_1fr]">
          {contactLinks.map((item) => {
            const icon =
              item.label === 'GitHub' ? <GithubIcon /> : item.label === 'LinkedIn' ? <LinkedinIcon /> : <MailIcon />;

            return (
              <Reveal key={item.label}>
                <motion.a
                  href={item.href}
                  target={item.label === 'Email' ? undefined : '_blank'}
                  rel={item.label === 'Email' ? undefined : 'noreferrer'}
                  whileHover={{ y: -6 }}
                  className="group block h-full rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_70px_rgba(2,8,23,0.28)] backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-slate-100">
                      {icon}
                    </div>
                    <div className="text-slate-500 transition group-hover:text-white">
                      <ArrowUpRightIcon />
                    </div>
                  </div>
                  <p className="mt-6 font-display text-2xl font-semibold text-white">{item.label}</p>
                  <p className="mt-2 break-all text-sm text-slate-300">{item.value}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.note}</p>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-5 pb-10 pt-6 md:px-8">
        <div className="flex flex-col gap-4 border-t border-white/8 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Built for AI engineering credibility.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="transition hover:text-white">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
