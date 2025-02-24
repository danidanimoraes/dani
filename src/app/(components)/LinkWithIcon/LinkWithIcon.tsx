"use client";

import * as React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

interface LinkWithIconProps {
  href: string;
  text: string;
}

export default function LinkWithIcon({ href, text }: LinkWithIconProps) {
  return (
    <div className={styles.container}>
      <Link href={href} target="_blank">
        {text}
      </Link>
      <Image src="/link.svg" alt="Abrir link" width={30} height={30} />
    </div>
  );
}
