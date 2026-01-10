'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// ============ DATA ============

const experience = [
  {
    company: 'Google',
    role: 'AI/ML Intern',
    period: 'Jul - Sep 2024',
    description: 'Completed 10-week AI-ML Virtual Internship supported by Google for Developers. Developed machine learning models and gained hands-on experience with AI infrastructure.',
    icon: '🤖',
    type: 'AI/ML',
    certificate: '/certificates/google-aiml-internship.jpg',
  },
  {
    company: 'Unified Mentor Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    period: 'Sep 2024 - Jan 2025',
    description: 'Built end-to-end web applications using modern tech stacks. Developed scalable APIs, integrated databases, and implemented responsive front-end interfaces.',
    icon: '💻',
    type: 'Development',
    certificate: '/certificates/unified-mentor-internship.jpg',
  },
  {
    company: 'Compsoft Technologies',
    role: 'Web Developer Intern',
    period: 'Oct - Nov 2022',
    description: 'Developed dynamic websites and functional web templates for clients. Designed functional web pages, used databases to collect, store, and sort data.',
    icon: '🌐',
    type: 'Web Development',
    certificate: '/certificates/compsoft-internship.jpg',
  },
];

const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    institution: 'Visvesvaraya Technological University (AMC Engineering College)',
    location: 'Bengaluru, Karnataka, India',
    period: '2021 - 2025',
    grade: 'CGPA: 7.96 | First Class with Distinction',
    icon: '🎓',
    image: '/certificates/bachelors-degree.jpg',
  },
  {
    degree: 'Higher Secondary Education (Class 12th)',
    institution: 'D.A.V. Model School',
    location: 'Durgapur, West Bengal, India',
    period: '2019 - 2021',
    grade: 'CGPA: 8.70',
    icon: '📚',
  },
];

const skillCategories = [
  {
    title: 'Full Stack',
    icon: '⚙️',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'PostgreSQL']
  },
  {
    title: 'AI/ML',
    icon: '🧠',
    skills: ['Python', 'TensorFlow', 'Scikit-learn', 'NLP', 'FastAPI', 'Pandas', 'NumPy']
  },
  {
    title: 'DevOps',
    icon: '🚀',
    skills: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Linux', 'Nginx', 'Render']
  },
  {
    title: 'Software Engineering',
    icon: '🏗️',
    skills: ['System Design', 'REST APIs', 'Git', 'SQL', 'DSA', 'Agile', 'Testing']
  }
];

const projects = [
  {
    title: 'Cloud-Based Ticket Classification',
    description: 'AI-powered customer support ticket classification using TF-IDF + Logistic Regression. Features interactive web UI, FastAPI REST API, Docker deployment.',
    category: 'AI/ML',
    icon: '🎫',
    tags: ['Python', 'FastAPI', 'Docker', 'AWS', 'NLP'],
    github: 'https://github.com/Ayan113/Cloud-Based-Intelligent-Support-Ticket-Classification-Platform',
    demo: 'https://ticket-classifier-api-ojuy.onrender.com/',
  },
  {
    title: 'AWS Glue PySpark ETL Pipeline',
    description: 'Production-grade ETL pipeline built with AWS Glue and PySpark for processing large-scale data transformations.',
    category: 'DevOps',
    icon: '📊',
    tags: ['AWS', 'PySpark', 'Glue', 'S3', 'ETL'],
    github: 'https://github.com/Ayan113/AWS-Glue-PySpark-ETL-Pipeline',
  },
  {
    title: 'Real-Time Collaboration Platform',
    description: 'Multi-tenant real-time collaboration platform with live updates and synchronized editing using Socket.io.',
    category: 'Full Stack',
    icon: '👥',
    tags: ['MERN', 'Socket.io', 'Multi-tenant', 'Real-time'],
    github: 'https://github.com/Ayan113/Real-Time-Multi-Tenant-Collaboration-Platform',
    demo: 'https://mern-deploy-frontend-4s9t.onrender.com/',
  },
  {
    title: 'Pulse Token Discovery Hub',
    description: 'Real-time cryptocurrency token discovery and tracking platform with live price updates and market analytics.',
    category: 'Full Stack',
    icon: '💰',
    tags: ['TypeScript', 'React', 'Web3', 'Crypto'],
    github: 'https://github.com/Ayan113/Pulse-Token-discovery-hub',
    demo: 'https://pulse-token-discovery-hub.vercel.app/',
  },
  {
    title: 'Axcent-AI',
    description: 'AI tool that converts typed sentences into real-time voice with accent of your choice.',
    category: 'AI/ML',
    icon: '🎙️',
    tags: ['JavaScript', 'Speech API', 'AI'],
    github: 'https://github.com/Ayan113/Axcent-AI',
    demo: 'https://axcent-ai.vercel.app',
  },
  {
    title: 'CryptoTrace',
    description: 'Blockchain fraud detection app that flags suspicious crypto transactions and scam wallets.',
    category: 'Full Stack',
    icon: '🔗',
    tags: ['React', 'Node.js', 'MongoDB', 'Blockchain'],
    github: 'https://github.com/Ayan113/CryptoTrace',
  },
];

