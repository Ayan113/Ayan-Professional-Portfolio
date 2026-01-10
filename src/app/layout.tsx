import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayan Chatterjee | Full Stack Developer & AI/ML Engineer",
  description: "Software Engineer specializing in Full Stack Development, AI/ML, and DevOps. Building scalable applications and intelligent systems. Based in Bengaluru, India.",
  keywords: [
    "Ayan Chatterjee",
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML Engineer",
    "React",
    "Next.js",
    "Python",
    "TypeScript",
    "DevOps",
    "AWS",
    "Bengaluru"
  ],
  authors: [{ name: "Ayan Chatterjee" }],
  openGraph: {
    title: "Ayan Chatterjee | Full Stack Developer & AI/ML Engineer",
    description: "Software Engineer specializing in Full Stack Development, AI/ML, and DevOps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
