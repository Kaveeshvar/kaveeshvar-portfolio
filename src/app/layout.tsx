import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorAura from "@/components/ui/CursorAura";
import ScrollProgress from "@/components/ui/ScrollProgress";


export const metadata: Metadata = {
  title: "Kaveeshvar S — Portfolio",
  description:
    "Delivery Data Analyst & Pod Lead — LLM Evaluation, Prompt Engineering, Workflow Optimization.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <ScrollProgress />
          {children}
          <Footer />
          <CursorAura />
        </ThemeProvider>
      </body>
    </html>
  );
}
