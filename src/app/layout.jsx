import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata = {
  title: "Space Vision Lab | Smart, Durable & Functional Laboratory Furniture Solutions",
  description: "Next-generation laboratory engineering and furniture systems for schools, universities, healthcare, cleanrooms, and industrial testing facilities. Manufactured by Space Vision Lab.",
  keywords: [
    "Laboratory Furniture",
    "Lab Workstations",
    "Fume Hoods",
    "Cleanroom Pass Box",
    "Chemical Storage Cabinets",
    "Space Vision Lab",
    "Lab Design India"
  ],
  authors: [{ name: "Space Vision Lab Private Limited" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Space Vision Lab | Laboratory Furniture & Cleanroom Engineering",
    description: "Modular workstations, fume hoods, storage, cleanrooms and turnkey lab solutions.",
    url: "https://spacevisionlabs.com",
    siteName: "Space Vision Lab",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
