import "@/app/style/wallInt.css";
import { arrayBuild } from "@/app/data/dataWall.js";
import Wall__Client from "@/app/components/client/wall__client.jsx";
import Link from "next/link";

export default function Wall() {
  const modeling = arrayBuild();
  return (
    <>
      <section className="WallInt__Container">
        <div>
          <Wall__Client />
        </div>
      </section>

      <section className="WallInt__buttoner__Container">
        <Link href="/menu">Acceder</Link>
        <Link href="/contacto">Contacto</Link>
      </section>
    </>
  );
}
