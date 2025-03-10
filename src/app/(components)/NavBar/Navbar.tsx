"use client";

import styles from "./styles.module.scss";
import * as React from "react";
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
      className={`${styles.container} ${
        straigth ? styles.straigth : styles.notStraigth
      } `}
      onMouseLeave={() => setHoveredItem("")}
    >
      {straigth ? (
        <NavItem
          size="s"
          key={HOME.href}
          href={HOME.href}
          text={HOME.text}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
          straigth={true}
        >
          <img src={HOME.img} alt={HOME.alt} />
        </NavItem>
      ) : null}
      {LINKS.map(({ href, text, alt, img }) => {
        return (
          <NavItem
            size={size}
            key={href}
            href={href}
            text={text}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
            straigth={straigth}
          >
            <img src={img} alt={alt} />
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
    img: "dani3.png",
    alt: "Rosto de mulher com cabelo metade verde e metade preto, olhando para a câmera estando levemente acima da câmera, com piercing no septo do nariz e o céu azul ao fundo",
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

const HOME = {
  href: "/",
  text: "Início",
  img: "home.svg",
  alt: "Ícone de casa",
};
