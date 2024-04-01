import "@/app/style/root.css";
import Header__main from "@/app/components/header__main.jsx";
import Footer_Main from "@/app/components/footer__main";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rabitt App",
  description: "Rabitt App, en Fase de Desarrollo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header__main />
        {children}
        <Footer_Main />
      </body>
    </html>
  );
}
