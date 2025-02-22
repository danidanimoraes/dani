import styles from "./styles.module.scss";
import NavBar from "@/components/NavBar/Navbar";
import Divider from "@/components/Divider/Divider";

export default function Ppage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <NavBar straigth={true} />
      </div>
      <Divider />
      <div className={styles.bodyContainer}>{children}</div>
    </div>
  );
}
