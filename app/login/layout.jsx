import { Inter } from "next/font/google";
import NavBar__Static from "../components/navBar__menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rabitt App",
  description: "Rabitt App, en Fase de Desarrollo",
};

export default function MenuLayout({ children }) {
  return (
    <>
      <NavBar__Static />
      <section className={inter.className}></section>
    </>
  );
}
