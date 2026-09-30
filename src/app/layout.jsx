import "./globals.css";

export const metadata = {
  title: "Kerala Tourism - God's Own Country | Official Travel & Holiday Portal",
  description: "Experience the magic of Kerala with handcrafted tour packages, luxury Alleppey houseboat stays, misty Munnar tea hills, authentic Ayurvedic rejuvenation retreats, and rich cultural heritage.",
  keywords: "Kerala tourism, Kerala packages, Munnar tea gardens, Alleppey houseboat, Varkala beach, Kerala Ayurveda, God's Own Country",
  openGraph: {
    title: "Kerala Tourism - God's Own Country",
    description: "Handcrafted holidays, luxury houseboats, misty hills, and authentic Ayurveda.",
    images: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#f8faf9] text-emerald-950 selection:bg-amber-400 selection:text-emerald-950">
        {children}
      </body>
    </html>
  );
}
