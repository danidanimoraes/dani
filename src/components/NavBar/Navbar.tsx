"use client";

import styles from "./styles.module.scss";
import * as React from "react";
import me from "@/app/assets/me.png";
import code from "@/app/assets/code.png";
import banana from "@/app/assets/banana.png";
import handshake from "@/app/assets/handshake.png";
import Image from "next/image";
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
            <Image src={img} alt={alt} />
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
    img: me,
    alt: "Close de rosto com olhos para cima e piercing no nariz fazendo careta",
  },
  { href: "/career", text: "Carreira", img: code, alt: "Tag HTML vazia" },
  {
    href: "/areas",
    text: "Outras áreas",
    img: banana,
    alt: "Banana sorrindo",
  },
  {
    href: "/contact",
    text: "Trabalhe conosco",
    img: handshake,
    alt: "Aperto de mãos",
  },
];
