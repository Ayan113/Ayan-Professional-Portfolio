export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type Project = {
  title: string;
  category: string;
  headline: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string[];
  highlight: string;
  links: ProjectLink[];
};

export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  outcome: string;
  bullets: string[];
};

export type ApproachStep = {
  step: string;
  title: string;
  description: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  note: string;
};

export const profile = {
  name: 'Ayan Chatterjee',
  title: 'AI Engineer | Generative AI | Agentic Systems | Full Stack AI Developer',
  location: 'Bengaluru, India',
  email: 'your.email@domain.com',
  github: 'https://github.com/Ayan113',
  linkedin: 'https://www.linkedin.com/in/ayan-chatterjee-24aa3a207/',
  heroHeadline: 'Building Intelligent Systems with AI, GenAI & Autonomous Agents',
  heroDescription:
    'AI Engineer focused on end-to-end intelligent products across LLM applications, RAG pipelines, multimodal workflows, and scalable backend systems. I build the model layer, the orchestration layer, and the user-facing product experience.',
};

export const navigation: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

export const heroKeywords = [
  'LLM Pipelines',
  'RAG Systems',
  'Autonomous Agents',
  'Multimodal AI',
  'Full Stack AI Apps',
];

export const heroMetrics: Metric[] = [
  {
    value: '50GB+',
    label: 'Pipeline Scale',
    detail: 'Designed data workflows capable of handling large-volume processing pipelines.',
  },
  {
    value: '18%',
    label: 'Model Lift',
    detail: 'Improved model quality and accuracy through tuning, evaluation, and data iteration.',
  },
  {
    value: '95%',
    label: 'Faster Ops',
    detail: 'Accelerated claim-processing workflows with an auditable AI agent architecture.',
  },
];

export const aboutHighlights = [
  'AI Engineer with hands-on work across Generative AI, Machine Learning, Deep Learning, and production-ready full stack application development.',
  'Comfortable designing with GANs, diffusion models, RAG pipelines, AI agents, backend APIs, and frontend product surfaces in the same system.',
  'Focused on shipping usable AI systems that balance model quality, retrieval quality, latency, cost, and human trust.',
];

export const systemPrinciples = [
  'Production-grade AI systems over notebook-only demos',
  'Grounded LLM responses through retrieval and orchestration',
  'Human-in-the-loop design for auditability and trust',
  'Fast iteration from idea to MVP to scalable product',
];