// Certifications and Achievements with images
const certifications = [
  {
    title: 'Winner – TechTonic National Hackathon',
    issuer: 'Dayananda Sagar Academy / Oracle',
    date: 'Jul 2024',
    icon: '🏆',
    image: '/certificates/techtonic-hackathon-winner.jpg',
    isAchievement: true,
    description: 'TechTonic 2024 - National Level Hackathon organized by Dayananda Sagar Academy of Engineering and Technology. Our team DedSec secured 1st place, winning a cash prize of Rs 50,000, trophy, medals, and certificates.',
  },
  {
    title: 'Xartup Fellowship',
    issuer: 'Xartup (Startup Accelerator)',
    date: 'Sep 2021',
    icon: '🚀',
    image: '/certificates/xartup-fellowship.jpg',
    isAchievement: true,
    description: 'Selected for the Xartup Fellowship - a prestigious startup accelerator program. September 2021 cohort member, learning entrepreneurship and startup building fundamentals.',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Jan 2025',
    icon: '☁️',
    image: '/certificates/aws-cloud-practitioner.jpg',
  },
  {
    title: 'SQL (Basic) Certification',
    issuer: 'HackerRank',
    date: 'Dec 2025',
    icon: '🗃️',
    image: '/certificates/sql-hackerrank.jpg',
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    description: 'Check out my projects and code',
    icon: 'github',
    url: 'https://github.com/Ayan113',
  },
  {
    name: 'LinkedIn',
    description: 'Connect with me professionally',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/ayan-chatterjee-24aa3a207/',
  },
  {
    name: 'Instagram',
    description: 'Follow my journey',
    icon: 'instagram',
    url: 'https://www.instagram.com/ayann_c/',
  },
];

// ============ 3D COMPONENTS ============

function Particles({ count = 80, isDark }: { count?: number; isDark: boolean }) {
  const mesh = useRef<THREE.Points>(null);
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 15;
  }

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.03;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={isDark ? "#00ff88" : "#6366f1"}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingIcosahedron({ isDark }: { isDark: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron ref={mesh} args={[1, 1]} position={[3, 1, -2]}>
        <meshStandardMaterial
          color={isDark ? "#00ff88" : "#6366f1"}
          wireframe
          transparent
          opacity={0.3}
        />
      </Icosahedron>
    </Float>
  );
}

function AnimatedSphere({ isDark }: { isDark: boolean }) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere args={[1.5, 64, 64]} position={[-3, 0, -3]}>
        <MeshDistortMaterial
          color={isDark ? "#00cc6a" : "#8b5cf6"}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.4}
        />
      </Sphere>
    </Float>
  );
}

function Scene3D({ isDark }: { isDark: boolean }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color={isDark ? "#00ff88" : "#6366f1"} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color={isDark ? "#00cc6a" : "#8b5cf6"} />
      <Particles count={100} isDark={isDark} />
      <FloatingIcosahedron isDark={isDark} />
      <AnimatedSphere isDark={isDark} />
    </>
  );
}

// ============ ANIMATION VARIANTS ============

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

// ============ CUSTOM CURSOR ============

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover listeners to clickable elements
    const clickables = document.querySelectorAll('a, button, .clickable, .project-card, .cert-card, .social-card');
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isHovering ? 2.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 28 }}
      />
    </>
  );
}

