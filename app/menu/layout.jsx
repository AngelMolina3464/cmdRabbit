import NavBar__Static from "../components/navBar__menu";
import Craft__Table from "../components/craftTable__main";

export const metadata = {
  title: "Rabitt App",
  description: "Rabitt App, en Fase de Desarrollo",
};

export default function MenuLayout({ children }) {
  return (
    <>
      <NavBar__Static />
      <Craft__Table />
    </>
  );
}
