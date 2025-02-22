"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import * as React from "react";
import { Barriecito } from "next/font/google";
import { NavBarSize } from "../NavBar/Navbar";
import { motion } from "motion/react";

type NavItemProps = {
  href: string;
  text: string;
  hoveredItem: string;
  size?: NavBarSize;
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
  setHoveredItem,
  children,
}: React.PropsWithChildren<NavItemProps>) {
  return (
    <Link
      href={href}
      onMouseEnter={() => setHoveredItem(href)}
      className={`${barriecito.variable}`}
    >
      <div className={styles.linkWrapper}>
        <div className={`${styles.circle} ${size === "l" ? styles.l : ""}`}>
          {children}
        </div>
        {hoveredItem === href ? (
          <motion.div
            className={`${styles.hoveredCircle} ${
              size === "l" ? styles.l : ""
            }`}
            layoutId="hovered-circle"
          />
        ) : null}
        <p className={styles.navText}>{text}</p>
      </div>
    </Link>
  );
}
