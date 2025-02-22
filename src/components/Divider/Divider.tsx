import * as React from "react";
import styles from "./styles.module.scss";

export default function Divider(props: React.HTMLProps<HTMLDivElement>) {
  return <div className={styles.container} {...props} />;
}
