import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});
const jbm = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://srmglobaltech.com"),
  title: {
    default: "SRM Global Tech Limited — Your Trusted Partner in Global Electronic Component Sourcing",
    template: "%s | SRM Global Tech Limited",
  },
  description:
    "SRM Global Tech Limited is a leading independent stocking distributor providing instant access to millions of standard, hard-to-find, and obsolete electronic components at highly competitive market prices.",
  icons: { icon: "/assets/logo-stack.png" },
  openGraph: {
    title: "SRM Global Tech Limited",
    description: "Independent stocking distributor of electronic components.",
    url: "https://srmglobaltech.com",
    siteName: "SRM Global Tech Limited",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jbm.variable}`}>
      <body>
        <TopBar />
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
