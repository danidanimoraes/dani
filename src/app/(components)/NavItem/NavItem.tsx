"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import * as React from "react";
import { Barriecito } from "next/font/google";
import { NavBarSize } from "../NavBar/Navbar";
import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  text: string;
  hoveredItem: string;
  size?: NavBarSize;
  straigth?: boolean;
  setHoveredItem: (href: string) => void;
};

const barriecito = Barriecito({
  variable: "--font-barriecito",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function NavItem({
  href,
  text,
  hoveredItem,
  size = "s",
  straigth = false,
  setHoveredItem,
  children,
}: React.PropsWithChildren<NavItemProps>) {
  const prefersReducedMotion = useReducedMotion();
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      onMouseEnter={() => setHoveredItem(href)}
      className={`${barriecito.variable} ${styles.linkWrapper} ${
        straigth ? styles.straigth : ""
      } ${isActive ? styles.activeLink : ""}`}
    >
      <div className={`${styles.circle} ${size === "l" ? styles.l : ""}`}>
        {children}
      </div>
      {!prefersReducedMotion && hoveredItem === href ? (
        <motion.div
          className={`${styles.hoveredCircle} ${size === "l" ? styles.l : ""}`}
          layoutId="hovered-circle"
        />
      ) : null}
      <p className={styles.navText}>{text}</p>
    </Link>
  );
}
