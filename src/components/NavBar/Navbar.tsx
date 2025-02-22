"use client";

import styles from "./styles.module.scss";
import * as React from "react";
// import code from "@/app/assets/code.png";
import NavItem from "../NavItem/NavItem";

export type NavBarSize = "s" | "l";

interface NavBarProps {
  straigth?: boolean;
  size?: NavBarSize;
}

export default function NavBar({ straigth, size }: NavBarProps) {
  const [hoveredItem, setHoveredItem] = React.useState("");

  return (
    <div
      className={`${styles.container} ${straigth ? "" : styles.notStraigth} `}
      onMouseLeave={() => setHoveredItem("")}
    >
      {LINKS.map(({ href, text, alt, img }) => {
        return (
          <NavItem
            size={size}
            key={href}
            href={href}
            text={text}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          >
            <img src={`/dani/${img}`} alt={alt} />
          </NavItem>
        );
      })}
    </div>
  );
}

const LINKS = [
  {
    href: "/about",
    text: "Sobre mim",
    img: "me.png",
    alt: "Close de rosto com olhos para cima e piercing no nariz fazendo careta",
  },
  { href: "/career", text: "Carreira", img: "code.png", alt: "Tag HTML vazia" },
  {
    href: "/areas",
    text: "Outras áreas",
    img: "banana.png",
    alt: "Banana sorrindo",
  },
  {
    href: "/contact",
    text: "Trabalhe conosco",
    img: "handshake.png",
    alt: "Aperto de mãos",
  },
];
