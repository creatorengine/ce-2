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
  description: "Creator engine",
  openGraph: {
    title: "Professional Post-Production Services | Creator Engine",
    description:
      "We provide end-to-end post-production services for digital creators, television, streaming, and more. Check out our work with industry giants like Netflix, Amazon Prime, and Disney+ Hotstar.",
    images: [
      {
        url: "/banner/linkpreview.jpg", // Assuming this image is in the public/images folder
        alt: "Post-production services",
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
