import NavbarHeader from "./blocks/Navbar";
import Footer from "./blocks/Footer";
import "./globals.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-inotek.svg" />
        <title>Inotek Nichiha</title>
      </head>
      <body>
        <NavbarHeader />
        <main className="flex flex-col min-h-screen space-y-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
