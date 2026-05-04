import {
  Funnel_Display,
  Geist,
  Geist_Mono,
  Inter,
  Syne,
} from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const fontFunnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

export const fontClashGrotesk = localFont({
  variable: "--font-clash-grotesk",
  src: "./fonts/ClashGrotesk-Variable.ttf",
  preload: true,
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const syneFont = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});
