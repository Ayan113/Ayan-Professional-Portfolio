import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Manrope, Space_Grotesk } from 'next/font/google';

import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Ayan Chatterjee | AI Engineer | Generative AI & Agentic Systems',
  description:
    'AI Engineer building production-grade LLM applications, RAG systems, autonomous agents, and full stack AI products.',
  keywords: [
    'Ayan Chatterjee',
    'AI Engineer',
    'Generative AI',
    'Agentic AI',
    'RAG Pipelines',
    'LLM Engineer',
    'Full Stack AI Developer',
    'Next.js Portfolio',
    'FastAPI',
    'PyTorch',
  ],
  authors: [{ name: 'Ayan Chatterjee' }],
  creator: 'Ayan Chatterjee',
  publisher: 'Ayan Chatterjee',
  category: 'technology',
  openGraph: {
    title: 'Ayan Chatterjee | AI Engineer | Generative AI & Agentic Systems',
    description:
      'Portfolio of an AI Engineer focused on LLM products, RAG pipelines, autonomous agents, and scalable AI systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayan Chatterjee | AI Engineer | Generative AI & Agentic Systems',
    description:
      'Building end-to-end AI systems with LLMs, GenAI, RAG pipelines, and full stack product execution.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#050816',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
