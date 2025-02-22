"use client";

import * as React from "react";
import styles from "./styles.module.scss";

export default function CustomImage(props: React.HTMLProps<HTMLImageElement>) {
  const isProd = process.env.NODE_ENV === "production";
  const [clicked, setClicked] = React.useState(false);
  const imgRef = React.useRef(null);
  const maxWidthAltText = imgRef.current
    ? (imgRef.current as Element).getBoundingClientRect().width
    : "auto";

  return (
    <div className={styles.imgContainer}>
      <div className={styles.altContainer}>
        <img
          ref={imgRef}
          src={`${isProd ? "/dani" : ""}${props.src}`}
          {...props}
        />
        {clicked ? (
          <span
            className={styles.altText}
            style={{ maxWidth: maxWidthAltText }}
          >
            {props.alt}
          </span>
        ) : null}
      </div>
      <button
        className={`${styles.alt} ${clicked ? styles.clicked : ""}`}
        onClick={() => setClicked(!clicked)}
      >
        ALT
      </button>
    </div>
  );
}
