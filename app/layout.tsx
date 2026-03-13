import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-roboto" });

const SITE_URL = "https://ritppune.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RITP Pune | Rajarambapu Institute of Technology Polytechnic, Lohegaon",
    template: "%s | RITP Polytechnic Pune",
  },
  description:
    "RITP Pune – Rajarambapu Institute of Technology (Polytechnic), Lohegaon, Pune. AICTE approved, MSBTE affiliated, Govt. of Maharashtra recognised. DTE Code: 6456. Diploma in Computer, Civil, Mechanical & AIML Engineering.",
  keywords: [
    "RITP",
    "RITP Pune",
    "RITP Polytechnic",
    "RITP Lohegaon",
    "RIT Polytechnic Pune",
    "Rajarambapu Institute of Technology Polytechnic",
    "Rajarambapu Polytechnic Pune",
    "polytechnic college Pune",
    "diploma college Pune",
    "MSBTE affiliated college Pune",
    "AICTE approved polytechnic Pune",
    "DTE code 6456",
    "Kasegaon Education Society polytechnic",
    "KES polytechnic Pune",
    "RITP Lohegaon Pune",
    "diploma engineering Pune",
    "computer engineering diploma Pune",
    "civil engineering diploma Pune",
    "mechanical engineering diploma Pune",
    "AIML diploma Pune",
    "polytechnic admission Pune",
  ],
  authors: [{ name: "RITP Pune", url: SITE_URL }],
  creator: "Rajarambapu Institute of Technology (Polytechnic)",
  publisher: "Kasegaon Education Society",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "RITP Pune | Rajarambapu Institute of Technology Polytechnic, Lohegaon",
    description:
      "RITP – Rajarambapu Institute of Technology (Polytechnic), Lohegaon, Pune. AICTE approved, MSBTE affiliated. DTE Code 6456. Diploma in Computer, Civil, Mechanical & AIML Engineering.",
    url: SITE_URL,
    siteName: "RITP Polytechnic Pune",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/rit-logo.jpg",
        width: 1200,
        height: 630,
        alt: "RITP – Rajarambapu Institute of Technology Polytechnic Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RITP Pune | Rajarambapu Institute of Technology Polytechnic",
    description:
      "RITP – AICTE approved, MSBTE affiliated Polytechnic in Lohegaon, Pune. DTE Code 6456.",
    images: ["/images/rit-logo.jpg"],
  },
  category: "education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: "Rajarambapu Institute of Technology (Polytechnic)",
      alternateName: ["RITP", "RITP Pune", "RIT Polytechnic Pune", "RITP Lohegaon"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/rit-logo.jpg`,
        width: 200,
        height: 200,
      },
      image: `${SITE_URL}/images/rit-logo.jpg`,
      description:
        "RITP Pune is an AICTE approved, MSBTE affiliated polytechnic institute in Lohegaon, Pune, Maharashtra. Offering diploma programmes in Computer Engineering, Civil Engineering, Mechanical Engineering, and AI & Machine Learning.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lohegaon",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411047",
        addressCountry: "IN",
      },
      telephone: "+91-020-27150096",
      email: "info@ritppune.com",
      foundingOrganization: {
        "@type": "Organization",
        name: "Kasegaon Education Society",
      },
      accreditedBy: [
        { "@type": "Organization", name: "AICTE" },
        { "@type": "Organization", name: "MSBTE" },
        { "@type": "Organization", name: "Government of Maharashtra" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Diploma Programmes",
        itemListElement: [
          { "@type": "Course", name: "Diploma in Computer Engineering", provider: { "@id": `${SITE_URL}/#organization` } },
          { "@type": "Course", name: "Diploma in Civil Engineering", provider: { "@id": `${SITE_URL}/#organization` } },
          { "@type": "Course", name: "Diploma in Mechanical Engineering", provider: { "@id": `${SITE_URL}/#organization` } },
          { "@type": "Course", name: "Diploma in AI & Machine Learning", provider: { "@id": `${SITE_URL}/#organization` } },
        ],
      },
      sameAs: [
        "https://www.ritppune.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "RITP Polytechnic Pune",
      description: "Official website of Rajarambapu Institute of Technology (Polytechnic), Lohegaon, Pune",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${roboto.variable} font-sans bg-white`}>{children}</body>
    </html>
  );
}
