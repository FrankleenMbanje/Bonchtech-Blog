import type { Metadata } from "next";
import { Crimson_Pro, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BonchTech | Modern Tech Blog",
  description: "Deep dives into software development, AI, and future tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-sans transition-colors duration-300"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
