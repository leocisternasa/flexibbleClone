import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flexibble",
  description: "Developer Amazing Projects Window",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
