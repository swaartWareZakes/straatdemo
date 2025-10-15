"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownMenu from "./menu/DropdownMenu";
import MobileMenu from "./menu/MobileMenu";

const HeaderDark = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  // Sticky header on scroll
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) setNavbar(true);
      else setNavbar(false);
    };
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "";
    }
  }, [isOpen]);

  return (
    <>
      <header className="ptf-header ptf-header--style-5 ptf-header--opaque">
        <div
          className={
            navbar
              ? "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--fixed"
              : "ptf-navbar ptf-navbar--main ptf-navbar--sticky"
          }
        >
          <div className="container-xxl">
            <div className="ptf-navbar-inner">
              {/* Logo */}
              <Link className="ptf-navbar-logo" href="/" aria-label="Straat Africa home">
                <Image
                  width={151}
                  height={146}
                  style={{ objectFit: "contain" }}
                  className="black"
                  src="/assets/img/root/lg.webp"
                  alt="Straat Africa logo"
                  loading="lazy"
                />
                <Image
                  width={151}
                  height={146}
                  style={{ objectFit: "contain" }}
                  className="white"
                  src="/assets/img/root/lg.webp"
                  alt="Straat Africa logo"
                  loading="lazy"
                />
              </Link>

              {/* Desktop nav */}
              <nav className="ptf-nav ptf-nav--default">
                <DropdownMenu />
              </nav>

              {/* Mobile toggle */}
              <button
                type="button"
                className={`ptf-offcanvas-menu-icon js-offcanvas-menu-toggle bar right ${isOpen ? "is-active" : ""}`}
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <i className={`lnir ${isOpen ? "lnir-close" : "lnir-menu-alt-5"}`}></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dark overlay (click to close) */}
      <div
        className={`ptf-offcanvas-overlay ${isOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      />

      {/* Off-canvas menu panel */}
      <aside
        id="mobile-menu"
        className={`ptf-offcanvas-menu ptf-offcanvas-menu--dark ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        {/* Header row — language switcher removed */}
        <div className="ptf-offcanvas-menu__header">
          <span
            className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle"
            onClick={toggleMenu}
            aria-label="Close menu"
            role="button"
          >
            <i className="lnir lnir-close"></i>
          </span>
        </div>

        <MobileMenu onNavigate={closeMenu} />
      </aside>
    </>
  );
};

export default HeaderDark;