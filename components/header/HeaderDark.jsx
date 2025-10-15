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

  useEffect(() => {
    const onScroll = () => setNavbar(window.scrollY >= 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      <header className="ptf-header ptf-header--style-5">
        <div
          className={
            navbar
              ? "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--transparent ptf-navbar--white-text-on-top ptf-navbar--fixed ptf-navbar--solid"
              : "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--transparent ptf-navbar--white-text-on-top"
          }
        >
          <div className="container-xxl">
            <div className="ptf-navbar-inner">
              {/* Logo */}
              <Link className="ptf-navbar-logo" href="/" aria-label="Straat Africa home">
                {/* Show white logo on transparent, switch when solid */}
                <Image
                  width={151}
                  height={146}
                  className="black"
                  style={{ objectFit: "contain" }}
                  src="/assets/img/root/lg.webp"
                  alt="Straat Africa"
                />
                <Image
                  width={151}
                  height={146}
                  className="white"
                  style={{ objectFit: "contain" }}
                  src="/assets/img/root/lg.webp"
                  alt="Straat Africa"
                />
              </Link>

              {/* Desktop nav */}
              <nav className="ptf-nav ptf-nav--default">
                <DropdownMenu />
              </nav>

              {/* Mobile toggle (hidden on ≥992px) */}
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

      {/* Dim overlay */}
      <div
        className={`ptf-offcanvas-overlay ${isOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      />

      {/* Off-canvas */}
      <aside
        id="mobile-menu"
        className={`ptf-offcanvas-menu ptf-offcanvas-menu--dark ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
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