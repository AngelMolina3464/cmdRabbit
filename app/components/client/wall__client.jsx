"use client";

import { useEffect, useState } from "react";
import { arrayBuild } from "@/app/data/dataWall.js";

export default function Wall__Client() {
  const [contador, setContador] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(() => arrayBuild());
    }, 1000);
  }, []);

  return (
    <>
      <p>{contador}</p>
    </>
  );
}
