import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    "Building useful software, one project at a time. Han Neng is an indie software studio focused on AI, cybersecurity, cloud technologies, and data.",
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
      "Building useful software, one project at a time. Indie software studio focused on AI, cybersecurity, cloud technologies, and data.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Han Neng — An Indie Software Studio",
    description:
      "Building useful software, one project at a time. Indie software studio focused on AI, cybersecurity, cloud technologies, and data.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Han Neng",
                "url": "https://www.hanneng.net",
                "jobTitle": "Indie Software Developer",
                "sameAs": [
                  "https://github.com/hanneng",
                  "https://linkedin.com/in/hanneng"
                ]
              }
            `,
          }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Han Neng",
                "url": "https://www.hanneng.net",
                "description": "An Indie Software Studio"
              }
            `,
          }}
          type="application/ld+json"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
