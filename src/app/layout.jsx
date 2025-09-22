import "./globals.css";
import NavbarHeader from "./blocks/Navbar";
import Footer from "./blocks/Footer";

export const metadata = {
  title: "Inotek Nichiha",
  description: "Distributor resmi Inotek Nichiha",
  icons: {
    icon: "/logo-inotek.svg", // favicon utama
    shortcut: "/logo-inotek.svg",
    apple: "/logo-inotek.svg", // opsional untuk iOS
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarHeader />
        <main className="flex flex-col min-h-screen space-y-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
