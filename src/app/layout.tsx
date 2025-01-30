import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import LanguageProvider from "@/components/LanguageProvider";

export const metadata = {
  title: "Asset Star Personaldienstleistungen",
  description: "Asset Star HR website with German and English translations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
