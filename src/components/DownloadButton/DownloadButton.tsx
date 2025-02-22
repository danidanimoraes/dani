"use client";

import * as React from "react";
import styles from "./styles.module.scss";

interface DownloadButtonProps {
  href: string;
  text: string;
}

export default function DownloadButton({ href, text }: DownloadButtonProps) {
  return (
    <div className={styles.container}>
      <a
        className={`${styles.downloadBtn} ${styles.btnLink}`}
        href={href}
        target="_blank"
      >
        {text}
      </a>
    </div>
  );
}
