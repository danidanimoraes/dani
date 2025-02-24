import styles from "./styles.module.scss";
import NavBar from "@/app/(components)/NavBar/Navbar";

export default function Ppage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <header className={styles.navbarContainer}>
        <NavBar straigth={true} />
      </header>
      <div className={styles.bodyContainer}>{children}</div>
    </div>
  );
}
