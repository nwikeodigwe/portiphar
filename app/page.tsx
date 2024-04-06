import Image from "next/image";
import style from "./style.module.css";

export default function Home() {
  return (
    <main
      className={`${style.background} flex min-h-screen flex-col items-center justify-between p-24`}
    ></main>
  );
}