export const projects: Project[] = [
  {
    title: 'FinInsight AI',
    category: 'Financial GenAI Platform',
    headline:
      'A full-stack financial intelligence workspace that blends RAG, conversational analysis, portfolio diagnostics, market insights, visual analytics, and voice interaction.',
    problem:
      'Financial research is usually split across dashboards, reports, chat tools, and manual comparison flows, which makes decision support slow and fragmented.',
    solution:
      'Built a modular AI product with Next.js App Router, route handlers, a provider-agnostic LLM layer, document-grounded retrieval, portfolio analysis logic, market intelligence workflows, and optional voice support in one interface.',
    stack: ['Next.js', 'TypeScript', 'Framer Motion', 'RAG', 'Vercel Blob', 'Voice AI'],
    impact: [
      'Unifies chatbot, document-grounded RAG, portfolio analysis, market theme exploration, charts, and voice interaction in one production-oriented app.',
      'Implements persistent vector storage through Vercel Blob with local fallback rather than keeping retrieval state ephemeral.',
      'Uses a modular controller and service architecture instead of a single demo-only code path.',
    ],
    highlight: 'Financial AI workspace with chat, RAG, analytics, and voice',
    links: [
      { label: 'Live App', href: 'https://fin-x-ai-six.vercel.app/', primary: true },
      { label: 'GitHub Repo', href: 'https://github.com/Ayan113/FinX_AI' },
    ],
  },
  {
    title: 'Documind AI',
    category: 'RAG Application',
    headline:
      'A full-stack document intelligence system for chatting with PDFs through a retrieval-augmented generation pipeline.',
    problem:
      'Long PDFs are painful to search manually, and generic chat over documents often fails to ground answers in real source context.',
    solution:
      'Built a multi-document RAG flow with PDF ingestion, chunking, embeddings, FAISS retrieval, streaming responses, and source attribution so users can ask questions and get context-aware answers with references.',
    stack: ['FastAPI', 'LangChain', 'FAISS', 'LLaMA 3', 'React', 'Tailwind CSS'],
    impact: [
      'Supports multiple PDFs and document switching instead of limiting the experience to a single uploaded source.',
      'Streams answers and shows source snippets with page references to improve trust in the response.',
      'Covers the full RAG workflow from document ingestion to grounded answer generation.',
    ],
    highlight: 'RAG PDF chat with source-grounded answers',
    links: [
      { label: 'Live App', href: 'https://documind-ai-navy.vercel.app/', primary: true },
      { label: 'GitHub Repo', href: 'https://github.com/Ayan113/Documind.AI' },
    ],
  },
  {
    title: 'Agentic AI for Autonomous Network Optimization',
    category: 'Agentic AI System',
    headline:
      'A multi-agent AI system for autonomous network monitoring and optimization with LLM-powered decision-making and a real-time dashboard.',
    problem:
      'Network operations are often reactive, noisy, and manually coordinated, which slows response time when health degrades or incidents emerge.',
    solution:
      'Designed a coordinated Monitor → Decision → Action loop with specialized agents, network simulation, LLM-backed analysis, a feedback layer, and a web dashboard for interactive control and visibility.',
    stack: ['Python', 'FastAPI', 'LLM Agents', 'Network Simulation', 'Render', 'Dashboard UI'],
    impact: [
      'Project README reports network health improvement from 93 to 97 during demo runs.',
      'Project README reports latency reduction from 29.7ms to 20.1ms and packet loss reduction from 1.40% to 0.39%.',
      'Transforms agent orchestration into a visible product with REST APIs and scenario simulation, not just a backend concept.',
    ],
    highlight: 'Multi-agent optimization loop with live network simulation',
    links: [
      {
        label: 'Live Demo',
        href: 'https://agentic-network-optimizeragentic-ai-for.onrender.com',
        primary: true,
      },
      { label: 'GitHub Repo', href: 'https://github.com/Ayan113/Agentic-AI-for-Autonomous-Network-Optimization' },
    ],
  },
  {
    title: 'Cloud-Based Intelligent Support Ticket Classification Platform',
    category: 'ML Classification System',
    headline:
      'A production-style support ticket triage platform that classifies category and priority through supervised machine learning.',
    problem:
      'Support teams lose time on manual triage, misrouted tickets, and inconsistent prioritization across high ticket volumes.',
    solution:
      'Built a FastAPI-based ML system using TF-IDF and Logistic Regression with confidence scores, batch classification, Swagger docs, Docker packaging, and AWS-oriented deployment paths.',
    stack: ['Python', 'FastAPI', 'scikit-learn', 'Docker', 'AWS', 'SQLite'],
    impact: [
      'Project README positions the system as reducing triage time by 90% with 85%+ category accuracy.',
      'Supports confidence-aware human-in-the-loop review and batch workflows instead of only single-ticket predictions.',
      'Ships live API docs and deployment-ready containerization for production-style evaluation.',
    ],
    highlight: '90% faster ticket triage with ML-driven routing',
    links: [
      { label: 'Live Demo', href: 'https://ticket-classifier-api-ojuy.onrender.com', primary: true },
      { label: 'API Docs', href: 'https://ticket-classifier-api-ojuy.onrender.com/docs' },
      { label: 'GitHub Repo', href: 'https://github.com/Ayan113/Cloud-Based-Intelligent-Support-Ticket-Classification-Platform' },
    ],
  },
  {
    title: 'MediInsight AI',
    category: 'Healthcare GenAI Product',
    headline:
      'A full-stack healthcare GenAI application combining multimodal imaging support, wellness planning, mental wellness chat, and document question answering.',
    problem:
      'Healthcare demos often isolate one capability at a time, which makes it hard to show how multimodal AI, retrieval, and usable interfaces work together in a single product.',
    solution:
      'Built a React and Node.js application powered by Groq text and vision inference, with a local RAG pipeline, modular backend services, and separate frontend/backend deployments for realistic product structure.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Groq', 'Local RAG'],
    impact: [
      'Combines imaging analysis, health planning, mental wellness chat, and document QA in one interview-ready healthcare AI experience.',
      'Uses Groq for both text and vision flows while keeping retrieval grounded through local chunk search and citations.',
      'Separates frontend and backend services cleanly for more realistic deployment and iteration workflows.',
    ],
    highlight: 'Healthcare AI app with multimodal and retrieval workflows',
    links: [
      { label: 'Frontend', href: 'https://frontend-black-rho-86.vercel.app/', primary: true },
      { label: 'Backend', href: 'https://backend-gilt-iota-74.vercel.app/' },
      { label: 'GitHub Repo', href: 'https://github.com/Ayan113/Medi-Insight_AI' },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI / ML',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Deep Learning', 'Computer Vision'],
  },
  {
    title: 'Generative AI',
    skills: ['GANs', 'Diffusion Models', 'Stable Diffusion', 'LLMs', 'Prompt Engineering', 'Embeddings'],
  },
  {
    title: 'Agentic AI',
    skills: ['AI Agents', 'Workflow Orchestration', 'Tool Use', 'RAG Pipelines', 'Evaluation Loops', 'Human-in-the-Loop'],
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'REST APIs', 'Node.js', 'TypeScript', 'Authentication', 'System Integration'],
  },
  {
    title: 'Data',
    skills: ['Pandas', 'PostgreSQL', 'Vector Stores', 'Data Pipelines', 'ETL', 'Experiment Data Handling'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'Deployment', 'GitHub Actions', 'Linux', 'Cloud Workflows'],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Google for Developers',
    role: 'AI/ML Intern',
    period: 'Jul 2024 - Sep 2024',
    outcome: 'Strengthened the foundation for building model-driven systems with real-world infrastructure awareness.',
    bullets: [
      'Worked through AI/ML workflows spanning model experimentation, evaluation, and practical deployment thinking.',
      'Built stronger intuition for how data quality, model choice, and infrastructure constraints shape product outcomes.',
      'Converted academic ML concepts into systems-level engineering decisions.',
    ],
  },
  {
    company: 'Unified Mentor Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    period: 'Sep 2024 - Jan 2025',
    outcome: 'Shipped full-stack applications that connect frontend UX, backend services, and data workflows cleanly.',
    bullets: [
      'Built end-to-end web applications with scalable APIs, database integration, and responsive interfaces.',
      'Improved delivery quality by thinking across both product UX and service architecture.',
      'Developed the execution muscle that now supports building full stack AI applications, not just standalone models.',
    ],
  },
  {
    company: 'Compsoft Technologies',
    role: 'Web Developer Intern',
    period: 'Oct 2022 - Nov 2022',
    outcome: 'Built the execution baseline for shipping reliable, client-facing software under real delivery constraints.',
    bullets: [
      'Developed websites and functional templates connected to structured data flows.',
      'Worked on turning business requirements into working interfaces and usable page systems.',
      'Built early experience in translating technical implementation into end-user value.',
    ],
  },
];

