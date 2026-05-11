import { Toaster } from "@/components/ui/sonner";
import {
  fontClashGrotesk,
  fontFunnelDisplay,
  geistMono,
  geistSans,
  inter,
  syneFont,
} from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neon Anthem | Home Page",
  description:
    "Your partner for strategic ad-spend funnel, turn website visitors to paying customers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        syneFont.variable,
        fontFunnelDisplay.variable,
        fontClashGrotesk.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <Script
        id="apollo-visitor-tracking"
        strategy="afterInteractive"
      >{`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"69fb41cae667890021dc2785"})},
document.head.appendChild(o)}initApollo();`}</Script>
      <body className="select-none">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
