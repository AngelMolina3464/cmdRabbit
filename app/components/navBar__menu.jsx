import "@/app/style/navBar.css";
import Link from "next/link";

export default function NavBar__Static() {
  return (
    <>
      <nav className="Nav__Container">
        <ul>
          <li>
            <Link href="/">Menu Principal</Link>
            <Link href="/libreria">Libreria</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
}