// ============ CHATBOT ============

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm Ayan's AI assistant. Ask me anything about his skills, projects, or experience!"
    }
  ]);
  const [input, setInput] = useState('');

  const suggestions = [
    "What's his current role?",
    "Education background?",
    "Top projects?",
    "Tech stack?"
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', content: input }]);

    // Simple AI response logic
    setTimeout(() => {
      let response = "I can help you learn about Ayan! He's a Full Stack Developer & AI/ML Engineer.";

      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('skill') || lowerInput.includes('tech')) {
        response = "Ayan is skilled in React, Next.js, Python, Node.js, AWS, Docker, and AI/ML technologies like TensorFlow and Scikit-learn.";
      } else if (lowerInput.includes('project')) {
        response = "Ayan has built impressive projects including an AI-powered Ticket Classification system, AWS ETL pipelines, and a Real-Time Collaboration Platform.";
      } else if (lowerInput.includes('experience') || lowerInput.includes('work')) {
        response = "Ayan has interned at Google (AI/ML), Unified Mentor (Full Stack), and Compsoft Technologies (Web Dev).";
      } else if (lowerInput.includes('education') || lowerInput.includes('degree')) {
        response = "Ayan holds a B.E. in Computer Science from VTU (AMC Engineering College) with First Class with Distinction.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('reach')) {
        response = "You can connect with Ayan on LinkedIn or check out his GitHub for projects!";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 500);

    setInput('');
  };

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window glass-card"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            <div className="chatbot-header">
              <div className="chatbot-avatar">🤖</div>
              <div>
                <div className="chatbot-name">Ayan&apos;s Assistant</div>
                <div className="chatbot-status">● Online</div>
              </div>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chatbot-message ${msg.role}`}>
                  {msg.content}
                </div>
              ))}
            </div>

            <div className="chatbot-suggestions">
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => handleSuggestion(s)} className="suggestion-chip">
                  {s}
                </button>
              ))}
            </div>

            <div className="chatbot-input-container">
              <input
                type="text"
                className="chatbot-input"
                placeholder="Ask about Ayan..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button className="chatbot-send" onClick={handleSend}>
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ============ COMPONENTS ============

function Navbar({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-inner">
        <a href="#" className="nav-logo">AC</a>
        <div className="nav-links">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#certifications" className="nav-link">Certifications</a>
          <a href="#connect" className="nav-link">Contact</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

function Hero({ isDark }: { isDark: boolean }) {
  const roles = ['Full Stack Developer', 'AI/ML Engineer', 'Software Engineer'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.substring(0, displayText.length + 1));
        if (displayText === role) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(role.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section className="hero" id="home">
      <div className="animated-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>
      <div className="grid-pattern" />

      <div className="canvas-container">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <Scene3D isDark={isDark} />
          </Canvas>
        </Suspense>
      </div>

      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div className="hero-badge" variants={fadeInUp}>
          <span>🚀</span>
          <span>Open to Opportunities</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={fadeInUp}>
          Ayan Chatterjee
        </motion.h1>

        <motion.div className="hero-subtitle" variants={fadeInUp}>
          <span className="typing-text">{displayText}</span>
        </motion.div>

        <motion.p className="hero-description" variants={fadeInUp}>
          B.Tech CSE graduate passionate about building scalable software,
          exploring AI/ML, and crafting clean, impactful solutions.
          Based in Bengaluru, India.
        </motion.p>

        <motion.div className="hero-ctas" variants={fadeInUp}>
          <a href="#experience" className="btn btn-primary">
            <span>View Journey</span>
            <span>→</span>
          </a>
          <a href="https://drive.google.com/file/d/12IVE9GVN50Ue9HxbrlWENGs0avBnxIFp/view?usp=sharing" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <span>📄</span>
            <span>Download Resume</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function WorkExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section className="section section-alt" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and key roles
          </p>
        </motion.div>

        <motion.div
          className="roadmap"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="roadmap-item"
              variants={fadeInLeft}
            >
              <div className="roadmap-node">
                <span>{exp.icon}</span>
              </div>
              <div className="roadmap-card glass-card">
                <div className="roadmap-period">
                  <span>📅</span>
                  <span>{exp.period}</span>
                </div>
                <h3 className="roadmap-company">{exp.company}</h3>
                <p className="roadmap-role">{exp.role}</p>
                <p className="roadmap-description">{exp.description}</p>
                {exp.certificate && (
                  <div
                    className="roadmap-cert-preview clickable"
                    onClick={() => setSelectedCert(exp.certificate || null)}
                  >
                    <img src={exp.certificate} alt={`${exp.company} Certificate`} />
                    <span>🔍 View Certificate</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div
          className="cert-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            className="cert-modal"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            <img src={selectedCert} alt="Certificate" className="cert-modal-image" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section" id="education" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic background and qualifications
          </p>
        </motion.div>

        <motion.div
          className="education-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card glass-card"
              variants={scaleIn}
            >
              <div className="education-icon">{edu.icon}</div>
              {edu.image && (
                <div
                  className="education-image-container clickable"
                  onClick={() => setSelectedImage(edu.image || null)}
                >
                  <img src={edu.image} alt={edu.degree} className="education-image" />
                  <div className="education-image-overlay">
                    <span>🔍 View Certificate</span>
                  </div>
                </div>
              )}
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-location">{edu.location}</p>
              <p className="education-period">{edu.period}</p>
              {edu.grade && <p className="education-grade">{edu.grade}</p>}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          className="cert-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="cert-modal"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cert-modal-close" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage} alt="Certificate" className="cert-modal-image" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

function TechnicalExpertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section section-alt" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          className="skills-container"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category glass-card clickable"
              variants={scaleIn}
            >
              <div className="skill-category-icon">{category.icon}</div>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-chips">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcasing my best engineering work
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card clickable"
              variants={fadeInUp}
            >
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary project-link"
                  >
                    <span>⭐</span>
                    <span>GitHub</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary project-link"
                    >
                      <span>🚀</span>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section className="section section-alt" id="certifications" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Professional credentials and achievements
          </p>
        </motion.div>

        <motion.div
          className="certifications-grid-large"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`cert-card-large glass-card clickable ${cert.isAchievement ? 'achievement-card' : ''}`}
              variants={scaleIn}
              onClick={() => setSelectedCert(cert.image)}
            >
              <div className="cert-image-large-container">
                <img src={cert.image} alt={cert.title} className="cert-image-large" />
                <div className="cert-image-overlay">
                  <span>🔍 View Full Size</span>
                </div>
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.description && <p className="cert-description">{cert.description}</p>}
                <p className="cert-date">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <motion.div
          className="cert-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            className="cert-modal"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            <img src={selectedCert} alt="Certificate" className="cert-modal-image" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

function LetsConnect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section connect-section" id="connect" ref={ref}>
      <div className="container">
        <motion.div
          className="connect-content"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.h2 className="connect-title" variants={fadeInUp}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p className="connect-subtitle" variants={fadeInUp}>
            Interested in collaboration or just want to say hi? I&apos;d love to hear from you.
          </motion.p>

          <motion.div className="social-cards" variants={stagger}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card glass-card clickable"
                variants={scaleIn}
                whileHover={{ y: -8 }}
              >
                <div className={`social-icon social-icon-${social.icon}`}>
                  {social.icon === 'github' && (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                  {social.icon === 'linkedin' && (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                </div>
                <div className="social-info">
                  <h3 className="social-name">{social.name}</h3>
                  <p className="social-description">{social.description}</p>
                </div>
                <span className="social-arrow">→</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div className="connect-quote" variants={fadeInUp}>
            <p>&ldquo;Miles to go before I sleep.&rdquo;</p>
            <span>– Robert Frost</span>
          </motion.div>
        </motion.div>
      </div>
    </section >
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">AC</span>
          <p className="footer-tagline">Building intelligent solutions with passion and precision.</p>
        </div>
        <nav className="footer-nav">
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#connect">Contact</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ayan Chatterjee. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ============ MAIN ============

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light', !isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <main className={isDark ? 'dark' : 'light'}>
      <CustomCursor />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <WorkExperience />
      <Education />
      <TechnicalExpertise />
      <Projects />
      <Certifications />
      <LetsConnect />
      <Footer />
      <Chatbot />
    </main>
  );
}
