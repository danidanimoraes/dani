import NavBar from "@/components/NavBar/Navbar";
import styles from "./styles.module.scss";
import * as React from "react";

export default function Home() {
  return (
    <div className={styles.navWrapper}>
      <NavBar size="l" />
    </div>
  );
}