export const approachSteps: ApproachStep[] = [
  {
    step: '01',
    title: 'Problem Understanding',
    description:
      'Start with the business bottleneck, user workflow, and trust requirements before selecting any model or framework.',
  },
  {
    step: '02',
    title: 'Data + Retrieval Strategy',
    description:
      'Define whether the system needs training data, retrieval context, tool access, or a hybrid design to stay grounded.',
  },
  {
    step: '03',
    title: 'Model Selection',
    description:
      'Choose the right layer for the job: LLM, NLP pipeline, computer vision model, diffusion workflow, or an ensemble approach.',
  },
  {
    step: '04',
    title: 'System Design',
    description:
      'Translate the intelligence layer into a real architecture such as RAG, agent workflows, evaluation loops, and API boundaries.',
  },
  {
    step: '05',
    title: 'Deployment',
    description:
      'Ship the system behind robust APIs, usable interfaces, and infrastructure that can support real traffic and iteration.',
  },
  {
    step: '06',
    title: 'Optimization',
    description:
      'Continuously improve latency, cost, accuracy, and user trust using feedback loops, testing, and performance instrumentation.',
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    note: 'Best for project discussions, consulting, and AI product collaboration.',
  },
  {
    label: 'LinkedIn',
    value: 'ayan-chatterjee-24aa3a207',
    href: profile.linkedin,
    note: 'Professional updates, experience context, and direct networking.',
  },
  {
    label: 'GitHub',
    value: 'github.com/Ayan113',
    href: profile.github,
    note: 'Code, experiments, shipping velocity, and engineering depth.',
  },
];

export const portfolioStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  description: profile.heroDescription,
  url: profile.github,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    'AI Engineering',
    'Generative AI',
    'Autonomous Agents',
    'RAG Pipelines',
    'LLM Applications',
    'Full Stack AI Development',
    'PyTorch',
    'FastAPI',
    'Next.js',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressCountry: 'India',
  },
};
