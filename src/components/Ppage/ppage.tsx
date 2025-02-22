import styles from "./styles.module.scss";
import NavBar from "@/components/NavBar/Navbar";
import home from "../../assets/home.svg";
import Link from "next/link";

export default function Ppage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("oi", home);
  return (
    <div className={styles.container}>
      <header>
        <Link className={styles.homeIcon} title="Home" href="/">
          <img src={home.src} width="80px" alt="home icon" />
        </Link>
        <div className={styles.navbarContainer}>
          <NavBar straigth={true} />
        </div>
      </header>
      <div className={styles.bodyContainer}>{children}</div>
    </div>
  );
}
