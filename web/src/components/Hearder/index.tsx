import React, { useState } from 'react';
import Link from 'next/link';
import style from './index.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.HeaderContainer}>
      <Link href='/'>
        <span className={style.HeaderTitle}>
          Berdine<span className={style.game}>GAME</span>
        </span>
      </Link>

      {/* Hamburger menu */}
      <div
        className={`${style.HamburgerMenu} ${isMenuOpen ? style.open : ''}`}
        onClick={handleMenuToggle}
      >
        <div className={style.Line}></div>
        <div className={style.Line}></div>
        <div className={style.Line}></div>
      </div>

      {/* Menu items */}
      <ul className={`${style.HeaderList} ${isMenuOpen ? style.Open : ''}`}>
        <li>
          <Link href='#home'>
            <span className={style.ListItem}>Acceuil</span>
          </Link>
        </li>
        <li>
          <Link href='#concept'>
            <span className={style.ListItem}>Concept</span>
          </Link>
        </li>
        <li>
          <Link href='#adventure'>
            <span className={style.ListItem}>Aventure</span>
          </Link>
        </li>
        <li>
          <Link href='#teambuilder'>
            <span className={style.ListItem}>TeamBuilding</span>
          </Link>
        </li>
        <li>
          <Link href='#contact'>
            <span className={style.ListItem}>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

