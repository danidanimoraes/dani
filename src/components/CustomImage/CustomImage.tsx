"use client";

import * as React from "react";
import styles from "./styles.module.scss";

export default function CustomImage(props: React.HTMLProps<HTMLImageElement>) {
  // const isDev = process.env.NODE_ENV === "development";
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
          {...props}
          src={`${isDev ? "" : "/dani/"}${props.src}`}
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
