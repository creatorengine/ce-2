import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "./components/Footer/Footer";
import { FloatingNavbar } from "./components/Navbar/CustomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creator Engine",
  description:
    "Scalable, End-to-End Post Production for YouTube, Shows, Trailers, Micro-dramas, Non-fiction TV & Social Media.",
  openGraph: {
    title: "Creator Engine",
    description:
      "Scalable, End-to-End Post Production for YouTube, Shows, Trailers, Micro-dramas, Non-fiction TV & Social Media.",
    images: [
      {
        url: "/banner/linkpreview.jpg",
        alt: "Creator Engine",
      },
    ],
    url: "https://www.creatorengine.studio",
    type: "website",
  },
  keywords: [
    "post-production",
    "video editing",
    "sound design",
    "VFX",
    "color grading",
    "motion graphics",
    "Netflix",
    "Amazon Prime",
    "Disney+ Hotstar",
    "professional post-production services",
  ],

  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" href="/faviconblue.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNavbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
