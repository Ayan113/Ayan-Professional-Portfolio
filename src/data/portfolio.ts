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
    title: 'Generative Vision AI',
    category: 'Generative AI Product',
    headline: 'A multimodal image generation system built for quality, iteration speed, and deployment-readiness.',
    problem:
      'Generative vision workflows often break down between experimentation and delivery because data preparation, model quality, and inference optimization are handled in separate silos.',
    solution:
      'Built a unified generation workflow around GAN-based exploration and diffusion-driven refinement, with reusable preprocessing, prompt-aware generation, quality evaluation, and optimized inference paths for higher-fidelity outputs.',
    stack: ['Python', 'PyTorch', 'GANs', 'Diffusion Models', 'OpenCV', 'FastAPI'],
    impact: [
      'Improved model quality by 18% through tuning, augmentation, and iterative evaluation.',
      'Reduced experimentation friction with a repeatable generation and evaluation pipeline.',
      'Framed the system as a product-ready creative engine rather than a research-only prototype.',
    ],
    highlight: 'Higher-fidelity generation with faster iteration loops',
  },
  {
    title: 'Insurance Claim AI Agent',
    category: 'Agentic AI System',
    headline: 'An autonomous workflow agent for faster claims handling with traceable decisions.',
    problem:
      'Insurance operations suffer from slow manual claim review, inconsistent decisions, and weak auditability across repetitive document-heavy workflows.',
    solution:
      'Designed an AI agent that interprets claim inputs, applies NLP-based extraction, routes task steps through workflow logic, and produces structured summaries with decision trails for human approval and operational visibility.',
    stack: ['Python', 'LLMs', 'NLP', 'Workflow Orchestration', 'FastAPI', 'PostgreSQL'],
    impact: [
      'Delivered 95% faster processing for repetitive claim workflows.',
      'Created auditable traces across reasoning steps, actions, and approvals.',
      'Reduced manual handoffs by combining agent automation with clear human checkpoints.',
    ],
    highlight: '95% faster claim workflow execution with auditability built in',
  },
  {
    title: 'Documind AI',
    category: 'RAG Application',
    headline: 'A grounded document intelligence system for answering questions over complex knowledge sources.',
    problem:
      'Document-heavy teams lose time manually searching PDFs, policies, and reports, while naive chat experiences hallucinate or fail to cite source context.',
    solution:
      'Built a RAG pipeline with chunking, embeddings, retrieval, context assembly, and answer generation so users can query large document collections through a fast, citation-aware interface.',
    stack: ['RAG', 'Embeddings', 'Vector Search', 'LLMs', 'Next.js', 'FastAPI'],
    impact: [
      'Turned static documents into an interactive knowledge surface.',
      'Improved trust through grounded retrieval and context-linked responses.',
      'Designed the architecture to scale from a single repository to evolving multi-document corpora.',
    ],
    highlight: 'Grounded Q&A over large document collections',
  },
  {
    title: 'FinInsight AI',
    category: 'Full Stack AI Assistant',
    headline: 'A financial intelligence copilot combining retrieval, chat, and voice-first interaction.',
    problem:
      'Financial information is fragmented across reports, metrics, and user questions, making it hard to move from raw data to actionable insight in one workflow.',
    solution:
      'Architected an AI assistant that blends RAG, conversational querying, insight summarization, and voice interaction so users can explore financial signals through natural language instead of manual dashboard hopping.',
    stack: ['TypeScript', 'Next.js', 'LLMs', 'RAG', 'Voice Interfaces', 'PostgreSQL'],
    impact: [
      'Unified retrieval, conversation, and voice into a single product experience.',
      'Improved exploration speed by translating complex data questions into guided conversational flows.',
      'Positioned the project as a full-stack AI product with user-facing clarity, not just a backend demo.',
    ],
    highlight: 'Chat + retrieval + voice in one financial copilot',
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
