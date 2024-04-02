import Link from "next/link";
import Craft__Table from "./components/craftTable__main.jsx";

export default function NavBar__Static() {
  return (
    <>
      <Craft__Table>
          <h2>Error 404</h2>
          <Link href="/">Menu Principal</Link>
      </Craft__Table>
    </>
  );
}
