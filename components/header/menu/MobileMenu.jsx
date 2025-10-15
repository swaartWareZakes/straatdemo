"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Social from "../../social/Social";

const MobileMenu = ({ onNavigate }) => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Works", path: "/blog-sidebar" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="ptf-offcanvas-menu__navigation">
        <ul className="sidebar-menu_wrapper">
          {menuItems.map((item, i) => {
            const active = pathname === item.path;
            return (
              <li key={i} className="mobile-nav__item">
                <Link
                  className={`mobile-nav__link ${active ? "is-active" : ""}`}
                  href={item.path}
                  onClick={onNavigate}
                >
                  <span className="mobile-nav__bullet" aria-hidden="true" />
                  <span className="mobile-nav__text">{item.name}</span>
                  <span className="mobile-nav__chevron lnil lnil-chevron-right" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* CTA + Social */}
      <div className="ptf-offcanvas-menu__footer">
        <Link
          href="/contact"
          className="mobile-nav__cta"
          onClick={onNavigate}
          aria-label="Start a campaign"
        >
          Start a Campaign
          <i className="lnil lnil-arrow-top-right" />
        </Link>

        <div className="mobile-nav__social">
          <Social />
        </div>

        <p className="ptf-offcanvas-menu__copyright">
          ©{new Date().getFullYear()} <span>Straat Africa</span>. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default MobileMenu;