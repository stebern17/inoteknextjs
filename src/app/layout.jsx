import "./globals.css";
import NavbarHeader from "./blocks/Navbar";
import Footer from "./blocks/Footer";
import { ThemeInit } from "../../.flowbite-react/init";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Inotek Nichiha",
  description: "Distributor resmi Inotek Nichiha",
  icons: {
    icon: "/logo-inotek.svg",
    shortcut: "/logo-inotek.svg",
    apple: "/logo-inotek.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="video" href="/videos/VideoProfile.webm" />
        <link
          rel="preload"
          as="video"
          href="/videos/VideoProfilePotrait.webm"
        />
        <link rel="preload" as="image" href="/images/company profile-1.jpg" />
        <link rel="preload" as="image" href="/images/company profile-2.jpg" />
        <link rel="preload" as="image" href="/images/company profile-3.jpg" />
      </head>
      <body>
        <ThemeInit />
        <SpeedInsights />
        <NavbarHeader />
        <main className="flex flex-col space-y-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
