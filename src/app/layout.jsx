import "./globals.css";
import NavbarHeader from "./blocks/Navbar";
import Footer from "./blocks/Footer";
import { ThemeInit } from "../../.flowbite-react/init";

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
      <body>
        <ThemeInit />
        <NavbarHeader />
        <main className="flex flex-col space-y-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
