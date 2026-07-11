import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Han Neng — An Indie Software Studio",
    template: "%s | Han Neng",
  },
  description:
    "Building useful software, one project at a time. An indie software studio focused on AI, cybersecurity, cloud technologies, and data.",
  metadataBase: new URL("https://www.hanneng.net"),
  alternates: {
    canonical: "https://www.hanneng.net",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hanneng.net",
    siteName: "Han Neng",
    title: "Han Neng — An Indie Software Studio",
    description:
      "Building useful software, one project at a time. AI, cybersecurity, cloud technologies, and data.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Han Neng — An Indie Software Studio",
    description:
      "Building useful software, one project at a time. AI, cybersecurity, cloud technologies, and data.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Han Neng",
      url: "https://www.hanneng.net",
      jobTitle: "Indie Software Developer",
      sameAs: [
        "https://github.com/hanneng",
        "https://linkedin.com/in/hanneng",
      ],
    },
    {
      "@type": "WebSite",
      name: "Han Neng",
      url: "https://www.hanneng.net",
      description: "An Indie Software Studio",
    },
    {
      "@type": "Organization",
      name: "Han Neng",
      url: "https://www.hanneng.net",
      description:
        "An indie software studio building AI applications, cybersecurity tools, and digital products.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0B0B0C" />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
