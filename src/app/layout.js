import "./globals.css";
import  Header  from "@/components/layout/Header.jsx";

export const metadata = {
  title: "Humaira Foundation",
  description:
    "A community initiative by Norsom ImpoEx, supporting people and communities where we do business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body className="bg-cream font-sans text-ink-text antialiased">
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
