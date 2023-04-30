// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        corrupti totam dolorem reprehenderit repellendus sapiente.
        Reprehenderit, quos quisquam optio ullam voluptatem magnam nulla beatae
        tempore soluta sint harum similique nisi.
      </p>
      <Link href="/ninjas">See Ninja Listing</Link>
    </>
  );
}
