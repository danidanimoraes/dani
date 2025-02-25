"use client";

import * as React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.authorship}>
        <span>Feito com 🐶 por Dani</span>
        <span>Minha ilustração e design do currículo por Carol Miguel</span>
      </div>

      <div className={styles.contactList}>
        <Link
          href="https://github.com/danidanimoraes"
          target="_blank"
          className={styles.contact}
        >
          <Image
            src="/github.svg"
            alt="logo do github"
            width={30}
            height={30}
          />
          danidanimoraes
        </Link>
        <Link
          href="https://www.linkedin.com/in/danimoraes"
          target="_blank"
          className={styles.contact}
        >
          <Image
            src="/linkedin.svg"
            alt="logo do linkedin"
            width={30}
            height={30}
          />
          danimoraes
        </Link>
      </div>
    </footer>
  );
}
