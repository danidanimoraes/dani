import * as React from "react";
import styles from "./styles.module.scss";

export default function Tag({ children }: React.PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
