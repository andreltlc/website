import { Geist, Geist_Mono } from "next/font/google";
import Header from './components/header';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "André Carvalho - Portfólio",
  keywords: ["André Carvalho", "Portfólio", "Desenvolvedor", "Web"],
  description: "Criado por André Carvalho, este é o meu portfólio pessoal onde você pode conhecer mais sobre mim e meus projetos.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
