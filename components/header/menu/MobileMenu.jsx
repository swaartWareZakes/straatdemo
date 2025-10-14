"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Social from "../../social/Social";

const MobileMenu = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Works", path: "/works" },
    { name: "Team", path: "/team" },
    // { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ul className="sidebar-menu_wrapper">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                className={pathname === item.path ? "active-page" : ""}
                href={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>Straat Africa</span>. All Rights Reserved.
        </p>
        <Social />
      </div>
    </>
  );
};

export default MobileMenu;
