import "./globals.css";
import NavbarHeader from "./blocks/Navbar";
import Footer from "./blocks/Footer";
import { ThemeInit } from "../../.flowbite-react/init";

export const metadata = {
  title: "Inotek Nichiha | Distributor Resmi Panel Fasad Jepang di Indonesia",
  description:
    "Inotek Karya Mandiri adalah distributor resmi Nichiha di Indonesia. Menyediakan panel fasad berkualitas dari Jepang untuk hunian dan bangunan komersial.",
  keywords: [
    "Nichiha",
    "Panel Fasad",
    "Fasad Jepang",
    "Inotek",
    "Inotek Karya Mandiri",
    "Distributor Nichiha",
    "Fasad Bangunan",
    "Fasad Rumah",
  ],
  authors: [{ name: "Inotek Karya Mandiri" }],
  creator: "Inotek Karya Mandiri",
  publisher: "Inotek Karya Mandiri",
  alternates: {
    canonical: "https://inotekkaryamandiri.com/",
  },
  openGraph: {
    title: "Inotek Nichiha | Distributor Resmi Panel Fasad Jepang di Indonesia",
    description:
      "Inotek Karya Mandiri adalah distributor resmi Nichiha di Indonesia. Menyediakan panel fasad berkualitas dari Jepang untuk hunian dan bangunan komersial.",
    url: "https://inotekkaryamandiri.com/",
    siteName: "Inotek Nichiha",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/headerfootelogo.png",
        width: 1200,
        height: 630,
        alt: "Inotek Nichiha - Panel Fasad Jepang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inotek Nichiha | Distributor Resmi Panel Fasad Jepang di Indonesia",
    description:
      "Panel fasad Nichiha dari Jepang, kini hadir resmi di Indonesia bersama Inotek Karya Mandiri.",
    images: ["/headerfootelogo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FJG9TZMHWM"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FJG9TZMHWM');
      `,
          }}
        />
      </head>
      <body>
        <ThemeInit />
        <NavbarHeader />
        <main className="flex flex-col space-y-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
