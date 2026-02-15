import type { Metadata } from "next";
import { Rajdhani, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import DeploymentGuardBadge from "@/components/DeploymentGuardBadge";
import { ThemeProvider } from "@/components/theme-provider";

// Distinctive Typography as per Design Skill
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "BonchTech | Agentic IT & Automation Hub",
    template: "%s | BonchTech"
  },
  description: "A live demonstration of Self-Healing Infrastructure and Agentic workflows. Explore blueprints for autonomous coding, DevOps automation, and specialized AI agents.",
  keywords: ["Agentic IT", "Self-Healing Infrastructure", "n8n automation", "DevOps", "AI Agents", "Autonomous Coding"],
  authors: [{ name: "Bonch OS" }],
  creator: "BonchTech Systems",
  metadataBase: new URL("https://bonch.tech"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bonch.tech",
    title: "BonchTech | Agentic IT & Automation Hub",
    description: "Where infrastructure heals itself. operational blueprints for the agentic age.",
    siteName: "BonchTech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BonchTech System Status"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BonchTech | The Agentic Frontier",
    description: "Live demonstration of self-healing infrastructure.",
    images: ["/og-image.jpg"],
    creator: "@bonchtech"
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${spaceMono.variable} ${inter.variable}`} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white antialiased font-sans selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-200 overflow-x-hidden transition-colors duration-300"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* ATMOSPHERE LAYERS (Dynamic) */}

          {/* 1. Grain: Lighter in light mode, more visible in dark mode */}
          <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015] dark:opacity-[0.03] mix-blend-multiply dark:mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

          {/* 2. Vignette: Subtle in light, stronger in dark */}
          <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.03)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

          {/* 3. Ambient Glows */}
          <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-200/40 dark:bg-purple-900/20 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen animate-pulse-slow transition-colors duration-500" />
          <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-200/40 dark:bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen animate-pulse-slow delayed transition-colors duration-500" />

          <div className="relative z-10 w-full mx-auto">
            {children}
          </div>
          <DeploymentGuardBadge />
        </ThemeProvider>
      </body>
    </html>
  );
}
