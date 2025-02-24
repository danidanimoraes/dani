import * as React from "react";
import styles from "./styles.module.scss";

export default function MDXContainer({
  children,
  ...props
}: React.PropsWithChildren) {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
}
