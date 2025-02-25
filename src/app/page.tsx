import NavBar from "@/app/(components)/NavBar/Navbar";
import styles from "./styles.module.scss";
import * as React from "react";
import Footer from "./(components)/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navWrapper}>
        <NavBar size="l" />
      </div>
      <Footer />
    </div>
  );
}
