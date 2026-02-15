import type { Metadata } from "next";
import { Climate_Crisis, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RouteThemeSetter } from "@/components/RouteThemeSetter";
import { absoluteUrl, getSiteUrl, SITE_NAME } from "@/lib/site";

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
  metadataBase: getSiteUrl(),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Flow for Her is a bilingual (Arabic + English) menstrual health education platform focused on Syria—supporting puberty education, period poverty awareness, dignity, and access to trusted resources.",
  icons: {
    icon: [{ url: "/FlowforherFAVICON.png", type: "image/png" }],
    apple: [{ url: "/FlowforherFAVICON.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    title: SITE_NAME,
    description:
      "Bilingual (Arabic + English) menstrual health education focused on Syria. Learn, share, and support dignity—plus resources on period poverty.",
    siteName: SITE_NAME,
    images: [
      {
        url: "/FlowforherFAVICON.png",
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description:
      "Bilingual (Arabic + English) menstrual health education focused on Syria—puberty, periods, stigma, and period poverty.",
    images: ["/FlowforherFAVICON.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: SITE_NAME,
        url: absoluteUrl("/"),
        logo: absoluteUrl("/FlowforherFAVICON.png"),
        sameAs: ["https://www.instagram.com/flow_for_her/"],
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl("/"),
        name: SITE_NAME,
        publisher: { "@id": absoluteUrl("/#organization") },
        inLanguage: ["en", "ar"],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="effd14b5-373f-42d4-bec7-c8bdfea1ed32"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
