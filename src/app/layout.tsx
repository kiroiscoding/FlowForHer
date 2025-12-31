import type { Metadata } from "next";
import { Climate_Crisis, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RouteThemeSetter } from "@/components/RouteThemeSetter";

const climateCrisis = Climate_Crisis({
  weight: "400", // Climate Crisis usually has limited weights, often just 400 for display
  subsets: ["latin"],
  variable: "--font-climate-crisis",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-ibm-arabic",
});

export const metadata: Metadata = {
  title: "Flow for Her",
  description: "A bilingual educational platform for menstrual health in Syria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${climateCrisis.variable} ${ibmPlexSansArabic.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          <RouteThemeSetter />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
